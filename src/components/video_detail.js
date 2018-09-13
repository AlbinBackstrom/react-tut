import React from 'react';

const VideoDetail = ({video}) => {

    //Kontrollerar om det har laddats någon video. Returnerar ev div med text för att sedan l
    //visa videorna
    if (!video) {
        return <div>Loading...</div>
    }

    const videoID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}`;
    console.log(url);


    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} />
            </div>
            <div className="video-detail details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;