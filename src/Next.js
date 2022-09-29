import { RemoveFromList } from "./Components/RemoveFromList";
import React, { useState } from "react";
import { AnimeList } from "./Components/AnimeList";
// import { AddToList } from "./Components/AddToList";
const Next = () => {
  const [myAnimeList, setMyAnimeList] = useState([]);
  const [animeInfo, setAnimeInfo] = useState();

  const removeFrom = (anime) => {
    const newArray = myAnimeList.filter((myanime) => {
      return myanime.mal_id !== anime.mal_id;
    });
    setMyAnimeList(newArray);
  };

  return (
    <>
      <div className="container">
        <div className="animeInfo">
          {animeInfo && <animeInfo animeInfo={animeInfo} />}
        </div>
        <h2 className="text-heading">My List</h2>
        <div className="row">
          <AnimeList
            animelist={myAnimeList}
            setAnimeInfo={setAnimeInfo}
            animeComponent={RemoveFromList}
            handleList={(anime) => removeFrom(anime)}
          />
        </div>
      </div>
    </>
  );
};
export default Next;
