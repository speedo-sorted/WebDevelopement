<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Form</title>
    <style>
        form{
            width: 30rem;
            border: 2px solid black;
            padding: 3rem;
        }
    </style>
</head>
<body>
    <h1>Feedback Form</h1>
    <form action="indexform.php" method="POST">
        <div>
            <label for="name">name</label><br>
            <input type="text" id="name" placeholder="Your name" required name="name">
        </div>
        <div>
            <label for="email">email id</label><br>
            <input type="email" id="email" placeholder="email id" required name="email">
        </div>
        <div>
            <label for="website">website</label><br>
            <input type="text" id="website" placeholder="website" name="website">
        </div>
        <div>
            <label for="comment">comment</label><br>
            <textarea cols="30" rows="10" id="comment" placeholder="comment" name="comment">
            </textarea>
        </div>
        <div>
            Gender<br>
            <input type="radio" id="male" name="gender" value="male" required>
            <label for="male">male</label><br>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">female</label><br>
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
    
</body>
</html>