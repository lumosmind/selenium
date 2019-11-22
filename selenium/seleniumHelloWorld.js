require('chromedriver'); // make driver reachable for nodeJS
require('geckodriver'); // make driver reachable for nodeJS

const { Builder, By, Key, util } = require("selenium-webdriver");
const selenium = require('selenium-webdriver');

async function example() {
  // const driver = await new Builder().forBrowser("chrome").build();
  const driver = await new Builder().forBrowser("firefox").build();

  await driver.get("http://google.com");
  await driver.findElement(By.name("q")).sendKeys("hello world", Key.RETURN);

}

example();