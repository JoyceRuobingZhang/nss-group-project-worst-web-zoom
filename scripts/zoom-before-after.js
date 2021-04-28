$(".before_page").fadeOut(100);
$(".after_page").fadeOut(100);


$(".before").click(function() {
    $(".main_page").fadeOut(2000);
    $(".before_page").fadeIn(2000);
})
$(".before_bottom").click(function() {
    $(".before_page").fadeOut(1500);
    $(".main_page").fadeIn(1000);
})

$(".after").click(function() {
    $(".main_page").fadeOut(1500);
    $(".after_page").fadeIn(2000);
})

$(".after_bottom").click(function() {
    $(".after_page").fadeOut(1500);
    $(".main_page").fadeIn(1000);
})