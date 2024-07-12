import React from 'react';
import './video.css';


const Video = ({ imageSrc, title, description }) => {
  return (
    <div className="video-container">
      <div className="video-wrapper">

        {imageSrc && (
          <img src={imageSrc} alt="Video thumbnail" className="video-thumbnail" />
        )}
        <div className="video-details">
          <h3 className="video-title">{title}</h3>
          <p className="video-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
