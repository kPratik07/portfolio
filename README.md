# Pratik Raj | Portfolio

A responsive personal portfolio built with React and TypeScript. It presents my experience, skills, technology stack, selected projects, and contact details in a polished single-page layout.

## Features

- Responsive navigation with smooth scrolling to every section
- Hero section with profile summary, code card, stats, and technology highlights
- About section with portrait card and professional highlights
- Skills and technology stack sections with responsive cards
- Project cards with screenshots, technology tags, GitHub links, and live demos
- Contact form connected to Formspree
- Client-side validation for required fields and email format
- Protection against common disposable email domains
- Responsive footer with profile image, navigation links, social links, and back-to-top control
- Custom favicon and portfolio branding using the logo asset in `public/assets`

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Create React App / `react-scripts`
- Font Awesome
- Formspree

## Project Structure

```text
portfolio/
├── public/
│   ├── assets/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Carousel.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── TechStacks.tsx
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

## Contact Form

The contact form submits to Formspree after the visitor completes all required fields. The email field checks format and rejects common disposable email domains before submission.

## Links

- GitHub: https://github.com/kPratik07
- LinkedIn: https://www.linkedin.com/in/pratik-raj-dev07/
