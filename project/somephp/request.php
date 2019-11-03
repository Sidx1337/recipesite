<?php
  require('connect_db.php');


  function fail(){
    echo " <p> Введите ингредиент идиот </p> ";
    echo '<p> <a href="index.php"> Вернуться </a>';
    exit();
  }

  if(isset($_POST['ingredient'])){
    if(!empty(trim($_POST['ingredient']))){
      $ingredient = addslashes($_POST['ingredient']);
      echo'<p>Ответ на запрос "'.$ingredient.'":</p>';
      $db = new DBConnect();
      $sql = 'SELECT * FROM `recipes_table` WHERE `ingredients` LIKE "%'.$ingredient.'%"';
      //echo '<p>'.$ingredient.'</p>';
      $result = mysqli_query($db->getDB(), $sql);
      if(mysqli_num_rows($result)>0){
        while ($row = mysqli_fetch_array( $result , MYSQLI_ASSOC)){
          echo '<p> '.$row['name'].': '.$row['ingredients'].'</p>';
        }
      }else{
        echo '<p> НЕТ ТАКИХ ИНГРЕДИЕНТОВ ЛУЗЕР УХХ </p>';
      }
    }else{fail();}
  }
  echo '<p> <a href="index.php"> Вернуться </a>';
 ?>
