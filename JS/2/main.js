let login = prompt('Кто пришёл?', '');

if (login == 'Админ') {

  let password = prompt('Пароль: ', '');

  if (password == 'Чёрный властелин') {
    alert( 'Добро пожаловать!');
  } else if ( password == null ) {
    alert( 'Вход отменён');
  } else {
    alert( 'Я вас не знаю!' );
  }

} else if ( login == null ) {
  alert( 'Вход отменён');
  
} else {
  alert( 'Я вас не знаю!' );
}
  
