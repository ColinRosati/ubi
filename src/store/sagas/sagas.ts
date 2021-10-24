import { put, takeEvery } from 'redux-saga/effects';
import { ActionType, FetchUbisAction } from 'store/actions';
import {  universalBasicIncomeCases as data } from 'logic/universalBasicIncomeCases';

function* fetchUbi() {
  try {
    yield put<FetchUbisAction>({
      type: ActionType.fetchUbis,
      payload: data,
    });

  } catch (e) {
    yield put<FetchUbisAction>({ type: ActionType.fetchUbiFailed, payload: 'Fetch failed' });
  }
}

export function* rootSaga() {
  yield takeEvery(ActionType.fetchRequest, fetchUbi);
}
