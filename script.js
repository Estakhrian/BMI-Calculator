let $ = document
let weightInput = $.querySelector("#weight")
let heightInput = $.querySelector("#height")
let weightVal = $.querySelector("#weight-val")
let heightVal = $.querySelector("#height-val")
let bmiResult = $.querySelector("#result")
let categoryElem = $.querySelector("#category")


function bmiCalculatot () {
    let wieghtInputValue = weightInput.value
    let heightInputValue = heightInput.value

    weightVal.innerHTML = `${wieghtInputValue} kg`
    heightVal.innerHTML = `${heightInputValue} cm`

    //محاسبه بی ام آی
    let bmiValue = (wieghtInputValue / (Math.pow(heightInputValue/100 ,2))).toFixed(1)

    // نمایش نتیجه محاسبه
    bmiResult.innerHTML = bmiValue

    //  نشان دادن وضعیت وزنی کاربر و تغییر رنگ بی ام آی در هر وضعیت وزنی
    if(bmiValue < 18.5) {
        categoryElem.innerHTML ="شما کم وزن هستید"
        bmiResult.style.color = "#ffc44d"

    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        categoryElem.innerHTML = "شما وزن نرمال دارید"
        bmiResult.style.color = "#0be881"

    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        categoryElem.innerHTML = "شما اضافه وزن دارید "
        bmiResult.style.color = "#ff884d"

    }else {
        categoryElem.innerHTML = "شما چاق هستید"
        bmiResult.style.color = "#ff5e4d"
    }

}


// ست کردن ایونت روی اینپوت ها که به ازای هر تغییر در هر اینپوت فانکشن اجرا میشه
//و بی ام آی محاسبه میشه
//برای نشان دادن لحظه ای ولیو اینپوت ها در پروژه 
// به جای ایونت آن چنج از ایونت آن اینپوت باید استفاده بشه

weightInput.addEventListener("input", bmiCalculatot)
heightInput.addEventListener("input", bmiCalculatot)
