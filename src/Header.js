import React from 'react';
import './Header.scss';

function Header(props) {
  return (
    <header className='header-bar'>
      <h1>ideabox<span>triples</span></h1>
      <div aria-label='Search ideas' className='search-box'>
        <input type='search ' className='search-input' placeholder='Search' aria-hidden='false' onChange={props.handleSearch}/>
        <button type='button' aria-label='Search button' className='search-btn'><i className='fas fa-search fa-lg'></i><i className='fa fa-minus-circle' aria-hidden='true'></i></button>
      </div>
    </header>
  );
}

export default Header;
