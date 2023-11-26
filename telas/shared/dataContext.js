

export class User {
    nome = ""
    email = ""
    senha = ""
    constructor(dto) {
        this.nome = dto.nome;
        this.email = dto.email;
        this.senha = dto.senha;
    }
}

export class Cards {
    nome = ""
    data = 0
    imagem = ""
    constructor(dto) {
        this.nome = dto.nome;
        this.data = dto.data;
        this.imagem = dto.imagem;
    }
}

export class DataContext {
    loggedUser = null;
    constructor() {
    }


    setUserLoggedId(dto) {
        this.loggedUser = new User(dto)
    }

    logout() {
        this.loggedUser = null;
    }
}

export default class ContextManager {
    static instance = ContextManager.instance || new DataContext()
}