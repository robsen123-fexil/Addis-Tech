import { call , put, takeEvery } from 'redux-saga/effects';
import {getsongsSuccess} from './songState'
 

function* workGetsongsFetch() {
    const songs=yield call(()  =>fetch('http://127.0.0.1:8000/') );
    const formattedsongs=yield songs.json();
    const formattedsongsShortened=formattedsongs.slice(0,10);
    yield put(getsongsSuccess(formattedsongsShortened));

}

function* songSaga() {
    yield takeEvery('songs/getsongsFetch' , workGetsongsFetch);
}


export default songSaga;