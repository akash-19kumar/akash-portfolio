# Akash Kumar - Portfolio

A premium, modern, fully responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## 🎨 Design Features

- **Glassmorphism UI** with frosted transparent panels
- **Aurora gradient backgrounds** with animated blobs
- **Smooth 60 FPS animations** using Framer Motion
- **Custom cursor** with glow effect
- **Scroll-triggered reveals** and parallax effects
- **Magnetic buttons** and tilt cards
- **Typing effect** and animated counters
- **Floating particles** background

## 🛠 Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Icons
- EmailJS (contact form)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Certificates.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── CustomCursor.jsx
│   ├── ScrollProgress.jsx
│   ├── FloatingParticles.jsx
│   ├── MagneticButton.jsx
│   ├── TiltCard.jsx
│   └── AnimatedCounter.jsx
├── hooks/
│   ├── useMousePosition.js
│   └── useScrollReveal.js
├── data/
│   └── portfolioData.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/akashkumar/akash-portfolio.git
cd akash-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Customization

All personal data is centralized in `src/data/portfolioData.js`. Edit this file to update:

- Name, title, and bio
- Profile image URL
- Social media links
- Skills and proficiency levels
- Projects with images and links
- Education history
- Certificates
- Experience and achievements

## 📧 EmailJS Setup

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the Contact component with your:
   - Service ID
   - Template ID
   - Public Key

## 🚀 Deployment (GitHub Pages)

```bash
# The project is pre-configured for GitHub Pages
# Update package.json homepage and vite.config.js base URL

# Deploy
npm run deploy
```

## 📄 License

MIT License
