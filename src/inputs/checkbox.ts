export default {
  // inherits family:box classes
  // https://formkit.com/inputs/checkbox#sections
  outer: ``,
  wrapper: ``,
  fieldset: ``,
  legend: ``,
  help: ``,
  inner: ``,
  options: ``,
  option: ``,
  decorator: `
    ${
      "" /** === ⚠️ CAUTION: Clamping checkbox decorator radius ===
       * You probably don't want to let your checkbox decorators get too rounded
       * or they will look like radio inputs.
       */
    }
    $radius(0,rounded-none,rounded)
  `,
  decoratorIcon: `
    max-w-[66.66%]
  `,
  label: ``,
  optionHelp: ``,
  messages: ``,
  message: ``,
};
