export default {
  /*
  checkbox: https://formkit.com/inputs/checkbox#sections
  radio: https://formkit.com/inputs/radio#sections
  */
  outer: ``,
  wrapper: `
    inline-flex
    items-center
    mb-$spacing(-2,*)
    group-data-[multiple]:mb-0
  `,
  fieldset: ``,
  legend: `
    mb-$spacing
  `,
  help: `
    mb-$spacing(-2)
    group-data-[multiple]:mb-$spacing
    group-data-[multiple]:-mt-1.5
  `,
  inner: ``,
  input: `
    peer
    absolute
    h-0
    w-0
    overflow-hidden
    opacity-0
  `,
  decorator: `
    relative
    block
    select-none
    w-[1em]
    aspect-[1/1]
    border
    border-$colorTemperature-$colorTemperatureStrength
    mr-$spacing(-1,1.5,3)
    text-transparent
    peer-checked:text-$accentColor-$accentColorStrength
    peer-disabled:cursor-not-allowed
    peer-focus:ring-2

    dark:border-$colorTemperature-$colorTemperatureStrengthDark
    dark:peer-checked:text-$accentColor-$accentColorStrengthDark
  `,
  decoratorIcon: `
    absolute
    left-1/2
    top-1/2
    flex
    h-full
    w-full
    -translate-x-1/2
    -translate-y-1/2
  `,
  options: ``,
  option: `
    mb-$spacing(-1)
    last:mb-0
    data-[disabled]:opacity-50

    ${
      "" /** === ⚠️ CAUTION: Disabled states for box inputs ===
    Checkbox / Radio options get their own disabled state when the root input disabled,
    so to prevent doubling effects such as opacity reduction, we need to reset the opacity 
    back to 100 if the parent outer wrapper is also disabled in order to avoid accidentally
    doubling our intended opacity reduction.
    */
    }
    group-data-[disabled]:data-[disabled]:opacity-100
  `,
  label: `
    ${
      "" /** === ⚠️ CAUTION: Box label styling === 
    For box family inputs the label is the text that appears adjacent to the decorator. 
    This means we probably want to override some of our global label styles.
    */
    }
    !mb-0 
  `,
  optionHelp: `
    text-$colorTemperature-600
    text-$scale(-2,*)
    -mt-1
    mb-$spacing(-2)

    dark:text-$colorTemperature-400
  `,
  messages: ``,
  message: ``,
};
