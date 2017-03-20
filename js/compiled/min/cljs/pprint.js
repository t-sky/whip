// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10397 = arguments.length;
var i__5727__auto___10398 = (0);
while(true){
if((i__5727__auto___10398 < len__5726__auto___10397)){
args__5733__auto__.push((arguments[i__5727__auto___10398]));

var G__10399 = (i__5727__auto___10398 + (1));
i__5727__auto___10398 = G__10399;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq10396){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10396));
});
cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10401 = arguments.length;
var i__5727__auto___10402 = (0);
while(true){
if((i__5727__auto___10402 < len__5726__auto___10401)){
args__5733__auto__.push((arguments[i__5727__auto___10402]));

var G__10403 = (i__5727__auto___10402 + (1));
i__5727__auto___10402 = G__10403;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq10400){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10400));
});
cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__10407 = cljs.core._EQ_;
var expr__10408 = c;
if(cljs.core.truth_((pred__10407.cljs$core$IFn$_invoke$arity$2 ? pred__10407.cljs$core$IFn$_invoke$arity$2("\b",expr__10408) : pred__10407.call(null,"\b",expr__10408)))){
return "\\backspace";
} else {
if(cljs.core.truth_((pred__10407.cljs$core$IFn$_invoke$arity$2 ? pred__10407.cljs$core$IFn$_invoke$arity$2("\t",expr__10408) : pred__10407.call(null,"\t",expr__10408)))){
return "\\tab";
} else {
if(cljs.core.truth_((pred__10407.cljs$core$IFn$_invoke$arity$2 ? pred__10407.cljs$core$IFn$_invoke$arity$2("\n",expr__10408) : pred__10407.call(null,"\n",expr__10408)))){
return "\\newline";
} else {
if(cljs.core.truth_((pred__10407.cljs$core$IFn$_invoke$arity$2 ? pred__10407.cljs$core$IFn$_invoke$arity$2("\f",expr__10408) : pred__10407.call(null,"\f",expr__10408)))){
return "\\formfeed";
} else {
if(cljs.core.truth_((pred__10407.cljs$core$IFn$_invoke$arity$2 ? pred__10407.cljs$core$IFn$_invoke$arity$2("\r",expr__10408) : pred__10407.call(null,"\r",expr__10408)))){
return "\\return";
} else {
if(cljs.core.truth_((pred__10407.cljs$core$IFn$_invoke$arity$2 ? pred__10407.cljs$core$IFn$_invoke$arity$2("\"",expr__10408) : pred__10407.call(null,"\"",expr__10408)))){
return "\\\"";
} else {
if(cljs.core.truth_((pred__10407.cljs$core$IFn$_invoke$arity$2 ? pred__10407.cljs$core$IFn$_invoke$arity$2("\\",expr__10408) : pred__10407.call(null,"\\",expr__10408)))){
return "\\\\";
} else {
return [cljs.core.str("\\"),cljs.core.str(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10411 = arguments.length;
var i__5727__auto___10412 = (0);
while(true){
if((i__5727__auto___10412 < len__5726__auto___10411)){
args__5733__auto__.push((arguments[i__5727__auto___10412]));

var G__10413 = (i__5727__auto___10412 + (1));
i__5727__auto___10412 = G__10413;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq10410){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10410));
});
cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10415 = arguments.length;
var i__5727__auto___10416 = (0);
while(true){
if((i__5727__auto___10416 < len__5726__auto___10415)){
args__5733__auto__.push((arguments[i__5727__auto___10416]));

var G__10417 = (i__5727__auto___10416 + (1));
i__5727__auto___10416 = G__10417;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq10414){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10414));
});
/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__10419 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10419,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10419,(1),null);
var G__10420 = new_context;
var G__10421 = remainder;
var G__10422 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__10420;
lis__$1 = G__10421;
acc = G__10422;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__10424 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10424,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10424,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__10425 = new_context;
var G__10426 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__10425;
acc = G__10426;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__10428 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10428,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10428,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10428,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__10429 = new_context;
var G__10430 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__10429;
acc = G__10430;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5440__auto__ = (function cljs$pprint$unzip_map_$_iter__10459(s__10460){
return (new cljs.core.LazySeq(null,(function (){
var s__10460__$1 = s__10460;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10460__$1);
if(temp__4425__auto__){
var s__10460__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10460__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__10460__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__10462 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__10461 = (0);
while(true){
if((i__10461 < size__5439__auto__)){
var vec__10469 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__10461);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10469,(0),null);
var vec__10470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10469,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10470,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10470,(1),null);
cljs.core.chunk_append(b__10462,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__10487 = (i__10461 + (1));
i__10461 = G__10487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10462),cljs$pprint$unzip_map_$_iter__10459(cljs.core.chunk_rest(s__10460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10462),null);
}
} else {
var vec__10471 = cljs.core.first(s__10460__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10471,(0),null);
var vec__10472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10471,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10472,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10472,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__10459(cljs.core.rest(s__10460__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5440__auto__ = (function cljs$pprint$unzip_map_$_iter__10473(s__10474){
return (new cljs.core.LazySeq(null,(function (){
var s__10474__$1 = s__10474;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10474__$1);
if(temp__4425__auto__){
var s__10474__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10474__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__10474__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__10476 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__10475 = (0);
while(true){
if((i__10475 < size__5439__auto__)){
var vec__10483 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__10475);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10483,(0),null);
var vec__10484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10483,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,(1),null);
cljs.core.chunk_append(b__10476,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__10488 = (i__10475 + (1));
i__10475 = G__10488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10476),cljs$pprint$unzip_map_$_iter__10473(cljs.core.chunk_rest(s__10474__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10476),null);
}
} else {
var vec__10485 = cljs.core.first(s__10474__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10485,(0),null);
var vec__10486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10485,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10486,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10486,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__10473(cljs.core.rest(s__10474__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5440__auto__ = (function cljs$pprint$tuple_map_$_iter__10499(s__10500){
return (new cljs.core.LazySeq(null,(function (){
var s__10500__$1 = s__10500;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10500__$1);
if(temp__4425__auto__){
var s__10500__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10500__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__10500__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__10502 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__10501 = (0);
while(true){
if((i__10501 < size__5439__auto__)){
var vec__10507 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__10501);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10507,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10507,(1),null);
cljs.core.chunk_append(b__10502,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__10509 = (i__10501 + (1));
i__10501 = G__10509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10502),cljs$pprint$tuple_map_$_iter__10499(cljs.core.chunk_rest(s__10500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10502),null);
}
} else {
var vec__10508 = cljs.core.first(s__10500__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10508,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10508,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__10499(cljs.core.rest(s__10500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__10510 = (n - (1));
n = G__10510;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__10511 = (n + (1));
n = G__10511;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.fromArray([val], true));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__10515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__10515) : test.call(null,G__10515));
})()))){
return pos;
} else {
var G__10516 = (pos + (1));
pos = G__10516;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__5323__auto__ = (((pp == null))?null:pp);
var m__5324__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__5324__auto__.call(null,pp));
} else {
var m__5324__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__5324__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__10521 = (function (){var G__10522 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10522) : cljs.core.deref.call(null,G__10522));
})();
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__10521) : sym.call(null,G__10521));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var args10524 = [];
var len__5726__auto___10534 = arguments.length;
var i__5727__auto___10535 = (0);
while(true){
if((i__5727__auto___10535 < len__5726__auto___10534)){
args10524.push((arguments[i__5727__auto___10535]));

var G__10536 = (i__5727__auto___10535 + (1));
i__5727__auto___10535 = G__10536;
continue;
} else {
}
break;
}

var G__10526 = args10524.length;
switch (G__10526) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10524.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = (function (){var G__10527 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10527) : cljs.core.atom.call(null,G__10527));
})();
if(typeof cljs.pprint.t_cljs$pprint10528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint10528 = (function (writer,max_columns,fields,meta10529){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta10529 = meta10529;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint10528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_10530,meta10529__$1){
var self__ = this;
var _10530__$1 = this;
return (new cljs.pprint.t_cljs$pprint10528(self__.writer,self__.max_columns,self__.fields,meta10529__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint10528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_10530){
var self__ = this;
var _10530__$1 = this;
return self__.meta10529;
});})(fields))
;

cljs.pprint.t_cljs$pprint10528.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint10528.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint10528.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__10531 = cljs.core._EQ_;
var expr__10532 = cljs.core.type(x);
if(cljs.core.truth_((pred__10531.cljs$core$IFn$_invoke$arity$2 ? pred__10531.cljs$core$IFn$_invoke$arity$2(String,expr__10532) : pred__10531.call(null,String,expr__10532)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__10531,expr__10532,this$__$1,fields){
return (function (p1__10523_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__10523_SHARP_,"\n");
});})(s,nl,pred__10531,expr__10532,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__10531.cljs$core$IFn$_invoke$arity$2 ? pred__10531.cljs$core$IFn$_invoke$arity$2(Number,expr__10532) : pred__10531.call(null,Number,expr__10532)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10532)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint10528.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta10529], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint10528.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint10528.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint10528";

cljs.pprint.t_cljs$pprint10528.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.pprint/t_cljs$pprint10528");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint10528 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint10528(writer__$1,max_columns__$1,fields__$1,meta10529){
return (new cljs.pprint.t_cljs$pprint10528(writer__$1,max_columns__$1,fields__$1,meta10529));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint10528(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;
cljs.pprint.get_miser_width;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k10539,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__10541 = (((k10539 instanceof cljs.core.Keyword))?k10539.fqn:null);
switch (G__10541) {
case "suffix":
return self__.suffix;

break;
case "indent":
return self__.indent;

break;
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "done-nl":
return self__.done_nl;

break;
case "start-col":
return self__.start_col;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10539,else__5285__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#cljs.pprint.logical-block{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$ = true;

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10538){
var self__ = this;
var G__10538__$1 = this;
return (new cljs.core.RecordIter((0),G__10538__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__10538){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__10542 = cljs.core.keyword_identical_QMARK_;
var expr__10543 = k__5290__auto__;
if(cljs.core.truth_((pred__10542.cljs$core$IFn$_invoke$arity$2 ? pred__10542.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parent,expr__10543) : pred__10542.call(null,cljs.core.cst$kw$parent,expr__10543)))){
return (new cljs.pprint.logical_block(G__10538,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10542.cljs$core$IFn$_invoke$arity$2 ? pred__10542.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$section,expr__10543) : pred__10542.call(null,cljs.core.cst$kw$section,expr__10543)))){
return (new cljs.pprint.logical_block(self__.parent,G__10538,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10542.cljs$core$IFn$_invoke$arity$2 ? pred__10542.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_col,expr__10543) : pred__10542.call(null,cljs.core.cst$kw$start_DASH_col,expr__10543)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__10538,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10542.cljs$core$IFn$_invoke$arity$2 ? pred__10542.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indent,expr__10543) : pred__10542.call(null,cljs.core.cst$kw$indent,expr__10543)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__10538,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10542.cljs$core$IFn$_invoke$arity$2 ? pred__10542.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$done_DASH_nl,expr__10543) : pred__10542.call(null,cljs.core.cst$kw$done_DASH_nl,expr__10543)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__10538,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10542.cljs$core$IFn$_invoke$arity$2 ? pred__10542.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$intra_DASH_block_DASH_nl,expr__10543) : pred__10542.call(null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,expr__10543)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__10538,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10542.cljs$core$IFn$_invoke$arity$2 ? pred__10542.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix,expr__10543) : pred__10542.call(null,cljs.core.cst$kw$prefix,expr__10543)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__10538,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10542.cljs$core$IFn$_invoke$arity$2 ? pred__10542.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$per_DASH_line_DASH_prefix,expr__10543) : pred__10542.call(null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,expr__10543)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__10538,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10542.cljs$core$IFn$_invoke$arity$2 ? pred__10542.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$suffix,expr__10543) : pred__10542.call(null,cljs.core.cst$kw$suffix,expr__10543)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__10538,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10542.cljs$core$IFn$_invoke$arity$2 ? pred__10542.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$logical_DASH_block_DASH_callback,expr__10543) : pred__10542.call(null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,expr__10543)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__10538,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__10538),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__10538){
var self__ = this;
var this__5281__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__10538,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__10540){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__10540),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__10540),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__10540),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__10540),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__10540),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__10540),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__10540),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__10540),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__10540),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__10540),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10540,cljs.core.cst$kw$parent,cljs.core.array_seq([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0)),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__10546 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__10546;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k10548,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__10550 = (((k10548 instanceof cljs.core.Keyword))?k10548.fqn:null);
switch (G__10550) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10548,else__5285__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$ = true;

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10547){
var self__ = this;
var G__10547__$1 = this;
return (new cljs.core.RecordIter((0),G__10547__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__10547){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__10551 = cljs.core.keyword_identical_QMARK_;
var expr__10552 = k__5290__auto__;
if(cljs.core.truth_((pred__10551.cljs$core$IFn$_invoke$arity$2 ? pred__10551.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag,expr__10552) : pred__10551.call(null,cljs.core.cst$kw$type_DASH_tag,expr__10552)))){
return (new cljs.pprint.buffer_blob(G__10547,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10551.cljs$core$IFn$_invoke$arity$2 ? pred__10551.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$data,expr__10552) : pred__10551.call(null,cljs.core.cst$kw$data,expr__10552)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__10547,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10551.cljs$core$IFn$_invoke$arity$2 ? pred__10551.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$trailing_DASH_white_DASH_space,expr__10552) : pred__10551.call(null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,expr__10552)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__10547,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10551.cljs$core$IFn$_invoke$arity$2 ? pred__10551.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_pos,expr__10552) : pred__10551.call(null,cljs.core.cst$kw$start_DASH_pos,expr__10552)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__10547,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10551.cljs$core$IFn$_invoke$arity$2 ? pred__10551.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end_DASH_pos,expr__10552) : pred__10551.call(null,cljs.core.cst$kw$end_DASH_pos,expr__10552)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__10547,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__10547),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__10547){
var self__ = this;
var this__5281__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__10547,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__10549){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__10549),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__10549),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__10549),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__10549),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__10549),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10549,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__10330__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__10330__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k10556,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__10558 = (((k10556 instanceof cljs.core.Keyword))?k10556.fqn:null);
switch (G__10558) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10556,else__5285__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#cljs.pprint.nl-t{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10555){
var self__ = this;
var G__10555__$1 = this;
return (new cljs.core.RecordIter((0),G__10555__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__10555){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__10559 = cljs.core.keyword_identical_QMARK_;
var expr__10560 = k__5290__auto__;
if(cljs.core.truth_((pred__10559.cljs$core$IFn$_invoke$arity$2 ? pred__10559.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag,expr__10560) : pred__10559.call(null,cljs.core.cst$kw$type_DASH_tag,expr__10560)))){
return (new cljs.pprint.nl_t(G__10555,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10559.cljs$core$IFn$_invoke$arity$2 ? pred__10559.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type,expr__10560) : pred__10559.call(null,cljs.core.cst$kw$type,expr__10560)))){
return (new cljs.pprint.nl_t(self__.type_tag,G__10555,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10559.cljs$core$IFn$_invoke$arity$2 ? pred__10559.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$logical_DASH_block,expr__10560) : pred__10559.call(null,cljs.core.cst$kw$logical_DASH_block,expr__10560)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__10555,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10559.cljs$core$IFn$_invoke$arity$2 ? pred__10559.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_pos,expr__10560) : pred__10559.call(null,cljs.core.cst$kw$start_DASH_pos,expr__10560)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__10555,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10559.cljs$core$IFn$_invoke$arity$2 ? pred__10559.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end_DASH_pos,expr__10560) : pred__10559.call(null,cljs.core.cst$kw$end_DASH_pos,expr__10560)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__10555,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__10555),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__10555){
var self__ = this;
var this__5281__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__10555,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__10557){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__10557),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__10557),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__10557),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__10557),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__10557),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10557,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__10330__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__10330__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k10564,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__10566 = (((k10564 instanceof cljs.core.Keyword))?k10564.fqn:null);
switch (G__10566) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10564,else__5285__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10563){
var self__ = this;
var G__10563__$1 = this;
return (new cljs.core.RecordIter((0),G__10563__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__10563){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__10567 = cljs.core.keyword_identical_QMARK_;
var expr__10568 = k__5290__auto__;
if(cljs.core.truth_((pred__10567.cljs$core$IFn$_invoke$arity$2 ? pred__10567.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag,expr__10568) : pred__10567.call(null,cljs.core.cst$kw$type_DASH_tag,expr__10568)))){
return (new cljs.pprint.start_block_t(G__10563,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10567.cljs$core$IFn$_invoke$arity$2 ? pred__10567.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$logical_DASH_block,expr__10568) : pred__10567.call(null,cljs.core.cst$kw$logical_DASH_block,expr__10568)))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__10563,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10567.cljs$core$IFn$_invoke$arity$2 ? pred__10567.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_pos,expr__10568) : pred__10567.call(null,cljs.core.cst$kw$start_DASH_pos,expr__10568)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__10563,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10567.cljs$core$IFn$_invoke$arity$2 ? pred__10567.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end_DASH_pos,expr__10568) : pred__10567.call(null,cljs.core.cst$kw$end_DASH_pos,expr__10568)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__10563,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__10563),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__10563){
var self__ = this;
var this__5281__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__10563,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__10565){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__10565),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__10565),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__10565),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__10565),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10565,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__10330__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__10330__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k10572,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__10574 = (((k10572 instanceof cljs.core.Keyword))?k10572.fqn:null);
switch (G__10574) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10572,else__5285__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10571){
var self__ = this;
var G__10571__$1 = this;
return (new cljs.core.RecordIter((0),G__10571__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__10571){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__10575 = cljs.core.keyword_identical_QMARK_;
var expr__10576 = k__5290__auto__;
if(cljs.core.truth_((pred__10575.cljs$core$IFn$_invoke$arity$2 ? pred__10575.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag,expr__10576) : pred__10575.call(null,cljs.core.cst$kw$type_DASH_tag,expr__10576)))){
return (new cljs.pprint.end_block_t(G__10571,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10575.cljs$core$IFn$_invoke$arity$2 ? pred__10575.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$logical_DASH_block,expr__10576) : pred__10575.call(null,cljs.core.cst$kw$logical_DASH_block,expr__10576)))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__10571,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10575.cljs$core$IFn$_invoke$arity$2 ? pred__10575.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_pos,expr__10576) : pred__10575.call(null,cljs.core.cst$kw$start_DASH_pos,expr__10576)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__10571,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10575.cljs$core$IFn$_invoke$arity$2 ? pred__10575.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end_DASH_pos,expr__10576) : pred__10575.call(null,cljs.core.cst$kw$end_DASH_pos,expr__10576)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__10571,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__10571),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__10571){
var self__ = this;
var this__5281__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__10571,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__10573){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__10573),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__10573),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__10573),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__10573),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10573,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__10330__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__10330__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k10580,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__10582 = (((k10580 instanceof cljs.core.Keyword))?k10580.fqn:null);
switch (G__10582) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10580,else__5285__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#cljs.pprint.indent-t{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10579){
var self__ = this;
var G__10579__$1 = this;
return (new cljs.core.RecordIter((0),G__10579__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__10579){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__10583 = cljs.core.keyword_identical_QMARK_;
var expr__10584 = k__5290__auto__;
if(cljs.core.truth_((pred__10583.cljs$core$IFn$_invoke$arity$2 ? pred__10583.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag,expr__10584) : pred__10583.call(null,cljs.core.cst$kw$type_DASH_tag,expr__10584)))){
return (new cljs.pprint.indent_t(G__10579,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10583.cljs$core$IFn$_invoke$arity$2 ? pred__10583.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$logical_DASH_block,expr__10584) : pred__10583.call(null,cljs.core.cst$kw$logical_DASH_block,expr__10584)))){
return (new cljs.pprint.indent_t(self__.type_tag,G__10579,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10583.cljs$core$IFn$_invoke$arity$2 ? pred__10583.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$relative_DASH_to,expr__10584) : pred__10583.call(null,cljs.core.cst$kw$relative_DASH_to,expr__10584)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__10579,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10583.cljs$core$IFn$_invoke$arity$2 ? pred__10583.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$offset,expr__10584) : pred__10583.call(null,cljs.core.cst$kw$offset,expr__10584)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__10579,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10583.cljs$core$IFn$_invoke$arity$2 ? pred__10583.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_pos,expr__10584) : pred__10583.call(null,cljs.core.cst$kw$start_DASH_pos,expr__10584)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__10579,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10583.cljs$core$IFn$_invoke$arity$2 ? pred__10583.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end_DASH_pos,expr__10584) : pred__10583.call(null,cljs.core.cst$kw$end_DASH_pos,expr__10584)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__10579,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__10579),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__10579){
var self__ = this;
var this__5281__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__10579,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__10581){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__10581),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__10581),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__10581),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__10581),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__10581),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__10581),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10581,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__10330__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__10330__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
cljs.pprint.emit_nl;
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__5581__auto__ = (function (){var G__10589 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10589) : cljs.core.atom.call(null,G__10589));
})();
var prefer_table__5582__auto__ = (function (){var G__10590 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10590) : cljs.core.atom.call(null,G__10590));
})();
var method_cache__5583__auto__ = (function (){var G__10591 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10591) : cljs.core.atom.call(null,G__10591));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__10592 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10592) : cljs.core.atom.call(null,G__10592));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__){
return (function (p1__10588_SHARP_,p2__10587_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__10587_SHARP_);
});})(method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__))
,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__4425__auto___10600 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__10593 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10593) : cljs.core.deref.call(null,G__10593));
})());
if(cljs.core.truth_(temp__4425__auto___10600)){
var cb_10601 = temp__4425__auto___10600;
(cb_10601.cljs$core$IFn$_invoke$arity$1 ? cb_10601.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$start) : cb_10601.call(null,cljs.core.cst$kw$start));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__4425__auto___10602 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__4425__auto___10602)){
var prefix_10603 = temp__4425__auto___10602;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10594 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10594) : cljs.core.deref.call(null,G__10594));
})()),prefix_10603);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10595 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10595) : cljs.core.deref.call(null,G__10595));
})()));
var G__10596_10604 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
var G__10597_10605 = col;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10596_10604,G__10597_10605) : cljs.core.reset_BANG_.call(null,G__10596_10604,G__10597_10605));

