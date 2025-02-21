const express = require('express');
const mysql = require('mysql2');
const app = express();

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Middleware pour CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Route principale
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur l\'API!' });
});

// Route pour vérifier le statut
app.get('/api/status', (req, res) => {
    connection.query('SELECT NOW() as time', (error, results) => {
        if (error) {
            return res.status(500).json({
                status: 'error',
                message: 'Erreur de connexion à la base de données',
                error: error.message
            });
        }
        res.json({
            status: 'success',
            message: 'Connexion à la base de données établie',
            time: results[0].time
        });
    });
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
