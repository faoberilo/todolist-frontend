const Api = {
    apiUrl: 'https://bluetodolistbackend.herokuapp.com/tarefas',
    fetchGetAll: () => fetch(Api.apiUrl),
    fetchGetById: (id) => fetch(`${Api.apiUrl}/${id}`),
    fetchPost: (tarefa) => {
        return fetch(`${Api.apiUrl}/add`, {
          method: 'POST',
          body: JSON.stringify(tarefa),
          headers: new Headers({
            "Content-Type": "application/json"
          })
        })
    },
    fetchPut: (tarefa,id) => {
      return fetch(`${Api.apiUrl}/edit/${id}`, {
        method: 'Put',
        body: JSON.stringify(tarefa),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/delete/${id}`, {
      method: 'DELETE'
    })
  }
}

export default Api;