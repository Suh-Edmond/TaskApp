<template>
  <div>
    <!------------------------------------------EDIT=------------------>
    <q-dialog v-model="showEditDialogBox">
      <q-card style="min-width: 400px">
        <q-card-section class="flex q-mx-md">
          <div class="text-h6">{{ formHeader }}</div>
          <q-space />
          <div>
            <q-btn flat icon="close" v-close-popup @click="closeDialog" />
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
            :class="$q.screen.lg ? 'q-px-md' : ''"
          >
            <div>
              <label for="credential" class="form_field"
                >Title <span class="text-red">*</span></label
              >
              <q-input v-model="task.title" outlined dense type="text" />
            </div>

            <div>
              <label for="credential" class="form_field"
                >Due Date <span class="text-red">*</span></label
              >
              <q-input v-model="task.due_date" outlined dense type="date" />
            </div>

            <!-- <div>
              <label for="credential" class="form_field"
                >Status <span class="text-red">*</span></label
              >
              <q-select
                outlined
                v-model="task.status"
                dense
                :options="statuses"
              />
            </div> -->

            <div>
              <label for="credential" class="form_field"
                >Description <span class="text-red">*</span></label
              >
              <q-input
                v-model="task.description"
                outlined
                dense
                type="textarea"
              />
            </div>

            <div class="q-mt-lg q-mb-lg flex justify-end">
              <q-btn
                label="Save"
                :loading="loading"
                :disabled="validateForm"
                color="primary"
                no-caps
                type="submit"
              >
              </q-btn>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!--------------------------------------END OF EDIT DIALOG----------->
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { LocalStorage } from "quasar";
import { ref } from "vue";
import { reactive } from "vue";
import { computed, watch } from "vue";

defineProps({
  formHeader: String,
});

const $store = useStore();

const showEditDialogBox = ref(true);

const loading = ref(false);

const authUserId = LocalStorage.getItem("data").id;

const task = reactive({
  title: "",
  due_date: "",
  description: "",
  status: "",
  userId: authUserId,
  id: null,
});

const statuses = [
  {
    label: "COMPLETE",
    value: "COMPLETE",
  },
  {
    label: "PENDING",
    value: "PENDING",
  },
];

const onSubmit = () => {
  loading.value = true;
  let payload = {
    data: {
      title: task.title,
      due_date: task.due_date,
      description: task.description,
      status: "PENDING",
      userId: authUserId,
    },
    url: "",
    has_commit: false,
    successMsg: "Task saved successfully",
    errorMsg: "An error occurred",
    set_loader: true,
  };

  const edited = $store.getters["example/getTask"];
  if (edited == undefined) {
    payload.url = "protected/tasks/create";
    $store
      .dispatch("example/postRequest", payload)
      .then((response) => {
        if (response.success) {
          let payload = {
            url: `protected/tasks/users/${authUserId}`,
            commit: "SET_TASKS",
            data: null,
            has_commit: true,
          };
          $store.dispatch("example/getRequest", payload).then((res) => {});
        }
      })
      .finally(() => {
        showEditDialogBox.value = false;
        loading.value = false;
        resetForm();
      });
  } else {
    (payload.url = `protected/tasks/${edited.id}/update`),
      $store
        .dispatch("example/putRequest", payload)
        .then((response) => {
          if (response.success) {
            let payload = {
              url: `protected/tasks/users/${authUserId}`,
              commit: "SET_TASKS",
              data: null,
              has_commit: true,
            };
            $store.dispatch("example/getRequest", payload).then((res) => {});
            $store.commit("example/SET_TASK", null);
          }
        })
        .finally(() => {
          showEditDialogBox.value = false;
          loading.value = false;
          resetForm();
        });
  }
};

const setFormFields = watch(() => {
  const edited = $store.getters["example/getTask"];

  if (edited != null) {
    task.title = edited.title;
    task.description = edited.description;
    task.due_date = edited.due_date;
    task.id = edited.id;
    task.status = edited.status
      ? { label: "COMPLETED", value: 1 }
      : { label: "INCOMPLETE", value: 0 };
  }

  return task;
});

const resetForm = () => {
  (task.due_date = ""), (task.description = "");
  task.status = "";
  task.userId = authUserId;
  task.id = null;
  task.title = "";

  return task;
};

const closeDialog = () => {
  resetForm();
};

const validateForm = computed(() => {
  return task.title == "" || task.description == "" || task.due_date == "";
});
</script>

<style lang="scss" scoped>
.header_title {
  text-transform: capitalize;
  color: $primary;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: "Roboto";
  display: block;
}

.menu_icon {
  cursor: pointer;
}

.edit {
  color: $primary;
  font-size: 0.8rem;
}
</style>
