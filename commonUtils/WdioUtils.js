import util from 'util';
class WdioUtil {
  
  /**
   * Wait for element to be displayed
   * 
   * @param {string} locator 
   * @param {seconds} timeout 
   */
  async waitForElementVisible(locator, timeout = 15) {
    const element = await $(locator);
    await element.waitForDisplayed({ timeout: timeout*1000, timeoutMsg: `Element ${locator} not found`})
  }

  /**
   * Wait for button to be clickable
   * 
   * @param {string} locator 
   * @param {seconds} timeout 
   */
  async waitForButtonClickable(locator, timeout = 15) {
    const element = await $(locator);
    await element.waitForClickable({ timeout: timeout*1000 });
  }

  /**
   * Click on element
   * 
   * @param {string} locator 
   * @param {number} timeout 
   */
  async click(locator, timeout = 15) {
    await this.waitForElementVisible(locator, timeout);
    await this.waitForButtonClickable(locator, timeout);
    const element = await $(locator);
    await element.click();
  }

  /**
   * Type into the field
   * 
   * @param {string} locator 
   * @param {string} text 
   * @param {number} timeout 
   */
  async sendKeys(locator, text, timeout = 15) {
    await this.waitForElementVisible(locator, timeout);
    const element = await $(locator);
    await element.setValue(text);
  }

  /**
   * Save snapshot of an element
   * 
   * @param {string} locator 
   * @param {string} fileName 
   * @param {number} timeout 
   */
  async takeElementSnapshot(locator, fileName, timeout = 15) {
    await this.waitForElementVisible(locator, timeout);
    const element = await $(locator);
    await element.saveScreenshot(`./${fileName}.png`);
  }

  /**
   * Return get of an element
   * 
   * @param {string} locator 
   * @param {number} timeout 
   */
  async getText(locator, timeout = 15) {
    await this.waitForElementVisible(locator, timeout);
    const element = await $(locator);
    const text = await element.getText();
    return text;
  }

  /**
   * Return array of texts
   * 
   * @param {string} locator 
   * @param {number} timeout 
   * @returns allTexts
   */
  async getAllText(locator, timeout = 15) {
    const allTexts = [];
    const elements = await $$(locator);
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      allTexts.push(element.getText());
    }
    return allTexts;
  }

  createDynamicLocator(locator, replacableText) {
    return util.format(locator, replacableText);
  }
}

export default WdioUtil;

