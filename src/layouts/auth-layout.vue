<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="header text-white">
      <q-toolbar>
        <q-toolbar-title
          :class="$q.screen.lg ? 'header_title' : 'header_title_small'"
          class="q-ml-lg"
        >
          Task App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="content">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer {
  background-color: $white1;
  height: 2rem;
}

.content {
  background-color: $grey1;
  height: 100vh;
}

.app_name {
  color: $primary;
}

.header {
  background-color: $white1;
}

.header_title {
  text-transform: capitalize;
  color: $orange;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: "Roboto";
  display: block;
}

.header_title_small {
  text-transform: capitalize;
  color: $orange;
  font-weight: bold;
  padding: 0.6rem;
  font-size: large;
  font-family: "Roboto";
  display: block;
}

.header_note {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sign_link {
  text-decoration: none;
  color: $primary;
}

.header_language {
  margin-right: 0.5rem;
}

.lang {
  font-size: 0.6rem;
}

.appName {
  font-family: "Roboto";
  font-style: normal;
  text-transform: capitalize;
  color: $dark;
  font-weight: 700;
  font-size: 0.7rem;
}

.footer_text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.6rem;
  align-items: center;
  text-align: center;
  padding-bottom: 1rem;
}

.copy_right {
  font-size: large;
}
</style>
