<template>
  <v-app id="app">
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/home">Home</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/contact">Contact Me</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Daniel Coto Portfolio</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout
            justify-center
            align-center
          >
          <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
    </main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017 Daniel Coto <a href="https://www.github.com/dcoto">Github</a></span>
    </v-footer>
  </v-app>
</template>

<script>
  import Home from './components/pages/home/Home.vue'
  import Contact from './components/pages/contact/Contact.vue'

  export default {
    name: 'app',
    components: { Home, Contact },
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    }
  }
</script>

<style>
a {
  text-decoration: none;
}
</style>