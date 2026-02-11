# AI Coding Instructions for dsom-website

## Project Overview
A Vue 3 + Vite research center website displaying university research departments in Chinese. Single-page application with two main views: a research center listing and detailed center information pages.

## Architecture & Key Patterns

### Stack
- **Vue 3** (with `<script setup>` syntax) + **Vue Router 4** for SPA navigation
- **Vite** dev server on port 3000, configured via [vite.config.js](vite.config.js)
- CSS scoped by component; no CSS framework (vanilla CSS in [style.css](src/style.css))

### Data Flow
1. **Data Source**: [research.js](src/data/research.js) exports `researchCenters` array—single source of truth containing all research center metadata (title, description, members, projects, achievements, facilities, etc.)
2. **Route Structure**: Two routes defined in [router/index.js](src/router/index.js):
   - `/` → [ResearchList.vue](src/views/ResearchList.vue) - displays grid of center cards
   - `/detail/:id` → [ResearchDetail.vue](src/views/ResearchDetail.vue) - shows full center details
3. **Navigation**: Use `useRouter()` and `router.push()` for programmatic navigation; pass center `id` parameter to detail route

### Component Conventions
- **List View** ([ResearchList.vue](src/views/ResearchList.vue)): 
  - Imports `researchCenters` from data file
  - Grid layout with card components (no separate card component—inline HTML)
  - Click handler on button calls `goToDetail(id)` to navigate
- **Detail View** ([ResearchDetail.vue](src/views/ResearchDetail.vue)):
  - Lookup center by route param via `$route.params.id`
  - Sidebar layout: main content (intro, research areas, achievements, facilities) + right sidebar (info card, contact card)
  - Back button navigates to list using `goBack()` helper

### Styling
- **Global**: Minimal reset in [style.css](src/style.css)
- **Component-scoped**: Each `.vue` file uses `<style scoped>` for isolated styles
- **Gradients & colors**: Hero section uses CSS gradients (e.g., `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`)
- **Layout**: Flexbox/grid for responsive card layouts (no Tailwind or utility classes)

## Critical Developer Workflows

### Development
```bash
npm run dev        # Starts Vite on http://localhost:3000
npm run build      # Builds for production (output: dist/)
npm run preview    # Preview production build locally
```

### Adding New Research Centers
1. Add entry to `researchCenters` array in [research.js](src/data/research.js)
2. Ensure object includes all required fields: `id`, `title`, `subtitle`, `description`, `image`, `tags`, `director`, `members`, `projects`, `established`, `contact`, `address`, `achievements`, `facilities`, `researchAreas`
3. List and Detail views will automatically render new center (no component changes needed)

### Adding New Routes
1. Define route in [router/index.js](src/router/index.js) routes array
2. Import component and add to routes with `path`, `name`, `component`
3. Use `router.push()` to navigate with route name or path

## Project-Specific Conventions
- **Language**: Content is in Simplified Chinese—maintain when adding text
- **Icons/Emojis**: Used in detail view (🏆, 🔬, 📧, 📍) for visual hierarchy—keep consistent style
- **Image handling**: External Unsplash URLs in data; all images use `:src="center.image"` binding
- **Bilingual titles**: Centers have both Chinese title + English subtitle; preserve both when modifying
- **Contact info**: Separate email and address fields in sidebar—don't combine into single string

## File Structure Summary
```
src/
  main.js           # App initialization, mounts router + App.vue
  App.vue           # Root component with <router-view>
  style.css         # Global styles
  data/research.js  # Research centers data array (single source of truth)
  router/index.js   # Route definitions
  views/
    ResearchList.vue    # List view with grid cards
    ResearchDetail.vue  # Detail view with sidebar layout
```

## Common Tasks
- **Modify center data**: Edit [research.js](src/data/research.js) array
- **Update list styling**: Edit `.grid`, `.card` classes in [ResearchList.vue](src/views/ResearchList.vue)
- **Update detail styling**: Edit `.content-wrapper`, `.sidebar`, `.section` classes in [ResearchDetail.vue](src/views/ResearchDetail.vue)
- **Change routes**: Edit routes array in [router/index.js](src/router/index.js)
- **Add new view**: Create `.vue` file in `src/views/`, import in `router/index.js`, add to routes
