import work from "./images/icon-work.svg";
import play from "./images/icon-play.svg";
import study from "./images/icon-study.svg";
import exercise from "./images/icon-exercise.svg";
import social from "./images/icon-social.svg";
import selfCare from "./images/icon-self-care.svg";

const getSvg = (title) => {
  title = title.split(" ").join("-").toLowerCase();
  console.log(title);
  switch (title) {
    case "work":
      return work;
    case "play":
      return play;
    case "study":
      return study;
    case "exercise":
      return exercise;
    case "social":
      return social;
    case "self-care":
      return selfCare;
    default:
      break;
  }
};

export default getSvg;