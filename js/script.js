$(document).ready(function(){
    
    $("#submit-form").validate({
        
        rules:{
            fname:{
                required:true,
                minlength:4,
                
               
            },
            fmail:{
                required:true,
                email:true
            },
            fsubject:{
                required:true,
                minlength:4
                
            },
            fmessage:{
                required:true,
                
                
            }

        },
        messages:{
            fname:{
                required:"Enter your name",
                

            },
            fmail:{
                required:"Email is Mandatory",
                email:"Please enter valid email"
                        
            },
            fsubject:{
                required:"Please enter Subject"
            },
            fmessage:{
                required:"please leave a Message"
            }
        }

       

    })
})