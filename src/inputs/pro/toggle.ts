export default {
  // https://formkit.com/inputs/toggle#sections
  outer: `
    max-w-none ${
      "" /** because the label for a standard toggle is adjacent to the toggle UI, we probably want to allow a wider max width */
    }
  `,
  wrapper: `
    flex
    flex-wrap
    items-center
    mb-$spacing(-2)
  `,
  altLabel: `
    block
    w-full
    mb-$spacing(-1)
    text-$scale(-2,*)
    text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  inner: `
    inline-block 
    mr-$spacing
  `,
  input: `
    peer 
    absolute 
    opacity-0 
    w-0 
    h-0
  `,
  track: `
    relative
    min-w-[3em]
    p-0.5
    select-none
    rounded-full
    transition-all
    bg-$colorTemperature-400
    peer-focus-visible:ring-2
    ${
      "" /** === ⚠️ CAUTION: thumb positioning === 
    Since the track is the sibling to the actual input for a toggle we need to use descendant 
    selectors with peer-checked to affect the styling of the thumb.
    */
    }
    peer-checked:bg-$accentColor-$accentColorStrength
    peer-checked:[&>div:last-child]:left-full
    peer-checked:[&>div:last-child]:-translate-x-full
    ${
      "" /** === ⚠️ CAUTION: value label position ===
      We need to move the value label when the input is checked. This selector is complicated, but
      that's exactly what it does.
      */
    }
    peer-checked:[&>div:first-child:not(:last-child)]:left-0 
    peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0

    dark:bg-$colorTemperature-600
    dark:peer-checked:bg-$accentColor-$accentColorStrengthDark
  `,
  innerLabel: `
    absolute
    text-white
    text-[10px]
    left-full
    top-1/2
    -translate-x-full
    -translate-y-1/2
    px-1 ${
      "" /** keeps the inner label from touching the absolute edge of the input inner */
    }

    dark:text-$colorTemperature-900
  `,
  thumb: `
    relative
    w-[50%]
    aspect-[1/1]
    p-0.5
    left-0
    rounded-full
    transition-all
    bg-white
    text-$colorTemperature-$colorTemperatureStrength

    dark:bg-$colorTemperature-900
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  thumbIcon: ``,
  valueLabel: `
    font-bold
    text-$scale(-2,*)
    text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  label: `
    peer-first:mb-0 ${
      "" /** if this is a standard toggle (without an alt label) then we probably want to override our global margin bottom on labels */
    }
  `,
  help: ``,
  messages: ``,
  message: ``,
};
