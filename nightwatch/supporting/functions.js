const selectors = require('../supporting/selectors')

/**
 * Inputs 5 numbers (3 odd, 2 even) and checks for correct results.
 * @param {object} browser the Nightwatch object
 * @param {string} selectors the selectors for the input, button, and results elements
 */
let oddsAndEvens = (browser, selectors) => {
    // input numbers
    browser.waitForElementVisible(selectors.evenOddInput, 3000)
    browser.setValue(selectors.evenOddInput, '55,44,33,22,11')
        .verify.value(selectors.evenOddInput, '55,44,33,22,11')
    // click sort button
    browser.click(selectors.evenOddButton)
    // check even output
    browser.expect.element(selectors.evenResults).text.to.equal('Evens: [44,22]')
    // check odd output
    browser.expect.element(selectors.oddResults).text.to.equal('Odds: [55,33,11]')
}
let filterObjectHair = (browser, selectors) => {
    // input filter
    browser.setValue(selectors.objectFilterInput, 'hairColor')
    // click filter button
    browser.click(selectors.objectFilterButton)
    // check filtered result
    browser.expect.element(selectors.objectFilterResults).text.to.equal('Filtered: [ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
}
let filterObjectName = (browser, selectors) => {
    // input filter
    browser.setValue(selectors.objectFilterInput, 'name')
    // click filter button
    browser.click(selectors.objectFilterButton)
    // check filtered result
    browser.expect.element(selectors.objectFilterResults).text.to.equal('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]')
}
let filterString = (browser, selectors) => {
    // input filter
    browser.setValue(selectors.nameFilterInput, 'Jessica')
    // click filter button
    browser.click(selectors.nameFilterButton)
    // check filtered results
    browser.expect.element(selectors.nameFilterResults).text.to.equal('Filtered Names: [ "Jessica" ]')
}
let palindromTrue = (browser, selectors) => {
    // input word
    browser.setValue(selectors.palindromeInput, 'racecar')
    // click on check button
    browser.click(selectors.palindromeButton)
    // check result
    browser.expect.element(selectors.palindromeResults).text.to.equal('Palindrome: true')
}
let palindromFalse = (browser, selectors) => {
    // input word
    browser.setValue(selectors.palindromeInput, 'Dan')
    // click on check button
    browser.click(selectors.palindromeButton)
    // check result
    browser.expect.element(selectors.palindromeResults).text.to.equal('Palindrome: false')
}
let sum = (browser, selectors) => {
    // enter input1
    browser.setValue(selectors.sumInput1, '60')
    // enter input2
    browser.setValue(selectors.sumInput2, '40')
    // click add button
    browser.click(selectors.sumButton)
    // check sum result
    browser.expect.element(selectors.sumResults).text.to.equal('Sum: 100')
}

module.exports = {
    oddsAndEvens : oddsAndEvens,
    filterObjectHair : filterObjectHair,
    filterObjectName : filterObjectName,
    filterString : filterString,
    palindromeTrue : palindromTrue,
    palindromFalse : palindromFalse,
    sum : sum
}