$(document).ready(function(){

  $('#btnlogin').click('submit', function(){
      var userdata = {name: $('#uname').val(), password: $('#upass').val()};
      //alert(userdata.name + '');
      $.ajax({
        type: 'POST',
        url: '/login',
        data: userdata,
        success: function(data){
          //do something with the data via front-end framework
          //window.location = '/Questions';
            // $.ajax({
            //   type: 'GET',
            //   url: '/Questions',
            //   success: function(data){
            //       console.log('data came');
            //   }
            // });
          }
        });
      return false;
  });

  $('li').on('click', function(){
      var id = $(this).attr("id");
      $.ajax({
        type: 'DELETE',
        url: '/Users/' + id,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
