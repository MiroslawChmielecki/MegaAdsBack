import {AdRecord} from "../records/ad.record";

test('AdRecord returns data from database for one entry.', async () => {
//testujemy metodę statyczną, pobieranie pojedynczego elementu
    const ad = await AdRecord.getOne('abc');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');
    expect(ad.name).toBe('Testowy')
    //...

});

test('AdRecord returns null from database for unexisting entry.', async () => {
    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull();
})