export default {
  // https://formkit.com/inputs/form#sections
  form: ``,
  actions: ``,
  summaryInner: `
    group/summary
    border
    border-$colorTemperature-$colorTemperatureStrength
    $radius(0,rounded-none,rounded-2xl)
    py-$spacing
    px-$spacing(2,*)
    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  summaryHeader: `
    text-$scale(1,*) 
    text-$colorTemperature-$colorTemperatureStrength 
    mb-$spacing
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  messages: ``,
  message: `group-[]/summary:text-$scale(-1,*)`,
};
