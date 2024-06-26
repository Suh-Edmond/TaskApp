<template>
  <div class="row">
    <div class="col-12 col-md">
      <q-table
        flat
        bordered
        :rows="data"
        :columns="columns"
        row-key="title"
        :loading="getLoadingState"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="counter" :props="props" class="text-weight-bold">
              {{ props.row.counter }}
            </q-td>
            <q-td key="title" :props="props" class="text-weight-bold">
              {{ props.row.title }}
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
                      <q-item
                        clickable
                        v-close-popup
                        @click="deleteTask(props.row)"
                      >
                        <q-item-section avatar>
                          <span>
                            <q-icon name="delete" size="xs" class="text-red" />
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

        <template v-slot:loading>
          <q-inner-loading showing color="primary" />
        </template>
      </q-table>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
defineProps({
  data: Array,
});

const $store = useStore();

const getLoadingState = computed(() => {
  return $store.getters["example/getLoadingState"];
});

const columns = [
  {
    name: "counter",
    required: true,
    label: "S/N",
    align: "left",
    field: (row) => row.counter,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "title",
    required: true,
    label: "Title",
    align: "left",
    field: (row) => row.title,
    format: (val) => `${val}`,
    sortable: true,
  },

  {
    name: "status",
    required: true,
    label: "Status",
    align: "left",
    field: (row) => row.status,
    format: (val) => `${val}`,
    sortable: true,
  },

  {
    name: "due_date",
    required: true,
    label: "Due Date",
    align: "left",
    field: (row) => row.due_date,
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

const emit = defineEmits(["onShowCreateDialog"]);

const showEditBox = (data) => {
  let payload = {
    data: data,
    title: "Update Task",
  };
  $store.commit("example/SET_TASK", payload.data);
  emit("onShowCreateDialog", payload);
};

const deleteTask = async (data) => {
  let payload = {
    url: `protected/tasks/${data.id}/users/${data.userId}`,
    has_commit: false,
    successMsg: "Task deleted successfully",
    errorMsg: "An error occurred",
  };

  $store.dispatch("example/deleteRequest", payload).then((res) => {
    emit("onFetchTasks");
  });
};
</script>
