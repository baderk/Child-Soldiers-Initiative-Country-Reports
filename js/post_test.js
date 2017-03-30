function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
});
return vars;
 }




var postData = {
                "title": 'NEW PAGE TITLE',
                "content": 'HELLO',
                "status": 'publish'
            };



var access_token, refresh_token;
var code = getUrlVars()["code"];



// function sendToken() {
//    // console.log('worked?');
//   $.ajax({
//     method: 'POST',
//     url: 'http://dev-countryreportapp.pantheonsite.io/oauth/token',
//     data: {
//       grant_type: 'authorization_code',
//       code: code,
//       redirect_uri: 'http://web.cs.dal.ca/~kanawati/Child-Soldiers-Initiative-Country-Reports/redirect.html',
//       client_id: '7pxS2cteisV4hSzUYlAFoVzfbcst5z',
//       client_secret: 'rdYY60azes2axk37e2sOHRKg6Vtypz'
//     },
//     //dataType: 'jsonp',
//     success: function(data) {
//       console.log('worked?');
//       if( data.error ) {
//         alert(data.error);
//       } else {
//         // window.localStorage.setItem('access_token', data.access_token);
//         // window.localStorage.setItem('refresh_token', data.refresh_token);
//         // access_token = window.localStorage.getItem('access_token');
//         // refresh_token = window.localStorage.getItem('refresh_token');
//       }
//     },
//     error: function(a,b,c) {
//       console.log(a,b,c);
//     }
//   });
// }



function createPost(){
  window.alert(code);
  $.ajax({
    url: 'http://localhost:8081/publishpost',
    method: 'POST',
    data: {
      title: document.getElementById(),
      content: docuemnt.get.
      status: "publish";
    },
    crossDomain: true,
    contentType: 'application/x-www-form-urlencoded',
    beforeSend: function ( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer ' + code );
    },
    success: function( data ) {
        console.log( data );
    },
    error: function( error ) {
        console.log( error );
    }
  });
}