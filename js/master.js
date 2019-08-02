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
            let listEl = new Array();

            // Itera por ID (1er Nivel de Profundidad del Objeto)
            for ( let element in structure ) {

                // Valida que el element exista dentro del Objeto iterado
                if ( structure .hasOwnProperty( element ) ) {
                    let properties = Object .getOwnPropertyNames( structure[ element ] );    // Obtiene todas las propiedades existentes del objeto

                    console .group( `element = ${ element }` );

                    // Itera propiedades (2do Nivel de Profundidad del Objeto)
                    properties .forEach( property => {
                        let id = property,
                            classes = structure[ element ][ property ],
                            $el = Element .create( element, classes, id );
                            $el .appendChild( document .createTextNode( element ) );
                           
                        $parentEl .insertBefore( $el, $parentEl .firstElementChild );   // Inserta elementos: header, div, footer al body

                        console .log( `id: ${ property }` );
                        console .log( `class: ${ structure[ element ][ property ] }` );
                    });
            
                    console .groupEnd();
                }
            }

            return $parentEl;
        }
    }

    let bodyStructure = { 
        'header': { 'header': [ 'header', 'order-1' ] },
        'div': { 'main-content': [ 'main-content', 'order-2' ] },
        'footer': { 'footer': [ 'footer', 'order-3' ] } 
    } 

    let $body = Element .get( 'body' );
    let dom = new DOM( $body );
    
    $body = dom .createChildrenElementsBy( $body, bodyStructure );

    console .log( $body );

}   