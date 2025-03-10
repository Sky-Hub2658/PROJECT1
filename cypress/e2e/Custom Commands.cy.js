describe('Custom Commands', ()=>{

    it('Log in commands', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.clickLink("log in")
        cy.loginapp("Admin","admin123")
        


    })
})