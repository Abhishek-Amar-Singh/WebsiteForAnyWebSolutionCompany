let nameNode, mobileNode, emailNode, txtAreaNode, errorNode1, errorNode2, errorNode3;

$(function(){
    nameNode = $("#yname");
    mobileNode = $("#phone");
    emailNode = $("#mail");
    txtAreaNode = $("#txtAr");
    errorNode1 = $("#error1");
    errorNode2 = $("#error2");
    errorNode3 = $("#error3");
    errorNode4 = $("#error4");
    let array = [errorNode1,errorNode2,errorNode3,errorNode4];
    for(let node of array) {
        node.css({color:"red", fontStyle:"italic"});
    }
    nameNode.blur(()=>validate1());
    mobileNode.blur(()=>validate2());
    emailNode.blur(()=>validate3());
    txtAreaNode.blur(()=>validate4());
    $("#subForm").submit(()=>validateForm());
});

function validate1() {
    let yname = nameNode.val();
    let regex = new RegExp("^[A-Za-z]*$");
    errorNode1.html("");
    if(yname === ""){
        errorNode1.html("Your name is required");
        nameNode.css("border","2px solid red");
        return false;
    }
    else if(regex.test(yname) == false){
        errorNode1.html("Your name must have only letters");
        nameNode.css({border:"2px solid red"});
        return false;
    }
    else{
        nameNode.css({border:"2px solid green"});
        return true;
    }
}

function validate2() {
    let mobile = mobileNode.val();
    errorNode2.html("");
    let regex=new RegExp("^[0-9]{10}$");
    if(mobile === ""){
        errorNode2.html("Mobile number is required");
        mobileNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(mobile) === false){
        errorNode2.html("Mobile number must be 10 digits number");
        mobileNode.css({border:"2px solid red"});
        return false;
    }
    else{
        mobileNode.css({border:"2px solid green"});
        return true;
    }
}

function validate3() {
    let email = emailNode.val();
    errorNode3.html("");
    if(email === ""){
        errorNode3.html("Email is required");
        emailNode.css({border:"2px solid red"});
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode3.html("Please enter valid email");
        emailNode.css({border:"2px solid red"});
        return false;
    }
    else {
        emailNode.css({border:"2px solid green"});
        return true;
    }
}

function validate4() {
    let msg = txtAreaNode.val();
    errorNode4.html("");
    if(msg === ""){
        errorNode4.html("Cannot leave the field blank");
        txtAreaNode.css({border:"2px solid red"});
        return false;
    }
    else {
        txtAreaNode.css({border:"2px solid green"});
        return true;
    }
}

function validateForm() {
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();
    let v4=validate4();
    return (v1 && v2 && v3 && v4); 
}