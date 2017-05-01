format:
	@(echo "Formatting HTML files...");
	@(node_modules/.bin/html-beautify -r -t -n -q -f *.html)
	@(echo "Formatting CSS files...")
	@(node_modules/.bin/css-beautify -r -t -n -q -f stylesheets/*.css)
	@(echo "Formatting Javascript files...")
	@(node_modules/.bin/js-beautify -r -t -n -q -f test/*.js)
