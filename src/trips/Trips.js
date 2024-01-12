import "../css/app.css";
import "../css/trips.css";

export function Trips({ bg_img, person, name, date, title, desc, btn }) {
  return (
    <>
    <div className="content__position">
 {/* background image */}
      <div className="picture">
        <img src={bg_img} alt="image" />
      </div>

      <div className="position">

        {/* person image */}
        <div className="person">
          <div className="person__img">
            <img src={person} alt="person" />
          </div>

        {/* person name and date */}
          <div className="person__desc">
            <p className="person__name">{name}</p>
            <p className="date">{date}</p>
          </div>
        </div>

        {/* title */}
        <div className="description">
          <p>{title}</p>
        </div>
      </div>
    </div>

       

        {/* description */}
      <div className="title__desc">
        <p className="font__desc">{desc}</p>
        <buttton className="style__btn">{btn}</buttton>
      </div>
    </>
  );
}
