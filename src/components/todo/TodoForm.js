import React from 'react'

export const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type="text"
      onChange={props.handleCurrentItem}
      value={props.currentItem} />
  </form>
)

TodoForm.propTypes = {
  handleCurrentItem: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  currentItem: React.PropTypes.string.isRequired
}
