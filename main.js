let img = document.querySelector('.image');
let container = document.querySelector('.container');

// استعادة الصورة ولون الخلفية من localStorage عند تحميل الصفحة
window.onload = function() {
    const storedColor = localStorage.getItem('backgroundColor');
    const storedImage = localStorage.getItem('phoneImage');

    if (storedColor) {
        container.style.backgroundColor = storedColor; // تغيير لون الخلفية
    }

    if (storedImage) {
        img.src = storedImage; // تغيير الصورة
    }
};

function phones(phone) {
    localStorage.setItem('phoneImage', phone); // تخزين الصورة في localStorage
}

function colors(color) {
    localStorage.setItem('backgroundColor', color); // تخزين اللون في localStorage
    container.style.backgroundColor = color; // تغيير لون الخلفية
}

function changePhoneAndColor(phone, color) {
    phones(phone); // تغيير الصورة
    colors(color); // تغيير لون الخلفية
    setTimeout(() => {
        window.location.reload(); // إعادة تحميل الصفحة بعد التأخير
    }, 50); // إضافة تأخير بسيط لإعطاء فرصة للأنميشن
}

let nav = document.getElementById("nav");
let menu = document.getElementById("menu");

// عند النقر على زر القائمة لفتح/إغلاق القائمة
menu.addEventListener("click", function(event) {
    event.stopPropagation();  // منع تفعيل حدث النقر على document عند النقر على زر القائمة
    nav.classList.toggle("active");  // تبديل الصنف active لفتح/إغلاق القائمة
});

// عند النقر في أي مكان خارج القائمة، يتم إغلاق القائمة
document.addEventListener("click", function(event) {
    if (nav.classList.contains("active") && !nav.contains(event.target)) {
        nav.classList.remove("active");  // إزالة الصنف active لإغلاق القائمة
    }
});
