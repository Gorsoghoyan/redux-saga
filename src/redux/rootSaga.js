import { all } from "redux-saga/effects";
import countriesSaga from "./sagas/countriesSaga";

function* rootSaga () {
    yield all([
        countriesSaga()
    ]);
}

export default rootSaga;