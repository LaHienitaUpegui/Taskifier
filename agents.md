# Taskifier - Project Guidelines

## Project Overview

**Taskifier** is a task management application built with React, TypeScript, and Vite.

## Tech Stack

- **Framework**: React 19.2.4
- **Language**: TypeScript 5.9.3
- **Bundler**: Vite 8.0.1
- **Linting**: ESLint 9.39.4 with TypeScript-ESLint and React Hooks plugins
- **CSS**: Plain CSS with CSS Modules (`.css` files co-located with components)

## Project Structure

```
taskifier/
├── src/                  # Application source code
│   ├── main.tsx          # Application entry point
│   ├── App.tsx           # Root component
│   ├── App.css           # App-level styles
│   ├── index.css         # Global styles
│   └── assets/           # Static assets
├── public/               # Public static assets
├── index.html            # HTML entry point
├── package.json
├── tsconfig.json         # TypeScript base config
├── tsconfig.app.json     # TypeScript app config
├── tsconfig.node.json    # TypeScript node config
├── vite.config.ts
└── eslint.config.js
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## Code Conventions

### TypeScript

- Strict mode enabled (`"strict": true`)
- `noUnusedLocals: true` - No unused local variables
- `noUnusedParameters: true` - No unused function parameters
- `verbatimModuleSyntax: true` - Explicit type imports required
- Use `interface` for object types; `type` for unions/primitives
- Avoid `any` - use `unknown` when type is truly unknown

### React

- Use functional components with hooks
- Prefer composition over prop drilling
- Co-locate component styles (`.css` next to `.tsx`)
- Use `useState` for local state, consider context for shared state
- Components should be PascalCase: `TaskList.tsx`, `TaskItem.tsx`

### File Naming

- Components: `PascalCase.tsx` or `PascalCase.ts`
- Utilities/hooks: `camelCase.ts` or `camelCase.ts`
- Styles: Match the component name, e.g., `TaskList.css`

### ESLint Rules

- React Hooks rules enforced (recommended preset)
- React Refresh enabled for HMR compatibility
- TypeScript recommended rules enabled

## Styling Guidelines

- Use CSS custom properties for theme values
- Follow BEM-like naming for complex components
- Keep styles modular and component-scoped

## Import Conventions

```typescript
// React core
import { useState, useEffect } from 'react';

// Components
import TaskList from './components/TaskList';

// Utilities
import { formatDate } from './utils/date';

// Types
import type { Task } from './types';
```

## State Management

- Use React Context for global state when needed
- Local component state for UI-specific state
- Consider React Query or similar for server state (if added later)

## Testing

- Test files should be co-located: `TaskList.test.tsx` next to `TaskList.tsx`
- Use Vitest for unit tests (if configured)
- Use Testing Library for component tests (if configured)

## Git Workflow

- Branch naming: `feature/task-name`, `fix/bug-description`
- Commit messages: Clear, concise descriptions of changes
- PR title format: `type: description` (e.g., `feat: add task list component`)
