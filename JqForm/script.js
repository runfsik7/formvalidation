$(document).ready(function(){
    $('.questionTab').mouseenter(function(){
        $('.shortHint').show();
    });

    $('.questionTab').mouseleave(function(){
        $('.shortHint').hide();
    });

    $.validator.addMethod(
            "regex",
            function(value, element, regexp) {
                var re = new RegExp(regexp);
                return this.optional(element) || re.test(value);
            },
            "You must enter a valid ZHA number!"
    );


    $("#ContactForm").validate({
                rules: {
                    fName: "required",
                    lName: "required",
                    title: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    zha:  { required: true, regex : /^([ZHA])+([0-9]{6})+$/, minlength: 9},
                    phone: {
                        required: false
                    }
                },
                messages: {
                    fName: "Please enter your firstname",
                    lName: "Please enter your lastname",
                    email: "Please enter a valid email address",
                    title: "Please select a title!",
                    zha: "You must enter a valid ZHA number!"

                }
    });
});