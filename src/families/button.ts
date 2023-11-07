export default {
  /* 
  button: https://formkit.com/inputs/button#sections
  submit: https://formkit.com/inputs/submit#sections
  */
  outer: ``,
  wrapper: ``,
  label: ``,
  prefixIcon: `
    text-$colorTemperature-$colorTemperatureStrength
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  suffixIcon: `
    text-$colorTemperature-$colorTemperatureStrength
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  input: `
    flex
    items-center
    $radius
    px-$spacing(7,*)
    py-$spacing(2,*)
    outline-none
    text-$colorTemperature-$colorTemperatureStrength
    border
    border-$colorTemperature-$colorTemperatureStrength
    group-data-[disabled]:!cursor-not-allowed
    group-data-[prefix-icon]:pl-$spacing(5,*)
    group-data-[suffix-icon]:pr-$spacing(5,*)
    focus:ring-2

    dark:border-$colorTemperature-$colorTemperatureStrengthDark
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  help: ``,
  messages: ``,
  message: ``,
};
