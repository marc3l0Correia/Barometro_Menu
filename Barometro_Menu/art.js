/* ART.JS  -  desenhos de substituição usados enquanto um artigo não tem fotografia.
   Não é preciso mexer neste ficheiro. */

/* ---------- illustrations (stand-ins until real photos are added) ---------- */
var SH = '<ellipse cx="100" cy="126" rx="60" ry="7" fill="#13272B" opacity=".12"/>';
var LN = '#CFD6D1';
var A = {};

A.cup = function (liq, o) {
  o = o || {};
  var s = o.s || 1;
  return SH + '<g transform="translate(100 120) scale(' + s + ') translate(-100 -120)">' +
    '<ellipse cx="100" cy="116" rx="58" ry="9" fill="#F6F4EF" stroke="' + LN + '"/>' +
    '<path d="M139 70c20-3 20 26-3 28" fill="none" stroke="' + LN + '" stroke-width="8" stroke-linecap="round"/>' +
    '<path d="M139 70c20-3 20 26-3 28" fill="none" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>' +
    '<path d="M62 62H138V84C138 104 120 112 100 112C80 112 62 104 62 84Z" fill="#FFFFFF" stroke="' + LN + '"/>' +
    '<ellipse cx="100" cy="62" rx="38" ry="7" fill="#FFFFFF" stroke="' + LN + '"/>' +
    '<ellipse cx="100" cy="62.5" rx="33" ry="5" fill="' + liq + '"/>' +
    (o.milk ? '<ellipse cx="100" cy="62.5" rx="14" ry="2.4" fill="#F1DEC4"/>' : '') +
    (o.lemon ? '<circle cx="112" cy="61" r="6" fill="#F4DE55" stroke="#D9BE2E"/><path d="M112 55v12M106 61h12" stroke="#D9BE2E"/>' : '') +
    '<path d="M88 50c-5-7 5-10 0-18M104 50c-5-7 5-10 0-18" fill="none" stroke="#8FA09B" stroke-width="2.5" stroke-linecap="round" opacity=".55"/>' +
    '</g>';
};

A.croissant = function (extra) {
  return SH +
    '<path d="M38 104C40 62 76 42 100 42C124 42 160 62 162 104C152 94 142 94 134 104C126 90 114 86 100 86C86 86 74 90 66 104C58 94 48 94 38 104Z" fill="#DE9A3E"/>' +
    '<path d="M100 42C94 56 94 74 100 86M78 50C74 64 76 78 82 88M122 50C126 64 124 78 118 88M58 66C58 80 62 92 66 100M142 66C142 80 138 92 134 100" fill="none" stroke="#B9731F" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M80 52C90 46 110 46 120 52" stroke="#F2BE6A" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>' +
    (extra || '');
};
A.croissantButter = function () { return A.croissant('<rect x="128" y="108" width="28" height="12" rx="3" fill="#F6E27A" stroke="#D9BE2E"/>'); };
A.croissantFill = function (cheese, ham) {
  var e = '';
  if (cheese) e += '<path d="M60 108h50l-6 12H54z" fill="#F4CE55" stroke="#D9AE2E"/>';
  if (ham) e += '<path d="M72 114c10 4 20-4 30 0" stroke="#E99AA0" stroke-width="6" fill="none" stroke-linecap="round"/>';
  return A.croissant(e);
};

A.tarts = function () {
  var one = function (cx) {
    return '<path d="M' + (cx - 24) + ' 92L' + (cx + 24) + ' 92L' + (cx + 18) + ' 118L' + (cx - 18) + ' 118Z" fill="#E4B877"/>' +
      '<ellipse cx="' + cx + '" cy="92" rx="24" ry="7" fill="#F3D27A"/>' +
      '<circle cx="' + (cx - 8) + '" cy="91" r="2.4" fill="#9A4F1E"/><circle cx="' + (cx + 7) + '" cy="93" r="2.8" fill="#9A4F1E"/><circle cx="' + (cx + 1) + '" cy="90" r="1.8" fill="#9A4F1E"/>';
  };
  return SH + '<ellipse cx="100" cy="118" rx="72" ry="10" fill="#FFFFFF" stroke="' + LN + '"/>' + one(66) + one(134) + one(100);
};

