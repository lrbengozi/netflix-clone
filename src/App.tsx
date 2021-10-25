import React, { useEffect, useState } from 'react'
import Tmdb, { getHomeListResponse } from './service/Tmdb'

import LinkedIn from '@material-ui/icons/LinkedIn'

import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'

import './App.scss'

const App = () => {
  const [movieList, setMovieList] = useState<getHomeListResponse | []>([])
  const [featuredData, setFeaturedData] = useState<{} | null>(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList()

      setMovieList(list)

      const originals = list.filter((i) => i.slug === 'originals')
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      )
      const chosen = originals[0].items.results[randomChosen]
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')

      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListenner = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListenner)

    return () => {
      window.removeEventListener('scroll', scrollListenner)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Página desenvolvida por{' '}
        <a href="https://www.linkedin.com/in/lrbengozi/" target="blank">
          Luiz Rogério Bengozi
        </a>{' '}
        para portifólio de projetos. <br />
        Direitos de imagem para a Netflix <br />
        Dados pegos no site Themoviedb.org <br />
        <a href="https://www.linkedin.com/in/lrbengozi/" target="blank">
          <LinkedIn style={{ fontSize: 35 }} />
        </a>
      </footer>
    </div>
  )
}

export default App
