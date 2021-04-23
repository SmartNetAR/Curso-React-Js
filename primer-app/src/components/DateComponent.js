import React from "react";

function DateComponent(props){
    
    let fechaInicioAño = new Date("2021/1/1");

    let aFecha1 = props.fecha.split('/');
    let fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
    
    let resta = (  fFecha1 - fechaInicioAño.getTime() );

    let diasRestantes = Math.round( resta / (1000 * 60 * 60 * 24));
 
    return(
        <div>

            <h1>Pasaron { diasRestantes.toString() } del inicio del año hasta hoy </h1>
            
        </div>
    );
}

export default DateComponent;