# Atul Sinha — Portfolio Website

A modern, responsive personal portfolio built with **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🗂 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav with active section detection
│   │   ├── Hero.jsx         # Animated hero section
│   │   ├── About.jsx        # About me with code card
│   │   ├── Skills.jsx       # Filterable skill cards
│   │   ├── Projects.jsx     # Project showcase cards
│   │   ├── Education.jsx    # Timeline education section
│   │   ├── Contact.jsx      # Contact form + social links
│   │   └── Footer.jsx       # Professional footer
│   ├── data/
│   │   └── portfolioData.js ← ✏️  EDIT THIS FILE to update content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ Updating Content

All portfolio content lives in **`src/data/portfolioData.js`**. Edit this file to update:

- Your name, role, tagline
- Contact links (email, LinkedIn, GitHub)
- Resume URL
- About paragraphs
- Skills list
- Projects (URLs, descriptions, tech stack)
- Education details

---

## 🚀 Getting Started Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

---

## 🌐 Deploying to Vercel

### Option 1: Via Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (run from the project root)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name: atul-portfolio (or any name)
# - Directory: ./
# - Override settings? No
```

Your site will be live at `https://your-project-name.vercel.app`.

### Option 2: Via Vercel Dashboard (Easiest)

1. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub

3. Select your repository → Deploy

Vercel auto-detects Vite and sets up the build correctly.

---

## 🔧 Customization Checklist

- [ ] Update `resumeUrl` in `portfolioData.js` with your actual Google Drive / Notion link
- [ ] Update `liveUrl` and `githubUrl` for the ATS Resume Gap Analyzer project
- [ ] Add your profile photo (optional — replace the `AS` initials card in `About.jsx`)
- [ ] Add more projects to `portfolioData.js` as you build them
- [ ] Connect the contact form to [EmailJS](https://emailjs.com) or a backend for real submissions

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19 | UI library |
| Vite | ^6 | Build tool |
| Tailwind CSS | ^4 | Styling |
| Framer Motion | ^12 | Animations |
| Google Fonts | Inter + JetBrains Mono | Typography |

---

## 📄 License

MIT — feel free to fork and customize for your own portfolio!
