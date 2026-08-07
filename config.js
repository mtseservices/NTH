/**
 * NATURAL TASTE HAI — SITE CONFIGURATION
 * -----------------------------------------------------------
 * Edit anything in this file to update the whole website.
 * You do NOT need to touch index.html or the other JS files
 * to change contact numbers, address, email or the admin code.
 * -----------------------------------------------------------
 */

const SITE_CONFIG = {
  brandName: "Natural Taste Hai",
  brandShort: "NTH",
  tagline: "Purity You Can Taste, Quality You Can Trust",

  // Two WhatsApp numbers — each gets its own button + wa.me link.
  whatsapp: [
    { label: "Sales & Orders", number: "923271777296", display: "+92 327 1777296" },
    { label: "Distributor Enquiries", number: "923462807144", display: "+92 346 2807144" }
  ],

  phoneDisplay: "+92 327 1777296",
  email: "nthfood@gmail.com",
  address: "2km Lyallpur Gallaria II, Samundari Road, Faisalabad, Pakistan",
  mapQuery: "Lyallpur Galleria II, Samundari Road, Faisalabad",

  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { days: "Sunday", time: "10:00 AM – 4:00 PM" }
  ],

  // Passcode to unlock "Manage Products" (add/edit/delete). Change any time.
  adminPasscode: "NTH2026",

  // Stock footage used for hero / about sections (see /assets/videos/README.txt
  // to replace these with your own branded footage — just drop a file with the
  // same name into /assets/videos/ and the site will use it automatically).
  video: {
    hero: {
      local: "assets/videos/hero-pour.mp4",
      remote: "https://videos.pexels.com/video-files/7458243/7458243-hd_1920_1080_25fps.mp4",
      credit: "Stock footage: Yegor / Pexels (free license)"
    },
    about: {
      local: "assets/videos/about-pour.mp4",
      remote: "https://videos.pexels.com/video-files/6739355/6739355-hd_1920_1080_24fps.mp4",
      credit: "Stock footage: Joshua Malic / Pexels (free license)"
    },
    sauce: {
      local: "assets/videos/sauce-pour.mp4",
      remote: "https://videos.pexels.com/video-files/7185518/7185518-hd_1920_1080_25fps.mp4",
      credit: "Stock footage: Stefano Patacchiola / Pexels (free license)"
    },
    jam: {
      local: "assets/videos/jam-spread.mp4",
      remote: "https://videos.pexels.com/video-files/8107378/8107378-uhd_2732_1440_25fps.mp4",
      credit: "Stock footage: MART PRODUCTION / Pexels (free license)"
    },
    almonds: {
      local: "assets/videos/almonds-fall.mp4",
      remote: "https://videos.pexels.com/video-files/4211316/4211316-hd_1920_1080_24fps.mp4",
      credit: "Stock footage: K / Pexels (free license)"
    },
    spices: {
      local: "assets/videos/spices-burst.mp4",
      remote: "https://videos.pexels.com/video-files/16044309/16044309-uhd_2560_1440_30fps.mp4",
      credit: "Stock footage: TREEDEO.ST / Pexels (free license)"
    }
  },

  certifications: [
    { code: "ISO 22000", desc: "Food Safety Management System" },
    { code: "HACCP", desc: "Hazard Analysis & Critical Control Points" },
    { code: "HALAL", desc: "Certified Halal Sourcing & Processing" },
    { code: "PSQCA", desc: "Pakistan Standards & Quality Control Authority" }
  ],

  stats: [
    { value: 100, suffix: "+", label: "Tons Processed / Day" },
    { value: 9, suffix: "", label: "Signature Products" },
    { value: 30, suffix: "+", label: "Cities Served" },
    { value: 4, suffix: "", label: "Global Certifications" }
  ],

  timeline: [
    { year: "Year 1", text: "Founded in Faisalabad with a single vision — pure, honest food." },
    { year: "Year 2", text: "Faisalabad processing plant commissioned with European aseptic lines." },
    { year: "Year 3", text: "ISO 22000, HACCP & HALAL certifications awarded." },
    { year: "Today", text: "A trusted NTH shelf in 30+ cities across Pakistan and growing." }
  ]
};
