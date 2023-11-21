  const num = parseInt(prompt("Digite Um Numero Inteiro Positivo"))
  let arr = []
  let divivisivelPorTres = 3
  let divisivelPorCinco = 5
  let ultimoNumeroArray = 0
  let resultadoDivisao = 1

function SomaDivisiveis(){
  for(let i = 0; i < 15; i++){  
       resultadoDivisao =  num / divivisivelPorTres 
    if (resultadoDivisao >= 1 ){
      arr.push(divivisivelPorTres)        
      alert("Todos os Valores Divisíveis (3 ou 5) : " + arr )   
      divivisivelPorTres += 3       
    }         
        resultadoDivisao =  num / divisivelPorCinco
    if (resultadoDivisao > 1 ){
        arr.push(divisivelPorCinco)          
        alert("Todos os Valores Divisíveis (3 ou 5) : " + arr)   
        divisivelPorCinco += 5     
      }    
      }
    }
    SomaDivisiveis()
    
  let somaArray = 0
    for(let j = 0; j < arr.length; j++){
        somaArray = somaArray + arr[j]    
     }
     alert("Soma Dos Divisiveis:" + somaArray)
