$(function() {
    

    // Definir una clase que controlara el carrusel

    $('.arrow-prev').click(function() {
        let numItems = $('.carrusel').find('.carrusel-item').length;
        let item = $('.carrusel').find('.carrusel-item.active');
        // console.log(numItems);
        let index = item.data('index');
        if (index == 1) {
            index = numItems;
        } else {
            index--;
        }
        let itemPrev = $('.carrusel').find(`.carrusel-item[data-index=${index}]`);        
        console.log('Hiciste click en el boton PREV', item[0], itemPrev[0], index);

        item.css({ zIndex: 1 });
        item.animate({ 
            left: "1000px",            
         }, 1000, function () {
            console.log('termino ejecución 1', item[0]);
            item.removeClass('active');
            item.css({ left: 0, opacity: 0 });
        })
        itemPrev.css({ left: "-1000px", opacity: 1, zIndex: 2 });
        itemPrev.animate({ 
            left: "0",            
         }, 1000, function () {
            console.log('termino ejecución 2', itemPrev[0]);
            itemPrev.addClass('active')
        })
        
        // item.removeClass('active');
        // itemNext.addClass('active');
    })

    $('.arrow-next').click(function() {
        let numItems = $('.carrusel').find('.carrusel-item').length;
        let item = $('.carrusel').find('.carrusel-item.active');
        let index = item.data('index');
        if (index == numItems) {
            index = 1;
        } else {
            index++;
        }
        let itemNext = $('.carrusel').find(`.carrusel-item[data-index=${index}]`);        
        console.log('Hiciste click en el boton NEXT', item[0], itemNext[0], index);
        
        item.css({ zIndex: 1 });
        item.animate({ 
            left: "-1000px",            
         }, 1000, function () {
            console.log('termino ejecución 1', item[0]);
            item.removeClass('active');
            item.css({ left: 0, opacity: 0 });
        })
        itemNext.css({ left: "1000px", opacity: 1, zIndex: 2 });
        itemNext.animate({ 
            left: "0",            
         }, 1000, function () {
            console.log('termino ejecución 2', itemNext[0]);
            itemNext.addClass('active')
        })
        // item.removeClass('active');
        // itemNext.addClass('active');
    })
    
    $('.carrusel-item').on('swiperight', function() {
        console.log('evento swipe right');        

        let numItems = $('.carrusel').find('.carrusel-item').length;
        let item = $('.carrusel').find('.carrusel-item.active');
        // console.log(numItems);
        let index = item.data('index');
        if (index == 1) {
            index = numItems;
        } else {
            index--;
        }
        let itemPrev = $('.carrusel').find(`.carrusel-item[data-index=${index}]`);        
        console.log('Hiciste click en el boton PREV', item[0], itemPrev[0], index);

        item.css({ zIndex: 1 });
        item.animate({ 
            left: "1000px",            
         }, 1000, function () {
            console.log('termino ejecución 1', item[0]);
            item.removeClass('active');
            item.css({ left: 0, opacity: 0 });
        })
        itemPrev.css({ left: "-1000px", opacity: 1, zIndex: 2 });
        itemPrev.animate({ 
            left: "0",            
         }, 1000, function () {
            console.log('termino ejecución 2', itemPrev[0]);
            itemPrev.addClass('active')
        })
    })
    
    $('.carrusel-item').on('swipeleft', function() {
        console.log('evento swipe left');        

        let numItems = $('.carrusel').find('.carrusel-item').length;
        let item = $('.carrusel').find('.carrusel-item.active');
        let index = item.data('index');

        if (index == numItems) {
            index = 1;
        } else {
            index++;
        }
        let itemNext = $('.carrusel').find(`.carrusel-item[data-index=${index}]`);        
        console.log('Hiciste click en el boton NEXT', item[0], itemNext[0], index);
        
        item.css({ zIndex: 1 });
        item.animate({ 
            left: "-1000px",            
         }, 1000, function () {
            console.log('termino ejecución 1', item[0]);
            item.removeClass('active');
            item.css({ left: 0, opacity: 0 });
        })
        itemNext.css({ left: "1000px", opacity: 1, zIndex: 2 });
        itemNext.animate({ 
            left: "0",            
         }, 1000, function () {
            console.log('termino ejecución 2', itemNext[0]);
            itemNext.addClass('active')
        })
    })


})