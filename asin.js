var edges = {
  A0: [[0.311,0.066],[0.323,0.077],[0.335,0.086],[0.348,0.094]],
  A1: [[0.348,0.094],[0.363,0.104],[0.378,0.111],[0.393,0.118]],
  A2: [[0.393,0.118],[0.410,0.125],[0.427,0.130],[0.445,0.134]],
  A3: [[0.445,0.134],[0.463,0.137],[0.481,0.139],[0.500,0.139]],
  A4: [[0.500,0.139],[0.519,0.139],[0.537,0.137],[0.555,0.134]],
  A5: [[0.555,0.134],[0.573,0.130],[0.590,0.125],[0.607,0.118]],
  A6: [[0.607,0.118],[0.622,0.111],[0.637,0.104],[0.652,0.094]],
  A7: [[0.652,0.094],[0.665,0.086],[0.677,0.077],[0.689,0.066]],
  B0: [[0.278,0.100],[0.290,0.114],[0.303,0.126],[0.317,0.138]],
  B1: [[0.317,0.138],[0.333,0.150],[0.351,0.162],[0.369,0.171]],
  B2: [[0.369,0.171],[0.389,0.181],[0.410,0.188],[0.432,0.193]],
  B3: [[0.432,0.193],[0.454,0.199],[0.477,0.201],[0.500,0.201]],
  B4: [[0.500,0.201],[0.523,0.201],[0.546,0.199],[0.568,0.193]],
  B5: [[0.568,0.193],[0.590,0.188],[0.611,0.181],[0.631,0.171]],
  B6: [[0.631,0.171],[0.649,0.162],[0.667,0.150],[0.683,0.138]],
  B7: [[0.683,0.138],[0.697,0.126],[0.710,0.114],[0.722,0.100]],
  C0: [[0.234,0.133],[0.246,0.151],[0.259,0.169],[0.273,0.185]],
  C1: [[0.273,0.185],[0.291,0.204],[0.311,0.221],[0.333,0.235]],
  C2: [[0.333,0.235],[0.358,0.250],[0.385,0.261],[0.413,0.268]],
  C3: [[0.413,0.268],[0.441,0.276],[0.470,0.280],[0.500,0.280]],
  C4: [[0.500,0.280],[0.530,0.280],[0.559,0.276],[0.587,0.268]],
  C5: [[0.587,0.268],[0.615,0.261],[0.642,0.250],[0.667,0.235]],
  C6: [[0.667,0.235],[0.689,0.221],[0.709,0.204],[0.727,0.185]],
  C7: [[0.727,0.185],[0.741,0.169],[0.754,0.151],[0.766,0.133]],
  D0: [[0.177,0.160],[0.185,0.185],[0.195,0.209],[0.207,0.233]],
  D1: [[0.207,0.233],[0.225,0.265],[0.247,0.294],[0.276,0.317]],
  D2: [[0.276,0.317],[0.309,0.342],[0.347,0.358],[0.387,0.367]],
  D3: [[0.387,0.367],[0.424,0.376],[0.462,0.380],[0.500,0.380]],
  D4: [[0.500,0.380],[0.538,0.380],[0.576,0.376],[0.613,0.367]],
  D5: [[0.613,0.367],[0.653,0.358],[0.691,0.342],[0.724,0.317]],
  D6: [[0.724,0.317],[0.753,0.294],[0.775,0.265],[0.793,0.233]],
  D7: [[0.793,0.233],[0.805,0.209],[0.815,0.185],[0.823,0.160]],

  E0: [[0.311,0.934],[0.323,0.923],[0.335,0.914],[0.348,0.906]],
  E1: [[0.348,0.906],[0.363,0.896],[0.378,0.889],[0.393,0.882]],
  E2: [[0.393,0.882],[0.410,0.875],[0.427,0.870],[0.445,0.866]],
  E3: [[0.445,0.866],[0.463,0.863],[0.481,0.861],[0.500,0.861]],
  E4: [[0.500,0.861],[0.519,0.861],[0.537,0.863],[0.555,0.866]],
  E5: [[0.555,0.866],[0.573,0.870],[0.590,0.875],[0.607,0.882]],
  E6: [[0.607,0.882],[0.622,0.889],[0.637,0.896],[0.652,0.906]],
  E7: [[0.652,0.906],[0.665,0.914],[0.677,0.923],[0.689,0.934]],
  F0: [[0.278,0.900],[0.290,0.886],[0.303,0.874],[0.317,0.862]],
  F1: [[0.317,0.862],[0.333,0.850],[0.351,0.838],[0.369,0.829]],
  F2: [[0.369,0.829],[0.389,0.819],[0.410,0.812],[0.432,0.807]],
  F3: [[0.432,0.807],[0.454,0.801],[0.477,0.799],[0.500,0.799]],
  F4: [[0.500,0.799],[0.523,0.799],[0.546,0.801],[0.568,0.807]],
  F5: [[0.568,0.807],[0.590,0.812],[0.611,0.819],[0.631,0.829]],
  F6: [[0.631,0.829],[0.649,0.838],[0.667,0.850],[0.683,0.862]],
  F7: [[0.683,0.862],[0.697,0.874],[0.710,0.886],[0.722,0.900]],
  G0: [[0.234,0.867],[0.246,0.849],[0.259,0.831],[0.273,0.815]],
  G1: [[0.273,0.815],[0.291,0.796],[0.311,0.779],[0.333,0.765]],
  G2: [[0.333,0.765],[0.358,0.750],[0.385,0.739],[0.413,0.732]],
  G3: [[0.413,0.732],[0.441,0.724],[0.470,0.720],[0.500,0.720]],
  G4: [[0.500,0.720],[0.530,0.720],[0.559,0.724],[0.587,0.732]],
  G5: [[0.587,0.732],[0.615,0.739],[0.642,0.750],[0.667,0.765]],
  G6: [[0.667,0.765],[0.689,0.779],[0.709,0.796],[0.727,0.815]],
  G7: [[0.727,0.815],[0.741,0.831],[0.754,0.849],[0.766,0.867]],
  H0: [[0.177,0.840],[0.185,0.815],[0.195,0.791],[0.207,0.767]],
  H1: [[0.207,0.767],[0.225,0.735],[0.247,0.706],[0.276,0.683]],
  H2: [[0.276,0.683],[0.309,0.658],[0.347,0.642],[0.387,0.633]],
  H3: [[0.387,0.633],[0.424,0.624],[0.462,0.620],[0.500,0.620]],
  H4: [[0.500,0.620],[0.538,0.620],[0.576,0.624],[0.613,0.633]],
  H5: [[0.613,0.633],[0.653,0.642],[0.691,0.658],[0.724,0.683]],
  H6: [[0.724,0.683],[0.753,0.706],[0.775,0.735],[0.793,0.767]],
  H7: [[0.793,0.767],[0.805,0.791],[0.815,0.815],[0.823,0.840]],

  I0: [[0.311,0.066],[0.301,0.078],[0.290,0.089],[0.278,0.100]],
  I1: [[0.278,0.100],[0.264,0.112],[0.250,0.123],[0.234,0.133]],
  I2: [[0.234,0.133],[0.216,0.144],[0.197,0.153],[0.177,0.160]],
  I3: [[0.177,0.160],[0.154,0.167],[0.131,0.171],[0.107,0.171]],
  J0: [[0.348,0.094],[0.339,0.109],[0.328,0.124],[0.317,0.138]],
  J1: [[0.317,0.138],[0.304,0.154],[0.289,0.170],[0.273,0.185]],
  J2: [[0.273,0.185],[0.253,0.203],[0.231,0.220],[0.207,0.233]],
  J3: [[0.207,0.233],[0.176,0.249],[0.143,0.259],[0.107,0.259]],
  K0: [[0.393,0.118],[0.386,0.136],[0.378,0.153],[0.369,0.171]],
  K1: [[0.369,0.171],[0.358,0.193],[0.346,0.214],[0.333,0.235]],
  K2: [[0.333,0.235],[0.316,0.263],[0.297,0.290],[0.276,0.317]],
  K3: [[0.276,0.317],[0.225,0.382],[0.166,0.441],[0.107,0.500]],
  L0: [[0.445,0.134],[0.441,0.154],[0.436,0.174],[0.432,0.193]],
  L1: [[0.432,0.193],[0.426,0.219],[0.419,0.244],[0.413,0.268]],
  L2: [[0.413,0.268],[0.404,0.301],[0.395,0.334],[0.387,0.367]],
  L3: [[0.387,0.367],[0.376,0.411],[0.369,0.455],[0.369,0.500]],
  M0: [[0.500,0.139],[0.500,0.201]],
  M1: [[0.500,0.201],[0.500,0.280]],
  M2: [[0.500,0.280],[0.500,0.380]],
  M3: [[0.500,0.380],[0.500,0.500]],
  N0: [[0.555,0.134],[0.559,0.154],[0.564,0.174],[0.568,0.193]],
  N1: [[0.568,0.193],[0.574,0.219],[0.581,0.244],[0.587,0.268]],
  N2: [[0.587,0.268],[0.596,0.301],[0.605,0.334],[0.613,0.367]],
  N3: [[0.613,0.367],[0.624,0.411],[0.631,0.455],[0.631,0.500]],
  O0: [[0.607,0.118],[0.614,0.136],[0.622,0.153],[0.631,0.171]],
  O1: [[0.631,0.171],[0.642,0.193],[0.654,0.214],[0.667,0.235]],
  O2: [[0.667,0.235],[0.684,0.263],[0.703,0.290],[0.724,0.317]],
  O3: [[0.724,0.317],[0.775,0.382],[0.834,0.441],[0.893,0.500]],
  P0: [[0.652,0.094],[0.661,0.109],[0.672,0.124],[0.683,0.138]],
  P1: [[0.683,0.138],[0.696,0.154],[0.711,0.170],[0.727,0.185]],
  P2: [[0.727,0.185],[0.747,0.203],[0.769,0.220],[0.793,0.233]],
  P3: [[0.793,0.233],[0.824,0.249],[0.857,0.259],[0.893,0.259]],
  Q0: [[0.689,0.066],[0.699,0.078],[0.710,0.089],[0.722,0.100]],
  Q1: [[0.722,0.100],[0.736,0.112],[0.750,0.123],[0.766,0.133]],
  Q2: [[0.766,0.133],[0.784,0.144],[0.803,0.153],[0.823,0.160]],
  Q3: [[0.823,0.160],[0.846,0.167],[0.869,0.171],[0.893,0.171]],

  R0: [[0.311,0.934],[0.301,0.922],[0.290,0.911],[0.278,0.900]],
  R1: [[0.278,0.900],[0.264,0.888],[0.250,0.877],[0.234,0.867]],
  R2: [[0.234,0.867],[0.216,0.856],[0.197,0.847],[0.177,0.840]],
  R3: [[0.177,0.840],[0.154,0.833],[0.131,0.829],[0.107,0.829]],
  S0: [[0.348,0.906],[0.339,0.891],[0.328,0.876],[0.317,0.862]],
  S1: [[0.317,0.862],[0.304,0.846],[0.289,0.830],[0.273,0.815]],
  S2: [[0.273,0.815],[0.253,0.797],[0.231,0.780],[0.207,0.767]],
  S3: [[0.207,0.767],[0.176,0.751],[0.143,0.741],[0.107,0.741]],
  T0: [[0.393,0.882],[0.386,0.864],[0.378,0.847],[0.369,0.829]],
  T1: [[0.369,0.829],[0.358,0.807],[0.346,0.786],[0.333,0.765]],
  T2: [[0.333,0.765],[0.316,0.737],[0.297,0.710],[0.276,0.683]],
  T3: [[0.276,0.683],[0.225,0.618],[0.166,0.559],[0.107,0.500]],
  U0: [[0.445,0.866],[0.441,0.846],[0.436,0.826],[0.432,0.807]],
  U1: [[0.432,0.807],[0.426,0.781],[0.419,0.756],[0.413,0.732]],
  U2: [[0.413,0.732],[0.404,0.699],[0.395,0.666],[0.387,0.633]],
  U3: [[0.387,0.633],[0.376,0.589],[0.369,0.545],[0.369,0.500]],
  V0: [[0.500,0.861],[0.500,0.799]],
  V1: [[0.500,0.799],[0.500,0.720]],
  V2: [[0.500,0.720],[0.500,0.620]],
  V3: [[0.500,0.620],[0.500,0.500]],
  W0: [[0.555,0.866],[0.559,0.846],[0.564,0.826],[0.568,0.807]],
  W1: [[0.568,0.807],[0.574,0.781],[0.581,0.756],[0.587,0.732]],
  W2: [[0.587,0.732],[0.596,0.699],[0.605,0.666],[0.613,0.633]],
  W3: [[0.613,0.633],[0.624,0.589],[0.631,0.545],[0.631,0.500]],
  X0: [[0.607,0.882],[0.614,0.864],[0.622,0.847],[0.631,0.829]],
  X1: [[0.631,0.829],[0.642,0.807],[0.654,0.786],[0.667,0.765]],
  X2: [[0.667,0.765],[0.684,0.737],[0.703,0.710],[0.724,0.683]],
  X3: [[0.724,0.683],[0.775,0.618],[0.834,0.559],[0.893,0.500]],
  Y0: [[0.652,0.906],[0.661,0.891],[0.672,0.876],[0.683,0.862]],
  Y1: [[0.683,0.862],[0.696,0.846],[0.711,0.830],[0.727,0.815]],
  Y2: [[0.727,0.815],[0.747,0.797],[0.769,0.780],[0.793,0.767]],
  Y3: [[0.793,0.767],[0.824,0.751],[0.857,0.741],[0.893,0.741]],
  Z0: [[0.689,0.934],[0.699,0.922],[0.710,0.911],[0.722,0.900]],
  Z1: [[0.722,0.900],[0.736,0.888],[0.750,0.877],[0.766,0.867]],
  Z2: [[0.766,0.867],[0.784,0.856],[0.803,0.847],[0.823,0.840]],
  Z3: [[0.823,0.840],[0.846,0.833],[0.869,0.829],[0.893,0.829]],

  l0: [[0.107,0.259],[0.107,0.500]],
  l1: [[0.107,0.171],[0.107,0.259]],
  l2: [[0.107,0.741],[0.107,0.500]],
  l3: [[0.107,0.829],[0.107,0.741]],

  r0: [[0.893,0.259],[0.893,0.500]],
  r1: [[0.893,0.171],[0.893,0.259]],
  r2: [[0.893,0.741],[0.893,0.500]],
  r3: [[0.893,0.829],[0.893,0.741]],

  m0: [[0.107,0.500],[0.369,0.500]],
  m1: [[0.369,0.500],[0.500,0.500]],
  m2: [[0.500,0.500],[0.631,0.500]],
  m3: [[0.631,0.500],[0.893,0.500]],
};

