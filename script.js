"use strict";
var form = document.forms.FORM1;
form.addEventListener("submit", validateFormInfo, false);
function validateFormInfo(e) {
  e = e || window.event;
  try {
    var form = document.forms.FORM1;

    var devField = form.elements.developers;
    var devValue = devField.value;

    var siteNameField = form.elements.siteName;
    var siteNameValue = siteNameField.value;

    var siteAdressField = form.elements.siteAdress;
    var siteAdressValue = siteAdressField.value;

    var dateField = form.elements.date;
    var dateValue = dateField.value;

    var visitorsField = form.elements.visitors;
    var visitorsValue = visitorsField.value;

    var contactsField = form.elements.contacts;
    var contactsValue = contactsField.value;

    var rubrField = form.elements.rubr;
    var rubrValue = rubrField.value;

    var hostField = form.elements.host;
    var hostValue = hostField.value;

    var agreeField = form.elements.agree;
    var agreeValue = agreeField.checked;

    var descrField = form.elements.descr;
    var descrValue = descrField.value;
    //поле не должно быть пустым, максимальная длина введенного текста - 100 символов
    if (descrValue.length < 1) {
      var sp = form.querySelector("textarea[name=descr] + span");
      sp.textContent = "Добавьте описание сайта!";
      sp.style.color = "red";
      descrField.focus();
      e.preventDefault();
    } else if (descrValue.length > 100) {
      var sp = form.querySelector("textarea[name=descr] + span");
      sp.textContent = "Максимальная длина текста - 100 символов!";
      sp.style.color = "red";
      descrField.focus();
      e.preventDefault();
    } else {
      var sp = form.querySelector("textarea[name=descr] + span");
      sp.textContent = null;
    }
     //отзывы должны быть разрешены
    if (!agreeValue) {
      var sp = form.querySelector("input[name=agree] + span");
      sp.textContent = "Разрешите отзывы!";
      sp.style.color = "red";
      agreeField.focus();
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=agree] + span");
      sp.textContent = null;
    }
    //должен быть выбран любой тип размещения, кроме бесплатного
    if (!hostValue) {
      var sp = form.querySelector("input[name=host] + span");
      sp.textContent = "Выберите тип размещения!";
      sp.style.color = "red";
      form.querySelector("input[name=host]").scrollIntoView();
      e.preventDefault();
    } else if (hostValue == "11") {
      var sp = form.querySelector("input[name=host] + span");
      sp.textContent =
        "Извините, в данный момент этот тип размещения не доступен";
      sp.style.color = "red";
      form.querySelector("input[name=host]").scrollIntoView();
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=host] + span");
      sp.textContent = null;
    }
    //должна быть выбрана любая рубрика, кроме рубрики "бытовая техника"
    if (rubrValue == "1") {
      var sp = form.querySelector("select[name=rubr] + span");
      sp.textContent = "Выберите другую рубрику!";
      sp.style.color = "red";
      rubrField.focus();
      e.preventDefault();
    } else {
      var sp = form.querySelector("select[name=rubr] + span");
      sp.textContent = null;
    }
    //поле не должно быть пустым, максимальная длина введенного текста - 20 символов
    if (contactsValue.length < 1) {
      var sp = form.querySelector("input[name=contacts] + span");
      sp.textContent = "Данная строка требует заполнения!";
      sp.style.color = "red";
      contactsField.focus();
      e.preventDefault();
    } else if (contactsValue.length > 20) {
      var sp = form.querySelector("input[name=contacts] + span");
      sp.textContent = "Максимальная длина строки - 20 символов!";
      sp.style.color = "red";
      contactsField.focus();
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=contacts] + span");
      sp.textContent = null;
    }
    //поле не должно быть пустым
    if (visitorsValue.length < 1) {
      var sp = form.querySelector("input[name=visitors] + span");
      sp.textContent = "Данная строка требует заполнения!";
      sp.style.color = "red";
      visitorsField.focus();
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=visitors] + span");
      sp.textContent = null;
    }
    //поле не должно быть пустым, максимальная длина введенного текста - 10 символов в формате дд.мм.гггг 
    if (dateValue.length < 7) {
      var sp = form.querySelector("input[name=date] + span");
      sp.textContent = "Данная строка требует заполнения!";
      sp.style.color = "red";
      dateField.focus();
      e.preventDefault();
    } else if (dateValue.length > 10) {
      var sp = form.querySelector("input[name=date] + span");
      sp.textContent = "Необходимо ввести дату в формате дд.мм.гггг!";
      sp.style.color = "red";
      dateField.focus();
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=date] + span");
      sp.textContent = null;
    }
    //поле не должно быть пустым, максимальная длина введенного текста - 20 символов
    if (siteAdressValue.length < 1) {
      var sp = form.querySelector("input[name=siteAdress] + span");
      sp.textContent = "Данная строка требует заполнения!";
      sp.style.color = "red";
      siteAdressField.focus();
      e.preventDefault();
    } else if (siteAdressValue.length > 20) {
      var sp = form.querySelector("input[name=siteAdress] + span");
      sp.textContent = "Максимальная длина строки - 20 символов!";
      sp.style.color = "red";
      siteAdressField.focus();
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=siteAdress] + span");
      sp.textContent = null;
    }
    //поле не должно быть пустым, максимальная длина введенного текста - 20 символов
    if (siteNameValue.length < 1) {
      var sp = form.querySelector("input[name=siteName] + span");
      sp.textContent = "Данная строка требует заполнения!";
      sp.style.color = "red";
      siteNameField.focus();
      e.preventDefault();
    } else if (siteNameValue.length > 20) {
      var sp = form.querySelector("input[name=siteName] + span");
      sp.textContent = "Максимальная длина строки - 20 символов!";
      sp.style.color = "red";
      siteNameField.focus();
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=siteName] + span");
      sp.textContent = null;
    }
    //поле не должно быть пустым, максимальная длина введенного текста - 20 символов
    if (devValue.length < 1) {
      var sp = form.querySelector("input[name=developers] + span");
      sp.textContent = "Данная строка требует заполнения!";
      sp.style.color = "red";
      devField.focus();
      e.preventDefault();
    } else if (devValue.length > 20) {
      var sp = form.querySelector("input[name=developers] + span");
      sp.textContent = "Максимальная длина строки - 20 символов!";
      sp.style.color = "red";
      devField.focus();
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=developers] + span");
      sp.textContent = null;
    }
  } catch (ex) {
    alert("Что-то пошло не так!");
    e.preventDefault();
  }
}

