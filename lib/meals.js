import sql from 'better-sqlite3';

const db=sql('meals.db');
console.log(getMeals().json());

export  async function getMeals(){
    await new Promise((resolve)=> setTimeout(resolve,5000))  
    db.prepare('SELECT * FROM meals').all();
}