import express from 'express';
import mysql from 'mysql';

const router = express.Router();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sophie',
  database: 'roadtrip',
});

router.get('/cities', (req, res) => {
  connection.query('SELECT * FROM city', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

router.get('/cities/visited', (req, res) => {
  connection.query('SELECT * FROM city WHERE visited=true', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

router.get('/cities/to-visit', (req, res) => {
  connection.query('SELECT * FROM city WHERE visited=false', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});


router.get('/travelers', (req, res) => {
  connection.query('SELECT * FROM traveler', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

router.get('/travelers/sort/:sort', (req, res) => {
  connection.query(`SELECT * FROM traveler ORDER BY ${req.params.sort} ASC`, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

router.get('/travelers/sort/:sort/desc', (req, res) => {
  connection.query(`SELECT * FROM traveler ORDER BY ${req.params.sort} DESC`, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});


router.get('/films', (req, res) => {
  connection.query('SELECT * FROM film', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

router.get('/films/sort/:sort', (req, res) => {
  connection.query(`SELECT * FROM film ORDER BY ${req.params.sort} ASC`, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

router.get('/films/sort/:sort/desc', (req, res) => {
  connection.query(`SELECT * FROM film ORDER BY ${req.params.sort} DESC`, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

router.post('/add', (req, res) => {
  connection.query('INSERT INTO movies SET ?', req.body, (error, results) => {
    if (error) throw error;
    res.send(`${results.insertId}`);
  });
});

router.get('/questions', (req, res) => {
  connection.query('SELECT * FROM question', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});


export default router;