var G__10598 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__10599 = col;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10598,G__10599) : cljs.core.reset_BANG_.call(null,G__10598,G__10599));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__4425__auto___10608 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__10606 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10606) : cljs.core.deref.call(null,G__10606));
})());
if(cljs.core.truth_(temp__4425__auto___10608)){
var cb_10609 = temp__4425__auto___10608;
(cb_10609.cljs$core$IFn$_invoke$arity$1 ? cb_10609.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$end) : cb_10609.call(null,cljs.core.cst$kw$end));
} else {
}

var temp__4425__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__4425__auto__)){
var suffix = temp__4425__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10607 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10607) : cljs.core.deref.call(null,G__10607));
})()),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var G__10610 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__10611 = (cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__10612 = cljs.core._EQ_;
var expr__10613 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((pred__10612.cljs$core$IFn$_invoke$arity$2 ? pred__10612.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$block,expr__10613) : pred__10612.call(null,cljs.core.cst$kw$block,expr__10613)))){
var G__10615 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10615) : cljs.core.deref.call(null,G__10615));
} else {
if(cljs.core.truth_((pred__10612.cljs$core$IFn$_invoke$arity$2 ? pred__10612.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$current,expr__10613) : pred__10612.call(null,cljs.core.cst$kw$current,expr__10613)))){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10616 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10616) : cljs.core.deref.call(null,G__10616));
})()));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10613)].join('')));
}
}
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10610,G__10611) : cljs.core.reset_BANG_.call(null,G__10610,G__10611));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10617 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10617) : cljs.core.deref.call(null,G__10617));
})()),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__4668__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__4668__auto__){
return or__4668__auto__;
} else {
var and__4656__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__4656__auto__){
var G__10621 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10621) : cljs.core.deref.call(null,G__10621));
} else {
return and__4656__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__4423__auto___10624 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__10622 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10622) : cljs.core.deref.call(null,G__10622));
})());
if(cljs.core.truth_(temp__4423__auto___10624)){
var tws_10625 = temp__4423__auto___10624;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10623 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10623) : cljs.core.deref.call(null,G__10623));
})()),tws_10625);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__10638 = cljs.core.seq(tokens);
var chunk__10639 = null;
var count__10640 = (0);
var i__10641 = (0);
while(true){
if((i__10641 < count__10640)){
var token = chunk__10639.cljs$core$IIndexed$_nth$arity$2(null,i__10641);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__4423__auto___10650 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__10642 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10642) : cljs.core.deref.call(null,G__10642));
})());
if(cljs.core.truth_(temp__4423__auto___10650)){
var tws_10651 = temp__4423__auto___10650;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10643 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10643) : cljs.core.deref.call(null,G__10643));
})()),tws_10651);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_10652 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__10644 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10644) : cljs.core.deref.call(null,G__10644));
})());
if(cljs.core.truth_((function (){var and__4656__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4656__auto__)){
return tws_10652;
} else {
return and__4656__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10645 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10645) : cljs.core.deref.call(null,G__10645));
})()),tws_10652);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__10653 = seq__10638;
var G__10654 = chunk__10639;
var G__10655 = count__10640;
var G__10656 = (i__10641 + (1));
seq__10638 = G__10653;
chunk__10639 = G__10654;
count__10640 = G__10655;
i__10641 = G__10656;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10638);
if(temp__4425__auto__){
var seq__10638__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10638__$1)){
var c__5471__auto__ = cljs.core.chunk_first(seq__10638__$1);
var G__10657 = cljs.core.chunk_rest(seq__10638__$1);
var G__10658 = c__5471__auto__;
var G__10659 = cljs.core.count(c__5471__auto__);
var G__10660 = (0);
seq__10638 = G__10657;
chunk__10639 = G__10658;
count__10640 = G__10659;
i__10641 = G__10660;
continue;
} else {
var token = cljs.core.first(seq__10638__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__4423__auto___10661 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__10646 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10646) : cljs.core.deref.call(null,G__10646));
})());
if(cljs.core.truth_(temp__4423__auto___10661)){
var tws_10662 = temp__4423__auto___10661;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10647 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10647) : cljs.core.deref.call(null,G__10647));
})()),tws_10662);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_10663 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__10648 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10648) : cljs.core.deref.call(null,G__10648));
})());
if(cljs.core.truth_((function (){var and__4656__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4656__auto__)){
return tws_10663;
} else {
return and__4656__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10649 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10649) : cljs.core.deref.call(null,G__10649));
})()),tws_10663);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__10664 = cljs.core.next(seq__10638__$1);
var G__10665 = null;
var G__10666 = (0);
var G__10667 = (0);
seq__10638 = G__10664;
chunk__10639 = G__10665;
count__10640 = G__10666;
i__10641 = G__10667;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10671 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10671) : cljs.core.deref.call(null,G__10671));
})()));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10673 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10673) : cljs.core.deref.call(null,G__10673));
})())) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4668__auto__ = (function (){var G__10677 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10677) : cljs.core.deref.call(null,G__10677));
})();
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10681 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10681) : cljs.core.deref.call(null,G__10681));
})()));
var and__4656__auto__ = miser_width;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = maxcol;
if(cljs.core.truth_(and__4656__auto____$1)){
var and__4656__auto____$2 = ((function (){var G__10683 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10683) : cljs.core.deref.call(null,G__10683));
})() >= (maxcol - miser_width));
if(and__4656__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__4656__auto____$2;
}
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__5581__auto__ = (function (){var G__10684 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10684) : cljs.core.atom.call(null,G__10684));
})();
var prefer_table__5582__auto__ = (function (){var G__10685 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10685) : cljs.core.atom.call(null,G__10685));
})();
var method_cache__5583__auto__ = (function (){var G__10686 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10686) : cljs.core.atom.call(null,G__10686));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__10687 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10687) : cljs.core.atom.call(null,G__10687));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__))
,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__4668__auto__ = (function (){var G__10689 = cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10689) : cljs.core.deref.call(null,G__10689));
})();
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__4668__auto____$1){
return or__4668__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__10690_SHARP_){
return cljs.core.not((function (){var and__4656__auto__ = cljs.pprint.nl_t_QMARK_(p1__10690_SHARP_);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__10690_SHARP_),lb);
} else {
return and__4656__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__10691_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__10691_SHARP_);
return cljs.core.not((function (){var and__4656__auto__ = cljs.pprint.nl_t_QMARK_(p1__10691_SHARP_);
if(cljs.core.truth_(and__4656__auto__)){
var or__4668__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__4668__auto__){
return or__4668__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__4656__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
var G__10700_10708 = cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
var G__10701_10709 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10700_10708,G__10701_10709) : cljs.core.reset_BANG_.call(null,G__10700_10708,G__10701_10709));

var G__10702_10710 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
var G__10703_10711 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10702_10710,G__10703_10711) : cljs.core.reset_BANG_.call(null,G__10702_10710,G__10703_10711));

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
var G__10704_10712 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1);
var G__10705_10713 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10704_10712,G__10705_10713) : cljs.core.reset_BANG_.call(null,G__10704_10712,G__10705_10713));

var G__10706_10714 = cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1);
var G__10707_10715 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10706_10714,G__10707_10715) : cljs.core.reset_BANG_.call(null,G__10706_10714,G__10707_10715));

var G__10716 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__10716;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10721 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10721) : cljs.core.deref.call(null,G__10721));
})()),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10722 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10722) : cljs.core.deref.call(null,G__10722));
})()),prefix);
} else {
}

var istr_10725 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((function (){var G__10723 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10723) : cljs.core.deref.call(null,G__10723));
})() - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10724 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10724) : cljs.core.deref.call(null,G__10724));
})()),istr_10725);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__10726_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__10726_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__10733 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10733,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10733,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__10734 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10734,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10734,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__10735 = newl;
var G__10736 = this$;
var G__10737 = section;
var G__10738 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__10735,G__10736,G__10737,G__10738) : cljs.pprint.emit_nl_QMARK_.call(null,G__10735,G__10736,G__10737,G__10738));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs$pprint$write_token_string(this$,section);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__10740 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10740) : cljs.core.deref.call(null,G__10740));
})());
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__10741 = new_buffer;
buffer = G__10741;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__10744 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10744) : cljs.core.deref.call(null,G__10744));
})()),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__10745 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10745) : cljs.core.deref.call(null,G__10745));
})())))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__4423__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__10747 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10747) : cljs.core.deref.call(null,G__10747));
})());
if(cljs.core.truth_(temp__4423__auto__)){
var buf = temp__4423__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__4425__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__10750 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10750) : cljs.core.deref.call(null,G__10750));
})());
if(cljs.core.truth_(temp__4425__auto__)){
var tws = temp__4425__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10751 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10751) : cljs.core.deref.call(null,G__10751));
})()),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__10767 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10767) : cljs.core.deref.call(null,G__10767));
})())));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__10768 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10768) : cljs.core.deref.call(null,G__10768));
})()))){
var oldpos_10782 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__10769 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10769) : cljs.core.deref.call(null,G__10769));
})());
var newpos_10783 = (oldpos_10782 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_10783);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_10782,newpos_10783));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10770 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10770) : cljs.core.deref.call(null,G__10770));
})()),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10771 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10771) : cljs.core.deref.call(null,G__10771));
})()),"\n");

