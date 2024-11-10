var _a;
// Form submit handler
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
});
// Validate form and submit if valid
function validateAndSubmit() {
    var form = document.getElementById('resumeForm');
    if (form.checkValidity()) {
        formPagination();
    }
    else {
        form.reportValidity();
        console.log("unable to jump");
    }
}
// Pagination functions
function formPagination() {
    var first = document.getElementById('thirdPage');
    var second = document.getElementById('forthPage');
    if (first && second) {
        first.style.display = 'none';
        second.style.display = 'flex';
    }
}
function formPagination2() {
    var first = document.getElementById('forthPage');
    var second = document.getElementById('fifthPage');
    if (first && second) {
        first.style.display = 'none';
        second.style.display = 'flex';
    }
}
function firstPage() {
    var first = document.getElementById('front-page');
    var second = document.getElementById('thirdPage');
    if (first && second) {
        first.style.display = 'none';
        second.style.display = 'flex';
    }
}
function formPagination3() {
    var first = document.getElementById('fifthPage');
    var second = document.getElementById('second-page');
    if (first && second) {
        first.style.display = 'none';
        second.style.display = 'flex';
    }
}
function editPagination2() {
    console.log("hello");
    var first = document.getElementById('sixthPage');
    var second = document.getElementById('thirdPage');
    if (first && second) {
        first.style.display = 'none';
        second.style.display = 'flex';
    }
    else {
        alert('Elements not found');
    }
}
// Skill section
var skillArray = [];
function addSkill() {
    var skillInput = document.getElementById('skill');
    var skillMsg = document.getElementById('msgSkill');
    var skill = skillInput.value.trim();
    if (skillArray.length >= 5) {
        skillMsg.textContent = "You can add only 5 skills";
        skillMsg.classList.add('redMessage');
        skillMsg.classList.remove('message');
        return;
    }
    if (skill) {
        skillArray.push(skill);
        skillMsg.textContent = "Added ".concat(skill);
        skillMsg.classList.add('message');
        skillMsg.classList.remove('redMessage');
        skillInput.value = '';
    }
    else {
        skillMsg.textContent = "Please enter a skill before adding";
        skillMsg.classList.add('redMessage');
        skillMsg.classList.remove('message');
    }
}
// Language section
var lanArray = [];
function addLang() {
    var lanInput = document.getElementById('language');
    var langMsg = document.getElementById('msgLang');
    var lang = lanInput.value.trim();
    if (lanArray.length >= 3) {
        langMsg.textContent = "You can add only 3 languages";
        langMsg.classList.add('redMessage');
        langMsg.classList.remove('message');
        return;
    }
    if (lang) {
        lanArray.push(lang);
        langMsg.textContent = "Added ".concat(lang);
        langMsg.classList.add('message');
        langMsg.classList.remove('redMessage');
        lanInput.value = '';
    }
    else {
        langMsg.textContent = "Please enter a language before adding";
        langMsg.classList.add('redMessage');
        langMsg.classList.remove('message');
    }
}
// Hobbies section
var hobbArray = [];
function addHobbies() {
    var hobbInput = document.getElementById('hobbies');
    var hobbMsg = document.getElementById('msgHobb');
    var hobb = hobbInput.value.trim();
    if (hobbArray.length >= 3) {
        hobbMsg.textContent = "You can add only 3 hobbies";
        hobbMsg.classList.add('redMessage');
        hobbMsg.classList.remove('message');
        return;
    }
    if (hobb) {
        hobbArray.push(hobb);
        hobbMsg.textContent = "Added ".concat(hobb);
        hobbMsg.classList.add('message');
        hobbMsg.classList.remove('redMessage');
        hobbInput.value = '';
    }
    else {
        hobbMsg.textContent = "Please enter a hobby before adding";
        hobbMsg.classList.add('redMessage');
        hobbMsg.classList.remove('message');
    }
}
var portArray = [];
function addPort() {
    var platformInput = document.getElementById('platform');
    var platformLink = document.getElementById('linkPlatform');
    var portMsg = document.getElementById('msgPort');
    var platform = platformInput.value.trim();
    var link = platformLink.value.trim();
    if (portArray.length >= 3) {
        portMsg.textContent = "You can add only 3 portfolio items";
        portMsg.classList.add('redMessage');
        portMsg.classList.remove('message');
        return;
    }
    if (platform && link) {
        portArray.push({ platform: platform, link: link });
        portMsg.textContent = "Added ".concat(platform, " with ").concat(link);
        portMsg.classList.add('message');
        portMsg.classList.remove('redMessage');
        platformInput.value = '';
        platformLink.value = '';
    }
    else {
        portMsg.textContent = "Please enter a platform and link before adding";
        portMsg.classList.add('redMessage');
        portMsg.classList.remove('message');
    }
}
var expArray = [];
function addExp() {
    var company = document.getElementById('companyName');
    var responsibilities = document.getElementById('responsibilities');
    var expMsg = document.getElementById('msgexp');
    var companyName = company.value.trim();
    var companyResp = responsibilities.value.trim();
    if (expArray.length >= 3) {
        expMsg.textContent = "You can add only 3 experiences";
        expMsg.classList.add('redMessage');
        expMsg.classList.remove('message');
        return;
    }
    if (companyName && companyResp) {
        expArray.push({ companyName: companyName, companyResp: companyResp });
        expMsg.textContent = "Added experience at ".concat(companyName);
        expMsg.classList.add('message');
        expMsg.classList.remove('redMessage');
        company.value = '';
        responsibilities.value = '';
    }
    else {
        expMsg.textContent = "Please enter a company name and responsibilities before adding";
        expMsg.classList.add('redMessage');
        expMsg.classList.remove('message');
    }
}
var eduArray = [];
function addEdu() {
    var qualificationInp = document.getElementById('degree');
    var instituteInp = document.getElementById('institute');
    var eduMsg = document.getElementById('msgedu');
    var qualification = qualificationInp.value.trim();
    var institute = instituteInp.value.trim();
    if (eduArray.length >= 3) {
        eduMsg.textContent = "You can add only 3 education items";
        eduMsg.classList.add('redMessage');
        eduMsg.classList.remove('message');
        return;
    }
    if (qualification && institute) {
        eduArray.push({ qualification: qualification, institute: institute });
        eduMsg.textContent = "Added education: ".concat(qualification, " at ").concat(institute);
        eduMsg.classList.add('message');
        eduMsg.classList.remove('redMessage');
        qualificationInp.value = '';
        instituteInp.value = '';
    }
    else {
        eduMsg.textContent = "Please enter a qualification and institute before adding";
        eduMsg.classList.add('redMessage');
        eduMsg.classList.remove('message');
    }
}
// Resume theme selection
var resumeChoices = document.querySelectorAll('#resume-choice img');
var selectedTheme = '';
resumeChoices.forEach(function (img, index) {
    img.addEventListener('click', function () {
        resumeChoices.forEach(function (image) { return image.classList.remove('selected'); });
        img.classList.add('selected');
        selectedTheme = "Theme ".concat(index + 1);
    });
});
// Generate resume
function generateResume(data) {
    // Get the selected theme
    var resumeDisplay = document.getElementById('resumeDisplay');
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var profession = document.getElementById('profession').value;
    var about = document.getElementById('about').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    resumeDisplay.innerHTML = ''; // Clear previous resume
    var skillHtml = skillArray.map(function (skill) { return "<p>".concat(skill, "</p>"); }).join('');
    var langHtml = lanArray.map(function (lang) { return "<p>".concat(lang, "</p>"); }).join('');
    var hobbHtml = hobbArray.map(function (hobb) { return "<p>".concat(hobb, "</p>"); }).join('');
    var portHtml = portArray.map(function (_a) {
        var platform = _a.platform, link = _a.link;
        return "<h4>".concat(platform, "</h4> <p>").concat(link, "</p>");
    }).join('');
    var expHtml = expArray.map(function (_a) {
        var companyName = _a.companyName, companyResp = _a.companyResp;
        return "\n            <h4>".concat(companyName, "</h4>\n            <ul>\n                <li>").concat(companyResp, "</li>\n            </ul>\n    ");
    }).join('');
    var eduHtml = eduArray.map(function (_a) {
        var qualification = _a.qualification, institute = _a.institute;
        return "<h4>".concat(qualification, "</h4>\n            <p>").concat(institute, "</p>");
    }).join('');
    if (selectedTheme === '') {
        alert('Please select a theme first.');
    }
    else {
        var first = document.querySelector('#second-page');
        //  first.innerHTML = "hello"
        var second = document.querySelector('.sixthPage');
        first.style.display = 'none';
        second.style.display = 'block';
        // Theme 1: Red Color Resume
        if (selectedTheme === 'Theme 1') {
            var resumeDisplay_1 = document.getElementById('resumeDisplay');
            resumeDisplay_1.innerHTML = "\n <div class=\"resumebgCenter\">\n<div class=\"resume-block\" id=\"resume-cv\">\n<div class=\"bio\">\n    <h1>".concat(fname, " ").concat(lname, "</h1>\n    <h4>").concat(profession, "</h4>\n    <p>").concat(about, "</p>\n</div>\n\n<div class=\"panels\">\n    <div class=\"left-panel\">\n        <div class=\"contact-info\">\n            <p><i class=\"fa-regular fa-envelope\"></i> ").concat(email, "</p>\n            <p><i class=\"fa-solid fa-phone\"></i> <br> ").concat(contact, "</p>\n        </div>\n        <div class=\"software\" id=\"software\">\n            <h3>Skills</h3>\n            <div></div>\n            ").concat(skillHtml, "\n        </div>\n       \n        <div class=\"software\" id=\"skill\">\n            <h3>Languages</h3>\n            <div></div>\n             ").concat(langHtml, "\n        </div>\n\n        <div class=\"software\" id=\"Hobbies\">\n            <h3>Hobbies</h3>\n              <div></div>\n                ").concat(hobbHtml, "\n        </div>\n        \n    </div>\n    <div class=\"right-panel\">\n        <div class=\"information\" id=\"Portfolio\">\n            <h3>Portfolio</h3>\n            <div></div>\n            ").concat(portHtml, "\n        </div>\n\n        <div class=\"information\" id=\"Experience\">\n            <h3>Experience</h3>\n            <div></div>\n").concat(expHtml, "\n        </div>\n\n        <div class=\"information\" id=\"Education\">\n            <h3>Education</h3>\n            <div></div>\n              ").concat(eduHtml, "\n        </div>\n    </div>\n    </div>\n ");
        }
        // Theme 2: Blue Color Resume
        else if (selectedTheme === 'Theme 2') {
            var resumeDisplay_2 = document.getElementById('resumeDisplay');
            resumeDisplay_2.innerHTML = "\n<h1>Working On It Soon More Themes Avaliable!</h1>\n ";
        }
        // Theme 3: Green Color Resume
        else if (selectedTheme === 'Theme 3') {
            var resumeDisplay_3 = document.getElementById('resumeDisplay');
            resumeDisplay_3.innerHTML = "\n<h1>Working On It Soon More Themes Avaliable!</h1>\n ";
        }
    }
}
function printCard() {
    var originalContent = document.body.innerHTML; // Store the original page content
    var divContent = document.getElementById('resume-cv').innerHTML; // Get the content of the card
    document.body.innerHTML = divContent; // Replace the body content with the card content
    window.print(); // Trigger the print dialog
    document.body.innerHTML = originalContent; // Restore the original page content after printing
}
