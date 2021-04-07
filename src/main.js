import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dayjs from "./util/dayjs";
// import { Image, Skeleton, RadioGroup, Radio } from "vant";
import { Skeleton, Image, BackTop, Anchor, Radio, Tag } from "ant-design-vue";
import { version } from "../package.json";
console.log('version:',version);
// init
const app = createApp(App);

//
[Image, Skeleton, BackTop, Anchor, Radio, Tag].map((component) =>
  app.use(component)
);

//
app.use(router);
app.use(store);
app.mount("#app");

