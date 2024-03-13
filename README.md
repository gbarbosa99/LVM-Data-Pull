# LVM Data Pull

<!---Table of Contents--->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the Project</a>
      <ul>
        <li><a href="#built_with">Built with</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!---About the Project--->
## About the Project

The idea for this project came when I received an email to fill out a survey on how the session with my student went. Several questions were being used to document how time was being spent with my student and 
what topics we were focusing on. I realized this was a good tool for the administrator to track how the students were doing, but not very useful for the tutors, especially because they don't have access to the spreadsheet 
housing all of the survey entries.

Having worked as a tutor for a few months, I had been tracking all of the information in my own spreadsheet and copying the information over to the survey at the end of the month. This gave me the idea of automating the collection process for the administrator and the students, removing redundancies and facilitiating the process for all users involved. 

While building, I was told to prioritize making everything straightforward. With tutoring already being a big time commitment for the volunteers, we didn't want tracking these metrics to significantly affect this.

Once I finished the spreadsheet, I took the project a step further by moving the data to PowerBI to create a dashboard for all students. 

<p align='right'>(<a href="#readme-op">back to top</a>)</p>

<!---Built With--->
### Built With
* [Apps Script][apps-script-url]

<p align='right'>(<a href="#readme-top">back to top</a>)</p>

<!---Usage--->
### Usage

![image](https://github.com/gbarbosa99/LVM-Data-Pull/assets/99455542/8dbede4d-978b-4c20-8d13-1c9265e6ce3f)

![image](https://github.com/gbarbosa99/LVM-Data-Pull/assets/99455542/1337be8b-a8cf-45a7-a074-ceda50465691)

The first image above is the new student sheet template that we apply to new student sheets. The second image are the cells in the admin sheet that the student information populates into. The student name in the second image fills in from cell A2 in the student template sheet. The hours spent with the student this month and this year are all calculated using the "Date" and "In-Person Hours" columns from the student template. The system uses the current date to determine whether to increment "Total Hours this Month" and "Total Hours this Year" in the admin sheet. 

![image](https://github.com/gbarbosa99/LVM-Data-Pull/assets/99455542/16c80f29-9c7d-4937-9751-d9c7022b1f32)

A new sheet is created using the "Add New Student" button. 

<p align='right'>(<a href="#readme-top">back to top</a>)</p>


The next steps for this project are to:
- automate the data retrieval from Sheets to PowerBI to update the dashboard as information is put into Sheets and to create a dashboard as soon as a new sheet is created with the format I specify. 
- Create a chatbot to be used alongside the dashboard that uses a LLM to assist students with any questions they have.

<!-- MARKDOWN LINKS & IMAGES -->
[apps-script-url]: https://developers.google.com/apps-script/api/reference/rest
[apps-script.js]: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Apps_Script.svg/1200px-Google_Apps_Script.svg.png
