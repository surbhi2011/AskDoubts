$(document).ready(function(){

  $('#btnsubmit').click('submit', function(){

      var adata = {aname: $('#aname').val(), adetail: $('#adetail').val(),aqid: '5c2a7a79fb76224a5087c945', auid: '5c29e3507b73703bec63a1f9', alike: 0, adislike: 0};
      $.ajax({
        type: 'POST',
        url: '/Answers',
        data: adata,
        success: function(data){
          //do something with the data via front-end framework
          alert('data');
          //location.reload();
        }
      });
      return false;
  });

  $('li').on('click', function(){
      var id = $(this).attr("id");
      $.ajax({
        type: 'DELETE',
        url: '/Answers/' + id,
        success: function(data){
          //do something with the data via front-end framework
          alert('deleted');
          //location.reload();
        }
      });
  });

});
