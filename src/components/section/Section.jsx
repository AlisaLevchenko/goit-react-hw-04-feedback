import { useState } from 'react';

import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistics from '../statistics/Statistics';
import NotificationMessage from '../notificationMessage/NotificationMessage';
import s from './Section.module.css';

export default function Section() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      default:
        return;
    }
  };

  const handleTotalFB = () => {
    const totalFB = good + neutral + bad;
    return totalFB;
  };

  const handlePositiveFBPers = () => {
    if (handleTotalFB() === 0) {
      return 0;
    } else {
      const positiveFBPercentage = (100 / handleTotalFB()) * good;
      return positiveFBPercentage;
    }
  };

  const total = handleTotalFB();
  const persentage = handlePositiveFBPers();
  const options = [
    { title: 'Good', feedName: 'good' },
    { title: 'Neutral', feedName: 'neutral' },
    { title: 'Bad', feedName: 'bad' },
  ];

  return (
    <section className={s.container}>
      <h1 className={s.title}>Please leave your feedback</h1>
      <div>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
      </div>

      {total ? (
        <Statistics
          goodFB={good}
          neutralFB={neutral}
          badFB={bad}
          totalFB={total}
          positivPersrntFB={persentage}
        />
      ) : (
        <NotificationMessage title="There is no feedback yet :(" />
      )}
    </section>
  );
}
