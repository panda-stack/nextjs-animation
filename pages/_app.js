import React from 'react';
import App from 'next/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import '../.semantic/dist/semantic.min.css';

const reducer = (
  state = {
    questions: [],
    user_answers: [], // unanswered questions are considered wrong
    foo: '',
    middleDiv: {}
  },
  action
) => {
  // console.warn('--------- NEW ACTION\n', action);
  switch (action.type) {
    case 'SET_QUESTIONS': {
      return { ...state, questions: action.payload };
    }
    case 'SET_USER_ANSWER': {
      const newAnswers = [...state.user_answers];
      newAnswers[action.payload.index] = action.payload.answer;
      return { ...state, user_answers: newAnswers };
    }
    case 'FOO':
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
const makeStore = (initialState, options) => createStore(reducer, initialState);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // we can dispatch from here too
    // ctx.store.dispatch({ type: 'FOO', payload: 'foo' });
    ctx.store.dispatch({
      type: 'SET_QUESTIONS',
      payload: [
        {
          question: `Must include a bar on the top to show the progress and there must be sections of different color to show progress of what has been done?`,
          choices: [
            {
              answer: 'On the top to show the progress (True)',
              correction: true,
            },
            {
              answer: 'On the top to show the progress.  (True)',
              correction: true,
            },
            {
              answer: 'On the top to show the progress.  (False)',
              correction: false,
            },
            {
              answer: 'On the top to show the progress. (True)',
              correction: true,
            },
          ],
        },
      ],
    });

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <style >{`
          html, #__next {
            height: 100%;
          }

          body {
            min-height: 100%;
            overflow: scroll;
            font-family: "Audiowide", comic sans;
          }
          @font-face {
            font-family: "Audiowide";
            src: url("images/Audiowide-Regular.ttf");
            font-display: swap;
          }

        `}</style>

        <Component {...pageProps} />

      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
