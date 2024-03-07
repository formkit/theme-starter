export default {
  // inherits family:text classes
  barcodeIcon: `
    w-[1.5em]
    text-$colorTemperature-700
    cursor-pointer

    dark:text-$colorTemperature-300
  `,
  dialog: `
    border-none
    outline-none
    overflow-clip
    p-0
    bg-black
    $radius(0,rounded-none,rounded-xl)
    w-[100%-2rem]
    max-w-[30rem]

    ${
      "" /** 
    The barcode input uses a native HTML dialog element  
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
    */
    }
    [&::backdrop]:bg-$colorTemperature-800/50
  `,
  video: `
    w-full
    aspect-[1/1]
    object-cover
    block
    pointer-events-none
  `,
  closeIcon: `
    cursor-pointer
    absolute
    bg-white
    color-$colorTemperature-700
    w-[1.5em]
    h-[1.5em]
    $radius
    flex
    top-$spacing
    right-$spacing
    z-20

    [&>svg]:w-[1.25em]
    [&>svg]:h-[1.25em]
    [&>svg]:m-auto
  `,
  overlay: `
    absolute
    top-1/2
    left-1/2
    w-[min(20em,75%)]
    aspect-[1/1]
    -translate-x-1/2
    -translate-y-1/2
    $radius(0,rounded-none,rounded-xl)
    pointer-events-none

    ${
      "" /** 
    Provides the background shade "cut out" effect for the barcode input
    scanning area.
    */
    }
    shadow-[0_0_0_999em_rgba(0,0,0,0.5)]
  `,
  overlayDecorators: `
    absolute
    inset-0
    z-10
  `,
  overlayDecoratorTopLeft: `
    absolute
    w-[1.5rem]
    h-[1.5rem]
    $radius(0,rounded-none,rounded-xl)
    top-0
    left-0
    border-l-4
    border-t-4
    rounded-tr-none
    rounded-bl-none
  `,
  overlayDecoratorTopRight: `
    absolute
    w-[1.5rem]
    h-[1.5rem]
    $radius(0,rounded-none,rounded-xl)
    top-0
    right-0
    border-r-4
    border-t-4
    rounded-tl-none
    rounded-br-none
  `,
  overlayDecoratorBottomRight: `
    absolute
    w-[1.5rem]
    h-[1.5rem]
    $radius(0,rounded-none,rounded-xl)
    bottom-0
    right-0
    border-r-4
    border-b-4
    rounded-tr-none
    rounded-bl-none
  `,
  overlayDecoratorBottomLeft: `
    absolute
    w-[1.5rem]
    h-[1.5rem]
    $radius(0,rounded-none,rounded-xl)
    bottom-0
    left-0
    border-l-4
    border-b-4
    rounded-tl-none
    rounded-br-none
  `,
};
