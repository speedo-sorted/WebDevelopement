function jsHilight(editorClass){

    const quotation = ["'", '"', '`'];
    const operators = [ "=", "-", "+", "*", "**", "/", "%", "++", "--", ">", "<", "===", "==", "!=", "!==", ">=", "<="];
    const seperators = [".", ';', ',', '(', ')', "{", "}","[", "]", ' ', '\n', "'", '"', '`'];
    const objects = ["Number", "Math", "NaN", "String", "Date", "Array", "Boolean", "console", "Promise", "Worker", "BroadcastChannel"];
    const keywords = ["case",
    "catch","class","const","continue",
    "debugger","default","delete","do","else","enum","export","extends","false",
    "finally","for","function","if","implements","import","in",
    "instanceof","interface", "of", "let","new","null","package","private","protected",
    "public","return","super","switch","static","this","throw","try","true","typeof",
    "var","void","while","with","yield"];
    const brackets = ["(", ")", "{", "}","[", "]"];
    
    let code = document.querySelector(`.${editorClass}`);
    if(code === null)   return;

    let codelang = code.dataset.lang;
    console.log(codelang);

    let codeContent = code.innerText.trim();
    console.log(codeContent);
    
    code.innerText = "";
    
    let text = "";
    for(let i = 0; i < codeContent.length ; i++)
    {
        if(seperators.indexOf(codeContent[i]) !== -1)
        {   
            if(quotation.indexOf(codeContent[i]) !== -1)
            {   
                let quotpos = codeContent.slice(i+1).indexOf(codeContent[i]) + i;
                text = codeContent.slice(i, quotpos + 2);
                let str = document.createElement('span');
                str.classList.add('string');
                str.innerText = text;
                code.appendChild(str);  
                console.log(text);
                text = "";
                i = quotpos + 1;
            }
            else 
            {
                if(text !== "")
                { 
                    let element = document.createElement('span');
                    element.innerText = text;
                    
                    if(keywords.indexOf(text) !== -1)
                        element.classList.add('keyword');
                    else if(objects.indexOf(text) !== -1)
                        element.classList.add('class');
                    else if(codeContent[i] == '(')
                        element.classList.add('method');        // dont push variable in class
                    else if(operators.indexOf(text) !== -1)
                        element.classList.add('operator');
                    else 
                        code.appendChild(document.createTextNode(text));
                        // code.innerHTML += text;
                    
                    if(element.classList.length > 0)
                        code.appendChild(element);
                    
                    text = "";
                }

                if(codeContent[i] !== ' ' && codeContent[i] !== '\n')
                {   
                    let breaker = document.createElement('span');
                    breaker.classList.add('punctuation');
                    breaker.innerText = codeContent[i];
                    code.appendChild(breaker);
                }
                else 
                    code.appendChild(document.createTextNode(codeContent[i]));
            }
               
        }
        else 
        {
            text+=codeContent[i];
        }
    }
    if(text !== "")
    {
        code.appendChild(document.createTextNode(text));
    }

    let langBox = document.createElement('div');
    langBox.classList.add('code-language');
    langBox.appendChild(document.createTextNode(codelang));
    code.prepend(langBox);
}

//////////////////// 

let ec = 'code';
jsHilight(ec);
    