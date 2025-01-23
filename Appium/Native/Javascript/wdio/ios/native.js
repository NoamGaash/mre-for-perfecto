describe('Native NodeJS', function() {

    it('iOS Sample', async () => {
        console.log(await browser.execute('mobile:deviceScreenInfo'));
    });
});