describe('Funcionalidade: Contato', () => {


  beforeEach(() => {
    cy.visit('index.html')
  });

  
  it('Deve preencher o formulário de contato com sucesso', () => {
    // cy.visit('http://localhost:3000/index.html')
    cy.get('#name').type('Henrique Silva')
    cy.get('#email').type('Henrique@teste.com')
    cy.get('#subject').type('Parceiras')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // cy.contains('Contato enviado com sucesso').should('exist')

  });

  it('Deve validar mensagem de erro sem preencher nome', () => {
    // cy.visit('http://localhost:3000/index.html')
    cy.get('#name').clear()
    cy.get('#email').type('Henrique@teste.com')
    cy.get('#subject').type('Parceiras')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // cy.get('#alert-container').clear('contain', 'Por favor, preencha o campo Nome')

  });

  it('Deve validar mensagem de erro sem preencher E-mail', () => {
    // cy.visit('http://localhost:3000/index.html')
    cy.get('#name').type('Henrique')
    cy.get('#email').clear()
    cy.get('#subject').type('Parceiras')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()


  });

  it('Deve validar mensagem de erro sem preencher assunto ', () => {
    // cy.visit('http://localhost:3000/index.html')
    cy.get('#name').type('Henrique')
    cy.get('#email').type('teste@teste')
    // cy.get('#subject').type('Parceiras')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()

  });

  it('Deve validar mensagem de erro sem preencher  mensagem ', () => {
    // cy.visit('http://localhost:3000/index.html')
    cy.get('#name').type('Henrique')
    cy.get('#email').type('teste@teste')
    cy.get('#subject').type('Parceiras')
    cy.get('#message').clear()
    cy.get('#btn-submit').click()
  });


})