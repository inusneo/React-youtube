import React, { useEffect, useState, useCallback } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // selectedCont.classList.add("video_active");
  }
  const search = useCallback(
    query => {
      setSelectedVideo(null);
      youtube
      .search(query)
      .then(videos => setVideos(videos));
  }, [youtube]);

  const lapoem = () => {
    setSelectedVideo(null);
    youtube
    .lapoem()
    .then(videos => setVideos(videos));
  }

  const mostVideo = () => {
    setSelectedVideo(null);
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  }

  const liveVideo = useCallback(
    query => {
      setSelectedVideo(null);
      youtube
      .liveVideo(query)
      .then(videos => setVideos(videos));
  }, [youtube]);

  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} lapoem={lapoem} mostVideo={mostVideo} liveVideo={liveVideo} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={ selectVideo? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;
