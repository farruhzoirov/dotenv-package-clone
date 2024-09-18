const dotenv = require('./dotenv/dotenv');

dotenv.config();


console.log(process.env.SECRET_KEY)