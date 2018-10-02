// import exampleVideoData from '../data/exampleVideoData.js';
// import VideoList from './VideoList.js';
// import VideoPlayer from './VideoPlayer.js';

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div> <VideoPlayer video = {exampleVideoData[0]}/></div>
//       </div>
//       <div className="col-md-5">
//         <div> <VideoList videos = {exampleVideoData}/></div>
//       </div>
//     </div>
//   </div>
// );

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// export default App;


import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    };
  }
  
  onVideoListEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  
  getVideosFromYoutube() {
    return searchYouTube({
      key: YOUTUBE_API_KEY,
      query: 'cats',
      max: 5,
    }, (data) => console.log(data));
  }
  
  componentDidMount() {
    // var videos = this.getVideosFromYoutube();
     
    // this.setState({
    //   videos: videos, currentVideo: videos[0]
    // });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div> <VideoPlayer video = {this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div> <VideoList videos = {this.state.videos} onVideoListEntryClick = {this.onVideoListEntryClick.bind(this)}/> </div>
          </div>
        </div>
      </div>
    );
  }
  
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
