import React, { Component } from 'react';
import style from './header.less';
class Header extends Component {
  render () {
    return (
      <div className={style.header}>
        <div className={style.isLeft}><span className='trpfont TRP-jiantou-copy'></span></div>
        <div><span>{this.props.headerConfig.title.text}</span></div>
        <div className={style.isRight}><span className='trpfont TRP-list'></span></div>
      </div>
    );
  }
}

export default Header;