$(document).ready(function(){

  $('#btnsubmit').click('submit', function(){

      var qdata = {qname: $('#qname').val(), qdetail: $('#qdetail').val(), quid: '5c29e3507b73703bec63a1f9', qflag: true};
      $.ajax({
        type: 'POST',
        url: '/Questions',
        data: qdata,
        success: function(data){
          //do something with the data via front-end framework
          alert('data' + data);
          //location.reload();
        }
      });
      return false;
  });

  function aclick(id){
      console.log('fun');
      //alert(id);
      $.ajax({
        type: 'GET',
        url: '/Answers',
        // data: {
        //   id: id
        // },
        success: function(data){
          //do something with the data via front-end framework
          alert('answer');
          //location.reload();
        },
        // error: function(){
        //     console.log('hdjs');
        // }
      });
      return false;
  }

  // $('a').on('click', function(){
  //     var id = $(this).attr("id");
  //     $.ajax({
  //       type: 'DELETE',
  //       url: '/Questions/' + id,
  //       success: function(data){
  //         //do something with the data via front-end framework
  //         alert('deleted');
  //         //location.reload();
  //       }
  //     });
  // });

});
