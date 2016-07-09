/*
 *
 * ControlPanel
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectControlPanel from './selectors';
import styles from './styles.css';
import Slider from 'material-ui/Slider';

import { adjustWidth, adjustHeight } from './actions';

export class ControlPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { width, height } = this.props;
    return (
      <div id="controlPanel">
        <div className={styles.sliderWrapper}>

          <Slider
            className={styles.slider}
            defaultValue={width}
            description={`Width: ${width}`}
            max={1200}
            min={200}
            name="width"
            onChange={this.props.onChangeWidth}
          />
          <Slider
            className={styles.slider}
            defaultValue={height}
            description={`Height: ${height}`}
            max={1200}
            min={200}
            name="height"
            onChange={this.props.onChangeHeight}
          />

        </div>
      </div>
    );
  }
}

const mapStateToProps = selectControlPanel();

function mapDispatchToProps(dispatch) {
  return {
    onChangeWidth: (evt, val) => dispatch(adjustWidth(val)),
    onChangeHeight: (evt, val) => dispatch(adjustHeight(val)),
    dispatch,
  };
}


ControlPanel.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  onChangeWidth: React.PropTypes.func,
  onChangeHeight: React.PropTypes.func,

};
export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
