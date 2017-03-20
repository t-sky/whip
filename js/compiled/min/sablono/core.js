// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__16493__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__16492 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16492,(0),null);
var body = cljs.core.nthnext(vec__16492,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__16493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16494__i = 0, G__16494__a = new Array(arguments.length -  0);
while (G__16494__i < G__16494__a.length) {G__16494__a[G__16494__i] = arguments[G__16494__i + 0]; ++G__16494__i;}
  args = new cljs.core.IndexedSeq(G__16494__a,0);
} 
return G__16493__delegate.call(this,args);};
G__16493.cljs$lang$maxFixedArity = 0;
G__16493.cljs$lang$applyTo = (function (arglist__16495){
var args = cljs.core.seq(arglist__16495);
return G__16493__delegate(args);
});
G__16493.cljs$core$IFn$_invoke$arity$variadic = G__16493__delegate;
return G__16493;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5440__auto__ = (function sablono$core$update_arglists_$_iter__16502(s__16503){
return (new cljs.core.LazySeq(null,(function (){
var s__16503__$1 = s__16503;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16503__$1);
if(temp__4425__auto__){
var s__16503__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16503__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16503__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16505 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16504 = (0);
while(true){
if((i__16504 < size__5439__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16504);
cljs.core.chunk_append(b__16505,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__16508 = (i__16504 + (1));
i__16504 = G__16508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16505),sablono$core$update_arglists_$_iter__16502(cljs.core.chunk_rest(s__16503__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16505),null);
}
} else {
var args = cljs.core.first(s__16503__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__16502(cljs.core.rest(s__16503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16516 = arguments.length;
var i__5727__auto___16517 = (0);
while(true){
if((i__5727__auto___16517 < len__5726__auto___16516)){
args__5733__auto__.push((arguments[i__5727__auto___16517]));

var G__16518 = (i__5727__auto___16517 + (1));
i__5727__auto___16517 = G__16518;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5440__auto__ = (function sablono$core$iter__16510(s__16511){
return (new cljs.core.LazySeq(null,(function (){
var s__16511__$1 = s__16511;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16511__$1);
if(temp__4425__auto__){
var s__16511__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16511__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16511__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16513 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16512 = (0);
while(true){
if((i__16512 < size__5439__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16512);
cljs.core.chunk_append(b__16513,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__16519 = (i__16512 + (1));
i__16512 = G__16519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16513),sablono$core$iter__16510(cljs.core.chunk_rest(s__16511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16513),null);
}
} else {
var style = cljs.core.first(s__16511__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__16510(cljs.core.rest(s__16511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq16509){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16509));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__16524 = goog.dom.getDocument().body;
var G__16525 = (function (){var G__16526 = "script";
var G__16527 = {"src": src};
return goog.dom.createDom(G__16526,G__16527);
})();
return goog.dom.appendChild(G__16524,G__16525);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to16528 = (function sablono$core$link_to16528(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16531 = arguments.length;
var i__5727__auto___16532 = (0);
while(true){
if((i__5727__auto___16532 < len__5726__auto___16531)){
args__5733__auto__.push((arguments[i__5727__auto___16532]));

var G__16533 = (i__5727__auto___16532 + (1));
i__5727__auto___16532 = G__16533;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.link_to16528.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.link_to16528.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to16528.cljs$lang$maxFixedArity = (1);

sablono.core.link_to16528.cljs$lang$applyTo = (function (seq16529){
var G__16530 = cljs.core.first(seq16529);
var seq16529__$1 = cljs.core.next(seq16529);
return sablono.core.link_to16528.cljs$core$IFn$_invoke$arity$variadic(G__16530,seq16529__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to16528);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to16534 = (function sablono$core$mail_to16534(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16539 = arguments.length;
var i__5727__auto___16540 = (0);
while(true){
if((i__5727__auto___16540 < len__5726__auto___16539)){
args__5733__auto__.push((arguments[i__5727__auto___16540]));

var G__16541 = (i__5727__auto___16540 + (1));
i__5727__auto___16540 = G__16541;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.mail_to16534.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.mail_to16534.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__16537){
var vec__16538 = p__16537;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16538,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4668__auto__ = content;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to16534.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to16534.cljs$lang$applyTo = (function (seq16535){
var G__16536 = cljs.core.first(seq16535);
var seq16535__$1 = cljs.core.next(seq16535);
return sablono.core.mail_to16534.cljs$core$IFn$_invoke$arity$variadic(G__16536,seq16535__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to16534);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list16542 = (function sablono$core$unordered_list16542(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5440__auto__ = (function sablono$core$unordered_list16542_$_iter__16549(s__16550){
return (new cljs.core.LazySeq(null,(function (){
var s__16550__$1 = s__16550;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16550__$1);
if(temp__4425__auto__){
var s__16550__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16550__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16550__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16552 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16551 = (0);
while(true){
if((i__16551 < size__5439__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16551);
cljs.core.chunk_append(b__16552,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__16555 = (i__16551 + (1));
i__16551 = G__16555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16552),sablono$core$unordered_list16542_$_iter__16549(cljs.core.chunk_rest(s__16550__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16552),null);
}
} else {
var x = cljs.core.first(s__16550__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list16542_$_iter__16549(cljs.core.rest(s__16550__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list16542);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list16556 = (function sablono$core$ordered_list16556(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__5440__auto__ = (function sablono$core$ordered_list16556_$_iter__16563(s__16564){
return (new cljs.core.LazySeq(null,(function (){
var s__16564__$1 = s__16564;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16564__$1);
if(temp__4425__auto__){
var s__16564__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16564__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16564__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16566 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16565 = (0);
while(true){
if((i__16565 < size__5439__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16565);
cljs.core.chunk_append(b__16566,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__16569 = (i__16565 + (1));
i__16565 = G__16569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16566),sablono$core$ordered_list16556_$_iter__16563(cljs.core.chunk_rest(s__16564__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16566),null);
}
} else {
var x = cljs.core.first(s__16564__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list16556_$_iter__16563(cljs.core.rest(s__16564__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list16556);
/**
 * Create an image element.
 */
sablono.core.image16570 = (function sablono$core$image16570(var_args){
var args16571 = [];
var len__5726__auto___16574 = arguments.length;
var i__5727__auto___16575 = (0);
while(true){
if((i__5727__auto___16575 < len__5726__auto___16574)){
args16571.push((arguments[i__5727__auto___16575]));

var G__16576 = (i__5727__auto___16575 + (1));
i__5727__auto___16575 = G__16576;
continue;
} else {
}
break;
}

var G__16573 = args16571.length;
switch (G__16573) {
case 1:
return sablono.core.image16570.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image16570.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16571.length)].join('')));

}
});

sablono.core.image16570.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image16570.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image16570.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image16570);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16578_SHARP_,p2__16579_SHARP_){
return [cljs.core.str(p1__16578_SHARP_),cljs.core.str("["),cljs.core.str(p2__16579_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16580_SHARP_,p2__16581_SHARP_){
return [cljs.core.str(p1__16580_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16581_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field16582 = (function sablono$core$color_field16582(var_args){
var args16583 = [];
var len__5726__auto___16650 = arguments.length;
var i__5727__auto___16651 = (0);
while(true){
if((i__5727__auto___16651 < len__5726__auto___16650)){
args16583.push((arguments[i__5727__auto___16651]));

var G__16652 = (i__5727__auto___16651 + (1));
i__5727__auto___16651 = G__16652;
continue;
} else {
}
break;
}

var G__16585 = args16583.length;
switch (G__16585) {
case 1:
return sablono.core.color_field16582.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field16582.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16583.length)].join('')));

}
});

sablono.core.color_field16582.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.color_field16582.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.color_field16582.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.color_field16582.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field16582);

/**
 * Creates a date input field.
 */
sablono.core.date_field16586 = (function sablono$core$date_field16586(var_args){
var args16587 = [];
var len__5726__auto___16654 = arguments.length;
var i__5727__auto___16655 = (0);
while(true){
if((i__5727__auto___16655 < len__5726__auto___16654)){
args16587.push((arguments[i__5727__auto___16655]));

var G__16656 = (i__5727__auto___16655 + (1));
i__5727__auto___16655 = G__16656;
continue;
} else {
}
break;
}

var G__16589 = args16587.length;
switch (G__16589) {
case 1:
return sablono.core.date_field16586.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field16586.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16587.length)].join('')));

}
});

sablono.core.date_field16586.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.date_field16586.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.date_field16586.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.date_field16586.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field16586);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field16590 = (function sablono$core$datetime_field16590(var_args){
var args16591 = [];
var len__5726__auto___16658 = arguments.length;
var i__5727__auto___16659 = (0);
while(true){
if((i__5727__auto___16659 < len__5726__auto___16658)){
args16591.push((arguments[i__5727__auto___16659]));

var G__16660 = (i__5727__auto___16659 + (1));
i__5727__auto___16659 = G__16660;
continue;
} else {
}
break;
}

var G__16593 = args16591.length;
switch (G__16593) {
case 1:
return sablono.core.datetime_field16590.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field16590.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16591.length)].join('')));

}
});

sablono.core.datetime_field16590.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.datetime_field16590.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.datetime_field16590.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.datetime_field16590.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field16590);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field16594 = (function sablono$core$datetime_local_field16594(var_args){
var args16595 = [];
var len__5726__auto___16662 = arguments.length;
var i__5727__auto___16663 = (0);
while(true){
if((i__5727__auto___16663 < len__5726__auto___16662)){
args16595.push((arguments[i__5727__auto___16663]));

var G__16664 = (i__5727__auto___16663 + (1));
i__5727__auto___16663 = G__16664;
continue;
} else {
}
break;
}

var G__16597 = args16595.length;
switch (G__16597) {
case 1:
return sablono.core.datetime_local_field16594.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field16594.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16595.length)].join('')));

}
});

sablono.core.datetime_local_field16594.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.datetime_local_field16594.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.datetime_local_field16594.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.datetime_local_field16594.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field16594);

/**
 * Creates a email input field.
 */
sablono.core.email_field16598 = (function sablono$core$email_field16598(var_args){
var args16599 = [];
var len__5726__auto___16666 = arguments.length;
var i__5727__auto___16667 = (0);
while(true){
if((i__5727__auto___16667 < len__5726__auto___16666)){
args16599.push((arguments[i__5727__auto___16667]));

var G__16668 = (i__5727__auto___16667 + (1));
i__5727__auto___16667 = G__16668;
continue;
} else {
}
break;
}

var G__16601 = args16599.length;
switch (G__16601) {
case 1:
return sablono.core.email_field16598.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field16598.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16599.length)].join('')));

}
});

sablono.core.email_field16598.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.email_field16598.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.email_field16598.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.email_field16598.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field16598);

/**
 * Creates a file input field.
 */
sablono.core.file_field16602 = (function sablono$core$file_field16602(var_args){
var args16603 = [];
var len__5726__auto___16670 = arguments.length;
var i__5727__auto___16671 = (0);
while(true){
if((i__5727__auto___16671 < len__5726__auto___16670)){
args16603.push((arguments[i__5727__auto___16671]));

var G__16672 = (i__5727__auto___16671 + (1));
i__5727__auto___16671 = G__16672;
continue;
} else {
}
break;
}

var G__16605 = args16603.length;
switch (G__16605) {
case 1:
return sablono.core.file_field16602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field16602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16603.length)].join('')));

}
});

sablono.core.file_field16602.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.file_field16602.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.file_field16602.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.file_field16602.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field16602);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field16606 = (function sablono$core$hidden_field16606(var_args){
var args16607 = [];
var len__5726__auto___16674 = arguments.length;
var i__5727__auto___16675 = (0);
while(true){
if((i__5727__auto___16675 < len__5726__auto___16674)){
args16607.push((arguments[i__5727__auto___16675]));

var G__16676 = (i__5727__auto___16675 + (1));
i__5727__auto___16675 = G__16676;
continue;
} else {
}
break;
}

var G__16609 = args16607.length;
switch (G__16609) {
case 1:
return sablono.core.hidden_field16606.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field16606.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16607.length)].join('')));

}
});

sablono.core.hidden_field16606.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.hidden_field16606.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.hidden_field16606.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.hidden_field16606.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field16606);

/**
 * Creates a month input field.
 */
sablono.core.month_field16610 = (function sablono$core$month_field16610(var_args){
var args16611 = [];
var len__5726__auto___16678 = arguments.length;
var i__5727__auto___16679 = (0);
while(true){
if((i__5727__auto___16679 < len__5726__auto___16678)){
args16611.push((arguments[i__5727__auto___16679]));

var G__16680 = (i__5727__auto___16679 + (1));
i__5727__auto___16679 = G__16680;
continue;
} else {
}
break;
}

var G__16613 = args16611.length;
switch (G__16613) {
case 1:
return sablono.core.month_field16610.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field16610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16611.length)].join('')));

}
});

sablono.core.month_field16610.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.month_field16610.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.month_field16610.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.month_field16610.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field16610);

/**
 * Creates a number input field.
 */
sablono.core.number_field16614 = (function sablono$core$number_field16614(var_args){
var args16615 = [];
var len__5726__auto___16682 = arguments.length;
var i__5727__auto___16683 = (0);
while(true){
if((i__5727__auto___16683 < len__5726__auto___16682)){
args16615.push((arguments[i__5727__auto___16683]));

var G__16684 = (i__5727__auto___16683 + (1));
i__5727__auto___16683 = G__16684;
continue;
} else {
}
break;
}

var G__16617 = args16615.length;
switch (G__16617) {
case 1:
return sablono.core.number_field16614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field16614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16615.length)].join('')));

}
});

sablono.core.number_field16614.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.number_field16614.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.number_field16614.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.number_field16614.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field16614);

/**
 * Creates a password input field.
 */
sablono.core.password_field16618 = (function sablono$core$password_field16618(var_args){
var args16619 = [];
var len__5726__auto___16686 = arguments.length;
var i__5727__auto___16687 = (0);
while(true){
if((i__5727__auto___16687 < len__5726__auto___16686)){
args16619.push((arguments[i__5727__auto___16687]));

var G__16688 = (i__5727__auto___16687 + (1));
i__5727__auto___16687 = G__16688;
continue;
} else {
}
break;
}

var G__16621 = args16619.length;
switch (G__16621) {
case 1:
return sablono.core.password_field16618.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field16618.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16619.length)].join('')));

}
});

sablono.core.password_field16618.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.password_field16618.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.password_field16618.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.password_field16618.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field16618);

/**
 * Creates a range input field.
 */
sablono.core.range_field16622 = (function sablono$core$range_field16622(var_args){
var args16623 = [];
var len__5726__auto___16690 = arguments.length;
var i__5727__auto___16691 = (0);
while(true){
if((i__5727__auto___16691 < len__5726__auto___16690)){
args16623.push((arguments[i__5727__auto___16691]));

var G__16692 = (i__5727__auto___16691 + (1));
i__5727__auto___16691 = G__16692;
continue;
} else {
}
break;
}

var G__16625 = args16623.length;
switch (G__16625) {
case 1:
return sablono.core.range_field16622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field16622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16623.length)].join('')));

}
});

