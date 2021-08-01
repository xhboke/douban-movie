<template>
  <v-footer>
    <v-container class="box">
      <v-row>
        <span>Copyright {{ new Date().getFullYear() }} {{this.GLOBAL.sitename}} &copy; All rights Reserved</span>
        <v-spacer></v-spacer>
        <span style="text-decoration-line: none">Version:{{this.GLOBAL.version}}</span>
        <span class="pipe">|</span>
        <router-link :to="{path:'/about'}" style="text-decoration-line: none">ABOUT</router-link>
        <span class="pipe">|</span>
        <router-link :to="{path:'/setting'}" style="text-decoration-line: none">SETTING</router-link>
      </v-row>
      <v-row>
        <span>{{this.GLOBAL.beian}}</span>
        <v-spacer></v-spacer>
        <span>E-mail:{{this.GLOBAL.email}}</span>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.pipe {
  margin: 0 5px;
  color: #ccc;
}
.box {
  max-width: 1000px;
}
</style>
