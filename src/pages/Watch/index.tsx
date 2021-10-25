import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Tmdb from '../../service/Tmdb'

const Watch = () => {
  const { id, type } = useParams<{ id: string; type: string }>()

  useEffect(() => {
    const loadAll = async () => {
      const teste = await Tmdb.getTrailer(id, type)

      console.log(teste)
    }

    loadAll()
  }, [])

  return (
    <div>
      Watch {id} tye {type} <br />
    </div>
  )
}

export default Watch
