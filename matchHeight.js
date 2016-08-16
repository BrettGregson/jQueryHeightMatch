$(function(){
	
	$.matchHeight = function(element, options) { 
		var _self = this;
		_self.$element = $(element);
		
		// init
		_self.init = function(){
			// check if child option is set
			if ( options.hasOwnProperty('child') ){				
				
				// attach the resize event
				window.onresize = function(event) {
					_self.setHeight();
				}
				
				// set the height
				_self.setHeight();
			} else {
				console.error("No child selector set. Please include a child selector in your matchHeight options");
			}
			
		}
		
		// main set height function
		_self.setHeight = function(){
			_self.$element.each(function(){
				var maxHeight = 0; // holds the tallest element (calcualted based on it's grid size)
				$(this).find(options.child).each(function(){
					$(this).height("auto");
					var thisHeight = _self.getAdjustedHeight( $(this) ); // gets the nomralized height adjusted for grid size
					
					if ( thisHeight> maxHeight ){
						maxHeight = thisHeight;
					}
				});
				
				// set the grid items size
				_self.setGrid( $(this), maxHeight );
			});
		}
		
		
		// calculate the normalized height of this grid item
		_self.getAdjustedHeight = function( self ){
			var thisSize = parseInt( self.attr("data-size") );
			var thisHeight = self.height();
			
			var adjust = 100 / thisSize;
			return thisHeight * adjust;
		}
		
		// sets the child grid elements height based on the provided maxHeight
		_self.setGrid = function( parent, maxHeight ){
			parent.find(options.child).each(function(){
				var thisSize = parseInt( $(this).attr("data-size") );
				var adjust = 100 / thisSize;
				var newHeight = maxHeight / adjust;
				$(this).height( newHeight );
			});
		}
	
		_self.init();
		
	};
	
	$.fn.matchHeight = function(options) {
		return new $.matchHeight(this, options)
    };
});