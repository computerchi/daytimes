var monthName = [
  ["January", "يناير", "كانون الثاني"],
  ["February", "فبراير", "شباط"],
  ["March", "مارس", "آذار"],
  ["April", "إبريل", "نيسان"],
  ["May", "مايو", "آيار"],
  ["June", "يونيو", "حزيران"],
  ["July", "يوليو", "تموز"],
  ["August", "أغسطس", "آب"],
  ["September", "سبتمبر", "أيلول"],
  ["October", "أكتوبر", "تشرين الأول"],
  ["November", "نوفمبر", "تشرين الثاني"],
  ["December", "ديسمبر", "كانون الأول"]
];

var arabicDayNames = [
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت"
];

// display monthly timetable
function update(lat, lng, timeZone, dst) {
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();
  var dstDates = [3, 1, 10, 1];

  makeTable(year, month, lat, lng, timeZone, dst, dstDates);

  makeSharafTable(year, timeZone);
}

// make monthly timetable
function makeTable(year, month, lat, lng, timeZone, dst, dstDates) {
  var items = {
    sahar: "السحر",
    imsak: "إمساك",
    fajr: "أذان الفجر",
    subh: "صلاة الصبح",
    endfadilatsubh: "نهاية فضيلة الصبح",
    sunrise: "شروق",
    dhuhr: "زوال",
    athandhuhr: "أذان الظهر",
    fadilatasr: "بداية فضيلة العصر",
    endfadilatduhr: "نهاية فضيلة الظهر",
    endfadilatasr: "نهاية فضيلة العصر",
    asr: "العصر",
    sunset: "غروب",
    maghrib: "أذان المغرب",
    isha: "العشاء",
    midnight: "منتصف الليل"
  };

  var dateItems = {
    daysequence: " تسلسل اليوم في السنة",
    date: "التاريخ الميلادي",
    hijridate: "التاريخ الهجري",
    arabicdayname: "اسم اليوم العربي",
    dayname: " اسم اليوم الانجليزي",
    frenchdayname: "اسم اليوم الفرنسي",
    persiandayname: "اسم اليوم الفارسي"
  };

  var sunItems = {
    qiblatime: "وقت الشمس باتجاه القبلة",
    dhuhr: "وقت الزوال",
    sunaltitude: "غاية ارتفاع الشمس",
    shadow: "طول واتجاه الظل ظهرا",
    dhuhrshadow: "ظل الظهر",
    fadasrshadow: "ظل بداية فضيلة العصر",
    asrshadow: "ظل العصر"
  };

  var seasonItems = {
    suhail: "سهيل",
    nawruz: "نوروز",
    anwaa: "أنواء",
    mawasem: "مواسم",
    truezodiac: "البرج الحقيقي",
    standardzodiac: "البرج الاصطلاحي"
  };

  var spt = new ShiaPrayTimes();

  var times = spt.times(
    currentDate,
    lat,
    lng,
    timeZone,
    "12hNS",
    dst,
    dstDates
  );
  times.day = currentDate.getDate();

  $("dayName").innerHTML = times.arabicdayname;
  $("dayDate").innerHTML = times.date;
  $("fajrval").innerHTML = times.subh;
  $("dhuhrval").innerHTML = times.athandhuhr;
  $("maghribval").innerHTML = times.maghrib;

  {
    let tbody = document.createElement("tbody");
    for (let z in items) {
      tbody.appendChild(makeTableRow(times[z], items[z], z));
    }
    removeAllChild($("timetable"));
    $("timetable").appendChild(tbody);
  }

  {
    let tbody = document.createElement("tbody");
    for (let z in dateItems) {
      tbody.appendChild(makeTableRow(times[z], dateItems[z], z));
    }
    removeAllChild($("datetable"));
    $("datetable").appendChild(tbody);
  }

  {
    let tbody = document.createElement("tbody");
    for (let z in sunItems) {
      tbody.appendChild(makeTableRow(times[z], sunItems[z], z));
    }
    removeAllChild($("suntable"));
    $("suntable").appendChild(tbody);
  }

  {
    let tbody = document.createElement("tbody");
    for (let z in seasonItems) {
      tbody.appendChild(makeTableRow(times[z], seasonItems[z], z));
    }
    removeAllChild($("seasontable"));
    $("seasontable").appendChild(tbody);
  }

  showEventsToday(times.hijriday, times.hijrimonth);
}

function makeSharafTable(year, tz) {
  var items = {
    mars: "شرف المريخ",
    venus: "شرف الزهرة",
    sun: "شرف الشمس",
    moon: "شرف القمر",
    rami: "شرف الرامي",
    jupiter: "شرف المشتري",
    mercury: "شرف عطارد",
    saturn: "شرف زحل",
    thanab: "شرف الذنب"
  };

  var sharafIndex = (Number(year) - 2010) * 9;
  {
    let tbody = document.createElement("tbody");
    for (let z in items) {
      let d = new Date(
        sharafData[sharafIndex][3],
        sharafData[sharafIndex][2] - 1,
        sharafData[sharafIndex][1],
        parseInt(sharafData[sharafIndex][4].slice(0, 2)) + tz,
        parseInt(sharafData[sharafIndex][4].slice(3)),
        0,
        0
      );
      let day = arabicDayNames[d.getDay()];
      let date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      let time = `${addZero(d.getHours())}:${addZero(d.getMinutes())}`;
      tbody.appendChild(makeSharafTableRow(items[z], day, date, time));
      sharafIndex++;
    }
    let sharafTable = $("sharaftable");
    removeAllChild(sharafTable);
    sharafTable.appendChild(tbody);
  }
}

// make a table row
function makeTableRow(data, item, key) {
  var row = document.createElement("tr");

  var cell = document.createElement("td");
  cell.innerHTML = item;
  row.appendChild(cell);

  cell = document.createElement("td");
  cell.innerHTML = data;
  row.appendChild(cell);

  return row;
}

function makeSharafTableRow(item, day, date, time) {
  var row = document.createElement("tr");

  var cell = document.createElement("td");
  cell.innerHTML = item;
  row.appendChild(cell);

  cell = document.createElement("td");
  cell.innerHTML = day;
  row.appendChild(cell);

  cell = document.createElement("td");
  cell.innerHTML = date;
  row.appendChild(cell);

  cell = document.createElement("td");
  cell.innerHTML = time;
  row.appendChild(cell);

  return row;
}

// remove all children of a node
function removeAllChild(node) {
  if (node == undefined || node == null) return;

  while (node.firstChild) node.removeChild(node.firstChild);
}

function $(id) {
  return document.getElementById(id);
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function showEventsToday(hijriDay, hijriMonth) {
  var myItem = eventsData.find(
    item => item[0] === Number(hijriDay) && item[1] === Number(hijriMonth)
  );

  if (myItem != undefined) {
    var i = eventsData.indexOf(myItem);
    var eventsToday = "<ul>";
    for (; eventsData[i][0] === Number(hijriDay); i++) {
      eventsToday += `<li>${eventsData[i][2]}</li>`;
    }
  } else {
    var eventsToday = `لا يوجد أحداث أو مناسبات`;
  }
  $("eventsToday").innerHTML = eventsToday;
}
