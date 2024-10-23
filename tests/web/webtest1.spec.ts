import {test, expect} from '@playwright/test'

test.describe('webtest1 @webtest1',  () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/')
    })
})