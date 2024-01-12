import "../css/app.css";
import "../css/blog.css";

export function Blog({ text, new_btn }) {
  return (
    <div className="blog__content">
        <div className="blog">
          <p className="blog__txt">{text}</p>
        </div>
        <div className="btn">
        <button className="blog__btn">{new_btn}</button>
        </div>
    </div>
  );
}