A.slice = function (inner, crust) {
  return '<path d="M62 62C60 42 140 42 138 62C150 64 150 84 138 86V112H62V86C50 84 50 64 62 62Z" fill="' + crust + '"/>' +
    '<path d="M68 64C68 52 132 52 132 64C142 66 142 82 132 84V106H68V84C58 82 58 66 68 64Z" fill="' + inner + '"/>';
};
A.bread = function (v) {
  if (v === 'butter') {
    return SH + A.slice('#F1DDB0', '#C98A45') + '<rect x="80" y="74" width="40" height="14" rx="3" fill="#F6E27A" stroke="#D9BE2E"/>';
  }
  if (v === 'bijou') {
    return SH + '<ellipse cx="100" cy="88" rx="56" ry="26" fill="#C98A45"/><ellipse cx="100" cy="84" rx="48" ry="20" fill="#D9A760"/>' +
      '<path d="M70 82C88 72 112 72 130 82" stroke="#B9731F" stroke-width="3" fill="none" stroke-linecap="round"/>';
  }
  if (v === 'forma') {
    return SH + A.slice('#D9A95F', '#B9731F') + '<path d="M78 70v30M92 70v30M108 70v30M122 70v30" stroke="#9A5A1C" stroke-width="3" opacity=".6"/>';
  }
  return SH + '<path d="M62 62C60 44 100 44 100 48V112H62V86C50 84 50 64 62 62Z" fill="#B9731F"/>' +
    '<path d="M68 64C68 54 100 54 100 56V106H68V84C58 82 58 66 68 64Z" fill="#D9A95F"/><path d="M78 70v30M90 70v30" stroke="#9A5A1C" stroke-width="3" opacity=".6"/>';
};

A.sandwich = function (fill) {
  var out = SH + '<rect x="50" y="108" width="100" height="14" rx="6" fill="#D9A25B"/>';
  var yy = 108;
  fill.forEach(function (c) {
    yy -= 8;
    out += '<rect x="46" y="' + yy + '" width="108" height="10" rx="5" fill="' + c + '"/>';
  });
  out += '<path d="M50 ' + yy + 'C50 ' + (yy - 34) + ' 150 ' + (yy - 34) + ' 150 ' + yy + 'Z" fill="#E3B26A"/>' +
    '<path d="M70 ' + (yy - 10) + 'C90 ' + (yy - 18) + ' 110 ' + (yy - 18) + ' 130 ' + (yy - 10) + '" stroke="#F4D49A" stroke-width="4" fill="none" stroke-linecap="round"/>';
  return out;
};

