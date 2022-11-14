import React, { memo } from 'react';
import styles from './video_item.module.css'

const VideoItem = memo(
  ({ video, video : {snippet, statistics, channelInfo }, onVideoClick, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;

    const hitCount = () => {
      const count = statistics.viewCount;
  
      if (count >= 10000) {
        return count.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
      }
      return count;
    };

    // const publishedDate = channelInfo.publishedAt;

    return (
      <li className={`${styles.video} ${displayType}`} onClick={() => onVideoClick(video)} >
        <div className={styles.thumbnail}>
          <img className={styles.thumbnail_img} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
        </div>
        <div className={styles.metadata}>
          <img className={styles.chthumbnail_img} src={channelInfo.thumbnails.medium.url} alt="channel thumbnail" />
          <div className={styles.channel_box}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
            <p>
              <span className={styles.count}>조회수 {hitCount()}회</span>
              {/* <span className={styles.update}>{publishedDate}</span> */}
            </p>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
