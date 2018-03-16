const selectors = require('../supporting/selectors')
const functions = require('../supporting/functions')

module.exports = {
    beforeEach : browser => {
        browser.url('http://localhost:3000/')
            .waitForElementPresent('body', 2000)
    },
    after : browser => {
        browser.end()
    },
    'Odds and Evens' : browser => functions.oddsAndEvens(browser, selectors),
    'Filter Object (hair color)' : browser => functions.filterObjectHair(browser, selectors),
    'Filter Object (name)' : browser => functions.filterObjectName(browser, selectors),
    'Filter String' : browser => functions.filterString(browser, selectors),
    'Palindrome (true)' : browser => functions.palindromeTrue(browser, selectors),
    'Palindrome (false)' : browser => functions.palindromFalse(browser, selectors),
    'Sum' : browser => functions.sum(browser, selectors)
}