var seq__10772_10784 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__10773_10785 = null;
var count__10774_10786 = (0);
var i__10775_10787 = (0);
while(true){
if((i__10775_10787 < count__10774_10786)){
var l_10788__$1 = chunk__10773_10785.cljs$core$IIndexed$_nth$arity$2(null,i__10775_10787);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10776 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10776) : cljs.core.deref.call(null,G__10776));
})()),l_10788__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10777 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10777) : cljs.core.deref.call(null,G__10777));
})()),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10778 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10778) : cljs.core.deref.call(null,G__10778));
})()),prefix);
} else {
}

var G__10789 = seq__10772_10784;
var G__10790 = chunk__10773_10785;
var G__10791 = count__10774_10786;
var G__10792 = (i__10775_10787 + (1));
seq__10772_10784 = G__10789;
chunk__10773_10785 = G__10790;
count__10774_10786 = G__10791;
i__10775_10787 = G__10792;
continue;
} else {
var temp__4425__auto___10793 = cljs.core.seq(seq__10772_10784);
if(temp__4425__auto___10793){
var seq__10772_10794__$1 = temp__4425__auto___10793;
if(cljs.core.chunked_seq_QMARK_(seq__10772_10794__$1)){
var c__5471__auto___10795 = cljs.core.chunk_first(seq__10772_10794__$1);
var G__10796 = cljs.core.chunk_rest(seq__10772_10794__$1);
var G__10797 = c__5471__auto___10795;
var G__10798 = cljs.core.count(c__5471__auto___10795);
var G__10799 = (0);
seq__10772_10784 = G__10796;
chunk__10773_10785 = G__10797;
count__10774_10786 = G__10798;
i__10775_10787 = G__10799;
continue;
} else {
var l_10800__$1 = cljs.core.first(seq__10772_10794__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10779 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10779) : cljs.core.deref.call(null,G__10779));
})()),l_10800__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10780 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10780) : cljs.core.deref.call(null,G__10780));
})()),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10781 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10781) : cljs.core.deref.call(null,G__10781));
})()),prefix);
} else {
}

var G__10801 = cljs.core.next(seq__10772_10794__$1);
var G__10802 = null;
var G__10803 = (0);
var G__10804 = (0);
seq__10772_10784 = G__10801;
chunk__10773_10785 = G__10802;
count__10774_10786 = G__10803;
i__10775_10787 = G__10804;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__10808 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10808) : cljs.core.deref.call(null,G__10808));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10809 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10809) : cljs.core.deref.call(null,G__10809));
})()),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__10810 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10810) : cljs.core.deref.call(null,G__10810));
})());
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),null,null,null,null,null,null,null));
var fields = (function (){var G__10824 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10824) : cljs.core.atom.call(null,G__10824));
})();
if(typeof cljs.pprint.t_cljs$pprint10825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint10825 = (function (pretty_writer,writer,max_columns,miser_width,lb,fields,meta10826){
this.pretty_writer = pretty_writer;
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta10826 = meta10826;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint10825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_10827,meta10826__$1){
var self__ = this;
var _10827__$1 = this;
return (new cljs.pprint.t_cljs$pprint10825(self__.pretty_writer,self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta10826__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10825.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_10827){
var self__ = this;
var _10827__$1 = this;
return self__.meta10826;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10825.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10825.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__10828 = cljs.core._EQ_;
var expr__10829 = cljs.core.type(x);
if(cljs.core.truth_((pred__10828.cljs$core$IFn$_invoke$arity$2 ? pred__10828.cljs$core$IFn$_invoke$arity$2(String,expr__10829) : pred__10828.call(null,String,expr__10829)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__10831 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10831) : cljs.core.deref.call(null,G__10831));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10832 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10832) : cljs.core.deref.call(null,G__10832));
})()),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__10833 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10833) : cljs.core.deref.call(null,G__10833));
})());
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__10828.cljs$core$IFn$_invoke$arity$2 ? pred__10828.cljs$core$IFn$_invoke$arity$2(Number,expr__10829) : pred__10828.call(null,Number,expr__10829)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10829)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10825.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush(this$__$1);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10834 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10834) : cljs.core.deref.call(null,G__10834));
})()));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10825.prototype.cljs$pprint$IPrettyFlush$ = true;

cljs.pprint.t_cljs$pprint10825.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__10835 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10835) : cljs.core.deref.call(null,G__10835));
})()),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__10836 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10836) : cljs.core.deref.call(null,G__10836));
})()),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10825.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$pretty_DASH_writer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width], null)))], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta10826], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10825.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint10825.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint10825";

cljs.pprint.t_cljs$pprint10825.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.pprint/t_cljs$pprint10825");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint10825 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint10825(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta10826){
return (new cljs.pprint.t_cljs$pprint10825(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta10826));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint10825(cljs$pprint$pretty_writer,writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__10847 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10847) : cljs.core.deref.call(null,G__10847));
})()),null,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__10848 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10848) : cljs.core.deref.call(null,G__10848));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__4425__auto___10857 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__10849 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10849) : cljs.core.deref.call(null,G__10849));
})());
if(cljs.core.truth_(temp__4425__auto___10857)){
var cb_10858 = temp__4425__auto___10857;
(cb_10858.cljs$core$IFn$_invoke$arity$1 ? cb_10858.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$start) : cb_10858.call(null,cljs.core.cst$kw$start));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10850 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10850) : cljs.core.deref.call(null,G__10850));
})()),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10851 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10851) : cljs.core.deref.call(null,G__10851));
})()));
var G__10852_10859 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
var G__10853_10860 = col;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10852_10859,G__10853_10860) : cljs.core.reset_BANG_.call(null,G__10852_10859,G__10853_10860));

var G__10854 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__10855 = col;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10854,G__10855) : cljs.core.reset_BANG_.call(null,G__10854,G__10855));
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__10856 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10856) : cljs.core.deref.call(null,G__10856));
})());
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__10866 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10866) : cljs.core.deref.call(null,G__10866));
})());
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__10867 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10867) : cljs.core.deref.call(null,G__10867));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10868 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10868) : cljs.core.deref.call(null,G__10868));
})()),suffix);
} else {
}

var temp__4425__auto___10871 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__10869 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10869) : cljs.core.deref.call(null,G__10869));
})());
if(cljs.core.truth_(temp__4425__auto___10871)){
var cb_10872 = temp__4425__auto___10871;
(cb_10872.cljs$core$IFn$_invoke$arity$1 ? cb_10872.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$end) : cb_10872.call(null,cljs.core.cst$kw$end));
} else {
}
} else {
var oldpos_10873 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__10870 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10870) : cljs.core.deref.call(null,G__10870));
})());
var newpos_10874 = (oldpos_10873 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_10874);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_10873,newpos_10874));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__10877 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10877) : cljs.core.deref.call(null,G__10877));
})());
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__10878 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10878) : cljs.core.deref.call(null,G__10878));
})()),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__10889 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10889) : cljs.core.deref.call(null,G__10889));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__10890 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10890) : cljs.core.deref.call(null,G__10890));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var G__10891 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__10892 = (offset + (function (){var pred__10893 = cljs.core._EQ_;
var expr__10894 = relative_to;
if(cljs.core.truth_((pred__10893.cljs$core$IFn$_invoke$arity$2 ? pred__10893.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$block,expr__10894) : pred__10893.call(null,cljs.core.cst$kw$block,expr__10894)))){
var G__10896 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10896) : cljs.core.deref.call(null,G__10896));
} else {
if(cljs.core.truth_((pred__10893.cljs$core$IFn$_invoke$arity$2 ? pred__10893.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$current,expr__10894) : pred__10893.call(null,cljs.core.cst$kw$current,expr__10894)))){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__10897 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10897) : cljs.core.deref.call(null,G__10897));
})()));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10894)].join('')));
}
}
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10891,G__10892) : cljs.core.reset_BANG_.call(null,G__10891,G__10892));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__10898 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10898) : cljs.core.deref.call(null,G__10898));
})());
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1((function (){var G__10900 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10900) : cljs.core.deref.call(null,G__10900));
})());
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.format_simple_number;
cljs.pprint.write_option_table = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$right_DASH_margin,cljs.core.cst$kw$circle,cljs.core.cst$kw$lines,cljs.core.cst$kw$suppress_DASH_namespaces,cljs.core.cst$kw$radix,cljs.core.cst$kw$level,cljs.core.cst$kw$readably,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$length,cljs.core.cst$kw$pretty,cljs.core.cst$kw$base],[new cljs.core.Var(function(){return cljs.pprint._STAR_print_miser_width_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_miser_DASH_width_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_miser_DASH_width_STAR_,"resources\\public\\js\\compiled\\min\\cljs\\pprint.cljs",21,1,true,632,637,cljs.core.List.EMPTY,"The column at which to enter miser style. Depending on the dispatch table,\nmiser style add newlines in more places to try to keep lines short allowing for further\nlevels of nesting.",(cljs.core.truth_(cljs.pprint._STAR_print_miser_width_STAR_)?cljs.pprint._STAR_print_miser_width_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_right_margin_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_right_DASH_margin_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_right_DASH_margin_STAR_,"resources\\public\\js\\compiled\\min\\cljs\\pprint.cljs",22,1,true,625,630,cljs.core.List.EMPTY,"Pretty printing will try to avoid anything going beyond this column.\nSet it to nil to have pprint let the line be arbitrarily long. This will ignore all\nnon-mandatory newlines.",(cljs.core.truth_(cljs.pprint._STAR_print_right_margin_STAR_)?cljs.pprint._STAR_print_right_margin_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_circle_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_circle_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_circle_STAR_,"resources\\public\\js\\compiled\\min\\cljs\\pprint.cljs",15,1,true,646,649,cljs.core.List.EMPTY,"Mark circular structures (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_circle_STAR_)?cljs.pprint._STAR_print_circle_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_lines_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_lines_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_lines_STAR_,"resources\\public\\js\\compiled\\min\\cljs\\pprint.cljs",14,1,true,640,643,cljs.core.List.EMPTY,"Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_lines_STAR_)?cljs.pprint._STAR_print_lines_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_suppress_namespaces_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_suppress_DASH_namespaces_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_suppress_DASH_namespaces_STAR_,"resources\\public\\js\\compiled\\min\\cljs\\pprint.cljs",28,1,true,657,661,cljs.core.List.EMPTY,"Don't print namespaces with symbols. This is particularly useful when\npretty printing the results of macro expansions",(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)?cljs.pprint._STAR_print_suppress_namespaces_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_radix_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_radix_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_radix_STAR_,"resources\\public\\js\\compiled\\min\\cljs\\pprint.cljs",14,1,true,665,670,cljs.core.List.EMPTY,"Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,\nor 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the\nradix specifier is in the form #XXr where XX is the decimal value of *print-base* ",(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?cljs.pprint._STAR_print_radix_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_level_STAR_;},cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_level_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$jsdoc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$_STAR_print_DASH_level_STAR_,"cljs/core.cljs",16,1,true,114,125,cljs.core.List.EMPTY,"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@type {null|number}"], null),(cljs.core.truth_(cljs.core._STAR_print_level_STAR_)?cljs.core._STAR_print_level_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_readably_STAR_;},cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_readably_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$_STAR_print_DASH_readably_STAR_,"cljs/core.cljs",19,1,true,81,87,cljs.core.List.EMPTY,"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",(cljs.core.truth_(cljs.core._STAR_print_readably_STAR_)?cljs.core._STAR_print_readably_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pprint_dispatch_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_pprint_DASH_dispatch_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_pprint_DASH_dispatch_STAR_,"resources\\public\\js\\compiled\\min\\cljs\\pprint.cljs",25,1,true,619,623,cljs.core.List.EMPTY,"The pretty print dispatch function. Use with-pprint-dispatch or\nset-pprint-dispatch to modify.",(cljs.core.truth_(cljs.pprint._STAR_print_pprint_dispatch_STAR_)?cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_length_STAR_;},cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_length_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$jsdoc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$_STAR_print_DASH_length_STAR_,"cljs/core.cljs",17,1,true,105,112,cljs.core.List.EMPTY,"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@type {null|number}"], null),(cljs.core.truth_(cljs.core._STAR_print_length_STAR_)?cljs.core._STAR_print_length_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pretty_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_pretty_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_pretty_STAR_,"resources\\public\\js\\compiled\\min\\cljs\\pprint.cljs",16,1,true,615,617,cljs.core.List.EMPTY,"Bind to true if you want write to use pretty printing",(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)?cljs.pprint._STAR_print_pretty_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_base_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_base_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_base_STAR_,"resources\\public\\js\\compiled\\min\\cljs\\pprint.cljs",13,1,true,672,675,cljs.core.List.EMPTY,"The base to use for printing integers and rationals.",(cljs.core.truth_(cljs.pprint._STAR_print_base_STAR_)?cljs.pprint._STAR_print_base_STAR_.cljs$lang$test:null)]))]);
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__10901_SHARP_){
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__10901_SHARP_));
if(cljs.core.truth_(temp__4425__auto__)){
var v = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__10901_SHARP_)], null);
} else {
return null;
}
}),cljs.core.array_seq([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__4656__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__4656__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1((function (){var G__10907 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10907) : cljs.core.deref.call(null,G__10907));
})());
} else {
return and__4656__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4656__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4656__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})();
if(cljs.core.not(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10924 = arguments.length;
var i__5727__auto___10925 = (0);
while(true){
if((i__5727__auto___10925 < len__5726__auto___10924)){
args__5733__auto__.push((arguments[i__5727__auto___10925]));

var G__10926 = (i__5727__auto___10925 + (1));
i__5727__auto___10925 = G__10926;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_10910 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_10911 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_10912 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_10913 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_10914 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_10915 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_10916 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_10917 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_10918 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_10919 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_10920 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_10921 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__10313__auto___10927 = base_writer;
var new_writer__10314__auto___10928 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__10313__auto___10927));
var _STAR_out_STAR_10922_10929 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__10314__auto___10928)?cljs.pprint.make_pretty_writer(base_writer__10313__auto___10927,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__10313__auto___10927);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_10922_10929;
}} else {
var _STAR_out_STAR_10923_10930 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_10923_10930;
}}

if(optval === true){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
} else {
}

