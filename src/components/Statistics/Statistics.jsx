import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li className={styles.statisticsListItem}>Good: {good}</li>
        <li className={styles.statisticsListItem}>Neutral: {neutral}</li>
        <li className={styles.statisticsListItem}>Bad: {bad}</li>
        <li className={styles.statisticsListItem}>
          Total: {countTotalFeedback}
        </li>
        <li className={styles.statisticsListItem}>
          Positive feedback: {countPositiveFeedbackPercentage}%
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
