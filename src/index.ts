import { getInput }  from "@actions/core"

const inputName = getInput("greetName")

function greet(greetName: string)
{
    console.log(`'Hello ${greetName}'`)

}