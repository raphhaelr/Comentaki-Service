import React from 'react'
import Time from '../../Time'

export const Comment = ({ comment }) => {
  return (
    <div className='container'>
      <div className="col-12 border rounded-top text-left mb-2">
        <div className="d-flex flex-column p-2">
          <div className="d-flex justify-content-between">
            <span className="font-weight-bold">Por: {comment.user.name}</span>{" "}
            <small className="font-weight-bold">
              <span><Time timestamp={comment.createdAt} /></span>
            </small>
          </div>
          <div className="mb-2 mt-2">
            <p className="font-italic m-2 text-dark">"{comment.content}"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

