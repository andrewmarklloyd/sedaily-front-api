const uuidv4 = require('uuid/v4')

describe('The Register Page', function () {
  let existingUser = {
    name: 'test2',
    email: 'test2@test2.pl',
    username: 'test2',
    password: 'test2'
  };
  before(function () {
    let existingUser = {
      name: 'test2',
      email: 'test2@test2.pl',
      username: 'test2',
      password: 'test2'
    }
    // create existing user
    cy.register()
    .then(({ user }) => {
      existingUser = user
    })
  })
  it('Successfully registers a new user', function () {
    const randomName = uuidv4()
    const newUser = {
      username: randomName,
      name: randomName,
      email: `${randomName}@mail.com`,
      password: 'fakePassword',
      bio: 'My Bio',
    }
    // require hash when visiting directly
    cy.visit('/#/register')
    .then(() => {
      cy.get('input[name=username]').type(newUser.username)
      cy.get('input[name=password]').type(newUser.password)
      cy.get('input[name=name]').type(newUser.name)
      cy.get('#bioInput').type(newUser.bio)
      cy.get('#emailInput').type(newUser.email)
      cy.get('#allowNewsletter').click()
      cy.get('button[name=submit-button]').click()
    })
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
    cy.get('a[href="/profile"]').should('exist')
    cy.get('a[href="/login"]').should('not.exist')
    cy.get('a[href="/register"]').should('not.exist')
    cy.window().then((win) => {
      expect(win.localStorage).to.have.any.keys('token')
    })
  })
  it('Displays error when registering existing user', function () {
    cy.visit('/#/register')
    .then(() => {
      cy.get('input[name=username]').type(existingUser.username)
      cy.get('input[name=password]').type(existingUser.password)
      cy.get('input[name=name]').type(existingUser.name)
      cy.get('#emailInput').type(existingUser.email)
      cy.get('#allowNewsletter').click()
      cy.get('button[name=submit-button]').click()
    })
    cy.get('.toasted.error').should('contain', 'User already exists')
  })
})
