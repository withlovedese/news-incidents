import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import NewsList from './components/NewsList';
import NewIncident from './components/NewIncident';
import Footer from './components/Footer';

function App() {

  const [news, setNews ] = useState([])

  //fetch news
  const fetchNews = async () => {
    const res = await fetch('https://news-incidents.herokuapp.com/news')
    const data = await res.json()
    return data 
  }

  useEffect(() => {
    const getNews = async () => {
      const newsFromServer = await fetchNews()
      setNews(newsFromServer)
    }
    getNews()
  }, [])


  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={
            <>
              {news.length > 0 ? (
                <NewsList news={news}></NewsList>
              ) : (
                'There is no news'
              )}
            </>
          }/>
          <Route path='/addIncident' element={<NewIncident news={news} setNews={setNews}/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}


export default App;
