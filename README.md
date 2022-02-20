# HealthPlug - Calgary Hacks 2022

<img alt="Python" src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue"/> <img alt="MySQL" src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"/><img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> <img alt="PostMan" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"/><br> 
### API Blueprint: https://docs.google.com/document/d/1UibA3Kuea-CXpcYSPyptzJmxg-iko_Sk0zLF-7Iy6L0/edit?usp=sharing 


## What is HealthPlug ?

HealthPLug is a one stop personalised platform that simplifies the concept of living a health lifestyle. Healthplug platform employs a machine learning model that generates videos, research papers, visualized data as a response to the users input. The Project stems from our personal hardships of maintaining a healthy lifestyle. It is a mobile friendly web application which serves the needs of a user based on their input.
The platform is split into two main components.
1. Feature to verify authernticity of health related subjects<br>
2. Feature to identify if a product is suitable for the users use.
   - product is identified using a barcode scanner<br>


## Challenges we ran into:
We ran into multiple challenges along the development phase and were dealt with accordingly. With respect to Front-End we had challenges with aligning of placeholders that were used to display the results from our Machine Learning model. With respect to Back-End we ran into time bounded challenges as Machine learning model takes a considerable amount of time to create the tensor file. Employing a Machine Learning model also posed as challenges as the packages to be downloaded were conflicting with existing packages, resolving dependies also required a lot of time dedication. Our API choice was another thing we struggled with as we wanted to ensure we were using the best and more reliable technologies with respect to development and debugging.

## What we learnt:
A sprint coding competition always teaches us how to create valuable code within a resitricted time frame. We came accross multiple new technologies and discovered numerous ways to integrate all the segments of the project to provide a well working web application, Furthermore while creating a dataset for our 2nd feature we learnt about various harmful ingredients in products. 

## Technologies Used

| Stack     | Technologies Used                    |
|-----------|--------------------------------------|
| Front-End | React, JavaScript, CSS               |
| Back-End  | Python, Node.js                      |
| Database  | MySQL                                |

## API's used:

* Google Cloud Vision API
* IBM Watson speech to text API
* Youtube API
* Wikipedia API

## Integration of frameworks 

HealthPlug web application was developed as a React app. Available to be viewed on mobile as well. The Back-End aspect of the code consists of a Machine Learning Model, MySQL database, and Flask API.
Machine Learning model uses non textual input and provides relevant youtube suggestions, research papers, and more. HealthPLug is personalized for each user. The data pertaining to each user is stored in a MySQL database. The database also contains the search history of each user from previous interactions with the platform.
Flask API was used to act as a controller between the Machine Learning model, Database and Front-End   

## External Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please base all pull requests off of the main branch as they will be rebase merged. Check that there are no linter issues before opening a pull request by running.

## License


