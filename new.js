(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"new_atlas_", frames: [[3364,424,212,70],[3065,942,193,193],[0,2826,1680,80],[1682,942,1381,940],[0,942,1680,940],[1682,0,1680,940],[0,0,1680,940],[0,2908,749,117],[0,1884,1633,940],[1635,1884,471,99],[3364,0,383,422]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.btn = function() {
	this.spriteSheet = ss["new_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.circle_a = function() {
	this.spriteSheet = ss["new_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.header = function() {
	this.spriteSheet = ss["new_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.line = function() {
	this.spriteSheet = ss["new_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NORMAN_loading_A = function() {
	this.spriteSheet = ss["new_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NORMAN_loading_底 = function() {
	this.spriteSheet = ss["new_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NORMAN_loading_底_C = function() {
	this.spriteSheet = ss["new_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.word = function() {
	this.spriteSheet = ss["new_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.光暈 = function() {
	this.spriteSheet = ss["new_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.文 = function() {
	this.spriteSheet = ss["new_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.柔紗簾 = function() {
	this.spriteSheet = ss["new_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.頭 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.header();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.頭, new cjs.Rectangle(0,0,1680,80), null);


(lib.補間動畫9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.NORMAN_loading_底_C();
	this.instance.parent = this;
	this.instance.setTransform(-840,-470);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-840,-470,1680,940);


(lib.補間動畫5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.word();
	this.instance.parent = this;
	this.instance.setTransform(-374.5,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.5,-58.5,749,117);


(lib.補間動畫4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.word();
	this.instance.parent = this;
	this.instance.setTransform(-374.5,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.5,-58.5,749,117);


(lib.窗連 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.柔紗簾();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.窗連, new cjs.Rectangle(0,0,383,422), null);


(lib.光暈_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.光暈();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.665,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.光暈_1, new cjs.Rectangle(0,0,2719.5,1504.5), null);


(lib.KV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.NORMAN_loading_A();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.KV, new cjs.Rectangle(0,0,1680,940), null);


(lib._12_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.btn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._12_btn, new cjs.Rectangle(0,0,212,70), null);


(lib._9_線 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.line();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._9_線, new cjs.Rectangle(0,0,1381,940), null);


(lib._4_點 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.circle_a();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._4_點, new cjs.Rectangle(0,0,193,193), null);


(lib._3_字 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.文();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._3_字, new cjs.Rectangle(0,0,471,99), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// viewfinder
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.KV_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.補間動畫9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(840,470);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.KV_3, new cjs.Rectangle(0,0,1680,940), null);


// stage content:
(lib._new = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(840,470);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({_off:true},1).wait(271));

	// _1_光暈
	this.instance = new lib.光暈_1();
	this.instance.parent = this;
	this.instance.setTransform(-1375.8,470,1,1,0,0,0,1359.8,752.2);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,4);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(30, 30, 3)];
	this.instance.cache(-2,-2,2724,1509);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({_off:false},0).to({x:2892.6,alpha:0.039},19).to({x:3039.8,alpha:0},1).to({_off:true},130).wait(49));

	// _0遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_40 = new cjs.Graphics().p("EAxiAL4IhzAAIAAAAMhsQAADIAAAAIAA3uMBsQgADIAAAAIDnAAIAAAAIJMgEIAAXuIllAAIAAAHg");
	var mask_graphics_41 = new cjs.Graphics().p("EA1VAL4Ih8AAIAAAAMh0iAADIAAAAIAA3uMB0igADIAAAAID4AAIAAAAIJ5gEIAAXuImAAAIAAAHg");
	var mask_graphics_42 = new cjs.Graphics().p("EA5IAL4IiGAAIAAAAMh80AADIAAAAIAA3uMB80gADIAAAAIELAAIAAAAIKmgEIAAXuImcAAIAAAHg");
	var mask_graphics_43 = new cjs.Graphics().p("EA86AL4IiOAAIAAAAMiFGAADIAAAAIAA3uMCFGgADIAAAAIEcAAIAAAAILTgEIAAXuIm3AAIAAAHg");
	var mask_graphics_44 = new cjs.Graphics().p("EBAtAL4IiXAAIAAAAMiNZAADIAAAAIAA3uMCNZgADIAAAAIEuAAIAAAAIMAgEIAAXuInTAAIAAAHg");
	var mask_graphics_45 = new cjs.Graphics().p("EBEgAL4IigAAIAAAAMiVrAADIAAAAIAA3uMCVrgADIAAAAIE/AAIAAAAIMtgEIAAXuIntAAIAAAHg");
	var mask_graphics_46 = new cjs.Graphics().p("EBISAL4IioAAIAAAAMid+AADIAAAAIAA3uMCd+gADIAAAAIFRAAIAAAAINagEIAAXuIoJAAIAAAHg");
	var mask_graphics_47 = new cjs.Graphics().p("EBMFAL4IiyAAIAAAAMimPAADIAAAAIAA3uMCmPgADIAAAAIFjAAIAAAAIOHgEIAAXuIokAAIAAAHg");
	var mask_graphics_48 = new cjs.Graphics().p("EBP3AL4Ii6AAIAAAAMiuiAADIAAAAIAA3uMCuigADIAAAAIF1AAIAAAAIO0gEIAAXuIpAAAIAAAHg");
	var mask_graphics_49 = new cjs.Graphics().p("EBTqAL4IjDAAIAAAAMi20AADIAAAAIAA3uMC20gADIAAAAIGGAAIAAAAIPhgEIAAXuIpbAAIAAAHg");
	var mask_graphics_50 = new cjs.Graphics().p("EBXdAL4IjMAAIAAAAMi/HAADIAAAAIAA3uMC/HgADIAAAAIGYAAIAAAAIQOgEIAAXuIp2AAIAAAHg");
	var mask_graphics_51 = new cjs.Graphics().p("EBbPAL4IjUAAIAAAAMjHZAADIAAAAIAA3uMDHZgADIAAAAIGpAAIAAAAIQ7gEIAAXuIqRAAIAAAHg");
	var mask_graphics_52 = new cjs.Graphics().p("EBfCAL4IjdAAIAAAAMjPsAADIAAAAIAA3uMDPsgADIAAAAIG7AAIAAAAIRogEIAAXuIqtAAIAAAHg");
	var mask_graphics_53 = new cjs.Graphics().p("EBi1AL4IjnAAIAAAAMjX9AADIAAAAIAA3uMDX9gADIAAAAIHNAAIAAAAISVgEIAAXuIrIAAIAAAHg");
	var mask_graphics_54 = new cjs.Graphics().p("EBmnAL4IjvAAIAAAAMjgQAADIAAAAIAA3uMDgQgADIAAAAIHfAAIAAAAITCgEIAAXuIrkAAIAAAHg");
	var mask_graphics_55 = new cjs.Graphics().p("EBqaAL4Ij4AAIAAAAMjoiAADIAAAAIAA3uMDoigADIAAAAIHwAAIAAAAITvgEIAAXuIr/AAIAAAHg");
	var mask_graphics_56 = new cjs.Graphics().p("EBuNAL4IkBAAIAAAAMjw1AADIAAAAIAA3uMDw1gADIAAAAIICAAIAAAAIUcgEIAAXuIsaAAIAAAHg");
	var mask_graphics_57 = new cjs.Graphics().p("EBx/AL4IkJAAIAAAAMj5HAADIAAAAIAA3uMD5HgADIAAAAIITAAIAAAAIVJgEIAAXuIs1AAIAAAHg");
	var mask_graphics_58 = new cjs.Graphics().p("EB1yAL4IkTAAIAAAAMkBZAADIAAAAIAA3uMEBZgADIAAAAIImAAIAAAAIV2gEIAAXuItRAAIAAAHg");
	var mask_graphics_59 = new cjs.Graphics().p("EB5lAL4IkcAAIAAAAMkJrAADIAAAAIAA3uMEJrgADIAAAAII3AAIAAAAIWjgEIAAXuItsAAIAAAHg");
	var mask_graphics_60 = new cjs.Graphics().p("EB9XAL4IkkAAIAAAAMkR+AADIAAAAIAA3uMER+gADIAAAAIJJAAIAAAAIXQgEIAAXuIuIAAIAAAHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_graphics_40,x:49.8,y:470}).wait(1).to({graphics:mask_graphics_41,x:121,y:470}).wait(1).to({graphics:mask_graphics_42,x:192.3,y:470.1}).wait(1).to({graphics:mask_graphics_43,x:263.5,y:470.1}).wait(1).to({graphics:mask_graphics_44,x:334.7,y:470.1}).wait(1).to({graphics:mask_graphics_45,x:405.9,y:470.1}).wait(1).to({graphics:mask_graphics_46,x:477.2,y:470.1}).wait(1).to({graphics:mask_graphics_47,x:548.4,y:470.1}).wait(1).to({graphics:mask_graphics_48,x:619.6,y:470.2}).wait(1).to({graphics:mask_graphics_49,x:690.8,y:470.2}).wait(1).to({graphics:mask_graphics_50,x:762.1,y:470.2}).wait(1).to({graphics:mask_graphics_51,x:833.3,y:470.2}).wait(1).to({graphics:mask_graphics_52,x:904.5,y:470.2}).wait(1).to({graphics:mask_graphics_53,x:975.7,y:470.3}).wait(1).to({graphics:mask_graphics_54,x:1046.9,y:470.3}).wait(1).to({graphics:mask_graphics_55,x:1118.2,y:470.3}).wait(1).to({graphics:mask_graphics_56,x:1189.4,y:470.3}).wait(1).to({graphics:mask_graphics_57,x:1260.6,y:470.3}).wait(1).to({graphics:mask_graphics_58,x:1331.8,y:470.3}).wait(1).to({graphics:mask_graphics_59,x:1403.1,y:470.4}).wait(1).to({graphics:mask_graphics_60,x:1474.4,y:470.4}).wait(212));

	// _0_word_1
	this.instance_1 = new lib.補間動畫4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(774,469.2,0.918,0.918,0,0,0,0,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(840.1,470.1,1.055,1.054,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},40).to({state:[{t:this.instance_1}]},16).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},6).to({state:[]},114).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({regY:0,scaleX:0.92,scaleY:0.92,x:840,y:470,alpha:1},16).to({alpha:0.488},15).to({alpha:0.23},4).to({_off:true,regX:0.1,regY:0.1,scaleX:1.06,scaleY:1.05,x:840.1,y:470.1,alpha:0},6).wait(191));

	// __線
	this.instance_3 = new lib._9_線();
	this.instance_3.parent = this;
	this.instance_3.setTransform(840.9,470,1,0.021,0,0,0,690.5,469.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({_off:false},0).to({regY:470,scaleY:0.2},3).to({scaleY:1},2).to({x:840.8},25).to({x:840.6,alpha:0},15).to({_off:true},1).wait(195));

	// __點
	this.instance_4 = new lib._4_點();
	this.instance_4.parent = this;
	this.instance_4.setTransform(840.1,470.2,0.024,0.024,0,0,0,106.8,102.7);
	this.instance_4._off = true;
	this.instance_4.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_4.cache(-2,-2,197,197);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({x:1529.8},5).to({regX:105.7,regY:105.7,scaleX:0.01,scaleY:0.01,x:1529.7,alpha:0},17).to({_off:true},155).wait(77));

	// __點
	this.instance_5 = new lib._4_點();
	this.instance_5.parent = this;
	this.instance_5.setTransform(840.1,470.2,0.024,0.024,0,0,0,106.8,102.7);
	this.instance_5._off = true;
	this.instance_5.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_5.cache(-2,-2,197,197);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({x:1186.2},5).to({regX:109.8,regY:101.9,scaleX:0.01,scaleY:0.01,y:470.1,alpha:0},17).to({_off:true},155).wait(77));

	// __點
	this.instance_6 = new lib._4_點();
	this.instance_6.parent = this;
	this.instance_6.setTransform(840.1,470.2,0.024,0.024,0,0,0,106.8,102.7);
	this.instance_6._off = true;
	this.instance_6.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_6.cache(-2,-2,197,197);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({x:150.8},5).to({regX:108.8,regY:102.8,scaleX:0.01,scaleY:0.01,x:150.6,y:470.1,alpha:0},17).to({_off:true},155).wait(77));

	// __點
	this.instance_7 = new lib._4_點();
	this.instance_7.parent = this;
	this.instance_7.setTransform(840.1,470.2,0.024,0.024,0,0,0,106.8,102.7);
	this.instance_7._off = true;
	this.instance_7.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_7.cache(-2,-2,197,197);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).to({x:494.8},5).to({regX:107.8,regY:107.8,scaleX:0.01,scaleY:0.01,x:494.6,alpha:0},17).to({_off:true},155).wait(77));

	// __點
	this.instance_8 = new lib._4_點();
	this.instance_8.parent = this;
	this.instance_8.setTransform(840,191.8,0.15,0.15,0,0,0,96.3,96.7);
	this.instance_8.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:98.8,regY:98.8,scaleX:0.12,scaleY:0.12,x:840.3,y:470.5,alpha:1},8).to({regX:96.8,regY:96.8,scaleX:0.03,scaleY:0.03,x:840.1,y:470.3},6).to({regX:96.9,regY:96.9,scaleX:0.01,scaleY:0.01,alpha:0.5},18).to({_off:true},1).wait(239));

	// _2_btn
	this.instance_9 = new lib._12_btn();
	this.instance_9.parent = this;
	this.instance_9.setTransform(254,581.3,1,1,0,0,0,106,35);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100).to({_off:false},0).to({y:564,alpha:0.898},13).to({y:560.5,alpha:1},2).wait(27).to({y:560.3},0).wait(46).to({_off:true},65).wait(19));

	// __word
	this.instance_10 = new lib._3_字();
	this.instance_10.parent = this;
	this.instance_10.setTransform(385.2,448.5,1,1,0,0,0,235.5,49.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100).to({_off:false},0).to({x:385.5,y:431.5,alpha:1},15).wait(73).to({_off:true},65).wait(19));

	// __頭
	this.instance_11 = new lib.頭();
	this.instance_11.parent = this;
	this.instance_11.setTransform(840,-27.1,1,1,0,0,0,840,40);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(126).to({_off:false},0).to({y:39.9,alpha:1},18).wait(7).to({y:40},0).wait(101).to({_off:true},1).wait(19));

	// __窗簾
	this.instance_12 = new lib.窗連();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1869.8,636,1,1,0,0,0,191.5,211);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(108).to({_off:false},0).to({x:1510.7,alpha:1},19).to({x:1511.5},41).to({x:1804.8,y:635.9},16).wait(6).to({_off:true},63).wait(19));

	// KC_3
	this.instance_13 = new lib.NORMAN_loading_底_C();
	this.instance_13.parent = this;

	this.instance_14 = new lib.KV_3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(840,470,1,1,0,0,0,840,470);
	this.instance_14.alpha = 0.891;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_13}]},14).to({state:[{t:this.instance_14}]},69).to({state:[{t:this.instance_14}]},17).to({state:[{t:this.instance_14}]},103).to({state:[{t:this.instance_14}]},18).to({state:[{t:this.instance_14}]},19).to({state:[{t:this.instance_14}]},12).to({state:[]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(83).to({_off:false},0).to({alpha:0},17).wait(152).to({_off:true},1).wait(19));

	// KV_1
	this.instance_15 = new lib.KV();
	this.instance_15.parent = this;
	this.instance_15.setTransform(840,470,1,1,0,0,0,840,470);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(252).to({_off:true},1).wait(19));

	// 底
	this.instance_16 = new lib.NORMAN_loading_底();
	this.instance_16.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(272));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(839,469,1682,942);
// library properties:
lib.properties = {
	width: 1680,
	height: 940,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/new_atlas_.png", id:"new_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;