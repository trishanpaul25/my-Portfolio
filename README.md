# My Portfolio

A modern, dark-themed personal portfolio website built with pure HTML, CSS, and JavaScript — no frameworks or dependencies.

## File Structure

```
my-portfolio/
├── index.html      # Main HTML structure
├── style.css       # All styles and animations
├── script.js       # Cursor, scroll reveal, nav effects
├── README.md
├── LICENSE
└── .gitignore
```

## Features

- Responsive design (mobile + desktop)
- Custom animated cursor with trailing ring
- Scroll-triggered reveal animations
- Animated marquee ticker
- Sections: Hero, Services, Work, Process, Testimonials, About, CTA
- Zero dependencies — pure HTML/CSS/JS

## Getting Started

Open `index.html` in your browser — that's it.

## Deploy

- **GitHub Pages** — push to `main`, go to repo Settings → Pages → Branch: main
- **Netlify** — drag & drop the folder at netlify.com/drop
- **Vercel** — connect the repo at vercel.com

## Customization

| File | What to edit |
|------|-------------|
| `index.html` | Name, bio, services, work items, testimonials, contact email |
| `style.css` | Colors (edit `:root` variables), fonts, spacing |
| `script.js` | Animation timing, cursor behavior |

### Change accent color
In `style.css`, find `:root` and update:
```css
--accent: #c8b89a;   /* main gold */
--accent2: #e8dcc8;  /* hover/light gold */
```

## License

MIT © trishanpaul25
