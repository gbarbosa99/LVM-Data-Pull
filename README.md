# LVM Data Pull

- [introduction](#introduction)
- [new_sheet explanation](#new_sheet_explanation)
- [update_admin explanation](#update_admin_explanation)

## Introduction
The idea for this project came when I received an email to fill out a survey on how the session with my student went. Several questions were being used to document how time was being spent with my student and 
what topics we were focusing on. I realized this was a good tool for the administrator to track how the students were doing, but not very useful for the tutors, especially because they don't have access to the spreadsheet 
housing all of the survey entries.

Having worked as a tutor for a few months, I had been tracking all of the information in a spreadsheet and copying the information over to the survey at the end of the month. This gave me the idea of automating the collection 
process for the administrator and the students, removing redundancies and facilitiating the process for all users involved. 

While building, the main focus was to keep things simple and straightforward. The tutoring is already a big time commitment, so 
keeping the reporting process quick was very important. Another focus was to automate as many aspects of their workflow as possible, even the small things.

Once I finished the spreadsheet, I took the project a step further by moving the data to PowerBI to create a dashboard for all students. 

## New_sheet explanation
The point of this script was to simplify the template creation process for the administrator when a new student joins the program. Instead of having to copy and paste a sheet for each new student, 
I created a button using the onOpen() function. Then I tied the functionality of the button to the applyTemplate() function that copies the format from a dummy sheet called 'New Student Template' to a new sheet. 

## Update_admin explanation
The point of this script was to automate the calculation of their KPIs such as total hours spent working with the student this month and total hours spent working with the student this year. 
I haven't been able to find a way to automate the process of identifying the startrow, date column and hours columns so I set those at variables in the beginning. I run the calculation by sheet and use cell A2 to pull the student's name.
I loop through the hours column and update monthlyHours and yearlyHours in the admin sheet based on the date of the visit. I use today's date as reference to whether or not the hours should fall under the bucket of current month or current year.

I set this to run whenever an update was made to any sheet. One drawback to the script is that the program doesn't identify where it should be pulling data from, so any changes made to the format of the sheet would prevent my script from working.
One step I took to prevent this was to lock the cells of the sheet containing the headers to prevent people from moving things around. I'd like to automate the process of identifying where the data begins and will continue to work on this going forward. 


The next steps for this project are to:
- automate the data retrieval from Sheets to PowerBI to update the dashboard as information is put into Sheets and to create a dashboard as soon as a new sheet is created with the format I specify. 
- Create a chatbot to be used alongside the dashboard that uses a LLM to assist students with any questions they have.