sablono.core.range_field16622.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.range_field16622.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.range_field16622.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.range_field16622.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field16622);

/**
 * Creates a search input field.
 */
sablono.core.search_field16626 = (function sablono$core$search_field16626(var_args){
var args16627 = [];
var len__5726__auto___16694 = arguments.length;
var i__5727__auto___16695 = (0);
while(true){
if((i__5727__auto___16695 < len__5726__auto___16694)){
args16627.push((arguments[i__5727__auto___16695]));

var G__16696 = (i__5727__auto___16695 + (1));
i__5727__auto___16695 = G__16696;
continue;
} else {
}
break;
}

var G__16629 = args16627.length;
switch (G__16629) {
case 1:
return sablono.core.search_field16626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field16626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16627.length)].join('')));

}
});

sablono.core.search_field16626.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.search_field16626.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.search_field16626.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.search_field16626.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field16626);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field16630 = (function sablono$core$tel_field16630(var_args){
var args16631 = [];
var len__5726__auto___16698 = arguments.length;
var i__5727__auto___16699 = (0);
while(true){
if((i__5727__auto___16699 < len__5726__auto___16698)){
args16631.push((arguments[i__5727__auto___16699]));

var G__16700 = (i__5727__auto___16699 + (1));
i__5727__auto___16699 = G__16700;
continue;
} else {
}
break;
}

var G__16633 = args16631.length;
switch (G__16633) {
case 1:
return sablono.core.tel_field16630.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field16630.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16631.length)].join('')));

}
});

