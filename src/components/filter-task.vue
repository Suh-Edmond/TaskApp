<template>
  <div
    class="row q-py-sm q-px-md"
    style="background-color: #ffffff; border-radius: 4px"
  >
    <q-select
      class="col-5 col-md-5 col-sm-12 col-xs-12"
      v-model="filter"
      outlined
      dense
      :options="task_status"
      label="Filter"
      clearable
      hide-bottom-space
    />
    <q-select
      class="col-5 col-md-5 col-sm-12 col-xs-12 q-pl-md"
      v-model="sortBy"
      outlined
      dense
      :options="sortOptions"
      label="SortBy"
      clearable
      hide-bottom-space
    />
    <div class="col-md-1"></div>

    <q-btn
      label="Apply Filter"
      color="primary"
      :disabled="validateQuery"
      @click="queryTask"
      no-caps
      class="flex justify-end col-md-1"
      size="md"
    >
    </q-btn>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { ref } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits(["onQueryTask"]);

const sortBy = ref("");
const filter = ref("");

const task_status = ref([
  {
    label: "Pending",
    value: "PENDING",
  },
  {
    label: "Complete",
    value: "COMPLETE",
  },
  {
    label: "All",
    value: "ALL",
  },
]);
const sortOptions = ref([
  {
    label: "Newest First",
    value: "DATE_DESC",
  },
  {
    label: "Oldest First",
    value: "DATE_ASC",
  },
  {
    label: "All",
    value: "ALL",
  },
]);

const validateQuery = computed(() => {
  return (
    (sortBy.value == "" || sortBy.value == null) &&
    (filter.value == "" || filter.value == null)
  );
});

const queryTask = () => {
  console.log(filter.value);

  let payload = {
    filter:
      filter.value !== "" && filter.value !== null ? filter.value.value : "",
    sortBy:
      sortBy.value !== "" && sortBy.value !== null ? sortBy.value.value : "",
  };

  emit("onQueryTask", payload);
};
</script>
