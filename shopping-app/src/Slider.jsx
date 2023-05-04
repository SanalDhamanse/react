import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Slider = ({ products, totalProducts }) => {
  const [isPreBtnDisplay, setIsPreBtnDisplay] = useState(false);
  const [isNextBtnDisplay, setIsNextBtnDisplay] = useState(false);
  const [isResetBtnDisplay, setIsResetBtnDisplay] = useState(false);
  const [index, setIndex] = useState(0);
  const [prod, setProd] = useState({
    title: "",
    description: "",
  });

  function nextBtn() {
    if (index < totalProducts) {
      setIndex(index + 1);
    }
  }

  function preBtn() {
    if (index === 0) {
      setIndex(0);
    }

    if (index <= totalProducts && index !== 0) {
      setIndex(index - 1);
    }
  }

  function resetBtn() {
    setIndex(0);
  }

  useEffect(() => {
    if (totalProducts === 1) {
      setIsNextBtnDisplay(false);
      setIsPreBtnDisplay(false);
      setIsResetBtnDisplay(false);
    }
    if (index < totalProducts-1 && index > 0) {
      setIsNextBtnDisplay(true);
      setIsPreBtnDisplay(true);
      setIsResetBtnDisplay(true);
    }

    if (index === totalProducts - 1 && index !== 0) {
      setIsNextBtnDisplay(false);
      setIsPreBtnDisplay(true);
      setIsResetBtnDisplay(true);
    }

    if (index < totalProducts && index === 0) {
      setIsNextBtnDisplay(true);
      setIsPreBtnDisplay(false);
      setIsResetBtnDisplay(false);
    }

    let prod = {
      title: products[index].name,
      description: products[index].name,
    };
    setProd(prod);
  }, [index]);

  return (
    <div>
      <button
        disabled={!isResetBtnDisplay}
        onClick={(e) => {
          resetBtn();
        }}
      >
        Reset
      </button>

      <button
        disabled={!isPreBtnDisplay}
        onClick={(e) => {
          preBtn();
        }}
      >
        Previous
      </button>
      <button
        disabled={!isNextBtnDisplay}
        onClick={(e) => {
          nextBtn();
        }}
      >
        Next
      </button>
      <div>
        <h2>{prod.title}</h2>
        <p>{prod.description}</p>
      </div>
    </div>
  );
};

export default Slider;
