export const multiStep = {
  outer: `
    group/multistep
    max-w-[32rem]
  `,
  wrapper: `
    group/wrapper

    ${"" /** tab-style tabs */}
    data-[tab-style=tab]:$radius(0,rounded-none,rounded-2xl)
  `,
  tabs: `
    flex
    items-center

    ${"" /** tab-style tabs */}
    group-data-[tab-style=tab]/wrapper:overflow-auto
    group-data-[tab-style=tab]/wrapper:border
    group-data-[tab-style=tab]/wrapper:border-b-0
    group-data-[tab-style=tab]/wrapper:border-$colorTemperature-$colorTemperatureStrength
    group-data-[tab-style=tab]/wrapper:$radius(0,rounded-none,rounded-2xl)
    group-data-[tab-style=tab]/wrapper:rounded-bl-none
    group-data-[tab-style=tab]/wrapper:rounded-br-none

    dark:group-data-[tab-style=tab]/wrapper:border-$colorTemperature-$colorTemperatureStrengthDark

    ${"" /** progress-style tabs */}
    group-data-[tab-style=progress]/wrapper:my-$spacing(6,*)
    group-data-[tab-style=progress]/wrapper:justify-around
    group-data-[tab-style=progress]/wrapper:overflow-visible
    group-data-[tab-style=progress]/wrapper:group-data-[hide-labels=true]/wrapper:mb-$spacing(3,*)
  `,
  tab: `
    group/tab

    ${"" /** tab-style tabs */}
    group-data-[tab-style=tab]/wrapper:relative
    group-data-[tab-style=tab]/wrapper:flex
    group-data-[tab-style=tab]/wrapper:grow
    group-data-[tab-style=tab]/wrapper:text-$scale(-1,*)
    group-data-[tab-style=tab]/wrapper:items-center
    group-data-[tab-style=tab]/wrapper:justify-center
    group-data-[tab-style=tab]/wrapper:cursor-pointer
    group-data-[tab-style=tab]/wrapper:text-$colorTemperature-700
    group-data-[tab-style=tab]/wrapper:bg-$colorTemperature-50
    group-data-[tab-style=tab]/wrapper:py-$spacing(3,*)
    group-data-[tab-style=tab]/wrapper:px-$spacing(4,*)
    group-data-[tab-style=tab]/wrapper:border-r
    group-data-[tab-style=tab]/wrapper:border-b
    group-data-[tab-style=tab]/wrapper:border-$colorTemperature-$colorTemperatureStrength
    group-data-[tab-style=tab]/wrapper:last:border-r-0
    group-data-[tab-style=tab]/wrapper:data-[active=true]:bg-white
    group-data-[tab-style=tab]/wrapper:data-[active=true]:border-b-transparent
    group-data-[tab-style=tab]/wrapper:data-[active=true]:z-10

    dark:group-data-[tab-style=tab]/wrapper:text-$colorTemperature-300
    dark:group-data-[tab-style=tab]/wrapper:bg-$colorTemperature-950/20
    dark:group-data-[tab-style=tab]/wrapper:data-[active=true]:bg-transparent
    dark:group-data-[tab-style=tab]/wrapper:data-[active=true]:border-b-transparent
    dark:group-data-[tab-style=tab]/wrapper:border-$colorTemperature-$colorTemperatureStrengthDark

    ${"" /** progress-style tabs */}
    group-data-[tab-style=progress]/wrapper:flex
    group-data-[tab-style=progress]/wrapper:flex-col
    group-data-[tab-style=progress]/wrapper:items-center
    group-data-[tab-style=progress]/wrapper:grow
    group-data-[tab-style=progress]/wrapper:shrink-0
    group-data-[tab-style=progress]/wrapper:relative

    ${"" /** progress-style tabs step nodes */}
    group-data-[tab-style=progress]/wrapper:before:block
    group-data-[tab-style=progress]/wrapper:before:text-$scale(-1,*)
    group-data-[tab-style=progress]/wrapper:before:w-[1.25rem]
    group-data-[tab-style=progress]/wrapper:before:h-[1.25rem]
    group-data-[tab-style=progress]/wrapper:before:border-4
    group-data-[tab-style=progress]/wrapper:before:border-$colorTemperature-300
    group-data-[tab-style=progress]/wrapper:before:rounded-full
    group-data-[tab-style=progress]/wrapper:before:bg-white
    group-data-[tab-style=progress]/wrapper:before:z-10

    dark:group-data-[tab-style=progress]/wrapper:before:border-$colorTemperature-700
    dark:group-data-[tab-style=progress]/wrapper:before:bg-$colorTemperature-950

    ${"" /** progress-style tabs connection lines */}
    group-data-[tab-style=progress]/wrapper:after:block
    group-data-[tab-style=progress]/wrapper:after:h-1
    group-data-[tab-style=progress]/wrapper:after:w-full
    group-data-[tab-style=progress]/wrapper:after:absolute
    group-data-[tab-style=progress]/wrapper:after:top-[0.5em]
    group-data-[tab-style=progress]/wrapper:after:left-[calc(50%+0.5em)]
    group-data-[tab-style=progress]/wrapper:after:bg-$colorTemperature-300
    group-data-[tab-style=progress]/wrapper:data-[valid=true]:data-[visited=true]:after:bg-$accentColor-900
    group-data-[tab-style=progress]/wrapper:last:after:hidden

    dark:group-data-[tab-style=progress]/wrapper:after:bg-$colorTemperature-700
    dark:group-data-[tab-style=progress]/wrapper:data-[valid=true]:data-[visited=true]:after:bg-$accentColor-300
  `,
  tabLabel: `
    ${"" /** progress-style tabs */}
    group-data-[tab-style=progress]/wrapper:absolute
    group-data-[tab-style=progress]/wrapper:text-$colorTemperature-800
    group-data-[tab-style=progress]/wrapper:top-full
    group-data-[tab-style=progress]/wrapper:w-full
    group-data-[tab-style=progress]/wrapper:whitespace-nowrap
    group-data-[tab-style=progress]/wrapper:text-$scale(-2,*)

    dark:group-data-[tab-style=progress]/wrapper:text-$colorTemperature-300
  `,
  badge: `
    bg-$accentColor-900
    absolute
    font-mono
    font-bold
    flex
    items-center
    justify-center
    aspect-[1/1]
    [line-height:1.25rem]
    text-white
    rounded-full

    dark:bg-$accentColor-300
    dark:text-$colorTemperature-900
    
    group-data-[tab-style=tab]/wrapper:text-[0.66rem]
    group-data-[tab-style=tab]/wrapper:p-1.5
    group-data-[tab-style=tab]/wrapper:w-5
    group-data-[tab-style=tab]/wrapper:h-5
    group-data-[tab-style=tab]/wrapper:top-$spacing(-1,*)
    group-data-[tab-style=tab]/wrapper:right-$spacing(-1,*)

    group-data-[tab-style=progress]/wrapper:w-[1.25rem]
    group-data-[tab-style=progress]/wrapper:h-[1.25rem]
    group-data-[tab-style=progress]/wrapper:p-1
    group-data-[tab-style=progress]/wrapper:text-[10px]
    group-data-[tab-style=progress]/wrapper:[line-height:0]
    group-data-[tab-style=progress]/wrapper:z-10
  `,
  validStepIcon: `
    w-full
    h-full
    mt-0.5
  `,
  steps: `
    px-$spacing(10,*)
    pt-$spacing(8,*)
    pb-$spacing(4,*)
    bg-white
    border
    border-$colorTemperature-$colorTemperatureStrength
    $radius(0,rounded-none,rounded-2xl)

    dark:bg-transparent
    dark:border-$colorTemperature-$colorTemperatureStrengthDark
    
    group-data-[tab-style=tab]/wrapper:border-t-0
    group-data-[tab-style=tab]/wrapper:rounded-tl-none
    group-data-[tab-style=tab]/wrapper:rounded-tr-none

    ${"" /** Allow child inputs to be full width */}
    [&_[data-type]]:max-w-none
  `,
};

export const step = {
  stepActions: `
    flex
    justify-between

    ${"" /** prevent child inputs from expanding to take up space */}
    [&>*]:grow-0
  `,
  stepPrevious: `
    mr-$spacing(-1,*)
  `,
  stepNext: `
    ml-auto
  `,
};
