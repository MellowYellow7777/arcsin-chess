var images = {
  wp: new Image(),
  wn: new Image(),
  wb: new Image(),
  wr: new Image(),
  wq: new Image(),
  wk: new Image(),
  bp: new Image(),
  bn: new Image(),
  bb: new Image(),
  br: new Image(),
  bq: new Image(),
  bk: new Image(),
};

images.piece = {
  [+1]: images.wp,
  [+2]: images.wn,
  [+3]: images.wb,
  [+4]: images.wr,
  [+5]: images.wq,
  [+6]: images.wk,
  [-1]: images.bp,
  [-2]: images.bn,
  [-3]: images.bb,
  [-4]: images.br,
  [-5]: images.bq,
  [-6]: images.bk,
};

images.wp.src = "./pieces/wp.svg";
images.wn.src = "./pieces/wn.svg";
images.wb.src = "./pieces/wb.svg";
images.wr.src = "./pieces/wr.svg";
images.wq.src = "./pieces/wq.svg";
images.wk.src = "./pieces/wk.svg";
images.bp.src = "./pieces/bp.svg";
images.bn.src = "./pieces/bn.svg";
images.bb.src = "./pieces/bb.svg";
images.br.src = "./pieces/br.svg";
images.bq.src = "./pieces/bq.svg";
images.bk.src = "./pieces/bk.svg";