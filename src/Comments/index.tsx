import React from 'react'
import { comments } from '../data/data'

export const Comments = () => {
  return (
    <div>
      {
        comments.map(comment => (
          <div>
            <h4>{comment.name}</h4>
            <p>{comment.description}</p>
          </div>
        ))
      }
    </div>
  )
}
