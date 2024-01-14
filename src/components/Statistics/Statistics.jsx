import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import { List } from './Statistics.styled';
import Notification from '../Notification/Notification';

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
      {total ? (
        <List>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </List>) : (<Notification message="There is no feedback" />
      )}
    </div>

  );

};

export default Statistics;
