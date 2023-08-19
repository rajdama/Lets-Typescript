
// function addTwo(num){  !!!!wrong way!!!! 
//     return num+2
// }

function addTwo(num:number): number{ // right way
    return num+2
}

addTwo(5)

function signUp(name: string, email: string, isPaid:true){
    return 1
}
signUp("raj","raj@gmail",true)

let arr = [1,2,3]

arr.map((val):number=>{   //map already knows return type explicitly
    return val+1
})

function consoleError(errmsg: string): void{ // returning void instance
    console.log(errmsg)
}

function handleError(errmsg: string): never{ // never returns. used to handle errors
    throw new Error(errmsg)
}

export{}