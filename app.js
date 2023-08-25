let myName = "Sebastian Meadows";
let career = "Full Stack Web Developer";
let desc = "My name is Sebastian Meadows, and I am a Full-Stack Web Application Developer. I build websites and web applications for small businesses and subsidiaries looking to improve their outreach and competitiveness in their market."
let interests = ["Learning the KJV Bible", "Playing guitar", "Biking", "Talking with my wife"];
let history = {
    "AWT": {
        company: "AWT Labels and Packaging",
        title: "Customer Service Support",
        role: "Problem identification, problem analysis, and solution implementation for internal and external customers.",
    },
    "Premier Marine": {
        company: "Premier Marine",
        title: "Data Entry Clerk",
        role: "Collected, processed, and transferred front-end product data from Epicor ERP system into Magento e-commerce platform."
    },
    "Bare Home": {
        company: "Bare Home",
        title: "Digital Marketing Specialist",
        role: "Singularly designed and implemented A/B testing concepts for flagship and low-metric products through Amazon Seller Central's A+ Content tool. Coached, proofread, and edited product copy written by Copywriter Intern. Manipulated and analyzed YOY / MOM sales metrics by SKU for potential growth candidates."
    }
};

let skills = {
    skill1: "Data Analysis",
    skill2: "Front-End Development",
    skill3: {skill: "HTML5", isCool: true},
    skill4: {skill: "CSS", isCool: true},
    skill5: {skill: "JavaScript", isCool: true}
};

let historyKeys = Object.keys(history)
let skillsKeys = Object.keys(skills)
let coolCheck = skillsKeys[0].isCool;

function displayInterests(interests) {
    for(let i = 0; i < interests.length; i++) {
        console.log("* " + interests[i]);
    }
}

function displayPosition(company, title, role) {
        console.log("* " + company + " - " + title + " - " + role);
};

function displaySkills(skill, coolCheck) {
    for(let i = 0; i < skill.length; i++) {
        let coolCheck = skills[skill[i]].isCool;
        if (coolCheck == true) {
            console.log("* BAM: " + skills[skill[i]].skill);
        } else {
            console.log("* " + skills[skill[i]]);
        }
    }
}

console.log("Name: " + myName.toUpperCase())
console.log("Career: " + career)
console.log("Description: " + desc)
console.log("My Interests: ")
displayInterests(interests)
console.log("My Previous Experience")
for (let j = 0; j < historyKeys.length; j++) {
    displayPosition(history[historyKeys[j]].company, history[historyKeys[j]].title, history[historyKeys[j]].role);
}
console.log("My Skills");
displaySkills(skillsKeys, coolCheck)