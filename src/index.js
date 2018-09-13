import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = "AIzaSyBosbrSs7FAfxk8MH5RzUIVzdT4w-P7AsA";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};
        console.log(this.state);


        YTSearch({key: API_KEY, term: "surfboards"}, (videos) => {
            this.setState({videos})
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>

        )
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);