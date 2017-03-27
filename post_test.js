var access_token, refresh_token;
var code = getUrlVars()["code"];
var state = getUrlVars()["state"]


function sendToken() {
  $.ajax({
    method: 'POST',
    url: 'http://dev-countryreportapp.pantheonsite.io/oauth/token',
    data: {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: '',
      client_id: '7pxS2cteisV4hSzUYlAFoVzfbcst5z',
      client_secret: 'rdYY60azes2axk37e2sOHRKg6Vtypz'
    },
    //dataType: 'jsonp',
    success: function(data) {
      console.log('worked?');
      if( data.error ) {
        alert(data.error);
      } else {
        // window.localStorage.setItem('access_token', data.access_token);
        // window.localStorage.setItem('refresh_token', data.refresh_token);
        // access_token = window.localStorage.getItem('access_token');
        // refresh_token = window.localStorage.getItem('refresh_token');
      }
    },
    error: function(a,b,c) {
      console.log(a,b,c);
    }
  });
}
