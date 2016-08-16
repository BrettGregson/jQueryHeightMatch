# jQueryHeightMatch
jQuery library to match items height in a windows metro style. Works with bootstrap

![](http://brettgregson.com/github/matchHeight.png "")


## How it works

The plugin is attached to the parent element (for bootstrap, this would be the `.row`). A child element is passed as an option. Each child element needs the HTML attrbiute `data-size="n"` which tells the plugin what percentage the element is of the total height (between 1 and 100). For example, an element that take the entire vertiacal space would be:

`data-size="100"`

While an element that takes up 50% of the vertical height would be:

`data-size="50"`

The plugin then calculates which element within the parent is the tallest. It then sets each child element's height based on the is max height and the `data-size` property

## Installation
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="matchHeight.js"></script>


## Example

```html
<div class="container">
    <div class="row grid grid-row">
        <div class="col-md-6">
            <div class="grid-item" data-size="50" style="background-color: #0F0;">
              ...
            </div>
            
            <div class="grid-item" data-size="50" style="background-color: #00F;">
              ...
            </div>
        </div>
        
        <div class="col-md-6">
            <div class="grid-item" data-size="100" style="background-color: #F00;">
              ...
            </div>
        </div>
    </div>
</div>
```

```javascript
$(window).on("load", function() { // important to use window.load to ensure elements heights are set
		$(".grid-row").matchHeight({
			"child"	:	".grid-item",
		});
});
```
