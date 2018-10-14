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

// display monthly timetable
function update(lat, lng, timeZone, dst) {
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();
  var dstDates = [3, 1, 10, 1];

  makeTable(year, month, lat, lng, timeZone, dst, dstDates);
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

  // var dir = spt.getQiblaDirection(lat, lng);
  // $("qibla").style.transform = "rotate(" + (dir - 90).toFixed(0) + "deg)";
}

// make a table row
function makeTableRow(data, item, key) {
  var row = document.createElement("tr");
  // var cellClass;

  // switch (key) {
  //   case "suhail":
  //   case "nawruz":
  //   case "anwaa":
  //   case "mawasem":
  //   case "truezodiac":
  //   case "standardzodiac":
  //     cellClass = "season";
  //     break;
  //   case "shadow":
  //   case "dhuhrshadow":
  //   case "fadasrshadow":
  //   case "asrshadow":
  //     cellClass = "shadow";
  //     break;
  //   default:
  //     cellClass = "";
  // }

  var cell = document.createElement("td");
  cell.innerHTML = item;
  row.appendChild(cell);

  cell = document.createElement("td");
  cell.innerHTML = data;
  row.appendChild(cell);

  // row.className = cellClass;
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