sablono.core.tel_field16630.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.tel_field16630.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.tel_field16630.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.tel_field16630.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field16630);

/**
 * Creates a text input field.
 */
sablono.core.text_field16634 = (function sablono$core$text_field16634(var_args){
var args16635 = [];
var len__5726__auto___16702 = arguments.length;
var i__5727__auto___16703 = (0);
while(true){
if((i__5727__auto___16703 < len__5726__auto___16702)){
args16635.push((arguments[i__5727__auto___16703]));

var G__16704 = (i__5727__auto___16703 + (1));
i__5727__auto___16703 = G__16704;
continue;
} else {
}
break;
}

var G__16637 = args16635.length;
switch (G__16637) {
case 1:
return sablono.core.text_field16634.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field16634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16635.length)].join('')));

}
});

sablono.core.text_field16634.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.text_field16634.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.text_field16634.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.text_field16634.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field16634);

/**
 * Creates a time input field.
 */
sablono.core.time_field16638 = (function sablono$core$time_field16638(var_args){
var args16639 = [];
var len__5726__auto___16706 = arguments.length;
var i__5727__auto___16707 = (0);
while(true){
if((i__5727__auto___16707 < len__5726__auto___16706)){
args16639.push((arguments[i__5727__auto___16707]));

var G__16708 = (i__5727__auto___16707 + (1));
i__5727__auto___16707 = G__16708;
continue;
} else {
}
break;
}

var G__16641 = args16639.length;
switch (G__16641) {
case 1:
return sablono.core.time_field16638.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field16638.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16639.length)].join('')));

}
});

