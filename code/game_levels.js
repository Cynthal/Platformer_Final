var GAME_LEVELS = [

  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "               j                                                               !",
   "                                                                             v!!",
   "              xxx                          j                                  !!",
   "                        o                                                     !!",
   "     @                                   xxxxx                             o  !!",
   "xxxxxxxxx             xxxxxxx                              j                  !!",
   "xxxxxxxxxx           xxxxxxxxx                                   xxxxx        !!",
   "xxxxxxxxxx           xxxxxxxxxx         o     o           xxxxxxxxxxxxxxxxx   !!",
   "xxxxxxxxxx           xxxxxxxxxxxxx     xxx   xxx     xxxxxxxxxxxxxxxxxxx!!!ppp!!",
   "xxxxxxxxxx     o     xxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxx!!!!!!!!!xx",
   "xxxxxxxxxx!!!!xxx!!!!xxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxx",
   "xxxxxxxxxx!!!!!!!!!!!xxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxx!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["!!!!ppp!!!!xxxxxxxxxxxxx              x!!!!!!!!!!xxxxxxxx                 !!!!!!!!xxxx",
   "!!!v    !!!xxxxxxxxxxxxxxxxxx       xxx!!!!!!!!xxxxxxxxx                  !!!!xxxxxx  ",
   "!!!  @  !!!xxxxxxxxxxxx  xxxx    xxxx  x!!!!!xxxxxxxxxx                   !!!!xx      ",
   "!!!     !!!xxxxxxxxxxx     xxxx xxx      xx!!!!!!!!!!xxx                 !!!!!x       ",
   "!!!     !!!xxxxxxxx         xxxxx   xxxxxxxxxx!!xxxxx    xxx              !!!!!       ",
   "!!!     !!!xxxxxxx            xx            xx!xxxx        xxx           !!!!         ",
   "!!!     !!!xxxxx              xx             xvx             xxx          !!!!        ",
   "!!!     !!!xxxxx               x                             xx         !!!!          ",
   "!!!     !!!!xxx                v                              xx       !!!!!!xx       ",
   "!!!     x!!!!!v                                                xx  !!!!!!!!!xx        ",
   "!!!      xxxxx                                                 xxxx!!!!!xxxxxx        ",
   "!!!        xx                              o                        vvv    xxxxx      ",
   "!!!                                             xxx                          xxx      ",
   "!!!                                     xxx       xx       j                  xxx     ",
   "!!!                                       x        x      xxx                  xx     ",
   "!!!                 j                     j        x       x                    xx    ",
   "!!!       o               o        o               x       xx                   xx    ",
   "!!!            xxxxxxxxxxx        xxx   xxx        xx    xxxxx     o            xxx   ",
   "!!!           xxxx  xxxxxxx        x   xxxxx!!!!!!xx    oxxxxxxxxxxx             xx   ",
   "!!!          xxx     xxxxxxx            xxxx!!!!!xxx     xxxxxxxx                xxx  ",
   "!!! j        xx         xxxxx           xxxxx!!!xxxx    xxxxxx                   xxxxx",
   "!!!!xx       xx         xxxxx          xxxxxxxxxxxxx     xxxx            o        xxxx",
   "!!!!xxx      xx         xxxxx       xxxxxxx!!!!!v!!x     xxx            xxx        xxx",
   "!!!!x x!!!!!!xx         xxxxx!!!!!!xx     xx!!!! !!!xx    x!!!!!!!!!!!!  x           x",
   "!!!!x x!!!!!!xx         xxxxx!!!!!xx       xxxxx xxxx     x!!!!!!!xx!!!!             x",
   "!!!!x x!!!!!!xx         xxxxx!!!!!xp                     xx!!!!!!xx !!!!v            x",
   "!!!!x x!!!!!!xx         xxxxx!!!!!xp                    xx!!!!!!xx  !!!!      o      x",
   "!!!!x x!!!!!!xxx         xxxxx!!!!!xx   o   xxxxxxxxxxxxxx!!!!!!xx   !!!     xxx     x",
   "!!!!x x!!!!!!xxx         xxxxx!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !!!!v          xx",
   "!!!!x x!!!!!!xxxx         xxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !!!      pppppxx"],
  [" xxx!!!  ppp    xxxxxxxxxxxxxxxxxx               xxxx !!! xxxxxxxxx         xxx!!!!!xxxxxxxxx    xx!!!!!!!!!! ",
   "    !!!   @   xxxxxxxxx      xxxxxx             xxxx  !!!        xxx       xxxx!!!!xxx     xxxx xx v!!!!!!!!  ",
   "     !!       xxxxx             xxxxx        xxxx     !!!          xxx    xxx!!!!xxx         xxxx    !!!!!!!! ",
   "     !!       xxx                 xxxx      xxx       !!!            xxxxxx!!!!!xx             x    ! !!!!!!!!",
   "     !!       xxx                   xx      xx        !!!              xxxx!!!xxx                    !!!!!!!! ",
   "      !       xx                    xx     xx         !!!                xxx!xx                     !!!!!!!!  ",
   "      !       x                      xx    xx         !!!                  xvx                       !!!!!!!! ",
   "     !        x                       xx  xx          !!!                                           ! !!!!!!  ",
   "      !       x                        xxxx            !!                                            !!!!!!!! ",
   "     !                                                !!                                             ! !!!!!!!",
   "      !                                                !!                                           v!!!!!!!! ",
   "      !                                                !                      o                       !!!!!!! ",
   "      v                                       xxx      v!               xxxxx                        !!!!!! !!",
   "                                               x                      xxx   xxxxx                    !!!!!!!  ",
   "                                                                   xxxxx       xxx                  !!!! !!!! ",
   "                                      j                              xxxx       xxx                  !!!!!!!! ",
   "          j                        xx                                   xxx    xxx        o        ! !!!!  !!!",
   "xx                   o          xxxxxxxxxx                                xxxxxxx       xxxxx       !!! !!!!  ",
   "xxx!!!!!xxxxx                  xx       xxx                                              xxx         !!!!!! ! ",
   " xx!!!!!!xxxxx               xx           xxx                                             x        v!!!! !!!! ",
   "  xx!!!!!!!! xxx             xx          xx         o                                                !!!!!!!  ",
   "   xxxx!!!!!  xx           xxx            xx       xxx                            xxxx                !!!!! !!",
   "      xxxx!!   xx           xx             xxx      x                              xx               v!!!!  !!v",
   "  o   xxx!!!    xx         xxx              xx                       j                                !!!!!!  ",
   "      xx!!!    xxx           xx            xxx                                                       !  !!!!! ",
   "      xxx!!!    xx            xx            xxx                  xxxxxxxx                             !!!!! !!",
   "x      xxx!!     xxx         xxx             xx            o    xxx     xxxx                        ! ! !!!!  ",
   "x       xx!!!  xxx          xx               xxx          xxx     xxx      xx                        !!!!!!!! ",
   "xx      xxx!!   xxx     o   xx             xxx             x       xx     xx                        v ! !!!!! ",
   "x      xxx !!   xx        xxx               xx     xxx              xxx  xx                          !!!!!!  !",
   "x       xx vv    xx         xxx             xxx     x                 xxxx      xxxx                  !! !!!! ",
   "x                            xx           xxx                                    xx         o        ! !!!!!! ",
   "xxx                        xxx         xxxxx                                                         v !!!!! !",
   "xxxxx    o               xxx    xxxxxxxxxx       o                                        xxxxxx      !!!!! ! ",
   " xxxxx                  xxx  xxxx               xxx                                      xxx  xxxx    !!! !!!!",
   "  xxxxxxxxxxxxx           xxx                    x                                        xxx xx      !!!!! !!",
   "         xxxxxxxxx                                                                          xxx      !!!! !!! ",
   "            xxxxxxxxx o                                                            xxx       x      v  !!! !!!",
   "                  xxxxxxxxxxxxx      o    xxx                                       x                !!! ! !! ",
   "                           xxxxxxxxxxx     x                                                          !!!!! !!",
   "                                    xxx                                         xxxxxx               !  !!!!! ",
   "                                 xxxx              o                    o  xxxxxxx xxxxxx             !!!!!  !",
   "                              xxxx              xxxxx                  xxxxxx        xxxxx    pppp    ! !!!!!!",
   "                            xxx               xxx   xxx              xxxx           xx!!!!!!!!!!!!!!!!!!! !!! ",
   "                         xxxx                xxx      xxx          xxx             xxxxx!!!!!!!!!!!!!!!!!!!!!!",
   "                    xxxxxx                 xxx          xx        xx              xx!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                 xxxx!!!!!!!!!!!!!!!!!!!!xxxx           xx!ppppppxx              xx!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                     x     ",
   "                                                     x     ",
   "pppxx   x                                         xxxxxxx  ",
   " @  x!!!x  xxxxx  x   x   x       x   xxx   x        x     ",
   "    xxxxx  x!!!x  x!!!x   x       x  x!!!x  xxxxx    x     ",
   "        x  x!!!x  x!!!x   x   x   x  xxxxx  x!!!x    x     ",
   "        x  xxxxx  xxxxx   x!!!x!!!x  x      xvvvx    x     ",
   "        x             x    xxx xxx    xxx   x   x    x     ",
   "                                                           ",
   "        x                       x                          ",
   "        x                       x                          ",
   "     xxxxxxx                    x                          ",
   "        x                       x   xxx    xxx             ",
   "        x   xxxxx  xxxxx    xxxxx  x!!!x  x!!!x  xxxxx     ",
   "        x   x!!!x  x!!!x    x!!!x  xxxxx  xxxxx  x!!!x     ",
   "        x   x!!!x  x!!!x    x!!!x  x      x      x!!!x     ",
   "        x   xxxxx  xxxxx    xxxxx   xxx    xxx   xxxxx     ",
   "                                                 x         ",
   "                                                 x         ",
   "                                                 x         ",
   "                                                           ",
   "                                                     o     ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
