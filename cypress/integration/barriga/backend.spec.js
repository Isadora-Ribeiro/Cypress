/// <reference types= "cypress"/>

import { faker } from '@faker-js/faker'

describe('Should test at a backend level', () => {
    var idP = ""

    before(() => {

    })

    it('Cadastrar Usuario', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body:{
                nome: faker.internet.displayName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                administrador: 'true'
            },
        }).as('response')
        cy.get('@response').then(res =>{
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('message', 'Cadastro realizado com sucesso')
            expect(res.body).to.have.property('_id')
             const id = res.body._id
             idP = id
                cy.log(id)
            
            }) 
         })
           it('Usuário ja cadastrado ', () => {
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/usuarios',
                body:{
                    nome: 'teste',
                    email: 'isa@santos.com.br',
                    password: '123456',
                    administrador: 'true'
                },
                failOnStatusCode: false
            }).as('response')
                cy.get('@response').then(res =>{
                    expect(res.status).to.be.equal(400)
                    expect(res.body).to.have.property('message', 'Este email já está sendo usado')
               })
           })  
         it('Login', () => {
            cy.request({
                method: 'POST',
                url:'https://serverest.dev/login',
                body :{
                email: 'isa@santos.com.br',
                password: "123456"       
                }
            }).as('response')
            cy.get('@response').then(res =>{ 
                expect(res.status).to.be.equal(200)
                expect(res.body).to.have.property('message', 'Login realizado com sucesso')
            })
        })
        it('Listar um usuário cadastrado', () => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/usuarios/'
            }).as('response')
                cy.get('@response').then(res =>{
                expect(res.status).to.be.eq(200)  
            })
        })
        it('Buscar usuário por ID', () => {
            cy.request({
                method:'GET',
                url:'https://serverest.dev/usuarios/' + idP 
            }).as('response')
            cy.get('@response').then(res => {
            expect(res.status).to.be.eq(200)
            })
            console.log(idP)
        })
        it('Excluir usuário', () => {
            cy.request({
                method: 'DELETE',
                url: 'https://serverest.dev/usuarios/delete' + idP
            }).as('response')
            cy.get('@response').then(res =>{
                expect(res.status).to.be.eq(200)
                expect(res.body).to.have.property('message', 'Registro excluído coom sucesso')
            })

        // })
        // it('Editar usuário', () => {
    
})
        
})