<template>
  <v-app>
    <v-app-bar app style="background: rgb(29, 113, 184);">
      <v-toolbar-title class="headline text-uppercase">
        <v-btn style="height:75px" text target="_blank">
          <img
            src="https://i.pinimg.com/originals/7c/51/98/7c5198d2a0751fa76c8433dba4a1a12a.jpg"
            style="height:50px;width:50px;"
            alt="Your Company Name"
          />
          <span class="mr-2 white--text">
            <span>&nbsp;Your Company Name</span>
          </span>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text target="_blank">
        <span class="mr-2 white--text">API Documantation Page</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  })
}
</script>
