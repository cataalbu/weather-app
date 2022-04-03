import axios from 'axios';

axios
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then((resp) => console.log(resp.data));
