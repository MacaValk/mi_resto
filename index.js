
const Sequelize = require('sequelize');
const Umzug = require("umzug")
const server = require("./app.js")

// Configuración de Sequelize - cargar configuración desde config.json
const env = process.env.NODE_ENV || 'development';
const config = require('./database/config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Inicializar Sequelize-CLI y aplicar migraciones
const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: sequelize
  },
  migrations: {
    params: [
      sequelize.getQueryInterface(),
      Sequelize
    ],
    path: './database/migrations', // Ruta a tus migraciones
    pattern: /\.js$/
  }
});

async function applyMigrations() {
  await umzug.up();
  console.log('Migraciones aplicadas con éxito.');
}

// Aplicar migraciones y luego iniciar el servidor
applyMigrations().then(() => {
  server.listen(3000, () => {
    console.log('Servidor Express en el puerto 3000');
  });
});


module.exports = sequelize; 