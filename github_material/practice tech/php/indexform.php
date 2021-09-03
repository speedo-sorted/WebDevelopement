<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Response</title>
</head>
<body>

<h1>this is your data - </h1>
</body>
</html>
 <?php
    $server = "localhost";
    $username = "root";
    $password = "";

    $con = mysqli_connect($server, $username, $password);

    if(!$con)
        die("connection failed due to.".mysqli_connect_error());
    $from = $_POST["from"];
    $to = $_POST["to"];
    $salary = "SELECT * FROM employee.data where salary >= $from and salary <= $to";
    $result = $con->query($salary) ; 
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          echo "employee ID: " . $row["empid"]. " - Name: " . $row["name"]. " - department " . $row["department"]." - branch " . $row["branch"]." - salary " . $row["salary"]." - gender " . $row["gender"]. "<br>";
        }
      } else {
        echo "0 results found!!";
      }
    
?>