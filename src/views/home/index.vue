<template>
  <div class="container flex homepage">
    <div class="leftbar shadow">
      <div class="sticky" style="background: #fff">
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" title="推荐">
            <ArticleCard v-for="item in 10" :key="item" />
          </a-tab-pane>
          <a-tab-pane key="2" title="关注">
            <div class="justify-center align-center" style="height: 400px">
              <a-empty />
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <div class="sidebar" ref="containerRef">
      <a-affix :offsetTop="1" :target="containerRef">
        <Description />
      </a-affix>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ArticleCard from "@/components/ArticleCard/index.vue";
import Description from "@/components/Description/index.vue";



export default defineComponent({
  components: {
    ArticleCard,
    Description,
  },
  setup() {
    const containerRef = ref();

    const mutationObserver = new MutationObserver(() => {
      console.log("mutation");
    });

    

    return {
      containerRef
    };
  },
});
</script>

<style lang="scss">
.homepage {
  .arco-tabs-content{
    padding-top: 0;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";
.container {
  padding: $padding-sm;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.leftbar {
  flex: 1;
  // overflow: hidden;
  background-color: $white;

  & + .sidebar {
    margin-left: $margin-md;
  }
}

.list {
  overflow: auto;
  height: calc(100% - 56px);
}

.sidebar {
  width: 300px;
  flex-shrink: 0;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
