# Prettier & ESLint Configuration

## What Was Configured

Your project now has Prettier integrated with ESLint for automatic code formatting that follows your ESLint rules.

## Installed Packages

- `prettier` - Code formatter
- `eslint-config-prettier` - Disables ESLint rules that conflict with Prettier
- `eslint-plugin-prettier` - Runs Prettier as an ESLint rule

## Configuration Files

### `.prettierrc`

Prettier configuration with the following settings:

- Semi-colons: enabled
- Single quotes: disabled (uses double quotes)
- Print width: 80 characters
- Tab width: 2 spaces
- Trailing commas: ES5 compatible
- Arrow parens: always
- End of line: LF

### `.prettierignore`

Excludes generated files and dependencies from formatting

### `eslint.config.mjs`

Updated to:

- Import prettier plugin and config
- Add prettier to plugins
- Enable prettier rules
- Report prettier violations as ESLint errors

### `.vscode/settings.json`

VS Code workspace settings for auto-formatting:

- Format on save: enabled
- Default formatter: Prettier
- Auto-fix ESLint issues on save
- Prettier requires config file

## Available Scripts

```bash
# Format all files
npm run format

# Check formatting without fixing
npm run format:check

# Run ESLint (includes Prettier rules)
npm run lint

# Fix ESLint issues (includes formatting)
npm run lint:fix
```

## How It Works

1. **On Save in VS Code**: Files will auto-format using Prettier and auto-fix ESLint issues
2. **Manual Formatting**: Run `npm run format` to format all files
3. **Linting**: Run `npm run lint` to check both ESLint and Prettier rules
4. **Auto-fix**: Run `npm run lint:fix` to automatically fix issues

## Next Steps

You may want to run `npm run format` to format all existing files according to the new rules:

```bash
npm run format
```

This will ensure all files follow the same formatting standards.
