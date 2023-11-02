export default {
  // inherits family:text classes
  // https://formkit.com/inputs/color#sections
  outer: ``,
  wrapper: ``,
  label: ``,
  prefixIcon: ``,
  suffixIcon: ``,
  inner: `
    ${
      "" /** === ⚠️ CAUTION: Color input sizing === 
    Color inputs are a bit of a special case because they are actually usually
    expected to appear as a combination of a text input and a button.
    You probably don't want them to go full width or be as padded as a normal text input */
    }
    !w-auto
  `,
  input: `
    $radius
    overflow-clip ${"" /* needed for $radius to take effect */}
    ${
      "" /** === ⚠️ CAUTION: Browser color styles === 
    Browsers ship with some opinionated (and frankly bad looking) input styles
    that we probably want to override.
      */
    }
    [&::-webkit-color-swatch-wrapper]:p-0
    [&::-webkit-color-swatch]:border-none
    [&::-moz-color-swatch]:border-none
  `,
  help: ``,
  messages: ``,
  message: ``,
};
