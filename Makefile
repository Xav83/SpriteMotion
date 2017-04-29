format:
	@(echo "Formatting HTML files...");
	@(tidy -config .tidy *.html;\
		if [ $$? -eq 0 ] ; then \
		echo "> Done.";\
		else \
		echo "> Failure!"; fi)2>&1 | grep "^> ";
