import Pill from '../atoms/Pill';

export type TwoColumnCardProps = {
  title: string;
  desc: string;
  image: { src: string; alt: string };
  pill: string;
};

const TwoColumnsCard = ({ desc, image, title, pill }: TwoColumnCardProps) => {
  return (
    <div className="twoColumnsCard">
      <div className="twoColumnsCard__content">
        <h2 className="twoColumnsCard__content__title">{title}</h2>
        <span className="twoColumnsCard__content__desc">{desc}</span>
      </div>
      <div className="twoColumnsCard__imageContainer">
        <Pill variant="primary" label={pill}></Pill>
        <img
          className="twoColumnsCard__imageContainer__image"
          src={image.src}
          alt={image.alt}
        />
      </div>
    </div>
  );
};

export default TwoColumnsCard;
