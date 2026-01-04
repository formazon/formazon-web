# Formazon.com — Personal Product & Design Portfolio

This repository contains the source code for **formazon.com**,  
the personal website and portfolio of **Farid Rafikov** — a product founder and designer working across mobile apps, AI platforms, and robotics-driven systems.

The site showcases projects such as **TRA Robotics**, **Jungle**, **AppForType**, **Fuelet**, **Explyt**, and **Esprito**.  
It is built with **Next.js**, **React**, and **Tailwind CSS**, and deployed on **Vercel**.

---

## Getting Started

First, run the development server:

```bash
npm run dev
```

---

## 📦 Package Updates

To check and update package versions:

```bash
# Проверка обновлений (безопасно, ничего не меняет)
npm outdated

# Обновление всех пакетов до последних версий (согласно semver в package.json)
npm update

# Или принудительное обновление до последних версий (может сломать совместимость)
npx npm-check-updates -u
npm install
```

---

## 🚀 Tech Stack

The site is built using modern, stable, production-ready tools:

- **Next.js** 16.1.1 (App Router)
- **React** 19.2.3
- **TypeScript** ^5
- **Tailwind CSS** ^4
- **ESLint** ^9
- **lucide-react** ^0.562.0
- **next-themes** ^0.4.6
- **Vercel** for hosting and CI/CD

---

## 📁 Project Structure

```text
src/
  app/
    page.tsx              # Home
    work/                 # Work index + case pages
    services/
    about/
    journal/
      [slug]/
    contact/
    layout.tsx
  components/
    ui/
    layout/
    home/
  lib/
  content/
    work/
    journal/
  styles/
