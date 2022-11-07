import { getRectangleArea } from "../js/rectangle";

//zero case 

test(`test for rectangle area of 0 and 0`, ()=>{
    const rectangle = getRectangleArea(0, 0);
    expect(rectangle).toBe(0*0);
});

//positive numbers

test(`test for rectangle area of 0 and 20000000`, ()=>{
    const rectangle = getRectangleArea(0, 2000000);
    expect(rectangle).toBe(0*2000000);
});

test(`test for rectangle area of 9000000 and 20000000`, ()=>{
    const rectangle = getRectangleArea(9000000, 2000000);
    expect(rectangle).toBe(9000000*2000000);
});

//negative numbers

test(`test for rectangle area of 0 and -20000000`, ()=>{
    const rectangle = getRectangleArea(0, -2000000);
    expect(rectangle).toBe(0*-2000000);
});

test(`test for rectangle area of -1000000 and 2000000`, ()=>{
    const rectangle = getRectangleArea(-1000000, 2000000);
    expect(rectangle).toBe(-1000000*2000000);
});

test(`test for rectangle area of -1000000 and -2000000`, ()=>{
    const rectangle = getRectangleArea(-1000000, -2000000);
    expect(rectangle).toBe(-1000000*-2000000);
});