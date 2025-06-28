// algorithms.js
export const pllAlgorithms = [
  { group: "Adjacent Corner Swap", name: "Aa", img: "./images/pll_Aa.png", alg: "x R' U R' D2 R U' R' D2 R2 x'", display:"x 151 D2 421 D2 44 x'"},
  { group: "Adjacent Corner Swap", name: "Ab", img: "./images/pll_Ab.png", alg: "x R2 D2 R U R' D2 R U' R x'", display:"x 11 D2 421 DD 44 x'"},
  { group: "Diagonal Corner Swap", name: "E",  img: "./images/pll_E.png",  alg: "x' R U' R' D R U R' D' R U R' D R U' R' D' x", display:"x' 421D 451D' 451D 421D' x" ,allowRandomU: false},
  { group: "Adjacent Corner Swap", name: "F",  img: "./images/pll_F.png",  alg: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R", display:"123 4512 1644 2124 5154" }, 
  { group: "Adjacent Corner Swap", name: "Ga", img: "./images/pll_Ga.png", alg: "R2 U R' U R' U' R U' R2 U' D R' U R D'", display:"445151 24244 2D 154D'" },
  { group: "Adjacent Corner Swap", name: "Gb", img: "./images/pll_Gb.png", alg: "R' U' R U D' R2 U R' U R U' R U' R2 D", display:"124 5D' 44515 424211D" },
  { group: "Adjacent Corner Swap", name: "Gc", img: "./images/pll_Gc.png", alg: "R2 U' R U' R U R' U R2 U D' R U' R' D", display:"11242451544 5D' 421D" },
  { group: "Adjacent Corner Swap", name: "Gd", img: "./images/pll_Gd.png", alg: "R U R' U' D R2 U' R U' R' U R' U R2 D'", display:"451 2D 44242451544D'" },
  { group: "Edges Only",           name: "H",  img: "./images/pll_H.png",  alg: "M2 U M2 U2 M2 U M2", display:"M2 U M2 U2 M2 U M2" ,  allowRandomU: false},
  { group: "Adjacent Corner Swap", name: "Ja", img: "./images/pll_Ja.png", alg: "x R2 F R F' R U2 r' U r U2 x'", display:"x 1164 3422 (1)5(4)22" },
  { group: "Adjacent Corner Swap", name: "Jb", img: "./images/pll_Jb.png", alg: "R U R' F' R U R' U' R' F R2 U' R'", display:"4513 4512 1644 212" },
  { group: "Diagonal Corner Swap", name: "Na", img: "./images/pll_Na.png", alg: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'", display:"4515 4513 4512 1644 2155421" ,allowRandomU: false },
  { group: "Diagonal Corner Swap", name: "Nb", img: "./images/pll_Nb.png", alg: "R' U R U' R' F' U' F R U R' F R' F' R U' R", display:"1542 1326 4512 42(6)4(3)" ,allowRandomU: false},
  { group: "Adjacent Corner Swap", name: "Ra", img: "./images/pll_Ra.png", alg: "R U' R' U' R U R D R' U' R D' R' U2 R'", display:"4513 422 122 1645 4221" },
  { group: "Adjacent Corner Swap", name: "Rb", img: "./images/pll_Rb.png", alg: "R2 F R U R U' R' F' R U2 R' U2 R", display:"1164 5421 3422 1554" },
  { group: "Adjacent Corner Swap", name: "T",  img: "./images/pll_T.png",  alg: "R U R' U' R' F R2 U' R' U' R U R' F'", display:"4512 1644 2124 513" },
  { group: "Edges Only",           name: "Ua", img: "./images/pll_Ua.png", alg: "U2 R U' R U R U R U' R' U' R2", display:"4515 1244 215154" },
  { group: "Edges Only",           name: "Ub", img: "./images/pll_Ub.png", alg: "U2 R2 U R U R' U' R' U' R' U R' U2", display:"1512 444 2154 511" },
  { group: "Diagonal Corner Swap", name: "V",  img: "./images/pll_V.png",  alg: "U' R' U R' U' y R' F' R2 U' R' U R' F R F y' U", display:"4245124D'42D 11244D'11" },
  { group: "Diagonal Corner Swap", name: "Y",  img: "./images/pll_Y.png",  alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'", display:"642124513 4512 1643" },
  { group: "Edges Only",           name: "Z",  img: "./images/pll_Z.png",  alg: "M' U' M2 U' M2 U' M' U2 M2 U", display:"M U M2 U MU 2 M U2 M2 U'" ,allowRandomU: false }
];

export const collAlgorithms = [
  { group: "P", name: "P1", img: "./images/coll_p1.png", alg: "R U2 R2 U' R2 U' R2 U2 R", display: "4 22 11 2 44 2 11 22 4" },
  { group: "P", name: "P2", img: "./images/coll_p2.png", alg: "R U R' U' R' F R2 U R' U' R U R' U' F'", display: "4512 164 4512 4512 3" },
  { group: "P", name: "P3", img: "./images/coll_p3.png", alg: "F U R U' R' U R U' R' R' F' R U R U' R'", display: "6 5421 5421 134 5421" },
  { group: "P", name: "P4", img: "./images/coll_p4.png", alg: "R U' L' U R' U L U L' U L", display: "42 85 15 75857" },
  { group: "P", name: "P5", img: "./images/coll_p5.png", alg: "R' U' F' R U R' U' R' F R2 U2 R' U2 R", display: "12345121644 221224" },
  { group: "P", name: "P6", img: "./images/coll_p6.png", alg: "R' F' U' F U' R U S' R' U R S", display: "1326 245S' 154S" },

  { group: "H", name: "H1", img: "./images/coll_h1.png", alg: "R U2 R' U' R U R' U' R U' R'", display: "42212 4512 421", allowRandomU: false },
  { group: "H", name: "H2", img: "./images/coll_h2.png", alg: "F R U R' U' R U R' U' R U R' U' F'", display: "6 4512 4512 4512 3", allowRandomU: false },
  { group: "H", name: "H3", img: "./images/coll_h3.png", alg: "R U R' U R U L' U R' U' L", display: "4515 4585 127" },
  { group: "H", name: "H4", img: "./images/coll_h4.png", alg: "F R U' R' U R U2 R' U' R U R' U' F'", display: "6 4215 42212 4512 3" },

  { group: "U", name: "U1", img: "./images/coll_u1.png", alg: "R U R' U R U2 R' R' U' R U' R' U2 R", display: "4515 4221 1242 1224" },
  { group: "U", name: "U2", img: "./images/coll_u2.png", alg: "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R", display: "1 y-perm 4" },
  { group: "U", name: "U3", img: "./images/coll_u3.png", alg: "R2 D' R U2 R' D R U2 R", display: "11 D' 4221 D 4224" },
  { group: "U", name: "U4", img: "./images/coll_u4.png", alg: "R2 D R' U2 R D' R' U2 R'", display: "44 D 1224 D' 1221" },
  { group: "U", name: "U5", img: "./images/coll_u5.png", alg: "F R U' R' U R U R' U R U' R' F'", display: "6 4215 4515 421 3" },
  { group: "U", name: "U6", img: "./images/coll_u6.png", alg: "R2 D' R U R' D R U R U' R' U' R", display: "11 D' 451 D 4542124" },

  { group: "T", name: "T1", img: "./images/coll_t1.png", alg: "R U2 R' U' R U' R2 U2 R U R' U R", display: "4221 2421 1224 5154" },
  { group: "T", name: "T2", img: "./images/coll_t2.png", alg: "R' U R U2 R' L' U R U' L", display: "15422 18 5427" },
  { group: "T", name: "T3", img: "./images/coll_t3.png", alg: "r U R' U' r' F R F'", display: "(4)512 (1)643" },
  { group: "T", name: "T4", img: "./images/coll_t4.png", alg: "l' U' L U l F' L' F", display: "(8)275 (7)386" },
  { group: "T", name: "T5", img: "./images/coll_t5.png", alg: "F R U R' U' R U' R' U' R U R' F'", display: "6 4512 4212 4513" },
  { group: "T", name: "T6", img: "./images/coll_t6.png", alg: "R' U R2 D r' U2 r D' R2 U' R", display: "1544 D (1)55(4) D' 1124" },

  { group: "L", name: "L1", img: "./images/coll_l1.png", alg: "R' U' R U R' F' R U R' U' R' F R2", display: "12 j-perm" },
  { group: "L", name: "L2", img: "./images/coll_l2.png", alg: "R' U2 R U R' U' R U R' U' R U R' U R", display: "122 4512 4512 45154" },
  { group: "L", name: "L3", img: "./images/coll_l3.png", alg: "R U2 R D R' U2 R D' R2", display: "4224 D 1554 D' 11" },
  { group: "L", name: "L4", img: "./images/coll_l4.png", alg: "R' U2 R' D' R U2 R' D R2", display: "1551 D' 4551 D 44" },
  { group: "L", name: "L5", img: "./images/coll_l5.png", alg: "x R' U R D' R' U' R D x'", display: "x 154D' 124D " },
  { group: "L", name: "L6", img: "./images/coll_l6.png", alg: "F R' F' r U R U' r'", display: "613(4) 542(1)" }
];
