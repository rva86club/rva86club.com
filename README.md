# RVA 86 Club Website Starter v2

Static website starter for GitHub Pages or Cloudflare Pages.

## What is included

- Home
- About
- Calendar
- Event Submissions
- Gallery
- Merch
- Contact for Collaborations
- Dark Toyota Gazoo Racing-inspired direction: black, white, subtle red accenting
- Responsive mobile navigation
- Smooth hover states and scroll animations
- Google Calendar embeds using the public RVA 86 Club calendar
- Real social links for Instagram, Instagram group chat, Facebook, and Discord
- Gasket Ninja sponsor block
- Placeholder gallery cards using club photos

## Quick local preview

1. Extract the ZIP.
2. Open the extracted `rva86club-site` folder.
3. Double-click `index.html`.
4. Keep `index.html`, `styles.css`, `script.js`, and the `assets` folder together.

## GitHub Pages setup

1. Create a GitHub account if needed.
2. Create a new repository called `rva86club-site`.
3. Upload all files from this folder into the repository.
4. Go to Settings → Pages.
5. Set the source to deploy from the main branch.
6. Add your custom domain: `rva86club.com`.
7. Point the domain DNS to GitHub Pages using GitHub's custom domain instructions.

The included `CNAME` file already contains `rva86club.com`.

## Things to replace later

- Printful storefront link in `merch.html`
- Event idea submission form link in `event-submissions.html`
- Additional gallery pages/photo albums
- More sponsors or partner cards
- Any final homepage hero photo if you want a different one


## Contact form note

The contact form uses a `mailto:` email draft so the site can stay free on GitHub Pages. It opens the visitor's email app with the message filled out. To send messages directly from the website without opening an email app, connect a free/low-cost form service later, such as Formspree, Basin, Tally, or Google Forms.


Merch storefront: https://rva86club.printful.me/


## Quick copy editing guide

You can edit most website wording directly in the `.html` files.

### Which file controls each page

- `index.html` = Home
- `about.html` = About
- `calendar.html` = Calendar
- `event-submissions.html` = Event Submissions
- `gallery.html` = Gallery
- `merch.html` = Merch
- `contact.html` = Contact

### What text is safe to edit

You can safely change normal text between tags, like this:

```html
<h1>CALENDAR.</h1>
<p>Upcoming RVA 86 Club meets, cruises, and event announcements in one place.</p>
```

For a quick edit, only change the words between the opening tag and closing tag. For example:

```html
<p>Put your new sentence here.</p>
```

Do not delete the angle brackets or the tag names unless you mean to change the layout.

### Common text tags

- `<h1>...</h1>` = big page title
- `<h2>...</h2>` = section title
- `<h3>...</h3>` = card title
- `<p>...</p>` = paragraph
- `<small>...</small>` = small label above a card title
- `<a href="...">Button or link text</a>` = link or button

### Editing links

For links, the destination is inside `href=""`, and the visible text is between the tags:

```html
<a class="btn primary" href="https://rva86club.printful.me/" target="_blank" rel="noopener">Shop RVA 86 Club</a>
```

To change where it goes, edit the URL inside `href=""`.
To change what the button says, edit the text before `</a>`.

### Editing photos

Photos are usually inside an image tag:

```html
<img src="assets/photos/hero-skyline.jpg" alt="RVA 86 Club cars lined up">
```

To replace a photo, put the new image in the same folder and change the filename inside `src=""`.
Keep filenames simple, like `blue-ridge-cruise.jpg`, with no weird symbols.

### How to preview changes

Double-click `index.html` to open the site in your browser. After editing a file, save it and refresh the browser.

If something suddenly looks broken, undo the last edit and check that every tag still has both parts, like `<p>` and `</p>`.


## Restoring the merchandise page

The public `merch.html` page is currently a coming-soon teaser.

The original working storefront page is preserved as:

`merch-live.html`

When the Printful store is ready, replace `merch.html` with a copy of `merch-live.html`.
