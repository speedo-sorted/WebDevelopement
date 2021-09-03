<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question 2</title>
</head>
<body>
    <h2>Sorting</h2>

    <section>
        <form action="sortForm.php" method="POST">
            <div>
                <div><label for="str">Give the string</label></div>
                <input type="text" id="str" name="str" required>
            </div>
            <br>
            <label for="sort"><b>Choose a sorting option -</b></label>
            <select name="sort" id="sort">
                <option value="Bubble">Bubble Sort</option>
                <option value="Insertion">Insertion Sort</option>
                <option value="Selection">Selection Sort</option>
            </select>
            <div><br><button>Submit</button></div>
        </form>
        
        
    </section>
</body>
</html>