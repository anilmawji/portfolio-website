interface PropTypes {
  label: string,
  color?: string
}

const Tag = ({ label, color }: PropTypes) => {
  return (
    <div>{label}</div>
  )
}

export default Tag