import React from 'react';
import Head from 'next/head';

class BasePage extends React.Component {

  render() {
    return (
      <div className='main-container'>
        <Head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        </Head>
        { this.props.children }
        <style jsx>{`
          .main-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 95vw;
            height: 95vh;
            border: 1px solid black;
            border-radius: 5px;
            margin: auto;
          }
        `}</style>
      </div>
    )
  }
}

export default BasePage;