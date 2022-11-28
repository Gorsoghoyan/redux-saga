import { call, put, take, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import { getCountries } from "../../../fakeApi/getCountries";
import { GET_COUNTRIES_REQUESTED } from "../../tools/actionTypes";
import { getCountriesFailed, getCountriesSuccess } from "../../tools/setters";

function* fetchCountries () {
    try {
        const countries = yield call(getCountries);
        yield put(getCountriesSuccess(countries));
    } catch (error) {
        yield put(getCountriesFailed(error));
    }
}

function* countriesSaga () {
    yield takeEvery(GET_COUNTRIES_REQUESTED, fetchCountries);
}

export default countriesSaga;