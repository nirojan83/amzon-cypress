import CreateAccountPage from '../pages/createAccountPage'

describe('Login Test', () => {
  const createAccountPage = new CreateAccountPage()

  it('Valid registrations', function () {
    cy.fixture('loginDataSuccessfullRegistration').then((dataSet) => {
      dataSet.forEach((data) => {
        cy.visit('https://www.amazon.com/rapids/register')
        createAccountPage.enterName(data.name)
        createAccountPage.enterEmailOrPhoneNumber(data.email)
        createAccountPage.enterPassword(data.password)
        createAccountPage.reEnterPassword(data.passwordConfimation)
        createAccountPage.continueButton()
        // Don't usually use wait
        cy.wait(3000)
        cy.title().should('eq', 'Authentication required')
        cy.clearCookies();
      });
    });
})

  it('Mismatched Passwords', function () {
    cy.fixture('mismatchedPasswordData').then((dataSet) => {
      dataSet.forEach((data) => {
        cy.visit('https://www.amazon.com/rapids/register')
        createAccountPage.enterName(data.name)
        createAccountPage.enterEmailOrPhoneNumber(data.email)
        createAccountPage.enterPassword(data.password)
        createAccountPage.reEnterPassword(data.passwordConfimation)
        createAccountPage.continueButton()
        // Don't usually use wait
        cy.wait(3000)
        cy.xpath('//div[contains(text(), "Passwords must match")]').contains("Passwords must match")
        cy.clearCookies();
      });
    });
  })

})