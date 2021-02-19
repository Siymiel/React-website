
const PostSectionItem = ({title, caption, body}) => {
    return (
        <div>
            <h2 className="post-title">{title}</h2>
            <h3 className="post-caption">{caption}</h3>
            <p className="post-body">{body}</p>  
        </div>
    )
}

export default PostSectionItem
