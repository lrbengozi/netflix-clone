const BASE_URL = 'https://api.themoviedb.org/3'

interface getHomeListResponseItem {
  slug: string
  title: string
  items: any
}

export interface getHomeListResponse extends Array<getHomeListResponseItem> {}

const getFetch = async (endpoint: string) => {
  const config = {
    headers: new Headers({
      Authorization: `Bearer ${process.env.React_App_API_TOKEN}`,
    }),
  }
  const req = await fetch(`${BASE_URL}${endpoint}`, config)

  return await req.json()
}

const Tmdb = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await getFetch(`/discover/tv?with_networks=213&language=pt-br`),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await getFetch(`/trending/all/week?language=pt-br`),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await getFetch(`/movie/top_rated?language=pt-br`),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await getFetch(`/discover/movie?with_genres=28&language=pt-br`),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await getFetch(`/discover/movie?with_genres=35&language=pt-br`),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await getFetch(`/discover/movie?with_genres=27&language=pt-br`),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await getFetch(
          `/discover/movie?with_genres=10749&language=pt-br`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await getFetch(`/discover/movie?with_genres=99&language=pt-br`),
      },
    ]
  },
  getMovieInfo: async (movieId: string, type: string) => {
    let info = {}

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await getFetch(`/movie/${movieId}?language=pt-br`)
          break
        case 'tv':
          info = await getFetch(`/tv/${movieId}?language=pt-br`)
          break
        default:
          break
      }
    }

    return info
  },
}

export default Tmdb
