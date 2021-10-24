import React from 'react'
import './style.scss'

interface MovieRowProps {
  title: string
  items: any
}

const MovieRow: React.ElementType<MovieRowProps> = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        {items.results.length > 0 &&
          items.results.map((item: any) => (
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.title}
            />
          ))}
      </div>
    </div>
  )
}

export default MovieRow
