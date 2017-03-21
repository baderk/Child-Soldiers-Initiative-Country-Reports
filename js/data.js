// var pageCounter = 1;

var reportsContainer = document.getElementById("report-content");
var GETbtn = document.getElementById("getbutton");



// GETbtn.addEventListener("click", function() {
    window.onload = function(e){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://dev-countryreportapp.pantheonsite.io/wp-json/wp/v2/pages/');//add ?order=asc to sort by ascending date
    
    ourRequest.onload = function() {
        if(ourRequest.status >= 200 && ourRequest.status < 400){
            var ourData = JSON.parse(ourRequest.responseText);
            displayReports(ourData);
            GETbtn.remove(); //removes button after clicking

        }else{
            console.log("We connected to the srver but it returned an error");
        }
       
    };

    ourRequest.onerror = function() {
        console.log("Connection error");
    }

    ourRequest.send();

};

function displayReports(data) {
    var htmlString = "";

    for (var i = 0; i < data.length; i++) {
        $(".container").append("<li onclick = populate() id =" + data[i].id + ">" + data[i].title.rendered + "</li>");
       //name is ID for me
        // htmlString += "id: " + data[i].id + ", </br>";

        // htmlString += "title: " + data[i].title.rendered + ", </br>";

        // // htmlString += "Content: " + data[i].content.rendered+ ", </br>";
        
        // htmlString += "date: " + data[i].date + "</br>";


        // htmlString += "content: " + data[i].content.rendered + "</br>";

        // htmlString += "<br>";
    };
    //add it to the <div>
    reportsContainer.insertAdjacentHTML('beforeend', htmlString);
    // reportsContainer.innerHTML = htmlString; //this jumps into a different page?
}

function populate(e){
    var reportId = event.target.id;
  
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://dev-countryreportapp.pantheonsite.io/wp-json/wp/v2/pages/' + reportId);//add ?order=asc to sort by ascending date
    
    ourRequest.onload = function() {
        if(ourRequest.status >= 200 && ourRequest.status < 400){
            var ourData = JSON.parse(ourRequest.responseText);
            document.getElementById("reportContent").innerHTML = ourData.content.rendered;
            GETbtn.remove(); //removes button after clicking

        }else{
            console.log("We connected to the srver but it returned an error");
        }
       
    };

    ourRequest.onerror = function() {
        console.log("Connection error");
    }

    ourRequest.send();

};   
  


    //Adding Report
    var addReportButton = document.querySelector("#quick-add-button");

    if(addReportButton){
        addReportButton.addEventListener("click", function() {
            var postData = {
                "title": document.querySelector('.admin-quick-add [name="title"]').value,
                "content": document.querySelector('.admin-quick-add [name="content"]').value,
                "status": "publish"
            }


            $.ajax({
                url: 'http://dev-countryreportapp.pantheonsite.io/wp-json/wp/v2/posts',
                method: 'POST',
                data: jsonData( postData ),
                crossDomain: true,
                contentType: 'application/json',
                beforeSend: function ( xhr ) {
                    xhr.setRequestHeader( 'Authorization', 'Basic 7pxS2cteisV4hSzUYlAFoVzfbcst5z:rdYY60azes2axk37e2sOHRKg6Vtypz' );
                },
                success: function( data ) {
                    console.log( data );
                },
                error: function( error ) {
                    console.log( error );
                }
            });
            // var createReport = new XMLHttpRequest();
            //createReport.open("POST", 'http://dev-countryreportapp.pantheonsite.io/wp-json/wp/v2/posts');
            // // beforeSend: function(xhr) { 
            // //     xhr.setRequestHeader("Authorization", "Basic " + btoa("7pxS2cteisV4hSzUYlAFoVzfbcst5z:rdYY60azes2axk37e2sOHRKg6Vtypz"))
            // // }

            // createReport.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            // createReport.setRequestHeader("Authorization", "Basic " + btoa("7pxS2cteisV4hSzUYlAFoVzfbcst5z:rdYY60azes2axk37e2sOHRKg6Vtypz"));

            // //convert the JS into string
            // createReport.send(JSON.stringify(postData));
            createReport.onreadystatechange = function() {
                if(createReport.readyState == 4){
                    if(createReport.status == 201){//if successfuly created
                        document.querySelector('.admin-quick-add [name="title"]').value = '';
                        document.querySelector('.admin-quick-add [name="content"]').value = '';
                } else {
                    alert("Error");
                }
            }
        }
        })
    }



    tinymce.init({ selector: 'textarea',
      height: 500,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu paste code'
      ],
      toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      content_css: '//www.tinymce.com/css/codepen.min.css'
    });









