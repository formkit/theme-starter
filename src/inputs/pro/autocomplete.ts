export default {
  // inherits family:dropdown classes
  // https://formkit.com/inputs/autocomplete#sections
  outer: ``,
  wrapper: ``,
  label: ``,
  inner: ``,
  prefixIcon: ``,
  suffixIcon: ``,
  input: ``,
  selections: `
    flex
    ${
      "" /** === ⚠️ CAUTION: selection appearance option — single ===
    (Usually) with a single value set to appearance "option" we want to make sure the
    selection is positioned over top of the input
    */
    }
    absolute
    inset-0
    ${
      "" /** === ⚠️ CAUTION: selection appearance option — multiple ===
    (Usually) with a multiple value set to appearance "option" we want to make sure the
    selection is presented as a list below the input.
    */
    }
    group-data-[multiple]:static
    group-data-[multiple]:block
    group-data-[empty]:hidden
    group-data-[multiple]:mt-$spacing(-1)
  `,
  selectionWrapper: `
    bg-$colorTemperature-100
    $radius
    group-data-[multiple]:border
    group-data-[multiple]:border-$colorTemperature-$colorTemperatureStrength
    group-data-[multiple]:mb-$spacing(-1)
    outline-none
    data-[active-selection=true]:ring-2

    dark:bg-$colorTemperature-700
    dark:group-data-[multiple]:border-$colorTemperature-$colorTemperatureStrengthDark

    ${
      "" /** Drag and drop styles:
      - dropZone
      - touchDropZone
      - touchDragging
      - longTouch .*/
    }
    [&.formkit-dropZone]:opacity-50
    [&.formkit-touchDropZone]:opacity-50
    [&.formkit-touchDragging]:!flex
    [&.formkit-longTouch]:opacity-50
  `,
  selection: `
    $radius
    pl-$spacing

    ${
      "" /** === ⚠️ CAUTION: Nested 'option' section within 'selection' section ===
    When selection appearance is set to 'option' an option section will be rendered within the 'selection' wrapper.
    We probably want to remove styles that made sense when the option was being rendered inside a listbox that
    no longer make sense when being rendered inside the selection wrapper.
    */
    }
    [&>*]:ml-0
  `,
  loaderIcon: ``,
  removeSelection: ``,
  listboxButton: ``,
  selectIcon: ``,
  dropdownWrapper: ``,
  listbox: ``,
  listitem: ``,
  selectedIcon: ``,
  option: ``,
  emptyMessage: ``,
  emptyMessageInner: ``,
  help: ``,
  messages: ``,
  message: ``,
};