if((optval == null)){
return [cljs.core.str(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_10921;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_10920;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_10919;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_10918;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_10917;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_10916;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_10915;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_10914;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_10913;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_10912;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_10911;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_10910;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq10908){
var G__10909 = cljs.core.first(seq10908);
var seq10908__$1 = cljs.core.next(seq10908);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__10909,seq10908__$1);
});
cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var args10931 = [];
var len__5726__auto___10937 = arguments.length;
var i__5727__auto___10938 = (0);
while(true){
if((i__5727__auto___10938 < len__5726__auto___10937)){
args10931.push((arguments[i__5727__auto___10938]));

var G__10939 = (i__5727__auto___10938 + (1));
i__5727__auto___10938 = G__10939;
continue;
} else {
}
break;
}

var G__10933 = args10931.length;
switch (G__10933) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10931.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_10934 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_10934;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__10313__auto__ = writer;
var new_writer__10314__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__10313__auto__));
var _STAR_out_STAR_10935 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__10314__auto__)?cljs.pprint.make_pretty_writer(base_writer__10313__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__10313__auto__);

try{var _STAR_print_pretty_STAR_10936_10941 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_10936_10941;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_10935;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;
cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error([cljs.core.str("Bad argument: "),cljs.core.str(arg),cljs.core.str(". It must be one of "),cljs.core.str(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4656__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4656__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4656__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
cljs.pprint.compile_format;
cljs.pprint.execute_format;
cljs.pprint.init_navigator;
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10945 = arguments.length;
var i__5727__auto___10946 = (0);
while(true){
if((i__5727__auto___10946 < len__5726__auto___10945)){
args__5733__auto__.push((arguments[i__5727__auto___10946]));

var G__10947 = (i__5727__auto___10946 + (1));
i__5727__auto___10946 = G__10947;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq10942){
var G__10943 = cljs.core.first(seq10942);
var seq10942__$1 = cljs.core.next(seq10942);
var G__10944 = cljs.core.first(seq10942__$1);
var seq10942__$2 = cljs.core.next(seq10942__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__10943,G__10944,seq10942__$2);
});
cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str(message),cljs.core.str("\n"),cljs.core.str(cljs.pprint._STAR_format_str_STAR_),cljs.core.str("\n"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),cljs.core.str("^"),cljs.core.str("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k10949,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__10951 = (((k10949 instanceof cljs.core.Keyword))?k10949.fqn:null);
switch (G__10951) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10949,else__5285__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$ = true;

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10948){
var self__ = this;
var G__10948__$1 = this;
return (new cljs.core.RecordIter((0),G__10948__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__10948){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__10952 = cljs.core.keyword_identical_QMARK_;
var expr__10953 = k__5290__auto__;
if(cljs.core.truth_((pred__10952.cljs$core$IFn$_invoke$arity$2 ? pred__10952.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$seq,expr__10953) : pred__10952.call(null,cljs.core.cst$kw$seq,expr__10953)))){
return (new cljs.pprint.arg_navigator(G__10948,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10952.cljs$core$IFn$_invoke$arity$2 ? pred__10952.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rest,expr__10953) : pred__10952.call(null,cljs.core.cst$kw$rest,expr__10953)))){
return (new cljs.pprint.arg_navigator(self__.seq,G__10948,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10952.cljs$core$IFn$_invoke$arity$2 ? pred__10952.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos,expr__10953) : pred__10952.call(null,cljs.core.cst$kw$pos,expr__10953)))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__10948,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__10948),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__10948){
var self__ = this;
var this__5281__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__10948,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__10950){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__10950),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__10950),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__10950),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10950,cljs.core.cst$kw$seq,cljs.core.array_seq([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0)),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__10957 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10957,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10957,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.relative_reposition;
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__10960 = navigator;
var G__10961 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__10960,G__10961) : cljs.pprint.relative_reposition.call(null,G__10960,G__10961));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k10963,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__10965 = (((k10963 instanceof cljs.core.Keyword))?k10963.fqn:null);
switch (G__10965) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10963,else__5285__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$ = true;

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10962){
var self__ = this;
var G__10962__$1 = this;
return (new cljs.core.RecordIter((0),G__10962__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__10962){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__10966 = cljs.core.keyword_identical_QMARK_;
var expr__10967 = k__5290__auto__;
if(cljs.core.truth_((pred__10966.cljs$core$IFn$_invoke$arity$2 ? pred__10966.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func,expr__10967) : pred__10966.call(null,cljs.core.cst$kw$func,expr__10967)))){
return (new cljs.pprint.compiled_directive(G__10962,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10966.cljs$core$IFn$_invoke$arity$2 ? pred__10966.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$def,expr__10967) : pred__10966.call(null,cljs.core.cst$kw$def,expr__10967)))){
return (new cljs.pprint.compiled_directive(self__.func,G__10962,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10966.cljs$core$IFn$_invoke$arity$2 ? pred__10966.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,expr__10967) : pred__10966.call(null,cljs.core.cst$kw$params,expr__10967)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__10962,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10966.cljs$core$IFn$_invoke$arity$2 ? pred__10966.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$offset,expr__10967) : pred__10966.call(null,cljs.core.cst$kw$offset,expr__10967)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__10962,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__10962),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__10962){
var self__ = this;
var this__5281__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__10962,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__10964){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__10964),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__10964),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__10964),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__10964),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10964,cljs.core.cst$kw$func,cljs.core.array_seq([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0)),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__10970,navigator){
var vec__10974 = p__10970;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10974,(0),null);
var vec__10975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10974,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10975,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10975,(1),null);
var vec__10976 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10976,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10976,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__10978 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10978,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10978,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.opt_base_str;
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str(n),cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4668__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return [cljs.core.str("#"),cljs.core.str(cljs.pprint._STAR_print_base_STAR_),cljs.core.str("r")].join('');
}
})():null)),cljs.core.str((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__10980 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10980,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10980,(1),null);
var base_output = (function (){var or__4668__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(chars),cljs.core.str(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(base_output),cljs.core.str(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__10981_SHARP_){
if((p1__10981_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__10981_SHARP_,base),cljs.core.quot(p1__10981_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__10982_SHARP_){
if((p1__10982_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__10982_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__10982_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__10985 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10985,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10985,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_10986 = (arg < (0));
var pos_arg_10987 = ((neg_10986)?(- arg):arg);
var raw_str_10988 = cljs.pprint.opt_base_str(base,pos_arg_10987);
var group_str_10989 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_10986,pos_arg_10987,raw_str_10988,vec__10985,arg,arg_navigator__$1){
return (function (p1__10983_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__10983_SHARP_);
});})(neg_10986,pos_arg_10987,raw_str_10988,vec__10985,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_10988));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_10988);
var signed_str_10990 = ((neg_10986)?[cljs.core.str("-"),cljs.core.str(group_str_10989)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?[cljs.core.str("+"),cljs.core.str(group_str_10989)].join(''):group_str_10989
));
var padded_str_10991 = (((signed_str_10990.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_10990.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str(signed_str_10990)].join(''):signed_str_10990);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([padded_str_10991], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str(this$),cljs.core.str((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[cljs.core.str(" "),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__10992 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str(this$),cljs.core.str(" "),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__10993 = (pos - (1));
var G__10994 = cljs.core.first(remainder);
var G__10995 = cljs.core.next(remainder);
acc = G__10992;
pos = G__10993;
this$ = G__10994;
remainder = G__10995;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__10997 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10997,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10997,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["zero"], 0));
} else {
var abs_arg_10998 = (((arg < (0)))?(- arg):arg);
var parts_10999 = cljs.pprint.remainders((1000),abs_arg_10998);
if((cljs.core.count(parts_10999) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_11000 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_10999);
var full_str_11001 = cljs.pprint.add_english_scales(parts_strs_11000,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str(full_str_11001)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__11003 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11003,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11003,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["zeroth"], 0));
} else {
var abs_arg_11004 = (((arg < (0)))?(- arg):arg);
var parts_11005 = cljs.pprint.remainders((1000),abs_arg_11004);
if((cljs.core.count(parts_11005) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_11006 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_11005));
var head_str_11007 = cljs.pprint.add_english_scales(parts_strs_11006,(1));
var tail_str_11008 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_11005));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str((((!(cljs.core.empty_QMARK_(head_str_11007))) && (!(cljs.core.empty_QMARK_(tail_str_11008))))?[cljs.core.str(head_str_11007),cljs.core.str(", "),cljs.core.str(tail_str_11008)].join(''):((!(cljs.core.empty_QMARK_(head_str_11007)))?[cljs.core.str(head_str_11007),cljs.core.str("th")].join(''):tail_str_11008
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_11009 = cljs.core.rem(arg,(100));
var not_teens_11010 = (((11) < low_two_digits_11009)) || (((19) > low_two_digits_11009));
var low_digit_11011 = cljs.core.rem(low_two_digits_11009,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((low_digit_11011 === (1))) && (not_teens_11010))?"st":((((low_digit_11011 === (2))) && (not_teens_11010))?"nd":((((low_digit_11011 === (3))) && (not_teens_11010))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__11013 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11013,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11013,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_11014 = cljs.pprint.remainders((10),arg);
var acc_11015 = cljs.core.PersistentVector.EMPTY;
var pos_11016 = (cljs.core.count(digits_11014) - (1));
var digits_11017__$1 = digits_11014;
while(true){
if(cljs.core.empty_QMARK_(digits_11017__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_11015)], 0));
} else {
var digit_11018 = cljs.core.first(digits_11017__$1);
var G__11019 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_11018))?acc_11015:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_11015,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_11016),(digit_11018 - (1)))));
var G__11020 = (pos_11016 - (1));
var G__11021 = cljs.core.next(digits_11017__$1);
acc_11015 = G__11019;
pos_11016 = G__11020;
digits_11017__$1 = G__11021;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__11023 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11023,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11023,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(special)?special:(((base_char < (32)))?[cljs.core.str("Control-"),cljs.core.str(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__11028 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11028,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11028,(1),null);
var pred__11029_11032 = cljs.core._EQ_;
var expr__11030_11033 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((pred__11029_11032.cljs$core$IFn$_invoke$arity$2 ? pred__11029_11032.cljs$core$IFn$_invoke$arity$2("o",expr__11030_11033) : pred__11029_11032.call(null,"o",expr__11030_11033)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.array_seq([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__11029_11032.cljs$core$IFn$_invoke$arity$2 ? pred__11029_11032.cljs$core$IFn$_invoke$arity$2("u",expr__11030_11033) : pred__11029_11032.call(null,"u",expr__11030_11033)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.array_seq([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__11029_11032.cljs$core$IFn$_invoke$arity$2 ? pred__11029_11032.cljs$core$IFn$_invoke$arity$2(null,expr__11030_11033) : pred__11029_11032.call(null,null,expr__11030_11033)))){
cljs.pprint.print_char(c);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11030_11033)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__11035 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11035,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11035,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__11038 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11038,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11038,(1),null);
var vec__11039 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11039,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11039,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__11041 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11041,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11041,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__11042 = (i - (1));
i = G__11042;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4668__auto__ = d;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4999__auto__ = (2);
var y__5000__auto__ = w;
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4999__auto__ = (e + (1));
var y__5000__auto__ = (w__$1 - (1));
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})():(w__$1 + e)
));
var vec__11044 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("0"),cljs.core.str(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11044,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11044,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11044,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11044,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__11046 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11046,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11046,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str(m1),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),cljs.core.str("."),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),cljs.core.str("."),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__11051 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11051,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11051,(1),null);
var vec__11052 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11052,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11052,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__11053 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11053,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11053,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4668__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__11054 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11054,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11054,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11054,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4656__auto__ = w;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = d;
if(cljs.core.truth_(and__4656__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_11055 = cljs.core.count(fixed_repr__$1);
var signed_len_11056 = (cljs.core.truth_(add_sign)?(len_11055 + (1)):len_11055);
var prepend_zero_11057__$1 = (prepend_zero) && (!((signed_len_11056 >= w)));
var append_zero_11058__$1 = (append_zero) && (!((signed_len_11056 >= w)));
var full_len_11059 = (((prepend_zero_11057__$1) || (append_zero_11058__$1))?(signed_len_11056 + (1)):signed_len_11056);
if(cljs.core.truth_((function (){var and__4656__auto__ = (full_len_11059 > w);
if(and__4656__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4656__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_11059),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero_11057__$1)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero_11058__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__11066 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11066,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11066,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__11068_11072 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__11069_11073 = G__11068_11072;
var mantissa_11074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11069_11073,(0),null);
var exp_11075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11069_11073,(1),null);
var G__11068_11076__$1 = G__11068_11072;
while(true){
var vec__11070_11077 = G__11068_11076__$1;
var mantissa_11078__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11070_11077,(0),null);
var exp_11079__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11070_11077,(1),null);
var w_11080 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_11081 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_11082 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_11083 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_11084 = (function (){var or__4668__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "E";
}
})();
var add_sign_11085 = (function (){var or__4668__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_11086 = (k_11083 <= (0));
var scaled_exp_11087 = (exp_11079__$1 - (k_11083 - (1)));
var scaled_exp_str_11088 = [cljs.core.str(Math.abs(scaled_exp_11087))].join('');
var scaled_exp_str_11089__$1 = [cljs.core.str(expchar_11084),cljs.core.str((((scaled_exp_11087 < (0)))?"-":"+")),cljs.core.str((cljs.core.truth_(e_11082)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_11082 - cljs.core.count(scaled_exp_str_11088)),"0")):null)),cljs.core.str(scaled_exp_str_11088)].join('');
var exp_width_11090 = cljs.core.count(scaled_exp_str_11089__$1);
var base_mantissa_width_11091 = cljs.core.count(mantissa_11078__$1);
var scaled_mantissa_11092 = [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_11083),"0"))),cljs.core.str(mantissa_11078__$1),cljs.core.str((cljs.core.truth_(d_11081)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_11081 - (base_mantissa_width_11091 - (1))) - (((k_11083 < (0)))?(- k_11083):(0))),"0")):null))].join('');
var w_mantissa_11093 = (cljs.core.truth_(w_11080)?(w_11080 - exp_width_11090):null);
var vec__11071_11094 = cljs.pprint.round_str(scaled_mantissa_11092,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_11083,(0)))?(d_11081 - (1)):(((k_11083 > (0)))?d_11081:(((k_11083 < (0)))?(d_11081 - (1)):null))),(cljs.core.truth_(w_mantissa_11093)?(w_mantissa_11093 - (cljs.core.truth_(add_sign_11085)?(1):(0))):null));
var rounded_mantissa_11095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11071_11094,(0),null);
var __11096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11071_11094,(1),null);
var incr_exp_11097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11071_11094,(2),null);
var full_mantissa_11098 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_11095,k_11083);
var append_zero_11099 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_11083,cljs.core.count(rounded_mantissa_11095))) && ((d_11081 == null));
if(cljs.core.not(incr_exp_11097)){
if(cljs.core.truth_(w_11080)){
var len_11100 = (cljs.core.count(full_mantissa_11098) + exp_width_11090);
var signed_len_11101 = (cljs.core.truth_(add_sign_11085)?(len_11100 + (1)):len_11100);
var prepend_zero_11102__$1 = (prepend_zero_11086) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_11101,w_11080)));
var full_len_11103 = ((prepend_zero_11102__$1)?(signed_len_11101 + (1)):signed_len_11101);
var append_zero_11104__$1 = (append_zero_11099) && ((full_len_11103 < w_11080));
if(cljs.core.truth_((function (){var and__4656__auto__ = (function (){var or__4668__auto__ = (full_len_11103 > w_11080);
if(or__4668__auto__){
return or__4668__auto__;
} else {
var and__4656__auto__ = e_11082;
if(cljs.core.truth_(and__4656__auto__)){
return ((exp_width_11090 - (2)) > e_11082);
} else {
return and__4656__auto__;
}
}
})();
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4656__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_11080,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_11080 - full_len_11103) - ((append_zero_11104__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign_11085)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_11102__$1)?"0":null)),cljs.core.str(full_mantissa_11098),cljs.core.str(((append_zero_11104__$1)?"0":null)),cljs.core.str(scaled_exp_str_11089__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_(add_sign_11085)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_11086)?"0":null)),cljs.core.str(full_mantissa_11098),cljs.core.str(((append_zero_11099)?"0":null)),cljs.core.str(scaled_exp_str_11089__$1)].join('')], 0));
}
} else {
var G__11105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_11095,(exp_11079__$1 + (1))], null);
G__11068_11076__$1 = G__11105;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__11108 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11108,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11108,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__11109 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11109,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11109,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4999__auto__ = cljs.core.count(mantissa);
var y__5000__auto__ = (function (){var x__5006__auto__ = n;
var y__5007__auto__ = (7);
return ((x__5006__auto__ < y__5007__auto__) ? x__5006__auto__ : y__5007__auto__);
})();
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__11113 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11113,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11113,(1),null);
var vec__11114 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11114,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11114,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4668__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (arg < (0));
}
})();
var vec__11115 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4656__auto__)){
return add_sign;
} else {
return and__4656__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__4656__auto__){
return add_sign;
} else {
return and__4656__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__11117 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11117,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11117,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__11119 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11119,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11119,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__11121 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11121,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11121,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__11124 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11124,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11124,(1),null);
var vec__11125 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11125,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11125,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4668__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__4668__auto__){
return or__4668__auto__;
} else {
var and__4656__auto__ = max_count;
if(cljs.core.truth_(and__4656__auto__)){
return (count >= max_count);
} else {
return and__4656__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__11126 = (count + (1));
var G__11127 = iter_result;
var G__11128 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__11126;
args__$1 = G__11127;
last_pos = G__11128;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__11131 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11131,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11131,(1),null);
var vec__11132 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11132,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11132,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4668__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__4668__auto__){
return or__4668__auto__;
} else {
var and__4656__auto__ = max_count;
if(cljs.core.truth_(and__4656__auto__)){
return (count >= max_count);
} else {
return and__4656__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__11133 = (count + (1));
var G__11134 = cljs.core.next(arg_list__$1);
count = G__11133;
arg_list__$1 = G__11134;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__11136 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4668__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__4668__auto__){
return or__4668__auto__;
} else {
var and__4656__auto__ = max_count;
if(cljs.core.truth_(and__4656__auto__)){
return (count >= max_count);
} else {
return and__4656__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__11137 = (count + (1));
var G__11138 = iter_result;
var G__11139 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__11137;
navigator__$2 = G__11138;
last_pos = G__11139;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__11142 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11142,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11142,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4668__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__4668__auto__){
return or__4668__auto__;
} else {
var and__4656__auto__ = max_count;
if(cljs.core.truth_(and__4656__auto__)){
return (count >= max_count);
} else {
return and__4656__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__11143 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11143,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11143,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__11144 = (count + (1));
var G__11145 = navigator__$3;
count = G__11144;
navigator__$2 = G__11145;
continue;
}
}
break;
}
});
cljs.pprint.format_logical_block;
cljs.pprint.justify_clauses;
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__11148 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_11149 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_11149;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11148,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11148,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__11150 = cljs.core.next(clauses__$1);
var G__11151 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__11152 = iter_result;
clauses__$1 = G__11150;
acc = G__11151;
navigator__$1 = G__11152;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__11158 = (function (){var temp__4425__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4425__auto__)){
var else$ = temp__4425__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__11159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11158,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11159,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11158,(1),null);
var navigator__$1 = (function (){var or__4668__auto__ = new_navigator;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return navigator;
}
})();
var vec__11160 = (function (){var temp__4425__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4425__auto__)){
var p = temp__4425__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11160,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11160,(1),null);
var navigator__$2 = (function (){var or__4668__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4668__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4668__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__11161 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11161,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11161,(1),null);
var slots = (function (){var x__4999__auto__ = (1);
var y__5000__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4999__auto__ = minpad;
var y__5000__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4656__auto__ = eol_str;
if(cljs.core.truth_(and__4656__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__11162 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11162) : cljs.core.deref.call(null,G__11162));
})())) + min_remaining) + result_columns) > max_columns);
} else {
return and__4656__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eol_str], 0));
} else {
}

