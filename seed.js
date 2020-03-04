// Database connection
const { Pool } = require('pg');
const pool = new Pool({
  database: 'csv_db',
  password: 'test'
})

// Import CSV data
const parseCSVToArr = require('./services/parseCsvToArr');
const arrOfRecords = parseCSVToArr('data.csv');

// SQL query to insert CSV data
let sqlQuery = `
  INSERT INTO users(name, location, subject) VALUES
  ${arrOfRecords
    .map(record => `('${record.join("','")}')`)
    .join(',')}
`
pool.query(sqlQuery, () => pool.end());
