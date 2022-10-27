import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Box } from './Box';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countFeedbackPercentage = (amount, total) =>
    Math.round(total ? (amount / total) * 100 : 0);

  const totalFb = good + neutral + bad;
  const positivePercentage = countFeedbackPercentage(good, totalFb);

  return (
    <Box p={5} display="flex" flexDirection="column" as="main">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={addFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFb > 0 ? (
          <Statistics
            {...{ good, neutral, bad }}
            total={totalFb}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
};
