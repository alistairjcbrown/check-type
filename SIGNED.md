##### Signed by https://keybase.io/alistairjcbrown
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.14 (GNU/Linux)

iQEcBAABAgAGBQJUXsbHAAoJEJEOHi8Q7zzzqEYH+wdgNkklOC2tGq7DQNOjjF1n
idj9wsfIManzVpw23vMnrPk2YtejY1/sCI1ZuSxtGDF+uP/0s6Z2WCiTDfWJUlAX
wwkuBwubwaF3mf1EMv8f8LC+b/6FlDT0ayowD/bZS7biyuC2BD/OeeUCJYYkrWVo
MaDGupcSWBBbXMqO2WnqzI+DGPZZpqWGA6Ic66hUeheOVSEK6IZxEDpDhnEWjLhR
Tf6u+sVFXYNn+JGIAi7gf2P6fWbxUxlEFl8IGacteKbj1AAXVoSV6PCvHtL9ZZD1
pXV42vbje0s4M8S1Laj3RPpfDCYxblLTFzDn+95s+l+cd5pDgTA/JxOJLChpWfA=
=CtIL
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size   exec  file                                  contents                                                        
             ./                                                                                                    
50             .gitignore                          15518c53e314172f50549b4a29fde9086008f784effc1a2e65b38f09fb1a1403
156            .travis.yml                         2a87273f7b9ada9912539b7bf585aa135c065d5042a64077d9cff9194e9060d8
7456   x       Gruntfile.js                        01a1656ca6bf9135010be414f584be6ef4daec9f61f7bfd193742efd24886e44
1080           LICENSE                             cfec6a6c39832bb228b8f4622aefb14f08d3c0f02823238c7143c668c3acd898
9120           README.md                           5d6eb26cf43165f6a24259d324320ab8ca3e779ff15d95a566c0860b15813789
870            bower.json                          6a6782c62afccb7f3bcac7f567ff117b32f1aaef51abc06aa26597d2c7176483
1403           check-type.min.js                   599eabb0ab893543c40e48c75ac9a98e91231b6a237f251338e8d384c24e15cf
621            component.json                      1a68e96ba96dbd87ff401c99809cdbaabfb6c475817cd54b820e6257a0a6da34
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
1486               check-type.test.html            245a0b14d8b1a4e68a9c28b9eefa7e38d75c3a70c67f2c75f1a828ede7c54e4a
13421  x           check-type.test.js              88671cffd4a7bb7b843fb1f5ac2d6b143c742552c833cbe2416e278c3b060f37
                   fixtures/                                                                                       
330                  has_attribute_fixture.js      7f2a4fa0c86e400cec060caeea5ba592617f7b8d70732f61925d4ddbb4d1743d
423                  has_property_fixture.js       0b4d3465a74b0889502f9b1c3ea43e824f42c333e5f8e836245a86cc9101936c
267                  matches_structure_fixture.js  181053a1ce4d5b3947b7a18008313a815e9deeae9e05a5a31dce106bae788e10
1156           package.json                        68ff4148f5bbbeea1de3fcad8995ec6ef686aff8b5a76c5bb1397633a0808a06
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

<!-- summarize version = 0.0.9 -->

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