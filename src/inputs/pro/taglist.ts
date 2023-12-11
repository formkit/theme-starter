export default {
  // inherits family:dropdown classes
  // https://formkit.com/inputs/taglist#sections
  outer: ``,
  wrapper: ``,
  label: ``,
  inner: `
    py-$spacing
    pr-0
    pl-0
  `,
  prefixIcon: ``,
  suffixIcon: ``,
  tags: `
    pl-$spacing(2,2,4)
  `,
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
  input: `
    !p-0
    !w-[0%]
    min-w-[1em]
    inline-block
    mb-$spacing(-2)
  `,
  loaderIcon: ``,
  listboxButton: `
    ml-auto
    shrink-0
  `,
  selectIcon: ``,
  dropdownWrapper: ``,
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
