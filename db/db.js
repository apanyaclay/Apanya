import mysql from 'mysql'

// create mysql Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pos_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
});

process.on('SIGINT', () => {
    console.log('Closing MySQL connection...');
    connection.end((err) => {
        if (err) {
            console.error('Error closing MySQL connection: ' + err.stack);
        } else {
            console.log('MySQL connection closed.');
        }
        process.exit();
    });
});

export default connection;