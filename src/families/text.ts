export default {
  /*
  color: https://formkit.com/inputs/color#sections
  colorpicker (Pro): https://formkit.com/inputs/colorpicker#sections
  date: https://formkit.com/inputs/date#sections
  datetime-local: https://formkit.com/inputs/datetime-local#sections
  email: https://formkit.com/inputs/email#sections
  mask (Pro): https://formkit.com/inputs/mask#sections
  month: https://formkit.com/inputs/month#sections
  number: https://formkit.com/inputs/number#sections
  password: https://formkit.com/inputs/password#sections
  range: https://formkit.com/inputs/range#sections
  search: https://formkit.com/inputs/search#sections
  tel: https://formkit.com/inputs/tel#sections
  text: https://formkit.com/inputs/text#sections
  time: https://formkit.com/inputs/time#sections
  url: https://formkit.com/inputs/url#sections
  week: https://formkit.com/inputs/week#sections
  */

  /** === ⚠️ CAUTION: Shared styles === 
  The text family of inputs all have very similar underlying FormKit schemas, so
  it is very likely that you'll be able to do 90% of your required styling within this
  "family:text" group. However, scaffolding for each input within the text family
  is provided within this file so that you can override individual inputs if needed.

  Some inputs within the family such as `color`, `file`, `mask (Pro)`, and `range` will 
  required their own additional consideration within your theme.
  */
  outer: ``,
  wrapper: `
    flex
    flex-col
    items-start
    justify-start
    last:mb-0
  `,
  label: ``,
  prefixIcon: `
    text-$colorTemperature-600
    dark:text-$colorTemperature-400
  `,
  suffixIcon: `
    text-$colorTemperature-600
    dark:text-$colorTemperature-400
  `,
  inner: `
    text-$scale 
    w-full 
    py-$spacing 
    px-$spacing(2,*) 
    $radius 
    border 
    border-$colorTemperature-$colorTemperatureStrength
    
    ${
      "" /** === ⚠️ CAUTION: Alignment of 'inner' items === 
    For text family inputs, the 'inner' section wraps the actual input along with 
    prefix, suffix, prefix-icon, and suffix-icon content. This means we probably want
    to vertically center these items.
    */
    }
    flex 
    items-center 
    
    ${
      "" /** === ⚠️ CAUTION: Focus styles on 'inner' === 
    Similarly, we likely want to put our focus styles on the inner rather than on
    the literal input section.
    */
    }
    focus-within:ring-2 
    group-data-[disabled]:!cursor-not-allowed

    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  input: `
    text-$scale 
    text-$colorTemperature-$colorTemperatureStrength 
    min-h-[1.5em] ${"" /* fix for iOS which collapses empty date-style inputs (date, month, week, etc) */}
    bg-transparent ${
      "" /** Since our 'inner' is styled to look like an input, we don't want an actual input background */
    }
    grow ${"" /** we want the input to scale to fit the available space */}

    ${
      "" /** === ⚠️ CAUTION: Tailwind Forms Overrides === 
    These are overrides for the Tailwind Forms plugin. You should include them in case
    your theme user has the plugin enabled so that its styles don't conflict with your theme.
    */
    }
    border-none p-0 focus:ring-0

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  help: ``,
  messages: ``,
  message: ``,
};
