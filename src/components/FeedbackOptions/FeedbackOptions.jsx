import PropTypes from 'prop-types';
import { BtnBlock, BtnClick } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnBlock>
      {options.map(option => {
        return (
          <BtnClick
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </BtnClick>
        );
      })}
    </BtnBlock>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
