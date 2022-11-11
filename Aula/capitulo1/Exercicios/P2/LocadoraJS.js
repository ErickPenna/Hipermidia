window.onload = () => {

    const form = document.getElementById("formulario");


    form.onsubmit = (e) =>{

        const cidadeEntrega  = document.getElementById("cidade-entrega").value;
        const cidadeRetirada  = document.getElementById("cidade-retirada").value;
        const tipoCarro  = document.getElementById("tipo-carro").value;
        const dataRetirada = new Date(document.getElementById("data-retirada").value).getTime();
        const dataEntrega =  new Date(document.getElementById("data-entrega").value).getTime();
        const diferencaMS = new Date(dataEntrega) - new Date (dataRetirada)
        const diferencaDia = diferencaMS / (1000*60*60*24);

        const precoTipoCarro = { 
            basico: 119,
            ar: 199,
            executivo: 299
        };

        let preco = precoTipoCarro[tipoCarro] * diferencaDia
        if(cidadeRetirada !== cidadeEntrega){
            preco += 300;
        }

        alert(`O custo do aluguel será R$ ${preco}`);
    }
}