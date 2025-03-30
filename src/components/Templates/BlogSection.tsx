import CardsRow, { type CardsRowProps } from '../Organisms/CardsRow';
import type { TwoColumnCardProps } from '../Organisms/TwoColumnsCard';
import TwoColumnsCard from '../Organisms/TwoColumnsCard';
type BlogSectionProps = {
  twoColumnsCard: TwoColumnCardProps;
  cardsRow: CardsRowProps;
};

const BlogSection = ({ twoColumnsCard, cardsRow }: BlogSectionProps) => {
  return (
    <div className="blogSection">
      <div className="blogSection__container">
        <TwoColumnsCard {...twoColumnsCard}></TwoColumnsCard>
        <CardsRow {...cardsRow}> </CardsRow>
      </div>
    </div>
  );
};

export default BlogSection;
