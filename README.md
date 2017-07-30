# quake-nodejs
Quake 1 running on top of node.js using Emscripten

## Running

Prebuilt copy lives in ``build`` directory. In order to run you will first have to get ahold of a copy of pak0.pak from the Shareware copy of Quake 1. Put your copy of ``pak0.pak`` inside a directory called ``id1`` inside the ``build`` directory. Then go in to the ``build`` directory and run ``node ./a.out.js`` . You can then open a web browser and navigate to ``http://127.0.0.1:8000`` in order to play Quake. 

## Building

To build you will need Emscripten 1.27.2 (other versions may work, but this is the version I tested). This has been tested against node.js 4.8.3 (though other versions should work). Grab a copy of ``pak0.pak`` and put in inside a directory called ``id1`` in this directory. To build a fresh copy run ``./mk`` in this directory (make sure you run from this dir, the ``./mk`` script will probably badly misbehave if run  from somewhere else, you have been warned). The built copy should then be in ``build``

## Limitations

Mouse doesn't work yet, neither does sound. Interestingly it is actually reasonably playable without a mouse. In Chrome running and jumping forward doesn't seem to work either (weirdly running and jumping backwards *does* work)

## License

This project is licensed under the GPL (see gpl.txt in this directory). This project was based upon the Adobe Alchemy port of Quake 1 (https://github.com/mkr3142/QuakeFlash)

