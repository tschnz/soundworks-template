#!/bin/bash

# This script copies the content of a running soundworks experience from 
# local webpage to cordova's index.html
# 
# argument: target name, default is 'player'

DIRNAME=${1:-player}

if [ -d "$DIRNAME" ]; then

	echo "copying Soundworks public files to:" $DIRNAME/www
	cp -R ../public/* $DIRNAME/www

	echo -e "copying content of index.html to:" "${DIRNAME}/www/index.html"
	curl "http://127.0.0.1:8000?cordova=true" > $DIRNAME/www/index.html

	if [[ $(head -n 1 $DIRNAME/www/index.html) ]]; then

	    echo "spreading changes to cordova platforms..."
	    cd $DIRNAME
	    cordova prepare
		echo "-> copy finished, ready to build."
		cd ..

	else
	    echo -e "\n### ERROR: node server is not running ->" "${DIRNAME}/www/index.html empty. COPY ABORTED"

	fi

else
	echo -e "### ERROR: directory doesn't exists: ${DIRNAME}" 
fi