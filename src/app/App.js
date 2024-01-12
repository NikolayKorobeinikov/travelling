
import { Content } from "../components/Content";
import { Blog } from "../blog/Blog";
import { Stories } from "../components/Stories";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export function App() {
  return (
    <>
      <div className="bgc__content">
        <Header></Header>
        <Content></Content>
        <Blog text="Want to read more?" new_btn="Visit Blog Archive"></Blog>
      </div>
      <>
        <Stories></Stories>
      </>
      <>
        <Footer></Footer>
      </>
    </>
  );
}
