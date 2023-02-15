import React from 'react';
import { Wrapper } from './styles';


const Header = ({ setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  return (
    <Wrapper >

      <div className='title'>Find your book
        <div className='search'>
          <input type="search" onChange={(e) => handleChange(e)} placeholder="Search here......"></input>
        </div>
      </div>


    </Wrapper>
  );
}

export default Header;
