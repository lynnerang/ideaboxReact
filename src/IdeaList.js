import React from 'react';
import './IdeaList.scss';
import Idea from './Idea';

function IdeaList(props) {
    return (
      <section className='card-area' 
               aria-live='polite'>
        {
          props.cardList.map(card => {
            return <Idea title={card.title}
                         body={card.body}
                         quality={card.quality}
                         key={card.id}
                         id={card.id}
                         qualityText={props.qualityText}
                         handleListUpdate={props.handleListUpdate}
                         handleTextUpdate={props.handleTextUpdate}
                         handleQualityUpdate={props.handleQualityUpdate}
                   />
          })
        }
      </section>
    );

}

export default IdeaList;
