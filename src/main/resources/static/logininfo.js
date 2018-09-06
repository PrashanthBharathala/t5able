$(document).ready(function(){
	var jsonArray=[];
	$("#sotreData").submit(function(event){
		event.preventDefault();
		getUserData();
	});
	function getUserData()
	{
		var userName= $("#userName").val();
		var userID = $("#userID").val();
		var formData = {
				email : $("#userName").val(),
		        password : $("#userID").val()
		  }
		
	var markup = "<tr><td>" + userName + "</td><td>" + userID + "</td></tr>";
		
		$("table tbody").append(markup);
		jsonArray.push(formData);
		alert(jsonArray);
		console.log(jsonArray);
		
	}
	$("#getTableInfo").click(function(){
		 alert("button click");
		//var storeData = jsonArray;
		var storeData= JSON.stringify(jsonArray);
		//console.log(jsonArray);
		 $.ajax({
				type :"POST",
			//	contentType:"application/json",
				url :"getTotalTableData",
				data:{
					"myData" : storeData
				},
				success : function(response) {
					       // do something ... 
					alert("success");
					    },
				error:function(e)
				{
					alert("error");
				}
				
			});
	})
})