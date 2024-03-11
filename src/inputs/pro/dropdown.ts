export default {
  // inherits family:dropdown classes
  // https://formkit.com/inputs/dropdown#sections
  outer: ``,
  wrapper: ``,
  label: ``,
  inner: ``,
  prefixIcon: ``,
  suffixIcon: ``,
  selector: `
    flex
    grow
    justify-between
    w-full
    py-$spacing
    pl-$spacing(2,*)
    pr-0
    text-$scale
    text-$colorTemperature-$colorTemperatureStrength
    text-left
    group-data-[prefix-icon]:!pl-0
    group-data-[suffix-icon]:!pr-0
    data-[placeholder]:text-$colorTemperature-400

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:data-[placeholder]:text-$colorTemperature-500
  `,
  placeholder: `
    grow
  `,
  optionLoading: ``,
  selectionWrapper: ``,
  selection: ` ${"" /** single selection dropdown */}
    ${
      "" /** === ⚠️ CAUTION: Overriding option styles inside selection ===
    The dropdown selection renders the same option template as the dropdown option list. However,
    in the selection styles we probably don't want the extra left margin that is applied to the option
    when it is in the list to account for the active icon.
    */
    }
    [&>*]:ml-0
  `,
  selectionsWrapper: `
    w-[85%] overflow-hidden
  `,
  selections: ` ${"" /** multi-selection dropdown */}
    inline-flex
    items-center
  `,
  selectionsItem: `
    whitespace-nowrap ${
      "" /** prevent text from wrapping — the dropdown will automatically truncate */
    }
    mr-1
  `,
  truncationCount: `
    flex
    items-center
    justify-center
    h-[1.5em]
    bg-$colorTemperature-$colorTemperatureStrength
    text-white
    whitespace-nowrap
    text-$scale(-3,*)
    tracking-tighter
    leading-0
    py-$spacing(-4,*)
    px-$spacing(-2,*)
    shrink-0
    my-auto

    dark:bg-$colorTemperature-$colorTemperatureStrengthDark
    dark:text-$colorTemperature-900
  `,
  tagsWrapper: ``,
  tags: ``,
  tagWrapper: `
  ${
    "" /** Drag and drop styles:
    - dropZone
    - touchDropZone
     .*/
  }
  [&.formkit-dropZone_.formkit-tag]:opacity-50
  [&.formkit-touchDropZone_.formkit-tag]:opacity-50
  `,

  tag: ``,
  tagLabel: ``,
  removeSelection: ``,
  selectIcon: `
    shrink-0
  `,
  dropdownWrapper: `
  ${
    "" /** === ⚠️ CAUTION: Overscroll style ===
    The dropdown input supports an 'overscroll' behavior that allows the to scroll its option list
    over the input itself. This is a desired treatment for very long lists of options but it does require some
    special styling considerations.
  */
  }
  group-data-[overscroll]:m-0
  group-data-[overscroll]:shadow-none
  `,
  listbox: ``,
  emptyMessage: ``,
  emptyMessageInner: ``,
  listItem: ``,
  selectedIcon: ``,
  option: ``,
  help: ``,
  messages: ``,
  message: ``,
};
