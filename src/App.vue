<template>
  <div id="app">
    <LiveTopNav />
    <router-view />
    <LiveFooter />
  </div>
</template>

<script>
import LiveTopNav from "@/layout//LiveTopNav.vue";
import LiveFooter from "@/layout/LiveFooter.vue";

import "@/assets/scss/app.scss";

export default {
  name: "App",
  components: {
    LiveTopNav,
    LiveFooter,
  },
};
</script>