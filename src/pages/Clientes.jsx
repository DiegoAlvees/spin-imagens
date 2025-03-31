import { useEffect, useState } from "react";
import Play from "/play.svg"

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
    setSelectedVideo(null);
  };

  return (
    <div className="flex justify-center pt-20 bg-gradient-to-t from-black to-blue-950 min-h-screen py-10">
      <div className="grid grid-cols-3 md:grid-cols-4 lg gap-6 md:gap-6 mx-3 w-full max-w-screen-lg">
        {videos.map((video) => {
          return (
<div
              key={video.id}
              className="relative rounded-lg shadow-lg shadow-slate-600 overflow-hidden hover:cursor-pointer"
              onClick={() => handleVideoClick(video.video)}
            >
              <img src={video.jpg} alt="thumb" className="object-cover w-full h-full" />
              <img
                src={Play}
                alt="Play"
                className="absolute top-1/2 left-1/2 w-9 h-9 transform -translate-x-1/2 -translate-y-1/2 opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          );
        })}
      </div>

      {selectedVideo && (
        <div
          className="flex fixed inset-0 z-50 min-h-screen w-full justify-center items-center bg-black bg-opacity-65 lg:bg-opacity-75 "
          onClick={closeModal}
        >
          <div className="flex justify-center items-center overflow-hidden rounded-xl w-64 lg:w-[300px]">
            <video autoPlay loop onClick={closeModal}>
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
