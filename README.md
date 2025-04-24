# React Posting Website

A modern React app for posting, searching, and viewing posts, built with Vite.

## Features
- **Add new posts** instantly, with new posts appearing at the top of the list.
- **Edit posts** inline with a user-friendly form.
- **Instant navigation**: No loading delay when navigating between the post list and details.
- **Persistent storage**: Posts are saved to `localStorage` for seamless experience across reloads.
- **Search bar**: Filter posts in real time by title.
- **Responsive UI**: Clean, card-based design with clear separation between form and post list.

## How It Works
- Posts are fetched from the JSONPlaceholder API on first load, then stored and managed locally.
- All post changes (add/edit) are reflected instantly in the UI and persisted in the browser.
- Navigation between the posts list and details is optimized for speed and UX.

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ayshillu/React_PostingWebsite.git
   cd React_PostingWebsite
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the app locally:**
   ```sh
   npm run dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Folder Structure
- `src/components/` — Contains `PostList`, `NewPostForm`, and related CSS.
- `src/pages/` — Contains the `PostDetails` page.
- `src/App.jsx` — Main app logic and state management.

## Future Enhancements
- Delete posts
- Add more fields to posts
- User feedback for actions

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
