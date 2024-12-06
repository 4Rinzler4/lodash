const _ = require('lodash');

let users = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 30, active: false },
  { id: 3, name: 'Charlie', age: 35, active: true },
  { id: 4, name: 'David', age: 40, active: false }
];

function getActiveUsers(users) {
  return _.filter(users, { active: true });
}

function getSortedUsersByAge(users) {
  return _.sortBy(users, 'age');
}

function getUserNames(users) {
  return _.map(users, 'name');
}

function getUserById(users, id) {
  return _.find(users, { id }) || null;
}

function addUser(users, newUser) {
  if (_.find(users, { id: newUser.id })) {
    throw new Error('User with this ID already exists.');
  }
  return [...users, newUser];
}

function removeUserById(users, id) {
  return _.reject(users, { id });
}

function updateUser(users, updatedUser) {
  const index = _.findIndex(users, { id: updatedUser.id });
  if (index === -1) return users; 
  const updatedUsers = [...users];
  updatedUsers[index] = { ...updatedUsers[index], ...updatedUser };
  return updatedUsers;
}

