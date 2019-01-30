$(document).ready(function(){

  $('#btnsubmit').click('submit', function(){

      var userdata = {name: $('#uname').val(), password: $('#upass').val(), email: $('#uemail').val()};
      $.ajax({
        type: 'POST',
        url: '/Users/',
        data: userdata,
        success: function(data){
          //do something with the data via front-end framework
          //location.reload();
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
          //location.reload();
          alert('deleted');
        }
      });
  });

});
