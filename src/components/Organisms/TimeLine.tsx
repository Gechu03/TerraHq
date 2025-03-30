import { useEffect, useState } from 'react';

export type TimeLineProps = {
  title: string;
  start: {
    label: string;
    number: number;
  };
  end: {
    label: string;
    number: number;
  };

  percentage: string;
};

const TimeLine = ({ end, percentage, start, title }: TimeLineProps) => {
  const [text, setText] = useState('Example');

  useEffect(() => {
    console.log('hola');
  }, []);
  return (
    <div className="timeline">
      <h2 className="timeline__title">{text}</h2>
      <div className="timeline__container">
        <div className="timeline__container__start">
          <span className="timeline__container__start__label">
            {start.label}
          </span>
          <span className="timeline__container__start__number">
            {start.number}
          </span>
        </div>
        <div
          style={{
            background: `linear-gradient(to right,#189B5C ${percentage}, #0F0F0F ${percentage}  )`,
          }}
          className="timeline__container__line"
        ></div>
        <div
          style={{ left: percentage }}
          className="timeline__container__dotContainer"
        >
          <div>{percentage}</div>
          <div className="timeline__container__dotContainer__dot"></div>
        </div>
        <div className="timeline__container__end">
          <span className="timeline__container__end__label">{end.label}</span>
          <span className="timeline__container__end__number">{end.number}</span>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
