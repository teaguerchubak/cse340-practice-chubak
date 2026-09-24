// start server with --- pnpm run start OR pnpm run dev
// stop server with --- ctr c

// Import express using ESM syntax
import express from 'express';

// Create an instance of an Express application
const app = express();

const name = process.env.NAME;

// Define a route handler for the root URL ('/')
app.get('/', (req, res) => {
    res.send(`Hello, ${name}!`);
});

// Adding a new route
app.get('/new-route', (req, res) => {
    res.send('This is a new route!');
});

// Define the port number the server will listen on
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});