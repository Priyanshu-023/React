# Changes

## src/components/section1/Navbar.jsx

- Fixed `justify-between` not working: the flex container had only one
  direct child (a wrapper `<div>` around both text elements), so there was
  nothing to justify between. Removed the wrapper and made
  "Target Audience" and "Digital Banking Platform" direct children of the
  flex container.
- Replaced `class` with `className` (React/JSX requires `className`,
  not the HTML `class` attribute).
