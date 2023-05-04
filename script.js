async function api3() {

   let body = document.querySelector('body')
   

   let parent = document.createElement('div')
   parent.classList.add('container')
   body.append(parent)

   let parent2 = document.createElement('div')
   parent2.classList.add('container')
   body.append(parent2)
   
   let label1 = document.createElement('LABEL')
   label1.innerText = "Thirukural Serial No : "
   parent.append(label1)


    let input = document.createElement('input')
    input.setAttribute('type','text')
    parent.append(input)

    


    let x = 10;

    let api = await fetch(`https://api-thirukkural.vercel.app/api?num=${x}`);

    let output = await api.json();

    console.log(output);

    let para = document.createElement('p')
    para.innerText = output.line1
    parent2.append(para)

    let para2 = document.createElement('p')
    para2.innerText = output.line2
    parent2.append(para2)

    let para3 = document.createElement('p')
    para3.innerText = "Meaning : " + output.tam_exp
    parent2.append(para3)

    //  console.log(output.line1)
    //  console.log(output.line2)
    //  console.log("Meaning : " + output.tam_exp)

}

api3();
