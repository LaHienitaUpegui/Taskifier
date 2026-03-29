---
name: react-best-practices
description: Enforce React and TypeScript best practices following industry standards
---

# React Best Practices Skill

## Overview

This skill ensures React code follows best practices for maintainability, performance, and readability.

## Component Guidelines

### Functional Components
- Use functional components with hooks exclusively
- Avoid class components

### Naming
- Components: PascalCase (`TaskList.tsx`, `TaskItem.tsx`)
- Hooks: camelCase starting with `use` (`useState`, `useCustomHook.ts`)
- Constants: UPPER_SNAKE_CASE for truly global constants
- Files: Match component name (e.g., `TaskList.tsx` + `TaskList.css`)

### Component Structure
```typescript
// Order: imports → types → component → exports
import { useState, useEffect } from 'react';
import type { Task } from './types';
import TaskItem from './TaskItem';
import './TaskList.css';

interface TaskListProps {
  tasks: Task[];
  onComplete: (id: string) => void;
}

export default function TaskList({ tasks, onComplete }: TaskListProps) {
  const [filter, setFilter] = useState<'all' | 'pending' | 'done'>('all');

  const filteredTasks = tasks.filter(task => 
    filter === 'all' ? true : 
    filter === 'pending' ? !task.completed : 
    task.completed
  );

  return (
    <ul className="task-list">
      {filteredTasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onComplete={onComplete} 
        />
      ))}
    </ul>
  );
}
```

## Hooks Best Practices

1. **Extract custom hooks** for reusable logic (prefix with `use`)
2. **Keep hooks simple** - one responsibility per hook
3. **Use dependency arrays correctly** in `useEffect`
4. **Prefer `useReducer`** for complex state logic

```typescript
// Good: Custom hook
function useTaskFilter(tasks: Task[]) {
  const [filter, setFilter] = useState<'all' | 'pending' | 'done'>('all');
  
  const filteredTasks = useMemo(() => 
    tasks.filter(task => /* filter logic */),
    [tasks, filter]
  );
  
  return { filter, setFilter, filteredTasks };
}
```

## TypeScript Guidelines

### Type Definitions
- Use `interface` for object shapes
- Use `type` for unions, primitives, and tuples
- Avoid `any` - use `unknown` when type is truly unknown

```typescript
// Good
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

type TaskStatus = 'pending' | 'in-progress' | 'done';

// Avoid
type Task = any;
```

### Props
- Define explicit prop types with interfaces
- Make props optional only when sensible
- Use `readonly` for props that shouldn't be mutated

## Performance

1. **Memoize expensive computations** with `useMemo`
2. **Memoize callbacks** with `useCallback` when passing to child components
3. **Use React.memo** for expensive components
4. **Avoid inline functions** in JSX when possible

```typescript
const handleSubmit = useCallback((data: FormData) => {
  submitForm(data);
}, [submitForm]);

const MemoizedItem = React.memo(function TaskItem({ task, onClick }: TaskItemProps) {
  return <li onClick={() => onClick(task.id)}>{task.title}</li>;
});
```

## State Management

1. **Local state**: Use `useState` for component-specific state
2. **Shared state**: Use React Context
3. **Server state**: Consider React Query or similar (future)
4. **Avoid prop drilling** - use composition or context

## CSS & Styling

1. **Co-locate styles**: `.css` next to `.tsx`
2. **Use CSS Modules** or BEM naming
3. **CSS custom properties** for theme values
4. **Keep styles modular**

## Anti-Patterns to Avoid

| Anti-Pattern | Better Approach |
| ------------ | --------------- |
| `any` types | `unknown` or proper types |
| Inline functions in render | `useCallback` |
| Mutating state directly | Immutability patterns |
| Large components | Split into smaller components |
| Prop drilling | Context or composition |
| `useEffect` for everything | Derived state with `useMemo` |

## Code Review Checklist

When reviewing React code, verify:
- [ ] Components are functional with hooks
- [ ] Types are explicit (no `any`)
- [ ] Custom hooks extracted for reusable logic
- [ ] Dependencies in useEffect are correct
- [ ] Performance optimizations where needed
- [ ] Styles co-located with components
- [ ] No unnecessary re-renders
- [ ] Accessibility considerations
