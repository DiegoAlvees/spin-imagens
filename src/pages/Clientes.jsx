import { useEffect, useState } from "react";

export default function Clientes() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetch("/videos.json")
      .then((response) => response.json())
      .then(setVideos);
  }, []);

  const handleVideoClick = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const closeModal = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="flex justify-center pt-20 bg-gradient-to-t from-blue-950 to-black min-h-screen py-10">
      <div className="grid grid-cols-3 gap-6 mx-3 w-full max-w-screen-lg">
        {videos.map((video) => {
            return (

        <video
        key={video.id}
          autoPlay
          loop
          muted
          className="object-cover rounded-lg shadow-lg shadow-lime-100 overflow-hidden hover:cursor-pointer"
          onClick={() => handleVideoClick(video.video)}
        >
          <source src={video.video} type="video/mp4" />
        </video>
            )

            
        })}
        
      </div>

      {selectedVideo && (
        <div
          className="flex fixed inset-0 z-50 min-h-screen w-full justify-center items-center bg-black bg-opacity-65 "
          onClick={closeModal}
        >
            <div className="flex justify-center items-center overflow-hidden rounded-xl w-64">
          <video
            autoPlay
            loop
            muted
            onClick={closeModal}
          >
            <source src={selectedVideo} type="video/mp4" />
          </video>
          </div>
        </div>
      )}
    </div>
  );
}
