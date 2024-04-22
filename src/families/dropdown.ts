export default {
  // autocomplete: https://formkit.com/inputs/autocomplete#sections
  // dropdown: https://formkit.com/inputs/dropdown#sections
  // taglist: https://formkit.com/inputs/taglist#sections
  outer: ``,
  wrapper: ``,
  label: ``,
  inner: `
    relative
    flex
    items-center
    border
    border-$colorTemperature-$colorTemperatureStrength
    focus-within:ring-2
    $radius
    ${
      "" /** === ⚠️ CAUTION: Border radius on multi-line inputs === 
    inputs such as the taglist (and the dropdown when the appearance is set to "tags") can wrap to
    multiple lines. When the input is multiline we want to clamp the maximum radius to avoid undesireable
    styling effects.
    */
    }
    group-data-[is-multiline]:!$radius(0,rounded-none,rounded-2xl)

    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  prefixIcon: `
    !ml-$spacing
    !mr-0
    text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  suffixIcon: `
    !mr-$spacing
    !ml-0
    text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  input: `
    grow
    p-$spacing
    pr-0
    pl-$spacing(3)
    text-$scale
    text-$colorTemperature-$colorTemperatureStrength
    text-ellipsis
    min-w-0 ${"" /** allows section to shrink */}
    outline-none
    bg-transparent
    group-data-[prefix-icon]:!pl-0
    group-data-[suffix-icon]:!pr-0
    ${
      "" /** === ⚠️ CAUTION: Tailwind Forms Overrides === 
    These are overrides for the Tailwind Forms plugin. You should include them in case
    your theme user has the plugin enabled so that its styles don't conflict with your theme.
    */
    }
    border-none 
    focus:ring-0

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  selectionWrapper: ` ${
    "" /* autocomplete (selection-appearance: option), dropdown (single) */
  }
    grow
    flex
    items-center
    text-$colorTemperature-$colorTemperatureStrength

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  selection: ` ${
    "" /* autocomplete (selection-appearance: option), dropdown (single) */
  }
    grow
    text-$colorTemperature-$colorTemperatureStrength
    group-data-[multiple]:p-$spacing

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  tagsWrapper: ` ${"" /* dropdown, taglist */}
    w-full
  `,
  tags: ` ${"" /* dropdown, taglist */}
    inline-flex
    flex-wrap
    items-center
    w-full
    -mb-$spacing(-2) ${
      "" /** pull everything up equal to the bottom margin on our tags for consistent spacing */
    }
    empty:mb-0
  `,
  tagWrapper: ` ${"" /* dropdown, taglist */}
    group/tag ${
      "" /** important for styling tag-specific instance of removeSelection */
    }
    mr-$spacing(-2)
    mb-$spacing(-2)
    outline-none
    data-[active-selection=true]:ring-2
  `,
  tag: ` ${"" /* dropdown, taglist */}
    relative
    flex
    items-center
    text-$scale(-1)
    pl-$spacing
    pr-[1.5em] ${"" /** make room for the close button */}
    py-$spacing
    h-[1.66em]
    bg-$accentColor-900
    $radius
    text-white

    dark:bg-$accentColor-100
    dark:text-black
  `,
  tagLabel: ` ${"" /* dropdown, taglist */}
  `,
  controlLabel: `
    absolute
    opacity-0
    pointer-events-none
    text-[0px]
  `,
  listboxButton: ` ${"" /* autocomplete, taglist */}
    w-[2.5em]
    self-stretch
    text-$scale
    flex
    items-center
    text-$colorTemperature-$colorTemperatureStrength
    z-10

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  removeSelection: `
    ${
      "" /** === ⚠️ CAUTION: shared section, different treatments === 
      The dropdown, autocomplete, and taglist all have a remove selection section.
      the styles here handle the standard dropdown and autocomplete option appearance, 
      but the dropdown and taglist require special consideration when their appearence
      is rendering tags.
      */
    }
    w-[2.5em]
    self-stretch
    text-$scale
    flex
    items-center
    text-$colorTemperature-$colorTemperatureStrength
    z-10

    dark:text-$colorTemperature-$colorTemperatureStrengthDark

    ${
      "" /** === ⚠️ CAUTION: Styling the tag close button === 
      The tag close button shares a section name (removeSelection) which is already styled
      above for a single-option selection. here we need to override these styles to handle the 
      removeSelection section within the context of a tag.
      */
    }
    group-[]/tag:absolute
    group-[]/tag:top-1/2
    group-[]/tag:right-[0.5em]
    group-[]/tag:-translate-y-1/2
    group-[]/tag:!w-[0.5em]
    group-[]/tag:aspect-[1/1]
    group-[]/tag:!text-inherit
  `,
  selectIcon: `
    text-$scale
    inline-flex
    justify-center
    w-[2.5em]
    relative
    my-auto
    [&>svg]:w-[1em]
    [&>svg]:mx-auto
  `,
  closeIcon: `
    text-$scale
    w-[0.75em]
    relative
    m-auto
  `,
  loaderIcon: `${"" /** defined in __global styles */}
  `,
  loadMore: `
    data-[is-active]:bg-$accentColor-100
  `,
  dropdownWrapper: `
    $radius(0,rounded-none,rounded-2xl) ${
      "" /** don't allow dropdown listbox to go full rounded */
    }
    empty:hidden
    border
    border-$colorTemperature-$colorTemperatureStrength
    dark:border-$colorTemperature-$colorTemperatureStrengthDark

    ${
      "" /** for overscroll dropdowns we need to disable border styles on the dropdownWrapper */
    }
    group-data-[overscroll]:shadow-none
    group-data-[overscroll]:border-none
  `,
  listbox: `
    bg-white
    $radius(0,rounded-none,rounded-2xl) ${
      "" /** don't allow dropdown to go full rounded */
    }
    overflow-clip
    empty:hidden
    dark:bg-$colorTemperature-900

    ${
      "" /** for overscroll dropdowns we need to move the border styles to the listbox */
    }
    group-data-[overscroll]:border
    group-data-[overscroll]:border-$colorTemperature-$colorTemperatureStrength
    group-data-[overscroll]:dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  listitemGroup: `
    group/optgroup
    first:border-t-0
    last:border-b-0
    border-t
    border-b
    -mb-px
    border-$colorTemperature-$colorTemperatureStrength
    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  groupLabel: `
    block
    pt-$spacing(-1,*)
    pb-$spacing(-2,*)
    px-$spacing(1,*)
    font-bold
    pointer-events-none
    text-$colorTemperature-$colorTemperatureStrength
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  listitem: `
    relative
    flex
    items-center
    px-$spacing
    py-$spacing(-1)
    first:pt-$spacing
    last:pb-$spacing
    text-$colorTemperature-$colorTemperatureStrength
    text-$scale
    data-[is-active]:bg-$accentColor-100
    ${"" /* keyboard focus on active items */}
    before:content-['']
    before:absolute
    before:inset-0
    data-[is-active]:before:ring-1
    data-[is-active]:before:ring-inset
    data-[is-active]:before:ring-$accentColor-300
    data-[is-active]:first:before:$radius(0,rounded-none,rounded-2xl)
    data-[is-active]:first:before:rounded-b-none
    data-[is-active]:last:before:$radius(0,rounded-none,rounded-2xl)
    data-[is-active]:last:before:rounded-t-none
    data-[is-active]:first:last:before:$radius(0,rounded-none,rounded-2xl)
    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:data-[is-active]:bg-$accentColor-700
    dark:data-[is-active]:before:ring-$accentColor-400

    group-[]/optgroup:first:before:!rounded-none
    group-[]/optgroup:last:before:!rounded-none
  `,
  selectedIcon: `
    flex
    absolute
    items-center
    text-$accentColor-600
    left-$spacing
    text-$scale
    h-[0.75em]
    w-[0.75em]
    shrink-0
    [&>svg]:w-full

    dark:text-$accentColor-400
  `,
  option: `
    ml-[1.25em]
  `,
  optionLoading: ``,
  emptyMessage: `
    flex
    items-center
    px-$spacing
    py-$spacing(-1)
    first:pt-$spacing
    last:pb-$spacing
    text-$colorTemperature-$colorTemperatureStrength
    text-$scale(-1)

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  emptyMessageInner: ``,
  help: ``,
  messages: ``,
  message: ``,
};
