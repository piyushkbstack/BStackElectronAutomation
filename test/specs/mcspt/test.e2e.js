import dashboardPage from '../../pages/mcspt/DashboardPage';

describe('Electron Testing', () => {
    it('test refresh', async () => {
      await dashboardPage.switchToDashbaordWindow();
      await dashboardPage.clickRefreshButton();
      await dashboardPage.takeFinalScreenshot('snapshot/rerfresh');
    })

    it('device listbox test', async () => {
      const devices = await dashboardPage.getDevices();
      await expect(devices.length).toBe(1);
      await dashboardPage.selectDevice('Apple iPhone 14');
    })

    it('app search functionality', async () => {
      await dashboardPage.selectApp('Zomato');
      await dashboardPage.takeFinalScreenshot('snapshot/appSelected');
    })
})

