import React from "react";

export default function imageCard({ webformatURL, tags }) {
  return (
    <div className="cardImg">
      <img src={webformatURL} alt={tags} />
    </div>
  );
}