var centers = [
  [0.314,0.901],[0.357,0.870],[0.410,0.846],[0.469,0.833],
  [0.531,0.833],[0.590,0.846],[0.643,0.870],[0.687,0.901],
  [0.276,0.861],[0.323,0.818],[0.387,0.783],[0.461,0.765],
  [0.539,0.765],[0.613,0.783],[0.677,0.818],[0.725,0.861],
  [0.223,0.822],[0.272,0.758],[0.352,0.703],[0.450,0.676],
  [0.550,0.676],[0.648,0.703],[0.728,0.758],[0.777,0.822],
  [0.150,0.794],[0.174,0.673],[0.285,0.579],[0.439,0.563],
  [0.561,0.563],[0.715,0.579],[0.826,0.673],[0.851,0.794],
  [0.150,0.206],[0.174,0.327],[0.285,0.421],[0.439,0.437],
  [0.561,0.437],[0.715,0.421],[0.826,0.327],[0.851,0.206],
  [0.223,0.178],[0.272,0.243],[0.352,0.297],[0.450,0.324],
  [0.550,0.324],[0.648,0.297],[0.728,0.243],[0.777,0.178],
  [0.276,0.139],[0.323,0.182],[0.387,0.217],[0.461,0.236],
  [0.539,0.236],[0.613,0.217],[0.677,0.182],[0.725,0.139],
  [0.314,0.100],[0.357,0.130],[0.410,0.154],[0.469,0.167],
  [0.531,0.167],[0.590,0.154],[0.643,0.130],[0.687,0.100],
];

