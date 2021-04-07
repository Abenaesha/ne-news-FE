import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ArticlesList from './components/ArticlesList'
import ArticlePage from './components/ArticlePage';
import TopicsList from './components/TopicsList';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router className='Body'>
        <ArticlesList path='/'/>
        <ArticlesList path='/articles/topic/:topic'/>
        <ArticlePage path='/articles/:article_id'/>
        <ArticlesList path='/users/:username/articles'/>
        <TopicsList path='/topics' />
      </Router>
    </div>
  );
}

export default App;
