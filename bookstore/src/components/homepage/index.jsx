import React, { useEffect, useState } from 'react';
import Header from '../header';
import { getData } from '../services';
import ShowBook from '../showbook';
import { StyledWrapper } from './styles';

const HomePage = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    getData(search, setResponse, setError)
  }, [search]);

 
  return (
    <StyledWrapper>
      <Header setSearch={setSearch} />
      <div className='booksContainer'>
        <div className='bookList'>
          {response?.data?.items?
            response?.data?.items?.map((response) => {
              return response?.volumeInfo?.imageLinks?.thumbnail ?
                <ShowBook bookResponse={response} /> : null
            }):
            <h1 className='noList'>No result found</h1>
          }
        </div>
      </div>
    </StyledWrapper>
  );
}

export default HomePage;
