import React from 'react'

export const TodoItem = (props) => (
  <li><input
        type="checkbox"
        checked={props.isComplete}/> {props.name}
  </li>
)

TodoItem.propTypes = {
  isComplete: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired
}
