var goodsName = document.getElementsByClassName('goodsName')
var goodsImgName1 = document.getElementsByClassName('goodsImgName1')
var goodsImgName2 = document.getElementsByClassName('goodsImgName2')
var goodsPrice = document.getElementsByClassName('goodsPrice')
var goodsFormRow = document.getElementsByClassName('goodsFormRow')
$(document).ready(function () {
    $('.goodsName').attr('disabled', 'true')
    $('.goodsImgName1').attr('disabled', 'true')
    $('.goodsImgName2').attr('disabled', 'true')
    $('.goodsPrice').attr('disabled', 'true')
});

function initBtn() {

    var initgoodsFormRow = `<div id="goodsFormRowBox" class="goodsFormRow">
    <p id="goodsId">1.</p>
    <input class="goodsName" type="text" style="margin-right: 4%;" value="Sauvage Parfum">
    <input class="goodsImgName1" type="text" style="width: 10%;margin-right: 1%;"
        value="picture/product2-1.jpg">
    <input class="goodsImgName2" type="text" style="width: 10%;margin-right: 3%;"
        value="picture/product2-1.jpg">
    <input class="goodsPrice" type="text" value="3,790" style="margin-right: 0.5%;">
    <input class="goodsStock" type="text" value="25" style="margin-right: 3%;">
    <button type="button" style="    margin-right: 3%;
    border: 1px solid lightgray;
    padding: 10px;
    font-size: 17px;
    outline: none;
    width: 5%;" onclick="deleteBtn()">刪除</button>
    <button type="button" style="
    border: 1px solid lightgray;padding: 10px;font-size: 17px;outline: none;width: 5%;" onclick="changeBtn()">修改</button>
</div>`
    $('#goodsFormBox').append(initgoodsFormRow);
}

function deleteBtn() {
    var goodsFormRow = document.getElementById('goodsFormRowBox')
    goodsFormRow.remove();
}

function changeBtn() {
    console.log(goodsName)
    for (i = 0; i <= goodsName.length; i++) {
        console.log(goodsName[i].disabled)
        console.log(goodsImgName1[i].disabled)
        if (goodsName[i].disabled) {
            goodsName[i].disabled = false
        } else {
            goodsName[i].disabled = true
        }
        if (goodsImgName1[i].disabled) {
            goodsImgName1[i].disabled = false
        } else {
            goodsImgName1[i].disabled = true
        }
        if (goodsImgName2[i].disabled) {
            goodsImgName2[i].disabled = false
        } else {
            goodsImgName2[i].disabled = true
        }

        if (goodsPrice[i].disabled) {
            goodsPrice[i].disabled = false
        } else {
            goodsPrice[i].disabled = true
        }

    }
}