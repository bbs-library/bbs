<template>
  <div class="navbar">
    <div class="navbar-wrapper justify-between shadow">
      <div class="navbar-left align-center">
        <div class="navbar-left--logo">Lokep</div>
        <div
          class="navbar-left--item"
          v-for="(item, index) in NAV"
          :key="index"
          @click="e => handleEvent(item)"
        >
          {{ item.title }}
        </div>
      </div>

      <div class="navbar-right align-center">
        <a-popover position="br" trigger="click" content-class="navbar-right--menu shadow" @select="handle">
          <a-avatar
            shape="square"
            :size="32"
            :style="{ backgroundColor: '#3370ff' }"
          >
            <IconUser />
          </a-avatar>
          <template #content>
            <div
              class="navbar-right--menu-item align-center"
              v-for="(item, index) in MENU"
              :key="index"
              @click="e => handleEvent(item)"
            >
              <div class="navbar-right--menu-item__icon">
                <component :is="item.icon" :size="18" />
              </div>
              <div class="navbar-right--menu-item__option">
                {{ item.title }}
              </div>
            </div>
          </template>
        </a-popover>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IconUser,
  IconDown,
  IconDriveFile,
  IconSettings,
  IconPoweroff,
} from "@arco-design/web-vue/es/icon";

import { USER_MENU, NAV, handleEvent } from '@/constant/sys'


export default defineComponent({
  name: "Nav",
  components: {
    IconUser,
    IconDown,
    IconDriveFile,
    IconSettings,
    IconPoweroff,
  },
  setup() {

    

    return {
      MENU: USER_MENU,
      NAV,
      handleEvent
    };
  },
});
</script>
<style lang="scss">
  @import "@/assets/styles/var.scss";
 .navbar-right--menu {
   padding: $padding-base 0 !important;

  .arco-icon {
    display: block;
    margin-right: 6px;
  }
 }
</style>
<style lang="scss" scoped>
@import "@/assets/styles/var.scss";

.navbar {
  height: 58px;

  &-wrapper {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    height: inherit;
    width: 100%;
  }

  &-left {
    box-sizing: border-box;
    padding: $padding-xs $padding-xl;

    &--item {
      padding: $padding-xs;
      font-weight: 500;
      color: $gray-9;
      cursor: pointer;

      & + & {
        margin-left: $padding-lg;
      }
    }

    &--logo {
      font-size: 24px;
      font-weight: bold;
      color: $blue-dark;
      margin-right: $margin-xl;

      font-family: monospace;
    }
  }

  &-right {
    box-sizing: border-box;
    padding: $padding-xs 30px;

    &--menu {

      &-item {
        padding: $padding-xs ($padding-md + $padding-base);
        font-size: $base-font-size;
        cursor: pointer;

        &:hover {
          background-color: $gray-2;  
        }

        &__option {
          width: 4em;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
