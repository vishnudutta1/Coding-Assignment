

   async function trans(){
    
    src_lang=document.getElementById('src_lang').value
    tar_lang=document.getElementById('tar_lang').value
    input_text=document.getElementById('input_text').value
    output_text=document.getElementById('output_text')
    
    
    console.log(src_lang)
    
    console.log(input_text)

   try{
    const res = await fetch("https://libretranslate.de/translate", {
	method: "POST",
	body: JSON.stringify({
		q: `${input_text}`,
		source: `${src_lang}`,
		target: `${tar_lang}`
	}),
	headers: { "Content-Type": "application/json" }
   });



   var output=await res.json();

   output_text.innerHTML=output.translatedText
   console.log(output.translatedText)

}

catch(e){console.log(e)}







    
    }
    