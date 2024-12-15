<template>
  <div>
    <!------------------------------------------EDIT=------------------>
    <q-dialog v-model="showDialog">
      <q-card style="min-width: 500px" class="q-mx-md">
        <q-card-section class="flex">
          <div class="text-h6">{{ formHeader }}</div>
          <q-space />
          <div>
            <q-btn flat icon="close" @click="closeDialog" />
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
              <small v-show="validatetitleFieldLength" class="text-red"
                >Description must have between 10 and 255 characters</small
              >
            </div>

            <div>
              <label for="credential" class="form_field"
                >Due Date <span class="text-red">*</span></label
              >
              <q-input v-model="task.due_date" outlined dense type="date" />
            </div>
            <div>
              <label for="credential" class="form_field"
                >Status <span class="text-red">*</span></label
              >
              <q-select
                class="col-md-5"
                v-model="task.status"
                outlined
                dense
                :options="task_status"
              />
            </div>
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
              <small v-show="validateDescriptionFieldLength" class="text-red"
                >Description must have between 50 and 1000 characters
              </small>
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
import { computed, watchEffect } from "vue";

const props = defineProps({
  formHeader: String,
});

const emits = defineEmits(["closeDialog"]);
const $store = useStore();

const loading = ref(false);

const authUserId = LocalStorage.getItem("data").id;

const task_status = ref([
  {
    label: "Pending",
    value: "PENDING",
  },
  {
    label: "Complete",
    value: "COMPLETE",
  },
]);

const showDialog = ref(true);

const task = reactive({
  title: "",
  due_date: "",
  description: "",
  status: "",
  userId: authUserId,
  id: null,
});

const onSubmit = () => {
  loading.value = true;
  let payload = {
    data: {
      title: task.title,
      due_date: task.due_date,
      description: task.description,
      status: task.status.value,
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
            url: `protected/tasks/users/${authUserId}?page=1&per_page=5&filter=&sortBy=`,
            commit: "SET_TASKS",
            data: null,
            has_commit: true,
          };
          $store.dispatch("example/getRequest", payload).then((res) => {
            $store.commit("example/SET_PAGINATION", {
              sortBy: "title",
              descending: false,
              page: res.data.data.current_page,
              rowsPerPage: res.data.data.per_page,
              rowsNumber: res.data.data.total,
            });
          });
        }
      })
      .finally(() => {
        closeDialog();
        loading.value = false;
      });
  } else {
    (payload.url = `protected/tasks/${edited.id}/update`),
      $store
        .dispatch("example/putRequest", payload)
        .then((response) => {
          if (response.success) {
            let payload = {
              url: `protected/tasks/users/${authUserId}?page=1&per_page=5&filter=&sortBy=`,
              commit: "SET_TASKS",
              data: null,
              has_commit: true,
            };
            $store
              .dispatch("example/getRequest", payload)
              .then((res) => {
                $store.commit("example/SET_PAGINATION", {
                  sortBy: "title",
                  descending: false,
                  page: res.data.data.current_page,
                  rowsPerPage: res.data.data.per_page,
                  rowsNumber: res.data.data.total,
                });
              })
              .finally(() => {
                $store.commit("example/SET_TASK", null);
              });
          }
        })
        .catch((error) => {})
        .finally(() => {
          closeDialog();
          loading.value = false;
        });
  }
};

const setFormFields = watchEffect(() => {
  const edited = $store.getters["example/getTask"];

  if (edited != null) {
    task.title = edited.title;
    task.description = edited.description;
    task.due_date = edited.due_date;
    task.id = edited.id;
    task.status =
      edited.status == "COMPLETE"
        ? { label: "Complete", value: "COMPLETE" }
        : { label: "Pending", value: "PENDING" };
  }

  return task;
});

const resetForm = () => {
  task.due_date = "";
  task.description = "";
  task.status = "";
  task.userId = authUserId;
  task.id = null;
  task.title = "";

  return task;
};

const closeDialog = () => {
  resetForm();
  $store.commit("example/SET_TASK", null);

  emits("closeDialog", false);
};

const validateForm = computed(() => {
  return (
    task.title == "" ||
    task.description == "" ||
    task.due_date == "" ||
    validateDescriptionFieldLength.value
  );
});

const validateDescriptionFieldLength = computed(() => {
  return (
    (task.description != "" && task.description.length < 50) ||
    task.description.length > 1000
  );
});

const validatetitleFieldLength = computed(() => {
  return (
    (task.title != "" && task.title.length < 10) || task.title.length > 255
  );
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
