const uuidv4 = require('uuid/v4')

describe('The Login Page', function () {
  const existingUser = {
    username: 'test2',
    password: 'test2'
  }
  before(function () {
    // create existing user
    cy.register()
    .then(({ user }) => {
      existingUser = user
    })
  })
  it('Successfully logs user in and out', function () {
    cy.visit('/#/login')
    .then(() => {
      cy.get('input[name=username]').type(existingUser.username)
      cy.get('input[name=password]').type(existingUser.password)
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
      expect(win.localStorage.token).to.have.length.above(1)
    })
    cy.contains('Logout').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
    cy.get('a[href="/login"]').should('exist')
    cy.get('a[href="/register"]').should('exist')
    cy.window().then((win) => {
      expect(win.localStorage).to.have.any.keys('token')
      expect(win.localStorage.token).to.have.lengthOf(0)
    })
  })
  it('Displays error when registering non-existing user', function () {
    cy.visit('/#/login')
    .then(() => {
      cy.get('input[name=username]').type(uuidv4())
      cy.get('input[name=password]').type('whatever')
      cy.get('button[name=submit-button]').click()
    })
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/login')
    })
    cy.get('.toasted.error').should('contain', 'User not found')
  })
  it('Displays error when password not correct', function () {
    cy.visit('/#/login')
    .then(() => {
      cy.get('input[name=username]').type(existingUser.username)
      cy.get('input[name=password]').type('wrong')
      cy.get('button[name=submit-button]').click()
    })
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/login')
    })
    cy.get('.toasted.error').should('contain', 'Password is incorrect')
  })
})
