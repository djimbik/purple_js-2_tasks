const race = (arr) => {
    return new Promise((resolve, reject) => {
        let isSettled = false;

        arr.forEach(promise => {
            promise
                .then(value => {
                    if (!isSettled) {
                        isSettled = true;
                        resolve(value);
                    }
                })
                .catch(error => {
                    if (!isSettled) {
                        isSettled = true;
                        reject(error);
                    }
                });
        });
    });
};


const promise1 = new Promise(resolve => setTimeout(() => resolve('Первый'), 100));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Второй'), 50));
const promise3 = new Promise((_, reject) => setTimeout(() => reject('Третий'), 200));

race([promise1, promise2, promise3])
    .then(value => console.log(value))
    .catch(e => console.error(e));