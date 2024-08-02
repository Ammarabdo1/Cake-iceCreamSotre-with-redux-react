import React from "react";
import { connect } from "react-redux";

const ShowNumberOfCakes = (props) => {
  let cakes = [];
  for (let i = 0; i < props.numOfCakes; i++) {
    cakes.push("🍰");
  }

  let iceCreams = [];
  for (let i = 0; i < props.numOfIceCreams; i++) {
    iceCreams.push("🍦");
  }
  return (
    <>
      <div className="Shelf">
        <div className="cakeShelf">
          {cakes.map((cake) => (
            <span>{cake}</span>
          ))}
        </div>
        <div className="iceCreamShelf">
          {iceCreams.map((iceCream) => (
            <span>{iceCream}</span>
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
    numOfIceCreams: state.numOfIceCreams,
  };
};

export default connect(mapStateToProps)(ShowNumberOfCakes);
