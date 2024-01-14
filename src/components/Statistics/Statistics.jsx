import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import { List } from './Statistics.styled';

const Statistics = ({
                      good,
                      neutral,
                      bad,
                      totalFeedbackCount,
                      positiveFeedbackCount,
                    }) => {

  const total = totalFeedbackCount();
  const positivePercentage = positiveFeedbackCount();
  return (
    <div>
      <List>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </List>
    </div>

  );

};

export default Statistics;
