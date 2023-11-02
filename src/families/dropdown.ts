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
    $radius
    focus-within:ring-2
  `,
  prefixIcon: `
    !ml-$spacing
    !mr-0
    text-$colorTemperature-$colorTemperatureStrength
  `,
  suffixIcon: `
    !mr-$spacing
    !ml-0
    text-$colorTemperature-$colorTemperatureStrength
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
    border-none focus:ring-0
  `,
  selectionWrapper: ` ${
    "" /* autocomplete (selection-appearance: option), dropdown (single) */
  }
    grow
    flex
    items-center
    text-$colorTemperature-$colorTemperatureStrength
  `,
  selection: ` ${
    "" /* autocomplete (selection-appearance: option), dropdown (single) */
  }
    grow
    text-$colorTemperature-$colorTemperatureStrength
    group-data-[multiple]:p-$spacing
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
  `,
  tagLabel: ` ${"" /* dropdown, taglist */}
  `,
  listboxButton: ` ${"" /* autocomplete, taglist */}
    w-[2.5em]
    self-stretch
    text-$scale
    flex
    items-center
    text-$colorTemperature-$colorTemperatureStrength
    z-10
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
    group-[]/tag:aspect-square
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
  dropdownWrapper: `
    $radius(0,rounded-none,rounded-2xl) ${
      "" /** don't allow dropdown listbox to go full rounded */
    }
  `,
  listbox: `
    bg-white
    $radius(0,rounded-none,rounded-2xl) ${
      "" /** don't allow dropdown to go full rounded */
    }
    overflow-clip
    border
    border-$colorTemperature-$colorTemperatureStrength
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
    aria-selected:!bg-$accentColor-100
    data-[is-active]:bg-$accentColor-100

    ${"" /* keyboard focus on active items */}
    before:content-['']
    before:absolute
    before:inset-0
    data-[is-active]:aria-selected:before:ring-2
    data-[is-active]:aria-selected:before:ring-inset
    data-[is-active]:aria-selected:before:ring-$accentColor-300
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
  `,
  emptyMessageInner: ``,
  help: ``,
  messages: ``,
  message: ``,
};