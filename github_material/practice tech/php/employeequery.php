<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <title>Employee Query</title>
</head>
<body>
    <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <span class="block text-indigo-600 text-4xl mb-3">Employee Query</span>
          </div>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Select Salary Range</h1>
          <form method="POST" action="indexform.php" class="lg:w-1/2 md:w-2/3 ">
            <input type="number" name="which" id="w1" style="display:none;" value="1">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">Salary from</label>
                  <input type="number" id="name" name="from" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>   
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">Salary to</label>
                  <input type="number" id="email" name="to" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Submit</button>
              </div>
            </div>
            <h1 class="text-3xl">highest salary profiles in each category</h1>
            <div>
            <div>employee ID: 101 - Name: raju - department security - branch it - salary 10000 - gender male</div>
<div>employee ID: 102 - Name: priya - department hr - branch admin - salary 499999 - gender female</div>
            </div>            
            <br>
            <h1 class="text-3xl"> Employee with name length greater than four</h1>
            <div>employee ID: 102 - Name: priya - department hr - branch admin - salary 499999 - gender female</div>
            
            <h1 class="text-3xl"> Display the list of employees for each department in order of their salary.</h1>

</form>
        </div>
      </section>
  
    
</body>
</html>

<!-- INSERT INTO `employee`.`data` (`empid`, `name`, `department`, `branch`, `salary`, `gender`) VALUES ('101', 'rajesh', 'security', 'it', '10000', 'male') -->