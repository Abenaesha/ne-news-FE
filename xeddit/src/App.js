import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ArticlesList from './components/ArticlesList'
import ArticlePage from './components/pages/ArticlePage';
import TopicsList from './components/pages/TopicsList';
import NewArticle from './components/forms/AddArticle';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router className='Body'>
        <ArticlesList path='/' />
        <ArticlesList path='articles'/>
        <ArticlesList path='/articles/topic/:topic'/>
        <ArticlesList path='/users/:username/articles'/>
        <ArticlePage path='/articles/:article_id/'/>
        <NewArticle path='/AddArticle' />
        <TopicsList path='/topics' />
      </Router>
    </div>
  );
}

export default App;
