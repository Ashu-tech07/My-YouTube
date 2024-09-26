import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShimmerUI from './ShimmerUI';

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)


  useEffect(()=>{
    getVideos();
  },[])

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true);
    return () => {
      window.removeEventListener('scroll', infiniteScroll, true);
    }
  }, [nextPageToken]);

  const getVideos= async ()=>{
    try{
      const URL= nextPageToken!==''? `${YOUTUBE_VIDEO_API}&pageToken=${nextPageToken}` : YOUTUBE_VIDEO_API
      const data= await fetch(URL);
    const json= await data.json();
    setNextPageToken(json?.nextPageToken)
    setVideos([...videos,...json.items])
    }catch(err){
      console.log(err)
    }
     
  }

  const infiniteScroll = () => {
    if (window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.offsetHeight - 300) {
      getVideos();
    }
  }

  if(!videos.length) return <ShimmerUI />
  
  return (
    <div className={`flex flex-wrap justify-center ${!isMenuOpen ? "" : "ml-[280px]"}`}>
      {
      videos.map(video=> 
      <Link to={"/watch?v="+video?.id}>
      <VideoCard key={video?.id} info={video}/>
      </Link>
    )
    }
      
    </div>
  )
}

export default VideoContainer
