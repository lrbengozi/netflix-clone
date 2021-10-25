import React, { useState } from 'react'
import './style.scss'

import NavigateNext from '@material-ui/icons/NavigateNext'
import NavigateBefore from '@material-ui/icons/NavigateBefore'

interface MovieRowProps {
  title: string
  items: any
}

const MovieRow: React.ElementType<MovieRowProps> = ({ title, items }) => {
  const [scrollx, setscrollx] = useState(-400)

  const handleLeftArrow = () => {
    let x = scrollx + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }

    setscrollx(x)
  }

  const handleRightArrow = () => {
    let x = scrollx - Math.round(window.innerWidth / 2)
    let listW = items.results.length * 150

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60
    }
    setscrollx(x)
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBefore style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNext style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{ marginLeft: scrollx, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item: any, key: any) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow
