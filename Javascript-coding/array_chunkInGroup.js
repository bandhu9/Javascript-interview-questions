
const input = [1,2,3,4,5,6,7,8]

const chunkArray = (input, size) => {
    var tempOutput = []
const output = [];

    for(i=0; i<input.length; i++) {

        if(tempOutput.length < size){
            // console.log(tempOutput)
                    // console.log(i,'--->', )

            tempOutput.push(input[i])
                        // console.log('---',tempOutput)

        } else {
        output.push(tempOutput);
        // console.log(i,'--->', output)
        tempOutput = []
        }
    }
        return output;

    
}
// console.log(chunkArray(input, 3))


// ---------------------------------------------------------


const input1 = [1,2,3,4,5,6,7,8]

const chunkArray1 = (input1, size) => {
    const temp = []
    while(input1.length > 0){
        // console.log(input.length)
        temp.push(input1.splice(0,size))
        // console.log(input1)
    }
    return temp;
}
console.log(chunkArray1(input, 2))

// console.log(input.splice(0,2), input)

