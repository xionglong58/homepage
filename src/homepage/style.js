import styled from "styled-components";
import headerPic from '../static/black.jpg';

export const HeaderWrapper = styled.div`
position: relative;
height:500px;
background:url(${headerPic});
overflow:hidden;
`

export const HeaderItem = styled.div`
position:relative;
width:50%;
height:100%;
color:white;
div{
    position:absolute;  
}
.author{
    left:10%;
    top:35%;
    font-size:30px;
}
.role{
    left:10%;
    top:50%;
    font-size:25px;
}
.contract{
    left:10%;
    top:65%; 
    a:link,a:visited,a:hover,a:active{
        color:white;
        text-decoration:none;
    }
    span{
        font-size:30px;
        margin-right:15px;
    }
}
`;
export const ListWrapper = styled.div`
padding:0 50px;
`;

export const ListItem = styled.div`
a:link,a:visited,a:hover,a:active{
    color:white;
    text-decoration:none;
}
position:relative;
padding:40px 50px;
.title{
    font-size:30px;
    line-height:60px;
    color:#222;
}
.desc{
    line-height:30px;
    font-size:20px;
    color:#000;
}
/* background-color:red; */
`


