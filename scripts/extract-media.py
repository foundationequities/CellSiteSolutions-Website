#!/usr/bin/env python3
"""Scan a mirrored WordPress page for hero/section media: background videos,
background images, Matterport embeds, YouTube/Vimeo iframes, and Elementor
entrance animations. Output a compact manifest for rebuild fidelity."""
import re, sys, html, json

def scan(path):
    s = open(path, encoding="utf-8", errors="ignore").read()
    out = {}

    # Background videos from Elementor data-settings
    vids = []
    for m in re.finditer(r'data-settings="([^"]*background_video_link[^"]*)"', s):
        st = html.unescape(m.group(1)).replace("\\/", "/")
        link = re.search(r'"background_video_link":"([^"]+)"', st)
        start = re.search(r'"background_video_start":(\d+)', st)
        end = re.search(r'"background_video_end":(\d+)', st)
        if link:
            vids.append({"link": link.group(1),
                         "start": start.group(1) if start else None,
                         "end": end.group(1) if end else None})
    if vids: out["bg_videos"] = vids

    # Matterport
    mp = sorted(set(re.findall(r'https?://my\.matterport\.com/show/\?m=[A-Za-z0-9]+[^"\' <)]*', s)))
    if mp: out["matterport"] = mp

    # YouTube ids (embeds/links, excluding channel url)
    yt = sorted(set(re.findall(r'(?:youtube(?:-nocookie)?\.com/(?:embed/|watch\?v=)|youtu\.be/)([A-Za-z0-9_-]{11})', s)))
    if yt: out["youtube"] = yt

    # Vimeo ids
    vm = sorted(set(re.findall(r'vimeo\.com/(?:video/)?(\d{6,12})', s)))
    if vm: out["vimeo"] = vm

    # Hero/section background images from the wpr-bg custom props (lazy bg images)
    bgs = sorted(set(re.findall(r"url\('?(https?://cellsitesolutions\.com/wp-content/uploads/[^')]+)'?\)", s)))
    bgs = [re.sub(r'.*?/wp-content', '/wp-content', b) for b in bgs
           if not re.search(r'(texture-mask|Icon|icon|youtube\.png)', b)]
    if bgs: out["bg_images"] = bgs[:8]

    # Entrance animations used
    anims = sorted(set(re.findall(r'"_?animation(?:_[a-z]+)?":"([a-zA-Z]+)"', s)))
    anims = [a for a in anims if a not in ("none", "")]
    if anims: out["animations"] = anims[:6]

    # Rev slider present?
    if 'rs-module' in s or 'revslider' in s.lower() and 'rs6.css' in s:
        if re.search(r'<rs-module|rs-slides', s): out["revslider"] = True

    return out

if __name__ == "__main__":
    print(json.dumps(scan(sys.argv[1]), indent=1))
