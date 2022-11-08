import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    // console.log(props);
    if (!song){
        return <div><h2>Select Song</h2></div>;
    }
    return(
        <div className="ui container">
            <h3>Details for </h3>
            <p>
                {song.title}
            </p>
            <p>
                {song.duration}
            </p>
        </div>
    );
}

const mapStateToProps  = state =>{
    return { song: state.selectedSong}
}
export default connect(mapStateToProps)(SongDetail);