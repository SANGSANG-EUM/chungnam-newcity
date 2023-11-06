$(document).ready(function() {

    var _fin = $('.wrapper > .container > .right table tbody tr.fin').length
    var _del = $('.wrapper > .container > .right table tbody tr.del').length
    var _total = $('.wrapper > .container > .right table tbody td.btn a').length
    var _total_page = _total - _del

    $('.projectTit .counter .fin').text(_fin)
    $('.projectTit .counter .total').text(_total_page)

    var ing_percent = _fin / _total_page *100
    var _percent =  Math.round(ing_percent);

    $('.projectTit .counter .percent').text(_percent);

    $('.openDevLog').on('click', function() {
        $(this).toggleClass('is-active')
        $('.wrapper > .container').toggleClass('is-active')
    });

});
function PopWin(url, w, h, sb) {
    var newWin;
    var setting = "width="+w+", height="+h+", top=50, left=50, scrollbars="+sb;
    newWin = window.open (url, "", setting);
    newWin.focus();
}