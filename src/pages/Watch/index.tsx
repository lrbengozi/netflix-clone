import React from 'react'
import { useParams } from 'react-router-dom'

const Watch = () => {
  let { id } = useParams<{ id?: string }>()

  return <div>Watch {id}</div>
}

export default Watch
