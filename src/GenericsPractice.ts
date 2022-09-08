

function returnKeys<T extends Object>(arg: T){
    console.log(Object.keys(arg))
    return arg;
}

const a = returnKeys({
    abc: 'def'
})

interface People<T> {
    name: string,
    age: number,
    special: T
}

const John: People<string> = {
    name: 'Juan',
    age: 23,
    special: "This is my special property"
}

class Observable <T extends People<string>>{
    subscribe (arg: T){
        console.log(`Subscribed to ${arg.name}`)
    }
}

new Observable<typeof John>().subscribe(John)