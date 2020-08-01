const path = require('path'); 
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, `../.env`)});


const common = {
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  dialect: "mysql"
};


module.exports = {
  development: {
    ...common
  },
  testing: {
   ...common
  },
  production: {
    use_env_variable: "DATABASE_URL",
    ...common
  }
};
