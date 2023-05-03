const Pool = require('pg').Pool

const pool = new Pool({
    user: 'admin', //change to admin
    host: 'localhost',
    database: 'nero',
    password: 'Letsdoit!', //change to admin12345
    port: 5432,
})


//Test db connection
pool.connect((err, ) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    } else {
        console.log("Database connected!!!");
    }
})

module.exports  = pool;
