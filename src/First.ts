
import {IServer} from './Server'

interface Personz {
    firstName: string,
    lastName: string,
    job?: job, // Optional
    isVisitor?: boolean //Optional
}

type job = 'Engineer' | 'Programmer' 
// | = OR

function generateEmail(person: Personz, force?: boolean): string | undefined{
    /* El compilador es capaz de deducir el retorno, no es obligatorio especificarlo
       Si se especifica el retorno deben coincidir con el tipo retornado si no error */
    // force es un parametro opcional
    if (person.isVisitor && !force){
        return undefined
    } else {
        return `${person.firstName}.${person.lastName}@email.com`
    }
}

function isPerson(potencialPerson: any): boolean{
    return (('firstName' in potencialPerson) && ('lastName' in potencialPerson)) 
}

function printEmailIfPerson(potencialPerson:any): void {
    if (isPerson(potencialPerson)) {
        console.log(generateEmail(potencialPerson))
    } else {
        console.log('Input is not a person')
    }
}

printEmailIfPerson({
    firstName: 'John',
    lastName: 'Doe'
})

async function someAsync() {
    return 'async'
}