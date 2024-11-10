// Form submit handler
document.getElementById('resumeForm')?.addEventListener('submit', function (event: Event) {
    event.preventDefault();
});

// Validate form and submit if valid
function validateAndSubmit(): void {
    const form = document.getElementById('resumeForm') as HTMLFormElement;

    if (form.checkValidity()) {
        formPagination();
    } else {
        form.reportValidity();
        console.log("unable to jump");
    }
}

// Pagination functions
function formPagination(): void {
    const first = document.getElementById('thirdPage') as HTMLElement;
    const second = document.getElementById('forthPage') as HTMLElement;
    if (first && second) {
        first.style.display = 'none';
        second.style.display = 'flex';
    }
}

function formPagination2(): void {
    const first = document.getElementById('forthPage') as HTMLElement;
    const second = document.getElementById('fifthPage') as HTMLElement;
    if (first && second) {
        first.style.display = 'none';
        second.style.display = 'flex';
    }
}

function firstPage(): void {
    const first = document.getElementById('front-page') as HTMLElement;
    const second = document.getElementById('thirdPage') as HTMLElement;
    if (first && second) {
        first.style.display = 'none';
        second.style.display = 'flex';
    }
}

function formPagination3(): void {
    const first = document.getElementById('fifthPage') as HTMLElement;
    const second = document.getElementById('second-page') as HTMLElement;
    if (first && second) {
        first.style.display = 'none';
        second.style.display = 'flex';
    }
}

function editPagination2(): void {
    console.log("hello");
    const first = document.getElementById('sixthPage') as HTMLElement;
    const second = document.getElementById('thirdPage') as HTMLElement;
    if (first && second) {
        first.style.display = 'none';
        second.style.display = 'flex';
    } else {
        alert('Elements not found');
    }
}

// Skill section
const skillArray: string[] = [];
function addSkill(): void {
    const skillInput = document.getElementById('skill') as HTMLInputElement;
    const skillMsg = document.getElementById('msgSkill') as HTMLElement;
    const skill = skillInput.value.trim();

    if (skillArray.length >= 5) {
        skillMsg.textContent = "You can add only 5 skills";
        skillMsg.classList.add('redMessage');
        skillMsg.classList.remove('message');
        return;
    }

    if (skill) {
        skillArray.push(skill);
        skillMsg.textContent = `Added ${skill}`;
        skillMsg.classList.add('message');
        skillMsg.classList.remove('redMessage');
        skillInput.value = '';
    } else {
        skillMsg.textContent = "Please enter a skill before adding";
        skillMsg.classList.add('redMessage');
        skillMsg.classList.remove('message');
    }
}

// Language section
const lanArray: string[] = [];
function addLang(): void {
    const lanInput = document.getElementById('language') as HTMLInputElement;
    const langMsg = document.getElementById('msgLang') as HTMLElement;
    const lang = lanInput.value.trim();

    if (lanArray.length >= 3) {
        langMsg.textContent = "You can add only 3 languages";
        langMsg.classList.add('redMessage');
        langMsg.classList.remove('message');
        return;
    }

    if (lang) {
        lanArray.push(lang);
        langMsg.textContent = `Added ${lang}`;
        langMsg.classList.add('message');
        langMsg.classList.remove('redMessage');
        lanInput.value = '';
    } else {
        langMsg.textContent = "Please enter a language before adding";
        langMsg.classList.add('redMessage');
        langMsg.classList.remove('message');
    }
}

// Hobbies section
const hobbArray: string[] = [];
function addHobbies(): void {
    const hobbInput = document.getElementById('hobbies') as HTMLInputElement;
    const hobbMsg = document.getElementById('msgHobb') as HTMLElement;
    const hobb = hobbInput.value.trim();

    if (hobbArray.length >= 3) {
        hobbMsg.textContent = "You can add only 3 hobbies";
        hobbMsg.classList.add('redMessage');
        hobbMsg.classList.remove('message');
        return;
    }

    if (hobb) {
        hobbArray.push(hobb);
        hobbMsg.textContent = `Added ${hobb}`;
        hobbMsg.classList.add('message');
        hobbMsg.classList.remove('redMessage');
        hobbInput.value = '';
    } else {
        hobbMsg.textContent = "Please enter a hobby before adding";
        hobbMsg.classList.add('redMessage');
        hobbMsg.classList.remove('message');
    }
}

