import dashboardPage from '../../pages/mcspt/DashboardPage';

describe('MCSPT Demo Electron Test', () => {
    it('test refresh button', async () => {
      await dashboardPage.switchToDashbaordWindow();
      await dashboardPage.clickRefreshButton();
      await dashboardPage.takeFinalScreenshot('snapshot/rerfresh');
    })

    it('test device selection', async () => {
      const devices = await dashboardPage.getDevices();
      await expect(devices.length).toBe(1);
      await dashboardPage.selectDevice('Apple iPhone 14');
    })

    it('test app search and select', async () => {
      await dashboardPage.selectApp('Zomato');
      await dashboardPage.takeFinalScreenshot('snapshot/appSelected');
    })
})

