<template>
  <div class="row q-mt-lg">
    <div class="col-2 col-md-2 col-lg-2 col-sm-12 col-xs-12"></div>
    <div class="col-8 col-md-8 col-xs-12 col-sm-12 col-lg-8">
      <div class="row flex justify-between q-mt-lg q-ma-md">
        <div>
          <label for="title" class="header_title">My Tasks</label>
        </div>
        <div>
          <q-btn
            color="primary"
            no-caps
            label="Create Task"
            @click="showCreateDialog()"
          />
        </div>
      </div>
      <tableComponent
        :data="getTasks"
        @onShowCreateDialog="showCreateDialog"
        @onFetchTasks="fetchTask"
      ></tableComponent>
    </div>
    <div class="col-2 col-md-2 col-lg-2 col-sm-12 col-xs-12"></div>

    <createTaskDialog
      v-if="showEditDialogBox"
      :formHeader="formHeader"
    ></createTaskDialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted } from "vue";
import { LocalStorage } from "quasar";
import { computed } from "vue";
import createTaskDialog from "../../components/create-task-dialog.vue";
import tableComponent from "../../components/table-component.vue";

const router = useRouter();

const $store = useStore();

const authUserId = LocalStorage.getItem("data").id;

const showEditDialogBox = ref(false);

const formHeader = ref("Create Task");

const onSubmit = async () => {};

const getTasks = computed(() => {
  let data = [];
  if ($store.getters["example/getTasks"] !== undefined) {
    $store.getters["example/getTasks"].forEach((ele) => {
      data.push({
        counter: $store.getters["example/getTasks"].indexOf(ele) + 1,
        id: ele.id,
        title: ele.title,
        description: ele.description,
        due_date: ele.due_date,
        status: ele.status,
        created_at: ele.created_at,
        updated_at: ele.updated_at,
        userId: ele.user_id,
      });
    });
  }

  return data;
});

const showCreateDialog = () => {
  return (showEditDialogBox.value = !showEditDialogBox.value);
};

const fetchTask = () => {
  let payload = {
    url: `protected/tasks/users/${authUserId}`,
    commit: "SET_TASKS",
    data: null,
    has_commit: true,
  };

  $store.dispatch("example/getRequest", payload).then((res) => {});
};

onMounted(() => {
  fetchTask();
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
