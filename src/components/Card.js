import React from "react";
function Card({ id, name, email }) {
  return (
    <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
      <img src={`https://robohash.org/13${id}?200x200`} alt="Jane Doe" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
export default Card;
