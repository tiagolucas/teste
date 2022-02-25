/* Teste B5S Nível 2 */
/* 
Author Tiago Anderson M. Lucas.
Fone: (44) 998064238
E-mail: tiagolucas1402@gmail.com
*/

/* 
Linguagem usada JAVASCRIPT, juntamente com HTML e CSS
*/

/* Pega o valor digitado do mês do ano */

const mothList = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

/* Chamada da função */
correspondingMoth();

/* Função verifica o mês */

function correspondingMoth() {

const button = document.querySelector('#submit');

    /* Espera o clique no botão para receber o valor */
    button.addEventListener('click', function(e) {
        e.preventDefault();

        const moth = document.querySelector('#moth');
        const value = moth.value;


        /* Verifica se o número digitado é valido, se o valor estiver entre o intervalo de 1 até 12
        o mesmo imprimi o mês referente */        
        if (value < 1 || value > 12) {
            document.querySelector('#mothOfTheYear').innerHTML = `Mês selecionado é ${value} inexistente! Verifique por favor!!!`;

        } else {
            mothOfTheYear = mothList[value - 1];
            document.querySelector('#mothOfTheYear').innerHTML = `O mês de referencia é ${mothOfTheYear}.`;
        };
    });
};

/* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */
/* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */

/* Chamada da função */
arithmeticAverage();

/* Função média aritmética simples */

function arithmeticAverage() {

    const input = document.querySelector('#number');
    const btnAdd = document.querySelector('#add');
    const btnCalc = document.querySelector('#simpleAverage');
    const btnClean = document.querySelector('#clean');
    const arrayNumber = [];

    /* Adiciona valores selecionados no array */
    btnAdd.onclick = function (e) {
        e.preventDefault();

        /* Condição para verificar se o campo esta NaN, se SIM pede para inserir um número, caso contrário inclui o número no array */
        input.value = (input.value == '') ? alert(`O valor ficou NaN(não é um número), o campo não pode ficar em branco!)`) : arrayNumber.push(parseInt(input.value));

        document.querySelector('#number').value = '';
    };

    /* Soma os valores do array e faz a média simples */
    btnCalc.onclick = function (e) {
        e.preventDefault();

        /* Verifica quantos números foi integrados ao array, se menor que 3 número emite um alerta e pede para acrescentar */
        if (arrayNumber.length < 3) {
            alert(`Informe no mínimo 3 valores. Você informou apenas ${arrayNumber.length} número(s).`);
        } else {
            let total= parseInt(arrayNumber.reduce((total, number, indice) => total + number, 0));

            let avg = total / arrayNumber.length;

            /* Mostra vetor na página */
            document.querySelector('#vetor').innerHTML = `Este é o seu vetor de números:<br/>
            [ ${arrayNumber} ].`;

            /* Mostra somo, quantidade e média dos números do vetor */
            document.querySelector('#middleField').innerHTML = `A soma dos valores é ${total}, o total de elemento é ${arrayNumber.length}, e a média corresponde a ${avg.toFixed(2)}`;
        };
    };

    /* Limpa os valores do array deixando pronto para próxima interação */
    btnClean.onclick = function (e) {
        e.preventDefault();

        arrayNumber.length = 0;

        document.querySelector('#number').value = '';

        document.querySelector('#vetor').innerHTML = `Este é o seu vetor de números:<br/>
        [ Sem valor ].`;

        document.querySelector('#middleField').innerHTML = '';
    };
};

/* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */
/* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */

/* Chamada da função */
oddOrEven();

/* Função verifica números par e mostra quantos tem dentro de um array */

function oddOrEven() {

    const input = document.querySelector('#numberOddOrEven');
    const btnAddNum = document.querySelector('#addNumber');
    const btnCheck = document.querySelector('#check');
    const btnCleanOddOrEven = document.querySelector('#cleanOddOrEven');
    const arrayNumberOddOrEven = [];

    /* Adiciona números no array */
    btnAddNum.onclick = function (e) {
        e.preventDefault();

        /* Condição para verificar se o campo esta NaN, se SIM pede para inserir um número, caso contrário inclui o número no array */
        input.value = (input.value == '') ? alert(`O valor ficou NaN(não é um número), o campo não pode ficar em branco!)`) : arrayNumberOddOrEven.push(parseInt(input.value));
    };

    /* Ao clicar no botão VERIFICAR vai ver quais números são pares e somar quantos números tinham */
    btnCheck.onclick = function (e) {
        e.preventDefault();

    let count = 0;
        arrayNumberOddOrEven.map((arrayNumberOddOrEven) => {
            if (arrayNumberOddOrEven % 2 === 0) {
                count++;
            };
        });

        document.querySelector('#vet').innerHTML = `Este é o seu vetor de números:<br/>
        [ ${arrayNumberOddOrEven} ].`;

        document.querySelector('#count').innerHTML = `A quantidade de números par(es) do vetor é igual
        [ ${count} ] valore(s).`;
    };

    /* Limpa os valores do array deixando pronto para próxima interação */
    btnCleanOddOrEven.onclick = function (e) {
        e.preventDefault();

        arrayNumberOddOrEven.length = 0;
        document.querySelector('#numberOddOrEven').value = '';

        document.querySelector('#vet').innerHTML = `Este é o seu vetor de número(s):<br/>
        [ Sem valor ].`;

        document.querySelector('#count').innerHTML = '';
    };
};

/* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */
/* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */
/* Chamada da função */
reverseString();

/* Função que inverte a string que foi digitada */

function reverseString() {

    const input = document.querySelector('#string');
    let btnInverse = document.querySelector('#inverse');

    btnInverse.onclick = function (e) {
        e.preventDefault();

        /* Recebe a string separa ela dentro de um array e inverte a ordem das posições e imprime invertido */
        let string = input.value;
        let splitString = string.split("");
        let answer = splitString.reverse().join("");

        document.querySelector('#stringText').innerHTML = `Esta é a palavra ou texto digitado:<br/>
        [ ${string} ].`;

        document.querySelector('#reverseString').innerHTML = `Esta é a palavra ou texto invertida:<br/>
        [ ${answer} ].`;
    };
};