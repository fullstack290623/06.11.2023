console.log('Hello nodejs..');
let sequential_id = 8
const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
    }]

function get() {
    return users;
}
function get_by_id(id) {
    // search and return from the json array the record with the given id
    // if not found return { }

}
function post(user) {
    // insert the new user with the correct id (sequential)
}
function put(id, user) {
    // if id exists then replace all fields with the given user
    // if not -- insert this user (with the correct id)
}
function patch(id, user) {
    // if id exists then update only the fields given in the user
    // if not -- do nothing
}
function delete_by_id(id) {
    // if id exists then rewmove it from the array
}

console.log(get());
console.log(get(4));
post ( {
        "name": "Avi hameleh",
        "username": "avi_ham",
        "email": "avi_ham@gmail.com"})
put (10, {
        "name": "Avi hameleh",
        "username": "avi_ham",
        "email": "avi_ham@gmail.com"})      
patch (10, {
        "name": "Avi cohen",
        "username": "avi_cohen",
        "email": "avi_cohen@gmail.com"})      
console.log(get());
delete_by_id(9)
console.log(get_by_id(9));