var devField = form.elements.developers;
devField.addEventListener("blur", checkDevValue, false);
function checkDevValue(e) {
  e = e || window.event;
  try {
    var devField = form.elements.developers;
    var devValue = devField.value;
    if (devValue.length < 1) {
      var sp = form.querySelector("input[name=developers] + span");
      sp.textContent = "Данная строка требует заполнения!";
      sp.style.color = "red";
      e.preventDefault();
    } else if (devValue.length > 20) {
      var sp = form.querySelector("input[name=developers] + span");
      sp.textContent = "Максимальная длина строки - 20 символов!";
      sp.style.color = "red";
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=developers] + span");
      sp.textContent = null;
    }
  } catch {
    alert("Что-то пошло не так!");
    e.preventDefault();
  }
}

var siteNameField = form.elements.siteName;
siteNameField.addEventListener("blur", checkSiteNameValue, false);
function checkSiteNameValue(e) {
  e = e || window.event;
  try {
    var siteNameField = form.elements.siteName;
    var siteNameValue = siteNameField.value;
    if (siteNameValue.length < 1) {
      var sp = form.querySelector("input[name=siteName] + span");
      sp.textContent = "Данная строка требует заполнения!";
      sp.style.color = "red";
      e.preventDefault();
    } else if (siteNameValue.length > 20) {
      var sp = form.querySelector("input[name=siteName] + span");
      sp.textContent = "Максимальная длина строки - 20 символов!";
      sp.style.color = "red";
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=siteName] + span");
      sp.textContent = null;
    }
  } catch {
    alert("Что-то пошло не так!");
    e.preventDefault();
  }
}

var siteAdressField = form.elements.siteAdress;
siteAdressField.addEventListener("blur", checkSiteAdressValue, false);
function checkSiteAdressValue(e) {
  e = e || window.event;
  try {
    var siteAdressField = form.elements.siteAdress;
    var siteAdressValue = siteAdressField.value;
    if (siteAdressValue.length < 1) {
      var sp = form.querySelector("input[name=siteAdress] + span");
      sp.textContent = "Данная строка требует заполнения!";
      sp.style.color = "red";
      e.preventDefault();
    } else if (siteAdressValue.length > 20) {
      var sp = form.querySelector("input[name=siteAdress] + span");
      sp.textContent = "Максимальная длина строки - 20 символов!";
      sp.style.color = "red";
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=siteAdress] + span");
      sp.textContent = null;
    }
  } catch {
    alert("Что-то пошло не так!");
    e.preventDefault();
  }
}

var dateField = form.elements.date;
dateField.addEventListener("blur", checkDateValue, false);
function checkDateValue(e) {
  e = e || window.event;
  try {
    var dateField = form.elements.date;
    var dateValue = dateField.value;
    if (dateValue.length < 7) {
      var sp = form.querySelector("input[name=date] + span");
      sp.textContent = "Данная строка требует заполнения!";
      sp.style.color = "red";
      e.preventDefault();
    } else if (dateValue.length > 10) {
      var sp = form.querySelector("input[name=date] + span");
      sp.textContent = "Необходимо ввести дату в формате дд.мм.гггг!";
      sp.style.color = "red";
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=date] + span");
      sp.textContent = null;
    }
  } catch {
    alert("Что-то пошло не так!");
    e.preventDefault();
  }
}

