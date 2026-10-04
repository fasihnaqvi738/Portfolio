# Syed Mohd Fasih Naqvi — Portfolio

A personal portfolio for my work across software engineering, AI, and machine learning. It presents selected projects, my education and skills, certificates, and ways to get in touch.

**Live portfolio:** [fasihnaqvi.web.app](https://fasihnaqvi.web.app/)

## Built with

- React and TypeScript
- Vite
- Tailwind CSS and custom CSS
- Framer Motion
- Lucide React

The site is a frontend-only application. Portfolio content is stored locally in the repository; it does not require a backend, database, or paid service.

## Run locally

Requires Node.js and npm.

```bash
git clone https://github.com/fasihnaqvi738/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Build

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Updating portfolio content

- **Projects:** Add or edit project objects in `src/data/site.ts`. Each project can include its descriptions, category, technologies, highlights, repository URL, optional live URL, and artwork type.
- **Skills and education:** Edit the `skillGroups` and `education` data in `src/data/site.ts`.
- **Certifications:** Add or edit entries in `src/data/certifications.ts`.
- **Profile links and contact details:** Update the `profile` object in `src/data/site.ts`.
- **Resume:** Replace `public/resume.pdf` with the current resume, keeping the same filename, or update `resumeUrl` in the profile data.

Project cards are rendered from the project data rather than being written individually in the UI.

## Deployment

The portfolio is deployed at [https://fasihnaqvi.web.app/](https://fasihnaqvi.web.app/). To generate the static production files locally, run `npm run build`; Vite writes them to `dist/`.

## Links

- GitHub: [fasihnaqvi738](https://github.com/fasihnaqvi738)
- Portfolio repository: [Portfolio](https://github.com/fasihnaqvi738/Portfolio)
- Live website: [fasihnaqvi.web.app](https://fasihnaqvi.web.app/)
