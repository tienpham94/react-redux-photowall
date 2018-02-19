import React from 'react'

const Photo = ({ post, onRemovePhoto }) => (
  <figure className="figure">
    <img className="photo" src={post.imageLink} alt={post.description} />
    <figcaption> <p> {post.description} </p> </figcaption>
    <div>
    <button onClick={() => onRemovePhoto(post)}> Remove </button>
    </div>
  </figure>
)

export default Photo
