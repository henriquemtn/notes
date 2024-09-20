# Notes

Notes is a project and task management application, designed to offer a simple and efficient interface for controlling notes. It allows you to create and organize notes quickly, focusing on practicality to improve productivity.

## Features

* 🔐 Authentication using Clerk
* 📊 Real-time backend and database powered by Convex.dev
* 🖼️ Upload images using Edge Store
* 📝 Create and edit notes using BlockNote editor
* 🙂 Emojis using Emoji Picker React
* 🌲 Create hierarchies of notes
* 🗑️ Archive, restore, and delete notes
* 📢 Publish notes to share with others
* ⬅️ Adjustable sidebar
* ✨ Responsive UI and light/dark mode built with Tailwind and shadcn/ui

## Getting Started

### Clone the repo

```bash
git clone https://github.com/henriquemtn/notes.git
```

### Install dependencies

```bash
npm install
```

### Setup .env file

```env
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### Start Convex

```bash
npx convex dev
```

### Start the app

```bash
npm run dev
```

### Credit

Created by following along with [AntonioErdeljac/notion-clone-tutorial](https://github.com/AntonioErdeljac/notion-clone-tutorial).
