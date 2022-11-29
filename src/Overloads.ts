function head(value: string):string;
function head(value: number[]):number;
function head(value: boolean[]):boolean;

function head(value: string | number[] | boolean[]): string | number | boolean {
    return value[0];
}

let x = head([1, 2,3]);
let y = head([true, false])