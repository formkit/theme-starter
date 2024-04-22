export default {
  // https://formkit.com/inputs/rating#sections
  outer: ``,
  wrapper: ``,
  label: ``,
  inner: `
    flex
    w-[130px]
    items-center
    relative
  `,
  prefixIcon: ``,
  suffixIcon: ``,
  itemsWrapper: `
    relative
    inline-flex
    focus:outline-2
    focus:outline-$accentColor-$accentColorStrength
  `,
  onItemRow: `
    h-full
    w-full
  `,
  offItemRow: `
    h-full
    w-full
  `,
  onItemWrapper: `
    [&>*]:w-full
    [&>*]:h-full
    w-full
    h-full
    text-yellow-400
  `,
  offItemWrapper: `
    [&>*]:w-full
    [&>*]:h-full
    w-full
    h-full
    text-$colorTemperature-400
    dark:text-$colorTemperature-500
  `,
  ratingItem: `
    relative
    focus-within:outline
    focus-within:outline-2
    focus-within:outline-$accentColor-$accentColorStrength
    w-[1.5em]
    h-[1.5em]
  `,
  itemLabelInner: `
    h-px
    w-px
    overflow-hidden
    absolute
    white-space-nowrap
  `,
  itemLabel: `
    absolute
    h-full
  `,
  ratingIcon: `
    w-[1.5em]
    h-[1.5em]
    flex
  `,
  input: `
    outline-none
  `,
  messages: `
    mt-$spacing(-1)
  `,
};
