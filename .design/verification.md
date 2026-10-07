# Local verification — October 7, 2026

The Codex browser loaded all 20 live Seated dates. Ticket destinations and accessible event labels remain supplied by Seated. The merch destination opened the current Sun Room store. Tour/contact anchors, keyboard activation, and visible keyboard focus worked.

Checked layouts at 1280, 768, 390, and 320 CSS pixels. The live table fits without page overflow at 320 and 390 pixels. Long venue names wrap beside the ticket action. The supplied photo and exported transparent logo load successfully.

Local, ignored fixtures verified the native no-upcoming-events state and a failed widget script. The failure message provides a retry button and show-alert link; retry reloads the page. The loading message remains until Seated supplies events or an empty-state message.

JavaScript syntax (`node --check js/site.js`), local HTML asset references, and `git diff --check` passed. A temporary Node VM check also passed loading, ready, widget reset, timeout, retry, and late recovery transitions. No console errors were recorded on the live preview. Blue/cream text contrast is 5.98:1. Reduced-motion behavior is defined in CSS.

The refinement pass removed navigation/contact/ticket arrows, the hero bottom strip, the Upcoming shows subtitle, Seated's follow and powered-by elements, and the footer Back to top link. The live DOM contains all 20 dates, no follow box or powered-by text, and no ticket pseudo-element arrow. The simplified ticket buttons fit at 320 CSS pixels without page overflow.

The tour typography pass replaces ticket boxes with underlined links, emphasizes cities and day/month, and reduces year/region prominence. Checked the 20 live rows at 1280, 768, 390, and 320 CSS pixels. All dates have complete accessible labels and ISO `time` values; Seated's ticket URLs and event-specific accessible labels remain intact. Long cities and the 2027 venue names wrap without horizontal overflow. Every ticket target is at least 44 pixels tall. Keyboard Tab advances to the next ticket link and its visible focus outline is present. JavaScript syntax and whitespace checks passed; the browser reported no console errors. Unrecognized date formats retain their original Seated text.

The balance correction replaces oversized day numerals with a single month/day/year line (22px month/day on desktop, 15px on phones). Cities use the site's Arial display family; ticket links are 14px and upright. Tighter rows and phone date-above-city composition were visually checked at 1280, 768, and 320px. The phone layout has no horizontal overflow, and the date's ISO value remains correct after removing the display-only leading zero.

The palette flip was reverted before staging publication: tour uses cream with blue text; contact/footer use blue with cream text and the original cream logo. Desktop year remains beneath the date; mobile year remains inline. Venue/details spacing is one pixel, with tighter line heights.

Browser zoom shortcuts did not change zoom in the available browser, so actual 200% zoom was not verified. No screen-reader test was performed. External Seated availability remains a runtime dependency. The staging branch is the Cloudflare Pages review target.
