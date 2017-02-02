import React from 'react'
import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
  const handleToogle = partial(props.handleToogle,props.id)
  return (
    <li><input
          type="checkbox"
          onChange={handleToogle}
          checked={props.isComplete}/> {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  isComplete: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired
}
