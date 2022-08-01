import { takeEvery, all } from 'redux-saga/effects';
import FetchToDoSagaWatcher from '../redux/sagas/ToDoSaga';

function *watchAll() {
    yield all([
      takeEvery("FETCH_TODO_LIST", FetchToDoSagaWatcher)
    ]);
  }
  
  export default watchAll;