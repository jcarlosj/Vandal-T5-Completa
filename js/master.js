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

    /** Agrega elementos: header, main y footer al body */
    function createBodyElements () {
        let $body = Element .get( 'body' ),
            $els = new Array( 'footer', 'main', 'header' );
            //console .log( $body );

        $els .forEach( item => {
            
            let $el = Element .create( item, [ item ] );
            $body .insertBefore( $el, $body .firstElementChild ); 
        });

        return $body;
    }

    let $body = createBodyElements(),
        $header = $body .children[ 0 ],
        $main = $body .children[ 1 ],
        $footer = $body .children[ 2 ];
   
    console .log( $header, $main, $footer );

}   