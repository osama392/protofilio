# ✈️ Personal Portfolio — The Explorer's Journey
### Osama Al-Sa'odi — Cybersecurity Solutions Developer & SOC Analyst

A responsive, travel-themed personal portfolio website inspired by **The Secret Life of Walter Mitty**.

Built from scratch using **pure HTML5, CSS3, and JavaScript ES6+** — zero frameworks, templates, or UI libraries (no Bootstrap, Tailwind, or WordPress).

---

## 🌍 Live Sections

| Section | Description |
|---|---|
| **Hero** | Boarding pass greeting with Walter Mitty's motto |
| **About Me** | Boarding-pass styled card with profile photo, B.Sc. TTU & Erasmus+ Czechia exchange |
| **Skills** | Airport Boarding Screen (FIDS) matrix displaying all capabilities, flight codes, and live statuses |
| **Certifications** | Accredited flight licenses: YGA (U.S. Embassy), Cisco Junior Cyber Analyst, Security+, Cyber Associate, Python, Risk Management, AI |
| **Projects** | Airline tickets for VisionVoice Security Capstone, Cloud Security research, and Anomaly Detection |
| **Travels** | 17 explored country passport stamps (Czechia, Germany, Spain, France, Italy, Switzerland, UAE, etc.) |
| **Volunteering** | Community missions & leadership: IPOS Team, IEEE Student Branch, Erasmus+ HERE, IEEEXtreme, Nahno |
| **Hobbies** | Off-duty adventures (Traveling, Photography, CTF Challenges, Reading, etc.) |
| **Contact** | Postcard-styled contact form with native HTML5 validation |
| **Footer** | Social and direct contact links |

---

## ⚡ Mandatory JavaScript Feature: Complete Event Lifecycle

The required theme switcher (`#themeToggle`) follows the exact 4-stage browser event lifecycle:

```
[1. User Action]
       │  (User clicks the "#themeToggle" button)
       ▼
[2. Event Firing]
       │  (Browser event loop fires a "click" MouseEvent on the DOM element)
       ▼
[3. JavaScript Callback]
       │  (The callback attached via addEventListener('click', function) executes)
       ▼
[4. DOM/CSS Mutation]
          - document.body.classList.toggle('dark-mode') mutates the DOM tree
          - CSS Custom Properties (--bg-primary, --text-primary, etc.) instantly recompute
          - themeToggleBtn.textContent updates to display the corresponding mode icon
```

---

## 🎨 Features & Architecture

- **Theme Switcher** — Smooth day/night mode toggle with CSS custom properties
- **Responsive Layout** — Pure Flexbox architecture with media queries for phones, tablets, and desktops
- **Semantic HTML5** — Strict use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` without generic `div` soup
- **Accessible (a11y)** — Descriptive `alt` attributes, `aria-label`, explicit `for`/`id` labels for all inputs
- **Travel Aesthetic** — Custom boarding pass ticket notches, perforated dotted boundaries, and rotating circular passport stamps

---

## 📁 File Structure

```
ex00/
├── index.html      # Main HTML document
├── style.css       # Complete styling, CSS variables, and media queries
├── script.js       # Theme switcher, mobile menu, and form logic
├── assets/
│   └── profile.jpg # Profile photo
└── README.md       # Project documentation & Event Lifecycle explanation
```

---

## 🚀 How to Run

```bash
# Clone the repository
git clone git@github.com:osama392/discovery-web-piscine.git

# Navigate to the portfolio
cd discovery-web-piscine/ex00

# Open in browser (Windows)
start index.html
```

---

## ✍️ Author

**Osama Al-Sa'odi**  
- **GitHub:** [@osama392](https://github.com/osama392)  
- **Email:** issam.saodi@gmail.com  
- **Phone:** +962 770 441 541  
- **Location:** Amman, Jordan  

> *"To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other, and to feel."*
