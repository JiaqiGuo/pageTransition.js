
    function pageTransition() {
        var cover, newpage, uncover;
        $( ".pageTransition" ).append( "<div class='top-half'></div><div class='center-progress'></div><div class='bottom-half'></div>" );

        cover = function() {
            $('.top-half').css({
                'height': '50vh'
            });
            $('.center-progress').css({
                'background': 'linear-gradient(to left, #A83539 50%, #595959 50%)',
                'background-size': '200% 100%',
                'transition': 'width 0.5s 0.8s,opacity 0s 0.8s,background-position 0.8s 1.2s',
                'opacity': '1',
                'z-index': '10001',
                'width': '20vw',
                'background-position': 'left bottom'
            });
            $('.bottom-half').css({
                'height': '50vh'
            });
        };
        uncover = function() {
            $('.top-half').css({
                'transition-delay': '0.5s',
                'height': '0vh'
            });
            $('.center-progress').css({
                'background': 'linear-gradient(to left, #595959 50%, #A83539 50%)',
                'background-size': '200% 100%',
                'background-position': 'right bottom',
                'width': '100vw',
                'transition': 'width 0.5s 0s,opacity 0s 0.5s',
                'opacity': '0'
            });
            $('.bottom-half').css({
                'transition-delay': '0.5s',
                'height': '0vh'
            });
        };
        $(window).load(function() {
            uncover();
        });
        newpage = function() {
            window.location = window.newLocation;
        };
        $('a').click(function(event) {
            console.log(this.href);
            if (!this.href.includes('#') && !this.href.includes('mailto') && !this.href.includes('tel')) {
                event.preventDefault();
                window.newLocation = this.href;
                cover();
                setTimeout(newpage, 2000);
            }
        });
    }
