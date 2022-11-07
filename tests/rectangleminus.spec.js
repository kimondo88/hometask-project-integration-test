import { getRectangleArea,  getRectanglePerimeter, getRectangleInfo} from "../js/rectangle";

//second test for another spyOn mock, doesn't wanna work second time in the same file, don't know why, so made second file

const logSpy = jest.spyOn(console, "log").mockImplementation((str) => str.toLowerCase());

//test second -1000, 2000

test(`test for perimeter of rectangle of -1000 and 2000`, ()=>{
    const rectangle = getRectanglePerimeter(-1000, 2000);
    expect(rectangle).toBe(2*(-1000+2000));
})

test(`test for rectangle area of -1000 and 2000`, ()=>{
    const rectangle = getRectangleArea(-1000, 2000);
    expect(rectangle).toBe(-1000*2000);
})

describe(`testing rectangle info of -1000 and 2000`, ()=> {
    afterEach(()=>{
        logSpy.mockClear();
    });

    it(`console should return valid area and perimeter`, ()=>{
        const rectangle = getRectangleInfo(-1000, 2000);
        expect(logSpy).toHaveReturnedWith(`the perimeter of a rectangle is ${2*(-1000+2000)} and the area is ${-1000*2000}`)
    });
    it(`console should be called one time`, ()=> {
        getRectangleInfo(-1000, 2000);
        expect(logSpy).toHaveBeenCalledTimes(1);
    });
});