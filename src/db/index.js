import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("ciudades.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists ciudades (id integer primary key not null, name text not null, feel text not null, weather text not null, image text not null, temp text not null);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertCiudad = (name, feel, weather, image, temp) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "insert into ciudades (name, feel, weather, image, temp) VALUES (?, ?, ?, ?, ?);",
        [name, feel, weather, image, temp],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const fetchCiudad = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM ciudades",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};