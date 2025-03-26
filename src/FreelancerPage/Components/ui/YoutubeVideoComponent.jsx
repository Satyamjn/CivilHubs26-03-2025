import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

const API_KEY = "AIzaSyDqnz6RLuYVZfe8Bv0zJliVKGQeH8H5D5k"; 
const CHANNEL_ID = "UC6Lu9I0rktwE2eW5WgfmJxA"; 

const YoutubeShortsComponent = () => {
  const [shorts, setShorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trim",
  });

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&type=video&videoDuration=short&key=${API_KEY}`
        );
        const data = await response.json();
        if (data.items) {
          setShorts(data.items);
        } else {
          setError("No shorts found.");
        }
      } catch (err) {
        setError("Error fetching YouTube Shorts.");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchShorts();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (loading) return <p className="text-center">Loading Shorts...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-white">
      <div className="container mx-auto py-8 -mt-20 " >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Learn With <span className="text-purple-600">Logical Softech Shorts</span>
        </h2>

        <div className="relative">
          <button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            onClick={scrollPrev}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            onClick={scrollNext}
          >
            <ArrowRight className="h-6 w-6" />
          </button>

          <div ref={emblaRef} className="overflow-hidden -mt-2">
            <div className="flex gap-4 -mt-2" style={{ width: "calc(250px * 10)" }}>
              {shorts.map((video) => (
                <div
                  key={video.id.videoId}
                  className="mt-4 mb-4 relative w-[210px] h-[400px] flex-shrink-0 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
                  onMouseEnter={() => setHoveredVideo(video.id.videoId)}
                  onMouseLeave={() => setHoveredVideo(null)}
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`, "_blank")}
                >
                  {hoveredVideo === video.id.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&loop=1&playlist=${video.id.videoId}`}
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                      allow="autoplay"
                    ></iframe>
                  ) : (
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 w-full bg-opacity-50 text-white text-sm p-2">
                    {video.snippet.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeShortsComponent;
