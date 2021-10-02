function sendContactAction(){
    ga('send', {
        hitType: 'pageView',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
    });
    console.log(ga);
}

function sendDownloadAction(){
    ga('send', {
        hitType: 'pageView',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
    })
}

function sendButtonAction(data){
    ga('send', {
        hitType: 'pageView',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: data.getAttribute("data-name")
    });
}

function sendContentChanged(data){
    ga('send', {
        hitType: 'pageView',
        eventCategory: 'contato',
        eventAction: data.id,
        eventLabel: 'preencheu'
    });
}
    