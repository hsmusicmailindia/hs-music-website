# HS MUSIC Academy website

A responsive, static multi-page website for **HS MUSIC Academy, Prayagraj**. It is built with HTML5, CSS3, Bootstrap 5.3 and vanilla ES6 JavaScript, with GSAP, AOS, Swiper and GLightbox loaded from trusted CDNs.

## Pages

- `index.html` — home
- `about.html` — Academy story and values
- `courses.html` — singing, guitar, piano and dance programmes
- `gallery.html` — filterable lightbox gallery
- `events.html` — event calendar
- `faculty.html` — Academy faculty
- `reviews.html` — student and parent testimonials
- `contact.html` — enquiry form and Google Map

## Local preview

Open the project folder with any static web server, then visit `index.html`. For example, VS Code Live Server, Netlify Drop, GitHub Pages, Vercel, and standard shared hosting all work without a build step.

## Before publishing

The site has no personally supplied contact details. Replace each occurrence of `919000000000` in the HTML files with the Academy's live WhatsApp number in international format (without `+` or spaces). Add the correct social media URLs in place of the `#` links.

The contact form has client-side validation and a success state for the static demo. Connect it to the preferred form service or backend before collecting enquiries. The canonical URLs, `robots.txt`, and `sitemap.xml` currently use `https://hsmusic.in`; update all three if the live domain differs.

## Production notes

- The design is mobile-first and includes keyboard-accessible controls, semantic structure, descriptive image alt text, metadata, canonical URLs, a web app manifest and sitemap.
- The home page includes `MusicSchool` structured data for richer local search eligibility. Add the Academy's verified phone number, opening hours and social profiles to that JSON-LD block when available.
- The image treatment uses remote Unsplash assets for the demo. For the best production performance and rights control, replace these with Academy-owned compressed WebP/AVIF images in `assets/images/`.
- All shared presentation and interaction code lives in `assets/css/style.css`, `assets/css/responsive.css`, and `assets/js/script.js`.
