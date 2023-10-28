let fruta = "laranja"

switch (fruta){
    case "laranja":
    case "melancia":
        console.log("suco de " + fruta)
        break

    case "limão": 
    case "uva":
        console.log("sorvete de" + fruta)
        break

    default:
        console.log("insira uma fruta")
    break
}