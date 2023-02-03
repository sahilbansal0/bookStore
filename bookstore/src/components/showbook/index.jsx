import React from 'react';
import { Wrapper } from './styles';

const ShowBook = ({bookResponse}) => {
  return (
    <Wrapper>
      <div className='bookImg'>
      <img src={bookResponse?.volumeInfo?.imageLinks?.thumbnail} />
      </div>
      <div className='title'>{bookResponse?.volumeInfo?.title}</div>
      <div className='author'>{bookResponse?.volumeInfo?.authors}</div>
    </Wrapper>
  );
}

export default ShowBook;
