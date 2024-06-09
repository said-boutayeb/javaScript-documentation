let theTitle = "hello elzero";
var theDescription = "elzero web school";
const theDate = "25/10";
let theContains = `
    <div>
        <h3>${theTitle}</h3>
        <p>${theDescription}</p>
        <span>${theDate}</span>
    </div>
`;

for (let i = 0; i < 4; i++) {
    document.write(theContains);
}
