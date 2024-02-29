function updateAdminSheet() {
  var adminSheetName = "Admin"; // Name of your admin sheet
  var startRow = 7; // Assuming your data starts from row 7
  var dateColumn = 2; // Assuming the date column is column B (2)
  var hoursColumn = 3; // Assuming the hours column is column C (3)
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var adminSheet = ss.getSheetByName(adminSheetName);
  
  // Clear existing data in admin sheet, except headers
  adminSheet.getRange("A2:C").clearContent();
  
  // Get all sheet names except "Admin" and "New Student Template"
  var dataSheetNames = ss.getSheets().map(function(sheet) { return sheet.getName(); })
                              .filter(function(sheetName) { return sheetName !== "Admin" && sheetName !== "New Student Template"; });
  
  // Get the current month and year
  var today = new Date();
  var currentMonth = today.getMonth() + 1; // JavaScript months are 0-based
  var currentYear = today.getFullYear();
  
  // Initialize a variable to keep track of the row to write in the admin sheet
  var adminRow = 2;
  
  // Loop through each data sheet
  dataSheetNames.forEach(function(sheetName) {
    var dataSheet = ss.getSheetByName(sheetName);
    var lastRow = dataSheet.getLastRow();
    var studentName = dataSheet.getRange("A2").getValue(); // Get the student name from cell A2
    
    // Initialize the student's total monthly and yearly hours
    var monthlyHours = 0;
    var yearlyHours = 0;
    
    // Loop through each row in the data sheet
    for (var row = startRow; row <= lastRow; row++) {
      var rowData = dataSheet.getRange(row, 1, 1, hoursColumn).getValues()[0]; // Get the row data
      
      var date = new Date(rowData[dateColumn - 1]); // Adjusted index for date column
      var hours = rowData[hoursColumn - 1]; // Adjusted index for hours column
      
      // Check if the date is from the current year
      if (date.getFullYear() === currentYear) {
        // If the month matches the current month, update monthly hours
        if (date.getMonth() + 1 === currentMonth) {
          monthlyHours += hours;
        }
        
        // Always update yearly hours
        yearlyHours += hours;
      }
    }
    
    // Write student data to admin sheet
    adminSheet.getRange(adminRow, 1, 1, 3).setValues([[studentName, monthlyHours, yearlyHours]]);
    
    // Move to the next row in the admin sheet
    adminRow++;
  });
}
