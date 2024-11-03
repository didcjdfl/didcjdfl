document.getElementById('complaintForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작 방지

    const complaintInput = document.getElementById('complaint');
    const complaintText = complaintInput.value;

    if (complaintText) {
        const complaintList = document.getElementById('complaintList');
        const newItem = document.createElement('li');
        newItem.textContent = complaintText;
        complaintList.appendChild(newItem);

        complaintInput.value = ''; // 입력 필드 비우기
    }
});