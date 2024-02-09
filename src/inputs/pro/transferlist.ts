export default {
  // https://formkit.com/inputs/transferlist#sections
  outer: `
    max-w-none ${
      "" /** allow the transferlist to grow to fit its container because it's a wide input by definition */
    }

    ${"" /** drag-and-drop specific styling for descendant items */}
    [&_.dnd-placeholder]:bg-$accentColor-$accentColorStrength
    &_.dnd-placeholder]:text-white

    dark:[&_.dnd-placeholder]:bg-$accentColor-$accentColorStrengthDark
    dark:[&_.dnd-placeholder]:text-$colorTemperature-900
  `,
  fieldset: ``,
  legend: ``,
  help: `
    pb-$spacing
  `,
  wrapper: `
    flex
    flex-col
    sm:flex-row
    justify-between
    w-full
    max-w-none
  `,

  /** === ⚠️ CAUTION: transferList vs source vs target ===
   * The transferlist input has 3 sets of class names that you can
   * use for styling.
   *
   * transferlist* = affects both the source and target lists
   * source* = affects only the source list
   * target* = affects only the target list
   *
   * For the skeleton theme the transferlist* class names are used
   * but it's valuable to know the others are available.
   */
  transferlist: `
    grow
    shrink
    min-w-0
    aspect-[4/5]
    h-[350px] ${
      "" /** even with an aspect ration defined, safari won't cap the height without an explicit value */
    }
    overflow-hidden
    flex
    flex-col
    border
    border-$colorTemperature-$colorTemperatureStrength
    $radius(0,rounded-none,rounded-2xl) ${"" /** Don't go full rounded */}
    select-none ${
      "" /** prevent text selection on the transferlist — probably want to do this because it supports drag-and-drop */
    }

    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  transferlistHeader: `
    flex
    text-$colorTemperature-$colorTemperatureStrength
    text-$scale(-1,*)
    justify-between
    items-center
    border-b
    border-$colorTemperature-$colorTemperatureStrength
    py-$spacing
    px-$spacing(1,*)

    dark:border-$colorTemperature-$colorTemperatureStrengthDark
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  transferlistHeaderLabel: ``,
  transferlistHeaderItemCount: `
    ml-auto
    text-xs
    text-center
    text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  transferlistControls: ` ${
    "" /** container for search control in transferist source list header */
  }
    p-$spacing
    border-b
    border-$colorTemperature-$colorTemperatureStrength

    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  transferlistSearch: `
    border
    $radius
    border-$colorTemperature-$colorTemperatureStrength
    text-$colorTemperature-$colorTemperatureStrength
    px-$spacing(1,*)
    py-$spacing

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  transferlistSearchInput: `
    w-full
    bg-transparent
    outline-none
    text-$scale(-1,*)
    cursor-pointer
  `,
  transferlistSearchClear: `
    m-auto
  `,
  closeIcon: `
    ml-2
    text-$colorTemperature-$colorTemperatureStrength
    select-none
    flex
    text-$scale
    [&>svg]:w-full
    [&>svg]:max-w-[1em]
  `,
  transferlistListItems: `
    h-full
    overflow-y-auto
  `,
  transferlistListItem: `
    bg-white
    py-$spacing
    px-$spacing
    text-$colorTemperature-$colorTemperatureStrength
    ring-1
    ring-$colorTemperature-$colorTemperatureStrength
    aria-selected:bg-$accentColor-100
    data-[is-active=true]:bg-$accentColor-100
    relative
    flex
    items-center
    pl-[1.5em]

    ${
      "" /** Drag and drop styles:
      - dropZone
      - selectionDropZone
      - touchDropZone
      - touchSelectionDropZone
      - longTouch .*/
    }
    [&.formkit-dropZone]:bg-$accentColor-100
    [&.formkit-selectionDropZone]:bg-$accentColor-100
    [&.formkit-touchDropZone]:bg-$accentColor-100
    [&.formkit-touchSelectionDropZone]:bg-$accentColor-100
    [&.formkit-longTouch]:bg-$accentColor-100

    dark:bg-$colorTemperature-900
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:aria-selected:bg-$accentColor-700
    dark:data-[is-active=true]:bg-$accentColor-700
    dark:ring-$colorTemperature-$colorTemperatureStrengthDark
  `,

  selectedIcon: `
    absolute
    w-[0.75em]
    left-[0.5em]
    text-$accentColor-$accentColorStrength

    dark:text-$accentColor-$accentColorStrengthDark
  `,
  transferlistOption: `
    text-$scale(-1,*)
  `,
  transferListLoadMore: ``,

  /** === ⚠️ CAUTION: transferList vs source vs target ===
   * the source* class lists are available if you want to provide
   * a different treatment to the source list.
   */
  source: ``,
  sourceHeader: ``,
  sourceHeaderLabel: ``,
  sourceHeaderItemCount: ``,
  sourceControls: ``,
  sourceSearch: `
    flex
    items-center
  `,
  sourceSearchInput: ``,
  sourceSearchClear: ``,
  sourceListItems: `
    group-data-[is-max=true]:opacity-50 ${
      "" /** similar to disabled styles — indicate when users cannot transfer any more items */
    }
  `,
  sourceListItem: ``,
  sourceOption: ``,
  sourceEmptyMessage: `
    my-$spacing
    text-center
    text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  sourceLoadMore: ``,
  sourceLoadMoreInner: ``,

  /** === ⚠️ CAUTION: transferList vs source vs target ===
   * the target* class lists are available if you want to provide
   * a different treatment to the source list.
   */
  target: ``,
  targetHeader: ``,
  targetHeaderLabel: ``,
  targetHeaderItemCount: ``,
  targetListItems: ``,
  targetListItem: ``,
  targetOption: ``,
  targetEmptyMessage: `
    my-$spacing
    text-center
    text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  targetLoadMore: ``,

  emptyMessageInner: `
    flex
    items-center
    justify-center
    p-$spacing
    text-$scale(-1,*)
  `,
  loadMoreInner: ``,
  transferControls: `
    inline-flex
    flex-row ${"" /** horizontal treatment for smaller displays */}
    justify-center
    grow-0
    shrink
    border
    border-$colorTemperature-$colorTemperatureStrength
    $radius
    overflow-clip
    my-$spacing
    mx-auto

    dark:border-$colorTemperature-$colorTemperatureStrengthDark

    ${
      "" /** === ⚠️ CAUTION: Responsive Styles ===
    The transferlist input is a larger input that most that ship with FormKit
    so we need to consider responsive styles. By default the transferlist lists
    are stacked vertically on small screens and horizontally on larger screens.
    For larger screens, we want to stack the controls vertically between the two lists.
    */
    }
    sm:flex-col
    sm:my-auto
    sm:mx-$spacing
  `,
  controlLabel: `
    absolute
    opacity-0
    pointer-events-none
    text-[0px]
  `,
  transferlistButton: `
    ${"" /** These styles apply to every transferlist control button */}
    appearance-none
    border-none
    flex
    justify-center
    text-$scale(-2)
    shrink-0
    box-content ${"" /** prevent padding from collapsing SVGs */}
    text-$colorTemperature-$colorTemperatureStrength
    disabled:!text-$colorTemperature-400
    p-$spacing(2)
    disabled:opacity-50

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:disabled:!text-$colorTemperature-500
  `,
  transferButtonForwardAll: ``,
  transferButtonForward: ``,
  transferButtonBackward: ``,
  transferButtonBackwardAll: ``,
  fastForwardIcon: `
    w-4
    flex
    select-none
    [&>svg]:m-auto
    [&>svg]:w-full
    [&>svg]:max-w-[1rem]
    [&>svg]:max-h-[1rem]
    rotate-90
    sm:rotate-0
  `,
  moveRightIcon: `
    w-4
    flex
    select-none
    [&>svg]:m-auto
    [&>svg]:w-full
    [&>svg]:max-w-[1rem]
    [&>svg]:max-h-[1rem]
    rotate-90
    sm:rotate-0
  `,
  moveLeftIcon: `
    w-4
    flex
    select-none
    [&>svg]:m-auto
    [&>svg]:w-full
    [&>svg]:max-w-[1rem]
    [&>svg]:max-h-[1rem]
    rotate-90
    sm:rotate-0
  `,
  rewindIcon: `
    w-4
    flex
    select-none
    [&>svg]:m-auto
    [&>svg]:w-full
    [&>svg]:max-w-[1rem]
    [&>svg]:max-h-[1rem]
    rotate-90
    sm:rotate-0
  `,
  messages: `
    mt-$spacing
  `,
  message: ``,
};
