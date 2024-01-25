import Statistics from './Statistics/Statistics';
import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Block, Container } from './App.styled';

const btn = ['good', 'neutral', 'bad'];
const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });


  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;


  };

  const countPositiveFeedbackPercentage = (keyName) => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    return Math.round((feedback.good * 100) / total);
  };

  const leaveFeedback = (keyName) => {
    setFeedback(prevState => ({
      ...prevState,
      [keyName]: prevState[keyName] + 1,
    }));
  };


  const { good, neutral, bad } = feedback;

  return (
    <Container>
      <Section title="Please leave feedback">
        <Block>
          <FeedbackOptions nameButtons={btn} leaveFeedback={leaveFeedback} />
        </Block>
      </Section>
      <Section>
        <Statistics good={good}
                    neutral={neutral}
                    bad={bad}
                    totalFeedbackCount={countTotalFeedback}
                    positiveFeedbackCount={countPositiveFeedbackPercentage}
        />

      </Section>
    </Container>
  );
};


export default App;
