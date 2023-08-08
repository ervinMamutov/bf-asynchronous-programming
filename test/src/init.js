import userDate from './apis/api.js';
import dom from './dom.js';
import addUserDate from './component/addUserDate.js';

const date = userDate((todos) => {
  todos.forEach((todo) => {
    return addUserDate(dom, todo);
  });
});

date(todos);
