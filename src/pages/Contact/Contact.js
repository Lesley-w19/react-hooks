import React, { useLayoutEffect, useMemo, useState } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [countt, setCountt] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  //is not synchronously runs the dom and its layout
  useLayoutEffect(() => {
    console.log(counter);
  }, [counter]);

  const incrementt = () => {
    setCountt(countt + 1);
  };

  //return a cast value (large calculations) that doesnt re-calculate
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 === 0;
  }, [count]);

  return (
    <>
      <div>
        <h1>contact page</h1>
        <div>
          <button className="btn btn-warning" onClick={increment}>
            Counter-add
          </button>
          <p>
            Number is : {count} is : <span>{isEven ? "Even" : "Odd"} </span>
          </p>
        </div>
        <div>
          <button className="btn btn-success" onClick={incrementt}>
            Counter-add-2
          </button>
          <p>
            Number is : <span>{countt}</span>
          </p>

          <p>
            Number counter uselayouteffect isis : <span>{counter}</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Contact;
