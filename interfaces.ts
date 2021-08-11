interface Usuario {
    nome: string
    email: string
    address?: string
}

function getUser(): Usuario {
    return {
        nome: 'Carla',
        email: 'carla@carla.com'
    }
}

function setUser (usuario: Usuario){
    //....
}