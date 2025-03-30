import type { ButtonProps } from '../atoms/Button';
import Button from '../atoms/Button';
import type { CardProps } from '../molecules/Card';
import Card from '../molecules/Card';

export type CardsRowProps = {
  title: string;
  cards: CardProps[];
  button: ButtonProps;
};

const CardsRow = ({ button, cards, title }: CardsRowProps) => {
  return (
    <div className="cardsRow">
      <h2 className="cardsRow__title">{title}</h2>

      <div className="cardsRow__cards">
        {cards.map((card) => (
          <Card {...card}></Card>
        ))}
      </div>

      <Button {...button}></Button>
    </div>
  );
};

export default CardsRow;
