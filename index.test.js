const assert = require('assert');
const {SampleThing} = require('./index');

describe('thing', () => {
    const thing = new SampleThing();
    after(async() => {
        thing.close();
    })
    it('should be able to get a link', async() => {

        const link = await thing.run();

        assert(link !== null);
    });
})
