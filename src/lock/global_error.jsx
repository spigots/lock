import React from 'react';

export default class GlobalError extends React.Component {
  render() {
    return (
      <div className="auth0-global-grobal-error">
        <span className="animated fadeInUp">{this.props.message}</span>
      </div>
    );
  }

  // componentWillAppear(callback) {
  //   console.log("componentWillAppear")
  //   callback();
  // }
  //
  // componentDidAppear() {
  //   console.log("componentDidAppear");
  // }

  componentWillEnter(callback) {
    // console.log("componentWillEnter");
    const node = React.findDOMNode(this);
    var computedStyle = window.getComputedStyle(node, null);
    var height = computedStyle.height;
    var paddingTop = computedStyle.paddingTop;
    var paddingBottom = computedStyle.paddingBottom;
    node.style.height = "0px";
    node.style.paddingTop = "0px";
    node.style.paddingBottom = "0px";
    setTimeout(function() {
      node.style.transition = "all 0.2s";
      node.style.height = height;
      node.style.paddingTop = paddingTop;
      node.style.paddingBottom = paddingBottom;
    }, 17);
    callback();
  }

  // componentDidEnter() {
  //   console.log("componentDidEnter");
  // }

  componentWillLeave(callback) {
    // console.log("componentWillLeave");
    const node = React.findDOMNode(this);
    node.style.transition = "all 0.2s";
    node.style.height = "0px";
    node.style.paddingTop = "0px";
    node.style.paddingBottom = "0px";
    setTimeout(callback, 300);
  }

  // componentDidLeave() {
  //   console.log("componentDidLeave");
  // }
}

GlobalError.propTypes = {
  message: React.PropTypes.string.isRequired
}