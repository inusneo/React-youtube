import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: {snippet} }) => (
  <section className={styles.detail}>
    <iframe className={styles.video}
      title={snippet.title}
      type="text/html" 
      width="100%" 
      height="450px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0" 
      allowFullscreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.channelTitle}</h3>
    <pre className={styles.desc}>{snippet.description}</pre>
  </section>
);

export default VideoDetail;