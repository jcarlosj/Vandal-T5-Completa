window .onload = () => {

    /** Crea Clase: Administrar elementos del DOM */
    class Element {
        static get( reference ) {
            let $el = document .querySelector( reference );
            return $el;
        }
        /** Crea elemento */
        static create( el = null, classes = null, id = null ) {
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
        /** Agrega Atributos a un elemento */
        static addAttributes( $el, attributes ) {
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
        static toAnidateElement( $parentEl, $childEl ) {
            $parentEl .appendChild( $childEl );
            return $parentEl;
        }
    } /** Final class Element */

    class DOM {
        constructor( $body ) {
            this .$body = $body;
            this .$body .setAttribute( 'class', 'd-flex flex-column' );

            this .$header = this .$body .children[ 0 ];
            this .$main = this .$body .children[ 1 ];
            this .$footer = this .$body .children[ 2 ];
        }
        /** Agrega elementos */
        createChildrenElementsBy( $parentEl, structure ) {
            let listEl = new Array(); 
            //console .log( structure );

            // Itera por ID (1er Nivel de Profundidad del Objeto)
            for ( let element in structure ) {

                // Valida que el element exista dentro del Objeto iterado
                if ( structure .hasOwnProperty( element ) ) {
                    //console .group( `element = ${ structure[ element ] .tag }` );
                    //console .log( `id = ${ structure[ element ] .id }` );
                    //console .log( `class = ${ structure[ element ] .class }` );

                    let properties = Object .getOwnPropertyNames( structure[ element ] ),           // Obtiene todas las propiedades existentes del objeto
                        $el = Element .create(                                                      // Crea elemento con sus id y clases
                            structure[ element ] .tag, 
                            structure[ element ] .class, 
                            structure[ element ] .id 
                        );

                    $el .appendChild( document .createTextNode( structure[ element ] .tag ) );      // TEMPORAL: Solo para poner el nombre del elemento dentro del elemento
                    $parentEl .insertBefore( $el, $parentEl .firstElementChild );                   // Inserta elementos: header, div, footer al body
                    //console .log( $parentEl );
            
                    console .groupEnd();
                }
            }

            return $parentEl;
        }
        /** Agrega enlaces a una lista */
        createChildrenLiA( $ul, structure, generic_clases = null ) {
            let listEl = new Array(),
                li_classes = null; 
            //console .log( structure );

            // Itera por ID (1er Nivel de Profundidad del Objeto)
            for ( let element in structure ) {

                // Valida que el element exista dentro del Objeto iterado
                if ( structure .hasOwnProperty( element ) ) {
                    //console .group( `elements = li > a ` );
                    //console .log( `class = ${ structure[ element ] .class }` );
                    //console .log( `text = ${ structure[ element ] .text }` );
                    //console .log( `url = ${ structure[ element ] .url }` );

                    if( Array .isArray( generic_clases ) ) {
                        
                        if( Array .isArray( generic_clases[ 0 ] ) && generic_clases[ 0 ] != '' && generic_clases[ 0 ] != null && generic_clases[ 0 ] != 'undefined' ) {
                            li_classes = generic_clases[ 0 ];
                        }
                        if( Array .isArray( generic_clases[ 1 ] ) && generic_clases[ 1 ] != '' && generic_clases[ 1 ] != null && generic_clases[ 1 ] != 'undefined' ) {
                            structure[ element ] .class = structure[ element ] .class .concat( generic_clases[ 1 ] );
                        }
                    }

                    let properties = Object .getOwnPropertyNames( structure[ element ] );           // Obtiene todas las propiedades existentes del objeto
                    let $li = Element .create(                                                      // Crea elemento con sus id y clases
                            'li', 
                            li_classes, 
                            structure[ element ] .id 
                        ),
                        $a = Element .create(                                                      // Crea elemento con sus id y clases
                            'a', 
                            structure[ element ] .class, 
                            structure[ element ] .id 
                        );
                    
                    $a = Element .addAttributes( $a, { 'href': structure[ element ] .url } );
                    $a .appendChild( document .createTextNode( structure[ element ] .text ) );  
                    $li .appendChild( $a );
                    $ul .appendChild( $li );                   
                    //console .log( $li );
            
                    console .groupEnd();
                }
            }
            console .log( $ul );

            //return $ul;
        }
    }

    let html = { 
        'body': [
            { 'tag': 'header', 'id': null, 'class': [ 'header', 'd-flex', 'flex-column', 'order-1' ] },
            { 'tag': 'main', 'id': null, 'class': [ 'main-content', 'order-2' ] },
            { 'tag': 'footer', 'id': null, 'class': [ 'footer', 'order-3' ] }
        ],
        'header': [
            { 'tag': 'div', 'id': null, 'class': [ 'container', 'header-top', 'order-1' ] },
            { 'tag': 'nav', 'id': null, 'class': [ 'container', 'header-bottom', 'order-2' ] }
        ],
        'main': [
            { 'tag': 'section', 'id': null, 'class': [ 'container', 'ads' ] },
            { 'tag': 'section', 'id': null, 'class': [ 'container', 'games' ] },
            { 'tag': 'section', 'id': null, 'class': [ 'container', 'news' ] }
        ],
        'footer': [
            { 'tag': 'section', 'id': null, 'class': [ 'container', 'footer-top' ] },
            { 'tag': 'section', 'id': null, 'class': [ 'container', 'footer-bottom' ] },
            { 'tag': 'section', 'id': null, 'class': [ 'container', 'copyright' ] }
        ],
        'menu_main': [ { 'tag': 'ul', 'id': null, 'class': [ 'main-menu' ] } ]
    };

    let data = {
        'menu_main' : [
            { 'text': 'Portada', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'Noticias', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'Análisis', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'Juegos', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'Guías', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'PC', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'PS4', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'XBOne', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'Switch', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'Plataformas', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'Podcast', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'Foro', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'eSports', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'Hardware', 'url': '#', 'class': [ 'link' ] },
            { 'text': 'Random', 'url': '#', 'class': [ 'link' ] },
        ]
    }

    //console .log( html .header );
    let $body = Element .get( 'body' );
    let dom = new DOM( $body );
    
    /** Crea elementos hijos del 'body': header, main, footer */
    $body = dom .createChildrenElementsBy( $body, html .body );
    $header = $body .children[ 2 ];
    $header = dom .createChildrenElementsBy( $header, html .header );
    $main = $body .children[ 1 ];
    $main = dom .createChildrenElementsBy( $main, html .main );
    $footer = $body .children[ 0 ];
    $footer = dom .createChildrenElementsBy( $footer, html .footer );
    
    /** Crea Elementos para el Menú Principal en el 'header-bottom' */
    $navMenuMain = $header .children[ 0 ];
    $navMenuMain = Element .toAnidateElement( $navMenuMain, Element .create( 'ul', [ 'nav', 'main-menu' ], null ) );
    $ulMenuMain = $navMenuMain .children[ 0 ];
    
    $ulMenuMain = dom .createChildrenLiA( $ulMenuMain, data .menu_main, [ [ 'nav-item' ], [ 'nav-link', 'active' ] ] );
    
    /** Crea Elementos para Cabecera Principal del Sitio en el 'header-top' */
    let $itemFlex = Element .create( 'div', [ 'd-flex', 'flex-row', 'justify-content-center' ], null );
    $divHeader = $header .children[ 1 ];    
    $divHeader = Element .toAnidateElement( $divHeader, $itemFlex );
    for( let i = 0; i < 5; i ++ ) {
        $itemFlex = Element .toAnidateElement( $itemFlex, Element .create( 'div', [ 'p-2' ], null ) );
    }
    console .log( 'Atacando..', $divHeader );

    console .log( $body );
   

} 