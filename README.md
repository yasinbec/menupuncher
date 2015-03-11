menupuncher v1.0
===========

Jquery Menu Puncher v1.0

Demo = Check out www.jenaldesign.com/menupuncher

These is simple fullscreen navigation plugin for jquery

Add CSS & JS to your header
```
<script type="text/javascript" src="menupuncher.js"></script>
<link rel="stylesheet" type="text/css" href="menupuncher.css">
```

and Magic words

```
<script type="text/javascript">
    jQuery(document).ready( function($) {
		$('#team').menupuncher({
			color : '#000',
			textcolor  : '#FFF',
			opacity: '0.8',
			hovercolor: '#FFF'
		});		
	});
	
</script>
```
color => background-color

text-color => changing menu text color

opacity => transparency for fullscreen background

hovercolor => mouseover link background


<body> add the following template

```
<a href="#" class="pusher">
  <span></span>
  <span></span>
  <span></span>
</a>

<ul id="menu">
	<li><a href="#">Home</a></li>
	<li><a href="#">About</a></li>
	<li><a href="#">Works</a></li>
	<li><a href="#">Services</a></li>
	<li><a href="#">Blog</a></li>
	<li><a href="#">Contact</a></li>
</ul>
```

Enjoy and please let me know

Future Upgrades:

1) Responsive design
2) Different Templates
