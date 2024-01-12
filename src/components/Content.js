import { Trips } from "../trips/Trips";
import person_pic from "../images/black_man.png";
import "../css/content.css";
import mount from "../images/mount.png";
import map from "../images/map.png";
import woman from "../images/woman.png";
import lake from "../images/lake.png";

export function Content() {
  return (
    <>
      {/* mount */}

      <div className="content">
        <Trips
          bg_img={mount}
          person={person_pic}
          name="Luke Cage"
          date="October 11, 2016"
          title="The 10 most beautiful places you should visit in your life"
          desc="Vestibulum ut placerat nisl. Cras sed purus tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis posuere nisi sit amet neque finibus vestibulum. Vivamus at leo ut turpis posuere molestie. Nullam at turpis nec metus pharetra bibendum. Vivamus id urna et leo blandit consequat."
          btn="Continue Reading →"
        ></Trips>
      </div>

      {/* map */}

      <div className="content">
        <Trips
          bg_img={map}
          person={woman}
          name="Jessica Simpson"
          date="June 12, 2016"
          title="Perfect gear to take with you if you go on a photography trip"
          desc="Vestibulum ut placerat nisl. Cras sed purus tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis posuere nisi sit amet neque finibus vestibulum. Vivamus at leo ut turpis posuere molestie. Nullam at turpis nec metus pharetra bibendum. Vivamus id urna et leo blandit consequat."
          btn="Continue Reading →"
        ></Trips>
      </div>

      {/* lake */}

      <div className="content">
        <Trips
          bg_img={lake}
          person={person_pic}
          name="Luke Cage"
          date="June 12, 2016"
          title="We are looking for another photographer to join our group"
          desc="Vestibulum ut placerat nisl. Cras sed purus tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis posuere nisi sit amet neque finibus vestibulum. Vivamus at leo ut turpis posuere molestie. Nullam at turpis nec metus pharetra bibendum. Vivamus id urna et leo blandit consequat."
          btn="Continue Reading →"
        ></Trips>
      </div>
    </>
  );
}
