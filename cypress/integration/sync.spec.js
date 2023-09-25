/// <reference types= "cypress"/>

describe('Esperas...', ()=>{

    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
            cy.reload()
    })

    it('Deve aguardar elemento estar disponível', ()=>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })
   
    it('Deve fazer retrys', ()=>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
    })

    it('Uso do find', ()=>{
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)
    })

    it.only('Click retry', ()=>{
        cy.get('#buttonCount').click()
            .should('have.value', '1')
    })

    it.only('Should vs Then',()=>{
        cy.get('#buttonListDOM').then($el=>{
            // console.log($el)
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })
    })
})
