import { useEffect } from "react"
import SingleComment from "./singleComment"

function CommentList({ comments }) {

    return (
        <>

            <div>
                <h3>Commenti:</h3>

                <ul>
                    {comments.map((comment) => (
                        <SingleComment key={comment._id} comment={comment} />
                    ))}

                </ul>
            </div>

        </>
    )
}

export default CommentList