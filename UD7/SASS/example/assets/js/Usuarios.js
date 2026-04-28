export class RegistroUsuarios {
  constructor() {
    this.usuarios = [];
    this.usuarios = [{ id: 1, nombre: "Julio", email: "julio@example.com"}, { id: 2, nombre: "Jose Luis", email: "joseluis@example.com"}]
  }
//Pendiente revisar USUARIOS
  insertarUsuario(usuario) {
    // let usuarioEncontrado = this.usuarios.find((item) => item.dni === usuario.dni);
    let correoEncontrado = this.usuarios.find((item) => item.email === usuario.email);
    // if (usuarioEncontrado) {
    //   throw new Error("Existe un usuario con el mismo DNI");
    // } 
    if (correoEncontrado) {
      throw new Error("Existe un usuario con ese correo"); //Comprueba que no exista correo ya
    } else {
      let id = 0;
      if(this.usuarios.length !== 0) {
        id = this.usuarios[this.usuarios.length-1].id;
      }
      usuario.id = ++id;
      usuario = {id: usuario.id, nombre: usuario.nombre, email: usuario.email}; //Forzamos mantener el order id/nombre/email
      this.usuarios.push(usuario);
    }

    
  }
//Creamos el meotodo borrar
borrarUsuario(usuario) {
  // Primero creamos una neuva lista de usuarios sin tener en cuenta el usuario dado
  const nuevaListaUsuarios = this.usuarios.filter(item => item.id !== usuario.id);
  //Y finalmente lo seteamos a la nueva lista de nuestra instanciacion
  this.usuarios = nuevaListaUsuarios;
}
buscarUsuarioPorId(id) {
  return this.usuarios.find(item => item.id === id) || null;
}

editarUsuario(usuario){
  let correoEncontrado = this.usuarios.find((item) => item.email === usuario.email && item.id !== usuario.id);
  if (correoEncontrado) {
      throw new Error("Existe un usuario con ese correo");
    } else {
      const usuarioExistente=this.buscarUsuarioPorId(usuario.id);
      if (usuarioExistente != null) {
        let posicion=this.usuarios.findIndex((item)=> item.id === usuarioExistente.id);
        this.usuarios[posicion]=usuario;    
      } else {
        throw new Error("Usuario no encontrado");
      }

    }
}


  // usuariosMatriculados() {
  //   const personasMap = this.usuarios.map(((item, index) => {
  //     return {
  //       nombreCompleto: item.nombre + " " + item.apellidos,
  //       edad: item.edad + " " + item.nacimiento,
  //       direccionCompleta: item.direccion + "(" + item.provincia + ")." + item.telefono + " " + item.email,
  //       sexo: item.sexo,
  //       fechaAlta: item.alta,
  //       cursoInscrito: item.curso
  //     }
  //   }));
  //   return personasMap;
  // }

  // usuariosByCursos(curso) {
  //   return this.usuarios.filter((usuario) => {
  //     return usuario.curso === curso;
  //   })
  // }

  // estadisticas() {
  //   // Sacar los cursos existentes
  //   const cursos = [];
  //   this.usuarios.forEach((usuario) => {
  //     if(!cursos.includes(usuario.curso)) {
  //       cursos.push(usuario.curso);
  //     }
  //   });
  //   // Sacar estadísticas
  //   // Esto es pq se pierde contexto del this dentro del callback
  //   let that = this;
  //   const estadisticasMap = cursos.map(function (curso) {
  //     return {
  //       curso: curso,
  //       total: that.usuariosByCursos(curso).length
  //     }
  //   });
  //   return estadisticasMap;
  // } 
  listarUsuarios(){
    return this.usuarios;
  }
 
}
