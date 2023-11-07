export default {
  // inherits family:text classes
  // https://formkit.com/inputs/mask#sections
  outer: ``,
  wrapper: ``,
  label: ``,
  inner: `
    relative ${
      "" /** required for absolutely positioned mask overlay elements */
    } 
  `,
  prefixIcon: ``,
  suffixIcon: ``,
  input: `
    group-data-[has-overlay]:!caret-$colorTemperature-$colorTemperatureStrength
    dark:group-data-[has-overlay]:!caret-$colorTemperature-$colorTemperatureStrengthDark
  `,
  overlay: ``,
  overlayInner: ``,
  overlayPlaceholder: ``,
  overlayChar: ``,
  overlayEnum: ``,
  overlayLiteral: ``,
  help: ``,
  messages: ``,
  message: ``,
};
