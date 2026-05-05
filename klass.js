document.addEventListener('DOMContentLoaded', function() {
    
    const btn = document.getElementById('btnCount');
    const resSpan = document.getElementById('resCount');
    const commentDiv = document.getElementById('comment');

    btn.addEventListener('click', function() {
        let val = document.getElementById('userNum').value;

        if (val === "") {
            resSpan.innerText = "!";
            commentDiv.innerText = "Будь ласка, введіть число";
            return;
        }

       
        let num = Math.abs(Number(val));
        let count = 0;

       
        if (num === 0) {
            count = 1;
        } else {
            while (num >= 1) {
                num = num / 10;
                count++;
            }
        }

        resSpan.innerText = count;

       
        let msg = "";
        switch (count) {
            case 1:
                msg = "Це одноцифрове число.";
                break;
            case 2:
                msg = "Це двоцифрове число.";
                break;
            case 3:
                msg = "Трицифрове число, солідний вибір!";
                break;
            case 7:
                msg = "Мільйон? Сім цифр — це потужно.";
                break;
            default:
                msg = `У цьому числі аж ${count} цифр!`;
        }

        commentDiv.innerText = msg;
    });
});