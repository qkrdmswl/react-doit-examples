// 필수 리액트 구동 모듈
import React from 'react';
import ReactDOM from 'react-dom';

// 초기 화면을 구성하는 사용자 코드
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 리액트 엔진이 화면을 출력하는 코드
// id가 root인 엘리먼트에 컴포넌트를 출력
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
