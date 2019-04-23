test:
	node tests/basictests.js
	node tests/path-tests.js

prettier:
	prettier --single-quote --write "**/*.js"