var orientation = [
  -0.648,-0.490,-0.298,-0.091,0.091,0.298,0.490,0.648,
  -0.772,-0.565,-0.336,-0.117,0.117,0.336,0.565,0.772,
  -0.927,-0.695,-0.391,-0.137,0.137,0.391,0.695,0.927,
  -1.181,-0.883,-0.423,-0.115,0.115,0.423,0.883,1.181,
  1.571,1.571,0.000,0.000,-0.000,-0.000,-1.571,-1.571,
  1.181,0.883,0.423,0.115,-0.115,-0.423,-0.883,-1.181,
  0.927,0.695,0.391,0.137,-0.137,-0.391,-0.695,-0.927,
  0.772,0.565,0.336,0.117,-0.117,-0.336,-0.565,-0.772,
];

var scales = [
  0.053,0.059,0.063,0.065,0.065,0.063,0.059,0.053,
  0.062,0.073,0.080,0.082,0.082,0.080,0.073,0.062,
  0.074,0.095,0.107,0.106,0.106,0.107,0.095,0.074,
  0.088,0.134,0.154,0.131,0.131,0.154,0.134,0.088,
  0.088,0.134,0.154,0.131,0.131,0.154,0.134,0.088,
  0.074,0.095,0.107,0.106,0.106,0.107,0.095,0.074,
  0.062,0.073,0.080,0.082,0.082,0.080,0.073,0.062,
  0.053,0.059,0.063,0.065,0.065,0.063,0.059,0.053,
];

