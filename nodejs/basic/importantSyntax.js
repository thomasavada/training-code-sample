/**
 * Destructuring Assignment
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

const getUser = () => {
  // Mimic the process that we may retrieved the user data from the web somewhere
  const user = {
    id: 1,
    name: "John Doe",
    status: 'active'
  };
  // return the user object
  return user;
};

const {name, status} = getUser(); // You can use DA to extract only needed info
console.log(name, status);

const logInfo = ({name, age = 19}) => { // default argument with age = 19
  console.log(`Hi, I'm ${name}. I'm ${age}`);
};
// With destruction parameter, you can swap the parameters order as you like
console.log(logInfo({age: 19, name: "John Doe"}));

/**
 * Merge two object with spread syntax
 *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
const person = {
  id: 1,
  name: "John Doe",
};

const job = {job: 'NodeJs Developer'};
const mergePerson = {...person, ...job};
console.log(mergePerson);

// You can use this to pick/omit fields from object
const post = {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

const {userId, id, ...postSelected} = post; // post object should contain only title and body
console.log(post);

