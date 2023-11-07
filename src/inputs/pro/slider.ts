export default {
  outer: ``,
  wrapper: ``,
  label: ``,
  help: `
    mb-$spacing(-2)
  `,
  prefixIcon: `
    text-$colorTemperature-600
    dark:text-$colorTemperature-400
  `,
  suffixIcon: `
    text-$colorTemperature-600
    dark:text-$colorTemperature-400
  `,
  sliderInner: `
    flex
    items-center
    ${
      "" /** === ⚠️ CAUTION: Nested number inputs === 
    The slider input can optionally show nested number inputs for the min and max values.
    We need to override some of their styles for sensible positioning.
    */
    }
    [&>[data-type=number]]:mb-0
    [&>[data-type=number]]:ml-$spacing(2)
    [&>[data-type=number]]:shrink
    [&>[data-type=number]]:grow-0
    ${
      "" /** === ⚠️ CAUTION: Increasing bottom margin to account for marks === 
    This is a pretty wild selector, but what it's doing is increasing the bottom spacing 
    below the track when marks are enabled to create space for them. The marks are absolutely
    positioned so we need to take care of making room for them ourselves.
    */
    }
    [&[data-has-mark-labels=true]_[id^=track]]:mb-$spacing(4)
    `,
  track: `
    grow
    relative
    z-20
    py-$spacing(1)
    select-none ${
      "" /** since users click on the track a lot it's nice to disable accidental text selection */
    }
  `,
  chart: `
    relative
    w-full
    flex
    items-center
    justify-between
    aspect-[3/1]
    mb-2
    z-20
  `,
  chartBar: `
    absolute
    bottom-0
    h-full
    bg-$colorTemperature-400
    data-[active=true]:bg-$colorTemperature-$colorTemperatureStrength

    dark:bg-$colorTemperature-700
    dark:data-[active=true]:bg-$colorTemperature-$colorTemperatureStrengthDark
  `,
  trackWrapper: `
    $radius
    bg-$colorTemperature-200
    px-1 ${"" /** pad the track to create buffer for marks */}

    dark:bg-$colorTemperature-700
  `,
  trackInner: `
    relative
    h-1.5
  `,
  fill: `
    h-full
    $radius
    absolute
    top-0
    -mx-1 ${
      "" /** pull the track highlight back out equal to the wrapper padding */
    }
    bg-$accentColor-$accentColorStrength

    dark:bg-$accentColor-$accentColorStrengthDark
  `,
  marks: `
    absolute 
    pointer-events-none 
    inset-0
  `,
  mark: `
    absolute
    top-1/2
    w-[3px]
    h-[3px]
    rounded-full
    -translate-x-1/2
    -translate-y-1/2
    bg-$colorTemperature-$colorTemperatureStrength
    data-[active=true]:bg-white

    dark:bg-$colorTemperature-400
    dark:data-[active=true]:bg-$colorTemperature-600
  `,
  markLabel: `
    absolute
    top-[calc(100%+0.5em)] ${"" /** position the label below the track */}
    left-1/2
    text-$colorTemperature-$colorTemperatureStrength
    text-$scale(-2,*)
    -translate-x-1/2

    dark:text-$colorTemperature-400
  `,
  handles: ``,
  handle: `
    group/handle
    select-none
    w-4
    h-4
    rounded-full
    bg-white
    absolute
    top-1/2
    left-0
    z-30
    -translate-x-1/2
    -translate-y-1/2
    border-2
    border-$accentColor-$accentColorStrength
    focus-visible:outline-0
    focus-visible:ring-2
    
    ${
      "" /** === ⚠️ CAUTION: style for active handle === 
    FormKit keeps track of which handle (min or max) is active based on your drag interaction.
    You're going to want the active handle to be z-indexed to the top.
    */
    }
    data-[is-target=true]:z-20
  `,
  handleInner: ``,
  tooltip: `
    absolute
    bottom-full
    left-1/2
    -translate-x-1/2
    -translate-y-[4px]
    bg-$accentColor-$accentColorStrength
    text-white
    py-$spacing(-2,*)
    px-$spacing(-1,*)
    text-xs
    leading-none
    whitespace-nowrap
    $radius(0,rounded-none,rounded) ${"" /** Don't go full rounded */}
    opacity-0 ${"" /** hide the tooltip by default */}
    transition-opacity
    group-hover:opacity-100
    group-focus-visible/handle:opacity-100
    group-data-[show-tooltip=true]/handle:opacity-100

    dark:bg-$accentColor-$accentColorStrengthDark
    dark:text-$colorTemperature-900

    ${"" /** tooltip triangle styles */}
    after:content-[""]
    after:absolute
    after:top-full
    after:left-1/2
    after:-translate-x-1/2
    after:-translate-y-[1px]
    after:border-4
    after:border-transparent
    after:border-t-$accentColor-$accentColorStrength

    dark:after:border-t-$accentColor-$accentColorStrengthDark
  `,
  linkedValues: `
    flex 
    items-start 
    justify-between
  `,
  minValue: `
    relative
    grow
    !max-w-[45%]
    mb-0

    ${
      "" /** styles for horizontal divider line between min and max linked inputs */
    }
    [&>div::after]:content-[""]
    [&>div::after]:absolute
    [&>div::after]:top-1/2
    [&>div::after]:left-[105%]
    [&>div::after]:-translate-y-1/2
    [&>div::after]:w-[12%]
    [&>div::after]:h-[1px]
    [&>div::after]:bg-$colorTemperature-$colorTemperatureStrength
  `,
  maxValue: `
    relative
    grow 
    !max-w-[45%] 
    mb-0 
  `,
  messages: ``,
  message: ``,
};
