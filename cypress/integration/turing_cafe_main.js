describe ('Main Dashboard', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Should be able to visit the page and view title, form, and all reservations', () => {
        cy.get('.app-title').contains('Turing Cafe Reservations')
        cy.get('.resy-form').children('form').children('input')
        cy.get('.resy-container').children('.resoContainer').children('.resoCard').contains('date')
    })

    it('Should be able to fill out a name in the form input', () => {
        cy.get('input[name="name"]')
          .type('Rachael')
          .should('have.value', 'Rachael')
      })
    
      it('Should be able to fill out a date in the form input', () => {
        cy.get('input[name="date"]')
          .type('07/21')
          .should('have.value', '07/21')
      })
    
      it('Should be able to fill out a time in the form input', () => {
        cy.get('input[name="time"]')
          .type('7:30')
          .should('have.value', '7:30')
      })
    
      it('Should be able to fill out a number in the form input', () => {
        cy.get('input[type="number"]')
          .type(8)
          .should('have.value', 8)
      })







})