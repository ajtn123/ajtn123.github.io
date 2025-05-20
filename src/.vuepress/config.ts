import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Mount Aoi",
      description: "May be a blog",
    },
    "/": {
      lang: "zh-CN",
      title: "Mount Aoi",
      description: "可能是一个博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
