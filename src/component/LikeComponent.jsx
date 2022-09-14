import React, { useState } from "react";

const LikeComponent = () => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
      <i class="fa-solid fa-heart text-danger"></i>
      <span className="likes-counter">{ ` Like | ${likes}` }</span>
    </button>
  )
}

export default LikeComponent