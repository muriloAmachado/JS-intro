
        var operator = parseInt(prompt(`Digite a opção de operação que deseja:\n1 - adição\n2 - subtração\n3 - multiplicação\n4 - divisão\n`));
        var number = 0;
        var operatorNumber = [];
        var result = 0;

        if (isNaN(operator)){
            alert('Digite apenas números!!');
            location.reload();
        }

        else{

            for(i=1; i < 3; i++){
                let number = parseInt(prompt(`Digite o ${i}º número.`));

                if(isNaN(number)){
                alert('Digite apenas números!!');
                i--;
                }

                else{
                    operatorNumber.push(number)
                } 
            }

            switch(operator){
                case 1:
                    sumNumber()
                    break;
            
                case 2:
                    subNumber()
                    break;
            
                case 3:
                    multNumber()  
                    break;
            
                case 4:
                    divNumber()
                    break;
            }

    }

        function sumNumber(){
            result=operatorNumber[0]+operatorNumber[1];
            alert(`O resultado da operação é: ${result}`);
        }

        function subNumber(){
            result=operatorNumber[0]-operatorNumber[1];
            alert(`O resultado da operação é: ${result}`);
        }

        function multNumber(){
            result=operatorNumber[0]*operatorNumber[1];
            alert(`O resultado da operação é: ${result}`);
        }

        function divNumber(){
            result=operatorNumber[0]/operatorNumber[1];
            alert(`O resultado da operação é: ${result}`);
        }