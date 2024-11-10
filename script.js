// // "use strict";
// // var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
// //     function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
// //     return new (P || (P = Promise))(function (resolve, reject) {
// //         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
// //         function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
// //         function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
// //         step((generator = generator.apply(thisArg, _arguments || [])).next());
// //     });
// // };


// // const form = document.getElementById("resumeform");
// // const resumePage = document.getElementById("resumePage");
// // const resumeContent = document.getElementById("resumeContent");
// // const resumePhoto = document.getElementById("resumePhoto");
// // const resumeName = document.getElementById("resumeName");
// // const resumeEmail = document.getElementById("resumeEmail");
// // const resumeMobile = document.getElementById("resumeMobile");
// // const resumeEducation = document.getElementById("resumeEducation");
// // const resumeWorkExperience = document.getElementById("resumeWorkExperience");
// // const resumeskill = document.getElementById("resumeskill");
// // const editButton = document.getElementById("editButton");
// // const sharelinkButton = document.getElementById("sharelinkbutton");
// // const downloadPdfbutton = document.getElementById("download-pdf");
// // const backbutton = document.getElementById("backbutton");



// // form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
// //     var _a;
// //     event.preventDefault();
// //     const name = document.getElementById("fullname").value;
// //     const email = document.getElementById("email").value;
// //     const mobile = document.getElementById("MOBILE").value;
// //     const education = document.getElementById("education").value;
// //     const experience = document.getElementById("experience").value;
// //     const SKILL = document.getElementById("SKILL").value;
// //     const photoInput = document.getElementById("PHOTO");
// //     const photofile = photoInput.files ? photoInput.files[0] : null;
// //     let photoBas64 = " ";
// //     if (photofile) {
// //         photoBas64 = yield fileToBase64(photofile);
// //         localStorage.setItem("resumePhoto", photoBas64);
// //         resumePhoto.src = photoBas64;
// //     }
// //     (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
// //     resumePage.classList.remove("hidden");
// //     resumeName.textContent = `Name: ${name}`;
// //     resumeEmail.textContent = `Email: ${email}`;
// //     resumeMobile.textContent = `MOBILE: ${mobile}`;
// //     resumeEducation.textContent = `Education:${education}`;
// //     resumeWorkExperience.textContent = `Working Experience: ${experience}`;
// //     resumeskill.textContent = `SKILL: ${SKILL}`;
// //     const querParams = new URLSearchParams({
// //         name: name,
// //         email: email,
// //         mobile: mobile,
// //         education: education,
// //         skill: SKILL,
// //         experience: experience,
// //     });
// //     const uniqueUrl = `${window.location.origin}?${querParams.toString()}`;
// //     sharelinkButton.addEventListener("click", () => {
// //         navigator.clipboard.writeText(uniqueUrl);
// //         alert("The link is copied");
// //     });
// //     window.history.replaceState(null, "", `${querParams.toString()}`);
// // }));
// // function fileToBase64(file) {
// //     return new Promise((resolve, reject) => {
// //         const reader = new FileReader();
// //         reader.onloadend = () => resolve(reader.result);
// //         reader.onerror = reject;
// //         reader.readAsDataURL(file);
// //     });
// // }
// // editButton.addEventListener("click", () => {
// //     var _a;
// //     updateformfromresume();
// //     (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
// //     resumePage.classList.add("hidden");
// // });
// // function updateformfromresume() {
// //     var _a, _b, _c;
// //     const [degree, education] = ((_a = resumeEducation.textContent) === null || _a === void 0 ? void 0 : _a.split("from")) || " ";
// //     document.getElementById("name").value = resumeName.textContent || '';
// //     document.getElementById("email").value = ((_b = resumeEmail.textContent) === null || _b === void 0 ? void 0 : _b.replace("Email:", "")) || '';
// //     document.getElementById("mobile").value = ((_c = resumeMobile.textContent) === null || _c === void 0 ? void 0 : _c.replace("Mobile", "")) || '';
// //     document.getElementById("education").value = resumeEducation.textContent || '';
// //     document.getElementById("experience").value = resumeWorkExperience.textContent || '';
// //     document.getElementById(" SKILL").value = resumeskill.textContent || '';
// // }
// // downloadPdfbutton.addEventListener("click", () => {
// //     if (typeof html2pdf === "undefined") {
// //         alert("Error:html2pdf library is not loaded");
// //         return;
// //     }
// //     const resumeoption = {
// //         margin: 0.5,
// //         filename: "resume pdf",
// //         img: { type: "jpeg", quality: 1.0 },
// //         htmlcanvas: { scale: 2 },
// //         jsPDF: { unit: "in", format: "letter", orientation: "potrait" }
// //     };
// //     html2pdf()
// //         .from(resumeContent)
// //         .set(resumeoption)
// //         .save()
// //         .catch((error) => {
// //         console.error("PDF Error", error);
// //     });
// // });
// // window.addEventListener("DOMContentLoaded", () => {
// //     const params = new URLSearchParams(window.location.search);
// //     const name = params.get("name") || " ";
// //     const email = params.get("email") || " ";
// //     const mobile = params.get("mobile") || " ";
// //     const education = params.get("education") || " ";
// //     const SKILL = params.get("SKILL") || " ";
// //     const experience = params.get("experience") || " ";
// //     if (name || email || mobile || education || SKILL || experience) {
// //         resumeName.textContent = `Name: ${name}`;
// //         resumeEmail.textContent = `Email: ${email}`;
// //         resumeMobile.textContent = `MOBILE: ${mobile}`;
// //         resumeEducation.textContent = `Education:${education}`;
// //         resumeWorkExperience.textContent = `Working Experience: ${experience}`;
// //         resumeskill.textContent = `SKILL: ${SKILL}`;
// //         const savePhoto = localStorage.getItem("resumePhoto");
// //         if (savePhoto) {
// //             resumePhoto.src = savePhoto;
// //         }
// //     }
// // });
// // resumePhoto.style.width = "160px";
// // resumePhoto.style.height = "160px";
// // resumePhoto.style.objectFit = "cover";
// // resumePhoto.style.borderRadius = "50%";
// // resumePhoto.style.display = "block";
// // resumePhoto.style.margin = "auto";
// // resumePhoto.style.border = "5px solid rgb(166, 178, 89)";

