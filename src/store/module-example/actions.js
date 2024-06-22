import { Notify, Platform } from "quasar";
import { api } from "src/boot/axios";

export function postRequest({ commit }, payload) {
  return api
    .post(payload.url, payload.data)
    .then((res) => {
      if (payload.has_commit) {
        commit(payload.commit, res.data);
      }

      Notify.create({
        type: "positive",
        color: "positive",
        message: "Action completed successful",
        position: Platform.is.mobile ? "bottom" : "top-right",
      });
      return res.data;
    })
    .catch((error) => {
      Notify.create({
        type: "negative",
        color: "negative",
        message: "Action fail successful",
        position: Platform.is.mobile ? "bottom" : "top-right",
      });
      return error.response;
    });
}

export function getRequest({ commit }, payload) {
  return api
    .get(payload.url)
    .then((res) => {
      if (payload.has_commit) {
        commit(payload.commit, res.data);
      }

      return res;
    })
    .catch((error) => {
      return error;
    });
}

export function putRequest({ commit }, payload) {
  return api
    .put(payload.url)
    .then((res) => {
      if (res.has_commit) {
        commit(payload.commit, res.data);
      }
    })
    .catch((error) => {
      return error;
    });
}

export function deleteRequest(payload) {
  return api
    .delete(payload.url)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
}
