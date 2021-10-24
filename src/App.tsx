import React, { useEffect, useState } from 'react'
import Tmdb, { getHomeListResponse } from './service/Tmdb'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'

import './App.scss'

const App = () => {
  const [movieList, setMovieList] = useState<getHomeListResponse | []>([])
  const [featuredData, setFeaturedData] = useState<{} | null>(null)

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

  return (
    <div className="page">
      {/* Header
      Destaque
      As Listas
      Rodapé */}
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}

export default App
