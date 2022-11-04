import React, { memo } from 'react';
import styles from './video_item.module.css'

const VideoItem = memo(
  ({ video, video : {snippet}, onVideoClick, display, channels }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
      <li className={`${styles.video} ${displayType}`} onClick={() => onVideoClick(video)} >
        <div className={styles.thumbnail}>
          <img className={styles.thumbnail_img} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
        </div>
        <div className={styles.metadata}>
          {/* <img className={styles.chthumbnail_img} src={channels.statistics.channelThumbnail.url} alt="channel thumbnail" /> */}
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </li>
    );
  }
);

export default VideoItem;
