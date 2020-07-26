function display_on(name){
  var selection = document.getElementById(name);
  selection.style.display = 'block';
}
function display_off(name){
  var selection = document.getElementById(name);
  selection.style.display = 'none';
}
function display_select_value(select_obj){
  var selected_index = select_obj.selectedIndex;
  var selected_value = select_obj.options[selected_index].value;

  //교과서 선택
  if(selected_value === "textbook"){
    display_on("textbook");
    display_off("simul");
  }
  //모의고사 선택
  else if(selected_value === "simul"){
    display_on("simul");
    display_off("textbook");
  }
  //미선
  else{
    display_off("simul");
    display_off("textbook");

  }
};
var index_file = 1;


function refresh_order(){
  var check_count = document.getElementsByClassName("file_order").length;

  for(var i=0; i<check_count; i++){
    document.getElementsByClassName("file_order")[i].textContent = i+1;
  }


}
function remove_download(){
  var check_count = document.getElementsByClassName("checked_file_list").length;
  $(".checked_file_list").remove();
  index_file = index_file - check_count;
  refresh_order();
}

// var selected_index = select_obj.selectedIndex;
// var selected_value = select_obj.options[selected_index].value;
//
// //교과서 선택
// if(selected_value === "textbook"){
//   display_on("textbook");
//   display_off("simul");
// }

function add_download_list_dropdown(name){
  var targetNode = document.getElementById(name);
  var selected_index = targetNode.selectedIndex;
  return targetNode.options[selected_index].value;

}
function add_download_list_checkbox(name, newTR, td){
  var check_count = document.getElementsByClassName(name).length;
  for(var i=0; i<check_count; i++){
    if(document.getElementsByClassName(name)[i].checked === true){
      // newTR = document.createElement("tr");
      var tem_td = document.getElementsByClassName(name)[i].value;
      document.getElementsByClassName(name)[i].checked=false;
      return tem_td;
    }
  }

  // var check_count = document.getElementsByClassName(name).length;
  // for(var i=0; i<check_count; i++){
  //   if(document.getElementsByClassName(name)[i].checked === true){
  //     // newTR = document.createElement("tr");
  //     var tem_td = document.getElementsByClassName(name)[i].value;
  //     return tem_td;
  //   }
  // }
}
var newTR;
var td="";

function handdle_checkbox_change(checkNode){

  var childNode = checkNode.parentElement;//td
  var targetNode = childNode.parentElement;//tr
  var parent = targetNode.parentElement;//table


  if(checkNode.checked === true)
    targetNode.setAttribute("class", "checked_file_list");
  else{
    targetNode.setAttribute("class", "not_checked_file_list");
  }
}

function add_download(){
  newTR.innerHTML = `<td class="file_order">${index_file}</td> <td>${td}</td> <td><input type="checkbox" onchange="handdle_checkbox_change(this);" class="download_file_list" /></td>`;
  var p = document.getElementById("file_table");
  p.appendChild(newTR);
  index_file++;
}

function all_checkbox_off(name){
  var check_count = document.getElementsByClassName(name).length;
  for(var i=0; i<check_count; i++){
    document.getElementsByClassName(name)[i].checked=false;
  }
}
function all_checkbox_on(name){
  var check_count = document.getElementsByClassName(name).length;
  for(var i=0; i<check_count; i++){
    document.getElementsByClassName(name)[i].checked=true;
  }
}
function check_count_list(name){
  var check_count = document.getElementsByClassName(name).length;
  var check_count_real = 0;
  for(var i=0; i<check_count; i++){
    if(document.getElementsByClassName(name)[i].checked==true)
      check_count_real++;
  }
  return check_count_real;
}

function add_download_textbook(){
  var check_count = check_count_list("type_list");
  for(var i=0; i<check_count; i++){
    newTR = document.createElement("tr");
    td = `${td}${add_download_list_dropdown("publisher")}`;
    td = `${td}-${add_download_list_dropdown("textbook_type")}`;

    // td = `${td}${add_download_list("grade", newTR, td)}`;
    // td = `${td}-${add_download_list("year", newTR, td)}`;
    // td = `${td}-${add_download_list("month", newTR, td)}`;
    td = `${td}-${add_download_list_checkbox("type_list", newTR, td)}`;
    add_download();
    td="";
  }
  all_checkbox_off("type_list");
}


function add_download_simul(){
  var check_count = check_count_list("type_list");
  for(var i=0; i<check_count; i++){
    newTR = document.createElement("tr");
    td = `${td}${add_download_list_dropdown("grade")}`;
    td = `${td}-${add_download_list_dropdown("year")}`;
    td = `${td}-${add_download_list_dropdown("month")}`;

    // td = `${td}${add_download_list("grade", newTR, td)}`;
    // td = `${td}-${add_download_list("year", newTR, td)}`;
    // td = `${td}-${add_download_list("month", newTR, td)}`;
    td = `${td}-${add_download_list_checkbox("type_list", newTR, td)}`;
    add_download();
    td="";
  }
  // newTR = document.createElement("tr");
  // td = `${td}${add_download_list_dropdown("grade")}`;
  // td = `${td}-${add_download_list_dropdown("year")}`;
  // td = `${td}-${add_download_list_dropdown("month")}`;
  //
  // // td = `${td}${add_download_list("grade", newTR, td)}`;
  // // td = `${td}-${add_download_list("year", newTR, td)}`;
  // // td = `${td}-${add_download_list("month", newTR, td)}`;
  // td = `${td}-${add_download_list_checkbox("type_list", newTR, td)}`;
  // add_download();
  // td="";
  all_checkbox_off("type_list");

}
