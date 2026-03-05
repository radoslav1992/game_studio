# DuckMath

A fun gaming portal where you can play 100+ games for free, built with [Astro](https://astro.build/).

**Live site:** [duckmath.org](https://duckmath.org/)

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (static site generation)
- **Styling:** Scoped CSS with CSS custom properties
- **Fonts:** Inter, Space Grotesk (Google Fonts)
- **Flash:** [Ruffle](https://ruffle.rs/) emulator for Flash games
- **Analytics:** Google Analytics
- **Hosting:** GitHub Pages

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type check
npx astro check

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   └── GameCard.astro
├── data/             # Game data and configuration
│   ├── games.ts      # Game catalog (titles, categories, icons)
│   └── gameSources.ts # Game iframe/flash source URLs
├── layouts/          # Page layouts
│   ├── BaseLayout.astro  # Base HTML layout with nav + footer
│   └── GameLayout.astro  # Layout for individual game pages
└── pages/            # File-based routing
    ├── index.astro       # Homepage
    ├── 404.astro         # Error page
    ├── about.astro
    ├── changelog.astro
    ├── leaderboard.astro
    ├── games/
    │   ├── index.astro       # Games catalog with search & filters
    │   ├── [...slug].astro   # Dynamic game pages (generated from data)
    │   └── minecraft/        # Minecraft hub + sub-pages
    └── more/
        ├── unblockers.astro
        ├── chat.astro
        ├── game-requests.astro
        ├── proxies/          # Proxy pages
        └── virtual-machines/ # VM pages
```

## Adding a New Game

1. Add a game entry to `src/data/games.ts` with title, category, icon, and route
2. Add the game source URL to `src/data/gameSources.ts`
3. The dynamic `[...slug].astro` route auto-generates the page

## Credits

- Code written by [Maddox](https://github.com/maddox05)
- [Joe](https://www.instagram.com/parada.joseph/) for advertising and support
- [Divij](https://github.com/Divij-Agarwal-42) for front end contributions

## License

[Apache 2.0](LICENSE)
