import React from 'react'

export const TodoForm = (props) => (
  <form>
    <input
      type="text"
      onChange={props.handleCurrentItem}
      value={props.currentItem} />
  </form>
)

TodoForm.propTypes = {
  handleCurrentItem: React.PropTypes.func.isRequired,
  currentItem: React.PropTypes.string.isRequired
}
