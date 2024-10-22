import "./Cover.css";
import { Parallax } from "react-parallax";
import PageBanner from "../../../Home/Home/Shared/Chef-Show/PageBanner.jsx";
const Cover = ({coverImg, title,paragraph}) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={coverImg}
        bgImageAlt="the menu"
        strength={-200}
      >
        <PageBanner
          heading={title}
          sub_heading={paragraph}
        ></PageBanner>
      </Parallax>
    </div>
  );
};

export default Cover;