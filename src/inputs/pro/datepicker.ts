export default {
  // inherits from family:text classes
  // https://formkit.com/inputs/datepicker#sections
  outer: ``,
  wrapper: ``,
  label: ``,
  inner: `
    relative
  `,
  prefixIcon: ``,
  suffixIcon: ``,
  removeSelection: ``,
  clearIcon: `
    flex
    items-center
    ml-$spacing(-2,0,1.5)
    mr-$spacing
    text-$colorTemperature-$colorTemperatureStrength
    text-$scale
    text-$scale
    w-[0.75em]
    h-[0.75em]
    shrink-0
    [&>svg]:w-full
  `,
  overlay: ``,
  overlayInner: ``,
  overlayPlaceholder: ``,
  overlayChar: ``,
  overlayEnum: ``,
  overlayLiteral: ``,
  input: ``,
  openButton: `
    appearance-none
    border-0
    bg-transparent
    flex
    p-0
    self-stretch
    focus-visible:outline-none
    focus-visible:ring-2
  `,
  calendarIcon: `
    text-$colorTemperature-600
    focus-visible:text-$accentColor-$accentColorStrength
    flex
    w-[1em]
    grow-0
    shrink-0
    self-stretch
    select-none
    [&>svg]:w-full
    [&>svg]:m-auto
    [&>svg]:max-h-[1em]
    [&>svg]:max-w-[1em]

    dark:text-$colorTemperature-400
    dark:focus-visible:text-$accentColor-$accentColorStrengthDark
  `,
  panelWrapper: `
    group/panel
    absolute
    min-w-[20em]
    top-full
    left-0
    $radius(0,rounded-none,rounded-2xl) ${"" /** Don't go full rounded */}
    p-$spacing(4,*)
    bg-white 
    border
    border-$colorTemperature-$colorTemperatureStrength
    z-[99]

    dark:bg-$colorTemperature-900
    dark:border-$colorTemperature-$colorTemperatureStrengthDark

    ${
      "" /** === ⚠️ CAUTION: Mobile touch styles ===
      When the datepicker is being used on small touch devices it is helpful to 
      render it as a fixed position element so that users do not have to scroll the page
      in order to interact with it. At 430px and below the input will render a close button
      in the header of the panel that we need to account for styling. You will want to test this 
      in your browser by emulating a mobile device and then resizing the browser window to 430px or below.
    */
    }
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:!fixed
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:top-auto
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:max-w-none
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:bottom-0
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:left-0
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:rounded-none
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:w-full
  `,
  panelHeader: `
    grid
    grid-cols-[2.5em_1fr_2.5em]
    justify-center
    items-center
    border-b-2
    border-$colorTemperature-$colorTemperatureStrength
    mb-$spacing
    pb-$spacing(1,*)

    dark:border-$colorTemperature-$colorTemperatureStrengthDark

    ${
      "" /** === ⚠️ CAUTION: Mobile touch styles ===
      When the colorpicker is being used on small touch devices it is helpful to 
      render it as a fixed position element so that users do not have to scroll the page
      in order to interact with it. At 430px and below the input will render a close button
      in the header of the panel that we need to account for styling. You will want to test this 
      in your browser by emulating a mobile device and then resizing the browser window to 430px or below.
    */
    }
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:grid-cols-[2.5em_1fr_2.5em_2.5em]
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:group-data-[panel=time]/panel:grid-cols-[2.5em_1fr_2.5em]
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:group-data-[panel=month]/panel:grid-cols-[2.5em_1fr_2.5em]
  `,
  panelClose: `
    aspect-[1/1]
    border
    border-$colorTemperature-400
    $radius
    flex
    items-center
    justify-center
    text-$colorTemperature-$colorTemperatureStrength
    [&_svg]:w-[1.25em]

    dark:border-$colorTemperature-600
    dark:text-$colorTemperature-$colorTemperatureStrengthDark

    ${
      "" /** === ⚠️ CAUTION: Mobile touch styles ===
      When the colorpicker is being used on small touch devices it is helpful to 
      render it as a fixed position element so that users do not have to scroll the page
      in order to interact with it. At 430px and below the input will render a close button
      in the header of the panel that we need to account for styling. You will want to test this 
      in your browser by emulating a mobile device and then resizing the browser window to 430px or below.
    */
    }
    [@media(max-width:431px)_and_(hover:none)]:group-data-[panel=time]/panel:col-start-3
    [@media(max-width:431px)_and_(hover:none)]:group-data-[panel=month]/panel:col-start-3
  `,
  monthsHeader: `
    flex
    items-center
    justify-center
    col-start-2
    col-end-2
  `,
  yearsHeader: `
    flex
    items-center
    justify-center
    text-$colorTemperature-$colorTemperatureStrength
    col-start-2
    col-end-2

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  timeHeader: `
    flex
    items-center
    justify-center
    col-start-2
    col-end-2
  `,
  daysHeader: `
    flex 
    items-center 
    justify-center
  `,
  prev: `
    mr-auto
    px-$spacing(1,*)
    py-$spacing(-3,*)
    col-start-1
    col-end-1
    focus-visible:outline-none
    focus-visible:ring-2
  `,
  next: `
    ml-auto
    px-$spacing(1,*)
    py-$spacing(-3,*)
    col-start-3
    col-end-3
    focus-visible:outline-none
    focus-visible:ring-2
  `,
  prevLabel: `
    hidden
  `,
  nextLabel: `
    hidden
  `,
  prevIcon: `
    flex
    w-[0.75em]
    select-none
    text-$colorTemperature-$colorTemperatureStrength
    [&>svg]:w-full

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  nextIcon: `
    flex
    w-[0.75em]
    select-none
    text-$colorTemperature-$colorTemperatureStrength
    [&>svg]:w-full

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  panel: `
    flex 
    justify-center
  `,
  months: `
    grid
    grid-cols-3
    w-full
  `,
  month: `
    m-$spacing
    p-$spacing
    text-center
    text-$colorTemperature-$colorTemperatureStrength
    bg-transparent
    aria-selected:!bg-$accentColor-$accentColorStrength
    aria-selected:!text-white
    focus:outline-none
    focus:ring-2
    focus:bg-white
    group-data-[disabled=true]:opacity-50
    group-data-[disabled=true]:pointer-events-none

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:aria-selected:!bg-$accentColor-$accentColorStrengthDark
    dark:aria-selected:!text-black
    dark:focus:bg-black
  `,
  years: `
    grid 
    grid-cols-5 
    w-full
  `,
  year: `
    text-$scale(-1)
    text-center
    text-$colorTemperature-$colorTemperatureStrength
    items-center
    m-$spacing(-2,*)
    p-$spacing(-2,*)
    aria-selected:!bg-$accentColor-$accentColorStrength
    aria-selected:!text-white
    focus:outline-none
    focus:ring-2
    group-data-[disabled=true]:opacity-50
    group-data-[disabled=true]:pointer-events-none

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:aria-selected:!bg-$accentColor-$accentColorStrengthDark
    dark:aria-selected:!text-black
    dark:focus:bg-black
  `,
  weekDays: `
    grid 
    grid-cols-7
  `,
  weekDay: `
    text-$colorTemperature-$colorTemperatureStrength
    m-$spacing(-1)

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
  `,
  week: `
    grid
    grid-cols-7
    group-data-[disabled=true]:opacity-50
    group-data-[disabled=true]:pointer-events-none
  `,
  dayCell: `
    flex
    items-center
    justify-center
    text-center
    text-$colorTemperature-$colorTemperatureStrength
    w-[2.25em]
    h-[2.25em]
    m-1
    p-$spacing
    bg-$colorTemperature-100
    aria-selected:bg-$accentColor-$accentColorStrength
    aria-selected:text-white
    focus:outline-none
    focus:ring-2
    focus:bg-white
    data-[disabled=true]:opacity-50
    data-[disabled=true]:pointer-events-none

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:bg-$colorTemperature-700
    dark:aria-selected:bg-$accentColor-$accentColorStrengthDark
    dark:aria-selected:text-black
    dark:focus:bg-black
  `,
  timeInput: `
    w-full
    border-2
    [color-scheme:light]
    dark:[color-scheme:dark]
    text-$colorTemperature-$colorTemperatureStrength
    border-$colorTemperature-$colorTemperatureStrength
    $radius
    py-$spacing
    px-$spacing(2,*)
    my-$spacing(1)
    focus-visible:outline-none
    focus-visible:ring-2

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  dayButton: `
    appearance-none
    text-$colorTemperature-$colorTemperatureStrength
    px-$spacing(1,*)
    py-$spacing(-3,*)
    border-2
    border-$colorTemperature-$colorTemperatureStrength
    mx-1
    focus-visible:outline-none
    focus-visible:ring-2

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  monthButton: `
    appearance-none
    text-$colorTemperature-$colorTemperatureStrength
    px-$spacing(1,*)
    py-$spacing(-3,*)
    border-2
    border-$colorTemperature-$colorTemperatureStrength
    mx-1
    focus-visible:outline-none
    focus-visible:ring-2

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  yearButton: `
    appearance-none
    text-$colorTemperature-$colorTemperatureStrength
    px-$spacing(1,*)
    py-$spacing(-3,*)
    border-2
    border-$colorTemperature-$colorTemperatureStrength
    mx-1
    focus-visible:outline-none
    focus-visible:ring-2

    dark:text-$colorTemperature-$colorTemperatureStrengthDark
    dark:border-$colorTemperature-$colorTemperatureStrengthDark
  `,
  help: ``,
  messages: ``,
  message: ``,
};
