
import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarean', duration: '12:4'}, 
        {title: 'All star', duration: '3:14'}
    ];
}

const selectedSongReducer = (selectedSong= null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});