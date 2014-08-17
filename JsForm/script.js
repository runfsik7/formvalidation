function formValidation() {
    var validForm = document.getElementById('ContactForm');

    fields = validForm.querySelectorAll('input[type=text]');
    fieldCount = fields.length;
	defInput = Array;
    
	//recording default input field values
    for(i = 0; i < fieldCount; i++){
        	defInput[i] = fields[i].value;
	}
     

     var hint = document.getElementsByClassName('questionTab')[0];
     var hintText = document.getElementsByClassName('shortHint')[0];
        hint.onmouseover = function(){
        	hintText.style.display = 'block';
        }

        hint.onmouseout = function(){
        	hintText.style.display = 'none';
        }


    function checkEmail() {
    	var email = document.getElementById('email').value;
    	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    	return filter.test(email);
 	}

 	function checkZHA(){
 		var zha = document.getElementById('zha').value;
 		var patt = /^([ZHA])+([0-9]{6})+$/;
		return patt.test(zha);
 	}


     //form validation

    validForm.onsubmit = function(){
    	error = 0;
        CurFields = this.querySelectorAll('input[type=text]');

        formClear = this.getElementsByClassName('formRow').length;

        //remove Invalid class name from formRow

		for(i = 0; i < formClear; i++){
        	this.getElementsByClassName('formRow')[i].className= "formRow";
       	}

        for(i = 0; i < fieldCount; i++){
        	u = i;
        	if(i>1)
        		u = i+1;

        	if(CurFields[i].value === defInput[i]){
        		this.getElementsByClassName('formRow')[u].className += " " + "invalid";
        		if( i != fieldCount-1)
        			error = 1;
        	}

        	if(i == 4){
        		if(!(checkEmail())){
        			this.getElementsByClassName('formRow')[i].className += " " + "invalid";
        			error = 1;
        		}
        	}

        	if(i == 3){
        		if(!(checkZHA())){
        			this.getElementsByClassName('formRow')[i].className += " " + "invalid";
        			error = 1;
        		}
        	}
    	}

    		if(document.getElementById("title").selectedIndex == 0)
    			this.getElementsByClassName('formRow')[2].className += " " + "invalid";

    		if(error == 0){
    			alert('Form has been successfully submitted');
    			this.reset();
    		}



         return false;       

    }
}


window.onload=formValidation;