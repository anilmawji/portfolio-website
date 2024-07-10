import style from './Featured.module.css'
import PostCard from '../PostCard'

const Featured = () => {
  return (
    <>
      <div className={style.title}>
        Featured Posts
      </div>
      <div className={style.posts}>
        <PostCard title="Template Post" src="" />
        <PostCard title="Template Post" src="" />
        <PostCard title="Template Post" src="" />
        <PostCard title="Template Post" src="" />
      </div>
    </>
  )
}

export default Featured