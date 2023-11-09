import React, { createContext } from 'react';

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
    constructor() {
        this.createUser(
            {
                nome : "Felipe Loiola",
                email : "felipe_oliveira74@hotmail.com",
                senha : "teste123",
            }
        );
    }

    users = [];
    cards = [];
    loggedUser = null;

    createUser(dtoUser = new User()) {
        const newUser = new User(dtoUser)
        this.users.push(newUser);
    }

    createCards(dtoCards = new Cards()) {
        const newCard = new Cards(dtoCards)
        this.cards.push(newCard);
    }

    login(email, senha) {
        const foundUser = this.users.find((user) => user.email == email);
        if(foundUser && foundUser.senha == senha) {
            this.loggedUser = foundUser;
            return foundUser;
        }
        return false;
    }
}

export default class ContextManager {
    static instance = ContextManager.instance || new DataContext()
}