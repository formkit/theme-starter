export default {
  // https://formkit.com/inputs/repeater#sections
  outer: `
    max-w-full ${"" /** override the input max width if set globally */}
  `,
  fieldset: `
    min-w-0 ${"" /** allow the fieldset to shrink to fit its container */}
  `,
  legend: `
    mb-$spacing
  `,
  help: `
    mb-$spacing -mt-1
  `,
  inner: ``,
  items: ``,
  item: `
    flex
    w-full
    mb-$spacing
    border
    border-$colorTemperature-$colorTemperatureStrength
    $radius(0,rounded-none,rounded-2xl) ${"" /** Don't go full rounded */}

    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  content: `
    min-w-0
    grow
    p-$spacing(5,*)
    flex
    flex-col
    align-center
    [&>div[data-type]]:max-w-none ${
      "" /** override the input max width if set globally */
    }
    [&>div[data-type]:last-child]:mb-0
    `,
  controls: `
    flex
    flex-col
    items-center
    justify-center
    p-$spacing

    ${
      "" /** === ⚠️ CAUTION: Shared styling for all nested controls === 
    Since we probably want all of our repeater controls to share the same styles it can be 
    easier to use a descendent selector rather than repeating the same class list for each section name.
    */
    }
    [&>li]:aspect-square
    [&>li]:w-[1.5em]
    [&>li]:h-[1.5em]
    [&>li]:my-$spacing(-2)
    [&>li]:mx-auto
    [&>li]:flex
    [&>li]:items-center
    [&>li]:appearance-none
    [&>li]:justify-center
    [&>li]:aspect-square
    [&>li]:text-$colorTemperature-500
    [&>li:hover]:text-$accentColor-600
    [&>li_[disabled]]:opacity-25
    [&>li_[disabled]]:!text-$colorTemperature-500 

    dark:[&>li]:text-$colorTemperature-500
    dark:[&>li:hover]:text-$accentColor-200
  `,
  upControl: ``,
  removeControl: ``,
  insertControl: ``,
  downControl: ``,
  controlLabel: `
    absolute
    opacity-0
    pointer-events-none
    text-[0px]
  `,
  moveDownIcon: `
    block
    w-[0.75em]
    aspect-square
  `,
  moveUpIcon: `
    block
    w-[0.75em]
    aspect-square
  `,
  removeIcon: `
    block
    w-[1.25em]
    aspect-square
  `,
  addIcon: `
    block
    w-[1.25em]
    aspect-square
  `,
  addButton: `
    !mb-0
  `,
  messages: ``,
  message: ``,
};
