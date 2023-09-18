import axios from "axios";
// axios.put(api, item, {headers}).then(({data}) => data)
// axios.post(api, item, {headers}).then(({data}) => data)
// axios.delete(api).then(({data}) => data)

const API = `https://64c1582bfa35860baea06bca.mockapi.io/todos`;

const getTodo = () => axios(API).then(({ data }) => data);

const changeTodoItem = (id, item) =>
  axios
    .put(API + `/${id}`, item, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then(({ data }) => data);

const deleteTodoItem = (id) =>
  axios.delete(API + `/${id}`).then(({ data }) => data);

const addTodoItem = (item) =>
  axios
    .post(API, item, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then(({ data }) => data);

export { getTodo, changeTodoItem, deleteTodoItem, addTodoItem };
