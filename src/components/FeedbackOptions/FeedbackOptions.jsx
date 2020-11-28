import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ handleReview }) => {
  return (
    <>
      <button
        type="button"
        name="good"
        className={styles.btn}
        onClick={handleReview}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        className={styles.btn}
        onClick={handleReview}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        className={styles.btn}
        onClick={handleReview}
      >
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleReview: PropTypes.func.isRequired,
};

export default FeedbackOptions;
