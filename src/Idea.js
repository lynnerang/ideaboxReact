import React, {Component} from 'react';
import './Idea.scss';

class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onUpdateText = e => {
    const text = e.target.textContent;
    const property = e.target.id === 'cardTitle' ? 'title'
    : 'body';
    this.props.handleTextUpdate(property, text, this.props.id);
  }

  onUpvote = () => {
    if (this.props.quality < 4) {
      this.props.handleQualityUpdate(this.props.id, 'upvote');
    }
  }

  onDownvote = () => {
    if (this.props.quality > 0) {
      this.props.handleQualityUpdate(this.props.id);
    } 
  }

  onDelete = () => {
    this.props.handleListUpdate({id: this.props.id});
  }

  render() {
    return (
      <article className='idea-card animated flash'>
        <div className='card-main'>
          <h2 id='cardTitle' 
              onBlur={this.onUpdateText} 
              contentEditable 
              suppressContentEditableWarning={true}>
              {this.props.title}
          </h2>
          <p id='cardBody' 
             onBlur={this.onUpdateText} 
             contentEditable 
             suppressContentEditableWarning={true}>
             {this.props.body}
          </p>
        </div>
        <div className='card-bottom'>
          <div className='card-btns'>
            <img className='btn-image downvote-btn' 
                 role='button' 
                 aria-label='Downvote this idea'
                 aria-controls='quality-txt' 
                 src={require('./images/downvote.svg')} 
                 alt='downvote button icon'
                 onClick={this.onDownvote} 
            />
            <img className='btn-image upvote-btn' 
                 role='button' 
                 aria-label='Upvote this idea' 
                 aria-controls='quality-txt' 
                 src={require('./images/upvote.svg')} 
                 alt='upvote button icon'
                 onClick={this.onUpvote} 
            />
            <h3 className='idea-quality' id='quality-txt'>Quality: {this.props.qualityText[this.props.quality]}</h3>
          </div>
          <div className='delete-btn'>
            <img className='btn-image delete-card-btn' 
                 role='button'
                 aria-label='Delete idea' 
                 aria-controls={this.props.cardId} 
                 src={require('./images/delete.svg')} 
                 alt='delete button icon'
                 onClick={this.onDelete} 
            />
          </div>
        </div>
      </article>
    );
  }
}

export default Idea;
