export const GOOGLE_API_KEY=process.env.REACT_APP_GOOGLE_API_KEY

export const YOUTUBE_VIDEO_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key="+GOOGLE_API_KEY
export const YOUTUBE_SEARCH_API="https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q="
export const YOUTUBE_CATEGORIES_API = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + GOOGLE_API_KEY;
export const YOUTUBE_VIDEO_WATCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;
export const YOUTUBE_RECOMENDED_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key=${GOOGLE_API_KEY}&relatedToVideoId=`;
export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;

export const LIVE_CHAT_COUNT= 20;