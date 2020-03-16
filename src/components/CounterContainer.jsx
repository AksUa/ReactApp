import React from "react"
import Counter from "./Counter"

class CounterContainer extends React.Component {
  state = {
    count: 0
  }
  render() {
    const { count } = this.state

    return <Counter text={`${count}`}></Counter>
  }
}
export default CounterContainer
