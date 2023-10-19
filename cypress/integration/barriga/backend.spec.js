/// <reference types= "cypress"/>

describe('Should test at a backend level', () => {
    before(() => {
       
    })

    it('Cadastrar Usuario', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body:{
                nome: 'nome',
                email: 'fulano@126.com.br',
                password: '123456',
                administrador: 'true'
            }
        }).as('response')
            cy.get('@response').then(res =>{
                expect(res.status).to.be.equal(201)
                expect(res.body).to.have.property('message', 'Cadastro realizado com sucesso')
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
                }
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
            })
        })
        // it('Listar um usuário cadastrado', () => {
        //     cy.request({
        //         method: 'GET',
        //         url: 'https://serverest.dev/usuarios?',
        //         body:{}
        //     })
        // })
        // it('Buscar usuário por ID', () => {
        //     cy.request({
        //         method:'GET'
        //     })

        // })
        // it('Excluir usuário', () => {
        //     cy.request({
        //         method: 'DELETE'
        //     })

        // })
        // it('Editar usuário', () => {

       
    
})
        
    