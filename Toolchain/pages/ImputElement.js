import { useEffect, useState } from "react";

const InputElement = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return isLoading ? (
    <div>Loading.... </div>
  ) : (
    <input placeholder="Enter Some Text"></input>
  );
};
export default InputElement;
