import {AdRecord} from "../records/ad.record";

const defaultObject = {
    name: "Test Name",
    description: 'Lalala',
    url: 'https://megak.pl',
    price: 0,
    lat: 6,
    lon: 6,
}

test('Can build Ad Record', () => {
    const ad = new AdRecord(defaultObject);

    expect(ad.name).toBe('Test Name');
    expect(ad.description).toBe('Lalala')
    expect(ad.lat).toBe(6)
    expect(ad.lon).toBe(6)
});

test('Validates invalid name', () => {
    expect(() => new AdRecord({
        ...defaultObject,
        name: ''
    })).toThrow('Nazwa ogłoszenia nie może być pusta, ani przekraczać 100 znaków');

    expect(() => new AdRecord({
        ...defaultObject,
        name: 'dhgsdjkhgdkjgdkegdukweygfuegfurfgrugfrugfulregrleglfgjlhfbdgjlhfbgjlhfdbglfjdbgfsjgfgddfgdgdfgdfgfdgdgfgdfgdfgdfgfdgdfgdfgfdgfdgdfgfdggbfdjhgb'
    })).toThrow('Nazwa ogłoszenia nie może być pusta, ani przekraczać 100 znaków')
});


test('Validates invalid price', () => {
    expect(() => new AdRecord({
        ...defaultObject,
        price: -5,
    })).toThrow('Cena nie może być mniejsza niż 0 lub większa niż 9 999 999')

    expect(() => new AdRecord({
        ...defaultObject,
        price: 10000000
    })).toThrow('Cena nie może być mniejsza niż 0 lub większa niż 9 999 999')
});





