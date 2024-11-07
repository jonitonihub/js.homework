var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

let reg = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;





arr.forEach(user => {
    if (reg.test(user.email)) {
        console.log(`${user.userName} має допустиму електронну пошту: ${user.email}`);
    } else {
        console.log(`${user.userName} має недопустиму електронну пошту: ${user.email}`);
    }
});
