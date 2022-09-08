import React, { useCallback, useState } from "react";
import { Icon } from "@iconify/react";
import "./styles.css";
import Timer from "../../components/Timer";

const About = () => {
  //custom hook

  const [isInfo, setisInfo] = useToggle();

  return (
    <>
      <h2>About us</h2>

      <div className="about__wrapper">
        <div className="about__info">
          <div className="about__info__header">
            <h4>1.Use CSS to style a button with accessibility in mind</h4>
            <button onClick={setisInfo} className="btn btn-primary">
              {isInfo ? (
                <Icon icon="bx:chevron-up" />
              ) : (
                <Icon icon="bx:chevron-down" />
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
    </>
  );
};

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};
export default About;
