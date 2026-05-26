
/// <reference types="cypress"/>
import  {  faker  }  from  '@faker-js/faker' ;

describe('Funcionalidade: Cadastr no Hub de Leitura', () => {
    
    beforeEach(() => {
        cy.visit('register.html')
    });


    it('Deve fazer cadastro com sucesso unsando Função JS', () => {
        let email = `teste${Date.now()}@teste.com`

        cy.get('#name').type( 'Henrique teste')
        cy.get('#email').type(email)
        cy.get('#phone').type('1199887766')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //resultado esperado
        // cy.url().should('include', 'dashboard')
    });


     it('Deve fazer cadastro com sucesso, usando Função Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()

        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('1199887766')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //resultado esperado
        // cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });


    


});