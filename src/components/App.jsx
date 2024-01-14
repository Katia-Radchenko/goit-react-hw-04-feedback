import Statistics from './Statistics/Statistics';
import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Block, Container } from './App.styled';

class App extends Component {
  static  btn = ['good', 'neutral', 'bad'];
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;


  };

  countPositiveFeedbackPercentage = (keyName) => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    return Math.round((this.state.good * 100) / total);
  };

  leaveFeedback = (keyName) => {
    this.setState(prevState => {
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;


    return (
      <Container>
        <Section title="Please leave feedback">
          <Block>
            <FeedbackOptions nameButtons={App.btn} leaveFeedback={this.leaveFeedback} />
          </Block>
        </Section>
        <Section>
          <Statistics good={good}
                      neutral={neutral}
                      bad={bad}
                      totalFeedbackCount={this.countTotalFeedback}
                      positiveFeedbackCount={this.countPositiveFeedbackPercentage}
          />

        </Section>
      </Container>
    );
  }
};

export default App;
