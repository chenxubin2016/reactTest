import React from 'react';
import ReactDOM from 'react-dom';
import './less/style.less';
// import App from './App';
import Header from './components/header/header'
import registerServiceWorker from './registerServiceWorker';
const headerConfig={
  isLeft:{
    isShow:true
  },
  title:{
    text:'首页'
  },
  isRight:{
    isShow:true
  }
}
ReactDOM.render(<Header headerConfig={headerConfig}/>, document.getElementById('root'));
registerServiceWorker();
