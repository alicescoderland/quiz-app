import img from "../../assets/image/javascript-logo.png";
import imgStyle from "./Image.module.css"

function Image() {
  return (
    <section className={imgStyle.container} >
      <img className={imgStyle.img} src={img} alt="Bgc of people" />
    </section>
  );
}

export default Image;
