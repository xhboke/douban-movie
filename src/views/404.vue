<template>
  <v-card elevation="2">
    <v-img
      :src="require('../assets/very_sorry.png')"
      max-width="880"
      class="mx-auto"
    ></v-img>
    <div class="text-center">
      <v-btn color="primary" class="ma-4" to="/">Take Me Home Now </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  created() {
    document.title = "404 - " + this.GLOBAL.sitename;
    this.$root.bartitle = "404";
  },
};
</script>
