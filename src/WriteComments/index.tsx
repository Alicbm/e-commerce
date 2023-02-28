import React from 'react'
import './WriteComments.css'

export const WriteComments = () => {
  return (
    <div className='WriteComments'>
      <h1 className='WriteComments-title'>Comments</h1>
      <input 
        className='WriteComments-input'
        type="text" 
        placeholder='Name'
      />
      <textarea 
        className='WriteComments-textarea'
        placeholder='Write a comment'
      ></textarea>
      <div className='WriteComments-options'>
        <button className='WriteComments-good'>Good</button>
        <button className='WriteComments-regular'>Regular</button>
        <button className='WriteComments-bad'>Bad</button>
      </div>
      <button className='WriteComments-post'>
        Post a comment
      </button>
    </div>
  )
}
