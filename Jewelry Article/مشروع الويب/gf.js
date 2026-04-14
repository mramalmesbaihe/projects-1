// دالة لعرض المزيد من المعلومات عند النقر على الزر
function showMore(gem, button) {
    const moreText = document.getElementById('${gem}-more');

    // استخدم toggle لإظهار أو إخفاء العنصر
    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");  // إظهار النص
        button.innerText = "less...";  // تغيير النص إلى "less..."
    } else {
        moreText.classList.add("hidden");  // إخفاء النص
        button.innerText = "more...";  // إعادة النص إلى "more..."
    }
}