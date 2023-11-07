export default {
  // https://formkit.com/inputs/textarea#sections
  outer: ``,
  wrapper: ``,
  label: ``,
  prefixIcon: `
    !ml-$spacing
    !mr-0
    text-$colorTemperature-600

    dark:text-$colorTemperature-400
  `,
  suffixIcon: `
    !mr-$spacing
    !ml-0
    text-$colorTemperature-600

    dark:text-$colorTemperature-400
  `,
  inner: `
    flex
    items-center
    mb-$spacing(-1)
    border
    border-$colorTemperature-$colorTemperatureStrength
    $radius(0,rounded-none,rounded-2xl) ${"" /** Don't go full rounded */}
    focus-within:ring-2

    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  input: `
    text-$scale
    h-24
    text-$colorTemperature-$colorTemperatureStrength
    min-w-0 ${"" /** allows the input to shrink */}
    grow
    shrink
    !py-$spacing ${
      "" /** We want spacing on this input because it has a native UI drag handle */
    }
    !px-$spacing(3) ${
      "" /** We want spacing on this input because it has a native UI drag handle */
    }
    outline-none
    bg-transparent

    dark:text-$colorTemperature-$colorTemperatureStrengthDark

    ${
      "" /** === ⚠️ CAUTION: Tailwind Forms Overrides === 
    These are overrides for the Tailwind Forms plugin. You should include them in case
    your theme user has the plugin enabled so that its styles don't conflict with your theme.
    */
    }
    p-0 border-none focus:ring-0
  `,
  help: ``,
  messages: ``,
  message: ``,
};
