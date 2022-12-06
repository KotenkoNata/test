
function append<T>(el:T, list:T[]):T[] {
    return list.concat(el)
}

append(10, [5,6,7])

