<template>
  <v-snackbar v-model="snackbar" top="true">
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {
  name: "Snackbar",
  props: {
    snackbar: Boolean,
    text: String,
  },
};
</script>
