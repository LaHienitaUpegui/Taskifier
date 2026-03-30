---
name: good-prs
description: Generate well-structured, meaningful pull requests following industry best practices
user-invocable: true
---

# Good Pull Requests Skill

## Overview

This skill helps generate well-structured, meaningful pull requests following industry best practices.

## PR Title Format

```
<type>: <description>
```

Use the same commit types as for commits: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `revert`.

## PR Description Format

```
## Summary

<1-3 bullet points explaining what was done>

## Changes

- <file/component>: <what changed>

## Testing

<how to test the changes>
```

## Rules

1. **Title**
    - Keep it concise (under 72 characters)
    - Use imperative mood
    - Match the PR purpose clearly

2. **Body (REQUIRED)**
    - Explain _what_ and _why_, not _how_
    - Include summary bullets (1-3 max)
    - List specific files/components changed
    - Explain how to test the changes

3. **Links**
    - Reference related issues: `Closes #123`, `Fixes #456`
    - Link to any relevant documentation

4. **Review**
    - Ensure all commits are cohesive and follow good commit message style
    - Verify changes are atomic and logical

## Workflow

When the user asks to create a PR:

1. Run `git status` to see current branch and uncommitted changes
2. Run `git diff --staged` to review staged changes
3. Run `git log <base-branch>..HEAD` to see all commits in the branch
4. Analyze the changes and determine appropriate type
5. Draft a PR title and description following the format above
6. Create the branch if needed and push with `-u` flag
7. Create the PR using `gh pr create`
8. Present the PR URL to the user

## Examples

**Good:**

```
feat: add user authentication with JWT tokens

## Summary

- Implemented login and signup endpoints
- Added JWT token generation with 24-hour expiry
- Integrated bcrypt for password hashing

## Changes

- src/auth/login.ts: Added login endpoint
- src/auth/signup.ts: Added signup endpoint  
- src/utils/token.ts: JWT token generation

## Testing

Run `npm test` to verify all auth tests pass.
```

**Bad:**

```
fixed stuff
```

## Using gh CLI

Use `gh pr create` with these flags:
- `--title`: PR title
- `--body`: PR description (use HEREDOC for multiline)
- `--base`: Target branch (default: main)
- `--head`: Feature branch (auto-detected if on it)

```bash
gh pr create --title "feat: add login" --body "$(cat <<'EOF'
## Summary
- Added login endpoint

## Changes
- src/auth/login.ts
EOF
)"
```
