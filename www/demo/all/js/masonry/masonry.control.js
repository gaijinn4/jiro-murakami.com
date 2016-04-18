// mason + infinite scrol contorol
      $(function(){
        var $grid = $('.grid').css({ opacity: 0 });
        $grid.imagesLoaded(function(){
          $grid.animate({ opacity: 1 });
          $grid.masonry({ itemSelector: '.grid-item' });
        });
    
        $grid.infinitescroll({
          navSelector  : 'ul.pagination',
          nextSelector : 'ul.pagination a[rel=next]',
          itemSelector : '.grid .grid-item',
          loading: {
            msgText: '',
            finishedMsg: '',
          }
        }, function( newElements ) {
          var $newElems = $( newElements ).css({ opacity: 0 });
          $newElems.imagesLoaded(function(){
            $newElems.animate({ opacity: 1 });
            $grid.masonry( 'appended', $newElems, true );
          });
        });
      });
