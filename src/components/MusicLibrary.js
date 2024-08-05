// components/MusicLibrary.js
import React, { useState, useEffect } from 'react';

function MusicLibrary() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // API에서 트랙 정보를 가져옵니다
    // setTracks(가져온트랙들);
  }, []);

  return (
    <div className="music-library">
      <h2>음악 라이브러리</h2>
      <input type="text" placeholder="트랙 검색..." />
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            {track.title} - {track.artist}
            <button>이 트랙 사용하기</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MusicLibrary;