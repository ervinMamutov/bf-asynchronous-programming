const userDate = (createTodo) => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  fetch(url)
    .then((res) => res.json())
    .then((todos) => createTodo(todos))
    .catch((error) => console.error(error));
};

export default userDate;