var slots_11163__$1 = slots;
var extra_pad_11164__$1 = extra_pad;
var strs_11165__$1 = strs;
var pad_only_11166 = (function (){var or__4668__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_11165__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_11165__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(((cljs.core.not(pad_only_11166))?cljs.core.first(strs_11165__$1):null)),cljs.core.str((cljs.core.truth_((function (){var or__4668__auto__ = pad_only_11166;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = cljs.core.next(strs_11165__$1);
if(or__4668__auto____$1){
return or__4668__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str((((extra_pad_11164__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__11167 = (slots_11163__$1 - (1));
var G__11168 = (extra_pad_11164__$1 - (1));
var G__11169 = (cljs.core.truth_(pad_only_11166)?strs_11165__$1:cljs.core.next(strs_11165__$1));
var G__11170 = false;
slots_11163__$1 = G__11167;
extra_pad_11164__$1 = G__11168;
strs_11165__$1 = G__11169;
pad_only_11166 = G__11170;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint11177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint11177 = (function (downcase_writer,writer,meta11178){
this.downcase_writer = downcase_writer;
this.writer = writer;
this.meta11178 = meta11178;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint11177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11179,meta11178__$1){
var self__ = this;
var _11179__$1 = this;
return (new cljs.pprint.t_cljs$pprint11177(self__.downcase_writer,self__.writer,meta11178__$1));
});

cljs.pprint.t_cljs$pprint11177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11179){
var self__ = this;
var _11179__$1 = this;
return self__.meta11178;
});

cljs.pprint.t_cljs$pprint11177.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint11177.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11180 = cljs.core._EQ_;
var expr__11181 = cljs.core.type(x);
if(cljs.core.truth_((pred__11180.cljs$core$IFn$_invoke$arity$2 ? pred__11180.cljs$core$IFn$_invoke$arity$2(String,expr__11181) : pred__11180.call(null,String,expr__11181)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__11180.cljs$core$IFn$_invoke$arity$2 ? pred__11180.cljs$core$IFn$_invoke$arity$2(Number,expr__11181) : pred__11180.call(null,Number,expr__11181)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11181)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint11177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$downcase_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, converting all characters to lower case"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$meta11178], null);
});

cljs.pprint.t_cljs$pprint11177.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint11177.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint11177";

cljs.pprint.t_cljs$pprint11177.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.pprint/t_cljs$pprint11177");
});

cljs.pprint.__GT_t_cljs$pprint11177 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint11177(downcase_writer__$1,writer__$1,meta11178){
return (new cljs.pprint.t_cljs$pprint11177(downcase_writer__$1,writer__$1,meta11178));
});

}

return (new cljs.pprint.t_cljs$pprint11177(cljs$pprint$downcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint11189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint11189 = (function (upcase_writer,writer,meta11190){
this.upcase_writer = upcase_writer;
this.writer = writer;
this.meta11190 = meta11190;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint11189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11191,meta11190__$1){
var self__ = this;
var _11191__$1 = this;
return (new cljs.pprint.t_cljs$pprint11189(self__.upcase_writer,self__.writer,meta11190__$1));
});

cljs.pprint.t_cljs$pprint11189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11191){
var self__ = this;
var _11191__$1 = this;
return self__.meta11190;
});

cljs.pprint.t_cljs$pprint11189.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint11189.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11192 = cljs.core._EQ_;
var expr__11193 = cljs.core.type(x);
if(cljs.core.truth_((pred__11192.cljs$core$IFn$_invoke$arity$2 ? pred__11192.cljs$core$IFn$_invoke$arity$2(String,expr__11193) : pred__11192.call(null,String,expr__11193)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__11192.cljs$core$IFn$_invoke$arity$2 ? pred__11192.cljs$core$IFn$_invoke$arity$2(Number,expr__11193) : pred__11192.call(null,Number,expr__11193)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11193)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint11189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$upcase_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, converting all characters to upper case"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$meta11190], null);
});

cljs.pprint.t_cljs$pprint11189.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint11189.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint11189";

cljs.pprint.t_cljs$pprint11189.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.pprint/t_cljs$pprint11189");
});

cljs.pprint.__GT_t_cljs$pprint11189 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint11189(upcase_writer__$1,writer__$1,meta11190){
return (new cljs.pprint.t_cljs$pprint11189(upcase_writer__$1,writer__$1,meta11190));
});

}

return (new cljs.pprint.t_cljs$pprint11189(cljs$pprint$upcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__4656__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = f;
if(cljs.core.truth_(and__4656__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())?[cljs.core.str(clojure.string.upper_case(f)),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4656__auto__ = m;
if(cljs.core.truth_(and__4656__auto__)){
return (m.index + (1));
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.pprint.t_cljs$pprint11207 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint11207 = (function (capitalize_word_writer,writer,last_was_whitespace_QMARK_,meta11208){
this.capitalize_word_writer = capitalize_word_writer;
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta11208 = meta11208;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint11207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_11209,meta11208__$1){
var self__ = this;
var _11209__$1 = this;
return (new cljs.pprint.t_cljs$pprint11207(self__.capitalize_word_writer,self__.writer,self__.last_was_whitespace_QMARK_,meta11208__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint11207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_11209){
var self__ = this;
var _11209__$1 = this;
return self__.meta11208;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint11207.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint11207.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11210 = cljs.core._EQ_;
var expr__11211 = cljs.core.type(x);
if(cljs.core.truth_((pred__11210.cljs$core$IFn$_invoke$arity$2 ? pred__11210.cljs$core$IFn$_invoke$arity$2(String,expr__11211) : pred__11210.call(null,String,expr__11211)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.last_was_whitespace_QMARK_) : cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))));

if((s.length > (0))){
var G__11214 = self__.last_was_whitespace_QMARK_;
var G__11215 = (function (){var G__11216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__11216);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11214,G__11215) : cljs.core.reset_BANG_.call(null,G__11214,G__11215));
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__11210.cljs$core$IFn$_invoke$arity$2 ? pred__11210.cljs$core$IFn$_invoke$arity$2(Number,expr__11211) : pred__11210.call(null,Number,expr__11211)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.last_was_whitespace_QMARK_) : cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

var G__11217 = self__.last_was_whitespace_QMARK_;
var G__11218 = goog.string.isEmptyOrWhitespace(c);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11217,G__11218) : cljs.core.reset_BANG_.call(null,G__11217,G__11218));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11211)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint11207.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$capitalize_DASH_word_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, capitalizing all words"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta11208], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint11207.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint11207.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint11207";

cljs.pprint.t_cljs$pprint11207.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.pprint/t_cljs$pprint11207");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint11207 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint11207(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta11208){
return (new cljs.pprint.t_cljs$pprint11207(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta11208));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint11207(cljs$pprint$capitalize_word_writer,writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
if(typeof cljs.pprint.t_cljs$pprint11225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint11225 = (function (init_cap_writer,writer,capped,meta11226){
this.init_cap_writer = init_cap_writer;
this.writer = writer;
this.capped = capped;
this.meta11226 = meta11226;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint11225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_11227,meta11226__$1){
var self__ = this;
var _11227__$1 = this;
return (new cljs.pprint.t_cljs$pprint11225(self__.init_cap_writer,self__.writer,self__.capped,meta11226__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint11225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_11227){
var self__ = this;
var _11227__$1 = this;
return self__.meta11226;
});})(capped))
;

cljs.pprint.t_cljs$pprint11225.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint11225.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11228 = cljs.core._EQ_;
var expr__11229 = cljs.core.type(x);
if(cljs.core.truth_((pred__11228.cljs$core$IFn$_invoke$arity$2 ? pred__11228.cljs$core$IFn$_invoke$arity$2(String,expr__11229) : pred__11228.call(null,String,expr__11229)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.capped) : cljs.core.deref.call(null,self__.capped)))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4656__auto__ = m;
if(cljs.core.truth_(and__4656__auto__)){
return m.index;
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.capped,true) : cljs.core.reset_BANG_.call(null,self__.capped,true));
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__11228.cljs$core$IFn$_invoke$arity$2 ? pred__11228.cljs$core$IFn$_invoke$arity$2(Number,expr__11229) : pred__11228.call(null,Number,expr__11229)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.capped) : cljs.core.deref.call(null,self__.capped)));
if(and__4656__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__4656__auto__;
}
})())){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.capped,true) : cljs.core.reset_BANG_.call(null,self__.capped,true));

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11229)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint11225.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$init_DASH_cap_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, capitalizing the first word"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta11226], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint11225.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint11225.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint11225";

