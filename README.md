# 🐉 Dragon News

A modern, fully responsive digital news platform built with **React 19**, featuring dark/light mode, Firebase authentication, and category-based news browsing.

---

## 🚀 Live Demo

> Deploy URL goes here [https://hellofirstlove-news.web.app]

---

## 📸 Features

- 📰 **Category-based news feed** — Browse All News, Breaking News, Sports, Technology, Politics & more
- 🔐 **Firebase Authentication** — Email/password login & registration with protected routes
- 🌙 **Dark / Light Mode** — Toggle persists via `localStorage`
- 📱 **Fully Mobile Responsive** — Hamburger menu with category browser, scroll-to-top button
- 🔴 **Live Breaking News Marquee** — Scrolling headline ticker at the top
- 👤 **About Page** — Team, mission, stats, and awards
- 💼 **Career Page** — Open job listings with apply section
- 🔒 **Private Routes** — News detail page requires login

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | v19.2 | UI Library |
| [React Router](https://reactrouter.com/) | v7.18 | Client-side routing & data loading |
| [Tailwind CSS](https://tailwindcss.com/) | v4.3 | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | v5.7 | Component library & theming (light/dark) |
| [Firebase](https://firebase.google.com/) | v12.18 | Authentication (Email/Password) |
| [React Icons](https://react-icons.github.io/) | v5.7 | Icon library |
| [React Fast Marquee](https://www.react-fast-marquee.com/) | v1.6 | Scrolling news ticker |
| [date-fns](https://date-fns.org/) | v4.4 | Date formatting |
| [Vite](https://vitejs.dev/) | v8.2 | Build tool & dev server |

---

## 📁 Project Structure

```
dragon-news/
├── public/
│   ├── news.json           # Static news data
│   └── categories.json     # News categories
├── src/
│   ├── assets/             # Logo, icons, images
│   ├── Component/
│   │   ├── Pages/          # Home, About, Career, Login, Register, NewsDetails, CategoryNews
│   │   ├── HomeLayout/     # LeftSide, RightSide, SocialLogin, FindUs, Qzone, RightDown
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx      # Responsive navbar with dark mode toggle
│   │   ├── NewsCard.jsx
│   │   ├── NewsDetailsCard.jsx
│   │   ├── LatestNews.jsx  # Scrolling marquee
│   │   ├── ScrollToTop.jsx # Floating scroll-to-top button
│   │   └── Loading.jsx
│   ├── Firebase/
│   │   └── firebase.config.js
│   ├── Layouts/
│   │   ├── HomeLayout.jsx  # Main 3-column layout (collapses on mobile)
│   │   └── AuthLayout.jsx
│   ├── provider/
│   │   ├── AuthProvider.jsx  # Firebase auth context
│   │   └── PrivateRoute.jsx  # Protected route wrapper
│   └── route/
│       └── Router.jsx        # All app routes
├── index.html
├── index.css               # DaisyUI theme config (light + dark)
└── package.json
```

---

## 🔑 Firebase Authentication

This project uses **Firebase Authentication** with email & password sign-in.

### Setup

1. Create a project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Email/Password** authentication under *Authentication → Sign-in method*
3. Copy your Firebase config and create a `.env.local` file:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

4. The config is loaded in `src/Firebase/firebase.config.js`

---

## 🧭 Routes

| Path | Page | Protected |
|---|---|---|
| `/` | Home (redirects to `/category/1`) | ❌ |
| `/category/:id` | Category News Feed | ❌ |
| `/about` | About Dragon News | ❌ |
| `/career` | Careers Page | ❌ |
| `/auth/login` | Login | ❌ |
| `/auth/register` | Register | ❌ |
| `/news-details/:id` | Full News Article | ✅ Login required |

---

## 🎨 Theming (DaisyUI v5)

Two custom themes are defined in `src/index.css` using DaisyUI's `@plugin` system:

- **Light** — White backgrounds, dark text, red secondary
- **Dark** — Navy blue backgrounds, light text, same accent palette

The active theme is stored in `localStorage` under the key `dn-theme` and applied via `data-theme` on the `<html>` element.

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/dragon-news.git
cd dragon-news

# Install dependencies
npm install

# Add your Firebase config to .env.local (see above)

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📦 Key NPM Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run oxlint |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ using React, Tailwind CSS, DaisyUI & Firebase

###   HELLO FIRST LOVE    
