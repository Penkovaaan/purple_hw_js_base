/*
Шифратор пароля

Написать 2 функции
- шифратор пароля - функция принимает пароль, разбивает по символам,
меняет местами какие-то буквы по заданному алгоритму и возвращает строку

- дешифратор пароля - принимает зашифрованный пароль и второй пароль.
Воспроизводит алгоритм назад на зашифрованном пароле и возвращает true
если совпало со вторым паролем, иначе возвращает false

crypto('password');
check('wordpass','password');  true
check('wordpass','pass');  false
*/

const pass = 'HarryPotter'

function crypto(password){
    let data = password.split('');
    if (data.length % 2 === 0){
        const part1 = data.slice(0, (data.length)/2).reverse();
        const part2 = data.slice((data.length)/2, data.length).reverse();
        return res = part1.concat(part2).join('');
    } else {
        const part1 = data.slice(0, (data.length+1)/2).reverse();
        const part2 = data.slice((data.length+1)/2, data.length).reverse();
        return res = part1.concat(part2).join('');
    }  
}
console.log(crypto(pass));

function check (cryptoPass, secondPass){
    if (secondPass === crypto(cryptoPass)){
        return true;
    }
    return false;
}

console.log(check(crypto(pass), 'YouAreAWizardHarry'));