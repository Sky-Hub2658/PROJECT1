describe('Dashboardtesting',()=>{

      //Verify that the user’s name is displayed correctly
    it('redirected to the Dashboard after login',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.url().should('include','/dashboard')
    })

    //Verify that the user’s name is displayed correctly
    it('User name displayed correctly',()=>{
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get(".oxd-userdropdown-tab").should('have.text','manda user')
    })

    //Validate the presence of main navigation items:
    it('main nevigation items',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get(".oxd-main-menu-item").contains('Admin').should('be.visible')
        cy.get(".oxd-main-menu-item").contains('PIM').should('be.visible')
        cy.get(".oxd-main-menu-item").contains('Leave').should('be.visible')
        cy.get(".oxd-main-menu-item").contains('Time').should('be.visible')
        cy.get(".oxd-main-menu-item").contains('Recruitment').should('be.visible')
    })
     //Check the responsiveness using different viewports
     it('Check the responsiveness',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        const viewports = ['ipad-2', 'iphone6', 'macbook-15'];
        viewports.forEach(viewport => {
            cy.viewport(viewport);
            cy.visit('web/index.php/dashboard/index'); 
            cy.get('.oxd-text--h6').should('be.visible'); 
        });

        
     })
    


})