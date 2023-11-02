export default {
  // https://formkit.com/inputs/transferlist#sections
  outer: `
    max-w-none ${
      "" /** allow the transferlist to grow to fit its container because it's a wide input by definition */
    }

    ${"" /** drag-and-drop specific styling for descendant items */}
    [&_.dnd-placeholder]:bg-$accentColor-$accentColorStrength
    &_.dnd-placeholder]:text-white
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
  `,
  transferlistHeaderLabel: ``,
  transferlistHeaderItemCount: `
    ml-auto
    text-xs
    text-center
    text-$colorTemperature-$colorTemperatureStrength
  `,
  transferlistControls: ` ${
    "" /** container for search control in transferist source list header */
  }
    p-$spacing
    border-b
    border-$colorTemperature-$colorTemperatureStrength
  `,
  transferlistSearch: ``,
  transferlistSearchInput: `
    text-$colorTemperature-$colorTemperatureStrength
    border
    border-$colorTemperature-$colorTemperatureStrength
    $radius
    px-$spacing
    py-$spacing(-1)
    w-full
    bg-transparent
    outline-none
    text-$scale(-1,*)
  `,
  transferlistSearchClear: ``,
  closeIcon: ``,
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
  `,
  selectedIcon: `
    absolute
    w-[0.75em]
    left-[0.5em]
    text-$accentColor-$accentColorStrength
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
  sourceSearch: ``,
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
    hidden
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
