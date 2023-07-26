// create web browser
const browser = await puppeteer.launch({
    headless: false
});
// create new page
const page = await browser.newPage();
// go to url
await page.goto('https://www.instagram.com/accounts/login/');
// wait for element defined by XPath appear in page
await page.waitForXPath('//input[@name="username"]');
// type account
await page.type('input[name="username"]', 'your_username');
// type password
await page.type('input[name="password"]', 'your_password');
// click button "Log In"
await page.click('button[type="submit"]');
// wait for navigation to finish
await page.waitForNavigation();
// click button "Not Now"
await page.click('button[type="button"]');
// wait for element defined by XPath appear in page
await page.waitForXPath('//a[@href="/explore/"]');
// go to url
await page.goto('https://www.instagram.com/explore/');
// wait for element defined by XPath appear in page
await page.waitForXPath('//div[@class="v1Nh3 kIKUG  _bz0w"]');
// get all elements defined by XPath
const [all] = await page.$x('//div[@class="v1Nh3 kIKUG  _bz0w"]');
// click element
await all.click();
// wait for navigation to finish
await page.waitForNavigation();
// wait for element defined by XPath appear in page
await page.waitForXPath('//button[@class="sqdOP yWX7d    y3zKF     "]');
// get all elements defined by XPath
const [like] = await page.$x('//button[@class="sqdOP yWX7d    y3zKF     "]');
// click element
await like.click();
// wait for navigation to finish
await page.waitForNavigation();
// wait for element defined by XPath appear in page
await page.waitForXPath('//textarea[@class="Ypffh"]');
// get all elements defined by XPath
const [comment] = await page.$x('//textarea[@class="Ypffh"]');
// type comment
await comment.type('This is my comment');
// wait for element defined by XPath appear in page
await page.waitForXPath('//button[@type="submit"]');
// get all elements defined by XPath
const [submit] = await page.$x('//button[@type="submit"]');
// click element
await submit.click();
// wait for navigation to finish
await page.waitForNavigation();