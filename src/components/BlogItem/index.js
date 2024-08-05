import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {imageUrl, id, author, avatarUrl, topic, title} = details
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="item-container">
        <img src={imageUrl} alt={topic} className="item-image" />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-info">
            <img src={avatarUrl} alt={author} className="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
