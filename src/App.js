import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import IdeaForm from './IdeaForm';
import Controls from './Controls';
import IdeaList from './IdeaList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideaCards: [],
      searchTerms: '',
      filter: '',
      showAll: false
    }
  }

  componentDidMount() {
    this.getCards();
  }

  getCards = () => {
    const cards = JSON.parse(localStorage.getItem('idea cards')) || [];
    this.setState({ideaCards: cards});
  }

  handleSearch = e => {
    this.setState({searchTerms: e.target.value});
  }

  handleFilter = e => {
    const filter = e.target.innerText;
    filter === this.state.filter ? this.setState({filter: ''})
    : this.setState({filter: filter});
  }

  handleListUpdate = (card, update) => {
    const cards = JSON.parse(localStorage.getItem('idea cards'));
    update === 'save' ? cards.unshift(card) 
    : cards.splice(cards.map(i => i.id).indexOf(card.id), 1);
    this.updateIdeas(cards);
  }

  handleTextUpdate = (property, text, id) => {
    const cards = JSON.parse(localStorage.getItem('idea cards'));
    const matchIndex = cards.map(i => i.id).indexOf(id);
    cards[matchIndex][property] = text;
    this.updateIdeas(cards);
  }

  handleQualityUpdate = (id, action) => {
    const cards = JSON.parse(localStorage.getItem('idea cards'));
    const matchIndex = cards.map(i => i.id).indexOf(id);
    action === 'upvote' ? cards[matchIndex].quality++ : cards[matchIndex].quality--;
    this.updateIdeas(cards);
  }

  updateIdeas = cards => {
    this.setState({ideaCards: cards});
    localStorage.setItem('idea cards', JSON.stringify(cards));
  }

  onShow = e => {
    this.setState({showAll: !this.state.showAll});
  }

  render() {
    const qualityText = Array.from(document.querySelectorAll('.filter-btn')).map(btn => btn.innerText);

    let btnText = this.state.showAll ? 'Show Less...' : 'Show More...';

    let filteredList = this.state.ideaCards.filter(card => {
      const terms = this.state.searchTerms.toLowerCase();
      return (card.title.toLowerCase().includes(terms) || card.body.toLowerCase().includes(terms)) && qualityText[card.quality].includes(this.state.filter);
    });

    const showBtn = filteredList.length > 10 &&
    <section className='btn-div'>
      <button type='button' 
              className='show-btn' 
              aria-expanded='false' 
              aria-controls='card-area' 
              onClick={this.onShow}>
              {btnText}
      </button>
    </section>;

    if (!this.state.showAll) {
      filteredList = filteredList.slice(0, 10);  
    } 

    return (
      <div className='App'>
        <Header handleSearch={this.handleSearch}/>
        <IdeaForm ideaCards={this.state.ideaCards}
                  handleListUpdate={this.handleListUpdate}
        />
        <Controls handleFilter={this.handleFilter} 
                  activeFilter={this.state.filter}
        />
        <IdeaList cardList={filteredList}
                  qualityText={qualityText}
                  handleListUpdate={this.handleListUpdate}
                  handleTextUpdate={this.handleTextUpdate}
                  handleQualityUpdate={this.handleQualityUpdate}
        />
        {showBtn}
      </div>
    );
  }
}

export default App;
