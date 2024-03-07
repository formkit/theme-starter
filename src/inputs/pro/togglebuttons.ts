export default {
  // inherits family:button classes
  // https://formkit.com/inputs/togglebuttons#sections
  options: `
    group/options
    inline-flex
    data-[vertical=true]:flex-col
  `,
  option: `
    group/option
  `,
  input: `
    !px-$spacing(4,*)
    group-data-[vertical=true]/options:w-full
    justify-center

    disabled:opacity-50
    disabled:cursor-not-allowed
    group-data-[disabled]:disabled:opacity-100

    aria-[pressed=true]:bg-$accentColor-$accentColorStrength
    aria-[pressed=true]:text-white
    dark:aria-[pressed=true]:bg-$accentColor-$accentColorStrengthDark
    dark:aria-[pressed=true]:text-black
    
    ${
      "" /** 
      if our button is part of an option group
      then by default, turn off all rounding.
      We will need to selectively re-enable based
      on they layout of the group and a given 
      buttons position within the group.
    */
    }
    group-[]/option:!rounded-none

    ${"" /** selectively add back and override rounding for first child */}
    group-data-[vertical=false]/options:group-first/option:!$radius
    group-data-[vertical=true]/options:group-first/option:!$radius(0,rounded-none,rounded-2xl)

    group-data-[vertical=false]/options:group-first/option:!rounded-tr-none
    group-data-[vertical=false]/options:group-first/option:!rounded-br-none
    group-data-[vertical=true]/options:group-first/option:!rounded-bl-none
    group-data-[vertical=true]/options:group-first/option:!rounded-br-none

    ${"" /** selectively add back and override rounding for last child */}
    group-data-[vertical=false]/options:group-last/option:!$radius
    group-data-[vertical=true]/options:group-last/option:!$radius(0,rounded-none,rounded-2xl)

    group-data-[vertical=false]/options:group-last/option:!rounded-tl-none
    group-data-[vertical=false]/options:group-last/option:!rounded-bl-none
    group-data-[vertical=true]/options:group-last/option:!rounded-tl-none
    group-data-[vertical=true]/options:group-last/option:!rounded-tr-none

    ${
      "" /** 
      if our button is part of an option group
      then we need to selectively manage borders.
    */
    }
    group-data-[vertical=false]/options:group-[]/option:!border-r-0
    group-data-[vertical=false]/options:group-last/option:!border-r

    group-data-[vertical=false]/options:group-[]/option:aria-[pressed=true]:border-x-$accentColor-$accentColorStrengthDark
    group-data-[vertical=false]/options:group-first/option:aria-[pressed=true]:border-l-$accentColor-$accentColorStrength
    group-data-[vertical=false]/options:group-last/option:aria-[pressed=true]:border-r-$accentColor-$accentColorStrength
    dark:group-data-[vertical=false]/options:group-[]/option:aria-[pressed=true]:border-x-$accentColor-$accentColorStrength
    dark:group-data-[vertical=false]/options:group-first/option:aria-[pressed=true]:border-l-$accentColor-$accentColorStrengthDark
    dark:group-data-[vertical=false]/options:group-last/option:aria-[pressed=true]:border-r-$accentColor-$accentColorStrengthDark
    
    group-data-[vertical=true]/options:group-[]/option:!border-b-0
    group-data-[vertical=true]/options:group-last/option:!border-b

    group-data-[vertical=true]/options:group-[]/option:aria-[pressed=true]:border-y-$accentColor-$accentColorStrengthDark
    group-data-[vertical=true]/options:group-first/option:aria-[pressed=true]:border-t-$accentColor-$accentColorStrength
    group-data-[vertical=true]/options:group-last/option:aria-[pressed=true]:border-b-$accentColor-$accentColorStrength
    dark:group-data-[vertical=true]/options:group-[]/option:aria-[pressed=true]:border-y-$accentColor-$accentColorStrength
    dark:group-data-[vertical=true]/options:group-first/option:aria-[pressed=true]:border-t-$accentColor-$accentColorStrengthDark
    dark:group-data-[vertical=true]/options:group-last/option:aria-[pressed=true]:border-b-$accentColor-$accentColorStrengthDark
  `,
};
