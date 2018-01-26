<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Yann Le Moal</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <router-link class="mdl-navigation__link navLarge" to="/" @click.native="hideMenu">Home</router-link>
          <router-link class="mdl-navigation__link navLarge" to="/resume&skills" @click.native="hideMenu">Resume & Skills</router-link>
          <router-link class="mdl-navigation__link navLarge" to="/projects" @click.native="hideMenu">Projects</router-link>
          <router-link class="mdl-navigation__link navLarge" to="/contact" @click.native="hideMenu">Contact</router-link>
      </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Yann Le Moal</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/resume&skills" @click.native="hideMenu">Resume & Skills</router-link>
        <router-link class="mdl-navigation__link" to="/projects" @click.native="hideMenu">Projects</router-link>
        <router-link class="mdl-navigation__link" to="/contact" @click.native="hideMenu">Contact</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
    <footer class="mdl-mini-footer">
      <div class="mdl-mini-footer__left-section">
        <div class="mdl-logo">Yann Le Moal</div>
        <ul class="mdl-mini-footer__link-list">
          <li>
            <a href="https://github.com/KierenRhys">
              <img src="/static/img/icons/github-logo.png" alt="Github">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/static/img/icons/twitter-black-shape.png" alt="Twitter">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/static/img/icons/envelope.png" alt="Mail">
            </a>
          </li>
        </ul>
      </div>
      <div class="mdl-mini-footer__right-section">
        <ul class="mdl-mini-footer__link-list">
          <li>
            <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
require('material-design-lite')
export default {
  name: 'app',
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>
.mdl-navigation__link:hover {
  background-color: teal;
}
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.3.0/material.teal-lime.min.css');
</style>
