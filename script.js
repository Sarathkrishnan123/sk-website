$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            EmailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6,
                maxlength:8
            },
            
            day:{
                required:true

            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            Gender:{
                required:true
            }



        },
        messages:{
            fname:{
                required:"Enter the first name"
            },
            Gender:{
                required:"This filed is required"
            },
            day:{
                required:"field is required"
            }
        }
    })
})