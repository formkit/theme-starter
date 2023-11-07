export default {
  // inherits family:text classes
  // https://formkit.com/inputs/file#sections
  outer: ``,
  wrapper: ``,
  label: ``,
  prefixIcon: ``,
  suffixIcon: ``,
  inner: `
    relative ${
      "" /** position relative so that we can cover the whole inner with an invisible input */
    }
    ${
      "" /** === ⚠️ CAUTION: Constraining radius on multi-item inputs === 
    If we don't constrain the radius on multi-item inputs then the radius will
    create a very undesired visual effect when more than one item exists.
    */
    }
    group-data-[multiple]:$radius(0,rounded-none,rounded-2xl)`,
  input: `
    ${
      "" /** === ⚠️ CAUTION: Styling of default File inputs === 
      Browsers come with opinionated (and ugly) styles out of the box for file inputs.
      The best thing we can do is hide the browser-native input visually and position it 
      over top of our custom elements. It's still clickable, just not visible.
    */
    }
    text-transparent
    absolute
    inset-0
    opacity-0
    z-10
    file:pointer-events-none
    file:w-0
    file:h-0
    file:overflow-hidden
  `,
  fileList: `
    group/list
    peer
    grow
    min-w-0 ${"" /** allows the section to shrink when needed */}
  `,
  fileItemIcon: `
    h-[1em]
    w-[1em]
    mr-$spacing
    shrink-0
  `,
  fileItem: `
    flex
    min-w-0 ${"" /** allows the section to shrink when needed */}
    items-center
    text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  fileName: `
    truncate ${"" /** recommended */}
    min-w-0 ${"" /** allows the section to shrink when needed */}
    w-full
    shrink
  `,
  fileRemove: `
    flex
    items-center
    text-$colorTemperature-$colorTemperatureStrength
    text-[0px] ${
      "" /** on single inputs hide the remove text because we have an icon */
    }
    peer-data-[has-multiple]:text-xs ${
      "" /** on multiple inputs show the remove text */
    }
    peer-data-[has-multiple]:shrink-0 ${
      "" /** prevents wrapping for remove text */
    }
    ${"" /** override browser default styles for button */}
    appearance-none
    outline-none
    ${
      "" /** === ⚠️ CAUTION: File remove z-index === 
    If we do not bump up the z-index of the remove section then it will not be 
    clickable because it'll be covered by the actual file input.
    */
    }
    relative 
    z-20

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  fileRemoveIcon: `
    block 
    text-base 
    w-[0.75em] 
  `,
  noFiles: `
    flex
    w-full
    items-center
    text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  noFilesIcon: `
    w-[1em]
    mr-$spacing
  `,
  help: ``,
  messages: ``,
  message: ``,
};