var rissolShape = function (c, d) { return '<path d="M52 108C52 58 148 58 148 108Z" fill="' + c + '"/><path d="M62 104C64 76 136 76 138 104" fill="none" stroke="' + d + '" stroke-width="4" stroke-linecap="round" opacity=".8"/><circle cx="84" cy="98" r="2.2" fill="' + d + '"/><circle cx="106" cy="92" r="2.2" fill="' + d + '"/><circle cx="124" cy="100" r="2.2" fill="' + d + '"/>'; };
var ballShape = function () { return '<circle cx="100" cy="82" r="34" fill="#D28A33"/><circle cx="82" cy="70" r="7" fill="#E5A850"/><circle cx="112" cy="66" r="6" fill="#E5A850"/><circle cx="120" cy="90" r="7" fill="#C27A28"/><circle cx="88" cy="96" r="6" fill="#E5A850"/>'; };
var coxShape = function () { return '<path d="M100 34C128 66 150 92 100 116C50 92 72 66 100 34Z" fill="#D8963A"/><path d="M92 54C80 70 76 84 84 98" fill="none" stroke="#F0BF6B" stroke-width="4" stroke-linecap="round" opacity=".8"/><circle cx="108" cy="92" r="2.4" fill="#B9731F"/><circle cx="116" cy="78" r="2.4" fill="#B9731F"/>'; };
A.rissol = function (dark) { return SH + rissolShape(dark ? '#BF7A2C' : '#DA9A3A', '#F0BF6B'); };
A.ball = function () { return SH + ballShape(); };
A.cox = function () { return SH + coxShape(); };
A.pata = function () {
  return SH + '<ellipse cx="86" cy="94" rx="40" ry="14" fill="#D8963A" transform="rotate(-8 86 94)"/><ellipse cx="116" cy="78" rx="38" ry="13" fill="#E1A549" transform="rotate(10 116 78)"/>' +
    '<circle cx="76" cy="92" r="3" fill="#7FAE4D"/><circle cx="124" cy="78" r="3" fill="#7FAE4D"/><circle cx="100" cy="86" r="2.5" fill="#B9731F"/>';
};
A.snacks = function () {
  return SH + '<ellipse cx="100" cy="116" rx="72" ry="11" fill="#FFFFFF" stroke="' + LN + '"/>' +
    '<g transform="translate(14 54) scale(.46)">' + rissolShape('#DA9A3A', '#F0BF6B') + '</g>' +
    '<g transform="translate(55 52) scale(.46)">' + ballShape() + '</g>' +
    '<g transform="translate(96 54) scale(.46)">' + coxShape() + '</g>';
};

var slicesAt = function (cx, cy) { return '<circle cx="' + cx + '" cy="' + cy + '" r="12" fill="#A63D2F"/><circle cx="' + (cx - 4) + '" cy="' + (cy - 3) + '" r="1.8" fill="#F3D9D0"/><circle cx="' + (cx + 4) + '" cy="' + (cy + 2) + '" r="1.8" fill="#F3D9D0"/><circle cx="' + (cx - 1) + '" cy="' + (cy + 5) + '" r="1.5" fill="#F3D9D0"/>'; };
var wedgeAt = function (cx, cy) { return '<path d="M' + (cx - 13) + ' ' + (cy + 9) + 'L' + (cx + 13) + ' ' + (cy + 9) + 'L' + cx + ' ' + (cy - 11) + 'Z" fill="#F4CE55" stroke="#D9AE2E"/><circle cx="' + (cx - 2) + '" cy="' + (cy + 2) + '" r="2.4" fill="#D9AE2E"/><circle cx="' + (cx + 5) + '" cy="' + (cy + 5) + '" r="1.8" fill="#D9AE2E"/>'; };
A.board = function (kind) {
  var out = SH + '<rect x="30" y="38" width="140" height="84" rx="14" fill="#B98249" stroke="#9A6A38"/><circle cx="46" cy="52" r="4" fill="#8F5F31"/>';
  var xs = [58, 86, 114, 142], ys = [68, 100];
  ys.forEach(function (y, r) {
    xs.forEach(function (x, c) {
      var cheese = kind === 'queijos' || (kind === 'mista' && c >= 2);
      out += cheese ? wedgeAt(x, y) : slicesAt(x, y);
    });
  });
  return out;
};

A.shrimp = function () {
  var s = function (tx, ty, rot) {
    return '<g transform="translate(' + tx + ' ' + ty + ') rotate(' + rot + ')"><path d="M-26 6C-30-18 6-24 14-4C20 12 4 22-6 12" fill="none" stroke="#EE7F55" stroke-width="13" stroke-linecap="round"/><path d="M-6 12L-14 24L2 20Z" fill="#E56A3E"/><circle cx="-22" cy="-6" r="2" fill="#13272B"/></g>';
  };
  return SH + '<ellipse cx="100" cy="106" rx="76" ry="16" fill="#FFFFFF" stroke="' + LN + '"/>' + s(66, 96, -8) + s(112, 92, 10) + s(138, 104, 30) + '<circle cx="152" cy="92" r="9" fill="#F4DE55" stroke="#D9BE2E"/>';
};

