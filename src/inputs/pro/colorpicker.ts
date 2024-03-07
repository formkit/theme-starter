export default {
  // inherits from family:text classes
  // https://formkit.com/inputs/colorpicker#sections
  outer: ``,
  wrapper: ``,
  label: ``,
  inner: `
    relative
    inline-flex
    !w-auto ${"" /** allow the input to shrink similar to native color input */}
    pl-$spacing
    group-data-[inline]:border-none
    group-data-[inline]:p-0
    group-data-[inline]:outline-none
    group-data-[inline]:!ring-0 ${
      "" /** For inline colorpicker a focus outline does not make sense */
    }
    group-data-[inline]:!w-full ${
      "" /** For inline color picker, fill the available space */
    }
    group-data-[inline]:$radius(0,rounded-none,rounded-2xl) ${
      "" /** Don't allow an inline panel to go full rounded */
    }
  `,
  swatchPreview: `
    flex
    items-center
    $radius
  `,
  canvasSwatchPreviewWrapper: `
    mr-$spacing
    ${
      "" /** === ⚠️ CAUTION: Creating an inset shadow on color swatch canvas === 
    By using pseudo elements we can create an inset shadow on the preview canvas without the need
    for an actual DOM node. The inset shadow is helpful for when a user has selected a color
    that is similar to the panel background. You can remove these styles if you don't want an inset shadow.
    */
    }
    relative
    before:content-['']
    before:absolute
    before:inset-0
    before:$radius
    before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]
    before:z-[2]
  `,
  canvas: `
    ${"" /** applies to all canvas controls */}
    block 
    w-full
  `,
  canvasSwatchPreview: `
    text-$scale
    $radius
    aspect-[1/1]
    shrink-0
    grow
    !w-[1.5em]
  `,
  valueString: `
    inline-block
    text-$scale(-1)
    text-$colorTemperature-$colorTemperatureStrength
    font-mono ${
      "" /** Monospaced font is recommended so that the input does not change size as the user selects values */
    }

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  panel: `
    ${
      "" /** === ⚠️ CAUTION: Panel positioning === 
    The colorpicker panel needs to be positioned when opened
    */
    }
    absolute
    top-full
    left-0
    z-[99]

    flex
    w-[100vw] ${"" /** Take up the available space */}
    max-w-[18.5em] ${
      "" /** constrain the max width of the panel — by using em units the size will respond to changes in our $scale variable */
    }
    touch-manipulation ${"" /** prevent scrolling on touch devices */}
    flex-col
    $radius(0,rounded-none,rounded-2xl) ${
      "" /** Don't allow the panel to go full rounded */
    }
    border
    bg-white
    p-$spacing

    dark:bg-$colorTemperature-900

    ${
      "" /** === ⚠️ CAUTION: Panel inline ===
      When the colorpicker is inline we want to override some of the default panel styles
    */
    }
    group-data-[inline]:static
    group-data-[inline]:z-auto
    group-data-[inline]:w-full
    group-data-[inline]:max-w-none
    group-data-[inline]:bg-transparent
    group-data-[inline]:border
    border-$colorTemperature-$colorTemperatureStrength

    dark:border-$colorTemperature-$colorTemperatureStrengthDark

    ${
      "" /** === ⚠️ CAUTION: Mobile touch styles ===
      When the colorpicker is being used on small touch devices it is helpful to 
      render it as a fixed position element so that users do not have to scroll the page
      in order to interact with it. At 430px and below the input will render a close button
      in the header of the panel that we need to account for styling. You will want to test this 
      in your browser by emulating a mobile device and then resizing the browser window to 430px or below.
    */
    }
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:!fixed
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:top-auto
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:max-w-none
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:bottom-0
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:left-0
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:rounded-none
  `,
  panelClose: `
    flex
    justify-end
    items-center
    text-$colorTemperature-900
    mb-$spacing(-1)
    border-b
    border-$colorTemperature-$colorTemperatureStrength
    pb-$spacing

    dark:text-$colorTemperature-100
    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  closeIcon: `
    w-[1.75rem]
    aspect-[1/1]
    p-1
    $radius
    border
    border-$colorTemperature-$colorTemperatureStrength

    dark:border-$colorTemperature-$colorTemperatureStrengthDark

    ${
      "" /** === ⚠️ CAUTION: Styling nested SVG === 
    The close icon SVG does not have its own addressable section name, so we need to
    style it from the parent container.
    */
    }
    [&>svg]:w-full
    [&>svg]:aspect-[1/1]
    [&>svg]:max-w-none
    [&>svg]:max-h-none
  `,
  control: `
    ${
      "" /** === ⚠️ CAUTION: Controls ===
    The control section applies to each control handle UI.
    They are positioned absolutely within the panel and are positioned relative to the
    canvases that contain them.
    */
    }
    absolute
    bg-white
    shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)]
    -translate-y-1/2
    -translate-x-1/2
    pointer-events-none ${
      "" /** prevent the control from being clickable because the underlying canvas has the click event handlers */
    }
    focus-visible:outline-none
    focus-visible:ring-2
    
    dark:bg-$colorTemperature-900

    ${
      "" /** === ⚠️ CAUTION: prevent-focus-styles ===
      Sometimes browsers have a real hard time knowing when to apply focus styles — and they do 
      so inappropriately. The colorpicker tracks some of its own heuristics for when to apply focus styles
      and you can use the prevent-focus-style attribute to override the application of focus styles when 
      they are sometimes incorrectly applied by the browser.
    */
    }
    data-[prevent-focus-style]:outline-none
    data-[prevent-focus-style]:ring-0
    data-[prevent-focus-style]:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)]
  `,
  controlGroup: `
    ${
      "" /** === ⚠️ CAUTION: Grid layout ===  
    The internal layout of the colorpicker panel is best handled by a grid layout
    because every child control is an equal-depth sibling within the panel. Tailwind
    does not have great support for custom grid area layouts so we need to use a bit of
    a hack to get the layout we want. You're welcome to create your own custom layout but 
    the following is provided as a starting point.

    |   |   |   |
    | A | A | A |
    |   |   |   |
    | B | C | E |
    |   | D |   |

    Where:
    A = the lightness/saturation canvas
    B = the preview
    C = the hue slider
    D = the alpha slider
    E = the eyedropper (optional)
    */
    }
    grid
    [grid-template-areas:'a_a_a'_'b_c_e'_'b_d_e']
    mb-$spacing
  `,
  LS: `
    [grid-area:a] 
    relative 
    mb-$spacing
  `,
  canvasLS: `
    aspect-[2/1]
    cursor-pointer
    $radius(-1,rounded-none,rounded-xl) ${
      "" /** don't allow canvas to go full rounded */
    }
  `,
  controlLS: `
    w-[10px] 
    h-[10px] 
    rounded-full
  `,
  preview: `
    [grid-area:b]
    relative
    inline-flex
    w-[2em]
    aspect-[1/1]
    overflow-hidden
    $radius
    ${
      "" /** === ⚠️ CAUTION: Creating an inset shadow on color swatch canvas === 
      By using pseudo elements we can create an inset shadow on the preview canvas without the need
      for an actual DOM node. The inset shadow is helpful for when a user has selected a color
      that is similar to the panel background. You can remove these styles if you don't want an inset shadow.
      */
    }
    after:content-['']
    after:absolute
    after:inset-0
    after:$radius
    after:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]
  `,
  hue: `
    [grid-area:c]
    relative
    inline-flex
    h-3/4
    ml-$spacing
  `,
  canvasHue: `
    $radius(-1,rounded-none,rounded-xl) ${
      "" /** don't allow canvas to go full rounded */
    }
  `,
  controlHue: `
    w-[4px]
    top-1/2
    h-[calc(100%-2px)]
    $radius(0,rounded-none,rounded-2xl)
  `,
  alpha: `
    [grid-area:d]
    relative
    inline-flex
    h-3/4
    ml-$spacing
  `,
  canvasAlpha: `
    $radius(-1,rounded-none,rounded-xl) ${
      "" /** don't allow canvas to go full rounded */
    }
  `,
  controlAlpha: `
    w-[4px]
    top-1/2
    h-[calc(100%-2px)]
    $radius(0,rounded-none,rounded-2xl)
  `,
  eyeDropper: `
    [grid-area:e]
    w-[2em]
    ml-$spacing
    self-center
    justify-center
    justify-self-center
    inline-flex
    content-center
    items-center
    aspect-[1/1]
    cursor-pointer
    $radius
    border
    border-$colorTemperature-$colorTemperatureStrength
    text-$colorTemperature-$colorTemperatureStrength 

    dark:border-$colorTemperature-$colorTemperatureStrengthDark
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  eyeDropperIcon: `
    w-auto 
    [&>svg]:w-[1em]
  `,
  formatField: `
    flex 
    items-center 
    justify-center 
    grow
  `,
  colorInputGroup: `
    flex
    items-center
    justify-center 
    grow
  `,
  fieldGroup: `
    ${"" /* base styles */}
    flex
    flex-col
    items-center
    justify-center
    w-full
    mr-$spacing(-2)
    ${
      "" /** === ⚠️ CAUTION: Nested input styles === 
    The colorpicker has nested inputs that are used to display the current color value in various formats.
    */
    }
    [&>input]:p-1
    [&>input]:text-$scale(-1)
    [&>input]:text-$colorTemperature-$colorTemperatureStrength
    [&>input]:m-0
    [&>input]:grow
    [&>input]:shrink
    [&>input]:w-full
    [&>input]:border
    [&>input]:border-$colorTemperature-$colorTemperatureStrength
    [&>input]:$radius
    [&>input]:text-center
    [&>input]:appearance-none
    [&>input::-webkit-outer-spin-button]:appearance-none
    [&>input::-webkit-inner-spin-button]:appearance-none
    [&>input::-webkit-inner-spin-button]:m-0
    [&>input:focus]:outline-none
    [&>input:focus]:ring-2
    max-[431px]:[&>input]:text-base ${
      "" /** prevent zoom on mobile touch devices */
    }

    dark:[&>input]:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:[&>input]:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  colorField: `
    bg-transparent
    text-$colorTemperature-$colorTemperatureStrength
    border
    border-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  fieldLabel: `
    text-$scale(-2,*) 
    text-$colorTemperature-$colorTemperatureStrength
    mt-$spacing

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  formatSwitcher: `
    flex
    justify-end
    self-start
    shrink-0
    p-1
    mt-0.5
    text-$colorTemperature-$colorTemperatureStrength
    select-none

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  switchIcon: `
    [&>svg]:w-3
  `,
  swatches: `
    inline-flex
    flex-wrap
    w-full
    justify-self-center
    mx-auto
    pt-$spacing
    pb-$spacing
    mt-$spacing
    -mb-$spacing
    border-t
    border-$colorTemperature-$colorTemperatureStrength
    overflow-auto
    max-h-[200px]
    select-none

    dark:border-$colorTemperature-$colorTemperatureStrengthDark

    ${
      "" /* special styling for when the swatch section is the
    only child of the panel */
    }
    first:-mt-$spacing
    first:last:-mb-$spacing
    first:border-t-0
  `,
  swatchGroup: `
    flex
    flex-wrap
    w-full
    mb-$spacing
    last:mb-0
  `,
  swatchGroupLabel: `
    ml-1
    block
    w-full
    text-$scale(-1,*)
    text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  swatch: `
    ${"" /* base styles */} 
    relative
    text-$scale
    w-[calc((100%/10)-0.5em)]
    max-w-[22px]
    m-[0.16em]
    cursor-pointer

    ${"" /* inset shadow styles */} 
    before:content-['']
    before:absolute
    before:inset-0
    before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]
    before:pointer-events-none 
    before:z-[2]

    dark:before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]

    ${"" /* active indicator styles */}
    data-[active=true]:after:content-['']
    data-[active=true]:after:block
    data-[active=true]:after:absolute
    data-[active=true]:after:w-1.5
    data-[active=true]:after:h-1.5
    data-[active=true]:after:top-1/2
    data-[active=true]:after:left-1/2
    data-[active=true]:after:pointer-events-none
    data-[active=true]:after:rounded-full
    data-[active=true]:after:-translate-x-1/2
    data-[active=true]:after:-translate-y-1/2
    data-[active=true]:after:bg-white
    data-[active=true]:after:z-[2]
    data-[active=true]:after:shadow-[0_0_0_1px_rgba(0,0,0,0.33)]

    ${"" /* canvas styles */}
    [&>canvas]:block
    [&>canvas]:w-full
    [&>canvas]:aspect-[1/1]
    [&>canvas:focus-visible]:outline-none
    [&>canvas:focus-visible]:ring-2
  `,
  help: `
    mt-$spacing(-1)
    group-data-[inline]:-mt-1 
    group-data-[inline]:mb-$spacing
  `,
  messages: ``,
  message: ``,
};