cljs.pprint.t_cljs$pprint11225.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.pprint/t_cljs$pprint11225");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint11225 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint11225(init_cap_writer__$1,writer__$1,capped__$1,meta11226){
return (new cljs.pprint.t_cljs$pprint11225(init_cap_writer__$1,writer__$1,capped__$1,meta11226));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint11225(cljs$pprint$init_cap_writer,writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_11232 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_11232;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || (cljs.core._STAR_out_STAR_.cljs$core$IDeref$))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__11236 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11236) : cljs.core.deref.call(null,G__11236));
})()))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_11239 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_11240 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_11241 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__11238 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11238) : cljs.core.deref.call(null,G__11238));
})()));
var space_count_11242 = (((current_11241 < colnum_11239))?(colnum_11239 - current_11241):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_11240,(0)))?(0):(colinc_11240 - cljs.core.rem((current_11241 - colnum_11239),colinc_11240))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_11242," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_11245 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_11246 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_11247 = (colrel_11245 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__11244 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11244) : cljs.core.deref.call(null,G__11244));
})())));
var offset_11248 = (((colinc_11246 > (0)))?cljs.core.rem(start_col_11247,colinc_11246):(0));
var space_count_11249 = (colrel_11245 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_11248))?(0):(colinc_11246 - offset_11248)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_11249," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__11253 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11253,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11253,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11254_11256 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11255_11257 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11255_11257;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11254_11256;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__11258_SHARP_,p2__11259_SHARP_,p3__11260_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__11258_SHARP_,p2__11259_SHARP_,p3__11260_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__11261_SHARP_,p2__11262_SHARP_,p3__11263_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__11261_SHARP_,p2__11262_SHARP_,p3__11263_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__11264_SHARP_,p2__11265_SHARP_,p3__11266_SHARP_){
return cljs.pprint.format_integer((10),p1__11264_SHARP_,p2__11265_SHARP_,p3__11266_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__11267_SHARP_,p2__11268_SHARP_,p3__11269_SHARP_){
return cljs.pprint.format_integer((2),p1__11267_SHARP_,p2__11268_SHARP_,p3__11269_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__11270_SHARP_,p2__11271_SHARP_,p3__11272_SHARP_){
return cljs.pprint.format_integer((8),p1__11270_SHARP_,p2__11271_SHARP_,p3__11272_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__11273_SHARP_,p2__11274_SHARP_,p3__11275_SHARP_){
return cljs.pprint.format_integer((16),p1__11273_SHARP_,p2__11274_SHARP_,p3__11275_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__11276_SHARP_,p2__11277_SHARP_,p3__11278_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__11276_SHARP_),p1__11276_SHARP_,p2__11277_SHARP_,p3__11278_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4656__auto__;
}
})())){
return (function (p1__11279_SHARP_,p2__11280_SHARP_,p3__11281_SHARP_){
return cljs.pprint.format_old_roman(p1__11279_SHARP_,p2__11280_SHARP_,p3__11281_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__11282_SHARP_,p2__11283_SHARP_,p3__11284_SHARP_){
return cljs.pprint.format_new_roman(p1__11282_SHARP_,p2__11283_SHARP_,p3__11284_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__11285_SHARP_,p2__11286_SHARP_,p3__11287_SHARP_){
return cljs.pprint.format_ordinal_english(p1__11285_SHARP_,p2__11286_SHARP_,p3__11287_SHARP_);
});
} else {
return (function (p1__11288_SHARP_,p2__11289_SHARP_,p3__11290_SHARP_){
return cljs.pprint.format_cardinal_english(p1__11288_SHARP_,p2__11289_SHARP_,p3__11290_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__11300 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11300,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11300,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__5571__auto___11306 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_11307 = (0);
while(true){
if((i_11307 < n__5571__auto___11306)){
cljs.pprint.prn();

var G__11308 = (i_11307 + (1));
i_11307 = G__11308;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_11309 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_11309 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__5571__auto___11310 = (cnt_11309 - (1));
var i_11311 = (0);
while(true){
if((i_11311 < n__5571__auto___11310)){
cljs.pprint.prn();

var G__11312 = (i_11311 + (1));
i_11311 = G__11312;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__5571__auto___11313 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_11314 = (0);
while(true){
if((i_11314 < n__5571__auto___11313)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\f"], 0));

var G__11315 = (i_11314 + (1));
i_11314 = G__11315;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__11291_SHARP_,p2__11292_SHARP_,p3__11293_SHARP_){
return cljs.pprint.relative_tabulation(p1__11291_SHARP_,p2__11292_SHARP_,p3__11293_SHARP_);
});
} else {
return (function (p1__11294_SHARP_,p2__11295_SHARP_,p3__11296_SHARP_){
return cljs.pprint.absolute_tabulation(p1__11294_SHARP_,p2__11295_SHARP_,p3__11296_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__11301 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11301,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11301,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__11302 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11302,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11302,(1),null);
var vec__11303 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11303,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11303,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4656__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__11297_SHARP_,p2__11298_SHARP_,p3__11299_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__11297_SHARP_,p2__11298_SHARP_,p3__11299_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4656__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__4656__auto__ = arg1;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = arg2;
if(cljs.core.truth_(and__4656__auto____$1)){
return arg3;
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4656__auto__ = arg1;
if(cljs.core.truth_(and__4656__auto__)){
return arg2;
} else {
return and__4656__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__4668__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__11304 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11304,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11304,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__11305 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11305,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11305,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__11316){
var vec__11318 = p__11316;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11318,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11318,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11318,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__11319){
var vec__11321 = p__11319;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11321,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11321,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__11324){
var vec__11325 = p__11324;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11325,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11325,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11325,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error([cljs.core.str("Flag \""),cljs.core.str(cljs.core.first(s__$1)),cljs.core.str("\" appears more than once in a directive")].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4656__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4656__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str("\"@\" is an illegal flag for format directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4656__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4656__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str("\":\" is an illegal flag for format directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4656__auto__){
var and__4656__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4656__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return cljs.pprint.format_error([cljs.core.str("Cannot combine \"@\" and \":\" flags for format directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),(function (){var x__5006__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__5007__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__5006__auto__ < y__5007__auto__) ? x__5006__auto__ : y__5007__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.array_seq([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__11326_SHARP_,p2__11327_SHARP_){
var val = cljs.core.first(p1__11326_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__11327_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error([cljs.core.str("Parameter "),cljs.core.str(cljs.core.name(cljs.core.first(p2__11327_SHARP_))),cljs.core.str(" has bad type in directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\": "),cljs.core.str(cljs.core.type(val))].join(''),cljs.core.second(p1__11326_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__5440__auto__ = (function cljs$pprint$map_params_$_iter__11345(s__11346){
return (new cljs.core.LazySeq(null,(function (){
var s__11346__$1 = s__11346;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11346__$1);
if(temp__4425__auto__){
var s__11346__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11346__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__11346__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__11348 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__11347 = (0);
while(true){
if((i__11347 < size__5439__auto__)){
var vec__11355 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__11347);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11355,(0),null);
var vec__11356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11355,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11356,(0),null);
cljs.core.chunk_append(b__11348,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__11359 = (i__11347 + (1));
i__11347 = G__11359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11348),cljs$pprint$map_params_$_iter__11345(cljs.core.chunk_rest(s__11346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11348),null);
}
} else {
var vec__11357 = cljs.core.first(s__11346__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11357,(0),null);
var vec__11358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11357,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11358,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__11345(cljs.core.rest(s__11346__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__11328_SHARP_,p2__11329_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__11328_SHARP_,p2__11329_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11330_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__11330_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__11364 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11364,(0),null);
var vec__11365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11364,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11365,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11365,(1),null);
var vec__11366 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11366,(0),null);
var vec__11367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11366,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11367,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11367,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11367,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error([cljs.core.str("Directive \""),cljs.core.str(directive),cljs.core.str("\" is undefined")].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4656__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4656__auto__;
}
});
cljs.pprint.collect_clauses;
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__11372 = (function (){var G__11373 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__11374 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__11375 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__11373,G__11374,G__11375) : cljs.pprint.collect_clauses.call(null,G__11373,G__11374,G__11375));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11372,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11372,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__11380){
var vec__11381 = p__11380;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11381,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11381,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11381,(2),null);
var vec__11382 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11382,(0),null);
var vec__11383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11382,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11383,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11383,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11383,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11383,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,cljs.core.PersistentArrayMap.fromArray([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params], true, false)], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_11387 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_11387){
return (function (p__11388){
var vec__11389 = p__11388;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11389,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11389,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_11387))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_11387;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4668__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = cljs.core.some(cljs$pprint$needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__4668__auto____$1)){
return or__4668__auto____$1;
} else {
return cljs.core.some(cljs$pprint$needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__11390 = cljs.core.next(format__$1);
format__$1 = G__11390;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var args11391 = [];
var len__5726__auto___11397 = arguments.length;
var i__5727__auto___11398 = (0);
while(true){
if((i__5727__auto___11398 < len__5726__auto___11397)){
args11391.push((arguments[i__5727__auto___11398]));

var G__11399 = (i__5727__auto___11398 + (1));
i__5727__auto___11398 = G__11399;
continue;
} else {
}
break;
}

var G__11393 = args11391.length;
switch (G__11393) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11391.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__4656__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__4656__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_11394 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str(sb)].join('');
} else {
if(stream === true){
return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_11394;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__11395 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11395,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11395,(1),null);
var vec__11396 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11396,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11396,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;
cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__11402 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__11402) : cljs.pprint.reader_macros.call(null,G__11402));
})();
if(cljs.core.truth_((function (){var and__4656__auto__ = macro_char;
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__4656__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11406_11409 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11407_11410 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count11408_11411 = (0);
var alis_11412__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count11408_11411 < cljs.core._STAR_print_length_STAR_))){
if(alis_11412__$1){
cljs.pprint.write_out(cljs.core.first(alis_11412__$1));

if(cljs.core.next(alis_11412__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__11413 = (length_count11408_11411 + (1));
var G__11414 = cljs.core.next(alis_11412__$1);
length_count11408_11411 = G__11413;
alis_11412__$1 = G__11414;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11407_11410;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11406_11409;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11418_11421 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11419_11422 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count11420_11423 = (0);
var aseq_11424 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count11420_11423 < cljs.core._STAR_print_length_STAR_))){
if(aseq_11424){
cljs.pprint.write_out(cljs.core.first(aseq_11424));

if(cljs.core.next(aseq_11424)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__11425 = (length_count11420_11423 + (1));
var G__11426 = cljs.core.next(aseq_11424);
length_count11420_11423 = G__11425;
aseq_11424 = G__11426;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11419_11422;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11418_11421;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__10375__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__){
return (function() { 
var G__11427__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11427 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11428__i = 0, G__11428__a = new Array(arguments.length -  0);
while (G__11428__i < G__11428__a.length) {G__11428__a[G__11428__i] = arguments[G__11428__i + 0]; ++G__11428__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11428__a,0);
} 
return G__11427__delegate.call(this,args__10377__auto__);};
G__11427.cljs$lang$maxFixedArity = 0;
G__11427.cljs$lang$applyTo = (function (arglist__11429){
var args__10377__auto__ = cljs.core.seq(arglist__11429);
return G__11427__delegate(args__10377__auto__);
});
G__11427.cljs$core$IFn$_invoke$arity$variadic = G__11427__delegate;
return G__11427;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11435_11440 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11436_11441 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"{",null,"}");

var length_count11437_11442 = (0);
var aseq_11443 = cljs.core.seq(amap);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count11437_11442 < cljs.core._STAR_print_length_STAR_))){
if(aseq_11443){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11438_11444 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11439_11445 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_11443));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_11443)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11439_11445;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11438_11444;
}}


if(cljs.core.next(aseq_11443)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__11446 = (length_count11437_11442 + (1));
var G__11447 = cljs.core.next(aseq_11443);
length_count11437_11442 = G__11446;
aseq_11443 = G__11447;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11436_11441;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11435_11440;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__10375__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__){
return (function() { 
var G__11448__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11448 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11449__i = 0, G__11449__a = new Array(arguments.length -  0);
while (G__11449__i < G__11449__a.length) {G__11449__a[G__11449__i] = arguments[G__11449__i + 0]; ++G__11449__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11449__a,0);
} 
return G__11448__delegate.call(this,args__10377__auto__);};
G__11448.cljs$lang$maxFixedArity = 0;
G__11448.cljs$lang$applyTo = (function (arglist__11450){
var args__10377__auto__ = cljs.core.seq(arglist__11450);
return G__11448__delegate(args__10377__auto__);
});
G__11448.cljs$core$IFn$_invoke$arity$variadic = G__11448__delegate;
return G__11448;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4668__auto__ = (function (){var temp__4425__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = [cljs.core.str("#<"),cljs.core.str(cljs.pprint.map_ref_type(cljs.core.type(o).name)),cljs.core.str("@"),cljs.core.str(goog.getUid(o)),cljs.core.str(": ")].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11455_11459 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11456_11460 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__4656__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || (o.cljs$core$IPending$))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__4656__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__4656__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.deref.call(null,o))));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11456_11460;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11455_11459;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__10375__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__){
return (function() { 
var G__11461__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11461 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11462__i = 0, G__11462__a = new Array(arguments.length -  0);
while (G__11462__i < G__11462__a.length) {G__11462__a[G__11462__i] = arguments[G__11462__i + 0]; ++G__11462__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11462__a,0);
} 
return G__11461__delegate.call(this,args__10377__auto__);};
G__11461.cljs$lang$maxFixedArity = 0;
G__11461.cljs$lang$applyTo = (function (arglist__11463){
var args__10377__auto__ = cljs.core.seq(arglist__11463);
return G__11461__delegate(args__10377__auto__);
});
G__11461.cljs$core$IFn$_invoke$arity$variadic = G__11461__delegate;
return G__11461;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (obj.cljs$core$IDeref$))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__5581__auto__ = (function (){var G__11466 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11466) : cljs.core.atom.call(null,G__11466));
})();
var prefer_table__5582__auto__ = (function (){var G__11467 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11467) : cljs.core.atom.call(null,G__11467));
})();
var method_cache__5583__auto__ = (function (){var G__11468 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11468) : cljs.core.atom.call(null,G__11468));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__11469 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11469) : cljs.core.atom.call(null,G__11469));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.pprint_simple_code_list;
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__11478 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11478,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11478,(1),null);
var vec__11479 = reference;
var keyw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11479,(0),null);
var args = cljs.core.nthnext(vec__11479,(1));
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11480_11486 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11481_11487 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__10375__auto__ = "~w~:i";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args){
return (function() { 
var G__11488__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11488 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11489__i = 0, G__11489__a = new Array(arguments.length -  0);
while (G__11489__i < G__11489__a.length) {G__11489__a[G__11489__i] = arguments[G__11489__i + 0]; ++G__11489__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11489__a,0);
} 
return G__11488__delegate.call(this,args__10377__auto__);};
G__11488.cljs$lang$maxFixedArity = 0;
G__11488.cljs$lang$applyTo = (function (arglist__11490){
var args__10377__auto__ = cljs.core.seq(arglist__11490);
return G__11488__delegate(args__10377__auto__);
});
G__11488.cljs$core$IFn$_invoke$arity$variadic = G__11488__delegate;
return G__11488;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args))
})().call(null,keyw);

var args_11491__$1 = args;
while(true){
if(cljs.core.seq(args_11491__$1)){
(function (){var format_in__10375__auto__ = " ";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (args_11491__$1,format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args){
return (function() { 
var G__11492__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11492 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11493__i = 0, G__11493__a = new Array(arguments.length -  0);
while (G__11493__i < G__11493__a.length) {G__11493__a[G__11493__i] = arguments[G__11493__i + 0]; ++G__11493__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11493__a,0);
} 
return G__11492__delegate.call(this,args__10377__auto__);};
G__11492.cljs$lang$maxFixedArity = 0;
G__11492.cljs$lang$applyTo = (function (arglist__11494){
var args__10377__auto__ = cljs.core.seq(arglist__11494);
return G__11492__delegate(args__10377__auto__);
});
G__11492.cljs$core$IFn$_invoke$arity$variadic = G__11492__delegate;
return G__11492;
})()
;
;})(args_11491__$1,format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args))
})().call(null);

var arg_11495 = cljs.core.first(args_11491__$1);
if(cljs.core.sequential_QMARK_(arg_11495)){
var vec__11482_11496 = cljs.pprint.brackets(arg_11495);
var start_11497__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11482_11496,(0),null);
var end_11498__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11482_11496,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11483_11499 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11484_11500 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_11497__$1,null,end_11498__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_11495),(3))) && ((cljs.core.second(arg_11495) instanceof cljs.core.Keyword))){
var vec__11485_11501 = arg_11495;
var ns_11502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11485_11501,(0),null);
var kw_11503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11485_11501,(1),null);
var lis_11504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11485_11501,(2),null);
(function (){var format_in__10375__auto__ = "~w ~w ";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (args_11491__$1,format_in__10375__auto__,cf__10376__auto__,vec__11485_11501,ns_11502,kw_11503,lis_11504,_STAR_current_level_STAR_11483_11499,_STAR_current_length_STAR_11484_11500,vec__11482_11496,start_11497__$1,end_11498__$1,arg_11495,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args){
return (function() { 
var G__11505__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11505 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11506__i = 0, G__11506__a = new Array(arguments.length -  0);
while (G__11506__i < G__11506__a.length) {G__11506__a[G__11506__i] = arguments[G__11506__i + 0]; ++G__11506__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11506__a,0);
} 
return G__11505__delegate.call(this,args__10377__auto__);};
G__11505.cljs$lang$maxFixedArity = 0;
G__11505.cljs$lang$applyTo = (function (arglist__11507){
var args__10377__auto__ = cljs.core.seq(arglist__11507);
return G__11505__delegate(args__10377__auto__);
});
G__11505.cljs$core$IFn$_invoke$arity$variadic = G__11505__delegate;
return G__11505;
})()
;
;})(args_11491__$1,format_in__10375__auto__,cf__10376__auto__,vec__11485_11501,ns_11502,kw_11503,lis_11504,_STAR_current_level_STAR_11483_11499,_STAR_current_length_STAR_11484_11500,vec__11482_11496,start_11497__$1,end_11498__$1,arg_11495,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args))
})().call(null,ns_11502,kw_11503);

