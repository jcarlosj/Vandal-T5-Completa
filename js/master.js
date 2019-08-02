window .onload = () => {
    var $body = document .querySelector( 'body' ),
        $header = createEl( 'header', [ 'header' ] ),
        $main = createEl( 'main', [ 'main' ] ),
        $footer = createEl( 'footer', [ 'footer' ] );

        $body .insertBefore( $footer, $body .firstElementChild );      
        $body .insertBefore( $main, $body .firstElementChild );
        $body .insertBefore( $header, $body .firstElementChild );

        $header .appendChild( createEl( 'div', [ 'header-top' ] ) );
        $header .appendChild( createEl( 'div', [ 'header-bottom' ] ) );
        
        var hb = $header .lastChild;
        hb .appendChild( createNavbar() );

        $main .appendChild( createEl( 'section', [ 'section', 'container', 'games' ] ) );
        $main .appendChild( createEl( 'section', [ 'section', 'container', 'news' ] ) );
        
    console .log( $body );

    /** Funtions */
    function createEl( el, classes = null ) {
        let $el = document .createElement( el );
    
        if( classes ) {
            classes .forEach( clase => {
                //console .log( clase );
                $el .classList .add( clase );
            });
        }
    
        return $el;
    }

    function createNavbar() {
        let items = new Array( 'Portada', 'Noticias', 'Análisis', 'Juegos', 'Guías', 'PC', 'PS4', 'XBOne', 'Switch', 'Plataformas', 'Podcast', 'Foro', 'eSports', 'Hardware', 'Random' ),
            $nav = createEl( 'nav', [ 'navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light' ] ),
            $button = createButton(),
            attributesButton = {
                'type': 'button',
                'data-toggle': 'collapse',
                'data-target': '#main-menu',
                'aria-controls': 'navbarNavAltMarkup',
                'aria-expanded': 'false',
                'aria-label': 'Toggle navigation'
            };

            $button = addAttributes( $button, attributesButton );
            $nav .appendChild( $button );

        //console .log( $nav );

        return $nav;
    }
    function createButton() {
        let $button = createEl( 'button', [ 'navbar-toggler' ] );

        //console .log( $button );
        return $button;
    }
    function addAttributes( $el, attributes ) {
        for ( let attr in attributes ) {

            // Valida que el attr exista dentro del Objeto iterado
            if ( attributes .hasOwnProperty( attr ) ) {
                let properties = Object .getOwnPropertyNames( attributes );   
                //console .log( properties );

                // Itera propiedades (2do Nivel de Profundidad del Objeto)
                properties .forEach( property => {
                    // console .log( `${ property } = ${ attributes[ property ] }` );
                    $el .setAttribute( property, attributes[ property ] );
                });
            }
        }

        return $el;
    }

    //console .log( createNavbar() );
}