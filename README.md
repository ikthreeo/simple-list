# A Simple List
A simple list for daily tasks. No fancy productivity tools required.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## TO-DO List
🏗️ Project Setup

 - [x] Initialize SvelteKit project with Svelte 5
 - [x] Set up folder structure
 - [x] Install required dependencies
 - [ ] Set up global CSS and styling system

📋 Core Task Functionality

 - [ ] Create Task data model/schema
 - [x] Set up state management with Svelte 5 runes
 - [ ] Build TaskItem component
 - [ ] Build TaskList container component
 - [ ] Build TaskForm for adding Tasks
 - [ ] Implement localStorage persistence
 - [ ] Add form validation

✏️ CRUD Operations

 - [x] Create: Add new Tasks
 - [x] Read: Display Tasks in list
 - [ ] Update: Edit existing Tasks
 - [x] Delete: Remove Tasks

⌨️ Keyboard Navigation

 - [ ] Arrow key navigation (up/down)
 - [ ] Enter key to edit selected Task
 - [ ] Space key to toggle completion
 - [ ] Delete key to remove selected Task
 - [ ] Escape key to cancel operations
 - [ ] Tab navigation between UI elements
 - [ ] Focus management and visual indicators

🎨 Animations & Transitions

 - [ ] Slide transitions for adding/removing Tasks
 - [ ] Fade transitions for modals and overlays
 - [ ] Bounce animation for completed Tasks
 - [ ] Smooth keyboard navigation animations
 - [ ] Loading states and micro-interactions

🎯 UI Components

 - [ ] Input field component
 - [ ] Task component 

🔧 Utilities & Helpers

 - [ ] Keyboard event handlers
 - [ ] Local storage utilities
 - [ ] Form validation functions

🎨 Styling & Design

 - [ ] CSS custom properties (variables)
 - [ ] Responsive design
 - [ ] Dark/light theme support
 - [ ] Accessibility styles (focus, contrast)

📱 Enhanced Features

 - [ ] Priority levels
 - [ ] Bulk operations (select multiple)
 - [ ] Drag and drop reordering

🚀 Deployment & Documentation

 - [ ] Build optimization
 - [ ] Deploy to hosting platform
 - [ ] Write comprehensive README
 - [ ] Add screenshots/demos

🐛 Bug Fixes & Polish

 - [ ] Loading states
 - [ ] Empty states
 - [ ] Form submission handling