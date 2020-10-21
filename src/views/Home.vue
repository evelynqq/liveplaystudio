<template>
  <div id="home" class="main">
    <div class="top-btn" v-scroll-to="'#home'">
      <font-awesome-icon :icon="['fas', 'angle-up']" />
    </div>
    <section class="banner" id="banner">
      <ul class="bubble">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
    <section class="aboutus" id="aboutus-section">
      <div class="title">
        <h1>{{ $t("home.aboutus") }}</h1>
      </div>
      <div class="content">
        <span class="icon-play"> </span>
        <div class="point-animation">
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
        </div>
        <p>{{ $t("home.aboutustxt") }}</p>
      </div>
    </section>
    <section class="service" id="service-section">
      <div class="title">
        <h1>{{ $t("home.servicemap") }}</h1>
      </div>
      <div class="map">
        <div class="box"></div>
      </div>
      <div class="title">
        <h1>{{ $t("home.servicechooes.title") }}</h1>
      </div>
      <div class="service-bubble">
        <div class="liveplay-logo">
          <ul class="bubble">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <ul class="liveplay-chooes">
          <li>
            <div class="bubble">
              <font-awesome-icon :icon="['fas', 'laptop']" />
            </div>
            <h2>{{ $t("home.servicechooes.serviceT2") }}</h2>
            <p>{{ $t("home.servicechooes.serviceTxt") }}</p>
          </li>
          <li>
            <div class="bubble">
              <font-awesome-icon :icon="['fas', 'play-circle']" />
            </div>
            <h2>{{ $t("home.servicechooes.liveH2") }}</h2>
            <p>{{ $t("home.servicechooes.liveTxt") }}</p>
          </li>
          <li>
            <div class="bubble">
              <font-awesome-icon :icon="['fas', 'comments']" />
            </div>
            <h2>{{ $t("home.servicechooes.interactiveH2") }}</h2>
            <p>{{ $t("home.servicechooes.interactiveTxt") }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="contact" id="contact-section">
      <div class="title">
        <h1>{{ $t("home.contact") }}</h1>
      </div>
      <ul>
        <li>
          <font-awesome-icon :icon="['fas', 'phone-alt']" />
          <p>+68 123 201 231</p>
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'envelope']" />
          <p>info@liveplaystudio.com</p>
        </li>
        <li>
          <font-awesome-icon :icon="['fab', 'skype']" />
          <p>Liveplaystudio</p>
        </li>
      </ul>
    </section>
  </div>
</template>
