import React, { Component } from 'react';
import './App.css';
import SocialCard from './SocialCard/SocialCard';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Awesome new tech!',
        description: 'This is the post description, it\'s full of words.',
        link: '',
        imageSrc: 'http://via.placeholder.com/550x350/FF9E00/FFFFFF?text=Awesome new tech!',
        comments: 0,
        shares: 0,
        hearts: 0,
      },
      {
        id: 2,
        title: 'Shocking new developments',
        description: 'Some truly shocking developments. Dive in to this bizarre case of misfortune!',
        link: '',
        imageSrc: 'http://via.placeholder.com/550x350/AA9EFF/FFFFFF?text=Shocking new developments',
        comments: 25,
        shares: 22,
        hearts: 46,
      },
      {
        id: 3,
        title: 'A picture worth a thousand words',
        description: 'This touching story melted the hearts of users worldwide.',
        link: '',
        imageSrc: 'http://via.placeholder.com/550x350/008000/FFFFFF?text=Awesome new tech!',
        comments: 9,
        shares: 19,
        hearts: 144,
      },
      {
        id: 4,
        title: 'Shocking new developments',
        description: 'Some truly shocking developments. Dive in to this bizarre case of misfortune!',
        link: '',
        imageSrc: 'http://via.placeholder.com/550x350/AA9EFF/FFFFFF?text=Shocking new developments',
        comments: 25,
        shares: 22,
        hearts: 46,
      },
      {
        id: 5,
        title: 'A picture worth a thousand words',
        description: 'This touching story melted the hearts of users worldwide.',
        link: '',
        imageSrc: 'http://via.placeholder.com/550x350/008000/FFFFFF?text=Awesome new tech!',
        comments: 9,
        shares: 19,
        hearts: 144,
      },
      {
        id: 6,
        title: 'Awesome new tech!',
        description: 'This is the post description, it\'s full of words.',
        link: '',
        imageSrc: 'http://via.placeholder.com/550x350/FF9E00/FFFFFF?text=Awesome new tech!',
        comments: 0,
        shares: 0,
        hearts: 0,
      },
    ],
  };

  incrementKeyHandler = (key, index) => {
    const posts = [...this.state.posts];
    posts[index][key]++;

    this.setState({ posts });
  };

  render() {
    const posts = this.state.posts.map((post, index) => {
      return (
        <div className="col-md-6 col-lg-4 mb-3" key={post.id}>
          <SocialCard post={post} incrementKeyHandler={(key) => this.incrementKeyHandler(key, index)}/>
        </div>
      );
    });

    return (
      <div className="container pt-5">
        <div className="row">
          {posts}
        </div>
      </div>
    );
  }
}

export default App;
