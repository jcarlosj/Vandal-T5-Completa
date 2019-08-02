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
        hb .appendChild( createNavbar( $header ) );

        $main .appendChild( createEl( 'section', [ 'section', 'container', 'games' ] ) );
        $main .appendChild( createEl( 'section', [ 'section', 'container', 'news' ] ) );
        
    console .log( $body );

    /** Crea elemento */
    function createEl( el, classes = null, id = null ) {
        let $el = document .createElement( el );
    
        if( id ) {
            $el .setAttribute ( 'id', id );
        }

        if( classes ) {
            classes .forEach( clase => {
                //console .log( clase );
                $el .classList .add( clase );
            });
        }
    
        return $el;
    }

    function createNavbar( $header ) {
        let items = new Array( 'Portada', 'Noticias', 'Análisis', 'Juegos', 'Guías', 'PC', 'PS4', 'XBOne', 'Switch', 'Plataformas', 'Podcast', 'Foro', 'eSports', 'Hardware', 'Random' ),
            $nav = createEl( 'nav', [ 'navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light' ] ),
            $button = createButton(),
            $span = createEl( 'span', [ 'navbar-toggler-icon' ] ),
            $divEl1 = createEl( 'div', [ 'collapse', 'navbar-collapse' ], 'main-menu' ),
            $divEl2 = createEl( 'div', [ 'navbar-nav' ] ),
            $a,
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

        $nav .lastChild .appendChild( $span );

        items .forEach( item => {
            $textContent = document .createTextNode( item );
            $a = createEl( 'a', [ 'nav-item', 'nav-link', 'active' ] );
            $a .appendChild( $textContent );
            $divEl2 .appendChild( $a ); 
        });

        $divEl1 .appendChild( $divEl2 );
        //console .log( 'Heyyyy!', $divEl2 );
        $nav .appendChild( $divEl1 );

        return $nav;
    }
    function createButton() {
        let $button = createEl( 'button', [ 'navbar-toggler' ] );

        //console .log( $button );
        return $button;
    }
    /** Agrega Atributos a un Elemento */
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
    /** Anida un Elemento a otro */
    function toAnidateElement( $parentEl, $childEl ) {
        $parentEl .appendChild( $childEl );
        return $parentEl;
    }

    var $testEl_1 = document .createElement( 'div' ),
        $testEl_2 = document .createElement( 'div' );

    $testEl_1 .setAttribute( 'class', 'main' );
    $testEl_2 .setAttribute( 'class', 'secondary' );

    $testEl_1 = toAnidateElement( $testEl_1, $testEl_2 );
    console .log( $testEl_1 );
}   