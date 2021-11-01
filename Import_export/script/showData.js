// getData()
//append()

async function getData(url){

    let res = await fetch(url)

    let data = await res.json()

    return data

}

function append(data,container){

    data.forEach((el) => {

        let div = document.createElement('div')

        let p =  document.createElement('p')

        p.innerText = el.title

        let img = document.createElement('img')

        img.src = el.image

        div.append(img,p)

    })
        
    
}