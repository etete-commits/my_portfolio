# Ryan Etete – Personal Portfolio

A personal portfolio website built with HTML, CSS and JavaScript.
This is the final version for **CSN 1101: Web Technologies and Internet Applications – Assignment 3 (Live Data & Production Polish)**, KCA University.

## Live Links

- **GitHub Pages:** https://etete-commits.github.io/my_portfolio/
- **Vercel:** <PASTE YOUR VERCEL URL HERE>

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home page: about me, featured project, contact details |
| `projects.html` | Projects, live GitHub repositories, skills, services, contact form |
| `shop.html` | Shop project |
| `styles.css` | All site styling |
| `script.js` | Project filter, contact form validation, GitHub API integration |
| `images/` | Compressed images used on the site |

## Assignment 3 Work

### 1. Live API Integration (Week 11)

The Projects page uses the **GitHub REST API** and the Fetch API to list my public repositories automatically:

`https://api.github.com/users/etete-commits/repos`

- **Loading state:** the page shows "Loading repositories…" while the request is in progress.
- **Rendering:** the returned JSON is turned into a card for each repository (name, description, language, stars and last-updated date). Forked repositories are filtered out so only my own work is shown.
- **Error handling:** if the request fails (network error or a non-OK response such as a rate limit), a friendly message is shown instead of a broken page.
- No API key is needed for this endpoint.

### 2. Security Review (Week 12)

- **No secrets exposed:** the API used needs no key or token, and no keys, tokens or passwords are present in the client-side code.
- **Safe DOM insertion:** all dynamic content (form error messages, the thank-you message that includes the user's name, and the data from the API) is inserted with `textContent` and `createElement`. The code does not use `innerHTML`, `outerHTML` or `insertAdjacentHTML`.
- **External links** use `rel="noopener"` (or `noopener noreferrer`) with `target="_blank"`.
- **HTTPS:** confirmed (padlock shown) on both the GitHub Pages and Vercel deployments.

### 3. Performance Pass (Week 13)

- All images were resized to the size they are displayed at and compressed with Squoosh.
- `loading="lazy"` was added to below-the-fold images (project thumbnails). The headshot at the top of the page is not lazy-loaded, so it appears quickly.
- `width` and `height` attributes were added to images to prevent layout shift.

**Image sizes**

| Image | Before | After |
|---|---|---|
| Headshot (`pfp.jpg`) | <XX KB/MB> | <XX KB> |
| Shop screenshot (`shop.webp`) | <XX KB/MB> | <XX KB> |

**Lighthouse Performance score** (Chrome DevTools, incognito window, Mobile)

| | Score |
|---|---|
| Before optimisation | **<XX>** |
| After optimisation | **<XX>** |

Main changes that affected the score: compressed and resized images, lazy loading for thumbnails, and image dimensions to prevent layout shift.

## Running Locally

1. Clone the repository: `git clone https://github.com/etete-commits/my_portfolio.git`
2. Open `index.html` in a browser. No build step or installs are needed.

## Technologies

HTML5, CSS3 (custom properties, grid, flexbox), JavaScript (ES6, Fetch API, async/await), GitHub Pages, Vercel.

## Author

Ryan Etete – [GitHub](https://github.com/etete-commits)
