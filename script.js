// Задание 1
name = 'Джон';
admin = name;

alert(admin);

// Задание 2
contry = prompt('В каком городе вы живете?');
contryAge = prompt('В каком году был основан город?');
contryPopulation = prompt('Сколько людей живет в городе?');

alert(`Городу ${contry} исполнилось ${2025 - contryAge} лет с момента его образования. ${contryPopulation} человек.`);

// Задание 3
R = prompt('Введите радиус окружности');
S = Math.PI * R * R;
alert(`Площадь окружности равна ${S}`);

// Задание 4
a = prompt('Введите первое число');
b = prompt('Введите второе число');

alert(`Сумма чисел равна ${Number(a) + Number(b)} `);
alert(`Разность чисел равна ${Number(a) - Number(b)}`);
alert(`Частное чисел равна ${Number(a) / Number(b)}`);
alert(`Произведение чисел равна ${Number(a) * Number(b)}`);
