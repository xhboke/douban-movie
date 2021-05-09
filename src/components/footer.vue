<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="item in links"
        :key="item.title"
        :to="item.url"
        color="white"
        text
        rounded
        class="my-2 mx-1"
      >
        {{ item.title }}
      </v-btn>
      <v-btn color="white" text rounded class="my-2 mx-1" @click.stop="dialog = true">
        Contact Us
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>{{ this.GLOBAL.sitename }}</strong>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">E-mail:</v-card-title>
        <v-card-text>
          <a href="mailto:xh@apa.me" target="_blank">xh@apa.me</a><br />
          <a href="mailto:xhapame@gmail.com" target="_blank">xhapame@gmail.com</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false"> close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    links: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "About Us",
        url: "/about",
      },
      {
        title: "Setting",
        url: "/setting",
      },
    ],
  }),
};
</script>
