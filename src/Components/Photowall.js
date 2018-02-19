import React from 'react'
import Photo from './Photo'
import {Link} from 'react-router-dom'

const Photowall = ({posts, onRemovePhoto}) => (
  <div>
    <Link className="addIcon" to='/AddPhoto'></Link>
    <div className='photoGrid'>
      {posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={onRemovePhoto}/> )}
    </div>

  </div>

)



export default Photowall
