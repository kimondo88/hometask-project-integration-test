import { getRectanglePerimeter } from "../js/rectangle";

//zero case

test(`test for perimeter of rectangle of 0 and 0`, ()=>{
    const rectangle = getRectanglePerimeter(0, 0);
    expect(rectangle).toBe(0);
})

//positive numbers case

test(`test for perimeter of rectangle of 0 and 2000000`, ()=>{
    const rectangle = getRectanglePerimeter(0, 2000000);
    expect(rectangle).toBe(2*(0+2000000));
})

test(`test for rectangle area of 9000000 and 20000000`, ()=>{
    const rectangle = getRectanglePerimeter(9000000, 2000000);
    expect(rectangle).toBe(2*(9000000+2000000));
});

//negative numbers case

test(`test for perimeter of rectangle of -1000000 and 2000000`, ()=>{
    const rectangle = getRectanglePerimeter(-1000000, 2000000);
    expect(rectangle).toBe(2*(-1000000+2000000));
})

test(`test for perimeter of rectangle of -1000000 and -2000000`, ()=>{
    const rectangle = getRectanglePerimeter(-1000000, -2000000);
    expect(rectangle).toBe(2*(-1000000-2000000));
})

