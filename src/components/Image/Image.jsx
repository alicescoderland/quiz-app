import imageStyles from "./Image.module.css";

function Image({ img }) {
  return (
    <section className={imageStyles.container}>
      <img src={img} alt="Logo" />
    </section>
  );
}

export default Image;
