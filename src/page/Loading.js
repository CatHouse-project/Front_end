import React from "react";
import loading_heart from '../images/loading_heart.png';
import "../style/Loading.css"

export const Loading = () => {
  return (
    <div className="matching-loading">
      <div className="overlap-group">
        <div className="overlap">
          <p className="text-wrapper">
            김감자님의 당번을 토대로 홈메이트를 매칭하고 있어요...
          </p>
        </div>

        <div className="div">CatHouse</div>

        <img
          className="element"
          alt="Element"
          src={loading_heart}
        />

        <div className="navbar">
          <div className="text-wrapper-2">HOME</div>
          <div className="text-wrapper-3">LOGOUT</div>
          <div className="text-wrapper-4">MY PAGE</div>
          <div className="text-wrapper-5">MENU</div>
        </div>
      </div>
    </div>
  );
};