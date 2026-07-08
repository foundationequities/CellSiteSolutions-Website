/**
 * All background/tour video sources in one place. BgVideo (and PageHero/CtaBand
 * via it) accept any of: YouTube URLs, Vimeo URLs (incl. unlisted /hash form),
 * or direct .mp4 URLs — so swapping a source here is the ONLY change needed.
 *
 * The two mp4s below still stream from the live WordPress host (196MB/253MB —
 * too large for the repo). NO Vercel Blob is required: upload each clip to the
 * company YouTube channel (unlisted is fine) and replace the mp4 URL here with
 * the youtu.be link. Everything else keeps working unchanged.
 */

/** Facility virtual tour (YouTube) — homepage/about/shelters tour bands. */
export const FACILITY_TOUR_YT = "https://youtu.be/UlecVkYXJGY";

/** Homepage hero background (Vimeo). */
export const HOME_HERO_VIMEO = "https://vimeo.com/1036146605";

/** Shelters page hero background (unlisted Vimeo). */
export const SHELTERS_HERO_VIMEO = "https://vimeo.com/1022303808/65aac9a261";

/** Datacomm Pro Series videos (YouTube). */
export const DATACOMM_HERO_YT = "https://www.youtube.com/watch?v=YA3MnKXqLCg";
export const DATACOMM_TOUR_YT = "https://www.youtube.com/watch?v=uH4lnFjXmHo";
export const DATACOMM_ULTRA_YT = "https://youtu.be/aEjGLW68VIY";

/** Matterport 3D shelter walkthrough. */
export const MATTERPORT_TOUR = "https://my.matterport.com/show/?m=15QDm9hsrxq&play=1";

/** Civil construction header video — mp4 on the live WP host for now (see above). */
export const CIVIL_HEADER_VIDEO =
  "https://cellsitesolutions.com/wp-content/uploads/2024/10/Civil-Construction-Header-Video.mp4";

/** Shelter remanufacturing timelapse — mp4 on the live WP host for now (see above). */
export const SHELTER_TIMELAPSE_VIDEO =
  "https://cellsitesolutions.com/wp-content/uploads/2024/10/Timelapse-Shelter-Shorter-Version.mp4";
