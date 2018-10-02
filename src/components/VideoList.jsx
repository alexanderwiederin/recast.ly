import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => 
      <VideoListEntry video = {video} onVideoListEntryClick = {props.onVideoListEntryClick} />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;


// var VideoList = (props) => (
//   <div className="video-list">
//     {/*props.map(video => <div><h5><em>{video.snippet.title}</em> youtube.com/watch?v= + {video.id.videoId}</h5></div>)*/}

//     <VideoListEntry video = {props.videos[0]}/>
//     <VideoListEntry video = {props.videos[1]}/>
//     <VideoListEntry video = {props.videos[2]}/>
//     <VideoListEntry video = {props.videos[3]}/>
//     <VideoListEntry video = {props.videos[4]}/>
//   </div>
// );