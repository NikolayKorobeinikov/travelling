import "../css/app.css";
import "../css/pictures.css";

export function Pictures({ bg_img, person, name, date }) {
  return (
    <div className="location">
      <div className="bg__pic">
        <img src={bg_img} alt="image" />
      </div>

      <div className="wrapper">
        <div className="person__pic">
          <img src={person} alt="person" />
        </div>
        <div className="desc">
          <p className="name__desc">{name}</p>
          <p className="date__desc">{date}</p>
        </div>
      </div>
    </div>
  );
}
