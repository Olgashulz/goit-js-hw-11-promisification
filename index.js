///////////////////////////// - 1/3 - /////////////////////////////


// const logger = time => console.log(`Resolved after ${time}ms`);
// const error = () => console.log(reject);

// const delay = ms => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (ms && typeof ms === 'number' && !isNaN(ms) && ms > 0) {
//                 resolve(ms);
//             };
//             reject('Не верно введенo введено время задержки');
//         }, ms);
//     })
// };

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms


///////////////////////////// - 2/3 - /////////////////////////////


// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//     return new Promise((resolve) => {
//         resolve(allUsers.map(user => user.name === userName ? { ...user, active: !user.active} : user))
//     })
// };

// const logger = updatedUsers => console.table(updatedUsers);

// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);


///////////////////////////// - 3/3 - /////////////////////////////


// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction) => {
   

//     return new Promise((resolve, reject) => {
//         const delay = randomIntegerFromInterval(200, 500);

//     setTimeout(() => {
//         const canProcess = Math.random() > 0.3;

//         if (canProcess) {
//             resolve([transaction.id, delay]);
//         } else {
//             reject(transaction.id);
//         }
//     }, delay);
        
//     })

// };

// const logSuccess = ([id, time]) => {
//     console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// makeTransaction({ id: 70, amount: 150 })
//     .then(logSuccess)
//     .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//     .then(logSuccess)
//     .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//     .then(logSuccess)
//     .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//     .then(logSuccess)
//     .catch(logError);


///////////////////////////////////////////////////////////////////////////////////////
