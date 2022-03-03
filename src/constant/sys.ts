import { isURL } from "@/utils/index";
import router from "@/router";

export enum Event {
  navigate = "navigate",
  logout = "logout",
  login = "login",
  click = "click",
  copy = "copy",
}

export interface IMenuItem {
  title: string;
  icon?: string;
  href?: string;
  event: Event;
  content?: string | number;
}

export const USER_MENU: IMenuItem[] = [
  {
    title: "我的主页",
    icon: "IconUser",
    event: Event.navigate,
    href: "/u/",
  },
  {
    title: "创作中心",
    icon: "IconDriveFile",
    event: Event.navigate,
    href: "/editore",
  },
  {
    title: "设置",
    icon: "IconSettings",
    event: Event.navigate,
    href: "/setting",
  },
  {
    title: "退出登录",
    icon: "IconPoweroff",
    event: Event.logout,
    href: "",
  },
];

export const NAV: IMenuItem[] = [
  {
    title: "首页",
    icon: "",
    event: Event.navigate,
    href: "/",
  },
  {
    title: "发现",
    icon: "",
    event: Event.navigate,
    href: "/explore",
  },
  {
    title: "话题",
    icon: "",
    event: Event.navigate,
    href: "/topic",
  },
];

export const DESC: IMenuItem[] = [
  {
    title: "Owner",
    content: "BBS-LIBRARY",
    event: Event.navigate,
    href: "https://github.com/bbs-library",
  },
  {
    title: "GitHub",
    event: Event.navigate,
    content: "https://github.com/bbs-library/bbs.git",
    href: "https://github.com/bbs-library/bbs.git",
  },
  {
    title: "Contributors",
    event: Event.navigate,
    content: "Lokep/weblixin",
    href: "https://github.com/Lokep",
  },
  {
    title: "mail",
    event: Event.navigate,
    content: "iamlokep@163.com/weblixin@163.com",
  },
];

/**
 * TODO
 * 控制跳转等事件
 * @param {Event} event
 * @param {String} href
 */
export const handleEvent = (target: IMenuItem) => {
  const { event, href } = target;

  if (event === Event.navigate && href) {
    if (isURL(href)) {
      window.open(href, "_blank");
    } else {
      router.push(href);
    }
  }
};
