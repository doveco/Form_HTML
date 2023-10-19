document.getElementById("enviando").addEventListener("click", concatenar);

var objeto;
var lista = [];

function concatenar() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var estadoCivil = document.getElementById("estadoCivil").value;

    if (nome && idade && estadoCivil) {
        objeto = {
            nome: nome,
            idade: idade,
            estadoCivil: estadoCivil
        };
        
        lista.push(objeto);

        console.log(lista);

        document.getElementById("olharConsole").innerHTML = `O seu nome é ${nome}, sua idade é ${idade} e
         seu estado civil é ${estadoCivil}. O OBJETO foi criado no console.`;
    } else {
        alert("Preencha todos os campos!");
    }
}

document.getElementById("imprimindo").addEventListener("click", imprimir);

function imprimir() {
    if (lista) { 
        lista.map(nome => {
            console.log(nome.nome);
        });
        
        document.getElementById("olharConsole2").innerHTML = `Os elementos foram listados no console.`;

    } else {
        console.log("A lista ainda não foi criada.");
        document.getElementById("olharConsole2").innerHTML = `A lista ainda não foi criada.`;
    }
}

