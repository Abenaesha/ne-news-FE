import './App.css'
import {Router} from '@reach/router'
import Title from './components/Title'
import Navbar from './components/Navbar'
import ArticlesList from './components/pages/ArticlesList'
import ArticlePage from './components/pages/ArticlePage'
import TopicsList from './components/pages/TopicsList'
import NewArticle from './components/forms/AddArticle'
import {UserProvider} from './components/UserContext'
import {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import {theme1, theme2, theme3, theme4} from './styles/themes'

function App() {
	const [showNav, setShowNav] = useState(false)
	const [updateNav, setUpdateNav] = useState(false)
	const [theme, setTheme] = useState(
		localStorage.getItem('rhedditTheme') || 'theme1'
	)

	const toggleNav = () => {
		setShowNav((prev) => !prev)
	}

	const themeObj = {
		theme1: theme1,
		theme2: theme2,
		theme3: theme3,
		theme4: theme4,
	}
	return (
		<UserProvider>
			<ThemeProvider theme={themeObj[theme]}>
				<GlobalStyle />
				<div className='App'>
					<Title handleToggle={toggleNav} />
					<Navbar
						showNav={showNav}
						toggleNav={toggleNav}
						setTheme={setTheme}
						updateNav={updateNav}
					/>
					<main>
						<Router>
							<ArticlesList path='/' />
							<ArticlesList path='articles' />
							<ArticlesList path='/articles/topic/:topic' />
							<ArticlesList path='/users/:username/articles' />
							<ArticlePage path='/articles/:article_id/' />
							<NewArticle path='/AddArticle' />
							<TopicsList path="/topics" setUpdateNav={setUpdateNav} />
						</Router>
					</main>
				</div>
			</ThemeProvider>
		</UserProvider>
	)
}

export default App