sablono.core.time_field16638.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.time_field16638.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.time_field16638.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.time_field16638.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field16638);

/**
 * Creates a url input field.
 */
sablono.core.url_field16642 = (function sablono$core$url_field16642(var_args){
var args16643 = [];
var len__5726__auto___16710 = arguments.length;
var i__5727__auto___16711 = (0);
while(true){
if((i__5727__auto___16711 < len__5726__auto___16710)){
args16643.push((arguments[i__5727__auto___16711]));

var G__16712 = (i__5727__auto___16711 + (1));
i__5727__auto___16711 = G__16712;
continue;
} else {
}
break;
}

var G__16645 = args16643.length;
switch (G__16645) {
case 1:
return sablono.core.url_field16642.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field16642.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16643.length)].join('')));

}
});

sablono.core.url_field16642.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.url_field16642.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.url_field16642.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.url_field16642.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field16642);

/**
 * Creates a week input field.
 */
sablono.core.week_field16646 = (function sablono$core$week_field16646(var_args){
var args16647 = [];
var len__5726__auto___16714 = arguments.length;
var i__5727__auto___16715 = (0);
while(true){
if((i__5727__auto___16715 < len__5726__auto___16714)){
args16647.push((arguments[i__5727__auto___16715]));

var G__16716 = (i__5727__auto___16715 + (1));
i__5727__auto___16715 = G__16716;
continue;
} else {
}
break;
}

var G__16649 = args16647.length;
switch (G__16649) {
case 1:
return sablono.core.week_field16646.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field16646.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16647.length)].join('')));

}
});

