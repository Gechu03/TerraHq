import { Fragment } from 'react/jsx-runtime';
import type { ButtonProps } from '../atoms/Button';
import Button from '../atoms/Button';

type HeroProps = {
  title: string;
  backgroundImage: { src: string; alt: string };
  hasDecorators?: boolean;
  desc: string;
  button: ButtonProps;
};

const Hero = ({
  backgroundImage,
  button,
  desc,
  title,
  hasDecorators,
}: HeroProps) => {
  return (
    <section className="hero">
      <img
        className="hero__backgroundImage"
        alt={backgroundImage.alt}
        src={backgroundImage.src}
      ></img>
      {hasDecorators && (
        <Fragment>
          <img
            className="hero__decorator hero__decorator--top"
            src="/img/HeroDecorator.png"
            alt="lines decorator"
          ></img>
          <img
            className="hero__decorator hero__decorator--bottom"
            src="/img/HeroDecorator.png"
            alt="lines decorator"
          ></img>
        </Fragment>
      )}
      <div className="hero__content">
        <h1 className="hero__content__title">{title}</h1>
        <span className="hero__content__desc">{desc}</span>
        <Button {...button}></Button>
      </div>
    </section>
  );
};

export default Hero;
