import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = "AIzaSyBosbrSs7FAfxk8MH5RzUIVzdT4w-P7AsA";


const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
};

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);