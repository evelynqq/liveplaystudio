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
        <!-- <li>
          <router-link to="/ReservedPage" @click.native="toggleMenu()"
            >ReservedPage</router-link
          >
        </li> -->
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
      locale: localStorage.getItem("locale") || "cn",
      btClick: false,
    };
  },
  components: {
    FixedHeader,
  },
  methods: {
    // 切換語系
    changeLocale(index) {
      this.locale = index;
      this.$i18n.locale = index;
      localStorage.setItem("locale", index);
    },
    // 視窗小於等於768時，點擊toggleMenu才會有反應
    toggleMenu() {
      if (window.innerWidth <= 768) {
        this.btClick = !this.btClick;
      }
    },
  },
  created() {
    this.$i18n.locale = this.locale;
  },
};
</script>
