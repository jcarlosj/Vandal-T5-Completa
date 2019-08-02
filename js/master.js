window .onload = () => {
    var $body = document .querySelector( 'body' ),
        $header = createEl( 'header', [ 'header' ] ),
        $main = createEl( 'main', [ 'main' ] ),
        $footer = createEl( 'footer', [ 'footer' ] );

        $body .insertBefore( $footer, $body .firstElementChild );      
        $body .insertBefore( $main, $body .firstElementChild );
        $body .insertBefore( $header, $body .firstElementChild );

        $header .appendChild( createEl( 'div', [ 'top' ] ) );
        $header .appendChild( createEl( 'div', [ 'bottom' ] ) );

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
            $button = createButton();

            $button .setAttribute( 'type', 'button' );
            $button .setAttribute( 'data-toggle', 'collapse' );
            $button .setAttribute( 'data-target', '#main-menu' );
            $button .setAttribute( 'aria-controls', 'navbarNavAltMarkup' ), 
            $button .setAttribute( 'aria-expanded', 'false' ), 
            $button .setAttribute( 'aria-label', 'Toggle navigation' ), 
            
            $nav .appendChild( $button );

        console .log( $nav );
        
    }
    function createButton() {
        let $button = createEl( 'button', [ 'navbar-toggler' ] );

        console .log( $button );
        return $button;
    }
    console .log( createNavbar() );
}