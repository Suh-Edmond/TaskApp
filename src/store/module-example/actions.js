import { Notify, Platform } from "quasar";
import { api } from "src/boot/axios";

export function postRequest({ commit }, payload) {
  commit("SET_LOADING", true);
  return api
    .post(payload.url, payload.data)
    .then((res) => {
      if (payload.has_commit) {
        commit(payload.commit, res.data);
      }

      Notify.create({
        type: "positive",
        color: "positive",
        message: payload.successMsg,
        position: Platform.is.mobile ? "bottom" : "top-right",
      });
      return res.data;
    })
    .catch((error) => {
      Notify.create({
        type: "negative",
        color: "negative",
        message: payload.errorMsg,
        position: Platform.is.mobile ? "bottom" : "top-right",
      });
      return error.response;
    })
    .finally(() => {
      commit("SET_LOADING", false);
    });
}

export function getRequest({ commit }, payload) {
  commit("SET_LOADING", true);
  return api
    .get(payload.url)
    .then((res) => {
      if (payload.has_commit) {
        commit(payload.commit, res.data.data);
      }

      return res;
    })
    .catch((error) => {
      return error;
    })
    .finally(() => {
      commit("SET_LOADING", false);
    });
}

export function putRequest({ commit }, payload) {
  if (payload.set_loader) {
    commit("SET_LOADING", true);
  }
  return api
    .put(payload.url, payload.data)
    .then((res) => {
      if (payload.has_commit) {
        commit(payload.commit, res.data.data);
      }

      Notify.create({
        type: "positive",
        color: "positive",
        message: payload.successMsg,
        position: Platform.is.mobile ? "bottom" : "top-right",
      });
      return res.data;
    })
    .catch((error) => {
      Notify.create({
        type: "negative",
        color: "negative",
        message: payload.errorMsg,
        position: Platform.is.mobile ? "bottom" : "top-right",
      });
      return error;
    })
    .finally(() => {
      commit("SET_LOADING", false);
    });
}

export function deleteRequest({ commit }, payload) {
  commit("SET_LOADING", true);
  return api
    .delete(payload.url)
    .then((res) => {
      Notify.create({
        type: "positive",
        color: "positive",
        message: payload.successMsg,
        position: Platform.is.mobile ? "bottom" : "top-right",
      });
      return res.data;
    })
    .catch((error) => {
      Notify.create({
        type: "negative",
        color: "negative",
        message: payload.errorMsg,
        position: Platform.is.mobile ? "bottom" : "top-right",
      });
      return error;
    })
    .finally(() => {
      commit("SET_LOADING", false);
    });
}
