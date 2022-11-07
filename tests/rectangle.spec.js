import { getRectangleArea,  getRectanglePerimeter, getRectangleInfo} from "../js/rectangle";

const logSpy = jest.spyOn(console, "log").mockImplementation((str) => str.toLowerCase());

//test for 0, 1000

test(`test for perimeter of rectangle of 0 and 1000`, ()=>{
    const rectangle = getRectanglePerimeter(0, 1000);
    expect(rectangle).toBe(2*(0+1000));
})

test(`test for rectangle area of 0 and 1000`, ()=>{
    const rectangle = getRectangleArea(0, 1000);
    expect(rectangle).toBe(0*1000);
})

describe(`testing rectangle info of 0 and 1000`, ()=> {
    afterEach(()=>{
        logSpy.mockClear();
    });

    it(`console should return valid area and perimeter`, ()=>{
        getRectangleInfo(0, 1000);
        expect(logSpy).toHaveReturnedWith(`the perimeter of a rectangle is ${2*(0+1000)} and the area is ${0*1000}`)
    });
    it(`console should be called one time`, ()=> {
        getRectangleInfo(0, 1000);
        expect(logSpy).toHaveBeenCalledTimes(1);
    });
});


