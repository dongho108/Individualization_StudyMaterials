//display control 안쪽도 함수로 나누려고 했는데 이상하게 안됨;
//index.html에서는 됐는뎅;
function display_on(targetName){
 document.getElementById(targetName).style.display = 'block';
}
function display_off(targetName){
 document.getElementById(targetName).style.display = 'none';
}
function required_control(value, className){
    var check_count = document.getElementsByClassName("").length;
    if(value === "simul"){


    }
    else if(value === "textbook"){

    }
    else{

    }
}
//교재구분에서 교과서, 모의고사 선택할때 나오는 목록이 달라지게 하는 함수
function display_control(value, className){
    if(value === "simul"){
        document.getElementsByClassName(className)[0].checked = false;
        display_off("upload_form_textbook");
        display_on("upload_form_simul");

    }
    else if(value === "textbook"){
        document.getElementsByClassName(className)[1].checked = false;
        display_off("upload_form_simul");
        display_on("upload_form_textbook");
    }
    else{
        display_off("upload_form_simul");
        display_off("upload_form_textbook");
    }

 //    공통 카테고리 display control
    var check_count = document.getElementsByClassName("upload_form_common").length;
    for(var i=0; i<check_count; i++){
        document.getElementsByClassName("upload_form_common")[i].style.display = "block";
    }

}


//종류에서 손필기, 지문등록 두가지 중에서 선택할때 나오는 목록 달라지게 하는 함수
function display_change(value){
    //손필기 선택
    if(value === "handmade"){
            document.getElementById("simul_file").style.display = 'block';
            document.getElementById("simul_text").style.display = 'none';
        }
    else{
        document.getElementById("simul_file").style.display = 'none';
        document.getElementById("simul_text").style.display = 'block';
    }
}
//max 범위조정
function change_max(value){
    for(var i=1; i<value; i++){
        document.getElementById("selected_max").options[i].style.display = 'none';
    }
    for(var i=value; i<17; i++){
        document.getElementById("selected_max").options[i].style.display = 'block';
    }
}
function filtering_submit(){
    var check_textbook = document.getElementsByClassName("book_check")[0];
    var check_simul = document.getElementsByClassName("book_check")[0];

}
