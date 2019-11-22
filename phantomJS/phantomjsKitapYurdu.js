
var phantom = require('phantom');

/* phantom.create().then(function (ph) {
  ph.createPage().then(function (page) {
    page.open('https://stackoverflow.com/').then(function (status) {
      console.log(status);
      page.property('content').then(function (content) {
        console.log(content);
        page.close();
        ph.exit();
      });
    });
  });
}); */

async function example() {

  const instance = await phantom.create();
  const page = await instance.createPage();


  const status = await page.open("http://google.com");
  console.log('status :', status);
  debugger;

  console.log('page.objectName :', page["objectName"]);
  console.log('page.title :', page.title);
  console.log('page.url :', page.url);





  await page.close();
  instance.exit();
}

// example();





// const phantom = require('phantom');

(async function () {
  const instance = await phantom.create();
  const page = await instance.createPage();
  /*   await page.on('onResourceRequested', function (requestData) {
      console.info('Requesting', requestData.url);
    }); */


  page.on('onLoadFinished', async function (status) {
    console.log("the status:", status);


    // click to "Onerim var"
    const btn = await page.evaluateAsync(function () {
      const btn = document.querySelector("#header-top > div > div.top-menu.fr > ul > li:nth-child(6) > div > ul > li > a");
      // btn.click();
      return "mustafa";
    });

    console.log(btn);
  });

  const status = await page.open('https://www.kitapyurdu.com/');
  const title = await page.property('title');
  console.log(title);










  /* 
  //type name into nameTxt
  await page.evaluate(function () {
    const nameTxt = document.querySelector("#header-feedback-form > div.padding > input[type=text]:nth-child(3)");
    nameTxt.value = "Engin Özdemir";
 
 
  });
 
  //type email into emailTxt
  await page.evaluate(function () {
    const nameTxt = document.querySelector("#header-feedback-form > div.padding > input[type=text]:nth-child(7)");
    nameTxt.value = "enginozdemir123456@gmail.com";
  });
 
  //chose "Öneri" option from select item
  await page.evaluate(function () {
    document.querySelector("#header-feedback-form > div.padding > select").selectedIndex = 1;
  });
 
 
  //type opinion into "Görüşünüz"
  await page.evaluate(function () {
    const gorusunuzTxt = document.querySelector("#header-feedback-form > div.padding > textarea");
    gorusunuzTxt.value = "Benim görüşlerim sizi hiç alakadar etmez.";
  });
 
 
  //click "Gonder"
  await page.evaluate(function () {
    document.querySelector("#header-feedback-form > div.buttons > div > a").click();
  });
 
  //get success message
  await page.evaluate(function () {
    const successMessage = document.querySelector("#notification > div").innerText;
 
    if (successMessage === "Düşüncelerinizi bizimle paylaştığınız için teşekkür ederiz.") {
      console.log(`test: passed`);
    } else {
      console.log('test failed!!!!!!!!!!!');
    } */
  // });



  // document.querySelector("#notification > div").innerText
  //document.querySelector("#notification > div > img").click()




  await instance.exit();
})();

