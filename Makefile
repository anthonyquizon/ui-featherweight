PATH  := node_modules/.bin:$(PATH)
NODE_PATH := src:.
SHELL := /bin/bash

BUILD := www/build
BASE_URL = localhost:3000

CSS_INCLUDES = --include-path node_modules/ --include-path src/style/
CSS_ENTRY = src/style/style.scss
CSS_BUILD = $(BUILD)

JS_ENTRY = src/Main.js
JS_BUILD = $(BUILD)/Main.js

build/examples:
	mkdir -p $(BUILD)
	node-sass $(CSS_INCLUDES) $(CSS_ENTRY) -o $(CSS_BUILD)
	browserify $(JS_ENTRY) -v --debug -t [ babelify --presets [ es2015 ] ] | uglifyjs > $(JS_BUILD)

watch/js: 
	watchify $(JS_ENTRY) -v --debug -t [ babelify --presets [ es2015 ] ]   -o $(JS_BUILD)

watch/css: 
	node-sass $(CSS_INCLUDES) -w $(CSS_ENTRY) -o $(CSS_BUILD)

watch/examples:
	make build/browser
	parallelshell "make watch/js" "make watch/css"

server:
	node server.js

clean:
	rm -rf $(BUILD)
	rm -rf node_modules

