import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Text } from './Statistics.styled';

export const Statistics = ({ positivePercentage, ...props }) => {
  return (
    <Box p={2} display="flex" flexDirection="column">
      {Object.keys(props).map(option => (
        <Text key={option}>
          {option}: {props[option]}
        </Text>
      ))}
      <Text>Positive feedback: {positivePercentage}%</Text>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
