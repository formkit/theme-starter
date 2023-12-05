import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { plugin, defaultConfig, FormKitSummary } from "@formkit/vue";
import { genesisIcons } from "@formkit/icons";
import { createMultiStepPlugin } from "@formkit/addons";
import { barcode } from "@formkit/barcode";
import { createProPlugin, inputs } from "@formkit/pro";
import { createEditor } from "@formkit/theme-editor";
import { rootClasses } from "@formkit/theme-creator";
import theme from "./theme";

createEditor();

const proPlugin = createProPlugin(import.meta.env.FORMKIT_PRO_KEY, inputs);
const config = defaultConfig({
  plugins: [proPlugin, createMultiStepPlugin()],
  inputs: {
    barcode,
  },
  icons: genesisIcons,
  config: {
    rootClasses: rootClasses(theme().tailwind()),
  },
});

const app = createApp(App);
app.use(plugin, config);
app.component("FormKitSummary", FormKitSummary);
app.mount("#app");
