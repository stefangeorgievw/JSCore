let assert = require('chai').assert;
const SoftUniFly = require('../SoftUniFy/app');

    describe('SoftUniFy', function(){
        let soft;
        beforeEach(function(){
             soft = new SoftUniFly();
        })

        describe('constructor', function(){
            it('should have empty allSongs', function(){
                
                 assert.equal(soft.allSongs !== undefined, true);
              });
        });

        describe('download Song', function(){
            it('should download new artist correctly', function(){
                
                let result = soft.downloadSong('Pesho','PeshosSong', 'alalalala');
               
                 assert.equal(result.allSongs['Pesho'] !== undefined,true);
              });

              it('should download new artist song', function(){
                
                let result = soft.downloadSong('Pesho','PeshosSong', 'alalalala');
               
                 assert.equal(Object.keys(result.allSongs['Pesho'].songs).length,1);
              });

              it('should download new artist songs', function(){
                
                 soft.downloadSong('Pesho','PeshosSong', 'alalalala');
                let result = soft.downloadSong('Pesho','PeshosSong2', 'alalalala2');
               
                 assert.equal(Object.keys(result.allSongs['Pesho'].songs).length,2);
              });
        });

        describe('playSong', function(){
            it('standard Use', function(){
                soft.downloadSong('Pesho','PeshosSong', 'alalalala');
               let result = soft.playSong('PeshosSong');
                 assert.equal(result, 'Pesho:\nPeshosSong - alalalala\n');
            });

            it('standard Use with 2 correct Songs', function(){
                soft.downloadSong('Pesho','PeshosSong', 'alalalala');
                soft.downloadSong('Ivan','PeshosSong', 'balabala');
               let result = soft.playSong('PeshosSong');
                 assert.equal(result, 'Pesho:\nPeshosSong - alalalala\nIvan:\nPeshosSong - balabala\n');
            });

            it('with no songs', function(){
               let result = soft.playSong('PeshosSong');
                 assert.equal(result, `You have not downloaded a PeshosSong song yet. Use SoftUniFy's function downloadSong() to change that!`);
            });

            it('has songs but with different name', function(){
                soft.downloadSong('Pesho','PeshosSong', 'alalalala');
                let result = soft.playSong('fakeSong');
                  assert.equal(result, `You have not downloaded a fakeSong song yet. Use SoftUniFy's function downloadSong() to change that!`);
             });
        });

        describe('songList', function(){
            it('standard use', function(){
                soft.downloadSong('Pesho','PeshosSong', 'alalalala');
                soft.downloadSong('Pesho','PeshosSong2', 'alalalala');
                soft.downloadSong('Ivan','IvansSong', 'alalalala');
                let result = soft.songsList;
                 assert.equal(result, 'PeshosSong - alalalala\nPeshosSong2 - alalalala\nIvansSong - alalalala');
            });

            it('no songs', function(){
              
                let result = soft.songsList;
                 assert.equal(result, 'Your song list is empty');
            });
        });

        it("should not rate non existing artist", function(){
    
            let expectedResult = "The Pesho is not on your artist list.";
    
            let actualResult = soft.rateArtist("Pesho");
    
            assert.equal(expectedResult, actualResult);
    });
    });
