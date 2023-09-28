import imgStyle from "./Image.module.css"

function Image({img}) {
  return (
    <section className={imgStyle.container} >
      <img className={imgStyle.img} src={img} alt="Bgc of people" />
    </section>
  );
}

export default Image;
