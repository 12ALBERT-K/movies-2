// movies-database.js
const allMovies = [
  
   {id:1, title:"Peter Rabbit", poster:"peter.jpg", genre:"Family", quality:"HD", year:"2018", rating:6.6, desc:"Peter Rabbit and his friends venture into a farmer's garden and end up in a comical battle for the vegetables.", trailer:"https://www.youtube.com/embed/7Pa_Weidt08", movie:"https://playerwish.com/d9rkhq4b5ehz"},
  
  {id:2, title:"Shaolin Soccer", poster:"shaolinsoccer.jpg", genre:"Comedy", quality:"HD", year:"2001", rating:7.3, desc:"A young Shaolin follower reunites with his discouraged brothers to form a soccer team using their martial arts skills.", trailer:"https://www.youtube.com/embed/KEWUDWYDdYs", movie:"https://hglink.to/0o7r2fqtg0z9"},
  
  {id:3, title:"The Dark Tower", poster:"dark_tower.jpg", genre:"Action", quality:"HD", year:"2017", rating:5.6, desc:"A boy haunted by visions of a dark tower from a parallel reality teams up with the tower's disillusioned guardian.", trailer:"https://www.youtube.com/embed/DlxzbTK3YHc", movie:"https://hglink.to/2huxeov8jovr"},
  
  {id:4, title:"The Continental", poster:"continental.jpg", genre:"Action", quality:"HD", year:"2023", rating:7.8, desc:"Set in the world of John Wick, this explores the origin of the iconic Continental Hotel.", trailer:"https://www.youtube.com/embed/5HzrC80xYRI", movie:"https://hglink.to/k9jptu8xrc2l"},
  
  {id:5, title:"Old Way", poster:"old_way.jpg", genre:"Action", quality:"HD", year:"2023", rating:5.4, desc:"An old gunslinger and his daughter must face the consequences of his past when the son of a man he murdered years ago arrives.", trailer:"https://www.youtube.com/embed/_pYQ33Jtv3k", movie:"https://dhcplay.com/9gk7awllle1h"},
  
  {id:6, title:"Mortal Kombat", poster:"motalkombat.jpg", genre:"Action", quality:"4K", year:"2021", rating:6.1, desc:"Fighters from different realms battle each other in a tournament to save Earth.", trailer:"https://www.youtube.com/embed/NYH2sLid0Zc", movie:"https://playerwish.com/jkh8vngkvqbu"},
  
  {id:7, title:"Frozen II", poster:"https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg", genre:"Animation", quality:"4K", year:"2019", rating:7.0, desc:"Elsa discovers the origins of her powers and journeys into the unknown to save her kingdom.", trailer:"https://www.youtube.com/embed/Zi4LMpSDccc", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/frozen-2-USbZa8Gyii3?id=2765617905336208048&type=/movie/detail"},
  
  {id:8, title:"Inception", poster:"https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", genre:"Sci-Fi", quality:"4K", year:"2010", rating:8.8, desc:"A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.", trailer:"https://www.youtube.com/embed/YoHD9XEInc0", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/inception-e1BOR6f19C7?id=6391474290696802080&type=/movie/detail"},
  
  {id:9, title:"The Lion King", poster:"https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg", genre:"Animation", quality:"4K", year:"2019", rating:7.0, desc:"Simba rises as king of the Pride Lands after the murder of his father.", trailer:"https://www.youtube.com/embed/7TavVZMewpY", movie:"https://iplayerhls.com/ncq1n2h5jmks"},
  
  {id:10, title:"Shang-Chi", poster:"https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg", genre:"Action", quality:"4K", year:"2021", rating:7.4, desc:"Shang-Chi confronts his father's legacy and the Ten Rings organization.", trailer:"https://www.youtube.com/embed/8YjFbMbfXaQ", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/shang-chi-and-the-legend-of-the-ten-rings-A8nEw8QRz99?id=7683359582424812208&type=/movie/detail"},
  
  {id:11, title:"Doctor Strange", poster:"https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg", genre:"Action", quality:"4K", year:"2016", rating:7.5, desc:"A surgeon becomes the Sorcerer Supreme after a tragic accident.", trailer:"https://www.youtube.com/embed/Lt-U_t2pUHI", movie:"https://cybervynx.com/82s03coszqgp"},
  
  {id:12, title:"Thor: Ragnarok", poster:"https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg", genre:"Action", quality:"4K", year:"2017", rating:7.9, desc:"Thor battles Hela to save Asgard from destruction.", trailer:"https://www.youtube.com/embed/ue80QwXMRHg", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/thor-ragnarok-0OxnhcY1NX?id=809393712282353912&type=/movie/detail"},
  
  {id:13, title:"Iron Man", poster:"https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg", genre:"Action", quality:"4K", year:"2008", rating:7.9, desc:"Tony Stark becomes Iron Man after being held captive in an Afghan cave.", trailer:"https://www.youtube.com/embed/8ugaeA-nMTc", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/iron-man-yxwdsuLS2t7?id=6268300615831947768&type=/movie/detail"},
  
  {id:14, title:"Guardians of the Galaxy", poster:"https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg", genre:"Sci-Fi", quality:"4K", year:"2014", rating:8.0, desc:"Misfits unite to save the galaxy from destruction.", trailer:"https://www.youtube.com/embed/d96cjJhvlMA", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/guardians-of-the-galaxy-kyyopSH9fFa?id=8951323495452001320&type=/movie/detail"},
  
  {id:15, title:"Captain Marvel", poster:"https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg", genre:"Action", quality:"4K", year:"2019", rating:6.8, desc:"Carol Danvers becomes Captain Marvel and must stop a galactic war.", trailer:"https://www.youtube.com/embed/Z1BCujX3pw8", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/captain-marvel-gGnd8uviXh9?id=7796772007806651056&type=/movie/detail"},
  
  {id:16, title:"Avengers: Infinity War", poster:"https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", genre:"Action", quality:"4K", year:"2018", rating:8.4, desc:"The Avengers fight Thanos who seeks to collect all Infinity Stones.", trailer:"https://www.youtube.com/embed/6ZfuNTqbHE8", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/avengers-infinity-war-kqyUcfKDuya?id=8859944774137176072&type=/movie/detail"},
  
  {id:17, title:"Ant-Man", poster:"antman.jpg", genre:"Action", quality:"HD", year:"2015", rating:7.3, desc:"A hero shrinks to save the world from technological threats.", trailer:"https://www.youtube.com/embed/pWdKf3MneyI", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/ant-man-0OxnhcY1NX?id=809393712282353912&type=/movie/detail"},
  
  {id:18, title:"Deadpool", poster:"https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg", genre:"Comedy", quality:"4K", year:"2016", rating:8.0, desc:"The Merc with a Mouth takes on villains with his unique humor.", trailer:"https://www.youtube.com/embed/ONHBaC-pfsk", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/deadpool-MiTOsbTc2C1?id=1354190728729084152&type=/movie/detail"},
  
  {id:19, title:"Aquaman", poster:"https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg", genre:"Action", quality:"4K", year:"2018", rating:6.8, desc:"Arthur Curry embraces his destiny as king of Atlantis.", trailer:"https://www.youtube.com/embed/WDkg3h8PCVU", movie:"https://drive.google.com/file/d/1Zae3z1lts3NbdJWuHvqNGAvT27uc4C87/view?usp=sharing"},
  
  {id:20, title:"Wonder Woman", poster:"https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg", genre:"Action", quality:"4K", year:"2017", rating:7.4, desc:"Diana fights in World War I to save humanity.", trailer:"https://www.youtube.com/embed/1Q8fG0TtVAY", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/wonder-woman-sYtCKV6m7s3?id=2898542770870699048&type=/movie/detail"},
  
  {id:21, title:"Justice League", poster:"https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg", genre:"Action", quality:"4K", year:"2017", rating:6.1, desc:"DC heroes unite to save Earth from alien threats.", trailer:"https://www.youtube.com/embed/r9-DM9uBtVI", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/justice-league-ONQ5wu0QNA5?id=4694713762098594040&type=/movie/detail"},
  
  {id:22, title:"The Flash", poster:"flash.jpg", genre:"Action", quality:"4K", year:"2023", rating:6.9, desc:"Barry Allen saves the multiverse by traveling through time.", trailer:"https://www.youtube.com/embed/hebWYacbdvc", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/the-flash-ebYfq3Fgli1?id=1087610743698114736"},
  
  {id:23, title:"Black Widow", poster:"https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg", genre:"Action", quality:"4K", year:"2021", rating:6.7, desc:"Natasha confronts her past and the Red Room.", trailer:"https://www.youtube.com/embed/Fp9pNPdNwjI", movie:"https://cybervynx.com/4z9zngpbppu3"},
  
  {id:24, title:"Captain America: Civil War", poster:"captain.jpg", genre:"Action", quality:"4K", year:"2016", rating:7.8, desc:"Heroes clash over political interference in their activities.", trailer:"https://www.youtube.com/embed/dKrVegVI0Us", movie:"https://cybervynx.com/3q1tau0qty99"},
  
  {id:25, title:"The Incredible Hulk", poster:"https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg", genre:"Action", quality:"HD", year:"2008", rating:6.7, desc:"Bruce Banner becomes the Hulk while on the run.", trailer:"https://www.youtube.com/embed/xbqNb2PFKKA", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/the-incredible-hulk-QgJ0QNJaKT?id=754621222717116200&type=/movie/detail"},
  
  {id:26, title:"Doctor Strange 2", poster:"https://image.tmdb.org/t/p/w500/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg", genre:"Action", quality:"4K", year:"2022", rating:7.0, desc:"Multiverse of Madness unfolds as Strange faces new threats.", trailer:"https://www.youtube.com/embed/aWzlQ2N6qqg", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/doctor-strange-in-the-multiverse-of-madness-a9GflXIYqE9?id=8101068447863426648&type=/movie/detail"},
  
  {id:27, title:"Venom", poster:"https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg", genre:"Action", quality:"4K", year:"2018", rating:6.7, desc:"Eddie Brock bonds with a symbiote to fight evil.", trailer:"https://www.youtube.com/embed/u9Mv98Gr5pY", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/venom-ocmi4TkYME8?id=7266571197197209384&type=/movie/detail"},
  
  {id:28, title:"Suicide Squad", poster:"https://image.tmdb.org/t/p/w500/xFw9RXKZDvevAGocgBK0zteto4U.jpg", genre:"Action", quality:"HD", year:"2016", rating:5.9, desc:"Villains team up for a dangerous mission.", trailer:"https://www.youtube.com/embed/CmRih_VtVAs", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/the-suicide-squad-2XXGwx1KMia?id=8647303623371808776&type=/movie/detail"},
  
  {id:29, title:"The Dark Knight", poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", genre:"Action", quality:"4K", year:"2008", rating:9.0, desc:"Batman faces the Joker in an epic battle for Gotham's soul.", trailer:"https://www.youtube.com/embed/EXeTwQWrcwY", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/the-dark-knight-I0HXK8FO3k2?id=1950173900541676320&type=/movie/detail"},
  
  {id:30, title:"Man of Steel", poster:"man.jpg", genre:"Action", quality:"4K", year:"2013", rating:7.1, desc:"Clark Kent becomes Superman to save Earth.", trailer:"https://www.youtube.com/embed/T6DJcgm3wNY", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/man-of-steel-OzxiHjFoPG4?id=3936977309407792944&type=/movie/detail"},
  
  {id:31, title:"Eternals", poster:"https://image.tmdb.org/t/p/w500/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg", genre:"Sci-Fi", quality:"4K", year:"2021", rating:6.3, desc:"Immortals emerge to save humanity from the Deviants.", trailer:"https://www.youtube.com/embed/x_me3xsvDgk", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/eternals-gKp46kMIgY5?id=5012373159673220696&type=/movie/detail"},
  
  {id:32, title:"Avatar", poster:"https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg", genre:"Sci-Fi", quality:"4K", year:"2009", rating:7.9, desc:"Humans invade Pandora for resources, but one soldier switches sides.", trailer:"https://www.youtube.com/embed/5PSNL1qE6VY", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/avatar-WLDIi21IUBa?id=8906247916759695608&type=/movie/detail"},
  
  {id:33, title:"Toy Story 4", poster:"toystory4.jpg", genre:"Animation", quality:"4K", year:"2019", rating:7.7, desc:"Woody and Buzz embark on a new adventure with new friends.", trailer:"https://www.youtube.com/embed/wmiIUN-7qhE", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/toy-story-4-uLYXLX8Chi5?id=4444010499486928680&type=/movie/detail&lang=en"},
  
  {id:34, title:"The Incredibles 2", poster:"The Incredibles.jpg", genre:"Animation", quality:"4K", year:"2018", rating:7.6, desc:"Superheroes save the day while dealing with family life.", trailer:"https://www.youtube.com/embed/eZbzbC9285I", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/incredibles-2-sEbcohgMPC2?id=2204313328116187384&type=/movie/detail&lang=en"},
  
  {id:35, title:"Jumanji: Next Level", poster:"jumanji.jpg", genre:"Comedy", quality:"4K", year:"2019", rating:6.7, desc:"People find themselves back in the dangerous Jumanji game.", trailer:"https://www.youtube.com/embed/rBxcF-r9Ibs", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/jumanji-the-next-level-0azwIBRSpf?id=208708012989632088&type=/movie/detail&lang=en"},
  
  {id:36, title:"Coco", poster:"Coco.jpg", genre:"Animation", quality:"4K", year:"2017", rating:8.4, desc:"Music is our world - a journey to the land of the dead.", trailer:"https://www.youtube.com/embed/Ga6RYejo6Hk", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/coco-SbycYK4mvca?id=8562284986265657352&type=/movie/detail&lang=en"},
  
  {id:37, title:"Zootopia", poster:"Zootopia.jpg", genre:"Animation", quality:"4K", year:"2016", rating:8.0, desc:"An animal nation saga of mystery and adventure.", trailer:"https://www.youtube.com/embed/jWM0ct-OLsM", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/zootopia-SxDV9XZ5kg6?id=5256777509147918584&type=/movie/detail&lang=en"},
  
  {id:38, title:"Mission Impossible: Fallout", poster:"MissionImpossibleFallout.jpg", genre:"Action", quality:"4K", year:"2018", rating:7.7, desc:"Nothing is impossible for Ethan Hunt's team.", trailer:"https://www.youtube.com/embed/wb49-oV0F78", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/mission-impossible-fallout-KnQHmjHiIB4?id=3867742479545942264&type=/movie/detail&lang=en"},
  
  {id:39, title:"Mad Max: Fury Road", poster:"MadMaxFuryRoad.jpg", genre:"Action", quality:"4K", year:"2015", rating:8.1, desc:"In a damaged world, power and survival matter most.", trailer:"https://www.youtube.com/embed/hEJnMQG9ev8", movie:"https://fmoviesunblocked.net/spa/videoPlayPage/movies/mad-max-fury-road-waxVSVimlB8?id=7219930822332538888&type=/movie/detail&lang=en"},
  
  {id:40, title:"Avengers: Endgame", poster:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", genre:"Action", quality:"4K", year:"2019", rating:8.4, desc:"The Avengers assemble to reverse Thanos' actions and restore balance.", trailer:"https://www.youtube.com/embed/TcMBFSGVi1c", movie:"https://streamhd.to/embed/movie/avengers-endgame"},
  
  {id:41, title:"Spider-Man: No Way Home", poster:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", genre:"Action", quality:"4K", year:"2021", rating:8.2, desc:"Peter Parker faces multiversal consequences after a spell goes wrong.", trailer:"https://www.youtube.com/embed/JfVOs4VSpmA", movie:"https://streamhd.to/embed/movie/spider-man-no-way-home"},
  
  {id:42, title:"Dune", poster:"https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", genre:"Sci-Fi", quality:"4K", year:"2021", rating:8.0, desc:"Paul Atreides unites with the Fremen for revenge against conspirators.", trailer:"https://www.youtube.com/embed/8g18jFHCLXk", movie:"https://streamhd.to/embed/movie/dune"},
  
  {id:43, title:"The Batman", poster:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", genre:"Action", quality:"4K", year:"2022", rating:7.8, desc:"Batman hunts a killer targeting Gotham's elite.", trailer:"https://www.youtube.com/embed/mqqft2x_Aa4", movie:"https://streamhd.to/embed/movie/the-batman"},
  
  {id:44, title:"Top Gun: Maverick", poster:"https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", genre:"Action", quality:"4K", year:"2022", rating:8.3, desc:"Maverick trains a new generation of Top Gun pilots.", trailer:"https://www.youtube.com/embed/giXco2jaZ_4", movie:"https://streamhd.to/embed/movie/top-gun-maverick"},
  
  {id:45, title:"Everything Everywhere All at Once", poster:"https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg", genre:"Sci-Fi", quality:"4K", year:"2022", rating:7.8, desc:"A woman must connect with parallel universe versions of herself.", trailer:"https://www.youtube.com/embed/wxN1T1uxQ2g", movie:"https://streamhd.to/embed/movie/everything-everywhere-all-at-once"},
  
  {id:46, title:"The Conjuring", poster:"https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg", genre:"Horror", quality:"HD", year:"2013", rating:7.5, desc:"Paranormal investigators help a family terrorized by a dark presence.", trailer:"https://www.youtube.com/embed/k10ETZ41q5o", movie:"https://streamhd.to/embed/movie/the-conjuring"},
  
  {id:47, title:"A Quiet Place", poster:"https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg", genre:"Horror", quality:"4K", year:"2018", rating:7.5, desc:"A family must live in silence to avoid mysterious creatures that hunt by sound.", trailer:"https://www.youtube.com/embed/WR7cc5t7tv8", movie:"https://streamhd.to/embed/movie/a-quiet-place"},
  
  {id:48, title:"Get Out", poster:"https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg", genre:"Horror", quality:"HD", year:"2017", rating:7.7, desc:"A young man uncovers disturbing secrets when he meets his girlfriend's family.", trailer:"https://www.youtube.com/embed/DzfpyUB60YY", movie:"https://streamhd.to/embed/movie/get-out"},
  
  {id:49, title:"Parasite", poster:"https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", genre:"Drama", quality:"4K", year:"2019", rating:8.5, desc:"A poor family schemes to become employed by a wealthy family.", trailer:"https://www.youtube.com/embed/5xH0HfJHsaY", movie:"https://streamhd.to/embed/movie/parasite"},
  
  {id:50, title:"Interstellar", poster:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", genre:"Sci-Fi", quality:"4K", year:"2014", rating:8.7, desc:"Astronauts travel through a wormhole to save humanity.", trailer:"https://www.youtube.com/embed/zSWdZVtXT7E", movie:"https://streamhd.to/embed/movie/interstellar"},
  
 
  {id:51, title:"Section 375", 
    poster:"https://image.tmdb.org/t/p/original/x7rVZ0KiPWxBMJBI8roIwlMvs2c.jpg", 
    genre:"Drama", quality:"HD", year:"2019", rating:8.1, 
    desc:"A celebrated Bollywood director stands accused of rape by a costume assistant. Two lawyers battle it out in a gripping courtroom drama.",
     trailer:"https://www.youtube.com/embed/fJr3Hq0nvS4", 
     movie:"https://hglink.to/8iodw27yligj"},
  
  {id:52, title:"Sisu: Road to Revenge", poster:"https://image.tmdb.org/t/p/original/jNsttCWZyPtW66MjhUozBzVsRb7.jpg", genre:"Action", quality:"4K", year:"2025", rating:6.9, desc:"Returning to rebuild his murdered family's house, the indestructible ex-soldier faces the Red Army commander in a brutal chase.", trailer:"https://image.tmdb.org/t/p/original/jNsttCWZyPtW66MjhUozBzVsRb7.jpg", movie:"https://hglink.to/emil4dnnir47"},
  
  {id:53, title:"Pirates of the Caribbean", poster:"https://image.tmdb.org/t/p/w500/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg", genre:"Family", quality:"4K", year:"2003", rating:8.1, desc:"Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save Elizabeth from Jack's former pirate allies, who are now undead.", 
    trailer:"https://www.youtube.com/embed/naQr0uTrH_s", movie:"https://hglink.to/e6f67yxtljbq"},
  
  {id:54, title:"Sisu", poster:"https://image.tmdb.org/t/p/original/l2hTQgqlRjs8QoO2yx3iCLuC88k.jpg", genre:"Action", quality:"4K", year:"2023", rating:6.9, desc:"A gold prospector in Lapland tries to protect his find from Nazi soldiers in the last days of WWII. An explosive Finnish action thriller.", trailer:"https://www.youtube.com/embed/tIz7HJ8Gw2s", movie:"https://hglink.to/jq0qc79tn116"},
  
  {id:55, title:"Predator: Badlands", poster:"https://image.tmdb.org/t/p/original/M1GRxNZp0bnzTm2jKJxryUqTeU.jpg", genre:"Sci-Fi", quality:"4K", year:"2025", rating:7.2, desc:"The Predator returns to Earth in a deadly hunt across the American badlands. The ultimate hunter becomes the hunted.", trailer:"https://www.youtube.com/embed/tK8h7dM4aB4", movie:"https://hglink.to/fuihtrzdfa4x"},
  
  {id:56, title:"Vivarium", poster:"https://image.tmdb.org/t/p/original/myf3qzpeN0JbuFRPwSpJcz7rmAT.jpg", genre:"Horror", quality:"HD", year:"2020", rating:5.8, desc:"A young couple trapped in a mysterious labyrinthine neighborhood must raise a strange child in order to escape. A surreal psychological thriller.", trailer:"https://www.youtube.com/embed/NXRVemH7z5I", movie:"https://hglink.to/s6ftnc3tfjj1"},
  
  {id:57, title:"Nezha 2", poster:"https://image.tmdb.org/t/p/original/eQjHQqiNPDRVCsU1ZDRz3vw15il.jpg", genre:"Animation", quality:"4K", year:"2024", rating:7.5, desc:"A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror.", trailer:"https://www.youtube.com/embed/iD_dQSLYzrw", movie:"https://hglink.to/vy81zsu3ygo2"},
  
  {id:58, title:"Work It", poster:"https://image.tmdb.org/t/p/original/b5XfICAvUe8beWExBz97i0Qw4Qh.jpg", genre:"Comedy", quality:"HD", year:"2020", rating:6.5, desc:"A brilliant but clumsy high school senior vows to get into her dream college by transforming herself and her friends into dance champions.", trailer:"https://www.youtube.com/embed/nDq0J4wd_xE", movie:"https://hglink.to/xij9cun6dgx7"},
  
  {id:59, title:"I Know What You Did Last Summer", poster:"https://image.tmdb.org/t/p/original/dQyaJx0SptDqvQcAewAr8FAtLB2.jpg", genre:"Horror", quality:"HD", year:"1997", rating:5.8, desc:"Four young friends bound by a tragic accident are reunited when they find themselves being stalked by a hook-wielding maniac.", trailer:"https://www.youtube.com/embed/iVHxK-hLlQw", movie:"https://hglink.to/j4ombruwaih9"},
  
  {id:60, title:"Texas Chainsaw ", genre:"Horror", quality:"4K", year:"1974", rating:7.5, desc:"Five friends head out to rural Texas to visit the grave of a grandfather. On the way they stumble across what appears to be a deserted house.", trailer:"https://www.youtube.com/embed/Vs3981DoINw", movie:"https://hglink.to/nfh04xsqyc34"}
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { allMovies };
}

// Load custom movies from admin panel
const customMovies = JSON.parse(localStorage.getItem('customMovies') || '[]');
allMovies.push(...customMovies);

// Function to add a custom movie
function addCustomMovie(movie) {
  allMovies.push(movie);}