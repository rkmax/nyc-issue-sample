const puppeteer = require('puppeteer-core');

class SampleThing {
    async run() {
        this.browser = await puppeteer.launch({
            // PLEASE change to your chromium or chrome path
            executablePath: '/usr/bin/chromium'
        });
        const page = await this.browser.newPage();
        await page.goto('https://google.com', { waitUntil: 'domcontentloaded' });

        return await page.evaluate(() => {
            return document.querySelector('a').href;
        });
    }

    async close() {
        return this.browser.close()
    }
}

async function main() {
    const thing = new SampleThing();
    const link = await thing.run();
    await thing.close();
    console.log('my link ', link);
}

if (require.main === module) {
    main().catch(err => console.log.bind(err));
}

module.exports = {SampleThing};
