function initializeDocument(title='') {
  var isNode = typeof globalThis.window === 'undefined';
  var canvas, ctx;
  if (!isNode) {
    var html = document.documentElement;
    html.setAttribute('lang','en');
    var head = document.head;
    if (!head) {
      head = document.createElement('head');
      html.prepend(head);
    }
    var viewport = head.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name','viewport');
      viewport.setAttribute('content','width=device-width, initial-scale=1.0');
      head.prepend(viewport);
    }
    var metas = head.querySelectorAll('meta');
    var charset = Array.from(metas).find(meta => meta.hasAttribute('charset'));
    if (!charset) {
      charset = document.createElement('meta');
      head.prepend(charset);
      charset.setAttribute('charset','UTF-8');
    }
    document.title = title;
    var body = document.body;
    if (!body) {
      body = document.createElement('body');
      html.appendChild(body);
    }
    html.style.width = '100%';
    html.style.height = '100%';
    body.style.backgroundColor = 'black';
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    body.style.margin = '0px';
    body.style.overscrollBehavior = 'none';
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var size;
    function resize() {
      size = Math.min(window.innerWidth, window.innerHeight);
      canvas.width = canvas.height = size;
    }
    resize();
    window.onresize = resize;
    document.body.appendChild(canvas);
  }
  var mouse = {
    cx: 0,
    cy: 0,
    x: 0,
    y: 0,
    id: -1,
  };
  mouse.getId = function() {};
  mouse.update = function(event) {
    var rect = canvas.getBoundingClientRect();
    var width = rect.width;
    var height = rect.height;
    var cx = event.clientX - rect.left;
    var cy = event.clientY - rect.top;
    var x = cx / width;
    var y = cy / height;
    mouse.cx = cx;
    mouse.cy = cy;
    mouse.x = x;
    mouse.y = y;
    this.getId(x,y);
  };
  mouse.onMove = function() {};
  mouse.onLeftDown = function() {};
  mouse.onLeftUp = function() {};
  if (!isNode) {
    canvas.onpointermove = function(event) {
      if (event.isPrimary === false) return;
      mouse.update(event);
      mouse.onMove();
    };
    canvas.onpointerdown = function(event) {
      if (event.isPrimary === false) return;
      this.setPointerCapture(event.pointerId);
      mouse.update(event);
      mouse.onLeftDown();
    };
    canvas.onpointerup = function(event) {
      if (event.isPrimary === false) return;
      this.releasePointerCapture(event.pointerId);
      mouse.update(event);
      mouse.onLeftUp();
    };
    canvas.onpointercancel = function(event) {
      if (event.isPrimary === false) return;
      mouse.onLeftUp();
    };
  }
  var pen = {};

  pen.moveTo = function(p) {
    ctx.moveTo(p[0]*size,p[1]*size);
  };
  pen.lineTo = function(p) {
    ctx.lineTo(p[0]*size,p[1]*size);
  };
  pen.line = function(p0,p1) {
    ctx.moveTo(p0[0]*size,p0[1]*size);
    ctx.lineTo(p1[0]*size,p1[1]*size);
  };
  pen.lines = function(...p) {
    ctx.moveTo(p[0][0]*size,p[0][1]*size);
    p.slice(1).forEach(p => {
      ctx.lineTo(p[0]*size,p[1]*size);
    });
  };
  pen.bezTo = function(p1,p2,p3) {
    ctx.bezierCurveTo(
      p1[0]*size,p1[1]*size,
      p2[0]*size,p2[1]*size,
      p3[0]*size,p3[1]*size,
    );
  };
  pen.bez = function(p0,p1,p2,p3) {
    ctx.moveTo(p0[0]*size,p0[1]*size);
    ctx.bezierCurveTo(
      p1[0]*size,p1[1]*size,
      p2[0]*size,p2[1]*size,
      p3[0]*size,p3[1]*size,
    );
  };
  pen.arc = function(p,r,a0,a1,ccw=false) {
    ctx.arc(
      p[0]*size,p[1]*size,
      r*size,
      a0,a1,
      ccw,
    );
  };
  pen.arcTo = function(p0,p1,r) {
    ctx.arcTo(
      p0[0]*size,p0[1]*size,
      p1[0]*size,p1[1]*size,
      r*size,
    );
  };
  pen.drawImage = function(img,point,scale,theta=0) {
    var [x,y] = point;
    var s = scale * size;
    ctx.save();
    ctx.translate(x*size,y*size);
    ctx.rotate(theta);
    ctx.drawImage(img,-s/2,-s/2,s,s);
    ctx.restore();
  };
  var geo = {};
  geo.excludedSquares = [];
  geo.rookLines = [];
  geo.bishopLines = [];
  geo.knightOffsets = [];
  geo.kingOffsets = [];
  geo.whitePawnLines = [];
  geo.blackPawnLines = [];
  geo.whitePawnCaptures = [];
  geo.blackPawnCaptures = [];
  geo.whitePromoSquares = [];
  geo.blackPromoSquares = [];
  geo.castleData = [];
  geo.centers = [];
  geo.orientations = [];
  geo.scales = [];
  geo.getScale = () => 1;
  geo.getOrientation = () => 0;
  var state = {};
  state.turn = 'white';
  state.epSquare = -1;
  state.epPiece = null;
  state.selected = null;
  state.moves = [];
  state.mode = 'play';
  mouse.grabbing = null;
  mouse.selected = null;
  mouse.leftFrom = null;
  mouse.wasSelected = false;
  state.newGame = function() {};
  geo.setOrientations = function(orientations) {
    geo.orientations = orientations;
    geo.getOrientation = (() => {
      var vectors = orientations.map(a => [Math.cos(a), Math.sin(a)]);
      var field = Array(128).fill().map(_ => Array(128).fill(0));
      for (var iy = 0; iy < 128; iy++) {
        var y = iy / 127;
        for (var ix = 0; ix < 128; ix++) {
          var x = ix / 127;
          var vx = 0;
          var vy = 0;
          var exact = -1;
          for (var id = 0; id < geo.centers.length; id++) {
            var [cx,cy] = geo.centers[id];
            var dx = x - cx;
            var dy = y - cy;
            var d2 = dx*dx + dy*dy;
            if (d2 < 1e-12) {
              exact = id;
              break;
            }
            var w = 1 / (d2*d2); // 1/d^4
            vx += vectors[id][0] * w;
            vy += vectors[id][1] * w;
          }
          field[iy][ix] = exact !== -1
            ? orientations[exact]
            : Math.atan2(vy,vx);
        }
      }
      return function(x,y) {
        var ix = x * 127 | 0;
        var iy = y * 127 | 0;
        return field[iy][ix];
      }
    })();
  }
  geo.setScales = function(scales) {
    geo.scales = scales;
    geo.getScale = (() => {
      var field = Array(128).fill().map(_ => Array(128).fill(0));
      for (var iy = 0; iy < 128; iy++) {
        var y = iy / 127;
        for (var ix = 0; ix < 128; ix++) {
          var x = ix / 127;
          var sum = 0;
          var wsum = 0;
          var exact = -1;
          for (var id = 0; id < geo.centers.length; id++) {
            var [cx,cy] = geo.centers[id];
            var dx = x - cx;
            var dy = y - cy;
            var d2 = dx*dx + dy*dy;
            if (d2 < 1e-12) {
              exact = id;
              break;
            }
            var w = 1 / (d2*d2); // 1/d^4
            sum += scales[id] * w;
            wsum += w;
          }
          field[iy][ix] = exact !== -1
            ? scales[exact]
            : sum / wsum;
        }
      }
      return function(x,y) {
        var ix = x * 127 | 0;
        var iy = y * 127 | 0;
        return field[iy][ix];
      }
    })();
  }

  function validColor(color) {
    if (color === 'white') return true;
    if (color === 'black') return true;
    return false;
  }

  function validType(type) {
    return Piece.types.includes(type);
  }

  class Piece {
    static all = [];
    static wk = -1;
    static bk = -1;
    static types = [];
    static typeMap = new Map();
    static addType(type, _Piece) {
      if (this.types.includes(type))
        throw new Error(`Type already added: ${type}`);
      this.types.push(type);
      this.typeMap.set(type, _Piece);
    }
    constructor(color, type, square) {
      if (Piece.at(square))
        throw new Error(`Cannot create a piece on an occupied square`);
      if (!validColor(color))
        throw new Error(`Invalid color: ${color}`);
      if (!validType(type))
        throw new Error(`Invalid type: ${type}`);
      this.color = color;
      this.type = type;
      this.square = square;
      if (type === 'king') {
        if (color === 'white') Piece.wk = square;
        if (color === 'black') Piece.bk = square;
      }
      this.move0 = true;
      Piece.all.push(this);
    }
    static clear() {
      Piece.all.length = 0;
      Piece.wk = -1;
      Piece.bk = -1;
    }
    static create(color, type, square) {
      var _Piece = Piece.typeMap.get(type);
      if (!_Piece)
        throw new TypeError(`Unknown piece type: ${type}`);
      return new _Piece(color, square);
    }
    static at(square) {
      return Piece.all.find(piece => piece.square === square);
    }
    delete() {
      var all = Piece.all;
      var index = all.indexOf(this);
      if (index > -1) all.splice(index, 1);
    }
    getMoves() { throw new Error(`getMoves method not overwritten`) }
    attacking() { throw new Error(`attacking method not overwritten`) }
  }
  class Pawn extends Piece {
    static images = {
      white: images.wp,
      black: images.bp,
    };
    constructor(color, square) {
      super(color, 'pawn', square);
      this.img = Pawn.images[color];
    }
    attacking(square) {
      var captures = this.color === 'white'
        ? geo.whitePawnCaptures
        : geo.blackPawnCaptures;
      return captures[this.square].includes(square);
    }
    getMoves() {
      var moves = [];
      var square = this.square;
      var color = this.color;
      var lines, captures, promos;
      if (color === 'white') {
        lines = geo.whitePawnLines;
        captures = geo.whitePawnCaptures;
        promos = geo.whitePromoSquares;
      }
      if (color === 'black') {
        lines = geo.blackPawnLines;
        captures = geo.blackPawnCaptures;
        promos = geo.blackPromoSquares;
      }
      var inLines = [];
      for (var line of lines) {
        var index = line.indexOf(square);
        if (index > -1) inLines.push([line, index]);
      }
      if (inLines.length === 0) return [];
      for (var [line, index] of inLines) {
        var next1 = index + 1;
        if (next1 < line.length) {
          var to = line[next1];
          if (excluded(to)) continue;
          if (!Piece.at(to) && isLegal(this, to)) {
            if (promos.includes(to)) {
              for (var type of ['queen','rook','bishop','knight'])
                moves.push({ from: square, to, type: 'promo', promo: type });
            } else {
              moves.push({ from: square, to, type: 'normal' });
              var next2 = index + 2;
              if (this.move0 && next2 < line.length) {
                var t2 = line[next2];
                if (excluded(t2)) continue;
                if (!Piece.at(t2) && isLegal(this, t2))
                  moves.push({
                    from: square, to: t2, type: 'double', epSq: to });
              }
            }
          }
        }

        var epSquare = state.epSquare;
        var epPiece = state.epPiece;

        for (var to of (captures[square])) {
          if (excluded(to)) continue;
          var target = Piece.at(to);
          if (target && target.color !== color && isLegal(this, to)) {
            if (promos.includes(to)) {
              for (var type of ['queen','rook','bishop','knight'])
                moves.push({ from: square, to, type: 'promo', promo: type });
            } else {
              moves.push({ from: square, to, type: 'capture' });
            }
          }
          if (to === epSquare) {
            var target = Piece.at(epPiece);
            if (!target || target.color === color) continue;
            if (isLegal(this, to, epPiece)) {
              if (promos.includes(to)) {
                for (var type of ['queen','rook','bishop','knight'])
                  moves.push({
                    from: square, to, type: 'enpassant_promo', promo: type,
                    epPiece });
              } else {
                moves.push({
                  from: square, to, type: 'enpassant', epPiece });
              }
            }
          }
        }
      }
      return moves;
    }
  }
  class Knight extends Piece {
    static images = {
      white: images.wn,
      black: images.bn,
    };
    constructor(color, square) {
      super(color, 'knight', square);
      this.img = Knight.images[color];
    }
    attacking(square) {
      return geo.knightOffsets[this.square].includes(square);
    }
    getMoves() {
      var square = this.square;
      var color = this.color;
      return getOffsetMoves(square, color, geo.knightOffsets)
        .filter(to => isLegal(this, to))
        .map(to => ({from: square, to, type: 'normal' }));
    }
  }
  class Bishop extends Piece {
    static images = {
      white: images.wb,
      black: images.bb,
    };
    constructor(color, square) {
      super(color, 'bishop', square);
      this.img = Bishop.images[color];
    }
    attacking(square) {
      return getLineMoves(
        this.square,
        this.color,
        geo.bishopLines,
      ).includes(square);
    }
    getMoves() {
      var square = this.square;
      var color = this.color;
      return getLineMoves(square, color, geo.bishopLines)
        .filter(to => isLegal(this, to))
        .map(to => ({from: square, to, type: 'normal' }));
    }
  }
  class Rook extends Piece {
    static images = {
      white: images.wr,
      black: images.br,
    };
    constructor(color, square) {
      super(color, 'rook', square);
      this.img = Rook.images[color];
    }
    attacking(square) {
      return getLineMoves(
        this.square,
        this.color,
        geo.rookLines,
      ).includes(square);
    }
    getMoves() {
      var square = this.square;
      var color = this.color;
      return getLineMoves(square, color, geo.rookLines)
        .filter(to => isLegal(this, to))
        .map(to => ({from: square, to, type: 'normal' }));
    }
  }
  class Queen extends Piece {
    static images = {
      white: images.wq,
      black: images.bq,
    };
    constructor(color, square) {
      super(color, 'queen', square);
      this.img = Queen.images[color];
    }
    attacking(square) {
      if (getLineMoves(
        this.square,
        this.color,
        geo.rookLines,
      ).includes(square)) return true;
      return getLineMoves(
        this.square,
        this.color,
        geo.bishopLines,
      ).includes(square);
    }
    getMoves() {
      var square = this.square;
      var color = this.color;
      var moves = getLineMoves(square, color, geo.rookLines)
        .filter(to => isLegal(this, to))
        .map(to => ({from: square, to, type: 'normal' }));
      return moves.concat(getLineMoves(square, color, geo.bishopLines)
        .filter(to => isLegal(this, to))
        .map(to => ({from: square, to, type: 'normal' })));
    }
  }
  geo.findLineWith = function(sq1, sq2) {
    for (var line of geo.rookLines)
      if (line.includes(sq1) && line.includes(sq2)) return line;
    return null;
  }
  class King extends Piece {
    static images = {
      white: images.wk,
      black: images.bk,
    };
    constructor(color, square) {
      super(color, 'king', square);
      this.img = King.images[color];
    }
    attacking(square) {
      return geo.kingOffsets[this.square].includes(square);
    }
    getMoves() {
      var square = this.square;
      var color = this.color;
      var moves = getOffsetMoves(square, color, geo.kingOffsets)
        .filter(to => isLegal(this, to))
        .map(to => ({from: square, to, type: 'normal' }));

      if (!this.move0 || inCheck(color)) return moves;

      for (var [ks,rs,kd,rd,c] of geo.castleData) {
        if (c !== color || ks !== square) continue;
        var rook = Piece.at(rs);
        if (!rook || rook.type!=='rook' || rook.color!==color || !rook.move0) continue;

        var line = geo.findLineWith(square, rs);
        if (!line) continue;

        var ki=line.indexOf(square), ri=line.indexOf(rs), kdi=line.indexOf(kd);

        // all squares between king and rook must be empty
        var lo=Math.min(ki,ri), hi=Math.max(ki,ri), clear=true;
        for (var j=lo+1; j<hi; j++) {
          if (Piece.at(line[j]) || excluded(line[j])) { clear=false; break; }
        }
        if (!clear) continue;

        // king must not pass through (or land in) check
        var step=kdi>ki?1:-1, safe=true;
        for (var j=ki+step; j!==kdi+step; j+=step) {
          var tsquare = line[j];
          this.square = tsquare;
          if (color==='white') Piece.wk=tsquare; else Piece.bk=tsquare;
          var hit = attackedBy(tsquare, opponent(color));
          this.square = square;
          if (color==='white') Piece.wk=square; else Piece.bk=square;
          if (hit) { safe=false; break; }
        }
        if (!safe) continue;

        moves.push({from:square, to:kd, type:'castle', rookFrom:rs, rookTo:rd});
      }
      return moves;
    }
  }
  Piece.addType('pawn',Pawn);
  Piece.addType('knight',Knight);
  Piece.addType('bishop',Bishop);
  Piece.addType('rook',Rook);
  Piece.addType('queen',Queen);
  Piece.addType('king',King);
  function opponent(color) {
    return color === 'white' ? 'black' : 'white';
  }
  function excluded(square) {
    return geo.excludedSquares.includes(square);
  }
  function isCyclic(line) {
    return new Set(line).size < line.length;
  }
  function flattenLines(lines) {
    if (lines.every(item => !Array.isArray(item))) return [lines];
    return lines.flatMap(line =>
      Array.isArray(line) ? flattenLines(line) : line
    );
  }
  function getLineMoves(square, color, lines) {
    var squares = new Set();
    lines = flattenLines(lines);
    for (var line of lines) {
      var l = line.length;
      var cyclic = isCyclic(line);
      var indexes = [];
      for (var i = 0; i < l; i++)
        if (line[i] === square) indexes.push(i);
      if (indexes.length === 0) continue;
      for (var index of indexes) {
        for (var dir of [-1,1]) {
          for (var j = 1; j < l; j++) {
            var next = index + dir*j;
            if (!cyclic && (next < 0 || next >= l)) break;
            var target = line[((next % l) + l) % l];
            if (excluded(target)) break;
            var piece = Piece.at(target);
            if (piece) {
              if (piece.color !== color) squares.add(target);
              break;
            }
            squares.add(target);
          }
        }
      }
    }
    return [...squares];
  }
  function getOffsetMoves(square, color, table) {
    var offsets = table[square];
    if (!offsets || !offsets.length) return [];
    return offsets.filter(target => {
      if (excluded(target)) return false;
      var piece = Piece.at(target);
      if (piece) return piece.color !== color;
      return true;
    });
  }
  function attackedBy(square, color) {
    for (var piece of Piece.all) {
      if (piece.color !== color) continue;
      if (piece.attacking(square)) return true;
    }
    return false;
  }
  function inCheck(color) {
    var kingAt = color === 'white' ? Piece.wk : Piece.bk;
    return kingAt > -1 && attackedBy(kingAt, opponent(color));
  }
  function isLegal(piece, to, ep=-1) {
    var from = piece.square;
    var all0 = Piece.all.slice();
    var wk0 = Piece.wk;
    var bk0 = Piece.bk;
    var target;
    if (ep > -1) {
      target = Piece.at(ep);
      if (target) target.delete();
    }
    target = Piece.at(to);
    if (target) target.delete();
    piece.square = to;
    if (piece.type === 'king') {
      if (piece.color === 'white') Piece.wk = to;
      if (piece.color === 'black') Piece.bk = to;
    }
    var legal = !inCheck(piece.color);
    Piece.all.length = 0;
    for (var p of all0) Piece.all.push(p);
    piece.square = from;
    Piece.wk = wk0;
    Piece.bk = bk0;
    return legal;
  }
  function makeMove(move) {
    var piece = Piece.at(move.from);
    if (!piece) return;
    state.epSquare = -1;
    state.epPiece = -1;
    piece.move0 = false;
    switch (move.type) {
      case 'castle': {
        var rook = Piece.at(move.rookFrom);
        if (rook) { rook.square = move.rookTo; rook.move0 = false; }
        if (piece.color==='white') Piece.wk=move.to; else Piece.bk=move.to;
        piece.square = move.to;
        break;
      }
      case 'enpassant': {
        var ep = Piece.at(move.epPiece); if (ep) ep.delete();
        piece.square = move.to;
        break;
      }
      case 'promo': {
        var cap = Piece.at(move.to); if (cap) cap.delete();
        var col = piece.color; piece.delete();
        Piece.create(col, move.promo, move.to);
        break;
      }
      case 'enpassant_promo': {
        var ep = Piece.at(move.epPiece); if (ep) ep.delete();
        var col = piece.color; piece.delete();
        Piece.create(col, move.promo, move.to);
        break;
      }
      case 'double': {
        piece.square = move.to;
        state.epSquare = move.epSq;
        state.epPiece   = move.to;
        break;
      }
      default: {
        var cap = Piece.at(move.to); if (cap) cap.delete();
        if (piece.type==='king') {
          if (piece.color==='white') Piece.wk=move.to; else Piece.bk=move.to;
        }
        piece.square = move.to;
      }
    }
    state.turn = opponent(state.turn);
    state.moves = [];
    state.selected = null;
  }
  if (!isNode) {
    window.onkeydown = function(event) {
      if (state.mode !== 'edit') {
        if (event.code === 'KeyE') {
          toggleEditMode();
        }
        return;
      }
      switch (event.code) {
        case 'KeyP': return toggleSelection('pawn');
        case 'KeyN': return toggleSelection('knight');
        case 'KeyB': return toggleSelection('bishop');
        case 'KeyR': return toggleSelection('rook');
        case 'KeyQ': return toggleSelection('queen');
        case 'KeyK': return toggleSelection('king');
        case 'KeyD': return toggleSelection('delete');
        case 'KeyM': return toggleSelection('move');
        case 'KeyC': return Piece.all.length = 0;
        case 'KeyS': return state.newGame();
        case 'KeyE': return toggleEditMode();
      }
    }
  }
  function toggleSelection(type) {
    var sel = mouse.selected;
    if (typeof sel !== 'object') {
      mouse.selected = {color: 'white', type};
      return;
    }
    if (sel.type === type) {
      sel.color = sel.color === 'white' ? 'black' : 'white';
      return;
    } else {
      sel.type = type;
      return;
    }
  }
  function toggleEditMode() {
    mouse.selected = null
    state.selected   = null;
    state.moves = [];
    state.mode = state.mode === 'edit' ? 'play' : 'edit';
    if (state.mode === 'edit') {
      mouse.selected = {type: 'move', color: 'white'};
    }
  }
  mouse.onLeftDown = function() {
    if (state.mode === 'edit') {
      if (mouse.id < 0) return;
      var piece = Piece.at(mouse.id);
      if (mouse.selected.type === 'delete') {
        if (!piece) return;
        piece.delete();
        return;
      } else if (mouse.selected.type === 'move') {
        if (!piece) return;
        mouse.grabbing = piece;
        return;
      } else {
        if (piece) {
          var type = piece.type;
          var color = piece.color;
          piece.delete();
          if (type === mouse.selected.type && color === mouse.selected.color) return;
        }
        Piece.create(mouse.selected.color,mouse.selected.type,mouse.id);
        return;
      }
    }
    if (mouse.selected !== null) {
      if (uimake(mouse.id)) return;
    }
    var piece = Piece.at(mouse.id);
    if (piece) {
      mouse.leftFrom = mouse.id;
      mouse.grabbing = piece;
      mouse.wasSelected = mouse.selected === mouse.id;
      mouse.selected = mouse.id;
      state.selected   = piece;
      if (piece.color === state.turn) {
        state.moves = piece.getMoves();
        return
      }
    }
      mouse.selected = null
      state.selected   = null;
      state.moves = [];
    
  }
  mouse.onLeftUp = function() {
    if (state.mode === 'edit') {
      if (mouse.grabbing) {
        var target = Piece.at(mouse.id);
        if (target) target.delete();
        mouse.grabbing.square = mouse.id;
        mouse.grabbing = null;
      }
      return;
    }
    if (!mouse.grabbing) return;
    var piece    = mouse.grabbing;
    var targetSq = mouse.id;
    mouse.grabbing = null;
    if (uimake(targetSq)) return;
    if (mouse.id === mouse.leftFrom && mouse.wasSelected) {
      state.selected = null;
      mouse.selected = null;
      state.moves = [];
    }
  }
  if (!isNode) {
    canvas.oncontextmenu = function(event) {
      if (state.mode === 'edit') {
        event.preventDefault();
        mouse.selected.color = mouse.selected.color === 'white' ? 'black' : 'white';
      }
    }
  }
  function uimake(targetSq) {
    if (!excluded(targetSq) && targetSq !== undefined) {
      var move = state.moves.find(m => m.to === targetSq);
      if (move) {
        // auto-promote 4 now
        if (move.type === 'promo')
          move = state.moves.find(m => m.to===targetSq && m.promo==='queen') || move;
        makeMove(move);
        return true;
      }
    }
  }

  pen.drawBoard = () => {};
  pen.drawGridlines = () => {};

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  pen.drawBoard();
  pen.drawGridlines();

  if (state.mode !== 'edit') hl();

  Piece.all.forEach(piece => {
  if (mouse.grabbing === piece) return;
    var p = geo.centers[piece.square];
    var [x,y] = p;
    pen.drawImage(piece.img,p,geo.getScale(x,y),geo.getOrientation(x,y,piece.color))
  });

  if (state.mode === 'edit') {
    var img = null;
    switch (mouse.selected.color) {
      case 'white':
        switch (mouse.selected.type) {
          case 'pawn': img = images.wp; break;
          case 'knight': img = images.wn; break;
          case 'bishop': img = images.wb; break;
          case 'rook': img = images.wr; break;
          case 'queen': img = images.wq; break;
          case 'king': img = images.wk; break;
        }; break;
      case 'black':
        switch (mouse.selected.type) {
          case 'pawn': img = images.bp; break;
          case 'knight': img = images.bn; break;
          case 'bishop': img = images.bb; break;
          case 'rook': img = images.br; break;
          case 'queen': img = images.bq; break;
          case 'king': img = images.bk; break;
        }; break;
    }

    if (img) {
      var x = mouse.x;
      var y = mouse.y;
      var p = [x,y];
      pen.drawImage(img,p,geo.getScale(x,y),geo.getOrientation(x,y,mouse.selected.color));
    }
    var s = canvas.width;
    ctx.fillStyle = 'white';
    ctx.font = Math.max(s/60,8) + 'px sans-serif';
    var g = s/60;
    ctx.fillText('Edit mode',g/2,g);
    ctx.fillText('E - toggle edit mode',g/2,2*g);
    ctx.fillStyle = ['pawn','knight','bishop','rook','queen','king'].includes(mouse.selected.type) ? 'lime' : 'white';
    ctx.fillText('P, N, B, R, Q, K - select piece type',g/2,3*g);
    ctx.fillText('*(press twice to change color)',3*g/2,4*g);
    ctx.fillStyle = mouse.selected.type === 'move' ? 'lime' : 'white';
    ctx.fillText('M - move pieces (click+drag)',g/2,5*g);
    ctx.fillStyle = mouse.selected.type === 'delete' ? 'lime' : 'white';
    ctx.fillText('D - delete pieces (press D then click)',g/2,6*g);
    ctx.fillStyle = 'white';
    ctx.fillText('S - starting position',g/2,7*g);
    ctx.fillText('C - clear board',g/2,8*g);

  }

    if (mouse.grabbing) {
      var piece = mouse.grabbing;
      var x = mouse.x;
      var y = mouse.y;
      var p = [x,y];
      pen.drawImage(piece.img,p,geo.getScale(x,y),geo.getOrientation(x,y,piece.color));
    }
  }

  pen.dotR = .15;
  pen.capR0 = .325;
  pen.capR1 = .425;

  function hl() {
    var dotR = pen.dotR;
    var capR0 = pen.capR0;
    var capR1 = pen.capR1;
    for (var move of state.moves) {
      var id = move.to;
      var m = geo.centers[id];
      if (!m) continue;
      var piece = Piece.at(id);
      var scl = geo.getScale(m[0],m[1]);
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.globalAlpha = .25;
      pen.moveTo(m);
      if (piece) {
        pen.arc(m,capR1*scl,0,2*Math.PI);
        pen.arc(m,capR0*scl,0,2*Math.PI,true);
        //pen.lineTo(m);
      } else {
        pen.arc(m,dotR*scl,0,2*Math.PI);
      }
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.closePath();
    }
  }


  function run() {
    requestAnimationFrame(run);
    draw();
  }

  return { canvas, ctx, pen, geo, mouse, state, Piece, run };
}