var bowl = function (liq, bits) {
  return SH + '<path d="M46 74H154C154 106 130 122 100 122C70 122 46 106 46 74Z" fill="#FFFFFF" stroke="' + LN + '"/>' +
    '<ellipse cx="100" cy="74" rx="54" ry="10" fill="#FFFFFF" stroke="' + LN + '"/>' +
    '<ellipse cx="100" cy="75" rx="47" ry="7.5" fill="' + liq + '"/>' + bits;
};
A.soup = function () { return bowl('#8DB85A', '<circle cx="84" cy="75" r="3.4" fill="#A63D2F"/><circle cx="108" cy="73" r="3.4" fill="#A63D2F"/><path d="M118 77c6-3 10 0 14-2M72 77c6-3 10 0 14-2" stroke="#5E8C34" stroke-width="2" fill="none"/>') + '<path d="M88 58c-5-7 5-10 0-18M108 58c-5-7 5-10 0-18" fill="none" stroke="#8FA09B" stroke-width="2.5" stroke-linecap="round" opacity=".55"/>'; };
A.moelas = function () { return bowl('#B8742F', '<circle cx="82" cy="75" r="4" fill="#6B3A1F"/><circle cx="100" cy="73" r="4.4" fill="#6B3A1F"/><circle cx="118" cy="76" r="4" fill="#6B3A1F"/><circle cx="92" cy="78" r="3" fill="#7FAE4D"/>') + '<path d="M88 58c-5-7 5-10 0-18M108 58c-5-7 5-10 0-18" fill="none" stroke="#8FA09B" stroke-width="2.5" stroke-linecap="round" opacity=".55"/>'; };
A.rojoes = function () {
  var cube = function (x, y, r) { return '<rect x="' + x + '" y="' + y + '" width="22" height="18" rx="5" fill="#8A4B2A" transform="rotate(' + r + ' ' + (x + 11) + ' ' + (y + 9) + ')"/><rect x="' + (x + 4) + '" y="' + (y + 3) + '" width="10" height="5" rx="2.5" fill="#B0683B" transform="rotate(' + r + ' ' + (x + 11) + ' ' + (y + 9) + ')"/>'; };
  return SH + '<ellipse cx="100" cy="100" rx="74" ry="18" fill="#FFFFFF" stroke="' + LN + '"/>' + cube(52, 80, -10) + cube(80, 74, 8) + cube(66, 94, 4) +
    '<rect x="112" y="76" width="34" height="7" rx="3" fill="#E9C25A" transform="rotate(-12 112 76)"/><rect x="116" y="88" width="34" height="7" rx="3" fill="#E9C25A" transform="rotate(8 116 88)"/><rect x="104" y="98" width="30" height="7" rx="3" fill="#EBCB6E"/>';
};
A.bifana = function () {
  return SH + '<ellipse cx="100" cy="104" rx="56" ry="16" fill="#D6A058"/><path d="M42 92C42 60 158 60 158 92C158 98 150 100 140 98H60C50 100 42 98 42 92Z" fill="#E3B26A"/>' +
    '<path d="M40 94c10-8 22 2 34-4s22 6 34 0 22 6 32 0 14 0 20 4" fill="none" stroke="#9A5A33" stroke-width="9" stroke-linecap="round"/><path d="M78 72C96 64 118 66 130 74" stroke="#F4D49A" stroke-width="4" fill="none" stroke-linecap="round"/>';
};

