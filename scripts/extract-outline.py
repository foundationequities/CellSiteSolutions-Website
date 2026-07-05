#!/usr/bin/env python3
"""Extract an ordered content outline (headings, paragraphs, images, buttons)
from a mirrored WordPress page, for use when rebuilding it as a React page."""
import re, html, sys
from html.parser import HTMLParser


def outline(path):
    src = open(path, encoding="utf-8", errors="ignore").read()
    m = re.search(r'data-elementor-type="wp-page"', src) or re.search(
        r'data-elementor-type="wp-post"', src
    )
    body = src[src.rfind("<div", 0, m.start()):] if m else src

    class P(HTMLParser):
        def __init__(s):
            super().__init__(convert_charrefs=True)
            s.o = []; s.sk = 0; s.buf = []; s.cur = None

        def handle_starttag(s, t, a):
            d = dict(a)
            if t in ("script", "style", "svg", "noscript"):
                s.sk += 1
            if t == "img":
                im = d.get("src") or d.get("data-src") or d.get("data-lazy-src") or ""
                if im and "data:image" not in im and ".svg" not in im:
                    s.o.append(("IMG", d.get("alt", ""), im))
            if t in ("h1", "h2", "h3", "h4"):
                s.f(); s.cur = t.upper()
            if t == "a" and (
                "elementor-button" in d.get("class", "")
                or "sc_button" in d.get("class", "")
            ):
                s.cur = "BTN"

        def handle_endtag(s, t):
            if t in ("script", "style", "svg", "noscript") and s.sk > 0:
                s.sk -= 1
            if t in ("h1", "h2", "h3", "h4", "a", "p", "div", "span", "li"):
                s.f()

        def handle_data(s, data):
            if s.sk:
                return
            data = data.strip()
            if data:
                s.buf.append(data)

        def f(s):
            if s.buf:
                txt = html.unescape(" ".join(s.buf)).strip()
                if len(txt) > 1:
                    s.o.append((s.cur or "TXT", txt))
            s.buf = []; s.cur = None

    p = P()
    try:
        p.feed(body); p.f()
    except Exception:
        pass
    out = []; seen = set(); last = None
    for it in p.o:
        if it[0] == "IMG":
            rel = re.sub(r".*/wp-content", "/wp-content", it[2])
            rel = re.sub(r"-\d+x\d+(\.\w+)$", r"\1", rel)
            if rel in seen:
                continue
            seen.add(rel)
            out.append(f"[IMG {it[1]!r}] {rel}")
        else:
            tag, txt = it
            if txt == last:
                continue
            last = txt
            out.append(f"{tag}: {txt}")
    return "\n".join(out)


if __name__ == "__main__":
    print(outline(sys.argv[1]))