// Portfolio section
interface PortfolioItem {
    platform: string;
    link: string;
}
const portArray: PortfolioItem[] = [];
function addPort(): void {
    const platformInput = document.getElementById('platform') as HTMLInputElement;
    const platformLink = document.getElementById('linkPlatform') as HTMLInputElement;
    const portMsg = document.getElementById('msgPort') as HTMLElement;
    const platform = platformInput.value.trim();
    const link = platformLink.value.trim();

    if (portArray.length >= 3) {
        portMsg.textContent = "You can add only 3 portfolio items";
        portMsg.classList.add('redMessage');
        portMsg.classList.remove('message');
        return;
    }

    if (platform && link) {
        portArray.push({ platform, link });
        portMsg.textContent = `Added ${platform} with ${link}`;
        portMsg.classList.add('message');
        portMsg.classList.remove('redMessage');
        platformInput.value = '';
        platformLink.value = '';
    } else {
        portMsg.textContent = "Please enter a platform and link before adding";
        portMsg.classList.add('redMessage');
        portMsg.classList.remove('message');
    }
}

// Experience section
interface Experience {
    companyName: string;
    companyResp: string;
}
const expArray: Experience[] = [];
function addExp(): void {
    const company = document.getElementById('companyName') as HTMLInputElement;
    const responsibilities = document.getElementById('responsibilities') as HTMLInputElement;
    const expMsg = document.getElementById('msgexp') as HTMLElement;
    const companyName = company.value.trim();
    const companyResp = responsibilities.value.trim();

    if (expArray.length >= 3) {
        expMsg.textContent = "You can add only 3 experiences";
        expMsg.classList.add('redMessage');
        expMsg.classList.remove('message');
        return;
    }

    if (companyName && companyResp) {
        expArray.push({ companyName, companyResp });
        expMsg.textContent = `Added experience at ${companyName}`;
        expMsg.classList.add('message');
        expMsg.classList.remove('redMessage');
        company.value = '';
        responsibilities.value = '';
    } else {
        expMsg.textContent = "Please enter a company name and responsibilities before adding";
        expMsg.classList.add('redMessage');
        expMsg.classList.remove('message');
    }
}

// Education section
interface Education {
    qualification: string;
    institute: string;
}
const eduArray: Education[] = [];
function addEdu(): void {
    const qualificationInp = document.getElementById('degree') as HTMLInputElement;
    const instituteInp = document.getElementById('institute') as HTMLInputElement;
    const eduMsg = document.getElementById('msgedu') as HTMLElement;
    const qualification = qualificationInp.value.trim();
    const institute = instituteInp.value.trim();

    if (eduArray.length >= 3) {
        eduMsg.textContent = "You can add only 3 education items";
        eduMsg.classList.add('redMessage');
        eduMsg.classList.remove('message');
        return;
    }

    if (qualification && institute) {
        eduArray.push({ qualification, institute });
        eduMsg.textContent = `Added education: ${qualification} at ${institute}`;
        eduMsg.classList.add('message');
        eduMsg.classList.remove('redMessage');
        qualificationInp.value = '';
        instituteInp.value = '';
    } else {
        eduMsg.textContent = "Please enter a qualification and institute before adding";
        eduMsg.classList.add('redMessage');
        eduMsg.classList.remove('message');
    }
}

// Resume theme selection
const resumeChoices = document.querySelectorAll<HTMLImageElement>('#resume-choice img');
let selectedTheme = '';

resumeChoices.forEach((img, index) => {
    img.addEventListener('click', () => {
        resumeChoices.forEach(image => image.classList.remove('selected'));
        img.classList.add('selected');
        selectedTheme = `Theme ${index + 1}`;
    });
});

