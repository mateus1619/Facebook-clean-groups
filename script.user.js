// ==UserScript==
// @name         Simple clean groups
// @namespace    http://tampermonkey.net/
// @version      2025-12-24
// @description  Remove groups with website mobile version!
// @author       You
// @match        https://www.facebook.com/groups/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    await delay(5000)
    var time = 1765
    var groups = document.querySelectorAll('[data-long-click-action-id]')

    console.log(groups)

    for await (const [index, group] of groups.entries()) {
        await delay(time)
        console.log(`[${index}] `, group)
        group.click()

        await delay(time)
        let option = document.querySelector('[aria-label="Mais opções"]')
        console.log(`[${index}] `, option)
        option.click()

        await delay(time)
        option = document.querySelector('[aria-label="Sair do grupo"]')
        console.log(`[${index}] `, option)
        option.click()
    }
})();