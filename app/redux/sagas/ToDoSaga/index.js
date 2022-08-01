import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { responseToDoList,errorToDoList,requestToDoList } from '../../slicers/ToDoSlicer';
import { FETCH_TODO_LIST } from './actions';

let callAPI = async ({ url, method, data }) => {
    return await Axios({
      url,
      method,
      data
    });
  };


  export function* fetchToDo() {
    try {
      let result = yield call(() =>
        callAPI({ url: "https://jsonplaceholder.typicode.com/todos/" })
      );
      yield put(responseToDoList(result.data));
    } catch (e) {
      yield put(errorToDoList(e));
    }
  }
  
  export default function* fetchToDoSagaWatcher() {
    yield takeEvery(FETCH_TODO_LIST, fetchToDo);
  }