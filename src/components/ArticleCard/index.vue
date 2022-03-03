<style lang="scss">
@import "@/assets/styles/var.scss";
.article {
  & + & {
    border-top: 1px solid $gray-3;
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/styles/var.scss";
.article {
  padding: $margin-md;

  &-author {
    margin-bottom: $margin-base;
    height: 24px;

    &--name {
      margin-left: $margin-xs;
    }
  }

  &-title {
    line-height: 1.6;
    color: $gray-9;
    font-size: $base-font-size-xl;
    font-weight: 500;
    // margin-bottom: $margin-xs;
  }

  &-content {
    word-break: break-word;
    line-height: 1.6;
    font-size: 15px;
    color: $gray-7;
    font-weight: 500;
    margin-bottom: $margin-xs;
  }

  &-comment {
    margin-left: $margin-lg;
  }
}
</style>

<template>
  <div class="article">
    <!-- <a-skeleton>
      <a-space direction="vertical" :style="{ width: '100%' }" size="small">
        <div style="margin-bottom: 10px">
          <a-skeleton-line :rows="1" :line-height="30" />
        </div>
        <div style="margin-bottom: 10px">
          <a-skeleton-line :rows="3" />
        </div>
        <a-row>
            <a-skeleton-line :rows="1" :widths="[105]" :line-height="32" />
            <div style="width: 10px"></div>
            <a-skeleton-line :rows="1" :widths="[36]" :line-height="32" />
        </a-row>
      </a-space>
    </a-skeleton> -->
    <div class="article-author align-center">
      <a-avatar :size="24" shape="square">A</a-avatar>
      <div class="article-author--name">Lokep</div>
      <div class="article-author--intro">，毕业于华北科技学院</div>
    </div>
    <div class="article-title">如何评价《为战争叫好的都是傻逼》这篇文章？</div>
    <div class="article-content">
      是真真实实存在的。人不是动物，他有各种各样的需求和自已的想法，如果一个政府缺乏组织执行能力，方舱就会变成集中营，封控管理也会变成范围清理。
    </div>
    <a-space class="article-operation align-center">

      <a-button type="outline" status="primary" size="small" plain :loading="false">
        <template #icon>
          <IconThumbUp />
        </template>
        <template #default>赞同</template>
      </a-button>

      <a-button type="text" size="small" plain style="color: #8590a6">
        <template #icon>
          <IconMessage />
        </template>
        <template #default>评论</template>
      </a-button>
      
      <a-button type="text" size="small" plain style="color: #8590a6">
        <template #icon>
          <IconSend />
        </template>
        <template #default>分享</template>
      </a-button>
    </a-space>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IconMessage, IconThumbUp, IconSend } from "@arco-design/web-vue/es/icon";

export default defineComponent({
  components: {
    IconMessage,
    IconThumbUp,
    IconSend
  },
  setup() {},
});
</script>
