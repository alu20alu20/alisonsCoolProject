$('#deathcab').click(function() {
    $('#dcsound').get(0).paused ? $('#dcsound').get(0).play() : $('#dcsound').get(0).pause();
});

$('#sleeping').click(function() {
    $('#ssound').get(0).paused ? $('#ssound').get(0).play() : $('#ssound').get(0).pause();
});

$('#am-i-wrong').click(function() {
    $('#aiwsound').get(0).paused ? $('#aiwsound').get(0).play() : $('#aiwsound').get(0).pause();
});

$('#canwedance').click(function() {
    $('#cwdsound').get(0).paused ? $('cwdsound').get(0).play() : $('#cwdsound').get(0).pause();
});