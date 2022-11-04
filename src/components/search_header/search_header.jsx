import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(
  ({ onSearch }) => {
    const inputRef = useRef();
    const handleSearch = () => {
      const value = inputRef.current.value;
      onSearch(value);
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
        <div className={styles.logo} onClick={onClick}>
          <img className={styles.img} src="./images/logo.png" alt="logo" />
          <h1 className={styles.title}>Mytube</h1>
        </div>
        <input ref={inputRef} className={styles.search} type="search" placeholder="Type a keywords..." onKeyPress={onKeyPress} />
        <button className={styles.btn} type="submit" onClick={onClick}>
          <img className={styles.ico} src="./images/search.png" alt="search" />
        </button>
      </header>
    );
  }
);

export default SearchHeader;