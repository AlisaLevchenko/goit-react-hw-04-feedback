import s from './Statistics.module.css';

function Statistics(props) {
  const { goodFB, neutralFB, badFB, totalFB, positivPersrntFB } = props;
  return (
    <div>
      <h2 className={s.title}>Statistics</h2>
      <ul className={s.statisticList}>
        <li className={s.statisticItem}>
          <p>Good: {goodFB}</p>
        </li>
        <li className={s.statisticItem}>
          <p>Neutral: {neutralFB}</p>
        </li>
        <li className={s.statisticItem}>
          <p>Bad: {badFB}</p>
        </li>
        <li className={s.statisticItem}>
          <p>Total: {totalFB}</p>
        </li>
        <li className={s.statisticItem}>
          <p>Positive feedback: {Math.round(positivPersrntFB)}%</p>
        </li>
      </ul>
    </div>
  );
}
export default Statistics;
