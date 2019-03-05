//Script to write to db
function log_to_db() { 
  var nr = document.getElementById("projnr").value;
  var h = document.getElementById("hrs").value;
  var m = document.getElementById("min").value;
  var d = document.getElementById("date").value;
  var cn = new ActiveXObject(“ADODB.Connection”);
  var strConn = “Provider=Microsoft.Jet.OLEDB.4.0;Data Source = C:\Users\Miki\Documents\ntlt\tidlogg.accdb“; 
  var rs = new ActiveXObject(“ADODB.Recordset”);
  var SQL = “Select * From 9301181504 ”; 
     
  cn.Open(strConn); 
  rs.Open(SQL, cn);
  //rs.Open(SQL, adoConn, 1, 3);

  rs.AddNew;
  rs.Fields("projectnumber").value = nr;
  rs.Fields("hours").value = h;
  rs.Fields("minutes").value = m;
  rs.Fields("day").value = "2019-03-15";
  rs.Update;

  rs.Close(); 
  cn.Close();
}