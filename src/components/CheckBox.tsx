import useBoolean from "../hooks/useBoolean";

const CheckBox = () => {
  const { toggle } = useBoolean(false);

  return (
    <input>CheckBox</input>
  )
}

export default CheckBox