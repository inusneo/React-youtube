import React from 'react';
import styles from './video_item.module.css'

const VideoItem = ({video : {snippet}}) => (
  <li className={styles.video}>
    <div className={styles.thumbnail}>
      <img className={styles.thumbnail_img} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
    </div>
    <div className={styles.metadata}>
      <p className={styles.title}>{snippet.title}</p>
      <p className={styles.channel}>{snippet.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
