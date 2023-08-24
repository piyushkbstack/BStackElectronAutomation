import { elements as dashboardLocator } from "../../locators/mcspt/dashboardLocator";
import wdioUtil from "../../../commonUtils/WdioUtils"
const elements = {
  ...dashboardLocator,
};

class DashboardPage extends wdioUtil{

  async switchToDashbaordWindow() {
    await new Promise((resolve) => { setTimeout(resolve,8000)});
    await browser.switchWindow("BrowserStack AppPerformance (Beta)")
  }

  async clickRefreshButton() {
    await this.click(elements.REFRESH_BUTTON);
  }

  async getDevices() {
    await this.click(elements.DEVICE_COMBOBOX);
    const devices = await this.getAllText(elements.DEVICES_LIST);
    await this.takeFinalScreenshot('snapshot/devices');
    await this.click(elements.DEVICE_COMBOBOX);
    return devices;
  }

  async selectDevice(deviceName) {
    await this.click(elements.DEVICE_COMBOBOX);
    const locator = this.createDynamicLocator(elements.DEVICE_TEXT, deviceName);
    await this.click(elements.DEVICE_COMBOBOX);
    await this.click(locator);
  }

  async selectApp(appName) {
    await this.click(elements.APP_COMBOBOX);
    await this.sendKeys(elements.APP_SEARCH_COMBOBOX, appName);
    await this.click(elements.APP_SEARCH_VALUE);
  }

  async takeFinalScreenshot(snapshotName) {
    await this.takeElementSnapshot(elements.CONATINER_LOCATOR, snapshotName)
  }
}

export default DashboardPage = new DashboardPage();