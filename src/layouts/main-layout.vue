<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="header">
      <q-toolbar class=" ">
        <q-toolbar-title
          :class="$q.screen.lg ? 'header_title' : 'header_title_small'"
        >
          <label for="title">Task App</label>
        </q-toolbar-title>
        <q-btn-dropdown
          class="logoutBtn q-pa-md"
          flat
          icon="person"
          color="primary"
        >
          <q-list style="width: 150px" class="text-center">
            <q-item clickable v-close-popup @click="onLogout">
              <q-item-section avatar class="q-pl-lg">
                <span class="q-pl-lg">
                  <q-icon name="logout" class="" size="xs" color="red" />
                </span>
              </q-item-section>
              <q-item-section class="">
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-page-container class="content">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { LocalStorage } from "quasar";

const router = useRouter();

const $store = useStore();
const onLogout = () => {
  let payload = {
    url: "public/auth/logout",
    successMsg: "Logout Success",
    errorMsg: "An error occurred",
    has_commit: false,
  };

  $store.dispatch("example/postRequest", payload).then((res) => {
    if (res.success) {
      LocalStorage.remove("data");

      router.push({ name: "login" });
    }
  });
};
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
  padding-left: 2rem;
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

.lang {
  font-size: 0.6rem;
}

.logoutBtn {
  margin-right: 2rem;
}
</style>
