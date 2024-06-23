<template>
  <q-page class="page">
    <div
      class="row q-px-sm"
      :class="$q.screen.lg ? 'q-pt-lg flex flex-center' : 'q-pt-sm'"
    >
      <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
        <q-card :class="$q.screen.lg ? 'q-mt-lg' : 'q-mt-xl login-card'">
          <q-card-section>
            <div class="text_h6 text-center q-pt-sm q-pb-sm">Register</div>
            <div class="text-subtitle2 text-center q-pb-xs">
              Create an account to get started
            </div>
            <q-form
              @submit="onSubmit"
              class="q-gutter-md q-mt-lg"
              :class="$q.screen.lg ? 'q-px-md' : ''"
            >
              <div>
                <label for="credential" class="form_field"
                  >Name <span class="text-red">*</span></label
                >
                <q-input v-model="user.name" outlined dense type="text" />
              </div>

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
                  <template v-slot:hint>
                    <span class="text-red" v-if="onPasswordLength"
                      >Password length must be 8</span
                    >
                  </template>
                </q-input>
              </div>
              <div>
                <label for="confirm_password" class="form_field"
                  >Confirm Password <span class="text-red">*</span></label
                >
                <q-input
                  v-model="user.password_confirmation"
                  :type="isConfirmPwd ? 'password' : 'text'"
                  outlined
                  bottom-slots
                  dense
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isConfirmPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isConfirmPwd = !isConfirmPwd"
                    />
                  </template>
                  <template v-slot:hint>
                    <span class="text-red" v-if="onPasswordMisMatch"
                      >Password Mismatch</span
                    >
                  </template>
                </q-input>
              </div>
              <div class="q-mt-lg q-mb-lg">
                <q-btn
                  class="form_button"
                  label="Register"
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
                  <router-link :to="{ name: 'login' }" class="sign_link">
                    <span class="forgot_password text-right"
                      >Already an Account? Login</span
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
import { ref } from "vue";
import { computed } from "vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const $store = useStore();

const router = useRouter();

const loading = ref(false);

const isPwd = ref(true);

const isConfirmPwd = ref(true);

const user = reactive({
  email: null,
  password: null,
  name: null,
  password_confirmation: null,
});

const onSubmit = async () => {
  let payload = {
    url: "public/auth/register",
    data: user,
    has_commit: false,
    successMsg: "Account created Successful",
    errorMsg: "Account creation Failed",
  };
  loading.value = true;
  $store.dispatch("example/postRequest", payload).then((response) => {
    if (response.success) {
      router.push({ name: "login" });
    }

    loading.value = false;
  });
};

const onPasswordMisMatch = computed(() => {
  return user.password !== user.password_confirmation;
});

const onPasswordLength = computed(() => {
  return user.password != null && user.password.length < 8;
});

const validateForm = computed(() => {
  return (
    user.password == null ||
    user.name == null ||
    user.email == null ||
    (user.password !== null && user.password.length < 8) ||
    user.password !== user.password_confirmation
  );
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
