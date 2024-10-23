import {test, expect} from '@playwright/test'

test.describe('apitest1 @apitest1',  () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/')
    })
})