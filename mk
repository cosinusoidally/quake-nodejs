rm -r build
mkdir build
emcc -s NO_EXIT_RUNTIME=1 -s EXPORTED_FUNCTIONS="['_main','_Host_Frame','_getFrameBuffer','_Key_Event']" -O2 -DNODE  -DNO_ASM  quake-src/*c -lm -o build/a.out.js
cat quake-src/main.js >> build/a.out.js
cp quake-src/payload.html build/
cp -r id1 build
