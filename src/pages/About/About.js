import React, { useCallback, useReducer, useState } from "react";
import { Icon } from "@iconify/react";
import "./styles.css";
import Timer from "../../components/Timer";

const About = () => {
  //custom hook
  const [isInfo, setisInfo] = useToggle();
  const font = {
    fontSize: "12px",
  };

  // spread the state and override with the new
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };

      case "newInput":
        return { ...state, userInput: action.payload };

      case "changeColor":
        return { ...state, color: !state.color };

      default:
        throw new Error();
    }
  };

  // we pass reducer(currentState, action) and the state.
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    color: false,
    userInput: "Typed something...",
  });

  
  return (
    <>
      <h2>About us</h2>

      <div className="about__wrapper">
        <div className="about__info">
          <div className="about__info__header">
            <h4>1.Use CSS to style a button with accessibility in mind</h4>
            <button
              onClick={setisInfo}
              className="btn btn-primary"
              style={font}
            >
              {isInfo ? (
                <p>
                  Collapse <Icon icon="bx:chevron-up" />
                </p>
              ) : (
                <p>
                  Expand
                  <Icon icon="bx:chevron-down" />
                </p>
              )}
            </button>
          </div>

          {isInfo ? (
            <div className="about__info__body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos
                ipsam voluptatem id! Non, deleniti libero. Vitae numquam odit
                inventore mollitia quae! Ipsum itaque, suscipit saepe sequi
                facere modi, accusantium totam perspiciatis exercitationem ipsa,
                possimus vel animi. Consequatur unde perferendis optio cumque
                tempore blanditiis voluptate, ut debitis voluptates consequuntur
                sed?
              </p>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>

      <div>
        <Timer />
      </div>
      <div
        className="reducer__wrapper"
        style={{ color: state.color ? "hotpink" : "blue" }}
      >
        <div>
          <input
            type="text"
            value={state.userInput}
            onChange={(e) =>
              dispatch({ type: "newInput", payload: e.target.value })
            }
          />
          <p>{state.userInput}</p>
        </div>

        <div>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </button>
          <p>{state.count}</p>

          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </button>
        </div>

        <div>
          <button
            className="btn btn-success"
            onClick={() => dispatch({ type: "changeColor" })}
          >
            Change color
          </button>
        </div>
      </div>
    </>
  );
};

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};
export default About;
