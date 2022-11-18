import classNames from 'classnames';
import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(
  ({ onSearch, lapoem, mostVideo, liveVideo }) => {
    const inputRef = useRef();

    const handleSearch = () => {
      const value = inputRef.current.value;
      value && onSearch(value);
      inputRef.current.value = "";
    };

    const handleLive = () => {
      const liveItem = "video";
      liveItem && liveVideo(liveItem);
    };

    const handleMusic = () => {
      const music = "music";
      music && onSearch(music);
    };

    const onClick = () => {
      handleSearch();
    };
    const onKeyPress = (event) => { 
      if (event.key === "Enter") {
        handleSearch();
      }
    };
  
    return (
      <header className={styles.header}>
        <div className={styles.logo} onClick={() => mostVideo()}>
          <img className={styles.img} src="./images/logo.png" alt="logo" />
          <h1 className={styles.title}>Mytube</h1>
        </div>
        <div className={styles.box}>
          <input ref={inputRef} className={styles.search} type="search" placeholder="Type a keywords..." onKeyPress={onKeyPress} />
          <button className={styles.btn} type="submit" onClick={onClick}>
            <img className={styles.ico} src="./images/search.png" alt="search" />
          </button>
        </div>
        <div className={styles.chips}>
          <button className={classNames(styles.chip, styles.is_active)} onClick={() => mostVideo()}>인기순</button>
          <button className={styles.chip} onClick={() => handleLive()}>실시간</button>
          <button className={styles.chip} onClick={() => handleMusic()}>음악</button>
          <button className={styles.chip} onClick={() => lapoem()}>lapoem</button>
        </div>
      </header>
    );
  }
);

export default SearchHeader;