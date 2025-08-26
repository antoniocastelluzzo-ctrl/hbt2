function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0]; // Usa il primo foglio
  var data = [
    new Date(),
    e.parameter.nome || "",
    e.parameter.email || "",
    e.parameter.telefono || "",
    e.parameter.azienda || "",
    e.parameter.servizi || "",
    e.parameter.messaggio || "",
    e.parameter.privacy ? "SI" : "NO"
  ];
  sheet.appendRow(data);
  return ContentService.createTextOutput("OK");
}