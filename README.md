# Gaurav </> Premium Full-Stack Portfolio

A premium, modern, responsive, full-stack personal portfolio website for **Gaurav** — positioned as a **Data Analyst, Data Quality Analyst, and Web Developer**.

## What is included

- React.js + Vite frontend
- Premium dark/light theme toggle
- Framer Motion animations
- Three.js / React Three Fiber animated hero section
- Project cards and project detail pages
- Certificate library with single certificates and course bundles
- Contact form with validation
- Node.js + Express.js backend
- SQLite database for contact inquiries
- SQL schema and seed files
- Resume folder
- Certificate folders
- Project screenshot folders
- Beginner-friendly documentation

## Main folders

```txt
frontend/   React portfolio website
backend/    Express API + SQLite contact form backend
docs/       Guides and Hinglish deep explanation files
```

## Quick local setup

Open two terminals.

### Terminal 1: Backend

```bash
cd backend
npm install
cp .env.example .env
npm run init-db
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

### Terminal 2: Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

## Contact form database

Contact submissions are saved in:

```txt
backend/database/portfolio.sqlite
```

Table name:

```txt
inquiries
```

You can view data using **DB Browser for SQLite** or terminal:

```bash
sqlite3 backend/database/portfolio.sqlite
SELECT * FROM inquiries;
```

## Future updates

Update most portfolio content from these files:

```txt
frontend/src/data/personalInfo.js
frontend/src/data/socialLinks.js
frontend/src/data/skills.js
frontend/src/data/education.js
frontend/src/data/experience.js
frontend/src/data/projects.js
frontend/src/data/certificates.js
frontend/src/data/achievements.js
```

Read the docs folder carefully before editing.
