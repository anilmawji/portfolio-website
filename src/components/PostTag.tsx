interface PropTypes {
  text: string,
  color?: string
}

const PostTag = ({ text, color }: PropTypes) => {
  return (
    <div>{text}</div>
  )
}

export default PostTag