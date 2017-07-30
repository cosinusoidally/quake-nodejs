# quake-nodejs
Quake 1 running on top of node.js using Emscripten. Game engine runs entirely server side inside node.js. The game is played by connecting to the server using a simple client. The simple client retrieves video frames from the server and sends back keystrokes to the server. A HTML5 client is included from demonstration purposes.

## Running

Prebuilt copy lives in ``build`` directory. In order to run you will first have to get ahold of a copy of ``pak0.pak`` from the Shareware copy of Quake 1. Put your copy of ``pak0.pak`` inside a directory called ``id1`` inside the ``build`` directory. Then go in to the ``build`` directory and run ``node ./a.out.js`` . You can then open a web browser and navigate to ``http://127.0.0.1:8000`` in order to play Quake. 

## Building

To build you will need Emscripten 1.27.2 (other versions may work, but this is the version I tested). This has been tested against node.js 4.8.3 (though other versions should work). Grab a copy of ``pak0.pak`` and put in inside a directory called ``id1`` in this directory. To build a fresh copy run ``./mk`` in this directory (make sure you run from this dir, the ``./mk`` script will probably badly misbehave if run  from somewhere else, you have been warned). The built copy should then be in ``build``

## Setting Up Emscripten

In theory this project will work with most versions of Emscritpen. Having said that, for the greatest chance of success you can mirror my setup:

* Ubuntu 14.04 x86_64
* Emscripten 1.27.2 (in non-fastcomp mode, see instructions below)
* Node.js 4.8.3
* LLVM/Clang 3.3 from http://releases.llvm.org/

### Getting prerequisites

Git clone Emscripten and check out the correct version:

```
git clone https://github.com/kripken/emscripten.git
git checkout 1.27.2
```

Get node.js 4.8.3
```
wget https://nodejs.org/dist/v4.8.3/node-v4.8.3-linux-x64.tar.xz
wget https://nodejs.org/dist/v4.8.3/SHASUMS256.txt.asc
```

Check that the node.js sha256sum is in SHASUMS256.txt.asc and also verify the signature of SHASUMS256.txt.asc (there are also instructions on how to do this on the node.js site):
```
sha256sum node-v4.8.3-linux-x64.tar.xz
grep whatever_the_result_of_the_last_command_was SHASUMS256.txt.asc
gpg --verify SHASUMS256.txt.asc
```
If all that checks out then extract node.js:
```
tar xvf node-v4.8.3-linux-x64.tar.xz
```

Get LLVM/Clang 3.3:
```
wget "http://releases.llvm.org/3.3/clang+llvm-3.3-amd64-debian6.tar.bz2"
wget "http://releases.llvm.org/3.3/clang+llvm-3.3-amd64-debian6.tar.bz2.sig"
gpg --verify clang+llvm-3.3-amd64-debian6.tar.bz2.sig
```
If all that checks out then Extract LLVM/Clang with something like:
```
tar xvf "clang+llvm-3.3-amd64-debian6.tar.bz2"
```

Next put Emscripten, node.js and Clang in your path. Descend in to each of the directories and run something like ``export PATH=${PWD}:$PATH``

Set emcc to run in non-fastcomp mode by running:

```
export EMCC_FAST_COMPILER=0
```

At this point you should now be able to build ``quake-nodejs`` using the ``Building`` instructions near the top of this README

## Limitations

Mouse doesn't work yet, neither does sound. Interestingly it is actually reasonably playable without a mouse. In Chrome running and jumping forward doesn't seem to work either (weirdly running and jumping backwards *does* work)

## License

This project is licensed under the GPL (see gpl.txt in this directory). This project was based upon the Adobe Alchemy port of Quake 1 (https://github.com/mkr3142/QuakeFlash)

