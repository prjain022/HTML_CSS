//to stop from inspecting the code
document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
})

//keycode 73 is for i , 85 is for u , 123 for f12 , 74 for j and 67 for c
document.addEventListener("keydown",(e)=>{
    if(e.ctrlKey && e.shiftKey && e.keyCode==73)
    {
        e.preventDefault();
    }
    else if(e.ctrlKey && e.keyCode==85)
    {
        e.preventDefault();
    }
    else if(e.keyCode==123)
    {
        e.preventDefault();
    }
    else if(e.ctrlKey && e.shiftKey && e.keyCode==74)
    {
        e.preventDefault();
    }
    else if(e.ctrlKey && e.shiftKey && e.keyCode==67)
    {
        e.preventDefault();
    }
})

//hamburger menu open and close
const open_menu = ()=>{
    let menu_div = document.getElementsByClassName("menuitems")[0];
    menu_div.style.opacity="1";
    menu_div.style.height="50vh";
    document.getElementById("menu").style.display="none";
    document.getElementById("close").style.display="block";
    menu_div.addEventListener("transitionend",()=>{
        menu_div.firstElementChild.style.opacity="1";
    })
}

const close_menu = ()=>{
    let menu_div = document.getElementsByClassName("menuitems")[0];
    menu_div.addEventListener("transitionstart",()=>{
        menu_div.firstElementChild.style.opacity="0";
    })
    menu_div.style.opacity="0";
    menu_div.style.height="0";
    document.getElementById("menu").style.display="block";
    document.getElementById("close").style.display="none";
}

//title of html document
let title_of_doc = document.title;
        if(title_of_doc=="Index Page"){
            title_of_doc="./index.html";
        }
        else if(title_of_doc=="About Page"){
            title_of_doc="./about.html";
        }
        else{
            title_of_doc="./services.html";
        }

    // Send Message
    const send = ()=>{
    let full_name = document.getElementById("name").value;
    full_name = full_name.trim();
    let name_pattern = /[A-Za-z ]{3,}/;
    let email = document.getElementById("email").value;
    email = email.trim();
    let pos_of_at_sign = email.indexOf("@");
    let prev_char = email.charAt(pos_of_at_sign-1);
    let email_patt = /[0-9A-Za-z._]{1,}@[A-Za-z]{3,}.[a-zA-Z.]{2,3}[A-Za-z]{2,3}/;
    let subject = document.getElementById("subject").value;
    subject = subject.trim();
    let msg = document.getElementById("message").value;
    msg = msg.trim();
    let msg_patt = /[A-Z a-z.0-9;''""!@#$?%^&*()<>_+-:,{}\][`~]{40,}/;
    let flag = true;
    if(full_name=="" || email=="" || subject=="" || msg=="")
    {
        swal({
            title:"Oops !",
            text:"Any Field Cannot Be Empty",
            icon:"error",
            button:"Ok",
        });
        flag=false;
    }
    else{
        if(!full_name.match(name_pattern))
        {
            swal({
                title:"Oops !",
                text:"Name Should Contain Atleast 3 Characters",
                icon:"error",
                button:"Ok",
            });
            flag=false;
        }
        if(!email.match(email_patt))
        {
            swal({
                title:"Oops !",
                text:"Wrong Email Format",
                icon:"error",
                button:"Ok",
            });
            flag=false;
        }
        if(prev_char=='_' || prev_char=='.')
        {
            swal({
                title:"Oops !",
                text:"No Special Character Allowed Before @",
                icon:"error",
                button:"Ok",
            });
            flag=false;
        }
        if(email.charAt(email.length-1)=='.')
        {
            swal({
                title:"Oops !",
                text:"Wrong Email Format",
                icon:"error",
                button:"Ok",
            });
            flag=false;
        }
        if(!msg.match(msg_patt))
        {
            swal({
                title:"Oops !",
                text:"Message Should Contain Atleast 40 Characters",
                icon:"error",
                button:"Ok",
            });
            flag=false;
        }
    }
    if(flag==true)
    {
        // document.getElementById("send-btn").type="submit";
        swal({
            title:"Congratulations !",
            text:"Message Has Been Sent , You will hear from us shortly",
            icon:"success",
            button:"Ok",
        }).then(()=>{
            window.location.href=title_of_doc;
        });
    }
}

//subscribe newsletter
const subscribe_nl = ()=>{
    let email = document.getElementById("footer-mail").value;
    email = email.trim();
    let pos_of_at_sign = email.indexOf("@");
    let prev_char = email.charAt(pos_of_at_sign-1);
    let email_patt = /[0-9A-Za-z._]{1,}@[A-Za-z]{3,}.[a-zA-Z.]{2,3}[A-Za-z]{2,3}/;   
    let flag = true;
    // if(email=="")
    // {
    //     alert("Field Cannot Be Empty");
    // }
    if(!email.match(email_patt))
    {
        swal({
            title:"Oops !",
            text:"Wrong Email Format",
            icon:"error",
            button:"Ok",
        });
        flag=false;
    }
    if(prev_char=='_' || prev_char=='.')
    {
        swal({
            title:"Oops !",
            text:"No Special Character Allowed Before @",
            icon:"error",
            button:"Ok",
        });
        flag=false;
    }
    if(email.charAt(email.length-1)=='.')
    {
        swal({
            title:"Oops !",
            text:"Wrong Email Format",
            icon:"error",
            button:"Ok",
        });
        flag=false;
    }
    if(flag==true)
    {
        swal({
            title:"Congratulations !",
            text:"You have successfully subscribed to our Newsletter",
            icon:"success",
            button:"Ok",
        }).then(()=>{
            window.location.href=title_of_doc;
        });
    }   
}