import "../css/stories.css";
import { Pictures } from "../pictures/Pictures";
import mount from "../images/small_mount.png";
import person from "../images/black_man.png";
import sea from "../images/sea.png";
import woman from "../images/woman.png";
import city from "../images/city.png";

export function Stories() {
  return (
    <div className="stories">
      <div className="stories__desc">
        <p className="stories__desc-title">Featured Stories</p>
        <p className="stories__desc-txt">
          Did you read our personal favorites?
        </p>
      </div>

      <div className="our__stories">
        <div className="story__content">
          <Pictures
            bg_img={mount}
            person={person}
            name="Luke Cage"
            date="Oct 11, 2016"
          ></Pictures>
          <div className="story one">
            <p className="font__story">The 10 most beautiful places you should visit in your life</p>
          </div>
        </div>

        <div className="story__content">
          <Pictures
            bg_img={sea}
            person={woman}
            name="Jessica Simpson"
            date="Jun 12, 2016"
          ></Pictures>
          <div className="story two">
            <p className="font__story">We found the most beautiful place for our party november</p>
          </div>
        </div>

        <div className="story__content">
          <Pictures
            bg_img={city}
            person={person}
            name="Luke Cage"
            date="Jun 12, 2016"
          ></Pictures>
          <div className="story three">
            <p className="font__story">Why New York is still our favorite city to visit</p>
          </div>
        </div>
      </div>

      <div className="all__stories">
        <p className="story__txt">Want to read all of our stories?</p>
        <button className="btn__story">Read the full blog</button>
      </div>
    </div>
  );
}