document.addEventListener("DOMContentLoaded", function() {
    const resumeForm = document.getElementById("resumeForm");
    const resumePage = document.getElementById("resumePage");
    const resumeContent = document.getElementById("resumeContent");
    
    // Elements for displaying resume details
    const resumeName = document.getElementById("resumeName");
    const resumeEmail = document.getElementById("resumeEmail");
    const resumeMobile = document.getElementById("resumeMobile");
    const resumeEducation = document.getElementById("resumeEducation");
    const resumeExperience = document.getElementById("resumeExperience");
    const resumeSkills = document.getElementById("resumeSkills");
    const resumePhoto = document.getElementById("resumePhoto");

    // Handle form submission
    resumeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get input values
        resumeName.textContent = document.getElementById("fullname").value;
        resumeEmail.textContent = document.getElementById("email").value;
        resumeMobile.textContent = document.getElementById("mobile").value;
        resumeEducation.textContent = document.getElementById("education").value;
        resumeExperience.textContent = document.getElementById("experience").value;
        resumeSkills.textContent = document.getElementById("skills").value;

        // Display uploaded photo
        const photoInput = document.getElementById("photo");
        if (photoInput.files && photoInput.files[0]) {
            resumePhoto.src = URL.createObjectURL(photoInput.files[0]);
        }

        // Show the resume display section and hide the form
        resumeForm.classList.add("hidden");
        resumePage.classList.remove("hidden");
    });

    // Download resume as PDF
    document.getElementById("downloadPdf").addEventListener("click", function() {
        html2pdf().from(resumeContent).save("resume.pdf");
    });

    // Edit button: go back to form with filled-in data
    document.getElementById("editButton").addEventListener("click", function() {
        resumeForm.classList.remove("hidden");
        resumePage.classList.add("hidden");
    });

    // Share resume link (basic example, for advanced functionality, consider server-side implementation)
    document.getElementById("shareLinkButton").addEventListener("click", function() {
        alert("Feature coming soon! For now, you can download your resume as a PDF.");
    });
});





   


    