var getOrientation = (() => {
  var vectors = orientation.map(a => [Math.cos(a), Math.sin(a)]);
  var field = Array(128).fill().map(_ => Array(128).fill(0));

  for (var iy = 0; iy < 128; iy++) {
    var y = iy / 127;

    for (var ix = 0; ix < 128; ix++) {
      var x = ix / 127;

      var vx = 0;
      var vy = 0;
      var exact = -1;

      for (var id = 0; id < centers.length; id++) {
        var [cx,cy] = centers[id];
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
        ? orientation[exact]
        : Math.atan2(vy,vx);
    }
  }

  return function(x,y) {
    var ix = x * 127 | 0;
    var iy = y * 127 | 0;
    return field[iy][ix];
  }
})();

var getScale = (() => {
  var field = Array(128).fill().map(_ => Array(128).fill(0));

  for (var iy = 0; iy < 128; iy++) {
    var y = iy / 127;

    for (var ix = 0; ix < 128; ix++) {
      var x = ix / 127;

      var sum = 0;
      var wsum = 0;
      var exact = -1;

      for (var id = 0; id < centers.length; id++) {
        var [cx,cy] = centers[id];
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



document.body.style = `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: black;
`;

canvas = document.createElement('canvas');
ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

var mouse = {
  cx: 0,
  cy: 0,
  x: 0,
  y: 0,
  id: -1,
};

function updateMouse(event) {
  var rect = canvas.getBoundingClientRect();
  var cx = event.clientX - rect.left;
  var cy = event.clientY - rect.top;
  var x = cx / s;
  var y = cy / s;
  mouse.cx = cx;
  mouse.cy = cy;
  mouse.x = x;
  mouse.y = y;
  getMouseId(x,y);
}

// quadrants:
//
//  2 3
//  0 1

var quadrants = [
  [0,1,2,3,8,9,10,11,16,17,18,19,24,25,26,27],
  [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31],
  [32,33,34,35,40,41,42,43,48,49,50,51,56,57,58,59],
  [36,37,38,39,44,45,46,47,52,53,54,55,60,61,62,63],
];

function cross(x0,y0,x1,y1) {
  return x0*y1 - x1*y0;
}

function cornerCheck(p,corners) {
  var [[x0,y0],[x1,y1],[x2,y2],[x3,y3]] = corners;
  var [px,py] = p;
  var s = cross(x0-x1,y0-y1,x0-px,y0-py) >= 0;
  if (s !== (cross(x1-x2,y1-y2,x1-px,y1-py) >= 0)) return false;
  if (s !== (cross(x2-x3,y2-y3,x2-px,y2-py) >= 0)) return false;
  if (s !== (cross(x3-x0,y3-y0,x3-px,y3-py) >= 0)) return false;
  return true;
}

function getMouseId(x,y) {
  mouse.id = -1;
  if (y > 0.934) return;
  if (y < 0.066) return;
  if (x > 0.893) return;
  if (x < 0.107) return;
  var quad = (y < 0.5) << 1 | (x > 0.5);
  var ids = quadrants[quad];
  var dists = ids.map(id => {
    var [cx,cy] = centers[id];
    var dx = x - cx;
    var dy = y - cy;
    var dist2 = dx*dx + dy*dy;
    return [dist2, id];
  });
  dists.sort((a,b) => a[0] - b[0]);
  var p = [x,y];
  for (var i = 0; i < dists.length; i++) {
    var id = dists[i][1];
    if (cornerCheck(p,corners[id])) {
      mouse.id = id;
      return;
    }
  }
}

canvas.onpointermove = function(event) {
  if (event.isPrimary === false) return;
  updateMouse(event);
  onMouseMove();
}

canvas.onpointerdown = function(event) {
  if (event.isPrimary === false) return;
  this.setPointerCapture(event.pointerId);
  updateMouse(event);
  onMouseDown();
}

canvas.onpointerup = function(event) {
  if (event.isPrimary === false) return;
  this.releasePointerCapture(event.pointerId);
  updateMouse(event);
  onMouseUp();
}

canvas.onpointercancel = function(event) {
  if (event.isPrimary === false) return;
  onMouseUp();
};

var s;

function resize() {
  s = Math.min(window.innerHeight,window.innerWidth);
  canvas.width = canvas.height = s;
}

resize();

window.onresize = resize;

function moveTo(p) {
  ctx.moveTo(p[0]*s,p[1]*s);
}
function lineTo(p) {
  ctx.lineTo(p[0]*s,p[1]*s);
}
function bez(p0,p1,p2,p3) {
  ctx.moveTo(p0[0]*s,p0[1]*s);
  ctx.bezierCurveTo(p1[0]*s,p1[1]*s,p2[0]*s,p2[1]*s,p3[0]*s,p3[1]*s);
}
function bezTo(p1,p2,p3) {
  ctx.bezierCurveTo(p1[0]*s,p1[1]*s,p2[0]*s,p2[1]*s,p3[0]*s,p3[1]*s);
}
function line(p0,p1) {
  moveTo(p0);
  lineTo(p1);
}
function lines(...p) {
  moveTo(p[0]);
  p.slice(1).forEach(lineTo);
}
function arcTo(p0,p1,r) {
  ctx.arcTo(p0[0]*s,p0[1]*s,p1[0]*s,p1[1]*s,r*s);
}
function arc(p,r,a0,a1,ccw=false) {
  ctx.arc(p[0]*s,p[1]*s,r*s,a0,a1,ccw);
}
function drawImage(img,id) {
  var [x,y] = centers[id];
  x *= s;
  y *= s;
  var phi = orientation[id];
  var scl = scales[id]*s;
  var w = scl;
  var h = scl;
  ctx.save();
  ctx.translate(x,y);
  ctx.rotate(phi);
  ctx.drawImage(img,-w/2,-h/2, w,h);
  ctx.restore();
}
function drawImageAt(img,mouse) {
  var {cx,cy,x,y,id} = mouse;
  var phi = getOrientation(x,y);
  var scl = getScale(x,y)*s;
  var w = scl;
  var h = scl;
  ctx.save();
  ctx.translate(cx,cy);
  ctx.rotate(phi);
  ctx.drawImage(img,-w/2,-h/2, w,h);
  ctx.restore();
}

var drawCell = [];
var corners = [];

function addCell(edges,dirs) {
  var [e0,e1,e2,e3] = edges;
  var [d0,d1,d2,d3] = dirs;
  if (d0) e0 = e0.toReversed();
  if (d1) e1 = e1.toReversed();
  if (d2) e2 = e2.toReversed();
  if (d3) e3 = e3.toReversed();
  var m0 = e0[0];
  var f0 = e0.length === 2 ? lineTo : bezTo;
  var f1 = e1.length === 2 ? lineTo : bezTo;
  var f2 = e2.length === 2 ? lineTo : bezTo;
  var f3 = e3.length === 2 ? lineTo : bezTo;
  corners.push([e0[0],e1[0],e2[0],e3[0]]);
  e0 = e0.slice(1);
  e1 = e1.slice(1);
  e2 = e2.slice(1);
  e3 = e3.slice(1);
  drawCell.push(function() {
    moveTo(m0);
    f0(...e0);
    f1(...e1);
    f2(...e2);
    f3(...e3);
  });
}

var allEdges;
var e = edges;
//with (edges) {
  allEdges = [
    e.A0,e.A1,e.A2,e.A3,e.A4,e.A5,e.A6,e.A7,
    e.B0,e.B1,e.B2,e.B3,e.B4,e.B5,e.B6,e.B7,
    e.C0,e.C1,e.C2,e.C3,e.C4,e.C5,e.C6,e.C7,
    e.D0,e.D1,e.D2,e.D3,e.D4,e.D5,e.D6,e.D7,
    e.E0,e.E1,e.E2,e.E3,e.E4,e.E5,e.E6,e.E7,
    e.F0,e.F1,e.F2,e.F3,e.F4,e.F5,e.F6,e.F7,
    e.G0,e.G1,e.G2,e.G3,e.G4,e.G5,e.G6,e.G7,
    e.H0,e.H1,e.H2,e.H3,e.H4,e.H5,e.H6,e.H7,
    e.I0,e.I1,e.I2,e.I3,e.J0,e.J1,e.J2,e.J3,
    e.K0,e.K1,e.K2,e.K3,e.L0,e.L1,e.L2,e.L3,
    e.M0,e.M1,e.M2,e.M3,e.N0,e.N1,e.N2,e.N3,
    e.O0,e.O1,e.O2,e.O3,e.P0,e.P1,e.P2,e.P3,
    e.Q0,e.Q1,e.Q2,e.Q3,e.R0,e.R1,e.R2,e.R3,
    e.S0,e.S1,e.S2,e.S3,e.T0,e.T1,e.T2,e.T3,
    e.U0,e.U1,e.U2,e.U3,e.V0,e.V1,e.V2,e.V3,
    e.W0,e.W1,e.W2,e.W3,e.X0,e.X1,e.X2,e.X3,
    e.Y0,e.Y1,e.Y2,e.Y3,e.Z0,e.Z1,e.Z2,e.Z3,
    e.l0,e.l1,e.l2,e.l3,e.r0,e.r1,e.r2,e.r3,
    e.m0,e.m1,e.m2,e.m3
  ];
  addCell([e.F0,e.S0,e.E0,e.R0],[0,1,1,0]); // 0
  addCell([e.F1,e.T0,e.E1,e.S0],[0,1,1,0]); // 1
  addCell([e.F2,e.U0,e.E2,e.T0],[0,1,1,0]); // 2
  addCell([e.F3,e.V0,e.E3,e.U0],[0,1,1,0]); // 3
  addCell([e.F4,e.W0,e.E4,e.V0],[0,1,1,0]); // 4
  addCell([e.F5,e.X0,e.E5,e.W0],[0,1,1,0]); // 5
  addCell([e.F6,e.Y0,e.E6,e.X0],[0,1,1,0]); // 6
  addCell([e.F7,e.Z0,e.E7,e.Y0],[0,1,1,0]); // 7
  //----------------------------------------//
  addCell([e.G0,e.S1,e.F0,e.R1],[0,1,1,0]); // 8
  addCell([e.G1,e.T1,e.F1,e.S1],[0,1,1,0]); // 9
  addCell([e.G2,e.U1,e.F2,e.T1],[0,1,1,0]); // 10
  addCell([e.G3,e.V1,e.F3,e.U1],[0,1,1,0]); // 11
  addCell([e.G4,e.W1,e.F4,e.V1],[0,1,1,0]); // 12
  addCell([e.G5,e.X1,e.F5,e.W1],[0,1,1,0]); // 13
  addCell([e.G6,e.Y1,e.F6,e.X1],[0,1,1,0]); // 14
  addCell([e.G7,e.Z1,e.F7,e.Y1],[0,1,1,0]); // 15
  //----------------------------------------//
  addCell([e.H0,e.S2,e.G0,e.R2],[0,1,1,0]); // 16
  addCell([e.H1,e.T2,e.G1,e.S2],[0,1,1,0]); // 17
  addCell([e.H2,e.U2,e.G2,e.T2],[0,1,1,0]); // 18
  addCell([e.H3,e.V2,e.G3,e.U2],[0,1,1,0]); // 19
  addCell([e.H4,e.W2,e.G4,e.V2],[0,1,1,0]); // 20
  addCell([e.H5,e.X2,e.G5,e.W2],[0,1,1,0]); // 21
  addCell([e.H6,e.Y2,e.G6,e.X2],[0,1,1,0]); // 22
  addCell([e.H7,e.Z2,e.G7,e.Y2],[0,1,1,0]); // 23
  //----------------------------------------//
  addCell([e.l3,e.S3,e.H0,e.R3],[0,1,1,0]); // 24
  addCell([e.l2,e.T3,e.H1,e.S3],[0,1,1,0]); // 25
  addCell([e.m0,e.U3,e.H2,e.T3],[0,1,1,0]); // 26
  addCell([e.m1,e.V3,e.H3,e.U3],[0,1,1,0]); // 27
  addCell([e.m2,e.W3,e.H4,e.V3],[0,1,1,0]); // 28
  addCell([e.m3,e.X3,e.H5,e.W3],[0,1,1,0]); // 29
  addCell([e.r2,e.Y3,e.H6,e.X3],[1,1,1,0]); // 30
  addCell([e.r3,e.Z3,e.H7,e.Y3],[1,1,1,0]); // 31
  //==============================//
  addCell([e.D0,e.J3,e.l1,e.I3],[0,0,1,1]); // 32
  addCell([e.D1,e.K3,e.l0,e.J3],[0,0,1,1]); // 33
  addCell([e.D2,e.L3,e.m0,e.K3],[0,0,1,1]); // 34
  addCell([e.D3,e.M3,e.m1,e.L3],[0,0,1,1]); // 35
  addCell([e.D4,e.N3,e.m2,e.M3],[0,0,1,1]); // 36
  addCell([e.D5,e.O3,e.m3,e.N3],[0,0,1,1]); // 37
  addCell([e.D6,e.P3,e.r0,e.O3],[0,0,0,1]); // 38
  addCell([e.D7,e.Q3,e.r1,e.P3],[0,0,0,1]); // 39
  //----------------------------------------//
  addCell([e.C0,e.J2,e.D0,e.I2],[0,0,1,1]); // 40
  addCell([e.C1,e.K2,e.D1,e.J2],[0,0,1,1]); // 41
  addCell([e.C2,e.L2,e.D2,e.K2],[0,0,1,1]); // 42
  addCell([e.C3,e.M2,e.D3,e.L2],[0,0,1,1]); // 43
  addCell([e.C4,e.N2,e.D4,e.M2],[0,0,1,1]); // 44
  addCell([e.C5,e.O2,e.D5,e.N2],[0,0,1,1]); // 45
  addCell([e.C6,e.P2,e.D6,e.O2],[0,0,1,1]); // 46
  addCell([e.C7,e.Q2,e.D7,e.P2],[0,0,1,1]); // 47
  //----------------------------------------//
  addCell([e.B0,e.J1,e.C0,e.I1],[0,0,1,1]); // 48
  addCell([e.B1,e.K1,e.C1,e.J1],[0,0,1,1]); // 49
  addCell([e.B2,e.L1,e.C2,e.K1],[0,0,1,1]); // 50
  addCell([e.B3,e.M1,e.C3,e.L1],[0,0,1,1]); // 51
  addCell([e.B4,e.N1,e.C4,e.M1],[0,0,1,1]); // 52
  addCell([e.B5,e.O1,e.C5,e.N1],[0,0,1,1]); // 53
  addCell([e.B6,e.P1,e.C6,e.O1],[0,0,1,1]); // 54
  addCell([e.B7,e.Q1,e.C7,e.P1],[0,0,1,1]); // 55
  //----------------------------------------//
  addCell([e.A0,e.J0,e.B0,e.I0],[0,0,1,1]); // 56
  addCell([e.A1,e.K0,e.B1,e.J0],[0,0,1,1]); // 57
  addCell([e.A2,e.L0,e.B2,e.K0],[0,0,1,1]); // 58
  addCell([e.A3,e.M0,e.B3,e.L0],[0,0,1,1]); // 59
  addCell([e.A4,e.N0,e.B4,e.M0],[0,0,1,1]); // 60
  addCell([e.A5,e.O0,e.B5,e.N0],[0,0,1,1]); // 61
  addCell([e.A6,e.P0,e.B6,e.O0],[0,0,1,1]); // 62
  addCell([e.A7,e.Q0,e.B7,e.P0],[0,0,1,1]); // 63
//}

function drawGridlines(color='black',lineWidth=2) {
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  ctx.beginPath();
  allEdges.forEach(b => b.length === 2 ? line(...b) : bez(...b));
  ctx.stroke();
  ctx.closePath();
}

function drawCells(light='#EED7B0',dark='#B88762') {
  drawCell.forEach((fn,i) => {
    var x = i&7;
    var y = i>>3;
    var p = (x+y)%2;
    ctx.fillStyle = p ? light : dark;
    ctx.beginPath();
    fn();
    ctx.fill();
    ctx.closePath();
  });
}

//// precalulated indexes for different groups of cells

excludedSquares = [];

var rookLines = [
  [0,1,2,3,4,5,6,7],
  [8,9,10,11,12,13,14,15],
  [16,17,18,19,20,21,22,23],
  [24,25,26,27,28,29,30,31],
  [32,33,34,35,36,37,38,39],
  [40,41,42,43,44,45,46,47],
  [48,49,50,51,52,53,54,55],
  [56,57,58,59,60,61,62,63],
  [0,8,16,24],[32,40,48,56],
  [1,9,17,25],[33,41,49,57],
  [2,10,18,26,34,42,50,58],
  [3,11,19,27,35,43,51,59],
  [4,12,20,28,36,44,52,60],
  [5,13,21,29,37,45,53,61],
  [6,14,22,30],[38,46,54,62],
  [7,15,23,31],[39,47,55,63],
];

var bishopLines = [
  //[0],
  [1,8],
  [2,9,16],
  [3,10,17,24],
  [4,11,18,25],//[32],
  [5,12,19,26,33,40],
  [6,13,20,27,34,41,48],
  [7,14,21,28,35,42,49,56],
  [15,22,29,36,43,50,57],
  [23,30,37,44,51,58],
  /*[31],*/[38,45,52,59],
  [39,46,53,60],
  [47,54,61],
  [55,62],
  //[63],
  //[7],
  [6,15],
  [5,14,23],
  [4,13,22,31],
  [3,12,21,30],//[39],
  [2,11,20,29,38,47],
  [1,10,19,28,37,46,55],
  [0,9,18,27,36,45,54,63],
  [8,17,26,35,44,53,62],
  [16,25,34,43,52,61],
  /*[24],*/[33,42,51,60],
  [32,41,50,59],
  [40,49,58],
  [48,57],
  //[56],
];

var knightOffsets = [[17,10],[18,11,16],[19,12,8,17],[20,13,9,18],[21,14,10,19],[22,15,11,20],[23,12,21],[13,22],[25,18,2],[26,19,3,24],[27,20,4,0,16,25],[28,21,5,1,17,26],[29,22,6,2,18,27],[30,23,7,3,19,28],[31,4,20,29],[5,21,30],[/*33,*/26,10,1],[34,27,11,2,0/*,32*/],[35,28,12,3,1,8,24,33],[36,29,13,4,2,9,25,34],[37,30,14,5,3,10,26,35],[38,31,15,6,4,11,27,36],[/*39,*/7,5,12,28,37],[6,13,29/*,38*/],[/*41,*/34,18,9],[42,35,19,10,8/*,40*/],[43,36,20,11,9,16,32,41],[44,37,21,12,10,17,33,42],[45,38,22,13,11,18,34,43],[46,39,23,14,12,19,35,44],[/*47,*/15,13,20,36,45],[14,21,37/*,46*/],[49,42,26/*,17*/],[50,43,27,18,/*16,*/48],[51,44,28,19,17,24,40,49],[52,45,29,20,18,25,41,50],[53,46,30,21,19,26,42,51],[54,47,31,22,20,27,43,52],[55,/*23,*/21,28,44,53],[/*22,*/29,45,54],[57,50,34/*,25*/],[58,51,35,26,/*24,*/56],[59,52,36,27,25,32,48,57],[60,53,37,28,26,33,49,58],[61,54,38,29,27,34,50,59],[62,55,39,30,28,35,51,60],[63,/*31,*/29,36,52,61],[/*30,*/37,53,62],[58,42,33],[59,43,34,32],[60,44,35,33,40,56],[61,45,36,34,41,57],[62,46,37,35,42,58],[63,47,38,36,43,59],[39,37,44,60],[38,45,61],[50,41],[51,42,40],[52,43,41,48],[53,44,42,49],[54,45,43,50],[55,46,44,51],[47,45,52],[46,53]];

var kingOffsets = [[9,1,8],[10,2,0,8,9],[11,3,1,9,10],[12,4,2,10,11],[13,5,3,11,12],[14,6,4,12,13],[15,7,5,13,14],[6,14,15],[17,9,1,0,16],[18,10,2,1,0,8,16,17],[19,11,3,2,1,9,17,18],[20,12,4,3,2,10,18,19],[21,13,5,4,3,11,19,20],[22,14,6,5,4,12,20,21],[23,15,7,6,5,13,21,22],[7,6,14,22,23],[25,17,9,8,24],[26,18,10,9,8,16,24,25],[27,19,11,10,9,17,25,26],[28,20,12,11,10,18,26,27],[29,21,13,12,11,19,27,28],[30,22,14,13,12,20,28,29],[31,23,15,14,13,21,29,30],[15,14,22,30,31],[/*33,*/25,17,16/*,32*/],[34,26,18,17,16,24,/*32,*/33],[35,27,19,18,17,25,33,34],[36,28,20,19,18,26,34,35],[37,29,21,20,19,27,35,36],[38,30,22,21,20,28,36,37],[/*39,*/31,23,22,21,29,37,38],[23,22,30/*,38,39*/],[41,33,/*25,24,*/40],[42,34,26,25,/*24,*/32,40,41],[43,35,27,26,25,33,41,42],[44,36,28,27,26,34,42,43],[45,37,29,28,27,35,43,44],[46,38,30,29,28,36,44,45],[47,39,/*31,*/30,29,37,45,46],[/*31,30,*/38,46,47],[49,41,33,32,48],[50,42,34,33,32,40,48,49],[51,43,35,34,33,41,49,50],[52,44,36,35,34,42,50,51],[53,45,37,36,35,43,51,52],[54,46,38,37,36,44,52,53],[55,47,39,38,37,45,53,54],[39,38,46,54,55],[57,49,41,40,56],[58,50,42,41,40,48,56,57],[59,51,43,42,41,49,57,58],[60,52,44,43,42,50,58,59],[61,53,45,44,43,51,59,60],[62,54,46,45,44,52,60,61],[63,55,47,46,45,53,61,62],[47,46,54,62,63],[57,49,48],[58,50,49,48,56],[59,51,50,49,57],[60,52,51,50,58],[61,53,52,51,59],[62,54,53,52,60],[63,55,54,53,61],[55,54,62]];

var whitePawnLines = [
  [0,8,16,24],[-1,-1,-1,-1,32,40,48,56],
  [1,9,17,25],[-1,-1,-1,-1,33,41,49,57],
  [2,10,18,26,34,42,50,58],
  [3,11,19,27,35,43,51,59],
  [4,12,20,28,36,44,52,60],
  [5,13,21,29,37,45,53,61],
  [6,14,22,30],[-1,-1,-1,-1,38,46,54,62],
  [7,15,23,31],[-1,-1,-1,-1,39,47,55,63],
];

var blackPawnLines = [
  [-1,-1,-1,-1,24,16,8,0],[56,48,40,32],
  [-1,-1,-1,-1,25,17,9,1],[57,49,41,33],
  [58,50,42,34,26,18,10,2],
  [59,51,43,35,27,19,11,3],
  [60,52,44,36,28,20,12,4],
  [61,53,45,37,29,21,13,5],
  [-1,-1,-1,-1,30,22,14,6],[62,54,46,38],
  [-1,-1,-1,-1,31,23,15,7],[63,55,47,39]];

var whitePawnCaptures = [[9],[8,10],[9,11],[10,12],[11,13],[12,14],[13,15],[14],[17],[16,18],[17,19],[18,20],[19,21],[20,22],[21,23],[22],[25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30],[/*33*/],[/*32,*/34],[33,35],[34,36],[35,37],[36,38],[37/*,39*/],[/*38*/],[41],[40,42],[41,43],[42,44],[43,45],[44,46],[45,47],[46],[49],[48,50],[49,51],[50,52],[51,53],[52,54],[53,55],[54],[57],[56,58],[57,59],[58,60],[59,61],[60,62],[61,63],[62],[],[],[],[],[],[],[],[]];

var blackPawnCaptures = [[],[],[],[],[],[],[],[],[1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6],[9],[8,10],[9,11],[10,12],[11,13],[12,14],[13,15],[14],[17],[16,18],[17,19],[18,20],[19,21],[20,22],[21,23],[22],[/*25*/],[/*24,*/26],[25,27],[26,28],[27,29],[28,30],[29/*,31*/],[/*30*/],[33],[32,34],[33,35],[34,36],[35,37],[36,38],[37,39],[38],[41],[40,42],[41,43],[42,44],[43,45],[44,46],[45,47],[46],[49],[48,50],[49,51],[50,52],[51,53],[52,54],[53,55],[54]];






class Piece {
  static all = [];

  static wk = -1;
  static bk = -1;

  static wrs = [-1,-1];
  static brs = [-1,-1];

  constructor(color,type,square) {
    if (Piece.at(square))
      throw `cannot create a piece on an occupied square`;
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
    Piece.wrs.length = 0;
    Piece.brs.length = 0;
    Piece.wrs.push(-1,-1);
    Piece.brs.push(-1,-1);
    Piece.wk = -1;
    Piece.bk = -1;
  }

  static create(color,type,square) {
    switch (type) {
      case 'pawn': return new Pawn(color,square);
      case 'knight': return new Knight(color,square);
      case 'bishop': return new Bishop(color,square);
      case 'rook': return new Rook(color,square);
      case 'queen': return new Queen(color,square);
      case 'king': return new King(color,square);
    }
  }

  static at(square) {
    return Piece.all.find(piece => piece.square === square);
  }

  delete() {
    var all = Piece.all;
    var index = all.indexOf(this);
    if (index > -1) all.splice(index,1);
  }

  getMoves() {
    return [];
  }

}

class Pawn extends Piece {
  constructor(color,square) {
    super(color,'pawn',square);
    if (color === 'white') this.img = images.wp;
    else if (color === 'black') this.img = images.bp;
  }

}

class Knight extends Piece {
  constructor(color,square) {
    super(color,'knight',square);
    if (color === 'white') this.img = images.wn;
    else if (color === 'black') this.img = images.bn;
  }
}

class Bishop extends Piece {
  constructor(color,square) {
    super(color,'bishop',square);
    if (color === 'white') this.img = images.wb;
    else if (color === 'black') this.img = images.bb;
  }
}

class Rook extends Piece {
  constructor(color,square) {
    super(color,'rook',square);
    if (color === 'white') this.img = images.wr;
    else if (color === 'black') this.img = images.br;
  }
}

class Queen extends Piece {
  constructor(color,square) {
    super(color,'queen',square);
    if (color === 'white') this.img = images.wq;
    else if (color === 'black') this.img = images.bq;
  }
}

class King extends Piece {
  constructor(color,square) {
    super(color,'king',square);
    if (color === 'white') this.img = images.wk;
    else if (color === 'black') this.img = images.bk;
  }
}

function newGame() {
  Piece.clear();
  Piece.create('white','rook',0);
  Piece.create('white','knight',1);
  Piece.create('white','bishop',2);
  Piece.create('white','queen',3);
  Piece.create('white','king',4);
  Piece.create('white','bishop',5);
  Piece.create('white','knight',6);
  Piece.create('white','rook',7);
  Piece.create('white','pawn',8);
  Piece.create('white','pawn',9);
  Piece.create('white','pawn',10);
  Piece.create('white','pawn',11);
  Piece.create('white','pawn',12);
  Piece.create('white','pawn',13);
  Piece.create('white','pawn',14);
  Piece.create('white','pawn',15);
  Piece.create('black','pawn',48);
  Piece.create('black','pawn',49);
  Piece.create('black','pawn',50);
  Piece.create('black','pawn',51);
  Piece.create('black','pawn',52);
  Piece.create('black','pawn',53);
  Piece.create('black','pawn',54);
  Piece.create('black','pawn',55);
  Piece.create('black','rook',56);
  Piece.create('black','knight',57);
  Piece.create('black','bishop',58);
  Piece.create('black','queen',59);
  Piece.create('black','king',60);
  Piece.create('black','bishop',61);
  Piece.create('black','knight',62);
  Piece.create('black','rook',63);
}


newGame();

mouse.grabbing = null;



var gameState = {
  turn:          'white',
  epSquare:      -1,
  epPawn:        -1,
  selectedMoves: [],
};

var selectedPiece = null;

var opp  = c => c === 'white' ? 'black' : 'white';
var excl = sq => excludedSquares.includes(sq);


var whitePromoSet = new Set([56,57,58,59,60,61,62,63]);
var blackPromoSet = new Set([0,1,2,3,4,5,6]);

var isCyclic = line => new Set(line).size < line.length;

function slideMoves(sq, color, lines) {
  var out = new Set();
  for (var line of lines) {
    var n = line.length;
    var cyclic = isCyclic(line);

    var occurrences = [];
    for (var k = 0; k < n; k++)
      if (line[k] === sq) occurrences.push(k);
    if (occurrences.length === 0) continue;

    for (var idx of occurrences) {
      for (var dir of [1, -1]) {
        for (var i = 1; i < n; i++) {
          var raw = idx + dir * i;
          if (!cyclic && (raw < 0 || raw >= n)) break;
          var t = line[((raw % n) + n) % n];
          if (excl(t)) break;
          var p = Piece.at(t);
          if (p) { if (p.color !== color) out.add(t); break; }
          out.add(t);
        }
      }
    }
  }
  return [...out];
}

function jumpSqs(sq, color, table) {
  return (table[sq] || []).filter(t =>
    !excl(t) && (!Piece.at(t) || Piece.at(t).color !== color));
}


function isAttacked(sq, byColor) {
  for (var p of Piece.all) {
    if (p.color !== byColor) continue;
    switch (p.type) {
      case 'pawn': {
        var caps = byColor==='white' ? whitePawnCaptures : blackPawnCaptures;
        if ((caps[p.square]||[]).includes(sq)) return true;
        break;
      }
      case 'knight':
        if ((knightOffsets[p.square]||[]).includes(sq)) return true; break;
      case 'king':
        if ((kingOffsets[p.square]||[]).includes(sq)) return true; break;
      case 'bishop':
        if (slideMoves(p.square,byColor,bishopLines).includes(sq)) return true; break;
      case 'rook':
        if (slideMoves(p.square,byColor,rookLines).includes(sq)) return true; break;
      case 'queen':
        if (slideMoves(p.square,byColor,rookLines).includes(sq) ||
            slideMoves(p.square,byColor,bishopLines).includes(sq)) return true; break;
    }
  }
  return false;
}

function inCheck(color) {
  var ks = color==='white' ? Piece.wk : Piece.bk;
  return ks !== -1 && isAttacked(ks, opp(color));
}


function isLegal(mover, to, epRemoveSq) {
  var from  = mover.square;
  var snap  = Piece.all.slice();
  var oldWk = Piece.wk, oldBk = Piece.bk;

  if (epRemoveSq !== undefined && epRemoveSq !== -1) {
    var ep = Piece.at(epRemoveSq);
    if (ep) Piece.all.splice(Piece.all.indexOf(ep), 1);
  }
  var cap = Piece.at(to);
  if (cap) Piece.all.splice(Piece.all.indexOf(cap), 1);

  mover.square = to;
  if (mover.type==='king') { if (mover.color==='white') Piece.wk=to; else Piece.bk=to; }

  var ok = !inCheck(mover.color);


  Piece.all.length = 0; for (var p of snap) Piece.all.push(p);
  mover.square = from; Piece.wk = oldWk; Piece.bk = oldBk;
  return ok;
}


Pawn.prototype.getMoves = function() {
  var moves = [], sq = this.square, color = this.color;
  var lines  = color==='white' ? whitePawnLines    : blackPawnLines;
  var caps   = color==='white' ? whitePawnCaptures : blackPawnCaptures;
  var promos = color==='white' ? whitePromoSet     : blackPromoSet;

var matchingLines = [];
for (var l of lines) { var i = l.indexOf(sq); if (i > 0) matchingLines.push([l, i]); }
if (matchingLines.length === 0) return [];

for (var [line, idx] of matchingLines) {


  if (idx+1 < line.length) {
    var to = line[idx+1];
    if (!excl(to) && !Piece.at(to) && isLegal(this, to)) {
      if (promos.has(to)) {
        for (var pt of ['queen','rook','bishop','knight'])
          moves.push({from:sq, to, type:'promo', promo:pt});
      } else {
        moves.push({from:sq, to, type:'normal'});
        if (idx===1 && idx+2 < line.length) {
          var to2 = line[idx+2];
          if (!excl(to2) && !Piece.at(to2) && isLegal(this, to2))
            moves.push({from:sq, to:to2, type:'double', epSq:line[idx+1]});
        }
      }
    }
  }


  for (var to of (caps[sq]||[])) {
    if (excl(to)) continue;
    var target = Piece.at(to);
    if (target && target.color !== color && isLegal(this, to))
      if (promos.has(to)) {
        for (var pt of ['queen','rook','bishop','knight'])
          moves.push({from:sq, to, type:'promo', promo:pt});
      } else {
        moves.push({from:sq, to, type:'capture'});
      }
    if (to === gameState.epSquare) {
      var epP = Piece.at(gameState.epPawn);
      if (epP && epP.color !== color && isLegal(this, to, gameState.epPawn)) {
        if (promos.has(to)) {
          for (var pt of ['queen','rook','bishop','knight'])
            moves.push({from:sq, to, type:'enpassant_promo', promo:pt, epPawn:gameState.epPawn});
        } else {
          moves.push({from:sq, to, type:'enpassant', epPawn:gameState.epPawn});
        }
      }
    }
  }

}

  return moves;
};


Knight.prototype.getMoves = function() {
  var sq=this.square, c=this.color;
  return jumpSqs(sq, c, knightOffsets)
    .filter(to => isLegal(this, to))
    .map(to => ({from:sq, to, type:'normal'}));
};


Bishop.prototype.getMoves = function() {
  var sq=this.square, c=this.color;
  return slideMoves(sq, c, bishopLines)
    .filter(to => isLegal(this, to))
    .map(to => ({from:sq, to, type:'normal'}));
};


Rook.prototype.getMoves = function() {
  var sq=this.square, c=this.color;
  return slideMoves(sq, c, rookLines)
    .filter(to => isLegal(this, to))
    .map(to => ({from:sq, to, type:'normal'}));
};


Queen.prototype.getMoves = function() {
  var sq=this.square, c=this.color;
  return [...slideMoves(sq,c,rookLines), ...slideMoves(sq,c,bishopLines)]
    .filter(to => isLegal(this, to))
    .map(to => ({from:sq, to, type:'normal'}));
};

var CASTLE_DATA = [
    [4, 7, 6, 5, 'white'],
    [4, 0, 2, 3, 'white'],
    [60, 63, 62, 61, 'black'],
    [60, 56, 58, 59, 'black'],
];

function findLineWith(sq1, sq2) {
  for (var line of rookLines)
    if (line.includes(sq1) && line.includes(sq2)) return line;
  return null;
}

King.prototype.getMoves = function() {
  var sq=this.square, color=this.color;
  var moves = jumpSqs(sq, color, kingOffsets)
    .filter(to => isLegal(this, to))
    .map(to => ({from:sq, to, type:'normal'}));

  if (!this.move0 || inCheck(color)) return moves;

  for (var [ks,rs,kd,rd,c] of CASTLE_DATA) {
    if (c !== color || ks !== sq) continue;
    var rook = Piece.at(rs);
    if (!rook || rook.type!=='rook' || rook.color!==color || !rook.move0) continue;

    var line = findLineWith(sq, rs);
    if (!line) continue;

    var ki=line.indexOf(sq), ri=line.indexOf(rs), kdi=line.indexOf(kd);

    // all squares between king and rook must be empty
    var lo=Math.min(ki,ri), hi=Math.max(ki,ri), clear=true;
    for (var j=lo+1; j<hi; j++) {
      if (Piece.at(line[j]) || excl(line[j])) { clear=false; break; }
    }
    if (!clear) continue;

    // king must not pass through (or land in) check
    var step=kdi>ki?1:-1, safe=true;
    for (var j=ki+step; j!==kdi+step; j+=step) {
      var tsq = line[j];
      this.square = tsq;
      if (color==='white') Piece.wk=tsq; else Piece.bk=tsq;
      var hit = isAttacked(tsq, opp(color));
      this.square = sq;
      if (color==='white') Piece.wk=sq; else Piece.bk=sq;
      if (hit) { safe=false; break; }
    }
    if (!safe) continue;

    moves.push({from:sq, to:kd, type:'castle', rookFrom:rs, rookTo:rd});
  }
  return moves;
};


function makeMove(move) {
  var piece = Piece.at(move.from);
  if (!piece) return;

  gameState.epSquare = -1;
  gameState.epPawn   = -1;

  switch (move.type) {
    case 'castle': {
      var rook = Piece.at(move.rookFrom);
      if (rook) { rook.square = move.rookTo; rook.move0 = false; }
      if (piece.color==='white') Piece.wk=move.to; else Piece.bk=move.to;
      piece.square = move.to; piece.move0 = false;
      break;
    }
    case 'enpassant': {
      var ep = Piece.at(move.epPawn); if (ep) ep.delete();
      piece.square = move.to; piece.move0 = false;
      break;
    }
    case 'promo': {
      var cap = Piece.at(move.to); if (cap) cap.delete();
      var col = piece.color; piece.delete();
      Piece.create(col, move.promo, move.to);
      break;
    }
    case 'enpassant_promo': {
      var ep = Piece.at(move.epPawn); if (ep) ep.delete();
      var col = piece.color; piece.delete();
      Piece.create(col, move.promo, move.to);
      break;
    }
    case 'double': {
      piece.square = move.to; piece.move0 = false;
      gameState.epSquare = move.epSq;
      gameState.epPawn   = move.to;
      break;
    }
    default: {
      var cap = Piece.at(move.to); if (cap) cap.delete();
      if (piece.type==='king') {
        if (piece.color==='white') Piece.wk=move.to; else Piece.bk=move.to;
      }
      piece.square = move.to; piece.move0 = false;
    }
  }

  gameState.turn = opp(gameState.turn);
  gameState.selectedMoves = [];
  selectedPiece = null;
}

mouse.leftFrom = null;
mouse.wasSelected = false;
mouse.selected = null;

mode = 'play';


window.onkeydown = function(event) {
  console.log(event.code);
  if (mode !== 'edit') {
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
    case 'KeyS': return newGame();
    case 'KeyE': return toggleEditMode();
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
  selectedPiece   = null;
  gameState.selectedMoves = [];
  mode = mode === 'edit' ? 'play' : 'edit';
  if (mode === 'edit') {
    mouse.selected = {type: 'move', color: 'white'};
  }
}



function onMouseDown() {
  if (mode === 'edit') {
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
    selectedPiece   = piece;
    if (piece.color === gameState.turn) {
      gameState.selectedMoves = piece.getMoves();
      return
    }
  }
    mouse.selected = null
    selectedPiece   = null;
    gameState.selectedMoves = [];
  
}

function onMouseUp() {
  if (mode === 'edit') {
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
    selectedPiece = null;
    mouse.selected = null;
    gameState.selectedMoves = [];
  }
}

canvas.oncontextmenu = function(event) {
  if (mode === 'edit') {
    event.preventDefault();
    mouse.selected.color = mouse.selected.color === 'white' ? 'black' : 'white';
  }
}


function uimake(targetSq) {
  if (!excl(targetSq) && targetSq !== undefined) {
    var move = gameState.selectedMoves.find(m => m.to === targetSq);
    if (move) {
      // auto-promote 4 now
      if (move.type === 'promo')
        move = gameState.selectedMoves.find(m => m.to===targetSq && m.promo==='queen') || move;
      makeMove(move);
      return true;
    }
  }
}

function hl() {
  for (var move of gameState.selectedMoves) {
    var id = move.to;
    var m = centers[id];
    if (!m) continue;
    var piece = Piece.at(id);
    var scl = scales[id];
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.globalAlpha = .25;
    moveTo(m);
    if (piece) {
      arc(m,.425*scl,0,2*Math.PI);
      arc(m,.325*scl,0,2*Math.PI,true);
      lineTo(m);
    } else {
      arc(m,.15*scl,0,2*Math.PI);
    }
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.closePath();
  }
}

function onMouseMove() {}

function draw() {
  ctx.clearRect(0,0,s,s);
  drawCells('#EED7B0','#B88762');
  drawGridlines('black',2);

  if (mode !== 'edit') hl();

  Piece.all.forEach(piece => {
  if (mouse.grabbing === piece) return;
    drawImage(piece.img,piece.square);
  });

  if (mode === 'edit') {
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
        drawImageAt(img,mouse);
    }

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
    drawImageAt(piece.img,mouse);
  }
}

function loop() {
  requestAnimationFrame(loop);
  draw();
}

loop();
