import React, { useState } from "react";
import { saveShippingAddress } from "./services/shippingService";

const STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED",
};

// Declaring outside component to avoid recreation on each render
const emptyAddress = {
  city: "",
  country: "",
};

export default function Checkout({ cart, emptyCart }) {
  const [address, setAddress] = useState(emptyAddress);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({});

  function handleChange(e) {
    e.persist(); // used when set useSate like function
    setAddress((curAddress) => {
      return { ...curAddress, [e.target.id]: e.target.value };
    });
  }

  let errors = getError(address);
  let isValid = Object.keys(errors).length === 0;

  function handleBlur(event) {
    event.persist();
    setTouched((cur) => {
      return { ...cur, [event.target.id]: true };
    });
  }

  function getError(address) {
    let result = {};
    if (!address.city) result.city = "City is required";
    if (!address.country) result.country = "Country is required";

    return result;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus(STATUS.SUBMITTING);
    if (isValid) {
      try {
        await saveShippingAddress(address);
        emptyCart();
        setStatus(STATUS.COMPLETED);
      } catch (error) {
        setError(error);
      }
    } else setStatus(STATUS.SUBMITTED);
  }
  if (error) throw error;
  if (status === STATUS.COMPLETED) {
    return <h1> Thanks for shopping! </h1>;
  }

  return (
    <>
      <h1>Shipping Info</h1>
      {!isValid && status === STATUS.SUBMITTED && (
        <div role="alert">
          <p>Please following errors</p>
          <ul>
            {Object.keys(errors).map((key) => {
              return <li key={key}> {errors[key]}</li>;
            })}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">City</label>
          <br />
          <input
            id="city"
            type="text"
            value={address.city}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <p role="alert">
            {(touched.city || status === STATUS.SUBMITTED) && errors.city}
          </p>
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <br />
          <select
            id="country"
            value={address.country}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="China">China</option>
            <option value="India">India</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="USA">USA</option>
          </select>
          <p role="alert">
            {(touched.country || status === STATUS.SUBMITTED) && errors.country}
          </p>
        </div>

        <div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Save Shipping Info"
            disabled={status === STATUS.SUBMITTING}
          />
        </div>
      </form>
    </>
  );
}
