import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Provider 컴포넌트를 사용하여 Redux store를 전역으로 사용할 수 있도록 설정
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
