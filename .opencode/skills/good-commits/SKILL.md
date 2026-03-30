---
name: good-commits
description: Generate well-structured, meaningful commit messages following industry best practices
user-invocable: true
---

# Good Commit Messages Skill

## Overview

This skill helps generate well-structured, meaningful commit messages following industry best practices.

## Commit Message Format

```
<type>: <subject>

[optional body]

[optional footer]
```

## Commit Types

| Type       | Description                                      |
| ---------- | ------------------------------------------------ |
| `feat`     | New feature                                      |
| `fix`      | Bug fix                                          |
| `docs`     | Documentation changes                            |
| `style`    | Code style changes (formatting, semicolons, etc) |
| `refactor` | Code refactoring without changing functionality  |
| `perf`     | Performance improvements                         |
| `test`     | Adding or updating tests                         |
| `chore`    | Maintenance tasks (dependencies, build configs)  |
| `ci`       | CI/CD changes                                    |
| `revert`   | Reverting a previous commit                      |

## Rules

1. **One commit per file or logical group**
    - Create separate commits for each file or related set of changes
    - This keeps the commit history clean and changes atomic
    - Group tightly coupled changes together (e.g., component + its styles)

2. **Subject line**
    - Limit to 50 characters
    - Use imperative mood ("add" not "added" or "adds")
    - No period at the end
    - Start with lowercase

3. **Body (REQUIRED)**
    - Wrap at 72 characters
    - Explain _what_ and _why_, not _how_
    - Separate paragraphs with blank lines
    - Every commit MUST have a clear, concise description explaining what was done

4. **Footer (optional)**
    - Reference issues: `Closes #123`
    - Breaking changes: `BREAKING CHANGE: ...`

## Workflow

When the user asks to create a commit:

1. Run `git status` to see untracked/changed files
2. Run `git diff` to review changes
3. Run `git log --oneline -10` to see recent commit style
4. Analyze changes and determine appropriate type(s)
5. Draft a concise, descriptive commit message
6. Present the message to the user for confirmation before committing

## Examples

**Good:**

```
feat: add user authentication with JWT tokens

Implemented login and signup endpoints with bcrypt password
hashing. Tokens expire after 24 hours.

Closes #42
```

**Bad:**

```
fixed stuff
```
