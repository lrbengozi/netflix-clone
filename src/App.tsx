import React, { useEffect, useState } from 'react'
import Tmdb, { getHomeListResponse } from './service/Tmdb'
import MovieRow from './components/MovieRow'

import './App.scss'

const App = () => {
  const [movieList, setMovieList] = useState<getHomeListResponse | []>([])

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList()

      setMovieList(list)
    }

    loadAll()
  }, [])

  return (
    <div className="page">
      {/* Header
      Destaque
      As Listas
      Rodapé */}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}

export default App
