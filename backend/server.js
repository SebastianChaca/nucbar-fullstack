const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./database/connection');
dotenv.config({ path: './config.env' });

//DB
connectDB();
//START SERVER
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
