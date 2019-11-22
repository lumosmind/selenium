require('chromedriver'); // make driver reachable for nodeJS
require('geckodriver'); // make driver reachable for nodeJS

const { Builder, By, Key, until } = require("selenium-webdriver");
// const selenium = require('selenium-webdriver');


async function example2() {

  // const driver = await new Builder().forBrowser("chrome").build();
  const driver = await new Builder().forBrowser("firefox").build();

  try {
    await driver.get("https://www.kitapyurdu.com/");

    // click "önerim var" button
    const onerimVarButton = await driver.wait(until.elementLocated(
      By.css('#header-top > div > div.top-menu.fr > ul > li:nth-child(6) > div > ul > li > a')),
      10000);

    onerimVarButton.click();


    // wait until "name" input box will present
    const nameTxt = await driver.wait(until.elementLocated(
      By.css("#header-feedback-form > div.padding > input[type=text]:nth-child(3)"))
      , 50000);
    //type name in to nameTxt
    nameTxt.sendKeys("Engin Özdemir");



    //type email value
    const emailTxt = await driver.wait(until.elementLocated(
      By.css("#header-feedback-form > div.padding > input[type=text]:nth-child(7)"))
      , 50000);
    //type name into nameTxt
    emailTxt.sendKeys("enginozdemir123456@gmail.com");


    // chose "Öneri" option from "Konu" select element
    const oneriOption = await driver.wait(until.elementLocated(
      By.css("#header-feedback-form > div:nth-child(2) > select:nth-child(11) > option:nth-child(2)"))
      , 50000);
    //type name in to nameTxt
    oneriOption.click();

    // type opinion into "Görüşünüz" gorusunuzText
    const gorusunuzText = await driver.wait(until.elementLocated(
      By.css("#header-feedback-form > div:nth-child(2) > textarea:nth-child(16)"))
      , 50000);
    //type name into nameTxt
    gorusunuzText.sendKeys("Benim görüşlerim sizi hiç alakadar etmez.");


    // click "Gönder" button
    const gonderButton = await driver.wait(
      until.elementLocated(By.css(".right a.button"))
      , 50000);
    //type name in to nameTxt
    gonderButton.click();


    //get success message
    const successMessage = await driver.wait(
      until.elementLocated(By.css(".success"))
      , 50000);

    //get success message content
    const successMessageContent = await successMessage.getAttribute('textContent');
    // const classy = await successMessage.getAttribute('class');
    console.log(`successMessageContent : ${successMessageContent} .....`);

    if (successMessageContent === "Düşüncelerinizi bizimle paylaştığınız için teşekkür ederiz.") {
      console.log(`test: passed`);
    } else {
      console.log('test failed!!!!!!!!!!!');
    }

    driver.close();
  } catch (error) {
    console.error(error);
  }


}


// example();

async function benchmark() {
  const t0 = Date.now();

  // example();
  await example2();

  const t1 = Date.now();

  console.log(`delta_t: ${t1 - t0} millisecond`);
}

benchmark();