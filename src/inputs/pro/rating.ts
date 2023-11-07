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
    w-full
  `,
  onItems: `
    text-yellow-400
  `,
  onItemWrapper: `
    [&>*]:w-full
    [&>*]:h-auto
    [&>*]:max-w-none
    [&>*]:max-h-none
  `,
  offItems: `
    text-$colorTemperature-400
    dark:first-letter:text-$colorTemperature-600
  `,
  offItemWrapper: `
    [&>*]:w-full
    [&>*]:h-auto
    [&>*]:max-w-none
    [&>*]:max-h-none
  `,
  ratingIcon: `
    w-full
  `,
};
