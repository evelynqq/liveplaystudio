<template>
  <fixed-header :threshold="200">
    <nav class="navbar">
      <div class="logo"></div>
      <button
        class="navbar-toggle"
        type="button"
        :class="{ active: btClick }"
        @click="toggleMenu()"
      >
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <div class="mask-bg" @click="toggleMenu()"></div>
      <ul class="main-menu">
        <li>
          <router-link to="/ReservedPage" @click.native="toggleMenu()"
            >ReservedPage</router-link
          >
        </li>
        <li>
          <router-link
            to="/"
            @click.native="toggleMenu()"
            v-scroll-to="'#home'"
            >{{ $t("nav.home") }}</router-link
          >
        </li>
        <li>
          <a v-scroll-to="'#aboutus-section'" @click="toggleMenu()">{{
            $t("nav.aboutus")
          }}</a>
        </li>
        <li>
          <a v-scroll-to="'#service-section'" @click="toggleMenu()">{{
            $t("nav.service")
          }}</a>
        </li>
        <li>
          <a v-scroll-to="'#contact-section'" @click="toggleMenu()">{{
            $t("nav.contact")
          }}</a>
        </li>
        <li class="language">
          <font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="icon_down"
          />
          <span :class="locale"></span>
          <ul>
            <li>
              <span class="cn" @click="changeLocale('cn')"></span>
            </li>
            <li>
              <span class="en" @click="changeLocale('en')"></span>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </fixed-header>
</template>
<script lang="ts">
import FixedHeader from "vue-fixed-header";

export default {
  data() {
    return {
      // 取得i18n中的locale值
      locale: this.$i18n.locale,
      btClick: false,
    };
  },
  components: {
    FixedHeader,
  },
  methods: {
    // 切換語系
    changeLocale(index) {
      // 變更data中locale值
      this.locale = index;
      // 將i18n中locale的值變更為所選的設定值
      this.$i18n.locale = index;
      // 在本地儲存"locale"的設定為目前選擇的選項
      localStorage.setItem("locale", index);
    },
    // 視窗小於等於768時，點擊toggleMenu才會有反應
    toggleMenu() {
      if (window.innerWidth <= 768) {
        this.btClick = !this.btClick;
      }
    },
  },
};
</script>
