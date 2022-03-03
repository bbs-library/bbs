<template>
  <div class="app">
    <Nav />
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "./nav.vue";

export default defineComponent({
  components: {
    Nav,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;

  #main {
    flex: 1;
    overflow: auto;
    background-color: #fbfcfd;
  }
}
</style>
