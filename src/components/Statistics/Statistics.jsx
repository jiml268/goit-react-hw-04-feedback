import propTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={css.feedback__List}>
    <li className={css.feedbackList__Item}>Good: {good}</li>
    <li className={css.feedbackList__Item}>Neutral: {neutral}</li>
    <li className={css.feedbackList__Item}>Bad: {bad}</li>
    <li className={css.feedbackList__Item}>Total: {total}</li>
    <li className={css.feedbackList__Item}>
      Positive feedback: {positivePercentage} %
    </li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
