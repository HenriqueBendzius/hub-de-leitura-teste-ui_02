/// <reference types="cypress"/>

describe('Funcionalidade: Catalogo de livros', () => {
    
    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it.skip('Deve clicar no botão deve adicionar a cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click
        cy.get('#cart-count')

    });


    it('Deve clicar em todos os botao adicionar a cesta ', () => {
        cy.get('.btn-primary').click({multiple: true})

        
    });

    it('Deve clicar no primeiro botão e adicionar a cesta', () => {
        cy.get('.btn-primary').first().click
        
    });


    it('Deve clicar no ultimo botão e adicionar a cesta', () => {
        cy.get('.btn-primary').last().click
    });



    it('Deve clicar no terceiro botão e adicionar a cesta', () => {
        cy.get('.btn-primary').eq(2).click
    });


    it('Deve clicar no quinto botão e adicionar a cesta', () => {
        cy.get('.btn-primary').eq(4).click
       
    });

    //não testei esses abaixo//
    it('Deve clicar no nome do livro e direcionar para tela do livro', () => {
        cy.get('Dom Casmurro').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'livro adicionado à cesta com sucesso')

    });

    



});