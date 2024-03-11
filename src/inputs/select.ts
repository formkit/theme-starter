export default {
  // https://formkit.com/inputs/select#sections
  outer: ``,
  wrapper: ``,
  label: ``,
  prefixIcon: `
    ml-$spacing
    text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  suffixIcon: `
    mr-$spacing 
    text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  inner: `
    ${"" /* base styles */}
    relative
    flex
    items-center
    border
    border-$colorTemperature-$colorTemperatureStrength
    $radius
    focus-within:ring-2
    ${
      "" /** === ⚠️ CAUTION: Multiple select radius style === 
    We do not want to allow for a fully rounded border on a multiple select
    because it will look quite bad.
    */
    }
    group-data-[multiple]:$radius(0,rounded-none,rounded-2xl)

    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  input: `
    ${"" /* base styles */}
    grow
    py-$spacing
    pl-$spacing(2,*)
    pr-[2em] ${"" /** makes room for absolutely positioned select icon */}
    text-$scale
    text-$colorTemperature-$colorTemperatureStrength
    text-ellipsis ${"" /** recommended */}
    min-w-0 ${"" /** allows input to shrink */}
    outline-none
    bg-transparent
    group-data-[prefix-icon]:!pl-0
    group-data-[suffix-icon]:!pr-0
    data-[placeholder]:text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:data-[placeholder]:text-$colorTemperature-$colorTemperatureStrengthDark

    ${
      "" /** === ⚠️ CAUTION: Tailwind Forms Overrides === 
    These are overrides for the Tailwind Forms plugin. You should include them in case
    your theme user has the plugin enabled so that its styles don't conflict with your theme.
    */
    }
    border-none 
    focus:ring-0 
    bg-none
  `,
  selectIcon: `
    absolute
    w-[1em]
    text-$colorTemperature-$colorTemperatureStrength
    pointer-events-none
    right-$spacing
    group-data-[suffix-icon]:mr-[1.5em]

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  optGroup: `
    group/optgroup
    bg-white
    text-$colorTemperature-$colorTemperatureStrength
    font-bold
    text-$scale(-1,*)

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:bg-$colorTemperature-900
  `,
  option: `
    text-$colorTemperature-$colorTemperatureStrength
    group-data-[multiple]:text-$scale(-1,*)
    group-data-[multiple]:outline-none
    group-data-[multiple]:border-none
    group-data-[multiple]:py-$spacing(-1)
    group-data-[multiple]:px-$spacing

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:bg-$colorTemperature-900
  `,
  help: ``,
  messages: ``,
  message: ``,
};
