export default {
  // inherits family:text classes
  // https://formkit.com/inputs/range#sections

  /** === ⚠️ CAUTION: Styling native range inputs is very hard ===
   * Ok, let's talk about range inputs. Browsers are very opinionated about these and there's really
   * no good way to style them perfectly consistently across browsers. As a cherry on top — when you use the
   * vendor prefix selectors to adjust the default browser styling there is no way to get back the "track fill"
   * style. Why? I don't know — because browser vendors hate us I guess. So — there's a lot of boilerplate here as
   * a starting point and it's all trying to make the best of a bad situation.
   */
  outer: ``,
  wrapper: ``,
  label: ``,
  prefixIcon: ``,
  suffixIcon: ``,
  inner: `
    relative 
    !border-none ${
      "" /**  You probably don't want a border around the whole range slider */
    }
    !ring-0 ${
      "" /** You probably don't want a focus ring around the whole range slider — just the UI control */
    }
    !px-0 ${
      "" /** we're going to want our range input track to go edge to edge */
    }
    !bg-transparent ${
      "" /** if you end up adding a background to family:text you likely won't want it here */
    }
  `,
  input: `
    ${"" /* webkit styles - track */}
    [&::-webkit-slider-runnable-track]:bg-$colorTemperature-300
    [&::-webkit-slider-runnable-track]:h-1.5
    [&::-webkit-slider-runnable-track]:$radius

    dark:[&::-webkit-slider-runnable-track]:bg-$colorTemperature-700

    ${"" /* moz styles - track */}
    [&::-moz-range-track]:bg-$colorTemperature-300
    [&::-moz-range-track]:h-1.5
    [&::-moz-range-track]:$radius

    dark:[&::-moz-range-track]:bg-$colorTemperature-700

    ${"" /* webkit styles - thumb */}
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-3.5
    [&::-webkit-slider-thumb]:h-3.5
    [&::-webkit-slider-thumb]:bg-$accentColor-600
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:relative
    [&::-webkit-slider-thumb]:top-1/2
    [&::-webkit-slider-thumb]:-translate-y-1/2
    [&::-webkit-slider-thumb]:focus-visible:ring-2

    dark:[&::-webkit-slider-thumb]:bg-$accentColor-400

    ${"" /* moz styles - thumb */}
    [&::-moz-range-thumb]:appearance-none
    [&::-moz-range-thumb]:border-none
    [&::-moz-range-thumb]:w-3.5
    [&::-moz-range-thumb]:h-3.5
    [&::-moz-range-thumb]:bg-$accentColor-600
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:focus-visible:ring-2

    dark:[&::-moz-range-thumb]:bg-$accentColor-400
  `,
  help: ``,
  messages: ``,
  message: ``,
};
