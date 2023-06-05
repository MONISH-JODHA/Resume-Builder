//dynamic effect;
const content=document.querySelector(".title");
console.log(content);
let words=["Resume-Builder","By: Monish Jodha "];

let letterindex=0;
let phraseindex=0;
function printletter(w){
    if(letterindex==w.length){
        clearletter();
    }
    else if(letterindex<w.length){
        content.textContent+=w.charAt(letterindex);
        letterindex+=1;
        setTimeout(function(){
            printletter(w)   
        },100)
    }
}

function clearletter(){
    if(letterindex==-1){
        phraseindex=(phraseindex+1)%words.length;
        letterindex=0;
        printletter(words[phraseindex])
    }
    else if (letterindex > -1){
        let updatecontent="";
        for(let i=0; i<letterindex;i++){
            updatecontent+=words[phraseindex].charAt(i);
        }
        content.textContent=updatecontent;
        letterindex-=1;
        setTimeout(clearletter,80);
        
        
        
    }

}

printletter(words[0]);