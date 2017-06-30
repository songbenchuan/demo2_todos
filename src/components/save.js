var key = 'todos'

export default {
  read () {
    return  JSON.parse(localStorage.getItem(key) || '[]')
  },
  save (todos) {
    localStorage.setItem(key, JSON.stringify(todos))
  }
}
