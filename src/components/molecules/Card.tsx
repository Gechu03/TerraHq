import Pill from '../atoms/Pill';

export type CardProps = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  desc: string;
  pill: string;
};

const Card = ({ desc, image, title, pill }: CardProps) => {
  return (
    <div className="card">
      <div className="card__imageContainer">
        <Pill variant="primary" label={pill}></Pill>
        <img
          className="card__imageContainer__image"
          src={image.src}
          alt={image.alt}
        ></img>
      </div>
      <h3 className="card__title">{title}</h3>
      <span className="card__desc">{desc}</span>
    </div>
  );
};

export default Card;
