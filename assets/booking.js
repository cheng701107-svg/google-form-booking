/* ===============================
   GAS API Endpoint (請替換)
================================ */
const API_BASE = "🔗 在此貼上你部署後的 GAS URL";

/* ===============================
   1) 載入房型列表
================================ */
async function loadRooms(){
  const r = await fetch(`${API_BASE}?action=rooms`);
  const res = await r.json();
  const sel = document.getElementById("roomSelect");

  res.data.forEach(room=>{
    sel.innerHTML += `<option value="${room.name}">${room.name}｜$${room.price}</option>`;
  });
}
loadRooms();

/* ===============================
   2) 建立訂單 createBooking
================================ */
async function createOrder(){
  const data = {
    roomId: document.getElementById("roomSelect").value,
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    date: document.getElementById("date").value,
    nights: document.getElementById("nights").value,
    note: document.getElementById("note").value
  };

  const r = await fetch(`${API_BASE}?action=createBooking`,{
    method:"POST",
    body:JSON.stringify(data)
  });
  const res = await r.json();

  document.getElementById("msg").innerText = res.success ? "預訂成功 ✔" : "預訂失敗 ❗";
}
