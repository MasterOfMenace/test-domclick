import React from 'react';
import PropTypes from 'prop-types';
import styles from './widget.css';

const STEP = 1;

class Widget extends React.Component {
  constructor(props) {
    super(props);

    const {start} = this.props;

    this.state = {
      value: start,
      focused: false,
    };

    this.wheelHandler = this.wheelHandler.bind(this);
    this.inputHander = this.inputHander.bind(this);
  }

  prepareValue(value) {
    const {min, max} = this.props;

    let resultValue = value;

    if (value < min) {
      resultValue = min;
    } else if (value > max) {
      resultValue = max;
    }

    return resultValue;
  }

  getButtonClickHandler(sign) {
    const {value} = this.state;
    const isNegative = sign === `minus`;

    return () => {
      const currentValue = this.prepareValue(isNegative ? value - STEP : value + STEP);

      this.setState({
        value: currentValue
      });
    };
  }

  inputHander(evt) {
    const inputValue = evt.target.value;

    const value = this.prepareValue(inputValue === `` ? `` : Number(inputValue));
    this.props.onChange(value);
    this.setState({value});
  }

  wheelHandler(evt) {
    evt.preventDefault();

    const {value} = this.state;

    const currentValue = this.prepareValue(evt.deltaY < 0 ? value - STEP : value + STEP);

    this.setState({
      value: currentValue
    });
  }

  renderButton(sign) {
    const text = sign === `minus` ? `-` : `+`;

    return (
      <button
        className={styles.button}
        onClick={this.getButtonClickHandler(sign)}
      >{text}</button>
    );
  }

  renderInput() {
    const {max, min} = this.props;
    const {value, focused} = this.state;

    return (
      <input
        className={styles.input}
        type="number"
        value={value}
        max={max}
        min={min}
        onChange={this.inputHander}
        onFocus={() => this.setState({focused: true})}
        onBlur={() => this.setState({focused: false})}
        onWheel={focused ? this.wheelHandler : undefined}
      />
    );
  }

  render() {
    return (
      <div className={styles.container}>
        {this.renderButton(`minus`)}
        {this.renderInput()}
        {this.renderButton(`plus`)}
      </div>
    );
  }
}

Widget.propTypes = {
  start: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
};

export default Widget;
