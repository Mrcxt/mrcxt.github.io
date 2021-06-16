import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Skeleton,
  Image,
  BackTop,
  Anchor,
  Tag,
  Menu,
  Dropdown,
  Collapse,
} from "ant-design-vue";

import { version } from "../package.json";
console.log("version:", version);

// css
import "@/style/tailwind.css";
import "normalize.css";
import "@/style/reset.less";
import "@/style/base.less";
// init
const app = createApp(App);

//
[Image, Skeleton, BackTop, Anchor, Tag, Menu, Dropdown, Collapse].map(
  (component) => app.use(component)
);

//
app.use(router);
app.use(store);
app.mount("#app");
