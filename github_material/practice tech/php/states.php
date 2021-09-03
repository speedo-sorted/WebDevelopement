<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question 3</title>
</head>
<body>
    <?php
        echo "<h3> States </h3><br>";
        $states = "Mississippi Alabama Texas Massachusetts Kansas";
        $allWords = array();
        $statesArray = array();

        $word = "";
        for($i = 0; $i < strlen($states); $i++)
        {
            if($states[$i] != ' ')
                $word.=$states[$i];
            else 
            {
                array_push($allWords, $word);
                $word = "";
            }

        }
        
        foreach ($allWords as $word) {
            $len = strlen($word);
            //first part
            if($len > 2 && $word[$len-1] == 's' && $word[$len-2] == 'a' && $word[$len-3] == 'x')
            {
                $statesArray[0] = $word;
            }
            //second part
            if($word[0] == 'k' && $word[$len-1] == 's')
            {
                $statesArray[1] = $word;
            }
            //third part
            if($word[0] == 'M' && $word[$len-1] == 's')
            {
                $statesArray[2] = $word;
            }
            //third part
            if($word[$len-1] == 'a')
            {
                $statesArray[3] = $word;
            }
            //third part
            if($word[0] == 'M')
            {
                $statesArray[4] = $word;
            }
        }
        echo "<br><br>";
        print_r($statesArray);


    
    ?>
    
</body>
</html>