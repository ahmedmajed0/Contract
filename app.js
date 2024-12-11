// form data
let FPartyNameEN = document.getElementById("FPartyNameEN");
let FPartyNameAR = document.getElementById("FPartyNameAR");
let FPartyNationalityEN = document.getElementById("FPartyNationalityEN");
let FPartyNationalityAR = document.getElementById("FPartyNationalityAR");
let FPartyAddressEN = document.getElementById("FPartyAddressEN");
let FPartyAddressAR = document.getElementById("FPartyAddressAR");
let FPartyTelephoneNo = document.getElementById("FPartyTelephoneNo");
let residenceType = document.getElementById("residenceType");
let CivilId = document.getElementById("CivilId");
let FamilyMembers = document.getElementById("FamilyMembers");
let SecPartyNameEN = document.getElementById("SecPartyNameEN");
let SecPartyNameAR = document.getElementById("SecPartyNameAR");
let SecPartyNationalityEN = document.getElementById("SecPartyNationalityEN");
let SecPartyNationalityAR = document.getElementById("SecPartyNationalityAR");
let DateOfBirth = document.getElementById("DateOfBirth");
let SexType = document.getElementById("SexType");
let SecPartyOccupationEN = document.getElementById("SecPartyOccupationEN");
let SecPartyOccupationAR = document.getElementById("SecPartyOccupationAR");
let SecPartySalary = document.getElementById("salary");
let SecPartyPassportNo = document.getElementById("SecPartyPassportNo");


// date
let topDate = document.getElementById("topDate");
let nameOfDay = document.getElementById("dayName");


// view btn
document.getElementById("viewPdf").addEventListener("click", function () {
    // show pdf
    document.getElementById("pdf").classList.remove("d-none"); 
    document.getElementById("downloadPdf").classList.remove("d-none"); 
    


    // change values
    const today = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[today.getDay()];



    topDate.textContent = today.toLocaleDateString();
    nameOfDay.textContent = dayName;
    EmployerNameEN.textContent  = FPartyNameEN.value;
    EmployerNationalityEN.textContent  = FPartyNationalityEN.value;
    EmployerCivilID.textContent  = CivilId.value;
    EmployerAddressEN.textContent  = FPartyAddressEN.value;
    EmployerFamilyMembers.textContent  = FamilyMembers.value;
    ResidenceType.textContent  = residenceType.value;
    EmployerTel.textContent  = FPartyTelephoneNo.value;
    DomesticNameEn.textContent  = SecPartyNameEN.value;
    DomesticNationalityEN.textContent  = SecPartyNationalityEN.value;
    DomesticSex.textContent  = SexType.value;
    DomesticPassport.textContent  = SecPartyPassportNo.value;
    DomesticOccupationEN.textContent  = SecPartyOccupationEN.value;
    DomesticDateofBirth.textContent  = DateOfBirth.value;


});


document.getElementById("downloadPdf").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;

    const element = document.getElementById("pdf");

    html2canvas(element).then((canvas) => {
        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 210; // PDF page width in mm
        const pageHeight = 297; // PDF page height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate image height proportionally

        let position = 0; // Initial position

        const imgData = canvas.toDataURL("image/png");

        // Add first page
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

        let heightLeft = imgHeight - pageHeight;

        // Add additional pages if content exceeds one page
        while (heightLeft > 0) {
            position -= pageHeight; // Shift position upwards to overlap content
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        // Save the PDF
        pdf.save("document.pdf");
    });
});



