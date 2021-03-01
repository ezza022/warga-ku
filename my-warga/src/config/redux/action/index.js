import { database } from "../../firebase";

export const changeShowModal = (value) => (dispatch) => {
  dispatch({ type: "CHANGE_SHOWMODAL", value: value });
};

export const getDataFromAPI = (users) => (dispatch) => {
  const urlUsers = database.ref(users);
  return new Promise((resolve, reject) => {
    urlUsers.on("value", (snapshot) => {
      const data = [];
      if (snapshot.val()) {
        // MEMBUAT OBJECT MENJADI ARRAY
        Object.keys(snapshot.val()).map((key) => {
          return data.push({
            id: key,
            data: snapshot.val()[key],
          });
        });
        dispatch({ type: `CHANGE_${users.toUpperCase()}`, value: data });
        resolve(data);
      }
    });
  });
};

export const getUserAPI = (id) => (dispatch) => {
  const urlUsers = database.ref("users/" + id);
  return new Promise((resolve, reject) => {
    urlUsers.on("value", (snapshot) => {
      dispatch({ type: "CHANGE_USER", value: snapshot.val() });
      resolve(snapshot.val());
    });
  });
};

export const updateUserAPI = (data, id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    database.ref(`users/${id}`).set(data, (err) => {
      if (err) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

export const addDataToAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    database
      .ref(`users/`)
      .push({
        fName: data.fName,
        lName: data.lName,
        num: data.num,
        sex: data.sex,
        birth: data.birth,
        date: data.date,
        month: data.month,
        year: data.year,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log("error", err);
        reject(err);
      });
  });
};

export const deleteDataAPI = (id) => (dispatch) => {
  const urlUsers = database.ref(`users/${id}`);
  return new Promise((resolve, reject) => {
    if (id !== null) {
      urlUsers.remove().then((res) => {
        console.log("sukses hapus ", res);
      });
    }
  });
};
