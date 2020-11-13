$( document ).ready(function() {

	var quoteAuthorContainer = document.getElementById("quote-and-author");
    var count = 0;
    var btn = document.getElementById("btn");
    var tweetbtn = document.getElementById("twitter-button");


    btn.addEventListener("click",function(){
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET','https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json');
        ourRequest.onload = function(){
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        };
        ourRequest.send();
    });

	tweetbtn.addEventListener("click", function(){
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById('kuota').textContent));
	});

    function renderHTML(data){

        var count = Math.floor(Math.random()*data.length);
        var htmlString = "<p id='kuota'>" + "" + data[count].quoteText + " <br>- ";

        if(data[count].quoteAuthor === ""){
            htmlString += " Anonymous" + "</p>"
        }
        else{
            htmlString += data[count].quoteAuthor + "</p>"
        }

        quoteAuthorContainer.innerHTML = htmlString;
    }





});