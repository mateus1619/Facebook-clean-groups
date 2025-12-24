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

    var time = 2000
    var countGroups = document.querySelectorAll('[data-long-click-action-id]')

    for await (let group of countGroups) {
        await delay(4000)
        group = document.querySelector('[data-long-click-action-id]')
        group.click()

        await delay(time)
        let option = document.querySelector('[aria-label="Mais opções"]')
        option.click()

        await delay(1400)
        option = document.querySelector('[aria-label="Sair do grupo"]')
        option.click()

        await delay(time)
        option = document.querySelector('[aria-label="Sair do grupo"]')
        option.click()
    }
})();
