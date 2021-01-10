import * as firebase from "firebase-admin";
import { Reference, DataSnapshot } from '@firebase/database-types';

firebase.initializeApp({
  credential: firebase.credential.applicationDefault(),
  databaseURL: process.env.GOOGLE_APPLICATION_DATABASE_URL
})
const db = firebase.database();

export = class Database {
  private ref: Reference;

  /** Инициализация базы данных */
  constructor(path: string) {
    this.ref = db.ref(path);
  }

  /** Существуют ли необходимые данные */
  public checkExists(id: string): Promise<boolean> {
    return this.ref
        .child(id).get()
        .then(snapshot => snapshot.exists());
  }

  /** Добавление новых данных */
  public add(data: object): string {
    return this.ref.push(data).key;
  }

  /** Получение существующих данных */
  public get(id: string): Promise<object> {
    return this.ref
        .child(id).get()
        .then(snapshot => snapshot.val());
  }

  /** Удаление существующих данных */
  public remove(id: string): Promise<any>{
    return this.ref.child(id).remove();
  }

  /** Обновление существующих данных */
  public update(id: string, data: object): Promise<any> {
    return this.ref.child(id).update(data);
  }

  /** Получение ссылки на базу данных */
  public getReference(): Reference {
    return this.ref;
  }

  /** Получение чистых данных */
  public getSnapshot(id: string): Promise<DataSnapshot> {
    return this.ref.child(id).get();
  }
};