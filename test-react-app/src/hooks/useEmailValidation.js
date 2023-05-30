import { useReducer, useState } from "react";
import useInterval from "../hooks/useInterval";

function EmailValidate(Seconds) {
  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const [emailValid, setEmailValid] = useState(false);
  const emailReducer = (state, action) => {
    const isValidEmail = validateEmail(action);
    setEmailValid(isValidEmail);
    return action;
  };

  const [email, setEmail] = useReducer(emailReducer, "");
  const maxSeconds = Seconds;
  const [count, setCount] = useState(maxSeconds);

  useInterval(() => {
    setCount(count - 1);
  }, 1000);
  const retObject = { setEmail, count, email, emailValid, setCount };
  return retObject;
}

export default EmailValidate;