sablono.core.week_field16646.cljs$core$IFn$_invoke$arity$1 = (function (name__16481__auto__){
return sablono.core.week_field16646.cljs$core$IFn$_invoke$arity$2(name__16481__auto__,null);
});

sablono.core.week_field16646.cljs$core$IFn$_invoke$arity$2 = (function (name__16481__auto__,value__16482__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__16481__auto__,value__16482__auto__);
});

sablono.core.week_field16646.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field16646);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box16718 = (function sablono$core$check_box16718(var_args){
var args16719 = [];
var len__5726__auto___16722 = arguments.length;
var i__5727__auto___16723 = (0);
while(true){
if((i__5727__auto___16723 < len__5726__auto___16722)){
args16719.push((arguments[i__5727__auto___16723]));

var G__16724 = (i__5727__auto___16723 + (1));
i__5727__auto___16723 = G__16724;
continue;
} else {
}
break;
}

var G__16721 = args16719.length;
switch (G__16721) {
case 1:
return sablono.core.check_box16718.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box16718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box16718.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16719.length)].join('')));

}
});

sablono.core.check_box16718.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box16718.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box16718.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box16718.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box16718.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box16718.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box16718);
/**
 * Creates a radio button.
 */
sablono.core.radio_button16726 = (function sablono$core$radio_button16726(var_args){
var args16727 = [];
var len__5726__auto___16730 = arguments.length;
var i__5727__auto___16731 = (0);
while(true){
if((i__5727__auto___16731 < len__5726__auto___16730)){
args16727.push((arguments[i__5727__auto___16731]));

var G__16732 = (i__5727__auto___16731 + (1));
i__5727__auto___16731 = G__16732;
continue;
} else {
}
break;
}

var G__16729 = args16727.length;
switch (G__16729) {
case 1:
return sablono.core.radio_button16726.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button16726.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button16726.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16727.length)].join('')));

}
});

