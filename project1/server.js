const app = require('./app')
const PORT = 8084;

// server listening
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})