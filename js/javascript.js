let ingresoGasto = parseInt(prompt("Si vas a registar ingresos, escribe 1.\nSi vas a registar gastos, escribe 2.\nEscribe 3 para salir."))
let dineroIngresado = 0
let dineroGastado = 0
let balance = 0

while(ingresoGasto!=3){
    switch(ingresoGasto){
        case 1:
            dineroIngresado = parseInt(prompt("Registra tu ingreso (ejemplo: 1500 , 1300)"));
            balance=balance + dineroIngresado; 
            break;

        case 2:
            dineroGastado = parseInt(prompt("Registra tu gasto (ejemplo: 1500 , 1300)"));
            balance=balance - dineroGastado; 
            break;

        default: 
        console.log("Opción no valida.")
        break;
    }
    ingresoGasto = parseInt(prompt("Si vas a registar ingresos, escribe 1.\nSi vas a registar gastos, escribe 2.\nEscribe 3 para salir."))
}

alert("Tu balance es $" + balance)