if(cljs.core.sequential_QMARK_(lis_11504)){
(function (){var format_in__10375__auto__ = ((cljs.core.vector_QMARK_(lis_11504))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (args_11491__$1,format_in__10375__auto__,cf__10376__auto__,vec__11485_11501,ns_11502,kw_11503,lis_11504,_STAR_current_level_STAR_11483_11499,_STAR_current_length_STAR_11484_11500,vec__11482_11496,start_11497__$1,end_11498__$1,arg_11495,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args){
return (function() { 
var G__11508__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11508 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11509__i = 0, G__11509__a = new Array(arguments.length -  0);
while (G__11509__i < G__11509__a.length) {G__11509__a[G__11509__i] = arguments[G__11509__i + 0]; ++G__11509__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11509__a,0);
} 
return G__11508__delegate.call(this,args__10377__auto__);};
G__11508.cljs$lang$maxFixedArity = 0;
G__11508.cljs$lang$applyTo = (function (arglist__11510){
var args__10377__auto__ = cljs.core.seq(arglist__11510);
return G__11508__delegate(args__10377__auto__);
});
G__11508.cljs$core$IFn$_invoke$arity$variadic = G__11508__delegate;
return G__11508;
})()
;
;})(args_11491__$1,format_in__10375__auto__,cf__10376__auto__,vec__11485_11501,ns_11502,kw_11503,lis_11504,_STAR_current_level_STAR_11483_11499,_STAR_current_length_STAR_11484_11500,vec__11482_11496,start_11497__$1,end_11498__$1,arg_11495,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args))
})().call(null,lis_11504);
} else {
cljs.pprint.write_out(lis_11504);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__10375__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (args_11491__$1,format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11483_11499,_STAR_current_length_STAR_11484_11500,vec__11482_11496,start_11497__$1,end_11498__$1,arg_11495,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args){
return (function() { 
var G__11511__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11511 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11512__i = 0, G__11512__a = new Array(arguments.length -  0);
while (G__11512__i < G__11512__a.length) {G__11512__a[G__11512__i] = arguments[G__11512__i + 0]; ++G__11512__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11512__a,0);
} 
return G__11511__delegate.call(this,args__10377__auto__);};
G__11511.cljs$lang$maxFixedArity = 0;
G__11511.cljs$lang$applyTo = (function (arglist__11513){
var args__10377__auto__ = cljs.core.seq(arglist__11513);
return G__11511__delegate(args__10377__auto__);
});
G__11511.cljs$core$IFn$_invoke$arity$variadic = G__11511__delegate;
return G__11511;
})()
;
;})(args_11491__$1,format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11483_11499,_STAR_current_length_STAR_11484_11500,vec__11482_11496,start_11497__$1,end_11498__$1,arg_11495,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args))
})(),arg_11495);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11484_11500;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11483_11499;
}}


if(cljs.core.next(args_11491__$1)){
(function (){var format_in__10375__auto__ = "~_";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (args_11491__$1,format_in__10375__auto__,cf__10376__auto__,vec__11482_11496,start_11497__$1,end_11498__$1,arg_11495,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args){
return (function() { 
var G__11514__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11514 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11515__i = 0, G__11515__a = new Array(arguments.length -  0);
while (G__11515__i < G__11515__a.length) {G__11515__a[G__11515__i] = arguments[G__11515__i + 0]; ++G__11515__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11515__a,0);
} 
return G__11514__delegate.call(this,args__10377__auto__);};
G__11514.cljs$lang$maxFixedArity = 0;
G__11514.cljs$lang$applyTo = (function (arglist__11516){
var args__10377__auto__ = cljs.core.seq(arglist__11516);
return G__11514__delegate(args__10377__auto__);
});
G__11514.cljs$core$IFn$_invoke$arity$variadic = G__11514__delegate;
return G__11514;
})()
;
;})(args_11491__$1,format_in__10375__auto__,cf__10376__auto__,vec__11482_11496,start_11497__$1,end_11498__$1,arg_11495,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out(arg_11495);

if(cljs.core.next(args_11491__$1)){
(function (){var format_in__10375__auto__ = "~:_";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (args_11491__$1,format_in__10375__auto__,cf__10376__auto__,arg_11495,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args){
return (function() { 
var G__11517__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11517 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11518__i = 0, G__11518__a = new Array(arguments.length -  0);
while (G__11518__i < G__11518__a.length) {G__11518__a[G__11518__i] = arguments[G__11518__i + 0]; ++G__11518__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11518__a,0);
} 
return G__11517__delegate.call(this,args__10377__auto__);};
G__11517.cljs$lang$maxFixedArity = 0;
G__11517.cljs$lang$applyTo = (function (arglist__11519){
var args__10377__auto__ = cljs.core.seq(arglist__11519);
return G__11517__delegate(args__10377__auto__);
});
G__11517.cljs$core$IFn$_invoke$arity$variadic = G__11517__delegate;
return G__11517;
})()
;
;})(args_11491__$1,format_in__10375__auto__,cf__10376__auto__,arg_11495,_STAR_current_level_STAR_11480_11486,_STAR_current_length_STAR_11481_11487,vec__11478,start,end,vec__11479,keyw,args))
})().call(null);
} else {
}
}

var G__11520 = cljs.core.next(args_11491__$1);
args_11491__$1 = G__11520;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11481_11487;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11480_11486;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__11526 = alis;
var ns_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11526,(0),null);
var ns_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11526,(1),null);
var stuff = cljs.core.nthnext(vec__11526,(2));
var vec__11527 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11527,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11527,(1),null);
var vec__11528 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11528,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11528,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11529_11531 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11530_11532 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__10375__auto__ = "~w ~1I~@_~w";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11529_11531,_STAR_current_length_STAR_11530_11532,vec__11526,ns_sym,ns_name,stuff,vec__11527,doc_str,stuff__$1,vec__11528,attr_map,references){
return (function() { 
var G__11533__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11533 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11534__i = 0, G__11534__a = new Array(arguments.length -  0);
while (G__11534__i < G__11534__a.length) {G__11534__a[G__11534__i] = arguments[G__11534__i + 0]; ++G__11534__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11534__a,0);
} 
return G__11533__delegate.call(this,args__10377__auto__);};
G__11533.cljs$lang$maxFixedArity = 0;
G__11533.cljs$lang$applyTo = (function (arglist__11535){
var args__10377__auto__ = cljs.core.seq(arglist__11535);
return G__11533__delegate(args__10377__auto__);
});
G__11533.cljs$core$IFn$_invoke$arity$variadic = G__11533__delegate;
return G__11533;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11529_11531,_STAR_current_length_STAR_11530_11532,vec__11526,ns_sym,ns_name,stuff,vec__11527,doc_str,stuff__$1,vec__11528,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__4668__auto__ = doc_str;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = attr_map;
if(cljs.core.truth_(or__4668__auto____$1)){
return or__4668__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
(function (){var format_in__10375__auto__ = "~@:_";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11529_11531,_STAR_current_length_STAR_11530_11532,vec__11526,ns_sym,ns_name,stuff,vec__11527,doc_str,stuff__$1,vec__11528,attr_map,references){
return (function() { 
var G__11536__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11536 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11537__i = 0, G__11537__a = new Array(arguments.length -  0);
while (G__11537__i < G__11537__a.length) {G__11537__a[G__11537__i] = arguments[G__11537__i + 0]; ++G__11537__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11537__a,0);
} 
return G__11536__delegate.call(this,args__10377__auto__);};
G__11536.cljs$lang$maxFixedArity = 0;
G__11536.cljs$lang$applyTo = (function (arglist__11538){
var args__10377__auto__ = cljs.core.seq(arglist__11538);
return G__11536__delegate(args__10377__auto__);
});
G__11536.cljs$core$IFn$_invoke$arity$variadic = G__11536__delegate;
return G__11536;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11529_11531,_STAR_current_length_STAR_11530_11532,vec__11526,ns_sym,ns_name,stuff,vec__11527,doc_str,stuff__$1,vec__11528,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.array_seq([doc_str,(function (){var or__4668__auto__ = attr_map;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__10375__auto__ = "~w~:[~;~:@_~]";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11529_11531,_STAR_current_length_STAR_11530_11532,vec__11526,ns_sym,ns_name,stuff,vec__11527,doc_str,stuff__$1,vec__11528,attr_map,references){
return (function() { 
var G__11539__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11539 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11540__i = 0, G__11540__a = new Array(arguments.length -  0);
while (G__11540__i < G__11540__a.length) {G__11540__a[G__11540__i] = arguments[G__11540__i + 0]; ++G__11540__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11540__a,0);
} 
return G__11539__delegate.call(this,args__10377__auto__);};
G__11539.cljs$lang$maxFixedArity = 0;
G__11539.cljs$lang$applyTo = (function (arglist__11541){
var args__10377__auto__ = cljs.core.seq(arglist__11541);
return G__11539__delegate(args__10377__auto__);
});
G__11539.cljs$core$IFn$_invoke$arity$variadic = G__11539__delegate;
return G__11539;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11529_11531,_STAR_current_length_STAR_11530_11532,vec__11526,ns_sym,ns_name,stuff,vec__11527,doc_str,stuff__$1,vec__11528,attr_map,references))
})().call(null,attr_map,cljs.core.seq(references));
} else {
}

var references_11542__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_11542__$1));

var temp__4425__auto___11543 = cljs.core.next(references_11542__$1);
if(temp__4425__auto___11543){
var references_11544__$2 = temp__4425__auto___11543;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__11545 = references_11544__$2;
references_11542__$1 = G__11545;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11530_11532;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11529_11531;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__10375__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__){
return (function() { 
var G__11546__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11546 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11547__i = 0, G__11547__a = new Array(arguments.length -  0);
while (G__11547__i < G__11547__a.length) {G__11547__a[G__11547__i] = arguments[G__11547__i + 0]; ++G__11547__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11547__a,0);
} 
return G__11546__delegate.call(this,args__10377__auto__);};
G__11546.cljs$lang$maxFixedArity = 0;
G__11546.cljs$lang$applyTo = (function (arglist__11548){
var args__10377__auto__ = cljs.core.seq(arglist__11548);
return G__11546__delegate(args__10377__auto__);
});
G__11546.cljs$core$IFn$_invoke$arity$variadic = G__11546__delegate;
return G__11546;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__10375__auto__ = " ~_";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__){
return (function() { 
var G__11549__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11549 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11550__i = 0, G__11550__a = new Array(arguments.length -  0);
while (G__11550__i < G__11550__a.length) {G__11550__a[G__11550__i] = arguments[G__11550__i + 0]; ++G__11550__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11550__a,0);
} 
return G__11549__delegate.call(this,args__10377__auto__);};
G__11549.cljs$lang$maxFixedArity = 0;
G__11549.cljs$lang$applyTo = (function (arglist__11551){
var args__10377__auto__ = cljs.core.seq(arglist__11551);
return G__11549__delegate(args__10377__auto__);
});
G__11549.cljs$core$IFn$_invoke$arity$variadic = G__11549__delegate;
return G__11549;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__))
})().call(null);
} else {
(function (){var format_in__10375__auto__ = " ~@_";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__){
return (function() { 
var G__11552__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11552 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11553__i = 0, G__11553__a = new Array(arguments.length -  0);
while (G__11553__i < G__11553__a.length) {G__11553__a[G__11553__i] = arguments[G__11553__i + 0]; ++G__11553__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11553__a,0);
} 
return G__11552__delegate.call(this,args__10377__auto__);};
G__11552.cljs$lang$maxFixedArity = 0;
G__11552.cljs$lang$applyTo = (function (arglist__11554){
var args__10377__auto__ = cljs.core.seq(arglist__11554);
return G__11552__delegate(args__10377__auto__);
});
G__11552.cljs$core$IFn$_invoke$arity$variadic = G__11552__delegate;
return G__11552;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__))
})().call(null);
}

return (function (){var format_in__10375__auto__ = "~{~w~^ ~_~}";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__){
return (function() { 
var G__11555__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11555 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11556__i = 0, G__11556__a = new Array(arguments.length -  0);
while (G__11556__i < G__11556__a.length) {G__11556__a[G__11556__i] = arguments[G__11556__i + 0]; ++G__11556__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11556__a,0);
} 
return G__11555__delegate.call(this,args__10377__auto__);};
G__11555.cljs$lang$maxFixedArity = 0;
G__11555.cljs$lang$applyTo = (function (arglist__11557){
var args__10377__auto__ = cljs.core.seq(arglist__11557);
return G__11555__delegate(args__10377__auto__);
});
G__11555.cljs$core$IFn$_invoke$arity$variadic = G__11555__delegate;
return G__11555;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
return (function (){var format_in__10375__auto__ = " ~_~{~w~^ ~_~}";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__){
return (function() { 
var G__11558__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11558 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11559__i = 0, G__11559__a = new Array(arguments.length -  0);
while (G__11559__i < G__11559__a.length) {G__11559__a[G__11559__i] = arguments[G__11559__i + 0]; ++G__11559__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11559__a,0);
} 
return G__11558__delegate.call(this,args__10377__auto__);};
G__11558.cljs$lang$maxFixedArity = 0;
G__11558.cljs$lang$applyTo = (function (arglist__11560){
var args__10377__auto__ = cljs.core.seq(arglist__11560);
return G__11558__delegate(args__10377__auto__);
});
G__11558.cljs$core$IFn$_invoke$arity$variadic = G__11558__delegate;
return G__11558;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__11566 = alis;
var defn_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11566,(0),null);
var defn_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11566,(1),null);
var stuff = cljs.core.nthnext(vec__11566,(2));
var vec__11567 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11567,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11567,(1),null);
var vec__11568 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11568,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11568,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11569_11571 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11570_11572 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__10375__auto__ = "~w ~1I~@_~w";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11569_11571,_STAR_current_length_STAR_11570_11572,vec__11566,defn_sym,defn_name,stuff,vec__11567,doc_str,stuff__$1,vec__11568,attr_map,stuff__$2){
return (function() { 
var G__11573__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11573 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11574__i = 0, G__11574__a = new Array(arguments.length -  0);
while (G__11574__i < G__11574__a.length) {G__11574__a[G__11574__i] = arguments[G__11574__i + 0]; ++G__11574__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11574__a,0);
} 
return G__11573__delegate.call(this,args__10377__auto__);};
G__11573.cljs$lang$maxFixedArity = 0;
G__11573.cljs$lang$applyTo = (function (arglist__11575){
var args__10377__auto__ = cljs.core.seq(arglist__11575);
return G__11573__delegate(args__10377__auto__);
});
G__11573.cljs$core$IFn$_invoke$arity$variadic = G__11573__delegate;
return G__11573;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11569_11571,_STAR_current_length_STAR_11570_11572,vec__11566,defn_sym,defn_name,stuff,vec__11567,doc_str,stuff__$1,vec__11568,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__10375__auto__ = " ~_~w";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11569_11571,_STAR_current_length_STAR_11570_11572,vec__11566,defn_sym,defn_name,stuff,vec__11567,doc_str,stuff__$1,vec__11568,attr_map,stuff__$2){
return (function() { 
var G__11576__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11576 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11577__i = 0, G__11577__a = new Array(arguments.length -  0);
while (G__11577__i < G__11577__a.length) {G__11577__a[G__11577__i] = arguments[G__11577__i + 0]; ++G__11577__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11577__a,0);
} 
return G__11576__delegate.call(this,args__10377__auto__);};
G__11576.cljs$lang$maxFixedArity = 0;
G__11576.cljs$lang$applyTo = (function (arglist__11578){
var args__10377__auto__ = cljs.core.seq(arglist__11578);
return G__11576__delegate(args__10377__auto__);
});
G__11576.cljs$core$IFn$_invoke$arity$variadic = G__11576__delegate;
return G__11576;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11569_11571,_STAR_current_length_STAR_11570_11572,vec__11566,defn_sym,defn_name,stuff,vec__11567,doc_str,stuff__$1,vec__11568,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__10375__auto__ = " ~_~w";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11569_11571,_STAR_current_length_STAR_11570_11572,vec__11566,defn_sym,defn_name,stuff,vec__11567,doc_str,stuff__$1,vec__11568,attr_map,stuff__$2){
return (function() { 
var G__11579__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11579 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11580__i = 0, G__11580__a = new Array(arguments.length -  0);
while (G__11580__i < G__11580__a.length) {G__11580__a[G__11580__i] = arguments[G__11580__i + 0]; ++G__11580__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11580__a,0);
} 
return G__11579__delegate.call(this,args__10377__auto__);};
G__11579.cljs$lang$maxFixedArity = 0;
G__11579.cljs$lang$applyTo = (function (arglist__11581){
var args__10377__auto__ = cljs.core.seq(arglist__11581);
return G__11579__delegate(args__10377__auto__);
});
G__11579.cljs$core$IFn$_invoke$arity$variadic = G__11579__delegate;
return G__11579;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11569_11571,_STAR_current_length_STAR_11570_11572,vec__11566,defn_sym,defn_name,stuff,vec__11567,doc_str,stuff__$1,vec__11568,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__4668__auto__ = doc_str;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__4668__auto__ = doc_str;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11570_11572;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11569_11571;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11587_11592 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11588_11593 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count11589_11594 = (0);
var binding_11595 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count11589_11594 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_11595)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11590_11596 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11591_11597 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_11595));

