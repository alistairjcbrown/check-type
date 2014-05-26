##### Signed by https://keybase.io/alistairjcbrown
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.14 (GNU/Linux)

iQEcBAABAgAGBQJTg4dkAAoJEJEOHi8Q7zzzvEoIAJfPmfEt7i+UaoRf/KutSIPT
4o7ELA8gL4AdFAnv+RvNBfw1ZQmx0W7/ek3pQ4WFsUD3tvZ2JAqfXNIG/VLNFiny
VczsfFaX7494QYg5N0O5fGlF+g2o++dWE/Q2WLlvAPGHkZL26sOHYZh4kMTseLd6
+BssBOd1yTPXzqjhSkii3OYIhZY/FzuZr9VKPnYf2ma6kBq+oR27yCUii6iVaACG
4udOA1vp69qsm3eW0KUVEiO7pC3XcQufzd/yadIFaLxtN7NrDP1kMihu05UydCde
+Dw3UQb7Dvm5rBviZV/NEetp3Dp/Am966DBwJk+BWKRLEM31/ehF9CJkb45qvyo=
=g2to
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
8992           README.md                           89b890ea6dc9e5655fc6d3c4c2cf27a26d0861a8cbcd6e6d21757cc8c6d78452
795            bower.json                          3ce71f717a4a6b0c57e2ce5b385ed5e778df2de5c41c7cb5ad242b4e3a6b4806
1359           check-type.min.js                   6ad21c4fada573234a2998949346e230d8837ec545997c44b61d8bf6ca80df51
585            component.json                      f5364e5db529f39451bbaad549dd76a9f122d7b04905477219f611626c7d6178
               lib/                                                                                                
6442             check-type.js                     5bca13f3a97c41a0857f464e40e04e6b4a3b8d2b13fe0c6d0001757447acafb1
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
13040  x           check-type.test.js              638365fdd7bbb78381ffc58b0cf1d589d93cf876c14bdb0cf41cfc71d571f2d3
                   fixtures/                                                                                       
325                  has_attribute_fixture.js      b75e70ef3d253e230c176b193ea44f8eac06ffe41f788b93243fe3fb6fa503f0
408                  has_property_fixture.js       fd07814084af0eff5535b2d1410f40949cbdf8f411464904a39d36d19dc31e27
267                  matches_structure_fixture.js  181053a1ce4d5b3947b7a18008313a815e9deeae9e05a5a31dce106bae788e10
1329           package.json                        9c4a46c6cac6406d655e0d43374c50d0d6516e87938ab3fe1ac26eed10cca832
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