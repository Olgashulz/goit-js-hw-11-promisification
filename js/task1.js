const logger = time => console.log(`Resolved after ${time}ms`);
const error = () => console.log(reject);

const delay = ms => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ms && typeof ms === 'number' && !isNaN(ms) && ms > 0) {
                resolve(ms);
            };
            reject('Не верно введенo введено время задержки');
        }, ms);
    })
};

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms