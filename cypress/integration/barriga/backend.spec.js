/// <reference types= "cypress"/>

describe('Should test at a backend level', () => {
    before(() => {

    })

    it('Should create an account', () => {
        cy.request({
            method: 'POST',
            url: 'https://seubarriga.wcaquino.me/logar',
            body:{
                email: 'isa@santos.com',
                senha: 'isalinda14'
            }
        }).then(res => console.log(res))
    })
})