import React from 'react'
import { useParams } from 'react-router'

const categorynews = () => {
  const {id} = useParams();
  return (
    <div>categorynews - {id}</div>
  )
}

export default categorynews