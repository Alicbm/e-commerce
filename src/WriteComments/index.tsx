import React from 'react'

export const WriteComments = () => {
  return (
    <div>
      <h1>Comments</h1>
      <input type="text" placeholder='Name'/>
      <textarea placeholder='Write a comment'></textarea>
      <div>
        <button>Good</button>
        <button>Regular</button>
        <button>Bad</button>
      </div>
      <button>Post a comment</button>
    </div>
  )
}
