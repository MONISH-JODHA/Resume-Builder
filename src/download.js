
function download(){
    const resume=document.getElementById("resume");
    console.log(resume);
    console.log(window);
    var opt={
        margin: 0,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter' }
    };
    html2pdf().from(resume).set(opt).save();
   
}


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("getfile").document.addEventListener("click" ,function(){
        
    })
})