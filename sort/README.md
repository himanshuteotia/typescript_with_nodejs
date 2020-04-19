to generate tsconfig file we need to type command

`tsc --init`

define outDire (output directory) and rootDir (source code directory)

`"outDir"`: "./build" /_ Redirect output structure to the directory. _/,

`"rootDir"`: "./src" /_ Specify the root directory of input files. Use to control the output directory structure with --outDir. _/,

after just run `tsc` we can also add additional flag ( `- w` ) to watch all the files

to run the file we have to do `node build/index.js`
