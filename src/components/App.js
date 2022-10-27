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

  console.log(good);
  console.log(neutral);
  console.log(bad);

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

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countFeedbackPercentage = (amount, total) =>
    Math.round(total ? (amount / total) * 100 : 0);

  const totalFb = countTotalFeedback();
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

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const optionsValue = Object.values(this.state);
//     return optionsValue.reduce((acc, value) => value + acc, 0);
//   };

//   countFeedbackPercentage = (amount, total) =>
//     Math.round(total ? (amount / total) * 100 : 0);

//   render() {
//     const options = Object.keys(this.state);
//     const totalFb = this.countTotalFeedback();
//     const positivePercentage = this.countFeedbackPercentage(
//       this.state.good,
//       totalFb
//     );
//     return (
//       <Box p={5} display="flex" flexDirection="column" as="main">
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.addFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {totalFb > 0 ? (
//             <Statistics
//               {...this.state}
//               total={totalFb}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </Box>
//     );
//   }
// }
