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
  padding: $padding-sm $padding-md;
  box-sizing: border-box;

  &-topbar {
    color: $gray-6;
    font-size: $base-font-size-sm + 1px;
    line-height: 22px;
    margin-bottom: 10px;

    &--author {
      color: $gray-7;
      cursor: pointer;
      &:hover {
        color: $blue-dark;
      }
    }
  }

  &-title {
    font-weight: 700;
    font-size: $base-font-size-lg;
    line-height: 24px;
    color: $gray-8;
    margin-bottom: $margin-xs;
  }

  &-content {
    font-weight: 400;
    font-size: $base-font-size-sm + 1px;
    line-height: 22px;
    color: $gray-6;
    margin-bottom: 10px;
  }

  &-img {
    margin-left: $margin-lg;
    flex-shrink: 0;
  }

  &-footer {
    &--like,
    &--comment,
    &--share {
      margin-right: $margin-base * 5;
      font-size: $base-font-size-sm + 1px;
      color: $gray-7;
    }
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

    <div class="article-topbar">
      <text class="article-topbar--author">蚂蚁RichLab前端团队</text>
      <a-divider direction="vertical" />
      <text>3天前</text>
      <a-divider direction="vertical" />
      <text>Javascript · Vue</text>
    </div>
    <div class="article-body flex">
      <div class="flex-1">

        <router-link class="article-title ellipsis-1" to="/">看看axios</router-link>

        <div class="article-content ellipsis-1">
          公司地址：北京市海淀区信息路甲28号13层B座13B-5公司地址：北京市海淀区信息路甲28号13层B座13B-5
        </div>

        <div class="article-footer flex">
          <div class="article-footer--like">
            <IconThumbUp />
            点赞
          </div>
          <router-link class="article-footer--comment" to="/">
            <IconMessage />
            评论
          </router-link>
          <div class="article-footer--share">
            <IconSend />
            分享
          </div>
        </div>
      </div>
      <router-link class="article-img" to="/">
        <a-image
          width="120"
          height="80"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
        />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IconMessage,
  IconThumbUp,
  IconSend,
} from "@arco-design/web-vue/es/icon";

export default defineComponent({
  components: {
    IconMessage,
    IconThumbUp,
    IconSend,
  },
  props: {
    author: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    tags: {
      type: Array,
      default: () => [],
    },
    content: {
      type: String,
      default: "",
    },
    agrees: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    shares: {
      type: Number,
      default: 0,
    },
    url: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
  },
  setup() {},
});
</script>
