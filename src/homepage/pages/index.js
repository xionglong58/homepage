import React, { Component } from 'react';
import axios from 'axios';
import { ListItem, ListWrapper } from '../style';
class List extends Component {
    state = {
        projectInfo: [{}]
    }
    componentDidMount() {
        axios.get("https://www.fastmock.site/mock/aa0d11348baa9f557d321b36fc29d422/homepahe/home/api").then(
            (res) => {
                this.setState({
                    projectInfo: res.data.data
                })
            }
        ).catch((error) => {
            console.log(error)
        })

    }
    render() {
        return (
            <ListWrapper>
                {this.state.projectInfo.map((item) => {
                    return (
                        <ListItem key="item.projectNam">
                            <a href="https://xionglong58.github.io/jianshu/"><h3 className="title">{item.projectName}</h3></a>
                            <p className="desc">{item.projectDesc}</p>
                        </ListItem>)
                })}
            </ListWrapper>

        );
    }
}

export default List;