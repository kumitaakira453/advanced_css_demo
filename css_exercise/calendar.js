"use struct";

// 日付ブロックの骨組みを作成
// 以下は 1 日の出力例
// <li>
//     <div>
//         <p>Sun</p>
//         <p>1</p>
//         <div>
//             <p>1 日の予定 1</p>
//             <p>1 日の予定 2</p>
//             <p>1 日の予定 3</p>
//         </div>
//     </div>
// </li>

function makeDateBlock() {
    const li = document.createElement("li");
    const divWrap = document.createElement("div");
    const pDate = document.createElement("p");
    const pDay = document.createElement("p");
    const divSchedule = document.createElement("div");
    const pFirstSchedule = document.createElement("p");
    const pSecondSchedule = document.createElement("p");
    const pThirdSchedule = document.createElement("p");
    divSchedule.appendChild(pFirstSchedule);
    divSchedule.appendChild(pSecondSchedule);
    divSchedule.appendChild(pThirdSchedule);
    divWrap.appendChild(pDate);
    divWrap.appendChild(pDay);
    divWrap.appendChild(divSchedule);
    li.appendChild(divWrap);
    return li;
}

// 作成した要素を用いてカレンダーを作成

function makeCalendar() {
    const ul = document.getElementById("ul");
    for (let i = 1; i <= 31; i++) {
        const dateBlock = makeDateBlock(); // 日付ブロックを作成する
        const remainder = i % 7;
        let day = "";
        switch (remainder) {
            case 0:
                day = "Sat";
                break;
            case 1:
                day = "Sun";
                break;
            case 2:
                day = "Mon";
                break;
            case 3:
                day = "Tue";
                break;
            case 4:
                day = "Wed";
                break;
            case 5:
                day = "Thur";
                break;
            case 6:
                day = "Fri";
                break;
        }
        const divWrap = dateBlock.querySelectorAll("li > div > p");
        divWrap[0].textContent = day; // 曜日を入力
        divWrap[1].textContent = i; // 日付を入力
        const pScheduleList = dateBlock.querySelectorAll("div > div > p");
        pScheduleList[0].textContent = `${i} 日の予定 1`; // 予定 1 を入力
        pScheduleList[1].textContent = `${i} 日の予定 2`; // 予定 2 を入力
        pScheduleList[2].textContent = `${i} 日の予定 3`; // 予定 3 を入力
        ul.appendChild(dateBlock);
    }
}

makeCalendar();
