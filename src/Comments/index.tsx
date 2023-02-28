import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { comments } from '../data/data'
import './Comments.css'

export const Comments = () => {
  return (
    <div className='Comments'>
      {
        comments.map(comment => (
          <div className='Comments-container'>
            <div className='Comments-container__head'>
              <h4>{comment.name}</h4>
              <div>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
              </div>
            </div>
            <p>{comment.description}</p>
          </div>
        ))
      }
    </div>
  )
}
