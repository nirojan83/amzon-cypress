class CreateAccountPage {
  
    enterName(username) {
        cy.get('#ap_customer_name').type(username)
      }
    
      enterEmailOrPhoneNumber(emailOrPhoneNumber) {
        cy.get('#ap_email').type(emailOrPhoneNumber)
      }

      enterPassword(password) {
        cy.get('#ap_password').type(password)
      }

      reEnterPassword(password) {
        cy.get('#ap_password_check').type(password)
      }
    
      continueButton() {
        cy.get('#continue').click()
      }
    }
  
  export default CreateAccountPage;