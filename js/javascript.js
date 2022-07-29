let ingresoGasto = parseInt(prompt("Si vas a registar ingresos, escribe 1.\nSi vas a registar gastos, escribe 2.\nEscribe 3 para salir."))
let dineroIngresado = 0
let dineroGastado = 0
let balance = 0

function sumarIngresos(){
    balance=balance + dineroIngresado
}

function restarGastos(){
    balance=balance - dineroGastado; 

}
while(ingresoGasto!=3){
    switch(ingresoGasto){
        case 1:
            dineroIngresado = parseInt(prompt("Registra tu ingreso (ejemplo: 1500 , 1300)"));
            sumarIngresos();
            break;

        case 2:
            dineroGastado = parseInt(prompt("Registra tu gasto (ejemplo: 1500 , 1300)"));
            restarGastos();
            break;

        default: 
        alert("Opción no valida.")
        break;
    }
    ingresoGasto = parseInt(prompt("Si vas a registar ingresos, escribe 1.\nSi vas a registar gastos, escribe 2.\nEscribe 3 para salir."))
}

alert("Tu balance es $" + balance)


