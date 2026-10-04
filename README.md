# Syed Mohd Fasih Naqvi — Portfolio

A personal portfolio for my work across software engineering, AI, and machine learning. It presents selected projects, my education and skills, certificates, and ways to get in touch.

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

The app can be deployed as a static Vite site on Vercel's free tier:

1. Import this GitHub repository into Vercel.
2. Keep the framework preset as **Vite**.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy.

No environment variables are required for the portfolio itself.

## Links

- GitHub: [fasihnaqvi738](https://github.com/fasihnaqvi738)
- Portfolio repository: [Portfolio](https://github.com/fasihnaqvi738/Portfolio)
