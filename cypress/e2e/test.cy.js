describe('Application Testing Suite', () => {
  beforeEach(() => {
    
    cy.visit('https://the-internet.herokuapp.com');
  });

    it('task1', () => {
     
      cy.contains("Dropdown").click();
      cy.get('#dropdown').should('be.visible').select('1');
      cy.get('option[value="1"]').should('have.attr', 'selected');
    });

    it('task2', () => {
      
      cy.contains("Dropdown").click();
      cy.get('#dropdown').should('be.visible').select('2');
      cy.get('option[value="2"]').should('have.attr', 'selected');
    });
 
    it('task3', () => {
      cy.contains("Dynamic Loading").click();
      cy.contains("Example 1").click();
      cy.contains("Start").click();
      cy.get('#loading').should('not.be.visible');
      cy.contains("Hello World!").should('be.visible');
    });

    it('task4', () => {
      cy.contains("Dynamic Loading").click();
      cy.contains("Example 2").click();
      cy.contains("Start").click();
      cy.get('#loading').should('not.be.visible');
      cy.contains("Hello World!").should('be.visible');
    });
    
    const statusCodeTests = [
      ['200', 'This page returned a 200 status code. For a definition and common list of HTTP status codes, go here'],
      ['301', 'This page returned a 301 status code. For a definition and common list of HTTP status codes, go here'],
      ['404', 'This page returned a 404 status code. For a definition and common list of HTTP status codes, go here'],
      ['500', 'This page returned a 500 status code. For a definition and common list of HTTP status codes, go here'],
    ];
    statusCodeTests.forEach((data) => {
      it(`task5 `, () => {
        cy.contains("Redirect Link").click();
        cy.get("#redirect").click();
        cy.contains(data[0]).click();
        cy.get('.example').find('p').invoke('text').then((text) => {
          const cleanedText = text.replace(/\s+/g, ' ').trim();
          expect(cleanedText).to.equal(data[1]);
        });
      });
    });
  
});