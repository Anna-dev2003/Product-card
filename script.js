
$('.description-text').on('click', function(){
    $(this).children('.description-text_continue').slideToggle(300);
    $(this).children('.description-text_main').children('span').toggleClass('hide')
})

const productSelectorKind = document.getElementById('product-select-kind');
const productSelectorDelivery = document.getElementById('product-select-delivery')
const productSelectorPayment = document.getElementById('product-select-payment')


const styleForCurrentSelect = (selectCont, current) => {

    let optionsArr = Array.from(selectCont.children)
    optionsArr.forEach((elem) => {
        // console.log(Array.from(elem.children)[0], current)
        if(Array.from(elem.children)[0] === current){
            console.log(elem)
            elem.classList.add('current-select')
        }else{
            elem.classList.remove('current-select')
        }
    })
}


const chooseProductKind = (event) =>{

    const currentPictures = document.getElementById('current-pictures')
    const currentPicturesId = Array.from(currentPictures.children)[0].id
    let currentKind = event.target.id
    let way = null

    if(!currentKind || currentKind === currentPicturesId){
        return
    }

    styleForCurrentSelect(productSelectorKind, event.target)
    
    switch(currentKind){
        case 'white':
            way = './img/tow-white.png'
            break;
        case 'red':
            way = './img/tow-red.png'
            break;
        case 'grey':
            way = './img/tow-grey.png'
            break;
        case 'blue':
            way = './img/tow-blue.png'
            break;
        default:
            return
    }


    currentPictures.innerHTML = `<img src="${way}" alt="" id='${currentKind}'>`
    // console.log(currentPictures)
}

const chooseProductDelivery = (event) => {
    
    const currentKind = event.target.id

    if(!currentKind){
        return
    }

    styleForCurrentSelect(productSelectorDelivery, event.target)
    
}

const  chooseProductPayment = (event) => {

    const currentKind = event.target.id

    if(!currentKind){
        return
    }

    styleForCurrentSelect(productSelectorPayment, event.target)
}

productSelectorKind.addEventListener('click', chooseProductKind)
productSelectorDelivery.addEventListener('click', chooseProductDelivery)
productSelectorPayment.addEventListener('click', chooseProductPayment)
