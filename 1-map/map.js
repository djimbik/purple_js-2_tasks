//HW - 1 - Map

const arr = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'},
]

const ids = new Set(arr.map(item => item.id));

const uniqArr = [...ids].map(item => arr.find(man => man.id === item));

console.log(uniqArr);
