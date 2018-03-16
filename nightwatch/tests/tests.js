const selectors = require('../supporting/selectors')

module.exports = {
    beforeEach : browser => {
        browser.url('http://localhost:54454/')
    },
    after : browser => {
        browser.end()
    },
    'Odds and Evens' : browser => {
        // input numbers
        browser.setValue(selectors.evenOddInput, '55, 44, 33, 22, 11')
        // click sort button
        browser.click(selectors.evenOddButton)
        // check even output
        browser.expect.element(selectors.evenResults).text.to.equal('Evens: [44,22]')
        // check odd output
        browser.expect.element(selectors.oddResults).text.to.equal('Odds: [55,33,11]')
    },
    'Filter Object (hair color)' : browser => {
        // input filter
        browser.setValue(selectors.objectFilterInput, 'hairColor')
        // click filter button
        browser.click(selectors.objectFilterButton)
        // check filtered result
        browser.expect.element(selectors.objectFilterResults).text.to.equal('Filtered: [ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
    },
    'Filter Object (name)' : browser => {
        // input filter
        browser.setValue(selectors.objectFilterInput, 'name')
        // click filter button
        browser.click(selectors.objectFilterButton)
        // check filtered result
        browser.expect.element(selectors.objectFilterResults).text.to.equal('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]')
    },
    'Filter String' : browser => {
        // input filter
        browser.setValue(selectors.nameFilterInput, 'Jessica')
        // click filter button
        browser.click(selectors.nameFilterButton)
        // check filtered results
        browser.expect.element(selectors.nameFilterResults).text.to.equal('Filtered Names: [ "Jessica" ]')
    },
    'Palindrome (true)' : browser => {
        // input word
        browser.setValue(selectors.palindromeInput, 'racecar')
        // click on check button
        browser.click(selectors.palindromeButton)
        // check result
        browser.expect.element(selectors.palindromeResults).text.to.equal('Palindrome: true')
    },
    'Palindrome (false)' : browser => {
        // input word
        browser.setValue(selectors.palindromeInput, 'Dan')
        // click on check button
        browser.click(selectors.palindromeButton)
        // check result
        browser.expect.element(selectors.palindromeResults).text.to.equal('Palindrome: false')
    },
    'Sum' : browser => {
        // enter input1
        browser.setValue(selectors.sumInput1, '60')
        // enter input2
        browser.setValue(selectors.sumInput2, '40')
        // click add button
        browser.click(selectors.sumButton)
        // check sum result
        browser.expect.element(selectors.sumResults).text.to.equal('Sum: 100')
    }
}