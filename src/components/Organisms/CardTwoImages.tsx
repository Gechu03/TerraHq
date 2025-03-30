import Pill from '../atoms/Pill';

export type CardTwoImagesProps = {
  title: string;
  desc: string;
  image1: string;
  image2: string;
  chip: string;
};

const CardTwoImages = ({
  desc,
  image1,
  image2,
  title,
  chip,
}: CardTwoImagesProps) => {
  return (
    <div className="cardTwoImages">
      <div className="cardTwoImages__content">
        <h2 className="cardTwoImages__content__title">{title}</h2>
        <span className="cardTwoImages__content__desc">{desc}</span>
      </div>
      <div className="cardTwoImages__images">
        <div className="cardTwoImages__images__element"></div>
        <div className="cardTwoImages__images__element">
          <img src={image1}></img>
        </div>
        <div className="cardTwoImages__images__element">
          <img src={image2}></img>
        </div>
        <div className="cardTwoImages__images__element">
          <Pill label={chip} variant="primary"></Pill>
        </div>
      </div>
    </div>
  );
};

export default CardTwoImages;
