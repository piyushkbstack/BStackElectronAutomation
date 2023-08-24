import { browser } from '@wdio/globals'

describe('Electron Testing', () => {
    it('should print application metadata', async () => {
        const appName = await browser.electron.app('getName')
        const appVersion = await browser.electron.app('getVersion')
        console.log('Testing Electron app:', appName, appVersion)
    })
})

