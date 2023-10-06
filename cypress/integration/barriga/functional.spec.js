/// <reference types= "cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Should test at a funcional level', () => {
    before(() => {
        cy.login('isa.santos@gmail.com', 'isalinda14')
        cy.resetAPP(loc.MENU.RESET)
    })

    it('Should create an ccunt', ()=>{
        cy.acessarMenuConta()
        cy.inserirConta('Conta teste')
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!')
    })

      it('Should update an account', () => {
        cy.acessarMenuConta()

        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta alterada')
            cy.get(loc.CONTAS.BTN_SALVAR).click()
            cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
  })

  it('Should not create an account with same name', () => {
      cy.acessarMenuConta()

      cy.get(loc.CONTAS.NOME).type('Conta alterada')
      cy.get(loc.CONTAS.BTN_SALVAR).click()
      cy.get(loc.MESSAGE).should('contain', 'code 400')

  })
})

