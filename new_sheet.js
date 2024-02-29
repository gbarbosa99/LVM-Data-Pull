 function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Add New Student')
      .addItem('Apply Template to New Sheet', 'applyTemplate')
      .addToUi();
}

function applyTemplate() {
  var templateSheetName = "New Student Template"; // Replace "Template" with the name of your template sheet
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var templateSheet = ss.getSheetByName(templateSheetName);
  
  // Create a new sheet
  var newSheetName = "New Sheet"; // Change this to the desired name for the new sheet
  var newSheet = ss.insertSheet(newSheetName);
  
  // Get the range of the template sheet
  var templateRange = templateSheet.getDataRange();
  
  // Get the values and formatting from the template and apply them to the new sheet
  templateRange.copyTo(newSheet.getRange(1, 1), {contentsOnly:true});
  templateRange.copyTo(newSheet.getRange(1, 1), {formatOnly:true});
}