sablono.core.radio_button16726.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button16726.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button16726.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button16726.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button16726.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button16726.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button16726);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__16735 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__16735);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options16736 = (function sablono$core$select_options16736(coll){
var iter__5440__auto__ = (function sablono$core$select_options16736_$_iter__16747(s__16748){
return (new cljs.core.LazySeq(null,(function (){
var s__16748__$1 = s__16748;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16748__$1);
if(temp__4425__auto__){
var s__16748__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16748__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16748__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16750 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16749 = (0);
while(true){
if((i__16749 < size__5439__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16749);
cljs.core.chunk_append(b__16750,((cljs.core.sequential_QMARK_(x))?(function (){var vec__16755 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16755,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16755,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16755,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options16736(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__16757 = (i__16749 + (1));
i__16749 = G__16757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16750),sablono$core$select_options16736_$_iter__16747(cljs.core.chunk_rest(s__16748__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16750),null);
}
} else {
var x = cljs.core.first(s__16748__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__16756 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options16736(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options16736_$_iter__16747(cljs.core.rest(s__16748__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options16736);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down16758 = (function sablono$core$drop_down16758(var_args){
var args16759 = [];
var len__5726__auto___16762 = arguments.length;
var i__5727__auto___16763 = (0);
while(true){
if((i__5727__auto___16763 < len__5726__auto___16762)){
args16759.push((arguments[i__5727__auto___16763]));

var G__16764 = (i__5727__auto___16763 + (1));
i__5727__auto___16763 = G__16764;
continue;
} else {
}
break;
}

var G__16761 = args16759.length;
switch (G__16761) {
case 2:
return sablono.core.drop_down16758.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down16758.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16759.length)].join('')));

}
});

sablono.core.drop_down16758.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down16758.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down16758.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down16758.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down16758);
/**
 * Creates a text area element.
 */
sablono.core.text_area16766 = (function sablono$core$text_area16766(var_args){
var args16767 = [];
var len__5726__auto___16770 = arguments.length;
var i__5727__auto___16771 = (0);
while(true){
if((i__5727__auto___16771 < len__5726__auto___16770)){
args16767.push((arguments[i__5727__auto___16771]));

var G__16772 = (i__5727__auto___16771 + (1));
i__5727__auto___16771 = G__16772;
continue;
} else {
}
break;
}

var G__16769 = args16767.length;
switch (G__16769) {
case 1:
return sablono.core.text_area16766.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area16766.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16767.length)].join('')));

}
});

sablono.core.text_area16766.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area16766.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area16766.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area16766.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area16766);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label16774 = (function sablono$core$label16774(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label16774);
/**
 * Creates a submit button.
 */
sablono.core.submit_button16775 = (function sablono$core$submit_button16775(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button16775);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button16776 = (function sablono$core$reset_button16776(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button16776);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to16777 = (function sablono$core$form_to16777(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16785 = arguments.length;
var i__5727__auto___16786 = (0);
while(true){
if((i__5727__auto___16786 < len__5726__auto___16785)){
args__5733__auto__.push((arguments[i__5727__auto___16786]));

var G__16787 = (i__5727__auto___16786 + (1));
i__5727__auto___16786 = G__16787;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.form_to16777.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.form_to16777.cljs$core$IFn$_invoke$arity$variadic = (function (p__16780,body){
var vec__16781 = p__16780;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16781,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16781,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__16782 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__16783 = "_method";
var G__16784 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__16782,G__16783,G__16784) : sablono.core.hidden_field.call(null,G__16782,G__16783,G__16784));
})()], null)),body));
});

sablono.core.form_to16777.cljs$lang$maxFixedArity = (1);

sablono.core.form_to16777.cljs$lang$applyTo = (function (seq16778){
var G__16779 = cljs.core.first(seq16778);
var seq16778__$1 = cljs.core.next(seq16778);
return sablono.core.form_to16777.cljs$core$IFn$_invoke$arity$variadic(G__16779,seq16778__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to16777);
