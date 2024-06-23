<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="header text-white">
      <q-toolbar class="q-ml-xl">
        <q-toolbar-title
          :class="$q.screen.lg ? 'header_title' : 'header_title_small'"
        >
          <label for="" class="title">Task App</label>
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

.content {
  background-color: $grey1;
  height: 100vh;
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

.title {
  margin-left: 2rem;
}
</style>
