class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        if(actualCode === enteredCode.toUpperCase()){
            return true
        }else {
            return false
        }

        //adicionar código para return true se a resposta correta for inserida.
        
    }

}