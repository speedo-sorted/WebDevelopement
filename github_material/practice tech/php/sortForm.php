<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sort response</title>
</head>
<body>
    <h2>This is what we got-</h2>
    <section>
        <h3>String- </h3>
        <?php echo $_POST["str"]; ?>
    </section>
    <section>
        <h3>sort option- </h3>
       <?php echo $_POST["sort"]; ?>
        Sort
    </section>
    <section>
        <h4>Your output-</h4>
        <?php
                
                function bubbleSort(&$str, &$iteration, &$swap)
                {
                    $n = strlen($str);             
                    for($i = 0; $i < $n; $i++)
                    {
                        $iteration++;
                        for ($j = 0; $j < $n - $i - 1; $j++)
                        {   
                            if ($str[$j] > $str[$j+1])
                            {
                                $t = $str[$j];
                                $str[$j] = $str[$j+1];
                                $str[$j+1] = $t;
                                $swap++;
                            }
                        }
                    }
                }
                function insertionSort(&$str, &$iteration, &$swap)
                {
                    $n = strlen($str);             
                    for ($i = 1; $i < $n; $i++)
                    {
                        $key = $str[$i];
                        $j = $i-1;
                        $iteration++;
                        while ($j >= 0 && $str[$j] > $key)
                        {
                            $str[$j + 1] = $str[$j];
                            $j = $j - 1;
                            $swap++;
                        }
                        
                        $str[$j + 1] = $key;
                    }
                }
                function selectionSort(&$str, &$iteration, &$swap)
                {
                    $n = strlen($str);             
                    for($i = 0; $i < $n ; $i++)
                    {
                        $low = $i;
                        $iteration++;
                        for($j = $i + 1; $j < $n ; $j++)
                        {
                            if ($str[$j] < $str[$low])
                            {
                                $low = $j;
                            }
                        }
                        if ($str[$i] > $str[$low])
                        {
                            $tmp = $str[$i];
                            $str[$i] = $str[$low];
                            $str[$low] = $tmp;
                            $swap++;
                        }
                    }
                }


        ?>
        <?php
            $iteration = 0;
            $swap = 0;
            $gotString = $_POST["str"];

            if($_POST["sort"] == "Bubble")
                bubbleSort($gotString, $iteration, $swap);
            if($_POST["sort"] == "Insertion")
                insertionSort($gotString, $iteration, $swap);
            if($_POST["sort"] == "Selection")
                selectionSort($gotString, $iteration, $swap);
        ?>
        <br>
        <textarea name="answer" id="answer" cols="30" rows="10">
        <?php echo $gotString ?>
        </textarea>
        <br>
        <h4>Nuber of iterations are -</h4>
        <?php echo $iteration ?>
        <br>
        <h4>Nuber of swaps are -</h4>
        <?php echo $swap ?>
        <br>

    </section>
</body>
</html>