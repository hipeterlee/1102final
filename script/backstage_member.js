var memberName =document.getElementsByClassName('memberName')
var memberMail=document.getElementsByClassName('memberMail')
var memberPassword=document.getElementsByClassName('memberPassword')
var memberGender=document.getElementsByClassName('memberGender')
var memberBirth=document.getElementsByClassName('memberBirth')
var memberFormRow =document.getElementsByClassName('memberFormRow')
$(document).ready(function(){
    $('.memberName').attr('disabled','true')
    $('.memberMail').attr('disabled','true')
    $('.memberPassword').attr('disabled','true')
    $('.memberGender').attr('disabled','true')
    $('.memberBirth').attr('disabled','true')
    $('.goTopBox').hide(); 
});
function initBtn(){
   
    var initmemberFormRow = ` 
    <div id="memberFormRowBox" class="memberFormRow">
        <p id="memberId"></p>
        <input class="memberName" type="text" style="margin-right: 4.5%;" value="金泰亨" >
        <input class="memberMail" type="email" style="width: 15%;margin-right: 5.5%;" value="20200222@gmail.com">
        <input class="memberPassword" type="password" value="123123123123123" style="margin-right: 6%;">
        <input class="memberGender" type="text" value="男" style="margin-right: 4%;">
        <input class="memberBirth" type="text" value="2000/10/15" style="margin-right: 3%;">
        <button type="button" style="    margin-right: 3%;
        border: 1px solid lightgray;
        padding: 10px;
        font-size: 17px;
        outline: none;
        width: 5%;" onclick="deleteBtn()">刪除</button>
        <button type="button" style="
        border: 1px solid lightgray;
        padding: 10px;
        font-size: 17px;
        outline: none;
        width: 5%;" onclick="changeBtn()">修改</button>
    </div>
    
`
    $('#memberFormBox').append(initmemberFormRow);        
}
function deleteBtn(){
    var memberFormRow = document.getElementById('memberFormRowBox')
    console.log($(memberFormRow))
    memberFormRow.remove(); 
}
function changeBtn() {
   console.log(memberName)
   for(i=0;i<=memberName.length;i++){
    console.log(memberName[i].disabled)
    console.log(memberMail[i].disabled)
        if(memberName[i].disabled){
            memberName[i].disabled=false
        }
        else{
            memberName[i].disabled=true
        }
        if(memberMail[i].disabled){
            memberMail[i].disabled=false
        }
        else{
            memberMail[i].disabled=true
        }
        if(memberPassword[i].disabled){
            memberPassword[i].disabled=false
        }
        else{
            memberPassword[i].disabled=true
        }
        if(memberGender[i].disabled){
            memberGender[i].disabled=false
        }
        else{
            memberGender[i].disabled=true
        }
        if(memberBirth[i].disabled){
            memberBirth[i].disabled=false
        }
        else{
            memberBirth[i].disabled=true
        }
    }
}


