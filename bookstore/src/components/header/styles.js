import styled from "styled-components";

export const Wrapper = styled.div`
margin: 0px;
width: 100%;
background-color: pink;;
padding-bottom: 300px;
.title{
 position: relative;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 font-weight: 700;
 font-size: 70px;
 margin-right: 100px;
}
.title::before{
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 width: 800px;
 height: 450px;
 background-image: url('https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029__480.jpg');
 clip-path: circle(100% at left 150px);

}
 input{
width: 26rem;
height: 3rem;
font-weight: 500;
font-size: large;
outline: none;
padding: 10px;

 }


`