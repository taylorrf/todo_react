export const addTodo = (list, newItem) => [...list, newItem]

export const findById = (id, list) => list.find( item => item.id === id)

export const toogleTodo = (item) => ({...item, isComplete: !item.isComplete})

export const updateTodo = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id)
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex+1)
  ]
}

export const generateId = () => Math.floor(Math.random() * 100000)
