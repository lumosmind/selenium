require('chromedriver'); // make driver reachable for nodeJS
require('geckodriver'); // make driver reachable for nodeJS

const { Builder, By, Key, util, until } = require("selenium-webdriver");
const selenium = require('selenium-webdriver');

async function example() {
  // const driver = await new Builder().forBrowser("chrome").build();
  const driver = await new Builder().forBrowser("firefox").build();

  await driver.get("https://www.kitapyurdu.com/");
  // click "önerim var" button
  await driver
    .findElement(By.css("#header-top > div > div.top-menu.fr > ul > li:nth-child(6) > div > ul > li > a"))
    .click();

  // wait until "name" input box will present
  await driver.wait(function () {
    return selenium.until.elementIsVisible(By.name("#header-feedback-form > div.padding > input[type=text]:nth-child(3)"));
  }, 50000);

  //type name value
  await driver
    .findElement(By.css("#header-feedback-form > div.padding > input[type=text]:nth-child(3)"))
    .sendKeys("Engin Özdemir", Key.RETURN);

  //type email value
  await driver
    .findElement(By.css("#header-feedback-form > div.padding > input[type=text]:nth-child(7)"))
    .sendKeys("enginozdemir123456@gmail.com", Key.RETURN);

  await driver
    .findElement(By.css("#header-feedback-form > div:nth-child(2) > select:nth-child(11) > option:nth-child(2)"))
    .click();

  await driver
    .findElement(By.css("#header-feedback-form > div:nth-child(2) > textarea:nth-child(16)"))
    .sendKeys("Benim görüşlerim sizi hiç alakadar etmez.", Key.RETURN);


  await driver
    .findElement(By.css("html body.jBox-blockScroll-jBoxID1 div#jBoxID1.jBox-wrapper.jBox-Modal.jBox-Default div.jBox-container div.jBox-content div#feedback-popup div.no-padding form#header-feedback-form.feedback-form div.buttons div.right a.button"))
    .click();

  console.log(Date.now());

  debugger;

  const el = await driver.wait(function () {
    return selenium.until.elementIsVisible(By.xpath('/html/body/div[1]/div[6]/div/div/div/img'));
  }, 50000);
  console.log(Date.now());
  console.log(el);
  console.log(el.fn);
  console.log(Date.now());



  await driver
    .findElement(By.xpath('/html/body/div[1]/div[6]/div/div/div/img'))
    .click();

  console.log('xxx:', Date.now());

}

example();