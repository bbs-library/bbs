<style lang="scss" scoped>
@import '@/assets/styles/var.scss';

.desc {
  box-sizing: border-box;

  &-item {
    padding: $padding-base 0;
    color: $gray-6;
    font-weight: 500;
    font-size: $base-font-size-sm + 1px;
    line-height: 2;
    margin-bottom: $margin-base;

    flex-wrap: wrap;

    &--mark {
      padding: 0 $padding-base;
    }

    &--val {
     color: $gray-7; 
     cursor: pointer;
     &:hover {
       color: $blue-dark;
     }
    }
  }
}
</style>

<template>
  <div class="desc">
    <div class="desc-item flex" v-for="(item, index) in DESC" :key="index">
      <div class="desc-item--label">{{ item.title }}</div>
      <div class="desc-item--mark"> · </div>
      <div class="desc-item--val" @click="e => handleEvent(item)"> {{ item.content }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DESC, handleEvent } from '@/constant/sys'


export default defineComponent({
  setup() {

    return {
      DESC,
      handleEvent
    }
  },
})
</script>

