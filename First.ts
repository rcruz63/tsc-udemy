
interface Person {
    firstName: string,
    lastName: string,
    job?: job, // Optional
    isVisitor?: boolean
}

type job = 'Engineer' | 'Programmer' 
// | = OR

function generateEmail(input: Person, force?: boolean): string | undefined{
    /* El compilador es capaz de deducir el retorno, no es obligatorio especificarlo
       Si se especifica el retorno deben coincidir con el tipo especificado si no error */
    // force es un parametro opcional
    if (input.isVisitor && !force){
        return undefined
    } else {
        return `${input.firstName}.${input.lastName}@email.com`
    }
}

console.log(generateEmail({
    firstName: 'John',
    lastName: 'Doe',
    isVisitor: true
}, true));