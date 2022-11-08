import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';


const App = () => {
    return(
        <div className="ui container grid">
            <div className="ui row" style={{marginTop: 50, marginBottom: 50}}>
                <div className="column eight wide">
                    <SongList/>
                </div>
                <div className="column eight wide">
                    <SongDetail/>
                </div>
            </div>
        </div>
    );
}

export default App;