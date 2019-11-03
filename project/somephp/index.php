<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>

<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="main.css">
<script type="text/javascript">



 var selectedIngredients = [];
 function searchq(){
	 var searchTxt = $("input[name='ingredient']").val();
	 console.log(searchTxt);
	 //if(searchTxt=="") searchTxt = "no";
	 $.post("search.php", {searchVal: searchTxt}, function(output) {
		 $("#output").html(output);
	 });
 }
 
 function addIngredient(ingr_name){
	 console.log("oh wow!!");
	 selectedIngredients.push(ingr_name);
	 showList();
 }
 
 function deleteIngredient(ingr_id){
	 selectedIngredients.splice(ingr_id,1);
	 showList();
 }
 
 function showList(){
	 if(!selectedIngredients.empty){
		 var otpstring = "";
		 for(var i = 0; i < selectedIngredients.length; i++){
			 otpstring += "<div> <input type='button' value='-' onclick='deleteIngredient("+i+");' /> "+(i+1)+". "+selectedIngredients[i]+"</div>";
		 }
		 $("#selectedStuff").html(otpstring);
	 }
 }
 </script>

<!doctype html>
<html lang="ru">
<head>

    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="http://allfont.ru/allfont.css?fonts=pollock3ctt" rel="stylesheet" type="text/css" />
    <title>some php</title>
	<h1 style="font-size:100px; color: white; margin: 0;">HELPMEEAT</h1>
	
</head>
<body>

  <input class="searchbar" onkeyup="searchq();" name="ingredient" type="text" id="ingred_input" autocomplete="off" placeholder="Введите ингредиент..."/>
  <div class="ingred_result" id="output" ></div>
  <div style="margin-bottom: 5px;" id="selectedStuff"> </div>
  <input class="search_button" type="button" value="Найти!"/>

</body>
</html>
