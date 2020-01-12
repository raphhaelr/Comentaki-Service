import React from 'react'
import NewComment from '../elements/NewComment'
import Comments from '../elements/Comments/Comments'

const CommentsPage = () => {
    return(
        <div>
            <Comments/>
            <NewComment/>
        </div>
    )
}

export default CommentsPage