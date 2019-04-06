const descripcion = {
	demand: true,
	alias: 'd',
	desc: 'Descripcion de la tarea por hacer'
}

const completado = {
	demand: true,
	alias: 'c',
	desc: 'Marca como completado o pendiente la tarea'
}

const argv =  require('yargs')
				.command('crear', 'Crear un elemento por hacer', {
					descripcion 
				})
				.command('borrar', 'borra un elemento por hacer', {
					descripcion
				})
				.command('actualizar', 'Actualizar tareas por hacer', {
					descripcion,
					completado 
				})
				.help()
				.argv;

module.exports = {
	argv
}