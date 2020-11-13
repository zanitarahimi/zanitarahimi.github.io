$(document).ready(function() {

		$('.search').toggleClass('active')

		$("#theForm").on("submit", function(e){
			e.preventDefault();
			// e merr vleren qe osht ne placeholder dhe e ruan ne variablen searchPh
			var searchPh = $("#searchPh").val(); 
			document.getElementById("results").innerHTML = '';
			// we get an Ajax call and the information we search about in the placeholder (searchPh)
			var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchPh + "&format=json&callback=?";

			$.ajax({
				url: url,
				type: "GET",
				async: false,
				dataType: "json",
				success: function(data){
					//console.log(data);
					//e kemi nje array me kater elemente, elementi i pare eshte vlera ne placeholder, dhe tri elementet tjera jane arrays
					//ne array 1 kemi 10 elemente, qe jane titujt e 10 artikujve qe po bejme search ne wikipedia
					//ne array 2 kemi 10 elemente, qe jane nga nje paragraf prej artikujve korrespondues
					//ne array 3 kemi 10 elemente, qe jane linqet ne wikipedia per artikujt korrespondues

					for(var i = 0; i<data[1].length; i++){

						$("#results").append("<div> <div class=\"gozhda\"><i class=\"fa fa-thumb-tack\" aria-hidden=\"true\"></i> </div><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2></a>" + "<p>" + data[2][i] + "</p> " + "</div>")
					}
				}

			})
			$('.search').toggleClass('active');
		

	})

});