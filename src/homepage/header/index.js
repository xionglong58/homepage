import React, { PureComponent, Fragment } from 'react';
import { HeaderWrapper, HeaderItem } from '../style';

import List from '../pages/index';
class Header extends PureComponent {

    render() {
        return (
            <Fragment>
                <HeaderWrapper>
                    <HeaderItem>
                        <div className="author">Long</div>
                        <div className="role">Web Developer</div>
                        <div className="contract">
                            <a href="https://twitter.com/xionglong8" target="blank"><span className="iconfont">&#xe600;</span></a>
                            <a href="https://github.com/xionglong58" target="blank"><span className="iconfont">&#xe64a;</span></a>
                            <a href="https://weibo.com/u/2938085574" target="blank"><span className="iconfont">&#xe611;</span></a>
                            <a href="https://juejin.im/user/5c78cc4151882540c9670d43/" target="blank"><span className="iconfont">&#xe601;</span></a>
                        </div>
                        <div className="resume"><span className="iconfont">&#xe686;</span></div>
                    </HeaderItem>
                </HeaderWrapper>
                <List />
            </Fragment>);
    }
}

export default Header;