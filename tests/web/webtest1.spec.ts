import {test, expect} from '@playwright/test'

test.describe('Web UI testing @web-ui', ()=>{
    test.beforeEach(async({page}) =>{
        await page.goto('https://www.google.com', {waitUntil: 'networkidle', timeout:30000})
    })

    test('Sample test', async({page}) =>{
        await page.locator('textarea[name="q"]').hover()
        await page.waitForTimeout(5000)
        await page.pause()
        
    })
})