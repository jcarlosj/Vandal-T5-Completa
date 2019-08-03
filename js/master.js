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
        /** Agrega elementos: header, main y footer al body */
        createChildrenElementsBy( $parentEl, structure ) {
            let listEl = new Array(); console .log( structure );

            // Itera por ID (1er Nivel de Profundidad del Objeto)
            for ( let element in structure ) {

                // Valida que el element exista dentro del Objeto iterado
                if ( structure .hasOwnProperty( element ) ) {
                    console .group( `element = ${ structure[ element ] .tag }` );
                    console .log( `id = ${ structure[ element ] .id }` );
                    console .log( `class = ${ structure[ element ] .class }` );

                    let properties = Object .getOwnPropertyNames( structure[ element ] ),           // Obtiene todas las propiedades existentes del objeto
                        $el = Element .create(                                                      // Crea elemento con sus id y clases
                            structure[ element ] .tag, 
                            structure[ element ] .class, 
                            structure[ element ] .id 
                        );

                    $el .appendChild( document .createTextNode( structure[ element ] .tag ) );      // TEMPORAL: Solo para poner el nombre del elemento dentro del elemento
                    $parentEl .insertBefore( $el, $parentEl .firstElementChild );                   // Inserta elementos: header, div, footer al body
                    console .log( $parentEl );
            
                    console .groupEnd();
                }
            }

            return $parentEl;
        }
    }

    let html = { 
        'body': [
            { 'tag': 'header', 'id': null, 'class': [ 'header', 'order-1' ] },
            { 'tag': 'div', 'id': null, 'class': [ 'main-content', 'order-2' ] },
            { 'tag': 'footer', 'id': null, 'class': [ 'footer', 'order-3' ] }
        ],
        'header': [
            { 'tag': 'div', 'id': null, 'class': [ 'container', 'header-top' ] },
            { 'tag': 'div', 'id': null, 'class': [ 'container', 'header-bottom' ] }
        ]
    };

    console .log( html .header );
    let $body = Element .get( 'body' );
    let dom = new DOM( $body );
    
    $body = dom .createChildrenElementsBy( $body, html .body );
    $header = $body .children[ 2 ];
    $header = dom .createChildrenElementsBy( $header, html .header );

    console .log( $body );

}   