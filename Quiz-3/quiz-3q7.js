 // Question 7 
 const users = [
    { username: `user1`, email: `user1@email.com` },
    { username: `user2`, email: `user2@email.com` } 
];

const getUser = (username) => {
    return new Promise((resolve, reject) => {
        
        // get user data by username from users array
            const user = users.find(user => user.username == username);
            if (user) {
                resolve(user);
            }
            else {
                reject(`User is not define!`);
            }
        });
}

getUser('user1','')
    .then(user => {
    console.log(user);
})
.catch(error => {
console.error(error);
});

getUser('user2')
    .then(user => {
    console.log(user);
})
.catch(error => {
console.error(error);
});

const getUsers = (userNames) => {
// get all users for usernames passed as argument
    const userData = users.filter((user) => userNames.includes(user.username));
    return userData;
};

const main = () => {
    const userNames = [`user1`, `user2`];
    const users = getUsers(userNames);
    console.log(users);
};

main();