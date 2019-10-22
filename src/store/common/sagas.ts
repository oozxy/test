import { call, put, takeEvery } from 'redux-saga/effects'
// import Api from '...'

function* getData(action) {
   try {
      const response = yield call(api.getData, action.payload.id);
      yield put({type: "GET_DATA_SUCCEEDED", payload: response});
   } catch (e) {
      yield put({type: "GET_DATA_FAILED", payload: error});
   }
}

function* mySaga() {
  yield* takeEvery("GET_DATA", getData);
}

export default mySaga;