var beerGlass = function (col, foam, s) {
  s = s || 1;
  return '<g transform="translate(100 124) scale(' + s + ') translate(-100 -124)">' +
    '<path d="M70 40H130L124 114C124 120 120 124 116 124H84C80 124 76 120 76 114Z" fill="' + col + '" stroke="' + LN + '"/>' +
    '<path d="M68 38C66 26 84 24 90 31C96 22 114 22 118 31C128 26 136 34 132 40Z" fill="' + foam + '"/>' +
    '<path d="M84 56L88 108" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity=".45"/>' +
    '<circle cx="104" cy="90" r="1.8" fill="#FFFFFF" opacity=".6"/><circle cx="112" cy="74" r="1.6" fill="#FFFFFF" opacity=".6"/></g>';
};
A.beer = function (col, s) { return SH + beerGlass(col, '#FFFFFF', s); };

A.can = function (col) {
  return SH + '<rect x="74" y="32" width="52" height="90" rx="11" fill="' + col + '"/><ellipse cx="100" cy="34" rx="26" ry="5" fill="#DDE3E0"/>' +
    '<rect x="74" y="64" width="52" height="26" fill="#FFFFFF" opacity=".88"/><path d="M74 84Q87 74 100 84T126 84" fill="none" stroke="' + col + '" stroke-width="4"/>' +
    '<path d="M84 44V112" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity=".3"/>';
};
A.water = function (o) {
  o = o || {};
  var out = SH + '<rect x="90" y="18" width="20" height="9" rx="3" fill="#2F7FB5"/><rect x="92" y="27" width="16" height="18" fill="#CDE8F3" stroke="#9FC6D6"/>' +
    '<path d="M92 45C92 53 72 57 72 71V112C72 118 76 124 82 124H118C124 124 128 118 128 112V71C128 57 108 53 108 45Z" fill="#CDE8F3" stroke="#9FC6D6"/>' +
    '<rect x="72" y="78" width="56" height="24" fill="#FFFFFF" opacity=".85"/>';
  if (o.gas) out += '<circle cx="86" cy="62" r="2.2" fill="#FFFFFF"/><circle cx="104" cy="58" r="1.8" fill="#FFFFFF"/><circle cx="96" cy="70" r="2" fill="#FFFFFF"/><circle cx="112" cy="68" r="2.2" fill="#FFFFFF"/>';
  if (o.lemon) out += '<circle cx="100" cy="90" r="9" fill="#F4DE55" stroke="#D9BE2E"/><path d="M100 82v16M92 90h16" stroke="#D9BE2E"/>';
  else out += '<path d="M82 90h36" stroke="#2F7FB5" stroke-width="4" stroke-linecap="round"/>';
  return out;
};

var stemGlass = function (liq, s, dx) {
  return '<g transform="translate(' + dx + ' 0) translate(100 124) scale(' + s + ') translate(-100 -124)">' +
    '<path d="M78 40H122C122 66 112 78 100 80C88 78 78 66 78 40Z" fill="' + liq + '" stroke="' + LN + '"/>' +
    '<rect x="98" y="80" width="4" height="34" fill="#E7ECE9" stroke="' + LN + '"/><ellipse cx="100" cy="116" rx="22" ry="5" fill="#E7ECE9" stroke="' + LN + '"/></g>';
};
A.favaios = function () { return SH + stemGlass('#E0A93B', 1, 0); };
A.favaiosBeer = function () { return SH + stemGlass('#E0A93B', 0.82, -34) + beerGlass('#F2B632', '#FFFFFF', 0.78).replace('translate(100 124)', 'translate(142 124)'); };
A.martini = function (beer) {
  var g = '<g><path d="M60 42H140L100 88Z" fill="#E4EEE6" stroke="' + LN + '"/><path d="M68 46H132L100 82Z" fill="#D6E8C6" opacity=".9"/>' +
    '<rect x="98" y="88" width="4" height="26" fill="#E7ECE9" stroke="' + LN + '"/><ellipse cx="100" cy="116" rx="22" ry="5" fill="#E7ECE9" stroke="' + LN + '"/>' +
    '<path d="M92 36L112 60" stroke="#8F5F31" stroke-width="2.5" stroke-linecap="round"/><circle cx="106" cy="56" r="5" fill="#7A8F2E"/><circle cx="106" cy="56" r="1.8" fill="#C24F3F"/></g>';
  return beer ? SH + '<g transform="translate(-36 0) translate(100 124) scale(.82) translate(-100 -124)">' + g + '</g>' + beerGlass('#F2B632', '#FFFFFF', 0.78).replace('translate(100 124)', 'translate(142 124)') : SH + g;
};