if(cljs.core.next(binding_11595)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_11595));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11591_11597;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11590_11596;
}}


if(cljs.core.next(cljs.core.rest(binding_11595))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__11598 = (length_count11589_11594 + (1));
var G__11599 = cljs.core.next(cljs.core.rest(binding_11595));
length_count11589_11594 = G__11598;
binding_11595 = G__11599;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11588_11593;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11587_11592;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11602_11604 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11603_11605 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
(function (){var format_in__10375__auto__ = "~w ~1I~@_";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11602_11604,_STAR_current_length_STAR_11603_11605,base_sym){
return (function() { 
var G__11606__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11606 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11607__i = 0, G__11607__a = new Array(arguments.length -  0);
while (G__11607__i < G__11607__a.length) {G__11607__a[G__11607__i] = arguments[G__11607__i + 0]; ++G__11607__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11607__a,0);
} 
return G__11606__delegate.call(this,args__10377__auto__);};
G__11606.cljs$lang$maxFixedArity = 0;
G__11606.cljs$lang$applyTo = (function (arglist__11608){
var args__10377__auto__ = cljs.core.seq(arglist__11608);
return G__11606__delegate(args__10377__auto__);
});
G__11606.cljs$core$IFn$_invoke$arity$variadic = G__11606__delegate;
return G__11606;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11602_11604,_STAR_current_length_STAR_11603_11605,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

(function (){var format_in__10375__auto__ = " ~_~{~w~^ ~_~}";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11602_11604,_STAR_current_length_STAR_11603_11605,base_sym){
return (function() { 
var G__11609__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11609 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11610__i = 0, G__11610__a = new Array(arguments.length -  0);
while (G__11610__i < G__11610__a.length) {G__11610__a[G__11610__i] = arguments[G__11610__i + 0]; ++G__11610__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11610__a,0);
} 
return G__11609__delegate.call(this,args__10377__auto__);};
G__11609.cljs$lang$maxFixedArity = 0;
G__11609.cljs$lang$applyTo = (function (arglist__11611){
var args__10377__auto__ = cljs.core.seq(arglist__11611);
return G__11609__delegate(args__10377__auto__);
});
G__11609.cljs$core$IFn$_invoke$arity$variadic = G__11609__delegate;
return G__11609;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11602_11604,_STAR_current_length_STAR_11603_11605,base_sym))
})().call(null,cljs.core.next(cljs.core.rest(alis)));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11603_11605;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11602_11604;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__10375__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__){
return (function() { 
var G__11612__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11612 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11613__i = 0, G__11613__a = new Array(arguments.length -  0);
while (G__11613__i < G__11613__a.length) {G__11613__a[G__11613__i] = arguments[G__11613__i + 0]; ++G__11613__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11613__a,0);
} 
return G__11612__delegate.call(this,args__10377__auto__);};
G__11612.cljs$lang$maxFixedArity = 0;
G__11612.cljs$lang$applyTo = (function (arglist__11614){
var args__10377__auto__ = cljs.core.seq(arglist__11614);
return G__11612__delegate(args__10377__auto__);
});
G__11612.cljs$core$IFn$_invoke$arity$variadic = G__11612__delegate;
return G__11612;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11620_11625 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11621_11626 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count11622_11627 = (0);
var alis_11628__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count11622_11627 < cljs.core._STAR_print_length_STAR_))){
if(alis_11628__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11623_11629 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11624_11630 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_11628__$1));

if(cljs.core.next(alis_11628__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_11628__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11624_11630;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11623_11629;
}}


if(cljs.core.next(cljs.core.rest(alis_11628__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__11631 = (length_count11622_11627 + (1));
var G__11632 = cljs.core.next(cljs.core.rest(alis_11628__$1));
length_count11622_11627 = G__11631;
alis_11628__$1 = G__11632;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11621_11626;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11620_11625;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11638_11643 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11639_11644 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__10375__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11638_11643,_STAR_current_length_STAR_11639_11644){
return (function() { 
var G__11645__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11645 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11646__i = 0, G__11646__a = new Array(arguments.length -  0);
while (G__11646__i < G__11646__a.length) {G__11646__a[G__11646__i] = arguments[G__11646__i + 0]; ++G__11646__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11646__a,0);
} 
return G__11645__delegate.call(this,args__10377__auto__);};
G__11645.cljs$lang$maxFixedArity = 0;
G__11645.cljs$lang$applyTo = (function (arglist__11647){
var args__10377__auto__ = cljs.core.seq(arglist__11647);
return G__11645__delegate(args__10377__auto__);
});
G__11645.cljs$core$IFn$_invoke$arity$variadic = G__11645__delegate;
return G__11645;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__,_STAR_current_level_STAR_11638_11643,_STAR_current_length_STAR_11639_11644))
})(),alis);

var length_count11640_11648 = (0);
var alis_11649__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count11640_11648 < cljs.core._STAR_print_length_STAR_))){
if(alis_11649__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11641_11650 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11642_11651 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_11649__$1));

if(cljs.core.next(alis_11649__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_11649__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11642_11651;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11641_11650;
}}


if(cljs.core.next(cljs.core.rest(alis_11649__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__11652 = (length_count11640_11648 + (1));
var G__11653 = cljs.core.next(cljs.core.rest(alis_11649__$1));
length_count11640_11648 = G__11652;
alis_11649__$1 = G__11653;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11639_11644;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11638_11643;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_11657 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.fromArray([cljs.core.first(args),"%"], true, false):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_11657,args,nlis){
return (function (p1__11654_SHARP_,p2__11655_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__11654_SHARP_,[cljs.core.str("%"),cljs.core.str(p2__11655_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_11657,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{return (function (){var format_in__10375__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__10376__auto__ = ((typeof format_in__10375__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__10375__auto__) : cljs.pprint.cached_compile.call(null,format_in__10375__auto__)):format_in__10375__auto__);
return ((function (format_in__10375__auto__,cf__10376__auto__,_STAR_symbol_map_STAR_11657,args,nlis){
return (function() { 
var G__11658__delegate = function (args__10377__auto__){
var navigator__10378__auto__ = cljs.pprint.init_navigator(args__10377__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__10376__auto__,navigator__10378__auto__);
};
var G__11658 = function (var_args){
var args__10377__auto__ = null;
if (arguments.length > 0) {
var G__11659__i = 0, G__11659__a = new Array(arguments.length -  0);
while (G__11659__i < G__11659__a.length) {G__11659__a[G__11659__i] = arguments[G__11659__i + 0]; ++G__11659__i;}
  args__10377__auto__ = new cljs.core.IndexedSeq(G__11659__a,0);
} 
return G__11658__delegate.call(this,args__10377__auto__);};
G__11658.cljs$lang$maxFixedArity = 0;
G__11658.cljs$lang$applyTo = (function (arglist__11660){
var args__10377__auto__ = cljs.core.seq(arglist__11660);
return G__11658__delegate(args__10377__auto__);
});
G__11658.cljs$core$IFn$_invoke$arity$variadic = G__11658__delegate;
return G__11658;
})()
;
;})(format_in__10375__auto__,cf__10376__auto__,_STAR_symbol_map_STAR_11657,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_11657;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11664_11667 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11665_11668 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count11666_11669 = (0);
var alis_11670__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count11666_11669 < cljs.core._STAR_print_length_STAR_))){
if(alis_11670__$1){
cljs.pprint.write_out(cljs.core.first(alis_11670__$1));

if(cljs.core.next(alis_11670__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__11671 = (length_count11666_11669 + (1));
var G__11672 = cljs.core.next(alis_11670__$1);
length_count11666_11669 = G__11671;
alis_11670__$1 = G__11672;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11665_11668;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11664_11667;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([(function (){var iter__5440__auto__ = (function cljs$pprint$two_forms_$_iter__11679(s__11680){
return (new cljs.core.LazySeq(null,(function (){
var s__11680__$1 = s__11680;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11680__$1);
if(temp__4425__auto__){
var s__11680__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11680__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__11680__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__11682 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__11681 = (0);
while(true){
if((i__11681 < size__5439__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__11681);
cljs.core.chunk_append(b__11682,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__11685 = (i__11681 + (1));
i__11681 = G__11685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11682),cljs$pprint$two_forms_$_iter__11679(cljs.core.chunk_rest(s__11680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11682),null);
}
} else {
var x = cljs.core.first(s__11680__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__11679(cljs.core.rest(s__11680__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__11686_SHARP_){
var vec__11688 = p1__11686_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11688,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11688,(1),null);
if(cljs.core.not((function (){var or__4668__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__11686_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__4423__auto__ = (function (){var G__11690 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__11690) : cljs.pprint._STAR_code_table_STAR_.call(null,G__11690));
})();
if(cljs.core.truth_(temp__4423__auto__)){
var special_form = temp__4423__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__4423__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__4423__auto__)){
var arg_num = temp__4423__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__5581__auto__ = (function (){var G__11691 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11691) : cljs.core.atom.call(null,G__11691));
})();
var prefer_table__5582__auto__ = (function (){var G__11692 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11692) : cljs.core.atom.call(null,G__11692));
})();
var method_cache__5583__auto__ = (function (){var G__11693 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11693) : cljs.core.atom.call(null,G__11693));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__11694 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11694) : cljs.core.atom.call(null,G__11694));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4999__auto__ = (0);
var y__5000__auto__ = (width - cljs.core.count(s));
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var args11698 = [];
var len__5726__auto___11716 = arguments.length;
var i__5727__auto___11717 = (0);
while(true){
if((i__5727__auto___11717 < len__5726__auto___11716)){
args11698.push((arguments[i__5727__auto___11717]));

var G__11718 = (i__5727__auto___11717 + (1));
i__5727__auto___11717 = G__11718;
continue;
} else {
}
break;
}

var G__11700 = args11698.length;
switch (G__11700) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11698.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_11701 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_11701){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_11701){
return (function (p1__11695_SHARP_){
return cljs.core.count([cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__11695_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_11701))
,rows));
});})(_STAR_print_newline_STAR_11701))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_11701){
return (function (p1__11696_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__11696_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_11701))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_11701){
return (function (leader,divider,trailer,row){
return [cljs.core.str(leader),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__5440__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_11701){
return (function cljs$pprint$iter__11702(s__11703){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_11701){
return (function (){
var s__11703__$1 = s__11703;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11703__$1);
if(temp__4425__auto__){
var s__11703__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11703__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__11703__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__11705 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__11704 = (0);
while(true){
if((i__11704 < size__5439__auto__)){
var vec__11710 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__11704);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11710,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11710,(1),null);
cljs.core.chunk_append(b__11705,cljs.pprint.add_padding(width,[cljs.core.str(col)].join('')));

var G__11720 = (i__11704 + (1));
i__11704 = G__11720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11705),cljs$pprint$iter__11702(cljs.core.chunk_rest(s__11703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11705),null);
}
} else {
var vec__11711 = cljs.core.first(s__11703__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11711,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11711,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str(col)].join('')),cljs$pprint$iter__11702(cljs.core.rest(s__11703__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_11701))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_11701))
;
return iter__5440__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__5440__auto__,widths,spacers,_STAR_print_newline_STAR_11701){
return (function (p1__11697_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__11697_SHARP_);
});})(iter__5440__auto__,widths,spacers,_STAR_print_newline_STAR_11701))
,ks),widths));
})()))),cljs.core.str(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_11701))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__11712 = cljs.core.seq(rows);
var chunk__11713 = null;
var count__11714 = (0);
var i__11715 = (0);
while(true){
if((i__11715 < count__11714)){
var row = chunk__11713.cljs$core$IIndexed$_nth$arity$2(null,i__11715);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",row)], 0));

var G__11721 = seq__11712;
var G__11722 = chunk__11713;
var G__11723 = count__11714;
var G__11724 = (i__11715 + (1));
seq__11712 = G__11721;
chunk__11713 = G__11722;
count__11714 = G__11723;
i__11715 = G__11724;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11712);
if(temp__4425__auto__){
var seq__11712__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11712__$1)){
var c__5471__auto__ = cljs.core.chunk_first(seq__11712__$1);
var G__11725 = cljs.core.chunk_rest(seq__11712__$1);
var G__11726 = c__5471__auto__;
var G__11727 = cljs.core.count(c__5471__auto__);
var G__11728 = (0);
seq__11712 = G__11725;
chunk__11713 = G__11726;
count__11714 = G__11727;
i__11715 = G__11728;
continue;
} else {
var row = cljs.core.first(seq__11712__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",row)], 0));

var G__11729 = cljs.core.next(seq__11712__$1);
var G__11730 = null;
var G__11731 = (0);
var G__11732 = (0);
seq__11712 = G__11729;
chunk__11713 = G__11730;
count__11714 = G__11731;
i__11715 = G__11732;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11701;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;
