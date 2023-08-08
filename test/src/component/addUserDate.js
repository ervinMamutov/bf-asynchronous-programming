const addUserDate = (dom, todo) => {
  const title = document.createElement('h4');
  const body = document.createElement('p');
  const id = document.createElement('p');

  const container = dom.container;

  title.innerText = todo.title;
  body.innerText = todo.body;

  container.append(body, title);

  return container;
};

export default addUserDate;
