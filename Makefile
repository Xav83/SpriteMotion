format:
	@(echo "Formatting HTML files...");
	@(tidy -config .tidy *.html && \
		csstidy.exe stylesheets/style.css --sort_properties=true stylesheets/style.css;\
		if [ $$? -eq 0 ] ; then \
		echo "> Done.";\
		else \
		echo "> Failure!"; fi)2>&1 | grep "^> ";
