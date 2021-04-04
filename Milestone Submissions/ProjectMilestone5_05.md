# Milestone 5

## Project Title
ClassView<br>

## Group 5 Members
Matt Zarifa <br>
Omar Dajani <br>
John Korhel <br>
Connor Liu <br>
Caroline Chang <br>

## Test Plans
UAT Case: Registration/Login <br>
Acceptance Criteria
  + A user cannot submit a registration form without completing all of the mandatory fields in the registration form, these fields include: <br>
    - Email <br>
    - Username <br>
    - Password <br>
  + A user cannot submit a login form without completing all of the mandatory fields on the login form, these fields include: <br>
    - Username <br>
    - Password <br>
  + Once a user logs in, they are provided with a JWT and refresh token that stores their credentials in a secure manner. <br>
    - Example JWT token: eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkZXYiLCJpYXQiOjE2MTc1NjIwNzcsImV4cCI6MTYxNzU2Mjk3N30.IrLLyCcpa7J8ltYtNioAfjJaJlFTZvyAw79zsL_15sWsO4p51Gd4JgqtUIt7INGRX-9riH9rOrayMCFAEMPXsr0e4-zXMNMeTJIpdek0urOYAwIqjXYCJhrJVQ8o7U8JjVAZi8BAArrDbOuPlJHC_i8laCvNSk6SjqPMNV4zUE_bOm3aU2A8e5DpgjQ8n2vNaDoOrrh547HqE-f9mN9BrJYoxLN_7tqbkXlvTraGL2phggjOf-W3uRS9NdYEmlVI_BuYvvJff0Gt9ydebC5oKZFPz3OarKaZTjg7_-lEb2qFU0ed21QwL4uOOC29tm4Ey8EwKkHK7i2vpIHCFbFMnQ <br>
    - Example refresh token: "edfe1f55-b74a-4d71-aa88-525ba685d43c" <br>
    - A user has the ability to log out, which will clear the session storage and all user information.<br>
![image](https://user-images.githubusercontent.com/47280380/113519374-97134480-9540-11eb-8f72-52d4b7f90887.png)
![image](https://user-images.githubusercontent.com/47280380/113519390-b1e5b900-9540-11eb-91c7-737ecfbd4572.png)

  
UAT Case: Profile Image Update <br>
  + Test Cases: <br>
    - Users should be able to add an image. <br>
    - Users should be able to delete their image. <br>
    - Users should be able to upload a new image. <br>
  + Acceptance Criteria: <br>
    - Each of the listed test cases should result in the profile image page and file name on site should be updated with each action. <br>
    - Adding an image should update the profile image and the file path would be updated. <br>
    - Deleting the image should change the profile image to the default image and remove the file pathing. <br>
    - Uploading a replacement image should change the file path as well as the new image. <br>
![image](https://user-images.githubusercontent.com/47280380/113519407-c2962f00-9540-11eb-93f3-5e391718db59.png)
![image](https://user-images.githubusercontent.com/47280380/113519414-c88c1000-9540-11eb-9558-69ee1ab59b5a.png)
![image](https://user-images.githubusercontent.com/47280380/113519426-e2c5ee00-9540-11eb-90e3-926c3699f545.png)
    
UAT Case: Creating posts/sections <br>
   - Users should be able to create sections and within each section create posts. <br>
   - Users should be able to comment on posts. <br>
 + Acceptance Criteria: <br>
   - Everytime a user creates a post. The main page would update the newly created post. <br>
   - Same goes for the comments. Everytime a user creates a comment, the comment box for the post would refresh. <br>


