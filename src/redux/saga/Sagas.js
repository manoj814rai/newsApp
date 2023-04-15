import { put, takeLatest, all, takeEvery } from 'redux-saga/effects';
import {sagaActions} from "./SagaActions";
import {setNewsList} from "../slices/NewsSlices";

const fetchData = (url, options) => {
    return  fetch(url, {
        method: options.method || "GET",
    }).then(response => response.json())
        .then(json => json);
};

function* fetchNews(action) {
    try {
        const json = yield fetchData("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c39a26d9c12f48dba2a5c00e35684ecc", {method: 'GET'});
        //console.log('json ========', json);
        const list = json.articles.map((item, index) => { return {...item, isFavourite: false, uniqueId: `${index}_${item.source.id}`}})
        yield put(setNewsList(list));
    }
    catch (e) {
        console.log('error ========', e);
        yield put(setNewsList([]));
    }
}

function* actionWatcher() {
    yield takeLatest(sagaActions.FETCH_NEWS_DATA_SAGA, fetchNews)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}