var ice = function (x, y, r) { return '<rect x="' + x + '" y="' + y + '" width="17" height="17" rx="3" fill="#FFFFFF" opacity=".7" stroke="#CFE3EA" transform="rotate(' + r + ' ' + (x + 8) + ' ' + (y + 8) + ')"/>'; };
A.whisky = function (col) {
  return SH + '<path d="M64 50H136L130 112C130 118 126 122 120 122H80C74 122 70 118 70 112Z" fill="#FFFFFF" fill-opacity=".5" stroke="' + LN + '"/>' +
    '<path d="M67 70H133L130 112C130 118 126 122 120 122H80C74 122 70 118 70 112Z" fill="' + col + '"/>' + ice(80, 76, -12) + ice(104, 82, 14) + ice(92, 98, 4) +
    '<path d="M76 58L78 100" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity=".45"/>';
};
A.shot = function (col) {
  return SH + '<path d="M78 60H122L117 114C117 119 114 122 110 122H90C86 122 83 119 83 114Z" fill="#FFFFFF" fill-opacity=".5" stroke="' + LN + '"/>' +
    '<path d="M80 80H120L117 114C117 119 114 122 110 122H90C86 122 83 119 83 114Z" fill="' + col + '"/><path d="M87 66L89 106" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity=".45"/>';
};

A.hotdog = function () {
  var zig = 'M50 80l8-7 8 12 8-12 8 12 8-12 8 12 8-12 8 12 8-12 8 12 8-12 8 12 4-6';
  return SH + '<rect x="42" y="80" width="116" height="34" rx="17" fill="#D9A25B"/>' +
    '<rect x="34" y="68" width="132" height="22" rx="11" fill="#B5432E"/><path d="M44 74H150" stroke="#D96A52" stroke-width="3" stroke-linecap="round" opacity=".6"/>' +
    '<path d="' + zig + '" fill="none" stroke="#F2C230" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<rect x="42" y="88" width="116" height="26" rx="13" fill="#E3B26A"/><path d="M60 96H140" stroke="#F4D49A" stroke-width="4" stroke-linecap="round" opacity=".8"/>';
};
A.burger = function () {
  var seeds = '';
  [[80, 56, -20], [100, 50, 0], [120, 56, 20], [90, 66, 10], [112, 66, -10]].forEach(function (p) {
    seeds += '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="3.4" ry="1.7" fill="#F7E6BF" transform="rotate(' + p[2] + ' ' + p[0] + ' ' + p[1] + ')"/>';
  });
  return SH + '<rect x="48" y="106" width="104" height="16" rx="8" fill="#D99B4B"/>' +
    '<rect x="44" y="94" width="112" height="14" rx="7" fill="#6B3A1F"/>' +
    '<rect x="42" y="88" width="116" height="7" rx="2" fill="#F4CE55"/>' +
    '<rect x="46" y="81" width="108" height="8" rx="4" fill="#D9483B"/>' +
    '<path d="M44 80q6-7 12 0t12 0 12 0 12 0 12 0 12 0 12 0 12 0" fill="none" stroke="#7FAE4D" stroke-width="7" stroke-linecap="round"/>' +
    '<path d="M48 76C48 38 152 38 152 76Z" fill="#E3A650"/>' + seeds;
};

