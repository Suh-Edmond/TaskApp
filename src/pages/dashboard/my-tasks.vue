<template>
  <div class="row q-mt-lg">
    <div class="col-2 col-md-2 col-lg-2 col-sm-12 col-xs-12"></div>
    <div class="col-8 col-md-8 col-xs-12 col-sm-12 col-lg-8">
      <div class="row flex justify-between q-mt-lg q-my-md">
        <div>
          <label for="title" class="header_title">My Tasks</label>
        </div>
        <div>
          <q-btn
            color="primary"
            no-caps
            label="Create Task"
            @click="showCreateDialog({ title: 'Create Task' })"
          />
        </div>
      </div>
      <tableComponent
        :data="getTasks"
        :pagination="pagination"
        @onShowCreateDialog="showCreateDialog"
        @onShowTask="onShowTask"
        @onFetchTasks="fetchTask(1, 2, '', '')"
        @onRequest="onRequest"
        @onQueryTask="onQueryTask"
      ></tableComponent>
    </div>
    <div class="col-2 col-md-2 col-lg-2 col-sm-12 col-xs-12"></div>

    <createTaskDialog
      v-if="showEditDialogBox"
      :formHeader="formHeader"
    ></createTaskDialog>

    <taskDialog v-if="showViewDialogBox"> </taskDialog>
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
import taskDialog from "src/components/task-dialog.vue";

const router = useRouter();

const $store = useStore();

const authUserId = LocalStorage.getItem("data").id;

const showEditDialogBox = ref(false);

const showViewDialogBox = ref(false);

const formHeader = ref("Create Task");

const taskObject = ref(null);

const onSubmit = async () => {};

const pagination = ref({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 5,
  rowsNumber: 10,
});

const getTasks = computed(() => {
  let data = [];
  if ($store.getters["example/getTasks"] != null) {
    $store.getters["example/getTasks"].data.forEach((ele) => {
      data.push({
        counter: $store.getters["example/getTasks"].data.indexOf(ele) + 1,
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

const showCreateDialog = (data) => {
  formHeader.value = data.title;
  return (showEditDialogBox.value = !showEditDialogBox.value);
};

const onShowTask = (data) => {
  taskObject.value = data;
  return (showViewDialogBox.value = !showViewDialogBox.value);
};

const fetchTask = (page, per_page, filter, sortBy) => {
  let payload = {
    url: `protected/tasks/users/${authUserId}?page=${page}&per_page=${per_page}&filter=${filter}&sortBy=${sortBy}`,
    commit: "SET_TASKS",
    data: null,
    has_commit: true,
  };

  $store.dispatch("example/getRequest", payload).then((res) => {
    pagination.value.page = res.data.data.current_page;
    pagination.value.rowsPerPage = res.data.data.per_page;
    pagination.value.rowsNumber = res.data.data.total;
  });
};

const onRequest = (props) => {
  const { page, rowsPerPage, sortBy, descending, filter } = props.pagination;

  fetchTask(page, rowsPerPage, filter, sortBy);
};

const onQueryTask = (data) => {
  console.log(data);

  fetchTask(
    pagination.value.page ?? 1,
    pagination.value.per_page ?? 5,
    data.filter,
    data.sortBy
  );
};

onMounted(() => {
  fetchTask(1, 2, "", "");
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
