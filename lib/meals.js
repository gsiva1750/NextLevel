import sql from 'better-sqlite3';

const db=sql('meals.db');
console.log(getMeals());

export  async function getMeals(){
    await new Promise((resolve)=> setTimeout(resolve,5000))  
    return  db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug){
    await new Promise((resolve)=> setTimeout(resolve,5000))
    return db.prepare('SELECT * FROM meal WHERE slug= ?').get(slug);
}