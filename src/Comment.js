import React from 'react'
import Time from './Time'

export const Comment = ({ comment }) => {    
    return (
        <div>
          <p className='font-weight-bold text-dark'> {comment.content} por: {comment.user.name} em: <Time timestamp={comment.createdAt}/></p>
        </div>
    )
}

