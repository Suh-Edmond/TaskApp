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
            @click="createTask()"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md">
          <q-table flat bordered :rows="data" :columns="columns" row-key="name">
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="name" :props="props" class="text-weight-bold">
                  {{ props.row.name }}
                </q-td>
                <q-td
                  key="status"
                  :props="props"
                  v-if="props.row.status"
                  class="text-secondary text-weight-bold"
                >
                  COMPLETED
                </q-td>
                <q-td
                  key="status"
                  :props="props"
                  v-if="!props.row.status"
                  class="text-negative text-weight-bold"
                >
                  INCOMPLETE
                </q-td>
                <q-td key="due_date" :props="props" class="text-weight-bold">
                  {{ props.row.due_date }}
                </q-td>
                <q-td key="action" :props="props">
                  <q-btn flat round>
                    <q-icon
                      name="menu"
                      size="xs"
                      color="primary"
                      class="menu_icon"
                      clickable
                    >
                      <q-menu>
                        <q-list bordered separator style="width: 210px">
                          <q-item
                            clickable
                            v-close-popup
                            @click="showEditBox(props.row)"
                          >
                            <q-item-section avatar>
                              <span>
                                <q-icon name="edit" size="xs" class="edit" />
                              </span>
                            </q-item-section>
                            <q-item-section>
                              <q-item-label class="edit">Edit</q-item-label>
                            </q-item-section>
                          </q-item>
                          <q-item clickable v-close-popup @click="deleteTask">
                            <q-item-section avatar>
                              <span>
                                <q-icon
                                  name="delete"
                                  size="xs"
                                  class="text-red"
                                />
                              </span>
                            </q-item-section>
                            <q-item-section>
                              <q-item-label class="edit text-red"
                                >Delete</q-item-label
                              >
                            </q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-icon>
                  </q-btn>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
      </div>
    </div>
    <div class="col-2 col-md-2 col-lg-2 col-sm-12 col-xs-12"></div>

    <!------------------------------------------EDIT=------------------>
    <q-dialog v-model="showEditDialogBox">
      <q-card style="min-width: 400px">
        <q-card-section class="flex q-mx-md">
          <div class="text-h6">Edit Task</div>
          <q-space />
          <div>
            <q-btn flat icon="close" v-close-popup />
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

            <div>
              <label for="credential" class="form_field"
                >Status <span class="text-red">*</span></label
              >
              <q-select
                outlined
                v-model="task.status"
                dense
                :options="statuses"
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
            </div>

            <div class="q-mt-lg q-mb-lg flex justify-end">
              <q-btn
                label="Save"
                :loading="loading"
                :disabled="false"
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
import { ref, reactive } from "vue";
// import { useTaskStore } from "src/stores/example-store";
import { onMounted } from "vue";

// const store = useTaskStore();
onMounted(() => {
  // console.log(store.getTasks);
});

const loading = ref(false);
const task = ref({
  title: "",
  due_date: new Date(),
  description: "",
  status: "",
});
const statuses = [
  {
    label: "COMPLETED",
    value: true,
  },
  {
    label: "INCOMPLETE",
    value: "false",
  },
];

const onSubmit = async () => {
  let payload = {
    url: "protected/tasks/users/id",
    commit: "SET_TASKS",
    data: task,
  };
  // store.postReqest(payload);
};

const data = ref([
  {
    name: "tASK 1",
    due_date: new Date(),
    status: false,
    id: "4534",
  },
  {
    name: "tASK 1",
    due_date: new Date(),
    status: false,
    id: "4534",
  },
  {
    name: "tASK 1",
    due_date: new Date(),
    status: true,
    id: "4534",
  },
]);

const formatdDate = (date) => {
  return moment(date).format("YYYY/MM/DD");
};

const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },

  {
    name: "due_date",
    required: true,
    label: "Due Date",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "status",
    required: true,
    label: "Status",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },

  {
    name: "action",
    label: "Action",
    field: "action",
    sortable: true,
    align: "left",
  },
];

const showEditDialogBox = ref(false);

const showEditBox = (data) => {
  showEditDialogBox.value = true;
  task.value = data;
  // console.log(task.value);

  return task;
};

const deleteTask = async () => {};

const createTask = () => {
  showEditDialogBox.value = true;
};
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
