##### Signed by https://keybase.io/alistairjcbrown
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.14 (GNU/Linux)

iQEcBAABAgAGBQJTg6qQAAoJEJEOHi8Q7zzzzMUH/RLh9mQuTYLgnZU6VK63ms67
nZJYzSH4RKnvl8yDHxP/jC9I8rmK7W0wMtW3/f2shDBEwz4QB/v/Rrn4528H5ISw
R29RHmiKsvBdRrdZjK39ut4vLbjbIr53AIbPNRk7MHVG3KM49I0Qlqh2TNMIH5IY
M8XbnrmFO+QZUdWOyAokV9s7xqxerSbSm0ovuATeVgOLRtOQVlUE1/bbMBegsfFF
ZQStsV5G0ht4bE5TewCOtCBMzDWk1yyBcers5uT1Gm6pqJaHnZP6CwIfhQPQoree
1PDmduBNm48AXB0J9zeYRlYVMoSM0M9PCw1hIs7YSaZzAUa5FpNYJRQQhEFIVuo=
=TXfj
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size   exec  file                                  contents                                                        
             ./                                                                                                    
50             .gitignore                          15518c53e314172f50549b4a29fde9086008f784effc1a2e65b38f09fb1a1403
69             .travis.yml                         ab6c157084e6355fc20a86603565ee5fcb9bd8de7cc93dd477ca7e33b60204a1
5963   x       Gruntfile.js                        e169c6f0df65b040c607725260286a6091ece528f499828a2b9afbe28f320f14
1080           LICENSE                             cfec6a6c39832bb228b8f4622aefb14f08d3c0f02823238c7143c668c3acd898
9120           README.md                           5d6eb26cf43165f6a24259d324320ab8ca3e779ff15d95a566c0860b15813789
794            bower.json                          db7df6532e696e543e2986950b09d1d92f17cad701df0245f045cf1e7b6adedb
1402           check-type.min.js                   ab0e04de7eea212543b3fd4296b9f333dd977af2e7f440df80c3677947e80674
585            component.json                      773a3a0e0df903b9751d3beb3922b3fa4b0b85350bfdee0c1593f63b68f6552b
               lib/                                                                                                
6687             check-type.js                     eb4217c6a5116d024b43248b2fd679ff973eb8272ec827c274a6ec81c4b0ba84
                 examples/                                                                                         
                   browser/                                                                                        
678                  app.js                        28309b9285a84efb6eb52e2bb664e04abcb6afa0f6ac12e26d42b765ea505d67
266                  bower.json                    6387e55105b163c0c2e2a60d854ede62f2f57c21eccff637faa8dcc8d5e9b840
669                  index.html                    823717c6c8312f2c9353a7aa2a1fe1da8fa544dc0e445688fdfd35f07401a632
                   nodejs/                                                                                         
262                  app.js                        c499853e75d24fb156e39312063067b985ac18a7c97d3f927de727c3827bf19f
256                  package.json                  f97cdb867a0e853a9b6c1aa0c6e0be0ed1b660d1c0d2ba137cb5113ab04060e8
                   requirejs/                                                                                      
                     browser/                                                                                      
767                    app.js                      1a28dfe5b2928b64346cb7d1da863bef614e8d22ae0bb6007edc98319f78b96e
314                    bower.json                  8bab89521cee02384c16af8943c3fb7a4763c1c6d37a5083e2e6ccc098118d94
821                    index.html                  8762f6453ba7d16da94ca6c32b2ee5456a76fdae822635a46728d5ec2aec89ce
                     nodejs/                                                                                       
468                    app.js                      bedbfea8b04db7526ac28c39f4a12b9d1737dd2eff9a9ba400569eed7c2414bf
307                    package.json                a1ce41dca36d01b12b8cd4dc9b050a0b0775d45f2bd5abfcee43d87d0a20aecf
                 tests/                                                                                            
1497               check-type.test.html            fb9f189c429c186c04aa96e2b756b75f6440c5866f42e443e544fb97ebff28cc
13588  x           check-type.test.js              22ff4e7fa33c4afe50bca129589cf9080602d2e4a582f0e2a8d62c5a162751ec
                   fixtures/                                                                                       
325                  has_attribute_fixture.js      b75e70ef3d253e230c176b193ea44f8eac06ffe41f788b93243fe3fb6fa503f0
408                  has_property_fixture.js       fd07814084af0eff5535b2d1410f40949cbdf8f411464904a39d36d19dc31e27
267                  matches_structure_fixture.js  181053a1ce4d5b3947b7a18008313a815e9deeae9e05a5a31dce106bae788e10
1314           package.json                        d7e3eaf4f0669a4d72c4c712c018679ae7dcd6b29cc4998d5bd6e1fe4f530610
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.8 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing