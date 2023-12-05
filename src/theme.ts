import { createTheme } from "@formkit/theme-creator";
import globals from "./globals";
// Core input imports
import familyButton from "./families/button";
import familyBox from "./families/box";
import familyText from "./families/text";
import button from "./inputs/button";
import checkbox from "./inputs/checkbox";
import color from "./inputs/color";
import date from "./inputs/date";
import datetimeLocal from "./inputs/datetime-local";
import email from "./inputs/email";
import file from "./inputs/file";
import form from "./inputs/form";
import month from "./inputs/month";
import number from "./inputs/number";
import password from "./inputs/password";
import radio from "./inputs/radio";
import range from "./inputs/range";
import search from "./inputs/search";
import select from "./inputs/select";
import submit from "./inputs/submit";
import tel from "./inputs/tel";
import text from "./inputs/text";
import textarea from "./inputs/textarea";
import time from "./inputs/time";
import url from "./inputs/url";
import week from "./inputs/week";
// Pro input imports
import familyDropdown from "./families/dropdown";
import autocomplete from "./inputs/pro/autocomplete";
import colorpicker from "./inputs/pro/colorpicker";
import datepicker from "./inputs/pro/datepicker";
import dropdown from "./inputs/pro/dropdown";
import mask from "./inputs/pro/mask";
import rating from "./inputs/pro/rating";
import repeater from "./inputs/pro/repeater";
import slider from "./inputs/pro/slider";
import taglist from "./inputs/pro/taglist";
import toggle from "./inputs/pro/toggle";
import togglebuttons from "./inputs/pro/togglebuttons";
import transferlist from "./inputs/pro/transferlist";
// Addon input imports
import barcode from "./inputs/addon/barcode";
import { multiStep, step } from "./inputs/addon/multi-step";

/**
 * Welcome to the FormKit starter theme.
 *
 * If this is your first time writing a FormKit theme then we strongly encourage
 * you to read all the comments in this file (and imported files) before you begin making edits.
 * Once you are comfortable feel free to remove the comments and start building.
 *
 * There are numerous comments throughout this file that will help you understand
 * how to best leverage the available features of FormKit themes. There are also comments
 * about structural styles we have included in this starter that will help you avoid stepping
 * on a landmine or two as you work.
 *
 * You can also access a fully authored theme that you can use as a reference here:
 * https://github.com/formkit/theme-regenesis
 *
 * If you have any issues / questions please reach out to us on Discord:
 * https://discord.formkit.com
 */

