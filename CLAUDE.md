# @formkit/theme-starter

Minimal, heavily-commented FormKit theme template. Use this as a starting point for creating custom themes.

## Purpose

Unlike `theme-regenesis` (fully styled), this package is:
- **Educational** - extensive comments explaining every decision
- **Minimal** - bare-bones styles, many empty sections
- **Template** - meant to be copied and customized

Users scaffold via: `npx formkit create-theme MyThemeName`

## Architecture

```
src/
├── theme.ts          # Main theme definition with detailed comments
├── globals.ts        # Global styles (commented explanations)
├── main.ts           # Dev server entry
├── App.vue           # Kitchen sink demo
├── style.css         # Dev UI (red text = missing styles)
├── families/         # Family groupings with comments
│   ├── button.ts
│   ├── box.ts
│   ├── text.ts
│   └── dropdown.ts
└── inputs/           # Input definitions
    ├── [21 core]
    ├── pro/
    └── addon/
```

## Key Differences from theme-regenesis

| Aspect | theme-starter | theme-regenesis |
|--------|---------------|-----------------|
| Comments | 25-50+ per file | Minimal |
| Styling | Bare-bones | Fully styled |
| Purpose | Learning/template | Production use |
| Complexity | Simple | Complete |

## Theme Variables

```typescript
variables: {
  accentColor: 'blue',           // String value
  colorTemperature: 'neutral',   // String value
  inputMaxWidth: 'max-w-[20em]', // String value
  radius: {                      // Editor control
    editor: 'radius',
    value: 'rounded-md',
  },
  spacing: {
    editor: 'spacing',
    value: '2',
    min: '1',
    max: '4',
  },
  scale: {
    editor: 'fontSize',
    value: 'base',
  },
}
```

## Development

```bash
pnpm dev      # Vite + theme editor
pnpm build    # tsup → dist/
pnpm test     # vitest
```

### Debug Feature

`style.css` sets `--text-color: red` - any red text indicates missing theme styles.

## Educational Comments

Files include detailed explanations:
- Why certain styles are needed
- Browser quirks (Safari flex, webkit color)
- Tailwind Forms plugin conflicts
- Mobile/touch device considerations

Look for `⚠️ CAUTION:` blocks throughout.

## Creating a Custom Theme

### Step 1: Scaffold
```bash
npx formkit create-theme MyTheme
```

### Step 2: Understand Structure
- Read comments in `theme.ts` and `globals.ts`
- Review family definitions
- Check individual inputs for section names

### Step 3: Customize
1. **Variables** - Modify in `theme.ts`
2. **Globals** - Base styles in `globals.ts`
3. **Families** - Shared styles in `families/`
4. **Inputs** - Override in `inputs/`

### Step 4: Test
```bash
pnpm dev
# Red text = missing styles
# Toggle dark mode
# Test all inputs in kitchen sink
```

### Step 5: Publish
```bash
pnpm build
pnpm release  # bumpp + publish
```

## Input Coverage

Same as theme-regenesis: 21 core + 12 pro + 2 addon = 35 inputs

## Interconnections

```
@formkit/theme-creator
    ↓ provides createTheme(), rootClasses()
theme-starter (this package)
    ↓ template for custom themes
├── User custom themes (copy & modify)
├── themes.formkit.com (available for preview)
└── CLI scaffolding target
```

## Common Tasks

### Understanding a section

Each section key in theme files corresponds to a FormKit section:
- `outer` - outermost wrapper
- `wrapper` - inner wrapper
- `label` - input label
- `inner` - input container
- `input` - actual input element
- `help` - help text
- `messages` - error messages

See FormKit docs for full section list per input type.

### Adding custom variables

1. Add to `variables` in `theme.ts`
2. Use `$variableName` in class strings
3. For editor UI, use object form with `editor` type

### Removing Pro inputs

If not using @formkit/pro:
1. Remove `pro/` directory
2. Remove pro imports from `theme.ts`
3. Remove from `meta.supportedInputs`
