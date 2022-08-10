import s from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;
  return (
    <ul className={s.buttons}>
      {options.map(({ title, feedName }) => {
        return (
          <li key={nanoid()}>
            <button
              className={s[`${title}`]}
              type="button"
              onClick={() => onLeaveFeedback(feedName)}
            >
              {title}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default FeedbackOptions;
