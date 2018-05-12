import React from 'react';
class VisualSpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='main-control-container background'>
        { this.props.children }
        <style jsx>{`
          .main-control-container {
            display: flex;
            height: 50vh;
            width: 94vw;
          }
          .background {
            background-image: url(${this.props.background});
            background-size: cover;
            background-position: center center;
          }
        `}</style>
      </div>
    )
  }
}

export default VisualSpace;