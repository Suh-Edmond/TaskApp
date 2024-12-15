<template>
  <div>
    <!------------------------------------------EDIT=------------------>
    <q-dialog v-model="showViewDialogBox">
      <q-card
        :style="$q.platform.is.desktop ? 'width: 350px' : 'width: 450px'"
        class="q-mx-md"
      >
        <q-card-section class="flex">
          <div class="text-h6">Task Details</div>
          <q-space />
          <div>
            <q-btn flat icon="close" @click="closeDialog()" />
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form class="q-gutter-md" :class="$q.screen.lg ? 'q-px-md' : ''">
            <div>
              <label for="credential" class="form_field text-bold"
                >Title
              </label>
              <p>{{ viewTask.title }}</p>
            </div>

            <div>
              <label for="credential" class="form_field text-bold"
                >Due Date</label
              >
              <p>{{ viewTask.due_date }}</p>
            </div>

            <div>
              <label for="credential" class="form_field text-bold"
                >Status
              </label>
              <p
                :class="
                  viewTask.status == 'COMPLETE' ? 'text-secondary' : 'text-info'
                "
              >
                {{ viewTask.status }}
              </p>
            </div>

            <div>
              <label for="credential" class="form_field text-bold"
                >Description
              </label>
              <p>{{ viewTask.description }}</p>
            </div>

            <div class="flex">
              <div>
                <label for="toggle" class="form_field text-bold"
                  >Toggle Status</label
                >

                <q-toggle
                  v-model="toggle"
                  @update:model-value="changeTaskStatus()"
                />
              </div>

              <div v-if="loading">
                <q-spinner color="primary" size="2.5em" :thickness="3" />
              </div>
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
import { ref } from "vue";
import { onMounted } from "vue";
import { LocalStorage } from "quasar";

const emits = defineEmits(["closeDialog"]);

const $store = useStore();

const showViewDialogBox = ref(true);

const loading = ref(false);

const toggle = ref(false);

const viewTask = ref(null);

const authUserId = LocalStorage.getItem("data").id;

const changeTaskStatus = () => {
  loading.value = true;
  let payload = {
    data: {
      id: viewTask.value.id,
      status: toggle.value ? "COMPLETE" : "PENDING",
      userId: authUserId,
    },
    url: "protected/tasks/toggle-status",
    has_commit: true,
    commit: "SET_TASK",
    successMsg: "Task status updated successfully",
    errorMsg: "An error occurred",
    set_loader: false,
  };

  $store.dispatch("example/putRequest", payload).then((res) => {
    viewTask.value = res.data;
    loading.value = false;
  });
};

const fetchTask = () => {
  let payload = {
    url: `protected/tasks/users/${authUserId}?page=1&per_page=5&filter=&sortBy=`,
    commit: "SET_TASKS",
    data: null,
    has_commit: true,
  };

  $store.dispatch("example/getRequest", payload).then((res) => {});
};

const closeDialog = () => {
  emits("closeDialog", false);
  fetchTask();
};

onMounted(() => {
  viewTask.value = $store.getters["example/getTask"];
  toggle.value = viewTask.value.status == "COMPLETE";
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
