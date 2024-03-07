import React, { useRef } from "react";

export const Education = () => {
  const ref = useRef(null);

  // const [height, setHeight] = useState(0);

  // useLayoutEffect(() => {
  //   setHeight(ref.current.clientHeight);
  //   document.documentElement.style.setProperty('--heightdiv', `${height}px`);
  // }, [height]);

  return (
    <>
      <div className="about-content" ref={ref}>
        <div className="resume-line">
          <p className="resume-title-edu">Bachelor of Technology</p>
          <p className="resume-location">MPEC, Kanpur</p>
        </div>
        <div className="resume-line">
          <p className="resume-institute">
            Maharana Pratap Engineering College
          </p>
          <p className="resume-year">Jun 2019 - June 2022</p>
        </div>
        <hr className="resume-break" />

        <div className="resume-line">
          <p className="resume-title-edu">Diploma in Information Technology</p>
          <p className="resume-location">Ghaziabad, Uttar Pradesh</p>
        </div>
        <div className="resume-line">
          <p className="resume-institute">
            Seth Jaiprakash Polytechnic College
          </p>
          <p className="resume-year">July 2016 - June 2019</p>
        </div>
        <hr className="resume-break" />
      </div>
    </>
  );
};
