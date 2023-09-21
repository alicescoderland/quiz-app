import img from "../../assets/image/img.png";
import imgStyle from "./Image.module.css"

function Image() {
  return (
    <section>
      <img className={imgStyle.img} src={img} alt="Bgc of people" />
    </section>
  );
}

export default Image;
