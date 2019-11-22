// require("phantom");
const phantom = require("phantom");


async function example() {
  const instance = await phantom.create();
  const page = await instance.createPage();

  //catch request event
  await page.on("onResourceRequested", function (requestData) {
    console.info('Requesting', requestData.url)
  });

  const status = await page.open('https://stackoverflow.com/');
  console.log(status);

  const content = await page.property('content');
  console.log(content);

  await instance.exit();

}

example();