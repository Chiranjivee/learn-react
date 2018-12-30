import React from "react";
import ReactDOM from "react-dom";

import SearchBar from './components/search_bar';

// create a react component
const App =  () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

const key = 'AIzaSyCPr2EC91RLhiqyE8TV5g5llrjXOqDIR6w';

ReactDOM.render(<App />, document.querySelector('.container'));