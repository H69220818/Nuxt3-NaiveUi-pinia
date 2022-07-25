import { createDiscreteApi } from "naive-ui";

export default defineNuxtPlugin((nuxtApp) => {
  const bar = ref(null);
  nuxtApp.hook("app:beforeMount", (e) => {
    console.log("app:beforeMount");
  });
  nuxtApp.hook("app:created", (e) => {
    console.log("app:created");
  });
  nuxtApp.hook("app:data:refresh", (e) => {
    console.log("app:data:refresh");
  });
  nuxtApp.hook("app:mounted", (e) => {
    console.log("app:mounted", e);
    if (!bar.value) {
      const { loadingBar } = createDiscreteApi(["loadingBar"]);
      bar.value = loadingBar;
      console.log(bar, "bar");
    }
  });
  nuxtApp.hook("page:start", (e) => {
    bar.value?.start();
  });
  nuxtApp.hook("page:finish", (e) => {
    setTimeout(() => bar.value?.finish(), 300);
    console.log("page:finish", e);
  });
  nuxtApp.hook("app:error", (e) => {
    console.log("app:error", e);
    //判断是否在客户端
    if (process.client) {
      setTimeout(() => bar.value?.finish(), 300);
    }
  });
});
