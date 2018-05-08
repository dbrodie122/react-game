import React from 'react';

class ControlContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='main-control-container'>
        { this.props.children }
        <style jsx>{`
          .main-control-container {
            display: flex;
            justify-content: space-around;
            height: 40vh;
            width: 94vw;
            border: 1px solid black;
            border-radius: 5px;
          }
        `}</style>
      </div>
    )
  }
}

export default ControlContainer;