export default {
  outer: `
    ${
      "" /* 
      It is advisable to put `group` on the outer wrapper of every input
      so that you can access all of the data attributes (eg. group-data-[disabled])
      from any other child section of the input. "Outer" is always the outermost wrapper
      of all 1st-party FormKit inputs.
    */
    }
    group 
    $inputMaxWidth
    min-w-0 ${"" /** Allow input to shrink properly in Safari flex contexts */}
    flex-grow
    text-$scale
    mb-$spacing(4,0.5,4)

    ${"" /* recommended disabled styles across all inputs */}
    data-[disabled]:select-none 
    data-[disabled]:opacity-50
    data-[disabled]:pointer-events-none
  `,
  wrapper: `
    mb-$spacing(-1)
  `,
  label: `
    block 
    text-$colorTemperature-$colorTemperatureStrength 
    text-$scale(-1,*)
    mb-$spacing(-2,*)

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  legend: `
    ${
      "" /* The legend key is used for inputs that have multiple child inputs within them. 
      It is the "label" for a fieldset. Used by checkbox (multiple), radio (multiple), and repeater */
    }
    block 
    text-$colorTemperature-$colorTemperatureStrength 
    text-$scale(-1,*)

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  input: `
    ${
      "" /** These styles disable the default browser styling on inputs and also enforce
      light mode and dark mode UI within native inputs. This prevents a "light mode" native date picker
      panel from popping up when your theme is in dark mode. */
    }
    appearance-none 
    outline-none
    [color-scheme:light] 
    dark:[color-scheme:dark]
    placeholder:text-$colorTemperature-400

    dark:placeholder:text-$colorTemperature-500
  `,
  placeholder: `
    ${
      "" /** Some inputs don't have literal input elements inside of them, but still have the 
      concept of a placeholder, so make sure we style them appropriately */
    }
    text-$colorTemperature-400
    dark:text-$colorTemperature-500
  `,
  prefixIcon: `
    flex 
    shrink-0 
    items-center

    ${
      "" /** It is recommended to pull icons back into whatever default inner padding you have set */
    }
    -ml-$spacing(-2,0,1) 

    mr-$spacing 
    text-$scale 
    h-[1em] 
    w-[1em] 

    ${
      "" /** === ⚠️ CAUTION: Styling nested SVGs ===
    Because the actual icon SVGs output by FormKit do not get their own addressable section name
    you need to access them from a parent element. */
    }
    [&>svg]:w-full
  `,
  /** Same (but inverted) as prefixIcon above, just not commented */
  suffixIcon: `
    flex
    items-center
    -mr-$spacing(-2,0,1.5)
    ml-$spacing
    text-$scale
    h-[1em]
    w-[1em]
    shrink-0
    [&>svg]:w-full
  `,
  /** Used across inputs when a loading action is happening */
  loaderIcon: `
    animate-spin
    flex
    items-center
    my-auto
    ml-$spacing
    text-$scale
    text-$colorTemperature-$colorTemperatureStrength
    h-[1em]
    w-[1em]
    shrink-0
    [&>svg]:w-full

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  /** Used across inputs when a loading action is happening */
  loadMoreInner: `
    flex
    text-$scale(-1,*)
    text-$colorTemperature-$colorTemperatureStrength
    p-$spacing
    [&>span]:mr-$spacing

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  help: `
    text-$colorTemperature-$colorTemperatureStrength 
    text-$scale(-2,*)

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  messages: ``,
  message: `
    text-red-600
    mb-$spacing(-1)
    text-$scale(-2,*)

    dark:text-red-400
  `,
  /**
   * The following overlay* section keys are used for inputs that have
   * masking functionality (eg. mask, datepicker: with overlay).
   * https://formkit.com/inputs/mask#overlay-colorizing-a-mask
   */
  overlay: `
    text-$colorTemperature-$colorTemperatureStrength
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  overlayPlaceholder: `
    text-$colorTemperature-$colorTemperatureStrength
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  overlayLiteral: `
    text-$colorTemperature-$colorTemperatureStrength
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  overlayChar: `
    text-$colorTemperature-$colorTemperatureStrength
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  overlayEnum: `
    text-$colorTemperature-$colorTemperatureStrength
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
};
