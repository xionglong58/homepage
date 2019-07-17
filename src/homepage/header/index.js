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
                        </div>
                    </HeaderItem>
                </HeaderWrapper>
                <List />
            </Fragment>);
    }
}

export default Header;