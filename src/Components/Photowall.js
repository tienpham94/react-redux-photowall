import React from 'react'
import Photo from './Photo'

const Photowall = ({posts, onRemovePhoto}) => (
  <div className='photoGrid'>
    {posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={onRemovePhoto}/> )}
  </div>
)



export default Photowall
