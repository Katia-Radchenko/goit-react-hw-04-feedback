import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ nameButtons, leaveFeedback }) => {
  const btnElements = nameButtons.map(button => <Button onClick={(() => leaveFeedback(button))}
                                                        key={button}> {button.charAt(0).toUpperCase() + button.slice(1)} </Button>);
  return btnElements;

};

export default FeedbackOptions;
