import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import poster from "../assets/ngc/video poster.jpg";
import AnimationOnView from "./AnimationOnView";
import videoUrl from "../assets/ngc/video.mp4";


interface VideoPlayerProps {}

const VideoSection: React.FC<VideoPlayerProps> = () => {
  return (
    <AnimationOnView>
      <div className="container max-w-6xl mx-auto px-2 mb-24">
        <h1 className="text-ngc_secondary text-3xl lg:text-6xl font-bold text-center mb-3 lg:mb-6">تعرف أكثر على شركة الحبوب الوطنية</h1>
        <div className="video-section relative rounded-lg lg:rounded-3xl overflow-hidden">
          <Player poster={poster}>
            <source src={videoUrl} />
          </Player>
        </div>
      </div>
    </AnimationOnView>
  );
};

export default VideoSection;