export default createTheme({
  meta: {
    name: "Starter",
    description:
      "A FormKit theme with minimal styling (and thorough comments) intended to help theme authors create their own theme.",
    authorName: "FormKit",
    authorWebsite: "https://formkit.com",
    formKitVersion: "^1.0.0",
    /**
     * === Supported Inputs ===
     * This is a list of all the inputs that are supported by this theme.
     * This information will allow users to filter themes by the inputs they support
     * as required for their own projects.
     */
    supportedInputs: [
      // Core inputs
      "button",
      "checkbox",
      "color",
      "date",
      "datetime-local",
      "email",
      "file",
      "month",
      "number",
      "password",
      "radio",
      "range",
      "search",
      "select",
      "submit",
      "summary", // error summary component for Forms https://formkit.com/inputs/form#validation-and-error-summary
      "tel",
      "text",
      "textarea",
      "time",
      "url",
      "week",
      // Pro inputs
      "autocomplete",
      "colorpicker",
      "datepicker",
      "dropdown",
      "mask",
      "rating",
      "repeater",
      "slider",
      "taglist",
      "toggle",
      "togglebuttons",
      "transferlist",
      // Addon inputs
      "barcode",
      "multi-step",
    ],
    /**
     * === Light & Dark mode ===
     * Specify which color modes your theme supports so that
     * users can filter according to their project needs.
     */
    lightMode: true,
    darkMode: true,
  },
  /**
   * === Variables ===
   * You can define custom variables that can be used in your theme.
   * Each variable can define an editor, value, scale, min, and max.
   * Defined variables will appear in the control panel UI.
   *
   * A defined variable is available in your class lists via the $ prefix.
   * If your variable has a scale associated with it (most do by default) you can
   * output variables above and below the selected variable value by using the following
   * syntax:
   *
   * $variableName(-1,0,1)
   *
   * Where -1 is the distance to move across the scale, 0 is the minimum accepted value,
   * and 1 is the maximum accepted value. Your minimum and maximum values must be included
   * on your variable's scale. You can also define a wildcard value (*) to indicate that
   * any value from the smallest to the highest is acceptable.
   *
   * $variableName(-1,*)
   *
   * === Editor ===
   * The editor determines which UI control will show up in the theme control panel.
   * Available editors are:
   * - buttons
   * - color
   * - fontSize
   * - radius
   * - spacing
   * - select
   *
   * === Value ===
   * The value is the default value for the variable.
   *
   * === Scale ===
   * The scale is an array of values that can be used to set the variable. Some controls
   * come with their own associated scale (such as the radius control), so when providing a
   * scale for those controls you must provide an array of values that exists within the target scale.
   *
   * === Min & Max ===
   * The minimum and maximum values that can be set for the variable via the UI. When you reference the
   * variable in your theme with modifiers (eg. $radius(-2,*)) you can access values on the scale
   * that are beyond what is available via the editor panel UI.
   */
  variables: {
    /**
     * === Variables without UI controls ===
     * You can also define variables that have no UI controls
     * but that you may want to be able to change in a single
     * location as you work on your theme.
     *
     * To do so, simply assign a string value to the variable name.
     */
    accentColor: "neutral",
    accentColorStrength: "900",
    accentColorStrengthDark: "100",
    colorTemperature: "neutral",
    colorTemperatureStrength: "900",
    colorTemperatureStrengthDark: "100",
    inputMaxWidth: "max-w-[20em]",

    /**
     * === Variables with UI controls ===
     */
    radius: {
      editor: "radius",
      value: "rounded-none",
      /**
       * (Optional) you can provide your own limited
       * subset of a default scale to use for the editor.
       * This is helpful for scales that have a large amount
       * of variance that may be more granular than needed
       * for theming purposes.
       */
      scale: [
        "rounded-none",
        "rounded",
        "rounded-lg",
        "rounded-xl",
        "rounded-2xl",
        "rounded-full",
      ],
    },
    spacing: {
      /**
       * This variable is using the default scale — it does not provide its own.
       * It does provide a min and max value to constrain the editor UI — however,
       * variable usage by the theme author within the theme (eg. $spacing(-2,0.5,3))
       * can still access values beyond the min and max.
       */
      editor: "spacing",
      value: "2",
      min: "1",
      max: "3",
    },
    scale: {
      editor: "fontSize",
      value: "base",
      /**
       * This variable is including a custom value in its scale at the low end.
       * This is helpful for when you need to exceed the range of
       * a default scale.
       *
       * eg: the lowest value when used as `text-$scale(-3)` would output:
       * `text-[11px] [line-height:1em]`
       */
      scale: [
        "[11px] [line-height:1em]",
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
      ],
      /**
       * Don't forget: the min and max properties only constrain the UI editor.
       * You can still make use of the full scale in your theme as the author.
       */
      min: "sm",
      max: "lg",
    },
  },
  inputs: {
    /**
     * === Globals ===
     * These class lists apply to all inputs that have matching sections.
     * Use carefully.
     */
    __globals: globals,

    /**
     * === Family groupings ===
     * These class lists apply to all inputs that are part of the matching family.
     * There is a comment in each input class list that indicates which family it belongs to.
     */
    "family:button": familyButton,
    "family:box": familyBox,
    "family:text": familyText,
    "family:dropdown": familyDropdown, // pro only

    /**
     * === Core Inputs ===
     * These are the core inputs that ship with the open-source version of FormKit.
     */
    button: button,
    checkbox: checkbox,
    color: color,
    date: date,
    "datetime-local": datetimeLocal,
    email: email,
    file: file,
    form: form,
    month: month,
    number: number,
    password: password,
    radio: radio,
    range: range,
    search: search,
    select: select,
    submit: submit,
    tel: tel,
    text: text,
    textarea: textarea,
    time: time,
    url: url,
    week: week,

    /** === ⚠️ CAUTION: Pro Inputs ===
     * The following inputs are only available in the Pro version of FormKit.
     * If you are only targeting the open-source version of FormKit with your theme
     * then you can remove these inputs.
     *
     * Because these inputs are "synthetic" they represent much more DOM structure
     * than standard browser-native inputs. This means there will be much more boilerplate
     * provided in their class lists in order to assist with styling.
     */
    autocomplete: autocomplete,
    colorpicker: colorpicker,
    datepicker: datepicker,
    dropdown: dropdown,
    mask: mask,
    rating: rating,
    repeater: repeater,
    slider: slider,
    taglist: taglist,
    toggle: toggle,
    togglebuttons: togglebuttons,
    transferlist: transferlist,

    /** === ⚠️ CAUTION: Addon Inputs ===
     * These are additional optional add-on inputs for FormKit
     * If your theme does not provide support for these inputs then you can remove them.
     */
    barcode: barcode,
    "multi-step": multiStep,
    step: step,
  },
});
