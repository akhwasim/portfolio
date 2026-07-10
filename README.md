<div align="center">

# Portfolio

> My personal portfolio and research notes site.
> Built with plain HTML, CSS, and a small Node.js build script - no frameworks, no bundler.

**Live →** [wasimakhtar.com](https://wasimakhtar.com)

<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

</div>

---

## What this site is about

This portfolio is built around three things:

### Projects

My work that shows how I approach problems. The centerpiece is [Luna](https://github.com/akhwasim/luna), an AI-powered terminal that remembers commands, learns workflows, and applies safety checks before execution. Built in Rust, designed to be local-first and user-controlled.

### Research notes

An ongoing collection of ideas and questions I'm exploring. Currently includes [Adaptive Computing](research/adaptive-computing.html), a long-term exploration into systems that learn from their users and adapt over time, while staying transparent and under the user's control.

### About

Background on who I am, what drives the work, and what kind of opportunities I'm seeking (internships and research roles in systems software, developer tools, or AI).

---

## How the site works

The homepage is a single HTML file (`index.html`) with all sections — hero, about, projects, research, skills, and contact. No framework, no build step for the main page.

Research entries live in `research-data.js` and are generated into individual pages by a small Node.js build script. This keeps research content in one place while producing clean, shareable URLs for each topic.

---

## Updating content

### Research entries

Edit `research-data.js` — this is the only file to touch. Each entry is a JS object with fields for title, status, summary, and full text sections. After editing, run `node build.js` to regenerate the pages.

### Projects and homepage

Edit `index.html` directly. Project cards are inside the `#projects` section. Each card has a summary and an expandable detail section.

---

## Deploying

The site is deployed on Netlify. Every push to `main` triggers an automatic build and deploy — no manual steps needed. The `netlify.toml` configures the build command (`node build.js`) and publish directory.

---

## License

MIT — feel free to use the structure, but please replace all personal content with your own.
