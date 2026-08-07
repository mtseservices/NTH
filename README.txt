HOW TO ADD YOUR OWN VIDEOS
===========================

Right now the website streams two temporary stock video clips
(free-license, from Pexels) so the site looks fully "alive" out of
the box: a juice-pour clip behind the homepage hero, and a second
one in the "About" and "Behind The Seal" sections.

To replace them with your OWN branded videos (recommended before
going live), just drop your files into this folder using these
EXACT names — the website will automatically use your local file
first, with no code changes needed:

  assets/videos/hero-pour.mp4     -> used in the homepage hero background
  assets/videos/about-pour.mp4    -> used in the About + Gallery sections

Tips:
- Keep each file under ~15MB so the site still loads fast on mobile.
- Landscape orientation, 10-20 seconds, looping smoothly works best.
- MP4 (H.264) format is the safest choice for all browsers.
- No sound is needed — the hero/about videos autoplay muted.

If you ever want to change WHICH online stock video is used as the
fallback (for visitors before you upload your own), edit the
"video" section inside /js/config.js.
