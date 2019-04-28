import React from 'react';
import './Controls.scss';

function Controls(props) {
  return (
      <section className='filter-section'>
        <label className='filter-label'>Filter by Quality</label>
        <div className='filter-btns' aria-label='Filter options'>
          <button type='button' 
                  className={ props.activeFilter === 'Mehhh' ? 'filter-btn mehhh-btn active-btn' : 'filter-btn mehhh-btn'} 
                  onClick={props.handleFilter} 
                  aria-controls='card-area' 
                  aria-pressed='false'>Mehhh
          </button>
          <button type='button' 
                  className={ props.activeFilter === 'Swill' ? 'filter-btn swill-btn active-btn' : 'filter-btn swill-btn'} aria-controls='card-area' 
                  aria-pressed='false' 
                  onClick={props.handleFilter}>Swill
          </button>
          <button type='button' 
                  className={ props.activeFilter === 'Plausible' ? 'filter-btn plausible-btn active-btn' : 'filter-btn plausible-btn'}  aria-controls='card-area' 
                  aria-pressed='false' 
                  onClick={props.handleFilter}>Plausible
          </button>
          <button type='button' 
                  className={ props.activeFilter === 'Genius' ? 'filter-btn genius-btn active-btn' : 'filter-btn genius-btn'}  aria-controls='card-area' 
                  aria-pressed='false' 
                  onClick={props.handleFilter}>Genius
          </button>
          <button type='button' 
                  className={ props.activeFilter === 'Bestest' ? 'filter-btn bestest-btn active-btn' : 'filter-btn bestest-btn'}  aria-controls='card-area' 
                  aria-pressed='false' 
                  onClick={props.handleFilter}>Bestest
          </button>
        </div>
      </section>
  );
}

export default Controls;
