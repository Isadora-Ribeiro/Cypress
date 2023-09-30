/// <reference types= "cypress"/>

describe('Dinamic tests', ()=>{
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })


    it('Going back to the past', () => {
        //cy.get('#buttonNow').click()
        //cy.get('#resultado > span').should('contain', '29/09/2023')

        //cy.clock()
       // cy.get('#buttonNow').click()
        //cy.get('#resultado > span').should('contain', '31/12/1969')

        const dt = new Date(2012, 2, 10, 15, 23, 50)
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '10/03/2012')
    })

    it.only('Going to the fute', () =>{
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').should('contain', '1696')
        cy.get('#resultado > span').invoke('text').should('gt', 169640103)

        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 0)
        cy.wait(1000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 1000)


    } )
})
