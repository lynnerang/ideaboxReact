import React, {Component} from 'react';
import './IdeaForm.scss';

class IdeaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      validTitle: false,
      validBody: false
    }
  }

  onTitleChange = (e) => {
    const text = e.target.value;
    let valid = text.length === 0 || text.length > 70 ? false : true;
    this.setState({title: text, validTitle: valid});
  }

  onBodyChange = (e) => {
    const text = e.target.value;
    let valid = text.length === 0 || text.length > 120 ? false : true;
    this.setState({body: text, validBody: valid});
  }

  onSave = () => {
    const newCard = {title: this.state.title, body: this.state.body, id: Date.now(), quality: 0};
    this.props.handleListUpdate(newCard, 'save');
    this.checkForMrPB(this.state.title, this.state.body);
    this.setState({title: '', body: '', validTitle: true, validBody: true});
  }

  checkForMrPB = (title, body) => {
    if (title.toLowerCase().includes('poopy', 'butthole') || 
      body.toLowerCase().includes('poopy', 'butthole')) {
      document.querySelector('.pb-animation').classList.add('mr-pb');
    }
  }

  render() {
    const titleCountClass = !this.state.validTitle ? 'char-txt error' : 'char-txt';
    const bodyCountClass = !this.state.validBody ? 'char-txt error' : 'char-txt';
    return (
      <div className='new-idea-area'>
        <section className='form-section'>
          <div className='pb-animation'>
            <img src={require('./images/mrpb.png')} alt='Mr PoopyButthole runs across screen.'/>
          </div>
          <form name='newIdea' className='idea-form'>
            <label htmlFor='new-title'>Title</label>
            <input type='text' 
                   id='new-title' 
                   className='new-title-input' 
                   aria-required='true' 
                   value={this.state.title} 
                   onChange={this.onTitleChange} 
            />
            <p className={titleCountClass} aria-live='polite'>{this.state.title.length} out of 70 characters</p>
            <label htmlFor='new-body'>Body</label>
            <textarea type='text-area' 
                      className='new-body-input' 
                      id='new-body' 
                      aria-required='true'
                      value={this.state.body} 
                      onChange={this.onBodyChange}>
            </textarea> 
            <p className={bodyCountClass} aria-live='polite'>{this.state.body.length} out of 120 characters</p>
            <button type='button' 
                    className='save-btn' 
                    disabled={!this.state.validTitle || !this.state.validBody} aria-controls='idea-form' 
                    onClick={this.onSave}>Save
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default IdeaForm;
