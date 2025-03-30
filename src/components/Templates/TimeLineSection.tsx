import type { CardTwoImagesProps } from '../Organisms/CardTwoImages';
import CardTwoImages from '../Organisms/CardTwoImages';
import type { TimeLineProps } from '../Organisms/TimeLine';
import TimeLine from '../Organisms/TimeLine';

type TimeLineSectionProps = {
  timeline: TimeLineProps;
  card: CardTwoImagesProps;
};

const TimeLineSection = ({ card, timeline }: TimeLineSectionProps) => {
  return (
    <div className="TimeLineSection">
      <div className="TimeLineSection__wrapper">
        <TimeLine {...timeline}></TimeLine>
        <CardTwoImages {...card}></CardTwoImages>
      </div>
    </div>
  );
};
export default TimeLineSection;
