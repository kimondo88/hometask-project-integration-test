import { getRectangleInfo} from "../js/rectangle";

const logSpy = jest.spyOn(console, "log").mockImplementation((str) => str.toLowerCase());


describe(`testing rectangle info`, ()=> {
    afterEach(()=>{
        logSpy.mockClear();
    });
    afterAll(()=>{
        logSpy.mockRestore();
    })

    //zero case

    it(`console should return valid area and perimeter for 0 and 0`, ()=>{
        const rectangle = getRectangleInfo(0, 0);
        expect(logSpy).toHaveReturnedWith(`the perimeter of a rectangle is ${0} and the area is ${0}`)
    });
    it(`console should be called one time for 0 and 0`, ()=> {
        getRectangleInfo(0, 0);
        expect(logSpy).toHaveBeenCalledTimes(1);
    });

    //positive case

    it(`console should return valid area and perimeter for 0 and 2000000`, ()=>{
        const rectangle = getRectangleInfo(0, 2000000);
        expect(logSpy).toHaveReturnedWith(`the perimeter of a rectangle is ${2*(0+2000000)} and the area is ${0*2000000}`)
    });
    it(`console should be called one time for 0 and 2000000`, ()=> {
        getRectangleInfo(0, 2000000);
        expect(logSpy).toHaveBeenCalledTimes(1);
    });

    it(`console should return valid area and perimeter for 9000000 and 2000000`, ()=>{
        const rectangle = getRectangleInfo(9000000, 2000000);
        expect(logSpy).toHaveReturnedWith(`the perimeter of a rectangle is ${2*(9000000+2000000)} and the area is ${9000000*2000000}`)
    });
    it(`console should be called one time for 0 and 2000000`, ()=> {
        getRectangleInfo(9000000, 2000000);
        expect(logSpy).toHaveBeenCalledTimes(1);
    });

    //negative cases

    it(`console should return valid area and perimeter for 0 and -2000000`, ()=>{
        const rectangle = getRectangleInfo(0, -2000000);
        expect(logSpy).toHaveReturnedWith(`the perimeter of a rectangle is ${2*(0-2000000)} and the area is ${0*-2000000}`)
    });
    it(`console should be called one time for 0 and -2000000`, ()=> {
        getRectangleInfo(0, -2000000);
        expect(logSpy).toHaveBeenCalledTimes(1);
    });

    it(`console should return valid area and perimeter for -1000000 and -2000000`, ()=>{
        const rectangle = getRectangleInfo(-1000000, -2000000);
        expect(logSpy).toHaveReturnedWith(`the perimeter of a rectangle is ${2*(-1000000+-2000000)} and the area is ${-1000000*-2000000}`)
    });
    it(`console should be called one time for -1000000 and -2000000`, ()=> {
        getRectangleInfo(-1000000, -2000000);
        expect(logSpy).toHaveBeenCalledTimes(1);
    });
});