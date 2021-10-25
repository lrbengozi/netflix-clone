import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import { CircularProgress } from '@material-ui/core'

import Tmdb from '../../service/Tmdb'

import './style.scss'

const Watch = () => {
  const { id, type } = useParams<{ id: string; type: string }>()
  const [youTubeKey, setYouTubeKey] = useState('')

  useEffect(() => {
    const loadAll = async () => {
      const key = await Tmdb.getTrailer(id, type)

      setYouTubeKey(key)
    }

    loadAll()
  }, [])

  return (
    <div className="youtube">
      {youTubeKey !== '' && (
        <div>
          <YouTube
            className="youtube--player"
            videoId={youTubeKey}
            opts={{
              playerVars: {
                autoplay: 1,
              },
            }}
          />
        </div>
      )}

      {youTubeKey === '' && (
        <div className="loading">
          <CircularProgress size="120px" />
        </div>
      )}
    </div>
  )
}

export default Watch
