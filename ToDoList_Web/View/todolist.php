<?php
    include '../Controller/dbconnect.php';   
    session_start();
    if($_SESSION['status']!="Active")
    {
    header("location:login.php");
    }


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve task data from the POST request
    // $username = $_POST["username"];
    $sno =$_POST["sno"];
    $userID =$_POST["userID"];
    $taskText = $_POST["taskText"];
    echo $taskText;

    $sql = "INSERT INTO `task`(`sno`, `userID`, `taskText`) VALUES ($sno,$userID,$taskText)";
    // $sql = "INSERT INTO `task`(`taskText`) VALUES ('$taskText');";
    $result = mysqli_query($conn, $sql);
    // $stmt = $conn->prepare($sql);
    // $stmt->bind_param("s", $taskText);

    // if ($stmt->execute()) {
    //     // Task added successfully
    //     echo json_encode(["success" => true, "message" => "Task added successfully"]);
    // } else {
    //     // Error occurred while adding the task
    //     echo json_encode(["success" => false, "message" => "Task could not be added"]);
    // }

    // // Close the database connection
    // $stmt->close();
    // $conn->close();
} else {
    $result =false;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>To-Do List webApp</title>
<style>
        body {
            font-family: Arial, sans-serif;    
            background-color: burlywood;
   
            text-align: center;
            padding:20px;
            margin-top: 150px;
        }

        .container {   
            max-width: 500px;
      margin: 0 auto;
      text-align: center;
      background-color: wheat;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: aqua;
            
        }
     ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border: 1px solid #ccc;
            margin-bottom: 5px;
        }
     li.completed {
            text-decoration: line-through;
        }

        button.delete {
            background-color: #ff5555;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button.edit {
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
</style>
</head>
<body>
<form action="todolist.php" method="post">
<div class="container">
<h1>To-Do List</h1>
<label for="taskInput">Task</label>
<input type="text" id="taskInput" name="taskInput" placeholder="Add a new task...">
<button id="addTask">Add</button>
<ul id="taskList"></ul>

</div>
</form>
<form action="logout.php" method="post">
<button type="submit" class="btn btn-primary">Logout</button> 

    </form>
<script>
        document.addEventListener("DOMContentLoaded", function () {
            const taskInput = document.getElementById("taskInput");
            const addTaskButton = document.getElementById("addTask");
            const taskList = document.getElementById("taskList");

            // Add a new task
            addTaskButton.addEventListener("click", function () {
                const taskText = taskInput.value.trim();
                if (taskText !== "") {
                    const li = document.createElement("li");
                    li.innerHTML = `
<span>${taskText}</span>
<button class="edit">Edit</button>
<button class="delete">Delete</button>
                    `;
                    taskList.appendChild(li);
                    taskInput.value = "";
                }
            });

 

            // Edit or Delete a task
            taskList.addEventListener("click", function (event) {
                const target = event.target;
                if (target.classList.contains("delete")) {
                    target.parentElement.remove();
                } else if (target.classList.contains("edit")) {
                    const span = target.parentElement.querySelector("span");
                    const newTaskText = prompt("Edit the task:", span.textContent);
                    if (newTaskText !== null && newTaskText !== "") {
                        span.textContent = newTaskText;
                    }
                }
            });

 

            // Mark a task as completed
            taskList.addEventListener("click", function (event) {
                const target = event.target;
                if (target.tagName === "SPAN") {
                    target.parentElement.classList.toggle("completed");
                }
            });
        });
</script>
</body>
</html>