// Generate resume
function generateResume(data) {
    // Get the selected theme
    let resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;
    const fname = (document.getElementById('fname') as HTMLInputElement).value;
    let lname = (document.getElementById('lname') as HTMLInputElement).value
    let profession = (document.getElementById('profession') as HTMLInputElement).value
    let about = (document.getElementById('about') as HTMLInputElement).value
    let email = (document.getElementById('email') as HTMLInputElement).value
    let contact = (document.getElementById('contact') as HTMLInputElement).value

    resumeDisplay.innerHTML = ''; // Clear previous resume

    const skillHtml = skillArray.map(skill => `<p>${skill}</p>`).join('');

    const langHtml = lanArray.map(lang => `<p>${lang}</p>`).join('');

    const hobbHtml = hobbArray.map(hobb => `<p>${hobb}</p>`).join('');

    const portHtml = portArray.map(({ platform, link }) => `<h4>${platform}</h4> <p>${link}</p>`).join('');

    const expHtml = expArray.map(({ companyName, companyResp }) => `
            <h4>${companyName}</h4>
            <ul>
                <li>${companyResp}</li>
            </ul>
    `).join('');

    const eduHtml = eduArray.map(({ qualification, institute }) => `<h4>${qualification}</h4>
            <p>${institute}</p>`).join('');

    if (selectedTheme === '') {
        alert('Please select a theme first.');
    } else {
        let first = document.querySelector('#second-page') as HTMLDivElement ;
        //  first.innerHTML = "hello"
        let second = document.querySelector('.sixthPage') as HTMLDivElement;
        first.style.display = 'none';
        second.style.display = 'block';
        // Theme 1: Red Color Resume
        if (selectedTheme === 'Theme 1') {
            const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement
            resumeDisplay.innerHTML = `
 <div class="resumebgCenter">
<div class="resume-block" id="resume-cv">
<div class="bio">
    <h1>${fname} ${lname}</h1>
    <h4>${profession}</h4>
    <p>${about}</p>
</div>

<div class="panels">
    <div class="left-panel">
        <div class="contact-info">
            <p><i class="fa-regular fa-envelope"></i> ${email}</p>
            <p><i class="fa-solid fa-phone"></i> <br> ${contact}</p>
        </div>
        <div class="software" id="software">
            <h3>Skills</h3>
            <div></div>
            ${skillHtml}
        </div>
       
        <div class="software" id="skill">
            <h3>Languages</h3>
            <div></div>
             ${langHtml}
        </div>

        <div class="software" id="Hobbies">
            <h3>Hobbies</h3>
              <div></div>
                ${hobbHtml}
        </div>
        
    </div>
    <div class="right-panel">
        <div class="information" id="Portfolio">
            <h3>Portfolio</h3>
            <div></div>
            ${portHtml}
        </div>

        <div class="information" id="Experience">
            <h3>Experience</h3>
            <div></div>
${expHtml}
        </div>

        <div class="information" id="Education">
            <h3>Education</h3>
            <div></div>
              ${eduHtml}
        </div>
    </div>
    </div>
 `
        }
        // Theme 2: Blue Color Resume
        else if (selectedTheme === 'Theme 2') {
            const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement
            resumeDisplay.innerHTML = `
<h1>Working On It Soon More Themes Avaliable!</h1>
 `
        }
        // Theme 3: Green Color Resume
        else if (selectedTheme === 'Theme 3') {
            const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement
            resumeDisplay.innerHTML = `
<h1>Working On It Soon More Themes Avaliable!</h1>
 `
        }
    }
}


function printCard() {
    var originalContent = document.body.innerHTML; // Store the original page content
    var divContent = (document.getElementById('resume-cv') as HTMLDivElement).innerHTML; // Get the content of the card

    document.body.innerHTML = divContent; // Replace the body content with the card content
    window.print(); // Trigger the print dialog
    document.body.innerHTML = originalContent; // Restore the original page content after printing
}