var visitorsField = form.elements.visitors;
visitorsField.addEventListener("blur", checkVisitorsValue, false);
function checkVisitorsValue(e) {
  e = e || window.event;
  try {
    var visitorsField = form.elements.visitors;
    var visitorsValue = visitorsField.value;
    if (visitorsValue.length < 1) {
      var sp = form.querySelector("input[name=visitors] + span");
      sp.textContent = "Данная строка требует заполнения!";
      sp.style.color = "red";
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=visitors] + span");
      sp.textContent = null;
    }
  } catch {
    alert("Что-то пошло не так!");
    e.preventDefault();
  }
}

var contactsField = form.elements.contacts;
contactsField.addEventListener("blur", checkContactsValue, false);
function checkContactsValue(e) {
  e = e || window.event;
  try {
    var contactsField = form.elements.contacts;
    var contactsValue = contactsField.value;
    if (contactsValue.length < 1) {
      var sp = form.querySelector("input[name=contacts] + span");
      sp.textContent = "Данная строка требует заполнения!";
      sp.style.color = "red";
      e.preventDefault();
    } else if (contactsValue.length > 20) {
      var sp = form.querySelector("input[name=contacts] + span");
      sp.textContent = "Максимальная длина строки - 20 символов!";
      sp.style.color = "red";
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=contacts] + span");
      sp.textContent = null;
    }
  } catch {
    alert("Что-то пошло не так!");
    e.preventDefault();
  }
}

var rubrField = form.elements.rubr;
rubrField.addEventListener("change", checkRubrValue, false);
function checkRubrValue(e) {
  e = e || window.event;
  try {
    var rubrField = form.elements.rubr;
    var rubrValue = rubrField.value;
    if (rubrValue == "1") {
      var sp = form.querySelector("select[name=rubr] + span");
      sp.textContent = "Выберите другую рубрику!";
      sp.style.color = "red";
      e.preventDefault();
    } else {
      var sp = form.querySelector("select[name=rubr] + span");
      sp.textContent = null;
    }
  } catch {
    alert("Что-то пошло не так!");
    e.preventDefault();
  }
}

var hostField = form.elements.host;
for (var elem of hostField) {
  elem.addEventListener("change", checkHostValue, false);
}

function checkHostValue(e) {
  e = e || window.event;
  try {
    var hostField = form.elements.host;
    var hostValue = hostField.value;
    if (!hostValue) {
      var sp = form.querySelector("input[name=host] + span");
      sp.textContent = "Выберите тип размещения!";
      sp.style.color = "red";
      e.preventDefault();
    } else if (hostValue == "11") {
      var sp = form.querySelector("input[name=host] + span");
      sp.textContent =
        "Извините, в данный момент этот тип размещения не доступен";
      sp.style.color = "red";
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=host] + span");
      sp.textContent = null;
    }
  } catch {
    alert("Что-то пошло не так!");
    e.preventDefault();
  }
}

var agreeField = form.elements.agree;
console.log("agreeField");
agreeField.addEventListener("change", checkAgreeValue, false);
function checkAgreeValue(e) {
  e = e || window.event;
  try {
    var agreeField = form.elements.agree;
    var agreeValue = agreeField.checked;
    if (!agreeValue) {
      var sp = form.querySelector("input[name=agree] + span");
      sp.textContent = "Разрешите отзывы!";
      sp.style.color = "red";
      e.preventDefault();
    } else {
      var sp = form.querySelector("input[name=agree] + span");
      sp.textContent = null;
    }
  } catch {
    alert("Что-то пошло не так!");
    e.preventDefault();
  }
}

var descrField = form.elements.descr;
descrField.addEventListener("blur", checkDescrValue, false);
function checkDescrValue(e) {
  e = e || window.event;
  try {
    var descrField = form.elements.descr;
    var descrValue = descrField.value;
    if (descrValue.length < 1) {
      var sp = form.querySelector("textarea[name=descr] + span");
      sp.textContent = "Добавьте описание сайта!";
      sp.style.color = "red";
      e.preventDefault();
    } else if (descrValue.length > 100) {
      var sp = form.querySelector("textarea[name=descr] + span");
      sp.textContent = "Максимальная длина текста - 100 символов!";
      sp.style.color = "red";
      e.preventDefault();
    } else {
      var sp = form.querySelector("textarea[name=descr] + span");
      sp.textContent = null;
    }
  } catch {
    alert("Что-то пошло не так!");
    e.preventDefault();
  }
};