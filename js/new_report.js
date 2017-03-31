tinymce.init({
  selector: 'textarea#content',
  height: 500,
  menubar: false,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table contextmenu paste code'
  ],
  toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
});



function createPost(){
  var title = $('#title')[0].value;
  var content =  tinyMCE.get('content').getContent();
  $.ajax({
    url: '/publishpost',
    method: 'POST',
    data: {
      title: title,
      content: content,
      status: "draft"
    },
    crossDomain: true,
    contentType: 'application/x-www-form-urlencoded',
    success: function( data ) {
      $('#result').html(data);
      $('#result').fadeIn(400).delay(3000).fadeOut(400);
    },
    error: function( error ) {
      $('#result').html(error);
      $('#result').fadeIn(400).delay(3000).fadeOut(400);
      console.log( error );
    }
  });
}
