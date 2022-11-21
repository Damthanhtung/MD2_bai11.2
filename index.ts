function numberOfOccurrences(number: number[],value: number) :void {
    let count: number = 0;
    for ( let i=0; i<number.length; i++ ) {
        if (number[i]==value) {
            count++;
        }
    }
    if (count !==0) {
        console.log(`Phần tử ${value} xuất hiện ${count} lần`)
    }
    else {
        console.log(`Phần tử ${value} không xất hiện trong mảng`)
    }
}
let number: number[] = [1,2,2,2,3,4,5]
numberOfOccurrences(number,2);




