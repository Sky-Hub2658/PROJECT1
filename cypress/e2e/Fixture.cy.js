describe('Fixture',()=> {

    it('Fixturefile',()=> {

        cy.fixture("Orangehrm_Log_in_page").then((data)=>{

            cy.visit('/web/index.php/auth/login')

            data.forEach((userdata)=>{
                

              cy.get("input[placeholder='Username']").type(userdata.username)
              cy.get("input[placeholder='Password']").type(userdata.password)
              cy.get("button[type='submit']").click()

              if(userdata.username=='Admin' && userdata.password=='admin123')
              {
                cy.get(".oxd-topbar-header-title").should('have.text', userdata.expected)

                cy.get(".oxd-userdropdown-icon").click()
                cy.contains("Logout").click()
               
              }
              else{
                cy.get("div[role='alert']").should('have.text',userdata.expected)
              }
              

            })
        })

    })
})