import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { plugin, defaultConfig } from "@formkit/vue";
import { genesisIcons } from "@formkit/icons";
import { createProPlugin, inputs } from "@formkit/pro";
import { createEditor } from "@formkit/theme-editor";
import { rootClasses } from "@formkit/theme-creator";
import theme from "./theme";

createEditor();

const proPlugin = createProPlugin(import.meta.env.FORMKIT_PRO_KEY, inputs);
const config = defaultConfig({
  plugins: [proPlugin],
  icons: genesisIcons,
  config: {
    rootClasses: rootClasses(theme().tailwind()),
  },
});

const app = createApp(App);
app.use(plugin, config);
app.mount("#app");
