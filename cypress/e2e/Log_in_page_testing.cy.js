describe('Log_in_page_testing',()=>{
    it('Log_in', ()=>{

        //Validate successful login with admin credentials:
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

    })

       // Validate error messages for incorrect credentials: invalid username
     it('incorrect username',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type('Notuser')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get("div[role='alert']").should('have.text', 'Invalid credentials')
     

     })
     // Validate error messages for incorrect credentials: invalid password
     it('incorrect password',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('notpassword')
        cy.get("button[type='submit']").click()
        cy.get("div[role='alert']").should('have.text', 'Invalid credentials')

     })
     //Validate empty fields behavior
     it('empty fields',()=>{
         cy.visit('https://opensource-demo.orangehrmlive.com/')
         cy.get("button[type='submit']").click()
         cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > span:nth-child(3)")
         .should('have.text','Required')

     })
     
})