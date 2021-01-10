# Vi Datebase

Этот модуль в основном представляет собой класс, который предоставляет общие механизмы для взаимодействия с [Firebase](https://firebase.google.com/).

## Переменные окружения

```env
GOOGLE_APPLICATION_DATABASE_URL=<Link to your database>
GOOGLE_APPLICATION_CREDENTIALS=<Path to the JSON file containing the service account key>
```

> Эти переменные можно установить при помощи консоли или [dotenv](https://www.npmjs.com/package/dotenv)

### Linux or MacOS

```bash
export GOOGLE_APPLICATION_DATABASE_URL="https://<DATABASE_NAME>.firebaseio.com"
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

### Windows

```powershell
$env:GOOGLE_APPLICATION_DATABASE_URL="https://<DATABASE_NAME>.firebaseio.com"
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\service-account-file.json"
```

## Пример использования

```javascript
const Database = require("vi-database");
const users = new Database("users"); // Ссылка на https://<YOUR-DATABASE>.firebaseio.com/users

// Добавление пользователя
const id = users.add({
  name: "Vlad",
  age: 25,
});

// Получение данных
users.get(id).then(console.log).catch(console.error);
```
