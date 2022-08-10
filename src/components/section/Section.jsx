import { Component } from 'react';

import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistics from '../statistics/Statistics';
import NotificationMessage from '../notificationMessage/NotificationMessage';
import s from './Section.module.css';

class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedName => {
    this.setState(prevValue => ({ [feedName]: prevValue[feedName] + 1 }));
  };

  handleTotalFB = () => {
    const { good, neutral, bad } = this.state;
    const totalFB = good + neutral + bad;
    return totalFB;
  };
  handlePositiveFBPers = () => {
    if (this.handleTotalFB() === 0) {
      return 0;
    } else {
      const positiveFBPercentage =
        (100 / this.handleTotalFB()) * this.state.good;
      return positiveFBPercentage;
    }
  };

  render() {
    const total = this.handleTotalFB();
    const persentage = this.handlePositiveFBPers();
    const options = [
      { title: 'Good', feedName: 'good' },
      { title: 'Neutral', feedName: 'neutral' },
      { title: 'Bad', feedName: 'bad' },
    ];

    return (
      <section className={s.container}>
        <h1 className={s.title}>Please leave your feedback</h1>
        <div>
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={options}
          />
        </div>

        {total ? (
          <Statistics
            goodFB={this.state.good}
            neutralFB={this.state.neutral}
            badFB={this.state.bad}
            totalFB={total}
            positivPersrntFB={persentage}
          />
        ) : (
          <NotificationMessage title="There is no feedback yet :(" />
        )}
      </section>
    );
  }
}
export default Section;
