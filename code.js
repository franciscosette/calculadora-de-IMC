
    const calculaImc = () => {


        let peso = document.getElementById("texto-do-peso").value;
        let altura = document.getElementById("texto-da-altura").value;
        if (peso && altura) {
            console.log("seu peso é igual a ", peso);
            console.log("sua altura é igua a ", altura);

            let imc = peso / (altura * altura);
            console.log("seu imc é igual a", imc.toFixed(1));

            document.getElementById("resultado-do-Imc").innerText = "Seu IMC é igual á " + imc.toFixed(1);
            if (imc < 18.5) {
                document.getElementById("resposta").innerText = "você esta abaixo da sua média demais, melhore sua dieta!";
                console.log("você esta abaixo da sua média demais, melhore sua dieta!")
            }
            else if (imc < 24.9) {
                document.getElementById("resposta").innerText = "você esta com o peso certo, continue asism!";
                console.log("você esta com o peso certo, continue asism!")
            }
            else if (imc < 29.9) {
                document.getElementById("resposta").innerText = "você esta com o peso acima da média, tome cuidado!";
                console.log("você esta com o peso acima da média, tome cuidado!")

            }
            else if (imc < 34.9) {
                document.getElementById("resposta").innerText = "cuidado, você esta com obesidade grau 1, e isso não é bom. Emagreça!";
                console.log("cuidado, você esta com obesidade grau 1, e isso não é bom. Emagreça!")

            } else if (imc < 39.9) {
                document.getElementById("resposta").innerText = "estamos com problemas, você esta com obesidade grau 2, emagreça rápido ou haverá consequencias";
                comsole.log("estamos com problemas, você esta com obesidade grau 2, emagreça rápido ou haverá consequencias")

            } else if (imc > 40.0) {
                document.getElementById("resposta").innerText = "ATENÇÃO, VOCÊ ESTA COM OBESIDADE DE GRAU 3, VOCÊ PRECISA URGENTEMENTE DE ENTRAR EM CONTATO COM UM MÉDICO E DIMINUIR A SUA MASSA CORPORAL";
                console.log("ATENÇÃO, VOCÊ ESTA COM OBESIDADE DE GRAU 3, VOCÊ PRECISA URGENTEMENTE DE ENTRAR EM CONTATO COM UM MÉDICO E DIMINUIR A SUA MASSA CORPORAL")

            }











        } else {
            document.getElementById("resultado-do-Imc").innerText = "Escreva um número válido";
        }
    }