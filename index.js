"use strict";
var firebase = require("firebase-admin");
firebase.initializeApp({
    credential: firebase.credential.applicationDefault(),
    databaseURL: process.env.GOOGLE_APPLICATION_DATABASE_URL
});
var db = firebase.database();
module.exports = /** @class */ (function () {
    /** Инициализация базы данных */
    function Database(path) {
        this.ref = db.ref(path);
    }
    /** Существуют ли необходимые данные */
    Database.prototype.checkExists = function (id) {
        return this.ref
            .child(id).get()
            .then(function (snapshot) { return snapshot.exists(); });
    };
    /** Добавление новых данных */
    Database.prototype.add = function (data) {
        return this.ref.push(data).key;
    };
    /** Получение существующих данных */
    Database.prototype.get = function (id) {
        return this.ref
            .child(id).get()
            .then(function (snapshot) { return snapshot.val(); });
    };
    /** Удаление существующих данных */
    Database.prototype.remove = function (id) {
        return this.ref.child(id).remove();
    };
    /** Обновление существующих данных */
    Database.prototype.update = function (id, data) {
        return this.ref.child(id).update(data);
    };
    /** Получение ссылки на базу данных */
    Database.prototype.getReference = function () {
        return this.ref;
    };
    /** Получение чистых данных */
    Database.prototype.getSnapshot = function (id) {
        return this.ref.child(id).get();
    };
    return Database;
}());
