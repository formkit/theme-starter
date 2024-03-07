export default {
  // https://formkit.com/inputs/repeater#sections
  outer: `
    $remove:group
    $remove:data-[disabled]:select-none 
    $remove:data-[disabled]:opacity-50
    $remove:data-[disabled]:pointer-events-none
    group/repeater ${
      "" /** create a named group to not conflict with child styling */
    }
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

    [&.formkit-dropZone]:opacity-30
    [&.formkit-dropZone]:pointer-events-none
  `,
  dragHandleWrapper: `
    relative
    w-8
    $radius(0,rounded-none,rounded-2xl)
    rounded-tr-none
    rounded-br-none
  `,
  dragHandle: `
    w-full
    h-full
    flex
    absolute
    top-0
    left-0
    cursor-grab
    active:cursor-grabbing
  `,
  dragHandleIcon: `
    w-2
    m-auto
    text-$colorTemperature-500
    [&>svg>path]:fill-current
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
    [&>li]:aspect-[1/1]
    [&>li]:w-[1.5em]
    [&>li]:h-[1.5em]
    [&>li]:my-$spacing(-2)
    [&>li]:mx-auto
    [&>li]:flex
    [&>li]:items-center
    [&>li]:appearance-none
    [&>li]:justify-center
    [&>li]:aspect-[1/1]
    [&>li]:text-$colorTemperature-500
    [&>li:hover]:text-$accentColor-600
    group-data-[disabled]/repeater:[&>li_button]:opacity-50
    group-data-[disabled]/repeater:[&>li_button]:!text-$colorTemperature-500 
    group-data-[disabled]/repeater:[&>li_button]:pointer-events-none

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
    aspect-[1/1]
  `,
  moveUpIcon: `
    block
    w-[0.75em]
    aspect-[1/1]
  `,
  removeIcon: `
    block
    w-[1.25em]
    aspect-[1/1]
  `,
  addIcon: `
    block
    w-[1.25em]
    aspect-[1/1]
  `,
  addButton: `
    !mb-0
    group-data-[disabled]/repeater:pointer-events-none
    group-data-[disabled]/repeater:opacity-50
    group-data-[disabled]/repeater:grayscale
  `,
  messages: ``,
  message: ``,
};
