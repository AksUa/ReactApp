import React from "react"
const Counter = (props) => {
  return <counter onClick={props.handleClick}>{props.text}</counter>
}
export default Counter
