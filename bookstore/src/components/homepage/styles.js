import styled from "styled-components";

export const StyledWrapper=styled.div`
width: 100%;
.bookList{
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: start;
 gap: 20px;
 width: 90%;
}
.booksContainer{
 width: 100%;
 display: flex;
 justify-content: center;
 padding-top: 30px;
}
.noList{
 margin: auto;
 color: brown;
}
`