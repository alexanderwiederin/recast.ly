var searchYouTube = (options, callback) => {
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video'
    },
    
    success: (data) => callback(data.items),
    
    error: () => console.log('Failed to get data!')
    
  });
};

export default searchYouTube;



// GET https://www.googleapis.com/youtube/v3/search