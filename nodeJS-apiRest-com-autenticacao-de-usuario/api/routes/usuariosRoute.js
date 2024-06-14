const {  Router  } = require('express');
const UsuarioController = require('../controllers/usuarioController.js');

const router = Router();
  
router
  .post('/usuarios',UsuarioController.cadastrar)
  .get('/usuarios',UsuarioController.listasTodosOsUsuarios)
  .get('/usuarios/id/:id',UsuarioController.listarUsuarioPorId)
  .put('/usuarios/id/:id',UsuarioController.atualizarUsuario)
  .delete('/usuarios/id/:id',UsuarioController.deletarUsuario);

module.exports = router;