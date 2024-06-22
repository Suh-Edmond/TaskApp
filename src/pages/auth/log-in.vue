<template>
  <q-page class="page">
    <div
      class="row q-px-sm"
      :class="$q.screen.lg ? 'q-pt-lg flex flex-center' : 'q-pt-sm'"
    >
      <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
        <q-card :class="$q.screen.lg ? 'q-mt-lg' : 'q-mt-xl login-card'">
          <q-card-section>
            <div class="text_h6 text-center q-pt-sm q-pb-sm">Login</div>
            <div class="text-subtitle2 text-center q-pb-xs">
              Welcome back login to create Tasks
            </div>
            <q-form
              @submit="onSubmit"
              class="q-gutter-md q-mt-lg"
              :class="$q.screen.lg ? 'q-px-md' : ''"
            >
              <div>
                <label for="credential" class="form_field"
                  >Email <span class="text-red">*</span></label
                >
                <q-input v-model="user.email" outlined dense type="email" />
              </div>
              <div>
                <label for="password" class="form_field"
                  >Password <span class="text-red">*</span></label
                >
                <q-input
                  v-model="user.password"
                  :type="isPwd ? 'password' : 'text'"
                  outlined
                  dense
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </div>
              <div class="q-mt-lg q-mb-lg">
                <q-btn
                  class="form_button"
                  label="Login"
                  :loading="loading"
                  :disabled="validateForm"
                  color="primary"
                  no-caps
                  type="submit"
                >
                  <q-icon
                    name="arrow_forward"
                    size="xs"
                    class="q-pl-lg"
                  ></q-icon>
                </q-btn>
              </div>

              <div class="row justify-center q-mb-md">
                <label>
                  <router-link :to="{ name: 'register' }" class="sign_link">
                    <span class="forgot_password text-right"
                      >Don't have an Account? Register</span
                    >
                  </router-link>
                </label>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { LocalStorage } from "quasar";
import { ref, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();

const $store = useStore();

const loading = ref(false);

const isPwd = ref(false);

const user = reactive({
  email: "",
  password: "",
});

const onSubmit = async () => {
  let payload = {
    url: "/public/auth/login",
    has_commit: false,
    data: user,
  };
  loading.value = true;
  $store.dispatch("example/postRequest", payload).then((response) => {
    if (response.success) {
      router.push({ name: "dashboard" });
      LocalStorage.set("data", response.data);
      Notify.create({
        type: "positive",
        color: "positive",
        message: "Login Successful",
        position: Platform.is.mobile ? "bottom" : "top-right",
      });
    }
    loading.value = false;
  });
};

const validateForm = computed(() => {
  return user.email == "" || user.password == "";
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.page {
  background-color: $grey1;
}

.text_h6 {
  color: $dark;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 0.9em;
  align-items: center;
  text-align: center;
}

.text-subtitle2 {
  color: $grey2;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  align-items: center;
  text-align: center;
}

.form_field {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 0.7rem;
  align-items: center;
  color: $grey5;
}

.form_button {
  width: 100%;
  margin-bottom: 0.1rem;
}

.forgot_password {
  display: block;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 0.7rem;
  align-items: center;
  color: $primary;
  cursor: pointer;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.sign_link {
  text-decoration: none;
  color: $primary;
  font-weight: 600;
}

.login-card {
  height: 500px;
}
</style>
