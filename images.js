var images = (() => {

  var base = './';
  if (document.currentScript) {
    var src = document.currentScript.src;
    base = src.substring(0, src.lastIndexOf('/') + 1);
  }

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

  images.wp.src = base + "pieces/wp.svg";
  images.wn.src = base + "pieces/wn.svg";
  images.wb.src = base + "pieces/wb.svg";
  images.wr.src = base + "pieces/wr.svg";
  images.wq.src = base + "pieces/wq.svg";
  images.wk.src = base + "pieces/wk.svg";
  images.bp.src = base + "pieces/bp.svg";
  images.bn.src = base + "pieces/bn.svg";
  images.bb.src = base + "pieces/bb.svg";
  images.br.src = base + "pieces/br.svg";
  images.bq.src = base + "pieces/bq.svg";
  images.bk.src = base + "pieces/bk.svg";

  return images;

})();