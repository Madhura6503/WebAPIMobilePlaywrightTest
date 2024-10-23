import {test, expect} from '@playwright/test'

test.describe('mobiletest1 @mobiletest1',  () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/')
    })
})