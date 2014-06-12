##### Signed by https://keybase.io/alistairjcbrown
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.14 (GNU/Linux)

iQEcBAABAgAGBQJTmistAAoJEJEOHi8Q7zzz23kH/2VZ85vINQICUx5jAb8FQ2Dt
maxzSUwdckXSlyGTkCANpLKGKuiMwBBp6hHGLwQZbmuUWh4y1LVWZac+EjJQo63q
ZM/IuhXcuy+y2XUPSG+wnMrTwlREOaGWjZcQdCQeVmCoA2/SLBamLcN9I/3dZv7S
L2DDJxedeVimoT2oa1nux79IAhSqO+qfX5HlYzscGG6UI7wqdlEwZ0a+bE+JfMlm
z9ngDe35qUoeXHJ5gklAqMWJeF/QqSWKtVa67T8VE/nuDhHZ/7wFiTSxQ2rVo7Ae
b98nP5QZ9F1/Kq3O/Q/kGluNBMVR10wgjxOjUENquH2ROA8par+L0Q1/04U8FKQ=
=OKBo
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
6256   x       Gruntfile.js                        b80b421ec6496375d35ef6d806769df57455a99e5ba02e5fbcfc950493bd7568
1080           LICENSE                             cfec6a6c39832bb228b8f4622aefb14f08d3c0f02823238c7143c668c3acd898
9120           README.md                           5d6eb26cf43165f6a24259d324320ab8ca3e779ff15d95a566c0860b15813789
795            bower.json                          51b8b0524f552a9bf651c8fdcc9d8a03caac87b1449ef876a1ba1e5bed94ca64
1403           check-type.min.js                   baffb2a95409af6105df0a09a1d5df777f9b9145507dfd57a5b5ea65ce85ff19
586            component.json                      7eeb8bc1c541ef1f699ebc0c5159d34b0d7fb558b03f1b5a13e98d9bdfca80c6
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
1148           package.json                        83618e1958e50e5e13dacb9d694c1461a3e17ac4acf244c3fde45bcda79139b2
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