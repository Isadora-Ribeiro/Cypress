/// <reference types= "cypress"/>

describe('Work with basic elemtens', ()=>{
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
            cy.reload()
    })

    it('Using jquey selector', ()=>{
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input').click()
        cy.get("[onclick*='Francisco']")
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3) > input')
    })

    it('using xpath' , ()=>{
      cy.xpath('//input[contains(@onclick, \'Francisco\')]')
      cy.xpath("//table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]//..//input[@type='text']")
      cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(., 'Mestrado')]/..//input[@type='text']").type('funciona?')
    })
})
