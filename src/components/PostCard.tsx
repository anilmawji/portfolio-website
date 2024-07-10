import styles from './PostCard.module.css'
import test from '../assets/arch_desktop.png'

interface PropTypes {
  title: string,
  src?: string
}

const PostCard = ({ title, src }: PropTypes) => {
  return (
    <div className={styles.container}>
      <img src={test} />
      <div className={styles.text}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
        </div>
      </div>
    </div>
  )
}

export default PostCard