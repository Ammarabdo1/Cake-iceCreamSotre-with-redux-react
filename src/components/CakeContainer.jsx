import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import { buyCake } from "../redux/actions";
import { buyIceCream } from "../redux/actions";
import ShowNumberOfCakes from "./ShowNumberOfCakes";
// import {buyCake} from '../redux/actions'

const CakeContainer = (props) => {
  const [number, setNumber] = useState();
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();
  const [successForIceCream, setSuccessForIceCream] = useState();
  const [check, setCheck] = useState();
  const [checkIceCream, setCheckIceCream] = useState();
  const [content, seContent] = useState();
  const [contentButtonIceCream, seContentButtonIceCream] = useState();
  const [contentSuccessBuyCake, setContentSuccessBuyCake] = useState();
  const [contentSuccessBuyIceCream, setContentSuccessBuyIceCream] = useState();
  const [content3, setContent3] = useState();
  const [previousNumber, setPreviousNumber] = useState("");
  const [toggleErrorClass, setToggleErrorClass] = useState();

  const audio1Ref = useRef(null);
  const audio2Ref = useRef(null);

  useEffect(() => {
    if (number == null || number == "") {
      seContent("To buy cake");
      seContentButtonIceCream("To buy iceCream");

      if (props.numOfCakes == 0 && props.numOfIceCreams == 0) {
        setContent3(
          `We don't have any cakes🎂 or any iceCreams🍨`
        );
      } else if (props.numOfCakes != 0 && props.numOfIceCreams == 0) {
        setContent3(
          `We have a ${props.numOfCakes} cake🎂 but we don't have any iceCreams🍨`
        );
      } else if (props.numOfCakes == 0 && props.numOfIceCreams != 0) {
        setContent3(
          `We don't have any cakes🎂 but we have ${props.numOfIceCreams} iceCream🍨`
        );
      } else if (props.numOfCakes == 1 && props.numOfIceCreams == 1) {
        setContent3(
          `We have only one cake🎂 && only one iceCream🍨`
        );
      } else if (props.numOfCakes != 1 && props.numOfIceCreams == 1) {
        setContent3(
          `We have a ${props.numOfCakes} cake🎂 && only one iceCream🍨`
        );
      } else if (props.numOfCakes == 1 && props.numOfIceCreams != 1) {
        setContent3(
          `We have only one cake🎂 && ${props.numOfIceCreams} iceCream🍨`
        );
      } else if (props.numOfCakes <= 10 && props.numOfIceCreams <= 10) {
        setContent3(
          `We have a ${props.numOfCakes} cakes🎂 && ${props.numOfIceCreams} iceCreams🍨`
        );
      } else if (props.numOfCakes <= 10 && props.numOfIceCreams > 10) {
        setContent3(
          `We have a ${props.numOfCakes} cakes🎂 && ${props.numOfIceCreams} iceCream🍨`
        );
      } else if (props.numOfCakes > 10 && props.numOfIceCreams <= 10) {
        setContent3(
          `We have a ${props.numOfCakes} cake🎂 && ${props.numOfIceCreams} iceCreams🍨`
        );
      }else{
        setContent3(
            `We have a ${props.numOfCakes} cake🎂 && ${props.numOfIceCreams} iceCream🍨`
          );
      }

      setCheck(true);
      setCheckIceCream(true);
      setToggleErrorClass(false);
    } else if (number <= 0) {
      seContent("Not valid!");
      seContentButtonIceCream("Not valid!");
      setContent3(`Enter a valid number❗`);
      setCheck(true);
      setCheckIceCream(true);
      setToggleErrorClass(true);
    } else if (number > props.numOfCakes && number > props.numOfIceCreams) {
      seContent("Not valid!");
      seContentButtonIceCream("Not valid!");
      if(props.numOfCakes == 0 && props.numOfIceCreams == 0){
        setContent3(
            `💔Sorry we don't have any cakes && any iceCreams`
        );
      }else{
        setContent3(
            `💔Sorry we have only ${props.numOfCakes} cake && only ${props.numOfIceCreams} iceCream`
        );
      }

      setCheck(true);
      setCheckIceCream(true);
      setToggleErrorClass(false);
    } else if (number <= props.numOfCakes && number > props.numOfIceCreams) {
      seContent("cake is valid");
      seContentButtonIceCream("Not valid!");
      setCheck(false);
      setCheckIceCream(true);
      setContent3(
        `you can by only cake, iceCream not valid we have only ${props.numOfIceCreams} iceCream`
      );
      setToggleErrorClass(false);
    } else if (number > props.numOfCakes && number <= props.numOfIceCreams) {
      seContentButtonIceCream("iceCream is valid");
      seContent("Not valid!");
      setCheck(true);
      setCheckIceCream(false);
      setContent3(
        `you can by only iceCream, cake not valid we have only ${props.numOfCakes} cake`
      );
      setToggleErrorClass(false);
    } else if (number == 1) {
      seContent("Buy only 1 cake");
      seContentButtonIceCream("Buy only 1 iceCream");
      setContent3("");
      setCheck(false);
      setCheckIceCream(false);
      setToggleErrorClass(false);
    } else if (number > 1 && number < 11) {
      seContent(`Buy ${number} cakes`);
      seContentButtonIceCream(`Buy ${number} iceCreams`);
      setContent3("");
      setCheck(false);
      setCheckIceCream(false);
      setToggleErrorClass(false);
    } else if (number > 10) {
      seContent(`Buy ${number} cake`);
      seContentButtonIceCream(`Buy ${number} iceCream`);
      setContent3("");
      setCheck(false);
      setCheckIceCream(false);
      setToggleErrorClass(false);
    } else {
      seContent("Error!");
      seContentButtonIceCream("Error!");
      setContent3(`Enter a number🔎`);
      setCheck(true);
      setCheckIceCream(true);
      setToggleErrorClass(true);
    }
  }, [number, props.numOfCakes, previousNumber, props.numOfIceCreams]);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (audio1Ref.current) audio1Ref.current.play();
    setPreviousNumber(number);
    setNumber("");
    setLoading(true);
    setCheck(true);
    setTimeout(() => {
      if (audio2Ref.current) audio2Ref.current.play();
      setSuccess(true);
      setLoading(false);
      props.buyCake(number);
    }, 3000);
  };
  const handelByIceCream = () => {
    if (audio1Ref.current) audio1Ref.current.play();
    setPreviousNumber(number);
    setNumber("");
    setLoading(true);
    setCheckIceCream(true);
    setTimeout(() => {
      if (audio2Ref.current) audio2Ref.current.play();
      setSuccess(true);
      setSuccessForIceCream(true);
      setLoading(false);
      props.buyIceCream(number);
    }, 3000);
  };
  useEffect(() => {
    if (previousNumber == 1) {
      setContentSuccessBuyCake("only 1 cake");
      setContentSuccessBuyIceCream("only 1 iceCream");
    } else if (previousNumber > 1 && previousNumber <= 10) {
      setContentSuccessBuyCake(`${previousNumber} cakes`);
      setContentSuccessBuyIceCream(`${previousNumber} iceCreams`);
    } else {
      setContentSuccessBuyCake(`${previousNumber} cake`);
      setContentSuccessBuyIceCream(`${previousNumber} iceCream`);
    }
  }, [previousNumber, props.numOfCakes, props.numOfIceCreams]);

  return (
    <div className="cakeContainer">
      <form onSubmit={handelSubmit}>
        <input
          className="input"
          placeholder="Enter the number of items"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className={toggleErrorClass ? "showError2" : "showError"}>
          <span>{content3}</span>
        </div>
        <div>
          <input
            className={check ? "submit" : "submit2"}
            type="submit"
            disabled={check}
            value={content}
          />
          <button
            className={checkIceCream ? "submit" : "submit2"}
            disabled={checkIceCream}
            onClick={handelByIceCream}
          >
            {contentButtonIceCream}
          </button>
        </div>
      </form>

      <div className="loading">
        {loading ? (
          <ClipLoader color="#5bc2bd" loading={loading} size={25} />
        ) : (
          success && (
            <div style={{ color: "green" }}>
              ✅Successful you buy{" "}
              {successForIceCream
                ? contentSuccessBuyIceCream
                : contentSuccessBuyCake}{" "}
              🎉
            </div>
          )
        )}
      </div>

      <ShowNumberOfCakes />
      <audio ref={audio1Ref} src="Audios/Wait.mp3" />
      <audio ref={audio2Ref} src="Audios/success.mp3" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
    numOfIceCreams: state.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
    buyIceCream: (number) => dispatch(buyIceCream(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
