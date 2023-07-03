import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("ciudades.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
            tx.executeSql(
              "CREATE TABLE IF NOT EXISTS ciudades (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, feel TEXT NOT NULL, weather TEXT NOT NULL, img TEXT NOT NULL, temp TEXT NOT NULL);",
              [],
              () => {
                resolve();
              },
              (_, err) => {
                reject(err);
              }
            );
          },
          (_, err) => {
            reject(err);
          }
        );
      });
      
    return promise;
  };
  



export const insertCiudad = (name, feel, weather, img, temp) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "insert into ciudades (name, feel, weather, img, temp) VALUES (?, ?, ?, ?, ?);",
        [name, feel, weather, img, temp],
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