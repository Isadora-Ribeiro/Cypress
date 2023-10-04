/// <reference types= "cypress"/>

describe('Should test at a funcional level', () => {
    before(()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('.input-group > .form-control').type('isa.santos@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('isalinda14')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })

    it('Should creat an count', ()=>{
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Conta teste')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso!')
    })

    it.only('Should update an account', () => {
        cy.get(':nth-child(7) > :nth-child(2) > :nth-child(1) > .far')   
  })
})

