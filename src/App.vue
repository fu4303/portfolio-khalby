<template>
  <div id="nav">
    <div id="top">
      <div id="progress-indicator"></div>
    </div>

    <Banner v-if="showBanner === true" />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  
  <transition name="fade" mode="out-in">
      <router-view/>
  </transition>

  <Footer />

</template>

<script>
import Banner from '@/components/Banner.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer, 
    Banner
  },
  data: function() {
    return {
      showBanner: false
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Inter:wght@300;400;500;700;900&display=swap");

body {
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 13vw;
  padding-bottom: 10px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: -0.004em;
  font-kerning: normal;
  font-variant-ligatures: contextual common-ligatures;
  font-feature-settings: 'kern', 'liga', 'calt';
  height: auto;
  --block-shadow-color: #ff6b6b;
}

::selection {
  background-color: #100e17;
  color: white;
}

h1 {
  font-family: "Fira Code", "Fira Mono", monospace;
  text-align: center;
  font-size: 5vw;
}

h2, h3, h4, h5, h6 {
  font-family: "Fira Code", "Fira Mono", monospace;
}

a {
  color: #6b17e6;
  transition: opacity .2s;
  isolation: isolate;
}

#top {
  background: #ff6b6b;
  position: fixed;
  z-index: 999;
}

#top {
  left: 0;
  right: 0;
  height: 5px;
}

#top {
  top: 0;
}

/* footer {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 200px;
  background-color:  #ff6b6b;
  overflow: auto;
} */


.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
