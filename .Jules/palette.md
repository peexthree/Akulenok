## 2025-02-13 - Added ARIA labels to social media links in footer
**Learning:** Icon-only anchor tags (`<a>`) without nested text need `aria-label`s to be accessible to screen reader users, especially in Russian language UI where labels such as `Позвонить` are culturally appropriate for phone links.
**Action:** Always check social icon link components like those in headers/footers for missing `aria-label` attributes across different projects.
