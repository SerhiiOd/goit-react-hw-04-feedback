import PropTypes from 'prop-types';
import { BlockTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <section>
      <BlockTitle>{title}</BlockTitle>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Section;
