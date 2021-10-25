import React from 'react'
import './style.scss'

interface FeaturedMovieProps {
  item: any
}

const FeaturedMovie: React.ElementType<FeaturedMovieProps> = ({ item }) => {
  const firstAirDate = new Date(item.first_air_date)
  let genres = item.genres.map((genre: any) => {
    return genre.name
  })

  let description = item.overview
  if (description.length > 300) {
    description = `${description.substring(0, 300)}...`
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstAirDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchbutton">
              ▶ Assistir
            </a>
            <a href={`/add/${item.id}`} className="featured--mylistbutton">
              + Minha Lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros: </strong> {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie
