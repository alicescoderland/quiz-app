import imgStyles from "./Image.module.css"

function Image({img}) {
  return (
    <section className={imgStyles.container}>
      <img className={imgStyles.img} src={img} alt="Logo" />
    </section>
  );
}

export default Image;
