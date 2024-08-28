const users = [
    {
        name: 'Olga',
        friends: ['Max', 'Alex', 'Nina'],
        balance: 4000,
        skills: ['ambitious', 'creativity'],
    },
    {
        name: 'Max',
        friends: ['Olga', 'Oleg'],
        balance: 5000,
        skills: ['communication', 'research', 'creativity'],
    },
    {
        name: 'Nina',
        friends: ['Olga', 'Oleg', 'Alex', 'Victor'],
        balance: 6000,
        skills: ['communication', 'public speaking'],
    },
];

// 1
const summaryBalance = users.reduce((total, user) => total + user.balance, 0);
console.log(`Сумарно баланс усіх користувачів становить ${summaryBalance}`);

// 2
const whoAreFriendsWithAlex = users.reduce((users, user) => {
    if(user.friends.includes('Alex')) users.push(user.name);
    return users;
}, []);
console.log(`З користувачем Alex дружать користувачі ${whoAreFriendsWithAlex}`);

// 3
const sortByNumberOfFriends = (a, b) => a.friends.length - b.friends.length;
users.sort(sortByNumberOfFriends);
const namesSortedByNumberOfFriends = users.reduce((users, user) => {
    users.push(user.name);
    return users;
}, []);
console.log(`Імена користувачів, відсортовані в залежності від кільості їхніх друзів(у порядку зростання): ${namesSortedByNumberOfFriends}`);

// 4
const allSkills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
}, []);
for(let i = 0; i < allSkills.length; i++){
    for(let j = 1; j < allSkills.length; j++){
        if(allSkills[i] === allSkills[j] && i != j) allSkills.splice(j, 1);
    }
}
console.log(`Усі навички користувачів: ${allSkills.sort()}`);