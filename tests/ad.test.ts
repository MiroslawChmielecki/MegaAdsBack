import {AdRecord} from "../records/ad.record";
import {pool} from "../utils/db";
import {AdEntity} from "../types";

afterAll(async () => {
    await pool.end();
})

test('AdRecord.getOne returns data from database for one entry.', async () => {
//testujemy metodę statyczną, pobieranie pojedynczego elementu
    const ad = await AdRecord.getOne('abc');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');
    expect(ad.name).toBe('Testowy')
    //...

});

test('AdRecord.getOne returns null from database for not existing entry.', async () => {
    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull();
})


test('AdRecord.findAll returns array of found entries.', async () => {
    const ads = await AdRecord.findAll('');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
})


test("AdRecord.findAll returns array of found entries when searching for 'a'.", async () => {
    const ads = await AdRecord.findAll('y');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
})

test("AdRecord.findAll returns empty array when searching for something does not exist.", async () => {
    const ads = await AdRecord.findAll('---------------------------');

    expect(ads).toEqual([]);
})

test("AdRecord.findAll returns smaller amounts of data.", async () => {
    const ads = await AdRecord.findAll('');

    expect((ads[0] as AdEntity).price).toBeUndefined();
    expect((ads[0] as AdEntity).description).toBeUndefined();
})