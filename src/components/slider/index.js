import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SliderItem from 'components/slider-item';
import Loading from 'components/loading';
import styles from './styles.scss';


const Slider = props => (
  <div className={styles.slideContainer}>
    <Loading isLoading={props.isLoading} />
    <TransitionGroup>
      <CSSTransition timeout={{ appear: 100000, enter: 100000, exit: 100000 }} classNames="pagefade" key={props.joke.id}>
        <SliderItem {...props} />
      </CSSTransition>
    </TransitionGroup>
  </div>
);

Slider.propTypes = {
  joke: PropTypes.shape({
    id: PropTypes.string
  }),
  isLoading: PropTypes.bool
};

export default Slider;
