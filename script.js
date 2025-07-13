
let tapCount = 0;
const ADMIN_PASSWORD = "MAHINMESSADMIN99";

function tapTitle() {
  tapCount++;
  if (tapCount === 5) {
    const pwd = prompt("Enter admin password:");
    if (pwd === ADMIN_PASSWORD) {
      document.getElementById("admin-panel").style.display = "block";
      document.getElementById("noticeBox").contentEditable = true;
      document.getElementById("messageBox").contentEditable = true;
      alert("Admin Mode Enabled");
    } else {
      alert("Wrong password!");
      tapCount = 0;
    }
  }
}

function addMember() {
  const table = document.getElementById("members-table");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="file" /></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td><button onclick="viewDetails(this)">View</button></td>`;
  table.appendChild(row);
}

function viewDetails(button) {
  alert("Details page under construction.");
}

function saveData() {
  alert("Saved locally.");
}