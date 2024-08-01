const fibo = (num) => {
    const output = [0,1]
    for(i=0; i<num-2; i++) {
        output.push(output[i] + output[i+1])
        // console.log(output)
    }
    return output
}

console.log(fibo(8))