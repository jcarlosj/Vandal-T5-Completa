window .onload = () => {
    var $body = document .querySelector( 'body' ),
        $header = createEl( 'header', [ 'header' ] ),
        $main = createEl( 'main', [ 'main' ] ),
        $footer = createEl( 'footer', [ 'footer' ] );

        $body .insertBefore( $footer, $body .firstElementChild );      
        $body .insertBefore( $main, $body .firstElementChild );
        $body .insertBefore( $header, $body .firstElementChild );
        
    console .log( $body );

    /** Funtions */
    function createEl( el, classes = null ) {
        let $el = document .createElement( el );
    
        if( classes ) {
            classes .forEach( clase => {
                //console .log( clase );
                $el .setAttribute( 'class', clase );
            });
        }
    
        return $el;
    }
}