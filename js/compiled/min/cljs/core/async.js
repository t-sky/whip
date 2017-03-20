// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args13174 = [];
var len__5726__auto___13180 = arguments.length;
var i__5727__auto___13181 = (0);
while(true){
if((i__5727__auto___13181 < len__5726__auto___13180)){
args13174.push((arguments[i__5727__auto___13181]));

var G__13182 = (i__5727__auto___13181 + (1));
i__5727__auto___13181 = G__13182;
continue;
} else {
}
break;
}

var G__13176 = args13174.length;
switch (G__13176) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13174.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13177 = (function (f,blockable,meta13178){
this.f = f;
this.blockable = blockable;
this.meta13178 = meta13178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13179,meta13178__$1){
var self__ = this;
var _13179__$1 = this;
return (new cljs.core.async.t_cljs$core$async13177(self__.f,self__.blockable,meta13178__$1));
});

cljs.core.async.t_cljs$core$async13177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13179){
var self__ = this;
var _13179__$1 = this;
return self__.meta13178;
});

cljs.core.async.t_cljs$core$async13177.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta13178], null);
});

cljs.core.async.t_cljs$core$async13177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13177";

cljs.core.async.t_cljs$core$async13177.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async13177");
});

cljs.core.async.__GT_t_cljs$core$async13177 = (function cljs$core$async$__GT_t_cljs$core$async13177(f__$1,blockable__$1,meta13178){
return (new cljs.core.async.t_cljs$core$async13177(f__$1,blockable__$1,meta13178));
});

}

return (new cljs.core.async.t_cljs$core$async13177(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args13186 = [];
var len__5726__auto___13189 = arguments.length;
var i__5727__auto___13190 = (0);
while(true){
if((i__5727__auto___13190 < len__5726__auto___13189)){
args13186.push((arguments[i__5727__auto___13190]));

var G__13191 = (i__5727__auto___13190 + (1));
i__5727__auto___13190 = G__13191;
continue;
} else {
}
break;
}

var G__13188 = args13186.length;
switch (G__13188) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13186.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args13193 = [];
var len__5726__auto___13196 = arguments.length;
var i__5727__auto___13197 = (0);
while(true){
if((i__5727__auto___13197 < len__5726__auto___13196)){
args13193.push((arguments[i__5727__auto___13197]));

var G__13198 = (i__5727__auto___13197 + (1));
i__5727__auto___13197 = G__13198;
continue;
} else {
}
break;
}

var G__13195 = args13193.length;
switch (G__13195) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13193.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args13200 = [];
var len__5726__auto___13203 = arguments.length;
var i__5727__auto___13204 = (0);
while(true){
if((i__5727__auto___13204 < len__5726__auto___13203)){
args13200.push((arguments[i__5727__auto___13204]));

var G__13205 = (i__5727__auto___13204 + (1));
i__5727__auto___13204 = G__13205;
continue;
} else {
}
break;
}

var G__13202 = args13200.length;
switch (G__13202) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13200.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_13207 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13207) : fn1.call(null,val_13207));
} else {
cljs.core.async.impl.dispatch.run(((function (val_13207,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13207) : fn1.call(null,val_13207));
});})(val_13207,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args13208 = [];
var len__5726__auto___13211 = arguments.length;
var i__5727__auto___13212 = (0);
while(true){
if((i__5727__auto___13212 < len__5726__auto___13211)){
args13208.push((arguments[i__5727__auto___13212]));

var G__13213 = (i__5727__auto___13212 + (1));
i__5727__auto___13212 = G__13213;
continue;
} else {
}
break;
}

var G__13210 = args13208.length;
switch (G__13210) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13208.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5571__auto___13215 = n;
var x_13216 = (0);
while(true){
if((x_13216 < n__5571__auto___13215)){
(a[x_13216] = (0));

var G__13217 = (x_13216 + (1));
x_13216 = G__13217;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__13218 = (i + (1));
i = G__13218;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async13222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13222 = (function (alt_flag,flag,meta13223){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13223 = meta13223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13224,meta13223__$1){
var self__ = this;
var _13224__$1 = this;
return (new cljs.core.async.t_cljs$core$async13222(self__.alt_flag,self__.flag,meta13223__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13224){
var self__ = this;
var _13224__$1 = this;
return self__.meta13223;
});})(flag))
;

cljs.core.async.t_cljs$core$async13222.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async13222.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13222.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta13223], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13222";

cljs.core.async.t_cljs$core$async13222.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async13222");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13222 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13222(alt_flag__$1,flag__$1,meta13223){
return (new cljs.core.async.t_cljs$core$async13222(alt_flag__$1,flag__$1,meta13223));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13222(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13228 = (function (alt_handler,flag,cb,meta13229){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13229 = meta13229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13230,meta13229__$1){
var self__ = this;
var _13230__$1 = this;
return (new cljs.core.async.t_cljs$core$async13228(self__.alt_handler,self__.flag,self__.cb,meta13229__$1));
});

cljs.core.async.t_cljs$core$async13228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13230){
var self__ = this;
var _13230__$1 = this;
return self__.meta13229;
});

cljs.core.async.t_cljs$core$async13228.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13228.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async13228.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13228.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta13229], null);
});

cljs.core.async.t_cljs$core$async13228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13228";

cljs.core.async.t_cljs$core$async13228.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async13228");
});

cljs.core.async.__GT_t_cljs$core$async13228 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13228(alt_handler__$1,flag__$1,cb__$1,meta13229){
return (new cljs.core.async.t_cljs$core$async13228(alt_handler__$1,flag__$1,cb__$1,meta13229));
});

}

return (new cljs.core.async.t_cljs$core$async13228(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13231_SHARP_){
var G__13235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13231_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13235) : fret.call(null,G__13235));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13232_SHARP_){
var G__13236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13232_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13236) : fret.call(null,G__13236));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__4668__auto__ = wport;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13237 = (i + (1));
i = G__13237;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4668__auto__ = ret;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__4656__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___13243 = arguments.length;
var i__5727__auto___13244 = (0);
while(true){
if((i__5727__auto___13244 < len__5726__auto___13243)){
args__5733__auto__.push((arguments[i__5727__auto___13244]));

var G__13245 = (i__5727__auto___13244 + (1));
i__5727__auto___13244 = G__13245;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13240){
var map__13241 = p__13240;
var map__13241__$1 = ((((!((map__13241 == null)))?((((map__13241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13241):map__13241);
var opts = map__13241__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13238){
var G__13239 = cljs.core.first(seq13238);
var seq13238__$1 = cljs.core.next(seq13238);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13239,seq13238__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args13246 = [];
var len__5726__auto___13296 = arguments.length;
var i__5727__auto___13297 = (0);
while(true){
if((i__5727__auto___13297 < len__5726__auto___13296)){
args13246.push((arguments[i__5727__auto___13297]));

var G__13298 = (i__5727__auto___13297 + (1));
i__5727__auto___13297 = G__13298;
continue;
} else {
}
break;
}

var G__13248 = args13246.length;
switch (G__13248) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13246.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13129__auto___13300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___13300){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___13300){
return (function (state_13272){
var state_val_13273 = (state_13272[(1)]);
if((state_val_13273 === (7))){
var inst_13268 = (state_13272[(2)]);
var state_13272__$1 = state_13272;
var statearr_13274_13301 = state_13272__$1;
(statearr_13274_13301[(2)] = inst_13268);

(statearr_13274_13301[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13273 === (1))){
var state_13272__$1 = state_13272;
var statearr_13275_13302 = state_13272__$1;
(statearr_13275_13302[(2)] = null);

(statearr_13275_13302[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13273 === (4))){
var inst_13251 = (state_13272[(7)]);
var inst_13251__$1 = (state_13272[(2)]);
var inst_13252 = (inst_13251__$1 == null);
var state_13272__$1 = (function (){var statearr_13276 = state_13272;
(statearr_13276[(7)] = inst_13251__$1);

return statearr_13276;
})();
if(cljs.core.truth_(inst_13252)){
var statearr_13277_13303 = state_13272__$1;
(statearr_13277_13303[(1)] = (5));

} else {
var statearr_13278_13304 = state_13272__$1;
(statearr_13278_13304[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13273 === (13))){
var state_13272__$1 = state_13272;
var statearr_13279_13305 = state_13272__$1;
(statearr_13279_13305[(2)] = null);

(statearr_13279_13305[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13273 === (6))){
var inst_13251 = (state_13272[(7)]);
var state_13272__$1 = state_13272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13272__$1,(11),to,inst_13251);
} else {
if((state_val_13273 === (3))){
var inst_13270 = (state_13272[(2)]);
var state_13272__$1 = state_13272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13272__$1,inst_13270);
} else {
if((state_val_13273 === (12))){
var state_13272__$1 = state_13272;
var statearr_13280_13306 = state_13272__$1;
(statearr_13280_13306[(2)] = null);

(statearr_13280_13306[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13273 === (2))){
var state_13272__$1 = state_13272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13272__$1,(4),from);
} else {
if((state_val_13273 === (11))){
var inst_13261 = (state_13272[(2)]);
var state_13272__$1 = state_13272;
if(cljs.core.truth_(inst_13261)){
var statearr_13281_13307 = state_13272__$1;
(statearr_13281_13307[(1)] = (12));

} else {
var statearr_13282_13308 = state_13272__$1;
(statearr_13282_13308[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13273 === (9))){
var state_13272__$1 = state_13272;
var statearr_13283_13309 = state_13272__$1;
(statearr_13283_13309[(2)] = null);

(statearr_13283_13309[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13273 === (5))){
var state_13272__$1 = state_13272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13284_13310 = state_13272__$1;
(statearr_13284_13310[(1)] = (8));

} else {
var statearr_13285_13311 = state_13272__$1;
(statearr_13285_13311[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13273 === (14))){
var inst_13266 = (state_13272[(2)]);
var state_13272__$1 = state_13272;
var statearr_13286_13312 = state_13272__$1;
(statearr_13286_13312[(2)] = inst_13266);

(statearr_13286_13312[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13273 === (10))){
var inst_13258 = (state_13272[(2)]);
var state_13272__$1 = state_13272;
var statearr_13287_13313 = state_13272__$1;
(statearr_13287_13313[(2)] = inst_13258);

(statearr_13287_13313[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13273 === (8))){
var inst_13255 = cljs.core.async.close_BANG_(to);
var state_13272__$1 = state_13272;
var statearr_13288_13314 = state_13272__$1;
(statearr_13288_13314[(2)] = inst_13255);

(statearr_13288_13314[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
});})(c__13129__auto___13300))
;
return ((function (switch__13015__auto__,c__13129__auto___13300){
return (function() {
var cljs$core$async$state_machine__13016__auto__ = null;
var cljs$core$async$state_machine__13016__auto____0 = (function (){
var statearr_13292 = [null,null,null,null,null,null,null,null];
(statearr_13292[(0)] = cljs$core$async$state_machine__13016__auto__);

(statearr_13292[(1)] = (1));

return statearr_13292;
});
var cljs$core$async$state_machine__13016__auto____1 = (function (state_13272){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_13272);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e13293){if((e13293 instanceof Object)){
var ex__13019__auto__ = e13293;
var statearr_13294_13315 = state_13272;
(statearr_13294_13315[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13272);

return cljs.core.cst$kw$recur;
} else {
throw e13293;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__13316 = state_13272;
state_13272 = G__13316;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$state_machine__13016__auto__ = function(state_13272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13016__auto____1.call(this,state_13272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13016__auto____0;
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13016__auto____1;
return cljs$core$async$state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___13300))
})();
var state__13131__auto__ = (function (){var statearr_13295 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_13295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___13300);

return statearr_13295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___13300))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__13500){
var vec__13501 = p__13500;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13501,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13501,(1),null);
var job = vec__13501;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13129__auto___13683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___13683,res,vec__13501,v,p,job,jobs,results){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___13683,res,vec__13501,v,p,job,jobs,results){
return (function (state_13506){
var state_val_13507 = (state_13506[(1)]);
if((state_val_13507 === (1))){
var state_13506__$1 = state_13506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13506__$1,(2),res,v);
} else {
if((state_val_13507 === (2))){
var inst_13503 = (state_13506[(2)]);
var inst_13504 = cljs.core.async.close_BANG_(res);
var state_13506__$1 = (function (){var statearr_13508 = state_13506;
(statearr_13508[(7)] = inst_13503);

return statearr_13508;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13506__$1,inst_13504);
} else {
return null;
}
}
});})(c__13129__auto___13683,res,vec__13501,v,p,job,jobs,results))
;
return ((function (switch__13015__auto__,c__13129__auto___13683,res,vec__13501,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0 = (function (){
var statearr_13512 = [null,null,null,null,null,null,null,null];
(statearr_13512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__);

(statearr_13512[(1)] = (1));

return statearr_13512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1 = (function (state_13506){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_13506);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e13513){if((e13513 instanceof Object)){
var ex__13019__auto__ = e13513;
var statearr_13514_13684 = state_13506;
(statearr_13514_13684[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13506);

return cljs.core.cst$kw$recur;
} else {
throw e13513;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__13685 = state_13506;
state_13506 = G__13685;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__ = function(state_13506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1.call(this,state_13506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___13683,res,vec__13501,v,p,job,jobs,results))
})();
var state__13131__auto__ = (function (){var statearr_13515 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_13515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___13683);

return statearr_13515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___13683,res,vec__13501,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13516){
var vec__13517 = p__13516;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13517,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13517,(1),null);
var job = vec__13517;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5571__auto___13686 = n;
var __13687 = (0);
while(true){
if((__13687 < n__5571__auto___13686)){
var G__13518_13688 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13518_13688) {
case "compute":
var c__13129__auto___13690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13687,c__13129__auto___13690,G__13518_13688,n__5571__auto___13686,jobs,results,process,async){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (__13687,c__13129__auto___13690,G__13518_13688,n__5571__auto___13686,jobs,results,process,async){
return (function (state_13531){
var state_val_13532 = (state_13531[(1)]);
if((state_val_13532 === (1))){
var state_13531__$1 = state_13531;
var statearr_13533_13691 = state_13531__$1;
(statearr_13533_13691[(2)] = null);

(statearr_13533_13691[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13532 === (2))){
var state_13531__$1 = state_13531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13531__$1,(4),jobs);
} else {
if((state_val_13532 === (3))){
var inst_13529 = (state_13531[(2)]);
var state_13531__$1 = state_13531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13531__$1,inst_13529);
} else {
if((state_val_13532 === (4))){
var inst_13521 = (state_13531[(2)]);
var inst_13522 = process(inst_13521);
var state_13531__$1 = state_13531;
if(cljs.core.truth_(inst_13522)){
var statearr_13534_13692 = state_13531__$1;
(statearr_13534_13692[(1)] = (5));

} else {
var statearr_13535_13693 = state_13531__$1;
(statearr_13535_13693[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13532 === (5))){
var state_13531__$1 = state_13531;
var statearr_13536_13694 = state_13531__$1;
(statearr_13536_13694[(2)] = null);

(statearr_13536_13694[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13532 === (6))){
var state_13531__$1 = state_13531;
var statearr_13537_13695 = state_13531__$1;
(statearr_13537_13695[(2)] = null);

(statearr_13537_13695[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13532 === (7))){
var inst_13527 = (state_13531[(2)]);
var state_13531__$1 = state_13531;
var statearr_13538_13696 = state_13531__$1;
(statearr_13538_13696[(2)] = inst_13527);

(statearr_13538_13696[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__13687,c__13129__auto___13690,G__13518_13688,n__5571__auto___13686,jobs,results,process,async))
;
return ((function (__13687,switch__13015__auto__,c__13129__auto___13690,G__13518_13688,n__5571__auto___13686,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0 = (function (){
var statearr_13542 = [null,null,null,null,null,null,null];
(statearr_13542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__);

(statearr_13542[(1)] = (1));

return statearr_13542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1 = (function (state_13531){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_13531);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e13543){if((e13543 instanceof Object)){
var ex__13019__auto__ = e13543;
var statearr_13544_13697 = state_13531;
(statearr_13544_13697[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13531);

return cljs.core.cst$kw$recur;
} else {
throw e13543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__13698 = state_13531;
state_13531 = G__13698;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__ = function(state_13531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1.call(this,state_13531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__;
})()
;})(__13687,switch__13015__auto__,c__13129__auto___13690,G__13518_13688,n__5571__auto___13686,jobs,results,process,async))
})();
var state__13131__auto__ = (function (){var statearr_13545 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_13545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___13690);

return statearr_13545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(__13687,c__13129__auto___13690,G__13518_13688,n__5571__auto___13686,jobs,results,process,async))
);


break;
case "async":
var c__13129__auto___13699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13687,c__13129__auto___13699,G__13518_13688,n__5571__auto___13686,jobs,results,process,async){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (__13687,c__13129__auto___13699,G__13518_13688,n__5571__auto___13686,jobs,results,process,async){
return (function (state_13558){
var state_val_13559 = (state_13558[(1)]);
if((state_val_13559 === (1))){
var state_13558__$1 = state_13558;
var statearr_13560_13700 = state_13558__$1;
(statearr_13560_13700[(2)] = null);

(statearr_13560_13700[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13559 === (2))){
var state_13558__$1 = state_13558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13558__$1,(4),jobs);
} else {
if((state_val_13559 === (3))){
var inst_13556 = (state_13558[(2)]);
var state_13558__$1 = state_13558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13558__$1,inst_13556);
} else {
if((state_val_13559 === (4))){
var inst_13548 = (state_13558[(2)]);
var inst_13549 = async(inst_13548);
var state_13558__$1 = state_13558;
if(cljs.core.truth_(inst_13549)){
var statearr_13561_13701 = state_13558__$1;
(statearr_13561_13701[(1)] = (5));

} else {
var statearr_13562_13702 = state_13558__$1;
(statearr_13562_13702[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13559 === (5))){
var state_13558__$1 = state_13558;
var statearr_13563_13703 = state_13558__$1;
(statearr_13563_13703[(2)] = null);

(statearr_13563_13703[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13559 === (6))){
var state_13558__$1 = state_13558;
var statearr_13564_13704 = state_13558__$1;
(statearr_13564_13704[(2)] = null);

(statearr_13564_13704[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13559 === (7))){
var inst_13554 = (state_13558[(2)]);
var state_13558__$1 = state_13558;
var statearr_13565_13705 = state_13558__$1;
(statearr_13565_13705[(2)] = inst_13554);

(statearr_13565_13705[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__13687,c__13129__auto___13699,G__13518_13688,n__5571__auto___13686,jobs,results,process,async))
;
return ((function (__13687,switch__13015__auto__,c__13129__auto___13699,G__13518_13688,n__5571__auto___13686,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0 = (function (){
var statearr_13569 = [null,null,null,null,null,null,null];
(statearr_13569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__);

(statearr_13569[(1)] = (1));

return statearr_13569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1 = (function (state_13558){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_13558);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e13570){if((e13570 instanceof Object)){
var ex__13019__auto__ = e13570;
var statearr_13571_13706 = state_13558;
(statearr_13571_13706[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13558);

return cljs.core.cst$kw$recur;
} else {
throw e13570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__13707 = state_13558;
state_13558 = G__13707;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__ = function(state_13558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1.call(this,state_13558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__;
})()
;})(__13687,switch__13015__auto__,c__13129__auto___13699,G__13518_13688,n__5571__auto___13686,jobs,results,process,async))
})();
var state__13131__auto__ = (function (){var statearr_13572 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_13572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___13699);

return statearr_13572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(__13687,c__13129__auto___13699,G__13518_13688,n__5571__auto___13686,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13708 = (__13687 + (1));
__13687 = G__13708;
continue;
} else {
}
break;
}

var c__13129__auto___13709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___13709,jobs,results,process,async){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___13709,jobs,results,process,async){
return (function (state_13594){
var state_val_13595 = (state_13594[(1)]);
if((state_val_13595 === (1))){
var state_13594__$1 = state_13594;
var statearr_13596_13710 = state_13594__$1;
(statearr_13596_13710[(2)] = null);

(statearr_13596_13710[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13595 === (2))){
var state_13594__$1 = state_13594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13594__$1,(4),from);
} else {
if((state_val_13595 === (3))){
var inst_13592 = (state_13594[(2)]);
var state_13594__$1 = state_13594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13594__$1,inst_13592);
} else {
if((state_val_13595 === (4))){
var inst_13575 = (state_13594[(7)]);
var inst_13575__$1 = (state_13594[(2)]);
var inst_13576 = (inst_13575__$1 == null);
var state_13594__$1 = (function (){var statearr_13597 = state_13594;
(statearr_13597[(7)] = inst_13575__$1);

return statearr_13597;
})();
if(cljs.core.truth_(inst_13576)){
var statearr_13598_13711 = state_13594__$1;
(statearr_13598_13711[(1)] = (5));

} else {
var statearr_13599_13712 = state_13594__$1;
(statearr_13599_13712[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13595 === (5))){
var inst_13578 = cljs.core.async.close_BANG_(jobs);
var state_13594__$1 = state_13594;
var statearr_13600_13713 = state_13594__$1;
(statearr_13600_13713[(2)] = inst_13578);

(statearr_13600_13713[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13595 === (6))){
var inst_13575 = (state_13594[(7)]);
var inst_13580 = (state_13594[(8)]);
var inst_13580__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13582 = [inst_13575,inst_13580__$1];
var inst_13583 = (new cljs.core.PersistentVector(null,2,(5),inst_13581,inst_13582,null));
var state_13594__$1 = (function (){var statearr_13601 = state_13594;
(statearr_13601[(8)] = inst_13580__$1);

return statearr_13601;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13594__$1,(8),jobs,inst_13583);
} else {
if((state_val_13595 === (7))){
var inst_13590 = (state_13594[(2)]);
var state_13594__$1 = state_13594;
var statearr_13602_13714 = state_13594__$1;
(statearr_13602_13714[(2)] = inst_13590);

(statearr_13602_13714[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13595 === (8))){
var inst_13580 = (state_13594[(8)]);
var inst_13585 = (state_13594[(2)]);
var state_13594__$1 = (function (){var statearr_13603 = state_13594;
(statearr_13603[(9)] = inst_13585);

return statearr_13603;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13594__$1,(9),results,inst_13580);
} else {
if((state_val_13595 === (9))){
var inst_13587 = (state_13594[(2)]);
var state_13594__$1 = (function (){var statearr_13604 = state_13594;
(statearr_13604[(10)] = inst_13587);

return statearr_13604;
})();
var statearr_13605_13715 = state_13594__$1;
(statearr_13605_13715[(2)] = null);

(statearr_13605_13715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__13129__auto___13709,jobs,results,process,async))
;
return ((function (switch__13015__auto__,c__13129__auto___13709,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0 = (function (){
var statearr_13609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__);

(statearr_13609[(1)] = (1));

return statearr_13609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1 = (function (state_13594){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_13594);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e13610){if((e13610 instanceof Object)){
var ex__13019__auto__ = e13610;
var statearr_13611_13716 = state_13594;
(statearr_13611_13716[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13594);

return cljs.core.cst$kw$recur;
} else {
throw e13610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__13717 = state_13594;
state_13594 = G__13717;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__ = function(state_13594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1.call(this,state_13594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___13709,jobs,results,process,async))
})();
var state__13131__auto__ = (function (){var statearr_13612 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_13612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___13709);

return statearr_13612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___13709,jobs,results,process,async))
);


var c__13129__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto__,jobs,results,process,async){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto__,jobs,results,process,async){
return (function (state_13650){
var state_val_13651 = (state_13650[(1)]);
if((state_val_13651 === (7))){
var inst_13646 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
var statearr_13652_13718 = state_13650__$1;
(statearr_13652_13718[(2)] = inst_13646);

(statearr_13652_13718[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (20))){
var state_13650__$1 = state_13650;
var statearr_13653_13719 = state_13650__$1;
(statearr_13653_13719[(2)] = null);

(statearr_13653_13719[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (1))){
var state_13650__$1 = state_13650;
var statearr_13654_13720 = state_13650__$1;
(statearr_13654_13720[(2)] = null);

(statearr_13654_13720[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (4))){
var inst_13615 = (state_13650[(7)]);
var inst_13615__$1 = (state_13650[(2)]);
var inst_13616 = (inst_13615__$1 == null);
var state_13650__$1 = (function (){var statearr_13655 = state_13650;
(statearr_13655[(7)] = inst_13615__$1);

return statearr_13655;
})();
if(cljs.core.truth_(inst_13616)){
var statearr_13656_13721 = state_13650__$1;
(statearr_13656_13721[(1)] = (5));

} else {
var statearr_13657_13722 = state_13650__$1;
(statearr_13657_13722[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (15))){
var inst_13628 = (state_13650[(8)]);
var state_13650__$1 = state_13650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13650__$1,(18),to,inst_13628);
} else {
if((state_val_13651 === (21))){
var inst_13641 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
var statearr_13658_13723 = state_13650__$1;
(statearr_13658_13723[(2)] = inst_13641);

(statearr_13658_13723[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (13))){
var inst_13643 = (state_13650[(2)]);
var state_13650__$1 = (function (){var statearr_13659 = state_13650;
(statearr_13659[(9)] = inst_13643);

return statearr_13659;
})();
var statearr_13660_13724 = state_13650__$1;
(statearr_13660_13724[(2)] = null);

(statearr_13660_13724[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (6))){
var inst_13615 = (state_13650[(7)]);
var state_13650__$1 = state_13650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13650__$1,(11),inst_13615);
} else {
if((state_val_13651 === (17))){
var inst_13636 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
if(cljs.core.truth_(inst_13636)){
var statearr_13661_13725 = state_13650__$1;
(statearr_13661_13725[(1)] = (19));

} else {
var statearr_13662_13726 = state_13650__$1;
(statearr_13662_13726[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (3))){
var inst_13648 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13650__$1,inst_13648);
} else {
if((state_val_13651 === (12))){
var inst_13625 = (state_13650[(10)]);
var state_13650__$1 = state_13650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13650__$1,(14),inst_13625);
} else {
if((state_val_13651 === (2))){
var state_13650__$1 = state_13650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13650__$1,(4),results);
} else {
if((state_val_13651 === (19))){
var state_13650__$1 = state_13650;
var statearr_13663_13727 = state_13650__$1;
(statearr_13663_13727[(2)] = null);

(statearr_13663_13727[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (11))){
var inst_13625 = (state_13650[(2)]);
var state_13650__$1 = (function (){var statearr_13664 = state_13650;
(statearr_13664[(10)] = inst_13625);

return statearr_13664;
})();
var statearr_13665_13728 = state_13650__$1;
(statearr_13665_13728[(2)] = null);

(statearr_13665_13728[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (9))){
var state_13650__$1 = state_13650;
var statearr_13666_13729 = state_13650__$1;
(statearr_13666_13729[(2)] = null);

(statearr_13666_13729[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (5))){
var state_13650__$1 = state_13650;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13667_13730 = state_13650__$1;
(statearr_13667_13730[(1)] = (8));

} else {
var statearr_13668_13731 = state_13650__$1;
(statearr_13668_13731[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (14))){
var inst_13628 = (state_13650[(8)]);
var inst_13630 = (state_13650[(11)]);
var inst_13628__$1 = (state_13650[(2)]);
var inst_13629 = (inst_13628__$1 == null);
var inst_13630__$1 = cljs.core.not(inst_13629);
var state_13650__$1 = (function (){var statearr_13669 = state_13650;
(statearr_13669[(8)] = inst_13628__$1);

(statearr_13669[(11)] = inst_13630__$1);

return statearr_13669;
})();
if(inst_13630__$1){
var statearr_13670_13732 = state_13650__$1;
(statearr_13670_13732[(1)] = (15));

} else {
var statearr_13671_13733 = state_13650__$1;
(statearr_13671_13733[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (16))){
var inst_13630 = (state_13650[(11)]);
var state_13650__$1 = state_13650;
var statearr_13672_13734 = state_13650__$1;
(statearr_13672_13734[(2)] = inst_13630);

(statearr_13672_13734[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (10))){
var inst_13622 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
var statearr_13673_13735 = state_13650__$1;
(statearr_13673_13735[(2)] = inst_13622);

(statearr_13673_13735[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (18))){
var inst_13633 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
var statearr_13674_13736 = state_13650__$1;
(statearr_13674_13736[(2)] = inst_13633);

(statearr_13674_13736[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13651 === (8))){
var inst_13619 = cljs.core.async.close_BANG_(to);
var state_13650__$1 = state_13650;
var statearr_13675_13737 = state_13650__$1;
(statearr_13675_13737[(2)] = inst_13619);

(statearr_13675_13737[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
});})(c__13129__auto__,jobs,results,process,async))
;
return ((function (switch__13015__auto__,c__13129__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0 = (function (){
var statearr_13679 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__);

(statearr_13679[(1)] = (1));

return statearr_13679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1 = (function (state_13650){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_13650);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e13680){if((e13680 instanceof Object)){
var ex__13019__auto__ = e13680;
var statearr_13681_13738 = state_13650;
(statearr_13681_13738[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13650);

return cljs.core.cst$kw$recur;
} else {
throw e13680;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__13739 = state_13650;
state_13650 = G__13739;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__ = function(state_13650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1.call(this,state_13650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto__,jobs,results,process,async))
})();
var state__13131__auto__ = (function (){var statearr_13682 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_13682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto__);

return statearr_13682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto__,jobs,results,process,async))
);

return c__13129__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args13740 = [];
var len__5726__auto___13743 = arguments.length;
var i__5727__auto___13744 = (0);
while(true){
if((i__5727__auto___13744 < len__5726__auto___13743)){
args13740.push((arguments[i__5727__auto___13744]));

var G__13745 = (i__5727__auto___13744 + (1));
i__5727__auto___13744 = G__13745;
continue;
} else {
}
break;
}

var G__13742 = args13740.length;
switch (G__13742) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13740.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args13747 = [];
var len__5726__auto___13750 = arguments.length;
var i__5727__auto___13751 = (0);
while(true){
if((i__5727__auto___13751 < len__5726__auto___13750)){
args13747.push((arguments[i__5727__auto___13751]));

var G__13752 = (i__5727__auto___13751 + (1));
i__5727__auto___13751 = G__13752;
continue;
} else {
}
break;
}

var G__13749 = args13747.length;
switch (G__13749) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13747.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args13754 = [];
var len__5726__auto___13807 = arguments.length;
var i__5727__auto___13808 = (0);
while(true){
if((i__5727__auto___13808 < len__5726__auto___13807)){
args13754.push((arguments[i__5727__auto___13808]));

var G__13809 = (i__5727__auto___13808 + (1));
i__5727__auto___13808 = G__13809;
continue;
} else {
}
break;
}

var G__13756 = args13754.length;
switch (G__13756) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13754.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13129__auto___13811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___13811,tc,fc){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___13811,tc,fc){
return (function (state_13782){
var state_val_13783 = (state_13782[(1)]);
if((state_val_13783 === (7))){
var inst_13778 = (state_13782[(2)]);
var state_13782__$1 = state_13782;
var statearr_13784_13812 = state_13782__$1;
(statearr_13784_13812[(2)] = inst_13778);

(statearr_13784_13812[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13783 === (1))){
var state_13782__$1 = state_13782;
var statearr_13785_13813 = state_13782__$1;
(statearr_13785_13813[(2)] = null);

(statearr_13785_13813[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13783 === (4))){
var inst_13759 = (state_13782[(7)]);
var inst_13759__$1 = (state_13782[(2)]);
var inst_13760 = (inst_13759__$1 == null);
var state_13782__$1 = (function (){var statearr_13786 = state_13782;
(statearr_13786[(7)] = inst_13759__$1);

return statearr_13786;
})();
if(cljs.core.truth_(inst_13760)){
var statearr_13787_13814 = state_13782__$1;
(statearr_13787_13814[(1)] = (5));

} else {
var statearr_13788_13815 = state_13782__$1;
(statearr_13788_13815[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13783 === (13))){
var state_13782__$1 = state_13782;
var statearr_13789_13816 = state_13782__$1;
(statearr_13789_13816[(2)] = null);

(statearr_13789_13816[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13783 === (6))){
var inst_13759 = (state_13782[(7)]);
var inst_13765 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13759) : p.call(null,inst_13759));
var state_13782__$1 = state_13782;
if(cljs.core.truth_(inst_13765)){
var statearr_13790_13817 = state_13782__$1;
(statearr_13790_13817[(1)] = (9));

} else {
var statearr_13791_13818 = state_13782__$1;
(statearr_13791_13818[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13783 === (3))){
var inst_13780 = (state_13782[(2)]);
var state_13782__$1 = state_13782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13782__$1,inst_13780);
} else {
if((state_val_13783 === (12))){
var state_13782__$1 = state_13782;
var statearr_13792_13819 = state_13782__$1;
(statearr_13792_13819[(2)] = null);

(statearr_13792_13819[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13783 === (2))){
var state_13782__$1 = state_13782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13782__$1,(4),ch);
} else {
if((state_val_13783 === (11))){
var inst_13759 = (state_13782[(7)]);
var inst_13769 = (state_13782[(2)]);
var state_13782__$1 = state_13782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13782__$1,(8),inst_13769,inst_13759);
} else {
if((state_val_13783 === (9))){
var state_13782__$1 = state_13782;
var statearr_13793_13820 = state_13782__$1;
(statearr_13793_13820[(2)] = tc);

(statearr_13793_13820[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13783 === (5))){
var inst_13762 = cljs.core.async.close_BANG_(tc);
var inst_13763 = cljs.core.async.close_BANG_(fc);
var state_13782__$1 = (function (){var statearr_13794 = state_13782;
(statearr_13794[(8)] = inst_13762);

return statearr_13794;
})();
var statearr_13795_13821 = state_13782__$1;
(statearr_13795_13821[(2)] = inst_13763);

(statearr_13795_13821[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13783 === (14))){
var inst_13776 = (state_13782[(2)]);
var state_13782__$1 = state_13782;
var statearr_13796_13822 = state_13782__$1;
(statearr_13796_13822[(2)] = inst_13776);

(statearr_13796_13822[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13783 === (10))){
var state_13782__$1 = state_13782;
var statearr_13797_13823 = state_13782__$1;
(statearr_13797_13823[(2)] = fc);

(statearr_13797_13823[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13783 === (8))){
var inst_13771 = (state_13782[(2)]);
var state_13782__$1 = state_13782;
if(cljs.core.truth_(inst_13771)){
var statearr_13798_13824 = state_13782__$1;
(statearr_13798_13824[(1)] = (12));

} else {
var statearr_13799_13825 = state_13782__$1;
(statearr_13799_13825[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
});})(c__13129__auto___13811,tc,fc))
;
return ((function (switch__13015__auto__,c__13129__auto___13811,tc,fc){
return (function() {
var cljs$core$async$state_machine__13016__auto__ = null;
var cljs$core$async$state_machine__13016__auto____0 = (function (){
var statearr_13803 = [null,null,null,null,null,null,null,null,null];
(statearr_13803[(0)] = cljs$core$async$state_machine__13016__auto__);

(statearr_13803[(1)] = (1));

return statearr_13803;
});
var cljs$core$async$state_machine__13016__auto____1 = (function (state_13782){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_13782);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e13804){if((e13804 instanceof Object)){
var ex__13019__auto__ = e13804;
var statearr_13805_13826 = state_13782;
(statearr_13805_13826[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13782);

return cljs.core.cst$kw$recur;
} else {
throw e13804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__13827 = state_13782;
state_13782 = G__13827;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$state_machine__13016__auto__ = function(state_13782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13016__auto____1.call(this,state_13782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13016__auto____0;
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13016__auto____1;
return cljs$core$async$state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___13811,tc,fc))
})();
var state__13131__auto__ = (function (){var statearr_13806 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_13806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___13811);

return statearr_13806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___13811,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13129__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto__){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto__){
return (function (state_13891){
var state_val_13892 = (state_13891[(1)]);
if((state_val_13892 === (7))){
var inst_13887 = (state_13891[(2)]);
var state_13891__$1 = state_13891;
var statearr_13893_13914 = state_13891__$1;
(statearr_13893_13914[(2)] = inst_13887);

(statearr_13893_13914[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13892 === (1))){
var inst_13871 = init;
var state_13891__$1 = (function (){var statearr_13894 = state_13891;
(statearr_13894[(7)] = inst_13871);

return statearr_13894;
})();
var statearr_13895_13915 = state_13891__$1;
(statearr_13895_13915[(2)] = null);

(statearr_13895_13915[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13892 === (4))){
var inst_13874 = (state_13891[(8)]);
var inst_13874__$1 = (state_13891[(2)]);
var inst_13875 = (inst_13874__$1 == null);
var state_13891__$1 = (function (){var statearr_13896 = state_13891;
(statearr_13896[(8)] = inst_13874__$1);

return statearr_13896;
})();
if(cljs.core.truth_(inst_13875)){
var statearr_13897_13916 = state_13891__$1;
(statearr_13897_13916[(1)] = (5));

} else {
var statearr_13898_13917 = state_13891__$1;
(statearr_13898_13917[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13892 === (6))){
var inst_13874 = (state_13891[(8)]);
var inst_13878 = (state_13891[(9)]);
var inst_13871 = (state_13891[(7)]);
var inst_13878__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13871,inst_13874) : f.call(null,inst_13871,inst_13874));
var inst_13879 = cljs.core.reduced_QMARK_(inst_13878__$1);
var state_13891__$1 = (function (){var statearr_13899 = state_13891;
(statearr_13899[(9)] = inst_13878__$1);

return statearr_13899;
})();
if(inst_13879){
var statearr_13900_13918 = state_13891__$1;
(statearr_13900_13918[(1)] = (8));

} else {
var statearr_13901_13919 = state_13891__$1;
(statearr_13901_13919[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13892 === (3))){
var inst_13889 = (state_13891[(2)]);
var state_13891__$1 = state_13891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13891__$1,inst_13889);
} else {
if((state_val_13892 === (2))){
var state_13891__$1 = state_13891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13891__$1,(4),ch);
} else {
if((state_val_13892 === (9))){
var inst_13878 = (state_13891[(9)]);
var inst_13871 = inst_13878;
var state_13891__$1 = (function (){var statearr_13902 = state_13891;
(statearr_13902[(7)] = inst_13871);

return statearr_13902;
})();
var statearr_13903_13920 = state_13891__$1;
(statearr_13903_13920[(2)] = null);

(statearr_13903_13920[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13892 === (5))){
var inst_13871 = (state_13891[(7)]);
var state_13891__$1 = state_13891;
var statearr_13904_13921 = state_13891__$1;
(statearr_13904_13921[(2)] = inst_13871);

(statearr_13904_13921[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13892 === (10))){
var inst_13885 = (state_13891[(2)]);
var state_13891__$1 = state_13891;
var statearr_13905_13922 = state_13891__$1;
(statearr_13905_13922[(2)] = inst_13885);

(statearr_13905_13922[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13892 === (8))){
var inst_13878 = (state_13891[(9)]);
var inst_13881 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_13878) : cljs.core.deref.call(null,inst_13878));
var state_13891__$1 = state_13891;
var statearr_13906_13923 = state_13891__$1;
(statearr_13906_13923[(2)] = inst_13881);

(statearr_13906_13923[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
});})(c__13129__auto__))
;
return ((function (switch__13015__auto__,c__13129__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13016__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13016__auto____0 = (function (){
var statearr_13910 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13910[(0)] = cljs$core$async$reduce_$_state_machine__13016__auto__);

(statearr_13910[(1)] = (1));

return statearr_13910;
});
var cljs$core$async$reduce_$_state_machine__13016__auto____1 = (function (state_13891){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_13891);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e13911){if((e13911 instanceof Object)){
var ex__13019__auto__ = e13911;
var statearr_13912_13924 = state_13891;
(statearr_13912_13924[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13891);

return cljs.core.cst$kw$recur;
} else {
throw e13911;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__13925 = state_13891;
state_13891 = G__13925;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13016__auto__ = function(state_13891){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13016__auto____1.call(this,state_13891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13016__auto____0;
cljs$core$async$reduce_$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13016__auto____1;
return cljs$core$async$reduce_$_state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto__))
})();
var state__13131__auto__ = (function (){var statearr_13913 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_13913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto__);

return statearr_13913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto__))
);

return c__13129__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args13926 = [];
var len__5726__auto___13978 = arguments.length;
var i__5727__auto___13979 = (0);
while(true){
if((i__5727__auto___13979 < len__5726__auto___13978)){
args13926.push((arguments[i__5727__auto___13979]));

var G__13980 = (i__5727__auto___13979 + (1));
i__5727__auto___13979 = G__13980;
continue;
} else {
}
break;
}

var G__13928 = args13926.length;
switch (G__13928) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13926.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13129__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto__){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto__){
return (function (state_13953){
var state_val_13954 = (state_13953[(1)]);
if((state_val_13954 === (7))){
var inst_13935 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_13955_13982 = state_13953__$1;
(statearr_13955_13982[(2)] = inst_13935);

(statearr_13955_13982[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13954 === (1))){
var inst_13929 = cljs.core.seq(coll);
var inst_13930 = inst_13929;
var state_13953__$1 = (function (){var statearr_13956 = state_13953;
(statearr_13956[(7)] = inst_13930);

return statearr_13956;
})();
var statearr_13957_13983 = state_13953__$1;
(statearr_13957_13983[(2)] = null);

(statearr_13957_13983[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13954 === (4))){
var inst_13930 = (state_13953[(7)]);
var inst_13933 = cljs.core.first(inst_13930);
var state_13953__$1 = state_13953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13953__$1,(7),ch,inst_13933);
} else {
if((state_val_13954 === (13))){
var inst_13947 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_13958_13984 = state_13953__$1;
(statearr_13958_13984[(2)] = inst_13947);

(statearr_13958_13984[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13954 === (6))){
var inst_13938 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
if(cljs.core.truth_(inst_13938)){
var statearr_13959_13985 = state_13953__$1;
(statearr_13959_13985[(1)] = (8));

} else {
var statearr_13960_13986 = state_13953__$1;
(statearr_13960_13986[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13954 === (3))){
var inst_13951 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13953__$1,inst_13951);
} else {
if((state_val_13954 === (12))){
var state_13953__$1 = state_13953;
var statearr_13961_13987 = state_13953__$1;
(statearr_13961_13987[(2)] = null);

(statearr_13961_13987[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13954 === (2))){
var inst_13930 = (state_13953[(7)]);
var state_13953__$1 = state_13953;
if(cljs.core.truth_(inst_13930)){
var statearr_13962_13988 = state_13953__$1;
(statearr_13962_13988[(1)] = (4));

} else {
var statearr_13963_13989 = state_13953__$1;
(statearr_13963_13989[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13954 === (11))){
var inst_13944 = cljs.core.async.close_BANG_(ch);
var state_13953__$1 = state_13953;
var statearr_13964_13990 = state_13953__$1;
(statearr_13964_13990[(2)] = inst_13944);

(statearr_13964_13990[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13954 === (9))){
var state_13953__$1 = state_13953;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13965_13991 = state_13953__$1;
(statearr_13965_13991[(1)] = (11));

} else {
var statearr_13966_13992 = state_13953__$1;
(statearr_13966_13992[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13954 === (5))){
var inst_13930 = (state_13953[(7)]);
var state_13953__$1 = state_13953;
var statearr_13967_13993 = state_13953__$1;
(statearr_13967_13993[(2)] = inst_13930);

(statearr_13967_13993[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13954 === (10))){
var inst_13949 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_13968_13994 = state_13953__$1;
(statearr_13968_13994[(2)] = inst_13949);

(statearr_13968_13994[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13954 === (8))){
var inst_13930 = (state_13953[(7)]);
var inst_13940 = cljs.core.next(inst_13930);
var inst_13930__$1 = inst_13940;
var state_13953__$1 = (function (){var statearr_13969 = state_13953;
(statearr_13969[(7)] = inst_13930__$1);

return statearr_13969;
})();
var statearr_13970_13995 = state_13953__$1;
(statearr_13970_13995[(2)] = null);

(statearr_13970_13995[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
});})(c__13129__auto__))
;
return ((function (switch__13015__auto__,c__13129__auto__){
return (function() {
var cljs$core$async$state_machine__13016__auto__ = null;
var cljs$core$async$state_machine__13016__auto____0 = (function (){
var statearr_13974 = [null,null,null,null,null,null,null,null];
(statearr_13974[(0)] = cljs$core$async$state_machine__13016__auto__);

(statearr_13974[(1)] = (1));

return statearr_13974;
});
var cljs$core$async$state_machine__13016__auto____1 = (function (state_13953){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_13953);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e13975){if((e13975 instanceof Object)){
var ex__13019__auto__ = e13975;
var statearr_13976_13996 = state_13953;
(statearr_13976_13996[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13953);

return cljs.core.cst$kw$recur;
} else {
throw e13975;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__13997 = state_13953;
state_13953 = G__13997;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$state_machine__13016__auto__ = function(state_13953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13016__auto____1.call(this,state_13953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13016__auto____0;
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13016__auto____1;
return cljs$core$async$state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto__))
})();
var state__13131__auto__ = (function (){var statearr_13977 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_13977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto__);

return statearr_13977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto__))
);

return c__13129__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto__.call(null,_));
} else {
var m__5324__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5324__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5324__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5324__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto__.call(null,m,ch));
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5324__auto__.call(null,m));
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5324__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__14222 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14222) : cljs.core.atom.call(null,G__14222));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14223 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14223 = (function (mult,ch,cs,meta14224){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14224 = meta14224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14225,meta14224__$1){
var self__ = this;
var _14225__$1 = this;
return (new cljs.core.async.t_cljs$core$async14223(self__.mult,self__.ch,self__.cs,meta14224__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14225){
var self__ = this;
var _14225__$1 = this;
return self__.meta14224;
});})(cs))
;

cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14226_14446 = self__.cs;
var G__14227_14447 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14226_14446,G__14227_14447) : cljs.core.reset_BANG_.call(null,G__14226_14446,G__14227_14447));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14223.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta14224], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14223";

cljs.core.async.t_cljs$core$async14223.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async14223");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14223 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14223(mult__$1,ch__$1,cs__$1,meta14224){
return (new cljs.core.async.t_cljs$core$async14223(mult__$1,ch__$1,cs__$1,meta14224));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14223(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13129__auto___14448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___14448,cs,m,dchan,dctr,done){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___14448,cs,m,dchan,dctr,done){
return (function (state_14358){
var state_val_14359 = (state_14358[(1)]);
if((state_val_14359 === (7))){
var inst_14354 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
var statearr_14360_14449 = state_14358__$1;
(statearr_14360_14449[(2)] = inst_14354);

(statearr_14360_14449[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (20))){
var inst_14259 = (state_14358[(7)]);
var inst_14269 = cljs.core.first(inst_14259);
var inst_14270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14269,(0),null);
var inst_14271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14269,(1),null);
var state_14358__$1 = (function (){var statearr_14361 = state_14358;
(statearr_14361[(8)] = inst_14270);

return statearr_14361;
})();
if(cljs.core.truth_(inst_14271)){
var statearr_14362_14450 = state_14358__$1;
(statearr_14362_14450[(1)] = (22));

} else {
var statearr_14363_14451 = state_14358__$1;
(statearr_14363_14451[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (27))){
var inst_14301 = (state_14358[(9)]);
var inst_14230 = (state_14358[(10)]);
var inst_14299 = (state_14358[(11)]);
var inst_14306 = (state_14358[(12)]);
var inst_14306__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14299,inst_14301);
var inst_14307 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14306__$1,inst_14230,done);
var state_14358__$1 = (function (){var statearr_14364 = state_14358;
(statearr_14364[(12)] = inst_14306__$1);

return statearr_14364;
})();
if(cljs.core.truth_(inst_14307)){
var statearr_14365_14452 = state_14358__$1;
(statearr_14365_14452[(1)] = (30));

} else {
var statearr_14366_14453 = state_14358__$1;
(statearr_14366_14453[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (1))){
var state_14358__$1 = state_14358;
var statearr_14367_14454 = state_14358__$1;
(statearr_14367_14454[(2)] = null);

(statearr_14367_14454[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (24))){
var inst_14259 = (state_14358[(7)]);
var inst_14276 = (state_14358[(2)]);
var inst_14277 = cljs.core.next(inst_14259);
var inst_14239 = inst_14277;
var inst_14240 = null;
var inst_14241 = (0);
var inst_14242 = (0);
var state_14358__$1 = (function (){var statearr_14368 = state_14358;
(statearr_14368[(13)] = inst_14241);

(statearr_14368[(14)] = inst_14240);

(statearr_14368[(15)] = inst_14276);

(statearr_14368[(16)] = inst_14239);

(statearr_14368[(17)] = inst_14242);

return statearr_14368;
})();
var statearr_14369_14455 = state_14358__$1;
(statearr_14369_14455[(2)] = null);

(statearr_14369_14455[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (39))){
var state_14358__$1 = state_14358;
var statearr_14373_14456 = state_14358__$1;
(statearr_14373_14456[(2)] = null);

(statearr_14373_14456[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (4))){
var inst_14230 = (state_14358[(10)]);
var inst_14230__$1 = (state_14358[(2)]);
var inst_14231 = (inst_14230__$1 == null);
var state_14358__$1 = (function (){var statearr_14374 = state_14358;
(statearr_14374[(10)] = inst_14230__$1);

return statearr_14374;
})();
if(cljs.core.truth_(inst_14231)){
var statearr_14375_14457 = state_14358__$1;
(statearr_14375_14457[(1)] = (5));

} else {
var statearr_14376_14458 = state_14358__$1;
(statearr_14376_14458[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (15))){
var inst_14241 = (state_14358[(13)]);
var inst_14240 = (state_14358[(14)]);
var inst_14239 = (state_14358[(16)]);
var inst_14242 = (state_14358[(17)]);
var inst_14255 = (state_14358[(2)]);
var inst_14256 = (inst_14242 + (1));
var tmp14370 = inst_14241;
var tmp14371 = inst_14240;
var tmp14372 = inst_14239;
var inst_14239__$1 = tmp14372;
var inst_14240__$1 = tmp14371;
var inst_14241__$1 = tmp14370;
var inst_14242__$1 = inst_14256;
var state_14358__$1 = (function (){var statearr_14377 = state_14358;
(statearr_14377[(18)] = inst_14255);

(statearr_14377[(13)] = inst_14241__$1);

(statearr_14377[(14)] = inst_14240__$1);

(statearr_14377[(16)] = inst_14239__$1);

(statearr_14377[(17)] = inst_14242__$1);

return statearr_14377;
})();
var statearr_14378_14459 = state_14358__$1;
(statearr_14378_14459[(2)] = null);

(statearr_14378_14459[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (21))){
var inst_14280 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
var statearr_14382_14460 = state_14358__$1;
(statearr_14382_14460[(2)] = inst_14280);

(statearr_14382_14460[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (31))){
var inst_14306 = (state_14358[(12)]);
var inst_14310 = done(null);
var inst_14311 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14306);
var state_14358__$1 = (function (){var statearr_14383 = state_14358;
(statearr_14383[(19)] = inst_14310);

return statearr_14383;
})();
var statearr_14384_14461 = state_14358__$1;
(statearr_14384_14461[(2)] = inst_14311);

(statearr_14384_14461[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (32))){
var inst_14298 = (state_14358[(20)]);
var inst_14301 = (state_14358[(9)]);
var inst_14299 = (state_14358[(11)]);
var inst_14300 = (state_14358[(21)]);
var inst_14313 = (state_14358[(2)]);
var inst_14314 = (inst_14301 + (1));
var tmp14379 = inst_14298;
var tmp14380 = inst_14299;
var tmp14381 = inst_14300;
var inst_14298__$1 = tmp14379;
var inst_14299__$1 = tmp14380;
var inst_14300__$1 = tmp14381;
var inst_14301__$1 = inst_14314;
var state_14358__$1 = (function (){var statearr_14385 = state_14358;
(statearr_14385[(20)] = inst_14298__$1);

(statearr_14385[(9)] = inst_14301__$1);

(statearr_14385[(11)] = inst_14299__$1);

(statearr_14385[(22)] = inst_14313);

(statearr_14385[(21)] = inst_14300__$1);

return statearr_14385;
})();
var statearr_14386_14462 = state_14358__$1;
(statearr_14386_14462[(2)] = null);

(statearr_14386_14462[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (40))){
var inst_14326 = (state_14358[(23)]);
var inst_14330 = done(null);
var inst_14331 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14326);
var state_14358__$1 = (function (){var statearr_14387 = state_14358;
(statearr_14387[(24)] = inst_14330);

return statearr_14387;
})();
var statearr_14388_14463 = state_14358__$1;
(statearr_14388_14463[(2)] = inst_14331);

(statearr_14388_14463[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (33))){
var inst_14317 = (state_14358[(25)]);
var inst_14319 = cljs.core.chunked_seq_QMARK_(inst_14317);
var state_14358__$1 = state_14358;
if(inst_14319){
var statearr_14389_14464 = state_14358__$1;
(statearr_14389_14464[(1)] = (36));

} else {
var statearr_14390_14465 = state_14358__$1;
(statearr_14390_14465[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (13))){
var inst_14249 = (state_14358[(26)]);
var inst_14252 = cljs.core.async.close_BANG_(inst_14249);
var state_14358__$1 = state_14358;
var statearr_14391_14466 = state_14358__$1;
(statearr_14391_14466[(2)] = inst_14252);

(statearr_14391_14466[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (22))){
var inst_14270 = (state_14358[(8)]);
var inst_14273 = cljs.core.async.close_BANG_(inst_14270);
var state_14358__$1 = state_14358;
var statearr_14392_14467 = state_14358__$1;
(statearr_14392_14467[(2)] = inst_14273);

(statearr_14392_14467[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (36))){
var inst_14317 = (state_14358[(25)]);
var inst_14321 = cljs.core.chunk_first(inst_14317);
var inst_14322 = cljs.core.chunk_rest(inst_14317);
var inst_14323 = cljs.core.count(inst_14321);
var inst_14298 = inst_14322;
var inst_14299 = inst_14321;
var inst_14300 = inst_14323;
var inst_14301 = (0);
var state_14358__$1 = (function (){var statearr_14393 = state_14358;
(statearr_14393[(20)] = inst_14298);

(statearr_14393[(9)] = inst_14301);

(statearr_14393[(11)] = inst_14299);

(statearr_14393[(21)] = inst_14300);

return statearr_14393;
})();
var statearr_14394_14468 = state_14358__$1;
(statearr_14394_14468[(2)] = null);

(statearr_14394_14468[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (41))){
var inst_14317 = (state_14358[(25)]);
var inst_14333 = (state_14358[(2)]);
var inst_14334 = cljs.core.next(inst_14317);
var inst_14298 = inst_14334;
var inst_14299 = null;
var inst_14300 = (0);
var inst_14301 = (0);
var state_14358__$1 = (function (){var statearr_14395 = state_14358;
(statearr_14395[(27)] = inst_14333);

(statearr_14395[(20)] = inst_14298);

(statearr_14395[(9)] = inst_14301);

(statearr_14395[(11)] = inst_14299);

(statearr_14395[(21)] = inst_14300);

return statearr_14395;
})();
var statearr_14396_14469 = state_14358__$1;
(statearr_14396_14469[(2)] = null);

(statearr_14396_14469[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (43))){
var state_14358__$1 = state_14358;
var statearr_14397_14470 = state_14358__$1;
(statearr_14397_14470[(2)] = null);

(statearr_14397_14470[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (29))){
var inst_14342 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
var statearr_14398_14471 = state_14358__$1;
(statearr_14398_14471[(2)] = inst_14342);

(statearr_14398_14471[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (44))){
var inst_14351 = (state_14358[(2)]);
var state_14358__$1 = (function (){var statearr_14399 = state_14358;
(statearr_14399[(28)] = inst_14351);

return statearr_14399;
})();
var statearr_14400_14472 = state_14358__$1;
(statearr_14400_14472[(2)] = null);

(statearr_14400_14472[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (6))){
var inst_14290 = (state_14358[(29)]);
var inst_14289 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14290__$1 = cljs.core.keys(inst_14289);
var inst_14291 = cljs.core.count(inst_14290__$1);
var inst_14292 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_14291) : cljs.core.reset_BANG_.call(null,dctr,inst_14291));
var inst_14297 = cljs.core.seq(inst_14290__$1);
var inst_14298 = inst_14297;
var inst_14299 = null;
var inst_14300 = (0);
var inst_14301 = (0);
var state_14358__$1 = (function (){var statearr_14401 = state_14358;
(statearr_14401[(30)] = inst_14292);

(statearr_14401[(20)] = inst_14298);

(statearr_14401[(9)] = inst_14301);

(statearr_14401[(11)] = inst_14299);

(statearr_14401[(29)] = inst_14290__$1);

(statearr_14401[(21)] = inst_14300);

return statearr_14401;
})();
var statearr_14402_14473 = state_14358__$1;
(statearr_14402_14473[(2)] = null);

(statearr_14402_14473[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (28))){
var inst_14298 = (state_14358[(20)]);
var inst_14317 = (state_14358[(25)]);
var inst_14317__$1 = cljs.core.seq(inst_14298);
var state_14358__$1 = (function (){var statearr_14403 = state_14358;
(statearr_14403[(25)] = inst_14317__$1);

return statearr_14403;
})();
if(inst_14317__$1){
var statearr_14404_14474 = state_14358__$1;
(statearr_14404_14474[(1)] = (33));

} else {
var statearr_14405_14475 = state_14358__$1;
(statearr_14405_14475[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (25))){
var inst_14301 = (state_14358[(9)]);
var inst_14300 = (state_14358[(21)]);
var inst_14303 = (inst_14301 < inst_14300);
var inst_14304 = inst_14303;
var state_14358__$1 = state_14358;
if(cljs.core.truth_(inst_14304)){
var statearr_14406_14476 = state_14358__$1;
(statearr_14406_14476[(1)] = (27));

} else {
var statearr_14407_14477 = state_14358__$1;
(statearr_14407_14477[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (34))){
var state_14358__$1 = state_14358;
var statearr_14408_14478 = state_14358__$1;
(statearr_14408_14478[(2)] = null);

(statearr_14408_14478[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (17))){
var state_14358__$1 = state_14358;
var statearr_14409_14479 = state_14358__$1;
(statearr_14409_14479[(2)] = null);

(statearr_14409_14479[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (3))){
var inst_14356 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14358__$1,inst_14356);
} else {
if((state_val_14359 === (12))){
var inst_14285 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
var statearr_14410_14480 = state_14358__$1;
(statearr_14410_14480[(2)] = inst_14285);

(statearr_14410_14480[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (2))){
var state_14358__$1 = state_14358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14358__$1,(4),ch);
} else {
if((state_val_14359 === (23))){
var state_14358__$1 = state_14358;
var statearr_14411_14481 = state_14358__$1;
(statearr_14411_14481[(2)] = null);

(statearr_14411_14481[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (35))){
var inst_14340 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
var statearr_14412_14482 = state_14358__$1;
(statearr_14412_14482[(2)] = inst_14340);

(statearr_14412_14482[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (19))){
var inst_14259 = (state_14358[(7)]);
var inst_14263 = cljs.core.chunk_first(inst_14259);
var inst_14264 = cljs.core.chunk_rest(inst_14259);
var inst_14265 = cljs.core.count(inst_14263);
var inst_14239 = inst_14264;
var inst_14240 = inst_14263;
var inst_14241 = inst_14265;
var inst_14242 = (0);
var state_14358__$1 = (function (){var statearr_14413 = state_14358;
(statearr_14413[(13)] = inst_14241);

(statearr_14413[(14)] = inst_14240);

(statearr_14413[(16)] = inst_14239);

(statearr_14413[(17)] = inst_14242);

return statearr_14413;
})();
var statearr_14414_14483 = state_14358__$1;
(statearr_14414_14483[(2)] = null);

(statearr_14414_14483[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (11))){
var inst_14259 = (state_14358[(7)]);
var inst_14239 = (state_14358[(16)]);
var inst_14259__$1 = cljs.core.seq(inst_14239);
var state_14358__$1 = (function (){var statearr_14415 = state_14358;
(statearr_14415[(7)] = inst_14259__$1);

return statearr_14415;
})();
if(inst_14259__$1){
var statearr_14416_14484 = state_14358__$1;
(statearr_14416_14484[(1)] = (16));

} else {
var statearr_14417_14485 = state_14358__$1;
(statearr_14417_14485[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (9))){
var inst_14287 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
var statearr_14418_14486 = state_14358__$1;
(statearr_14418_14486[(2)] = inst_14287);

(statearr_14418_14486[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (5))){
var inst_14237 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14238 = cljs.core.seq(inst_14237);
var inst_14239 = inst_14238;
var inst_14240 = null;
var inst_14241 = (0);
var inst_14242 = (0);
var state_14358__$1 = (function (){var statearr_14419 = state_14358;
(statearr_14419[(13)] = inst_14241);

(statearr_14419[(14)] = inst_14240);

(statearr_14419[(16)] = inst_14239);

(statearr_14419[(17)] = inst_14242);

return statearr_14419;
})();
var statearr_14420_14487 = state_14358__$1;
(statearr_14420_14487[(2)] = null);

(statearr_14420_14487[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (14))){
var state_14358__$1 = state_14358;
var statearr_14421_14488 = state_14358__$1;
(statearr_14421_14488[(2)] = null);

(statearr_14421_14488[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (45))){
var inst_14348 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
var statearr_14422_14489 = state_14358__$1;
(statearr_14422_14489[(2)] = inst_14348);

(statearr_14422_14489[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (26))){
var inst_14290 = (state_14358[(29)]);
var inst_14344 = (state_14358[(2)]);
var inst_14345 = cljs.core.seq(inst_14290);
var state_14358__$1 = (function (){var statearr_14423 = state_14358;
(statearr_14423[(31)] = inst_14344);

return statearr_14423;
})();
if(inst_14345){
var statearr_14424_14490 = state_14358__$1;
(statearr_14424_14490[(1)] = (42));

} else {
var statearr_14425_14491 = state_14358__$1;
(statearr_14425_14491[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (16))){
var inst_14259 = (state_14358[(7)]);
var inst_14261 = cljs.core.chunked_seq_QMARK_(inst_14259);
var state_14358__$1 = state_14358;
if(inst_14261){
var statearr_14426_14492 = state_14358__$1;
(statearr_14426_14492[(1)] = (19));

} else {
var statearr_14427_14493 = state_14358__$1;
(statearr_14427_14493[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (38))){
var inst_14337 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
var statearr_14428_14494 = state_14358__$1;
(statearr_14428_14494[(2)] = inst_14337);

(statearr_14428_14494[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (30))){
var state_14358__$1 = state_14358;
var statearr_14429_14495 = state_14358__$1;
(statearr_14429_14495[(2)] = null);

(statearr_14429_14495[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (10))){
var inst_14240 = (state_14358[(14)]);
var inst_14242 = (state_14358[(17)]);
var inst_14248 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14240,inst_14242);
var inst_14249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14248,(0),null);
var inst_14250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14248,(1),null);
var state_14358__$1 = (function (){var statearr_14430 = state_14358;
(statearr_14430[(26)] = inst_14249);

return statearr_14430;
})();
if(cljs.core.truth_(inst_14250)){
var statearr_14431_14496 = state_14358__$1;
(statearr_14431_14496[(1)] = (13));

} else {
var statearr_14432_14497 = state_14358__$1;
(statearr_14432_14497[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (18))){
var inst_14283 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
var statearr_14433_14498 = state_14358__$1;
(statearr_14433_14498[(2)] = inst_14283);

(statearr_14433_14498[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (42))){
var state_14358__$1 = state_14358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14358__$1,(45),dchan);
} else {
if((state_val_14359 === (37))){
var inst_14326 = (state_14358[(23)]);
var inst_14230 = (state_14358[(10)]);
var inst_14317 = (state_14358[(25)]);
var inst_14326__$1 = cljs.core.first(inst_14317);
var inst_14327 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14326__$1,inst_14230,done);
var state_14358__$1 = (function (){var statearr_14434 = state_14358;
(statearr_14434[(23)] = inst_14326__$1);

return statearr_14434;
})();
if(cljs.core.truth_(inst_14327)){
var statearr_14435_14499 = state_14358__$1;
(statearr_14435_14499[(1)] = (39));

} else {
var statearr_14436_14500 = state_14358__$1;
(statearr_14436_14500[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14359 === (8))){
var inst_14241 = (state_14358[(13)]);
var inst_14242 = (state_14358[(17)]);
var inst_14244 = (inst_14242 < inst_14241);
var inst_14245 = inst_14244;
var state_14358__$1 = state_14358;
if(cljs.core.truth_(inst_14245)){
var statearr_14437_14501 = state_14358__$1;
(statearr_14437_14501[(1)] = (10));

} else {
var statearr_14438_14502 = state_14358__$1;
(statearr_14438_14502[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
});})(c__13129__auto___14448,cs,m,dchan,dctr,done))
;
return ((function (switch__13015__auto__,c__13129__auto___14448,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13016__auto__ = null;
var cljs$core$async$mult_$_state_machine__13016__auto____0 = (function (){
var statearr_14442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14442[(0)] = cljs$core$async$mult_$_state_machine__13016__auto__);

(statearr_14442[(1)] = (1));

return statearr_14442;
});
var cljs$core$async$mult_$_state_machine__13016__auto____1 = (function (state_14358){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_14358);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e14443){if((e14443 instanceof Object)){
var ex__13019__auto__ = e14443;
var statearr_14444_14503 = state_14358;
(statearr_14444_14503[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14358);

return cljs.core.cst$kw$recur;
} else {
throw e14443;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__14504 = state_14358;
state_14358 = G__14504;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13016__auto__ = function(state_14358){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13016__auto____1.call(this,state_14358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13016__auto____0;
cljs$core$async$mult_$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13016__auto____1;
return cljs$core$async$mult_$_state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___14448,cs,m,dchan,dctr,done))
})();
var state__13131__auto__ = (function (){var statearr_14445 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_14445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___14448);

return statearr_14445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___14448,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args14505 = [];
var len__5726__auto___14508 = arguments.length;
var i__5727__auto___14509 = (0);
while(true){
if((i__5727__auto___14509 < len__5726__auto___14508)){
args14505.push((arguments[i__5727__auto___14509]));

var G__14510 = (i__5727__auto___14509 + (1));
i__5727__auto___14509 = G__14510;
continue;
} else {
}
break;
}

var G__14507 = args14505.length;
switch (G__14507) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14505.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto__.call(null,m,ch));
} else {
var m__5324__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto__.call(null,m,ch));
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5324__auto__.call(null,m));
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5324__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5324__auto__.call(null,m,state_map));
} else {
var m__5324__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5324__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5324__auto__.call(null,m,mode));
} else {
var m__5324__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5324__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___14522 = arguments.length;
var i__5727__auto___14523 = (0);
while(true){
if((i__5727__auto___14523 < len__5726__auto___14522)){
args__5733__auto__.push((arguments[i__5727__auto___14523]));

var G__14524 = (i__5727__auto___14523 + (1));
i__5727__auto___14523 = G__14524;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14516){
var map__14517 = p__14516;
var map__14517__$1 = ((((!((map__14517 == null)))?((((map__14517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14517):map__14517);
var opts = map__14517__$1;
var statearr_14519_14525 = state;
(statearr_14519_14525[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__14517,map__14517__$1,opts){
return (function (val){
var statearr_14520_14526 = state;
(statearr_14520_14526[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__14517,map__14517__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_14521_14527 = state;
(statearr_14521_14527[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14512){
var G__14513 = cljs.core.first(seq14512);
var seq14512__$1 = cljs.core.next(seq14512);
var G__14514 = cljs.core.first(seq14512__$1);
var seq14512__$2 = cljs.core.next(seq14512__$1);
var G__14515 = cljs.core.first(seq14512__$2);
var seq14512__$3 = cljs.core.next(seq14512__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14513,G__14514,G__14515,seq14512__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__14694 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14694) : cljs.core.atom.call(null,G__14694));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14695 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14695 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14696){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14696 = meta14696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14697,meta14696__$1){
var self__ = this;
var _14697__$1 = this;
return (new cljs.core.async.t_cljs$core$async14695(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14696__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14695.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14697){
var self__ = this;
var _14697__$1 = this;
return self__.meta14696;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14695.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14695.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14695.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14695.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14695.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14695.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14698_14860 = self__.cs;
var G__14699_14861 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14698_14860,G__14699_14861) : cljs.core.reset_BANG_.call(null,G__14698_14860,G__14699_14861));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14695.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14695.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14695.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta14696], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14695";

cljs.core.async.t_cljs$core$async14695.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async14695");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14695 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14695(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14696){
return (new cljs.core.async.t_cljs$core$async14695(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14696));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14695(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13129__auto___14862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___14862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___14862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14797){
var state_val_14798 = (state_14797[(1)]);
if((state_val_14798 === (7))){
var inst_14715 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
var statearr_14799_14863 = state_14797__$1;
(statearr_14799_14863[(2)] = inst_14715);

(statearr_14799_14863[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (20))){
var inst_14727 = (state_14797[(7)]);
var state_14797__$1 = state_14797;
var statearr_14800_14864 = state_14797__$1;
(statearr_14800_14864[(2)] = inst_14727);

(statearr_14800_14864[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (27))){
var state_14797__$1 = state_14797;
var statearr_14801_14865 = state_14797__$1;
(statearr_14801_14865[(2)] = null);

(statearr_14801_14865[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (1))){
var inst_14703 = (state_14797[(8)]);
var inst_14703__$1 = calc_state();
var inst_14705 = (inst_14703__$1 == null);
var inst_14706 = cljs.core.not(inst_14705);
var state_14797__$1 = (function (){var statearr_14802 = state_14797;
(statearr_14802[(8)] = inst_14703__$1);

return statearr_14802;
})();
if(inst_14706){
var statearr_14803_14866 = state_14797__$1;
(statearr_14803_14866[(1)] = (2));

} else {
var statearr_14804_14867 = state_14797__$1;
(statearr_14804_14867[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (24))){
var inst_14771 = (state_14797[(9)]);
var inst_14750 = (state_14797[(10)]);
var inst_14757 = (state_14797[(11)]);
var inst_14771__$1 = (inst_14750.cljs$core$IFn$_invoke$arity$1 ? inst_14750.cljs$core$IFn$_invoke$arity$1(inst_14757) : inst_14750.call(null,inst_14757));
var state_14797__$1 = (function (){var statearr_14805 = state_14797;
(statearr_14805[(9)] = inst_14771__$1);

return statearr_14805;
})();
if(cljs.core.truth_(inst_14771__$1)){
var statearr_14806_14868 = state_14797__$1;
(statearr_14806_14868[(1)] = (29));

} else {
var statearr_14807_14869 = state_14797__$1;
(statearr_14807_14869[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (4))){
var inst_14718 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
if(cljs.core.truth_(inst_14718)){
var statearr_14808_14870 = state_14797__$1;
(statearr_14808_14870[(1)] = (8));

} else {
var statearr_14809_14871 = state_14797__$1;
(statearr_14809_14871[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (15))){
var inst_14744 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
if(cljs.core.truth_(inst_14744)){
var statearr_14810_14872 = state_14797__$1;
(statearr_14810_14872[(1)] = (19));

} else {
var statearr_14811_14873 = state_14797__$1;
(statearr_14811_14873[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (21))){
var inst_14749 = (state_14797[(12)]);
var inst_14749__$1 = (state_14797[(2)]);
var inst_14750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14749__$1,cljs.core.cst$kw$solos);
var inst_14751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14749__$1,cljs.core.cst$kw$mutes);
var inst_14752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14749__$1,cljs.core.cst$kw$reads);
var state_14797__$1 = (function (){var statearr_14812 = state_14797;
(statearr_14812[(10)] = inst_14750);

(statearr_14812[(12)] = inst_14749__$1);

(statearr_14812[(13)] = inst_14751);

return statearr_14812;
})();
return cljs.core.async.ioc_alts_BANG_(state_14797__$1,(22),inst_14752);
} else {
if((state_val_14798 === (31))){
var inst_14779 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
if(cljs.core.truth_(inst_14779)){
var statearr_14813_14874 = state_14797__$1;
(statearr_14813_14874[(1)] = (32));

} else {
var statearr_14814_14875 = state_14797__$1;
(statearr_14814_14875[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (32))){
var inst_14756 = (state_14797[(14)]);
var state_14797__$1 = state_14797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14797__$1,(35),out,inst_14756);
} else {
if((state_val_14798 === (33))){
var inst_14749 = (state_14797[(12)]);
var inst_14727 = inst_14749;
var state_14797__$1 = (function (){var statearr_14815 = state_14797;
(statearr_14815[(7)] = inst_14727);

return statearr_14815;
})();
var statearr_14816_14876 = state_14797__$1;
(statearr_14816_14876[(2)] = null);

(statearr_14816_14876[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (13))){
var inst_14727 = (state_14797[(7)]);
var inst_14734 = inst_14727.cljs$lang$protocol_mask$partition0$;
var inst_14735 = (inst_14734 & (64));
var inst_14736 = inst_14727.cljs$core$ISeq$;
var inst_14737 = (inst_14735) || (inst_14736);
var state_14797__$1 = state_14797;
if(cljs.core.truth_(inst_14737)){
var statearr_14817_14877 = state_14797__$1;
(statearr_14817_14877[(1)] = (16));

} else {
var statearr_14818_14878 = state_14797__$1;
(statearr_14818_14878[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (22))){
var inst_14756 = (state_14797[(14)]);
var inst_14757 = (state_14797[(11)]);
var inst_14755 = (state_14797[(2)]);
var inst_14756__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14755,(0),null);
var inst_14757__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14755,(1),null);
var inst_14758 = (inst_14756__$1 == null);
var inst_14759 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14757__$1,change);
var inst_14760 = (inst_14758) || (inst_14759);
var state_14797__$1 = (function (){var statearr_14819 = state_14797;
(statearr_14819[(14)] = inst_14756__$1);

(statearr_14819[(11)] = inst_14757__$1);

return statearr_14819;
})();
if(cljs.core.truth_(inst_14760)){
var statearr_14820_14879 = state_14797__$1;
(statearr_14820_14879[(1)] = (23));

} else {
var statearr_14821_14880 = state_14797__$1;
(statearr_14821_14880[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (36))){
var inst_14749 = (state_14797[(12)]);
var inst_14727 = inst_14749;
var state_14797__$1 = (function (){var statearr_14822 = state_14797;
(statearr_14822[(7)] = inst_14727);

return statearr_14822;
})();
var statearr_14823_14881 = state_14797__$1;
(statearr_14823_14881[(2)] = null);

(statearr_14823_14881[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (29))){
var inst_14771 = (state_14797[(9)]);
var state_14797__$1 = state_14797;
var statearr_14824_14882 = state_14797__$1;
(statearr_14824_14882[(2)] = inst_14771);

(statearr_14824_14882[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (6))){
var state_14797__$1 = state_14797;
var statearr_14825_14883 = state_14797__$1;
(statearr_14825_14883[(2)] = false);

(statearr_14825_14883[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (28))){
var inst_14767 = (state_14797[(2)]);
var inst_14768 = calc_state();
var inst_14727 = inst_14768;
var state_14797__$1 = (function (){var statearr_14826 = state_14797;
(statearr_14826[(15)] = inst_14767);

(statearr_14826[(7)] = inst_14727);

return statearr_14826;
})();
var statearr_14827_14884 = state_14797__$1;
(statearr_14827_14884[(2)] = null);

(statearr_14827_14884[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (25))){
var inst_14793 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
var statearr_14828_14885 = state_14797__$1;
(statearr_14828_14885[(2)] = inst_14793);

(statearr_14828_14885[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (34))){
var inst_14791 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
var statearr_14829_14886 = state_14797__$1;
(statearr_14829_14886[(2)] = inst_14791);

(statearr_14829_14886[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (17))){
var state_14797__$1 = state_14797;
var statearr_14830_14887 = state_14797__$1;
(statearr_14830_14887[(2)] = false);

(statearr_14830_14887[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (3))){
var state_14797__$1 = state_14797;
var statearr_14831_14888 = state_14797__$1;
(statearr_14831_14888[(2)] = false);

(statearr_14831_14888[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (12))){
var inst_14795 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14797__$1,inst_14795);
} else {
if((state_val_14798 === (2))){
var inst_14703 = (state_14797[(8)]);
var inst_14708 = inst_14703.cljs$lang$protocol_mask$partition0$;
var inst_14709 = (inst_14708 & (64));
var inst_14710 = inst_14703.cljs$core$ISeq$;
var inst_14711 = (inst_14709) || (inst_14710);
var state_14797__$1 = state_14797;
if(cljs.core.truth_(inst_14711)){
var statearr_14832_14889 = state_14797__$1;
(statearr_14832_14889[(1)] = (5));

} else {
var statearr_14833_14890 = state_14797__$1;
(statearr_14833_14890[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (23))){
var inst_14756 = (state_14797[(14)]);
var inst_14762 = (inst_14756 == null);
var state_14797__$1 = state_14797;
if(cljs.core.truth_(inst_14762)){
var statearr_14834_14891 = state_14797__$1;
(statearr_14834_14891[(1)] = (26));

} else {
var statearr_14835_14892 = state_14797__$1;
(statearr_14835_14892[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (35))){
var inst_14782 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
if(cljs.core.truth_(inst_14782)){
var statearr_14836_14893 = state_14797__$1;
(statearr_14836_14893[(1)] = (36));

} else {
var statearr_14837_14894 = state_14797__$1;
(statearr_14837_14894[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (19))){
var inst_14727 = (state_14797[(7)]);
var inst_14746 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14727);
var state_14797__$1 = state_14797;
var statearr_14838_14895 = state_14797__$1;
(statearr_14838_14895[(2)] = inst_14746);

(statearr_14838_14895[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (11))){
var inst_14727 = (state_14797[(7)]);
var inst_14731 = (inst_14727 == null);
var inst_14732 = cljs.core.not(inst_14731);
var state_14797__$1 = state_14797;
if(inst_14732){
var statearr_14839_14896 = state_14797__$1;
(statearr_14839_14896[(1)] = (13));

} else {
var statearr_14840_14897 = state_14797__$1;
(statearr_14840_14897[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (9))){
var inst_14703 = (state_14797[(8)]);
var state_14797__$1 = state_14797;
var statearr_14841_14898 = state_14797__$1;
(statearr_14841_14898[(2)] = inst_14703);

(statearr_14841_14898[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (5))){
var state_14797__$1 = state_14797;
var statearr_14842_14899 = state_14797__$1;
(statearr_14842_14899[(2)] = true);

(statearr_14842_14899[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (14))){
var state_14797__$1 = state_14797;
var statearr_14843_14900 = state_14797__$1;
(statearr_14843_14900[(2)] = false);

(statearr_14843_14900[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (26))){
var inst_14757 = (state_14797[(11)]);
var inst_14764 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14757);
var state_14797__$1 = state_14797;
var statearr_14844_14901 = state_14797__$1;
(statearr_14844_14901[(2)] = inst_14764);

(statearr_14844_14901[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (16))){
var state_14797__$1 = state_14797;
var statearr_14845_14902 = state_14797__$1;
(statearr_14845_14902[(2)] = true);

(statearr_14845_14902[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (38))){
var inst_14787 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
var statearr_14846_14903 = state_14797__$1;
(statearr_14846_14903[(2)] = inst_14787);

(statearr_14846_14903[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (30))){
var inst_14750 = (state_14797[(10)]);
var inst_14751 = (state_14797[(13)]);
var inst_14757 = (state_14797[(11)]);
var inst_14774 = cljs.core.empty_QMARK_(inst_14750);
var inst_14775 = (inst_14751.cljs$core$IFn$_invoke$arity$1 ? inst_14751.cljs$core$IFn$_invoke$arity$1(inst_14757) : inst_14751.call(null,inst_14757));
var inst_14776 = cljs.core.not(inst_14775);
var inst_14777 = (inst_14774) && (inst_14776);
var state_14797__$1 = state_14797;
var statearr_14847_14904 = state_14797__$1;
(statearr_14847_14904[(2)] = inst_14777);

(statearr_14847_14904[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (10))){
var inst_14703 = (state_14797[(8)]);
var inst_14723 = (state_14797[(2)]);
var inst_14724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14723,cljs.core.cst$kw$solos);
var inst_14725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14723,cljs.core.cst$kw$mutes);
var inst_14726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14723,cljs.core.cst$kw$reads);
var inst_14727 = inst_14703;
var state_14797__$1 = (function (){var statearr_14848 = state_14797;
(statearr_14848[(16)] = inst_14725);

(statearr_14848[(17)] = inst_14724);

(statearr_14848[(18)] = inst_14726);

(statearr_14848[(7)] = inst_14727);

return statearr_14848;
})();
var statearr_14849_14905 = state_14797__$1;
(statearr_14849_14905[(2)] = null);

(statearr_14849_14905[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (18))){
var inst_14741 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
var statearr_14850_14906 = state_14797__$1;
(statearr_14850_14906[(2)] = inst_14741);

(statearr_14850_14906[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (37))){
var state_14797__$1 = state_14797;
var statearr_14851_14907 = state_14797__$1;
(statearr_14851_14907[(2)] = null);

(statearr_14851_14907[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14798 === (8))){
var inst_14703 = (state_14797[(8)]);
var inst_14720 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14703);
var state_14797__$1 = state_14797;
var statearr_14852_14908 = state_14797__$1;
(statearr_14852_14908[(2)] = inst_14720);

(statearr_14852_14908[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
}
}
}
});})(c__13129__auto___14862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13015__auto__,c__13129__auto___14862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13016__auto__ = null;
var cljs$core$async$mix_$_state_machine__13016__auto____0 = (function (){
var statearr_14856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14856[(0)] = cljs$core$async$mix_$_state_machine__13016__auto__);

(statearr_14856[(1)] = (1));

return statearr_14856;
});
var cljs$core$async$mix_$_state_machine__13016__auto____1 = (function (state_14797){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_14797);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e14857){if((e14857 instanceof Object)){
var ex__13019__auto__ = e14857;
var statearr_14858_14909 = state_14797;
(statearr_14858_14909[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14797);

return cljs.core.cst$kw$recur;
} else {
throw e14857;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__14910 = state_14797;
state_14797 = G__14910;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13016__auto__ = function(state_14797){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13016__auto____1.call(this,state_14797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13016__auto____0;
cljs$core$async$mix_$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13016__auto____1;
return cljs$core$async$mix_$_state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___14862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13131__auto__ = (function (){var statearr_14859 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_14859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___14862);

return statearr_14859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___14862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5324__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5324__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5324__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5324__auto__.call(null,p,v,ch));
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5324__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14911 = [];
var len__5726__auto___14914 = arguments.length;
var i__5727__auto___14915 = (0);
while(true){
if((i__5727__auto___14915 < len__5726__auto___14914)){
args14911.push((arguments[i__5727__auto___14915]));

var G__14916 = (i__5727__auto___14915 + (1));
i__5727__auto___14915 = G__14916;
continue;
} else {
}
break;
}

var G__14913 = args14911.length;
switch (G__14913) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14911.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5324__auto__.call(null,p));
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5324__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5324__auto__.call(null,p,v));
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5324__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args14919 = [];
var len__5726__auto___15047 = arguments.length;
var i__5727__auto___15048 = (0);
while(true){
if((i__5727__auto___15048 < len__5726__auto___15047)){
args14919.push((arguments[i__5727__auto___15048]));

var G__15049 = (i__5727__auto___15048 + (1));
i__5727__auto___15048 = G__15049;
continue;
} else {
}
break;
}

var G__14921 = args14919.length;
switch (G__14921) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14919.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__14922 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14922) : cljs.core.atom.call(null,G__14922));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4668__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4668__auto__,mults){
return (function (p1__14918_SHARP_){
if(cljs.core.truth_((p1__14918_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14918_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14918_SHARP_.call(null,topic)))){
return p1__14918_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14918_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14923 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14924){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14924 = meta14924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14925,meta14924__$1){
var self__ = this;
var _14925__$1 = this;
return (new cljs.core.async.t_cljs$core$async14923(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14924__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14925){
var self__ = this;
var _14925__$1 = this;
return self__.meta14924;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14926 = self__.mults;
var G__14927 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14926,G__14927) : cljs.core.reset_BANG_.call(null,G__14926,G__14927));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14923.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta14924], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14923";

cljs.core.async.t_cljs$core$async14923.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async14923");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14923 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14923(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14924){
return (new cljs.core.async.t_cljs$core$async14923(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14924));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14923(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13129__auto___15051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___15051,mults,ensure_mult,p){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___15051,mults,ensure_mult,p){
return (function (state_14999){
var state_val_15000 = (state_14999[(1)]);
if((state_val_15000 === (7))){
var inst_14995 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
var statearr_15001_15052 = state_14999__$1;
(statearr_15001_15052[(2)] = inst_14995);

(statearr_15001_15052[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (20))){
var state_14999__$1 = state_14999;
var statearr_15002_15053 = state_14999__$1;
(statearr_15002_15053[(2)] = null);

(statearr_15002_15053[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (1))){
var state_14999__$1 = state_14999;
var statearr_15003_15054 = state_14999__$1;
(statearr_15003_15054[(2)] = null);

(statearr_15003_15054[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (24))){
var inst_14978 = (state_14999[(7)]);
var inst_14987 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14978);
var state_14999__$1 = state_14999;
var statearr_15004_15055 = state_14999__$1;
(statearr_15004_15055[(2)] = inst_14987);

(statearr_15004_15055[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (4))){
var inst_14930 = (state_14999[(8)]);
var inst_14930__$1 = (state_14999[(2)]);
var inst_14931 = (inst_14930__$1 == null);
var state_14999__$1 = (function (){var statearr_15005 = state_14999;
(statearr_15005[(8)] = inst_14930__$1);

return statearr_15005;
})();
if(cljs.core.truth_(inst_14931)){
var statearr_15006_15056 = state_14999__$1;
(statearr_15006_15056[(1)] = (5));

} else {
var statearr_15007_15057 = state_14999__$1;
(statearr_15007_15057[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (15))){
var inst_14972 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
var statearr_15008_15058 = state_14999__$1;
(statearr_15008_15058[(2)] = inst_14972);

(statearr_15008_15058[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (21))){
var inst_14992 = (state_14999[(2)]);
var state_14999__$1 = (function (){var statearr_15009 = state_14999;
(statearr_15009[(9)] = inst_14992);

return statearr_15009;
})();
var statearr_15010_15059 = state_14999__$1;
(statearr_15010_15059[(2)] = null);

(statearr_15010_15059[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (13))){
var inst_14954 = (state_14999[(10)]);
var inst_14956 = cljs.core.chunked_seq_QMARK_(inst_14954);
var state_14999__$1 = state_14999;
if(inst_14956){
var statearr_15011_15060 = state_14999__$1;
(statearr_15011_15060[(1)] = (16));

} else {
var statearr_15012_15061 = state_14999__$1;
(statearr_15012_15061[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (22))){
var inst_14984 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
if(cljs.core.truth_(inst_14984)){
var statearr_15013_15062 = state_14999__$1;
(statearr_15013_15062[(1)] = (23));

} else {
var statearr_15014_15063 = state_14999__$1;
(statearr_15014_15063[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (6))){
var inst_14980 = (state_14999[(11)]);
var inst_14978 = (state_14999[(7)]);
var inst_14930 = (state_14999[(8)]);
var inst_14978__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14930) : topic_fn.call(null,inst_14930));
var inst_14979 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_14980__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14979,inst_14978__$1);
var state_14999__$1 = (function (){var statearr_15015 = state_14999;
(statearr_15015[(11)] = inst_14980__$1);

(statearr_15015[(7)] = inst_14978__$1);

return statearr_15015;
})();
if(cljs.core.truth_(inst_14980__$1)){
var statearr_15016_15064 = state_14999__$1;
(statearr_15016_15064[(1)] = (19));

} else {
var statearr_15017_15065 = state_14999__$1;
(statearr_15017_15065[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (25))){
var inst_14989 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
var statearr_15018_15066 = state_14999__$1;
(statearr_15018_15066[(2)] = inst_14989);

(statearr_15018_15066[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (17))){
var inst_14954 = (state_14999[(10)]);
var inst_14963 = cljs.core.first(inst_14954);
var inst_14964 = cljs.core.async.muxch_STAR_(inst_14963);
var inst_14965 = cljs.core.async.close_BANG_(inst_14964);
var inst_14966 = cljs.core.next(inst_14954);
var inst_14940 = inst_14966;
var inst_14941 = null;
var inst_14942 = (0);
var inst_14943 = (0);
var state_14999__$1 = (function (){var statearr_15019 = state_14999;
(statearr_15019[(12)] = inst_14940);

(statearr_15019[(13)] = inst_14943);

(statearr_15019[(14)] = inst_14942);

(statearr_15019[(15)] = inst_14965);

(statearr_15019[(16)] = inst_14941);

return statearr_15019;
})();
var statearr_15020_15067 = state_14999__$1;
(statearr_15020_15067[(2)] = null);

(statearr_15020_15067[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (3))){
var inst_14997 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14999__$1,inst_14997);
} else {
if((state_val_15000 === (12))){
var inst_14974 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
var statearr_15021_15068 = state_14999__$1;
(statearr_15021_15068[(2)] = inst_14974);

(statearr_15021_15068[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (2))){
var state_14999__$1 = state_14999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14999__$1,(4),ch);
} else {
if((state_val_15000 === (23))){
var state_14999__$1 = state_14999;
var statearr_15022_15069 = state_14999__$1;
(statearr_15022_15069[(2)] = null);

(statearr_15022_15069[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (19))){
var inst_14980 = (state_14999[(11)]);
var inst_14930 = (state_14999[(8)]);
var inst_14982 = cljs.core.async.muxch_STAR_(inst_14980);
var state_14999__$1 = state_14999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14999__$1,(22),inst_14982,inst_14930);
} else {
if((state_val_15000 === (11))){
var inst_14940 = (state_14999[(12)]);
var inst_14954 = (state_14999[(10)]);
var inst_14954__$1 = cljs.core.seq(inst_14940);
var state_14999__$1 = (function (){var statearr_15023 = state_14999;
(statearr_15023[(10)] = inst_14954__$1);

return statearr_15023;
})();
if(inst_14954__$1){
var statearr_15024_15070 = state_14999__$1;
(statearr_15024_15070[(1)] = (13));

} else {
var statearr_15025_15071 = state_14999__$1;
(statearr_15025_15071[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (9))){
var inst_14976 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
var statearr_15026_15072 = state_14999__$1;
(statearr_15026_15072[(2)] = inst_14976);

(statearr_15026_15072[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (5))){
var inst_14937 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_14938 = cljs.core.vals(inst_14937);
var inst_14939 = cljs.core.seq(inst_14938);
var inst_14940 = inst_14939;
var inst_14941 = null;
var inst_14942 = (0);
var inst_14943 = (0);
var state_14999__$1 = (function (){var statearr_15027 = state_14999;
(statearr_15027[(12)] = inst_14940);

(statearr_15027[(13)] = inst_14943);

(statearr_15027[(14)] = inst_14942);

(statearr_15027[(16)] = inst_14941);

return statearr_15027;
})();
var statearr_15028_15073 = state_14999__$1;
(statearr_15028_15073[(2)] = null);

(statearr_15028_15073[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (14))){
var state_14999__$1 = state_14999;
var statearr_15032_15074 = state_14999__$1;
(statearr_15032_15074[(2)] = null);

(statearr_15032_15074[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (16))){
var inst_14954 = (state_14999[(10)]);
var inst_14958 = cljs.core.chunk_first(inst_14954);
var inst_14959 = cljs.core.chunk_rest(inst_14954);
var inst_14960 = cljs.core.count(inst_14958);
var inst_14940 = inst_14959;
var inst_14941 = inst_14958;
var inst_14942 = inst_14960;
var inst_14943 = (0);
var state_14999__$1 = (function (){var statearr_15033 = state_14999;
(statearr_15033[(12)] = inst_14940);

(statearr_15033[(13)] = inst_14943);

(statearr_15033[(14)] = inst_14942);

(statearr_15033[(16)] = inst_14941);

return statearr_15033;
})();
var statearr_15034_15075 = state_14999__$1;
(statearr_15034_15075[(2)] = null);

(statearr_15034_15075[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (10))){
var inst_14940 = (state_14999[(12)]);
var inst_14943 = (state_14999[(13)]);
var inst_14942 = (state_14999[(14)]);
var inst_14941 = (state_14999[(16)]);
var inst_14948 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14941,inst_14943);
var inst_14949 = cljs.core.async.muxch_STAR_(inst_14948);
var inst_14950 = cljs.core.async.close_BANG_(inst_14949);
var inst_14951 = (inst_14943 + (1));
var tmp15029 = inst_14940;
var tmp15030 = inst_14942;
var tmp15031 = inst_14941;
var inst_14940__$1 = tmp15029;
var inst_14941__$1 = tmp15031;
var inst_14942__$1 = tmp15030;
var inst_14943__$1 = inst_14951;
var state_14999__$1 = (function (){var statearr_15035 = state_14999;
(statearr_15035[(12)] = inst_14940__$1);

(statearr_15035[(17)] = inst_14950);

(statearr_15035[(13)] = inst_14943__$1);

(statearr_15035[(14)] = inst_14942__$1);

(statearr_15035[(16)] = inst_14941__$1);

return statearr_15035;
})();
var statearr_15036_15076 = state_14999__$1;
(statearr_15036_15076[(2)] = null);

(statearr_15036_15076[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (18))){
var inst_14969 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
var statearr_15037_15077 = state_14999__$1;
(statearr_15037_15077[(2)] = inst_14969);

(statearr_15037_15077[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (8))){
var inst_14943 = (state_14999[(13)]);
var inst_14942 = (state_14999[(14)]);
var inst_14945 = (inst_14943 < inst_14942);
var inst_14946 = inst_14945;
var state_14999__$1 = state_14999;
if(cljs.core.truth_(inst_14946)){
var statearr_15038_15078 = state_14999__$1;
(statearr_15038_15078[(1)] = (10));

} else {
var statearr_15039_15079 = state_14999__$1;
(statearr_15039_15079[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
});})(c__13129__auto___15051,mults,ensure_mult,p))
;
return ((function (switch__13015__auto__,c__13129__auto___15051,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13016__auto__ = null;
var cljs$core$async$state_machine__13016__auto____0 = (function (){
var statearr_15043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15043[(0)] = cljs$core$async$state_machine__13016__auto__);

(statearr_15043[(1)] = (1));

return statearr_15043;
});
var cljs$core$async$state_machine__13016__auto____1 = (function (state_14999){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_14999);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e15044){if((e15044 instanceof Object)){
var ex__13019__auto__ = e15044;
var statearr_15045_15080 = state_14999;
(statearr_15045_15080[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14999);

return cljs.core.cst$kw$recur;
} else {
throw e15044;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__15081 = state_14999;
state_14999 = G__15081;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$state_machine__13016__auto__ = function(state_14999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13016__auto____1.call(this,state_14999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13016__auto____0;
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13016__auto____1;
return cljs$core$async$state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___15051,mults,ensure_mult,p))
})();
var state__13131__auto__ = (function (){var statearr_15046 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_15046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___15051);

return statearr_15046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___15051,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args15082 = [];
var len__5726__auto___15085 = arguments.length;
var i__5727__auto___15086 = (0);
while(true){
if((i__5727__auto___15086 < len__5726__auto___15085)){
args15082.push((arguments[i__5727__auto___15086]));

var G__15087 = (i__5727__auto___15086 + (1));
i__5727__auto___15086 = G__15087;
continue;
} else {
}
break;
}

var G__15084 = args15082.length;
switch (G__15084) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15082.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args15089 = [];
var len__5726__auto___15092 = arguments.length;
var i__5727__auto___15093 = (0);
while(true){
if((i__5727__auto___15093 < len__5726__auto___15092)){
args15089.push((arguments[i__5727__auto___15093]));

var G__15094 = (i__5727__auto___15093 + (1));
i__5727__auto___15093 = G__15094;
continue;
} else {
}
break;
}

var G__15091 = args15089.length;
switch (G__15091) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15089.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args15096 = [];
var len__5726__auto___15167 = arguments.length;
var i__5727__auto___15168 = (0);
while(true){
if((i__5727__auto___15168 < len__5726__auto___15167)){
args15096.push((arguments[i__5727__auto___15168]));

var G__15169 = (i__5727__auto___15168 + (1));
i__5727__auto___15168 = G__15169;
continue;
} else {
}
break;
}

var G__15098 = args15096.length;
switch (G__15098) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15096.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13129__auto___15171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___15171,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___15171,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15137){
var state_val_15138 = (state_15137[(1)]);
if((state_val_15138 === (7))){
var state_15137__$1 = state_15137;
var statearr_15139_15172 = state_15137__$1;
(statearr_15139_15172[(2)] = null);

(statearr_15139_15172[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15138 === (1))){
var state_15137__$1 = state_15137;
var statearr_15140_15173 = state_15137__$1;
(statearr_15140_15173[(2)] = null);

(statearr_15140_15173[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15138 === (4))){
var inst_15101 = (state_15137[(7)]);
var inst_15103 = (inst_15101 < cnt);
var state_15137__$1 = state_15137;
if(cljs.core.truth_(inst_15103)){
var statearr_15141_15174 = state_15137__$1;
(statearr_15141_15174[(1)] = (6));

} else {
var statearr_15142_15175 = state_15137__$1;
(statearr_15142_15175[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15138 === (15))){
var inst_15133 = (state_15137[(2)]);
var state_15137__$1 = state_15137;
var statearr_15143_15176 = state_15137__$1;
(statearr_15143_15176[(2)] = inst_15133);

(statearr_15143_15176[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15138 === (13))){
var inst_15126 = cljs.core.async.close_BANG_(out);
var state_15137__$1 = state_15137;
var statearr_15144_15177 = state_15137__$1;
(statearr_15144_15177[(2)] = inst_15126);

(statearr_15144_15177[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15138 === (6))){
var state_15137__$1 = state_15137;
var statearr_15145_15178 = state_15137__$1;
(statearr_15145_15178[(2)] = null);

(statearr_15145_15178[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15138 === (3))){
var inst_15135 = (state_15137[(2)]);
var state_15137__$1 = state_15137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15137__$1,inst_15135);
} else {
if((state_val_15138 === (12))){
var inst_15123 = (state_15137[(8)]);
var inst_15123__$1 = (state_15137[(2)]);
var inst_15124 = cljs.core.some(cljs.core.nil_QMARK_,inst_15123__$1);
var state_15137__$1 = (function (){var statearr_15146 = state_15137;
(statearr_15146[(8)] = inst_15123__$1);

return statearr_15146;
})();
if(cljs.core.truth_(inst_15124)){
var statearr_15147_15179 = state_15137__$1;
(statearr_15147_15179[(1)] = (13));

} else {
var statearr_15148_15180 = state_15137__$1;
(statearr_15148_15180[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15138 === (2))){
var inst_15100 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_15101 = (0);
var state_15137__$1 = (function (){var statearr_15149 = state_15137;
(statearr_15149[(9)] = inst_15100);

(statearr_15149[(7)] = inst_15101);

return statearr_15149;
})();
var statearr_15150_15181 = state_15137__$1;
(statearr_15150_15181[(2)] = null);

(statearr_15150_15181[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15138 === (11))){
var inst_15101 = (state_15137[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_15137,(10),Object,null,(9));
var inst_15110 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15101) : chs__$1.call(null,inst_15101));
var inst_15111 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15101) : done.call(null,inst_15101));
var inst_15112 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15110,inst_15111);
var state_15137__$1 = state_15137;
var statearr_15151_15182 = state_15137__$1;
(statearr_15151_15182[(2)] = inst_15112);


cljs.core.async.impl.ioc_helpers.process_exception(state_15137__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15138 === (9))){
var inst_15101 = (state_15137[(7)]);
var inst_15114 = (state_15137[(2)]);
var inst_15115 = (inst_15101 + (1));
var inst_15101__$1 = inst_15115;
var state_15137__$1 = (function (){var statearr_15152 = state_15137;
(statearr_15152[(10)] = inst_15114);

(statearr_15152[(7)] = inst_15101__$1);

return statearr_15152;
})();
var statearr_15153_15183 = state_15137__$1;
(statearr_15153_15183[(2)] = null);

(statearr_15153_15183[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15138 === (5))){
var inst_15121 = (state_15137[(2)]);
var state_15137__$1 = (function (){var statearr_15154 = state_15137;
(statearr_15154[(11)] = inst_15121);

return statearr_15154;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15137__$1,(12),dchan);
} else {
if((state_val_15138 === (14))){
var inst_15123 = (state_15137[(8)]);
var inst_15128 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15123);
var state_15137__$1 = state_15137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15137__$1,(16),out,inst_15128);
} else {
if((state_val_15138 === (16))){
var inst_15130 = (state_15137[(2)]);
var state_15137__$1 = (function (){var statearr_15155 = state_15137;
(statearr_15155[(12)] = inst_15130);

return statearr_15155;
})();
var statearr_15156_15184 = state_15137__$1;
(statearr_15156_15184[(2)] = null);

(statearr_15156_15184[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15138 === (10))){
var inst_15105 = (state_15137[(2)]);
var inst_15106 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15137__$1 = (function (){var statearr_15157 = state_15137;
(statearr_15157[(13)] = inst_15105);

return statearr_15157;
})();
var statearr_15158_15185 = state_15137__$1;
(statearr_15158_15185[(2)] = inst_15106);


cljs.core.async.impl.ioc_helpers.process_exception(state_15137__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15138 === (8))){
var inst_15119 = (state_15137[(2)]);
var state_15137__$1 = state_15137;
var statearr_15159_15186 = state_15137__$1;
(statearr_15159_15186[(2)] = inst_15119);

(statearr_15159_15186[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
}
});})(c__13129__auto___15171,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13015__auto__,c__13129__auto___15171,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13016__auto__ = null;
var cljs$core$async$state_machine__13016__auto____0 = (function (){
var statearr_15163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15163[(0)] = cljs$core$async$state_machine__13016__auto__);

(statearr_15163[(1)] = (1));

return statearr_15163;
});
var cljs$core$async$state_machine__13016__auto____1 = (function (state_15137){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_15137);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e15164){if((e15164 instanceof Object)){
var ex__13019__auto__ = e15164;
var statearr_15165_15187 = state_15137;
(statearr_15165_15187[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15137);

return cljs.core.cst$kw$recur;
} else {
throw e15164;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__15188 = state_15137;
state_15137 = G__15188;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$state_machine__13016__auto__ = function(state_15137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13016__auto____1.call(this,state_15137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13016__auto____0;
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13016__auto____1;
return cljs$core$async$state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___15171,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13131__auto__ = (function (){var statearr_15166 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_15166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___15171);

return statearr_15166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___15171,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args15190 = [];
var len__5726__auto___15246 = arguments.length;
var i__5727__auto___15247 = (0);
while(true){
if((i__5727__auto___15247 < len__5726__auto___15246)){
args15190.push((arguments[i__5727__auto___15247]));

var G__15248 = (i__5727__auto___15247 + (1));
i__5727__auto___15247 = G__15248;
continue;
} else {
}
break;
}

var G__15192 = args15190.length;
switch (G__15192) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15190.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13129__auto___15250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___15250,out){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___15250,out){
return (function (state_15222){
var state_val_15223 = (state_15222[(1)]);
if((state_val_15223 === (7))){
var inst_15202 = (state_15222[(7)]);
var inst_15201 = (state_15222[(8)]);
var inst_15201__$1 = (state_15222[(2)]);
var inst_15202__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15201__$1,(0),null);
var inst_15203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15201__$1,(1),null);
var inst_15204 = (inst_15202__$1 == null);
var state_15222__$1 = (function (){var statearr_15224 = state_15222;
(statearr_15224[(9)] = inst_15203);

(statearr_15224[(7)] = inst_15202__$1);

(statearr_15224[(8)] = inst_15201__$1);

return statearr_15224;
})();
if(cljs.core.truth_(inst_15204)){
var statearr_15225_15251 = state_15222__$1;
(statearr_15225_15251[(1)] = (8));

} else {
var statearr_15226_15252 = state_15222__$1;
(statearr_15226_15252[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (1))){
var inst_15193 = cljs.core.vec(chs);
var inst_15194 = inst_15193;
var state_15222__$1 = (function (){var statearr_15227 = state_15222;
(statearr_15227[(10)] = inst_15194);

return statearr_15227;
})();
var statearr_15228_15253 = state_15222__$1;
(statearr_15228_15253[(2)] = null);

(statearr_15228_15253[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (4))){
var inst_15194 = (state_15222[(10)]);
var state_15222__$1 = state_15222;
return cljs.core.async.ioc_alts_BANG_(state_15222__$1,(7),inst_15194);
} else {
if((state_val_15223 === (6))){
var inst_15218 = (state_15222[(2)]);
var state_15222__$1 = state_15222;
var statearr_15229_15254 = state_15222__$1;
(statearr_15229_15254[(2)] = inst_15218);

(statearr_15229_15254[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (3))){
var inst_15220 = (state_15222[(2)]);
var state_15222__$1 = state_15222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15222__$1,inst_15220);
} else {
if((state_val_15223 === (2))){
var inst_15194 = (state_15222[(10)]);
var inst_15196 = cljs.core.count(inst_15194);
var inst_15197 = (inst_15196 > (0));
var state_15222__$1 = state_15222;
if(cljs.core.truth_(inst_15197)){
var statearr_15231_15255 = state_15222__$1;
(statearr_15231_15255[(1)] = (4));

} else {
var statearr_15232_15256 = state_15222__$1;
(statearr_15232_15256[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (11))){
var inst_15194 = (state_15222[(10)]);
var inst_15211 = (state_15222[(2)]);
var tmp15230 = inst_15194;
var inst_15194__$1 = tmp15230;
var state_15222__$1 = (function (){var statearr_15233 = state_15222;
(statearr_15233[(11)] = inst_15211);

(statearr_15233[(10)] = inst_15194__$1);

return statearr_15233;
})();
var statearr_15234_15257 = state_15222__$1;
(statearr_15234_15257[(2)] = null);

(statearr_15234_15257[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (9))){
var inst_15202 = (state_15222[(7)]);
var state_15222__$1 = state_15222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15222__$1,(11),out,inst_15202);
} else {
if((state_val_15223 === (5))){
var inst_15216 = cljs.core.async.close_BANG_(out);
var state_15222__$1 = state_15222;
var statearr_15235_15258 = state_15222__$1;
(statearr_15235_15258[(2)] = inst_15216);

(statearr_15235_15258[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (10))){
var inst_15214 = (state_15222[(2)]);
var state_15222__$1 = state_15222;
var statearr_15236_15259 = state_15222__$1;
(statearr_15236_15259[(2)] = inst_15214);

(statearr_15236_15259[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (8))){
var inst_15203 = (state_15222[(9)]);
var inst_15202 = (state_15222[(7)]);
var inst_15194 = (state_15222[(10)]);
var inst_15201 = (state_15222[(8)]);
var inst_15206 = (function (){var cs = inst_15194;
var vec__15199 = inst_15201;
var v = inst_15202;
var c = inst_15203;
return ((function (cs,vec__15199,v,c,inst_15203,inst_15202,inst_15194,inst_15201,state_val_15223,c__13129__auto___15250,out){
return (function (p1__15189_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15189_SHARP_);
});
;})(cs,vec__15199,v,c,inst_15203,inst_15202,inst_15194,inst_15201,state_val_15223,c__13129__auto___15250,out))
})();
var inst_15207 = cljs.core.filterv(inst_15206,inst_15194);
var inst_15194__$1 = inst_15207;
var state_15222__$1 = (function (){var statearr_15237 = state_15222;
(statearr_15237[(10)] = inst_15194__$1);

return statearr_15237;
})();
var statearr_15238_15260 = state_15222__$1;
(statearr_15238_15260[(2)] = null);

(statearr_15238_15260[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
});})(c__13129__auto___15250,out))
;
return ((function (switch__13015__auto__,c__13129__auto___15250,out){
return (function() {
var cljs$core$async$state_machine__13016__auto__ = null;
var cljs$core$async$state_machine__13016__auto____0 = (function (){
var statearr_15242 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15242[(0)] = cljs$core$async$state_machine__13016__auto__);

(statearr_15242[(1)] = (1));

return statearr_15242;
});
var cljs$core$async$state_machine__13016__auto____1 = (function (state_15222){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_15222);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e15243){if((e15243 instanceof Object)){
var ex__13019__auto__ = e15243;
var statearr_15244_15261 = state_15222;
(statearr_15244_15261[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15222);

return cljs.core.cst$kw$recur;
} else {
throw e15243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__15262 = state_15222;
state_15222 = G__15262;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$state_machine__13016__auto__ = function(state_15222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13016__auto____1.call(this,state_15222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13016__auto____0;
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13016__auto____1;
return cljs$core$async$state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___15250,out))
})();
var state__13131__auto__ = (function (){var statearr_15245 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_15245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___15250);

return statearr_15245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___15250,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args15263 = [];
var len__5726__auto___15312 = arguments.length;
var i__5727__auto___15313 = (0);
while(true){
if((i__5727__auto___15313 < len__5726__auto___15312)){
args15263.push((arguments[i__5727__auto___15313]));

var G__15314 = (i__5727__auto___15313 + (1));
i__5727__auto___15313 = G__15314;
continue;
} else {
}
break;
}

var G__15265 = args15263.length;
switch (G__15265) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15263.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13129__auto___15316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___15316,out){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___15316,out){
return (function (state_15289){
var state_val_15290 = (state_15289[(1)]);
if((state_val_15290 === (7))){
var inst_15271 = (state_15289[(7)]);
var inst_15271__$1 = (state_15289[(2)]);
var inst_15272 = (inst_15271__$1 == null);
var inst_15273 = cljs.core.not(inst_15272);
var state_15289__$1 = (function (){var statearr_15291 = state_15289;
(statearr_15291[(7)] = inst_15271__$1);

return statearr_15291;
})();
if(inst_15273){
var statearr_15292_15317 = state_15289__$1;
(statearr_15292_15317[(1)] = (8));

} else {
var statearr_15293_15318 = state_15289__$1;
(statearr_15293_15318[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15290 === (1))){
var inst_15266 = (0);
var state_15289__$1 = (function (){var statearr_15294 = state_15289;
(statearr_15294[(8)] = inst_15266);

return statearr_15294;
})();
var statearr_15295_15319 = state_15289__$1;
(statearr_15295_15319[(2)] = null);

(statearr_15295_15319[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15290 === (4))){
var state_15289__$1 = state_15289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15289__$1,(7),ch);
} else {
if((state_val_15290 === (6))){
var inst_15284 = (state_15289[(2)]);
var state_15289__$1 = state_15289;
var statearr_15296_15320 = state_15289__$1;
(statearr_15296_15320[(2)] = inst_15284);

(statearr_15296_15320[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15290 === (3))){
var inst_15286 = (state_15289[(2)]);
var inst_15287 = cljs.core.async.close_BANG_(out);
var state_15289__$1 = (function (){var statearr_15297 = state_15289;
(statearr_15297[(9)] = inst_15286);

return statearr_15297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15289__$1,inst_15287);
} else {
if((state_val_15290 === (2))){
var inst_15266 = (state_15289[(8)]);
var inst_15268 = (inst_15266 < n);
var state_15289__$1 = state_15289;
if(cljs.core.truth_(inst_15268)){
var statearr_15298_15321 = state_15289__$1;
(statearr_15298_15321[(1)] = (4));

} else {
var statearr_15299_15322 = state_15289__$1;
(statearr_15299_15322[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15290 === (11))){
var inst_15266 = (state_15289[(8)]);
var inst_15276 = (state_15289[(2)]);
var inst_15277 = (inst_15266 + (1));
var inst_15266__$1 = inst_15277;
var state_15289__$1 = (function (){var statearr_15300 = state_15289;
(statearr_15300[(10)] = inst_15276);

(statearr_15300[(8)] = inst_15266__$1);

return statearr_15300;
})();
var statearr_15301_15323 = state_15289__$1;
(statearr_15301_15323[(2)] = null);

(statearr_15301_15323[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15290 === (9))){
var state_15289__$1 = state_15289;
var statearr_15302_15324 = state_15289__$1;
(statearr_15302_15324[(2)] = null);

(statearr_15302_15324[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15290 === (5))){
var state_15289__$1 = state_15289;
var statearr_15303_15325 = state_15289__$1;
(statearr_15303_15325[(2)] = null);

(statearr_15303_15325[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15290 === (10))){
var inst_15281 = (state_15289[(2)]);
var state_15289__$1 = state_15289;
var statearr_15304_15326 = state_15289__$1;
(statearr_15304_15326[(2)] = inst_15281);

(statearr_15304_15326[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15290 === (8))){
var inst_15271 = (state_15289[(7)]);
var state_15289__$1 = state_15289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15289__$1,(11),out,inst_15271);
} else {
return null;
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
}
});})(c__13129__auto___15316,out))
;
return ((function (switch__13015__auto__,c__13129__auto___15316,out){
return (function() {
var cljs$core$async$state_machine__13016__auto__ = null;
var cljs$core$async$state_machine__13016__auto____0 = (function (){
var statearr_15308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15308[(0)] = cljs$core$async$state_machine__13016__auto__);

(statearr_15308[(1)] = (1));

return statearr_15308;
});
var cljs$core$async$state_machine__13016__auto____1 = (function (state_15289){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_15289);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e15309){if((e15309 instanceof Object)){
var ex__13019__auto__ = e15309;
var statearr_15310_15327 = state_15289;
(statearr_15310_15327[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15289);

return cljs.core.cst$kw$recur;
} else {
throw e15309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__15328 = state_15289;
state_15289 = G__15328;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$state_machine__13016__auto__ = function(state_15289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13016__auto____1.call(this,state_15289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13016__auto____0;
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13016__auto____1;
return cljs$core$async$state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___15316,out))
})();
var state__13131__auto__ = (function (){var statearr_15311 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_15311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___15316);

return statearr_15311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___15316,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15338 = (function (map_LT_,f,ch,meta15339){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15339 = meta15339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15340,meta15339__$1){
var self__ = this;
var _15340__$1 = this;
return (new cljs.core.async.t_cljs$core$async15338(self__.map_LT_,self__.f,self__.ch,meta15339__$1));
});

cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15340){
var self__ = this;
var _15340__$1 = this;
return self__.meta15339;
});

cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15341 = (function (map_LT_,f,ch,meta15339,_,fn1,meta15342){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15339 = meta15339;
this._ = _;
this.fn1 = fn1;
this.meta15342 = meta15342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15343,meta15342__$1){
var self__ = this;
var _15343__$1 = this;
return (new cljs.core.async.t_cljs$core$async15341(self__.map_LT_,self__.f,self__.ch,self__.meta15339,self__._,self__.fn1,meta15342__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15343){
var self__ = this;
var _15343__$1 = this;
return self__.meta15342;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15341.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15341.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15329_SHARP_){
var G__15344 = (((p1__15329_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15329_SHARP_) : self__.f.call(null,p1__15329_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15344) : f1.call(null,G__15344));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15341.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15339,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async15338], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta15342], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15341";

cljs.core.async.t_cljs$core$async15341.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async15341");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15341 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15341(map_LT___$1,f__$1,ch__$1,meta15339__$1,___$2,fn1__$1,meta15342){
return (new cljs.core.async.t_cljs$core$async15341(map_LT___$1,f__$1,ch__$1,meta15339__$1,___$2,fn1__$1,meta15342));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15341(self__.map_LT_,self__.f,self__.ch,self__.meta15339,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4656__auto__ = ret;
if(cljs.core.truth_(and__4656__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__4656__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15345 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15345) : self__.f.call(null,G__15345));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15339], null);
});

cljs.core.async.t_cljs$core$async15338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15338";

cljs.core.async.t_cljs$core$async15338.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async15338");
});

cljs.core.async.__GT_t_cljs$core$async15338 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15338(map_LT___$1,f__$1,ch__$1,meta15339){
return (new cljs.core.async.t_cljs$core$async15338(map_LT___$1,f__$1,ch__$1,meta15339));
});

}

return (new cljs.core.async.t_cljs$core$async15338(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15349 = (function (map_GT_,f,ch,meta15350){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15350 = meta15350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15351,meta15350__$1){
var self__ = this;
var _15351__$1 = this;
return (new cljs.core.async.t_cljs$core$async15349(self__.map_GT_,self__.f,self__.ch,meta15350__$1));
});

cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15351){
var self__ = this;
var _15351__$1 = this;
return self__.meta15350;
});

cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async15349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15350], null);
});

cljs.core.async.t_cljs$core$async15349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15349";

cljs.core.async.t_cljs$core$async15349.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async15349");
});

cljs.core.async.__GT_t_cljs$core$async15349 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15349(map_GT___$1,f__$1,ch__$1,meta15350){
return (new cljs.core.async.t_cljs$core$async15349(map_GT___$1,f__$1,ch__$1,meta15350));
});

}

return (new cljs.core.async.t_cljs$core$async15349(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15355 = (function (filter_GT_,p,ch,meta15356){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15356 = meta15356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15357,meta15356__$1){
var self__ = this;
var _15357__$1 = this;
return (new cljs.core.async.t_cljs$core$async15355(self__.filter_GT_,self__.p,self__.ch,meta15356__$1));
});

cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15357){
var self__ = this;
var _15357__$1 = this;
return self__.meta15356;
});

cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15355.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15356], null);
});

cljs.core.async.t_cljs$core$async15355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15355";

cljs.core.async.t_cljs$core$async15355.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async15355");
});

cljs.core.async.__GT_t_cljs$core$async15355 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15355(filter_GT___$1,p__$1,ch__$1,meta15356){
return (new cljs.core.async.t_cljs$core$async15355(filter_GT___$1,p__$1,ch__$1,meta15356));
});

}

return (new cljs.core.async.t_cljs$core$async15355(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args15358 = [];
var len__5726__auto___15402 = arguments.length;
var i__5727__auto___15403 = (0);
while(true){
if((i__5727__auto___15403 < len__5726__auto___15402)){
args15358.push((arguments[i__5727__auto___15403]));

var G__15404 = (i__5727__auto___15403 + (1));
i__5727__auto___15403 = G__15404;
continue;
} else {
}
break;
}

var G__15360 = args15358.length;
switch (G__15360) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15358.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13129__auto___15406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___15406,out){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___15406,out){
return (function (state_15381){
var state_val_15382 = (state_15381[(1)]);
if((state_val_15382 === (7))){
var inst_15377 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
var statearr_15383_15407 = state_15381__$1;
(statearr_15383_15407[(2)] = inst_15377);

(statearr_15383_15407[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15382 === (1))){
var state_15381__$1 = state_15381;
var statearr_15384_15408 = state_15381__$1;
(statearr_15384_15408[(2)] = null);

(statearr_15384_15408[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15382 === (4))){
var inst_15363 = (state_15381[(7)]);
var inst_15363__$1 = (state_15381[(2)]);
var inst_15364 = (inst_15363__$1 == null);
var state_15381__$1 = (function (){var statearr_15385 = state_15381;
(statearr_15385[(7)] = inst_15363__$1);

return statearr_15385;
})();
if(cljs.core.truth_(inst_15364)){
var statearr_15386_15409 = state_15381__$1;
(statearr_15386_15409[(1)] = (5));

} else {
var statearr_15387_15410 = state_15381__$1;
(statearr_15387_15410[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15382 === (6))){
var inst_15363 = (state_15381[(7)]);
var inst_15368 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15363) : p.call(null,inst_15363));
var state_15381__$1 = state_15381;
if(cljs.core.truth_(inst_15368)){
var statearr_15388_15411 = state_15381__$1;
(statearr_15388_15411[(1)] = (8));

} else {
var statearr_15389_15412 = state_15381__$1;
(statearr_15389_15412[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15382 === (3))){
var inst_15379 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15381__$1,inst_15379);
} else {
if((state_val_15382 === (2))){
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15381__$1,(4),ch);
} else {
if((state_val_15382 === (11))){
var inst_15371 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
var statearr_15390_15413 = state_15381__$1;
(statearr_15390_15413[(2)] = inst_15371);

(statearr_15390_15413[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15382 === (9))){
var state_15381__$1 = state_15381;
var statearr_15391_15414 = state_15381__$1;
(statearr_15391_15414[(2)] = null);

(statearr_15391_15414[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15382 === (5))){
var inst_15366 = cljs.core.async.close_BANG_(out);
var state_15381__$1 = state_15381;
var statearr_15392_15415 = state_15381__$1;
(statearr_15392_15415[(2)] = inst_15366);

(statearr_15392_15415[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15382 === (10))){
var inst_15374 = (state_15381[(2)]);
var state_15381__$1 = (function (){var statearr_15393 = state_15381;
(statearr_15393[(8)] = inst_15374);

return statearr_15393;
})();
var statearr_15394_15416 = state_15381__$1;
(statearr_15394_15416[(2)] = null);

(statearr_15394_15416[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15382 === (8))){
var inst_15363 = (state_15381[(7)]);
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15381__$1,(11),out,inst_15363);
} else {
return null;
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
}
});})(c__13129__auto___15406,out))
;
return ((function (switch__13015__auto__,c__13129__auto___15406,out){
return (function() {
var cljs$core$async$state_machine__13016__auto__ = null;
var cljs$core$async$state_machine__13016__auto____0 = (function (){
var statearr_15398 = [null,null,null,null,null,null,null,null,null];
(statearr_15398[(0)] = cljs$core$async$state_machine__13016__auto__);

(statearr_15398[(1)] = (1));

return statearr_15398;
});
var cljs$core$async$state_machine__13016__auto____1 = (function (state_15381){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_15381);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e15399){if((e15399 instanceof Object)){
var ex__13019__auto__ = e15399;
var statearr_15400_15417 = state_15381;
(statearr_15400_15417[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15381);

return cljs.core.cst$kw$recur;
} else {
throw e15399;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__15418 = state_15381;
state_15381 = G__15418;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$state_machine__13016__auto__ = function(state_15381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13016__auto____1.call(this,state_15381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13016__auto____0;
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13016__auto____1;
return cljs$core$async$state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___15406,out))
})();
var state__13131__auto__ = (function (){var statearr_15401 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_15401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___15406);

return statearr_15401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___15406,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15419 = [];
var len__5726__auto___15422 = arguments.length;
var i__5727__auto___15423 = (0);
while(true){
if((i__5727__auto___15423 < len__5726__auto___15422)){
args15419.push((arguments[i__5727__auto___15423]));

var G__15424 = (i__5727__auto___15423 + (1));
i__5727__auto___15423 = G__15424;
continue;
} else {
}
break;
}

var G__15421 = args15419.length;
switch (G__15421) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15419.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13129__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto__){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto__){
return (function (state_15591){
var state_val_15592 = (state_15591[(1)]);
if((state_val_15592 === (7))){
var inst_15587 = (state_15591[(2)]);
var state_15591__$1 = state_15591;
var statearr_15593_15634 = state_15591__$1;
(statearr_15593_15634[(2)] = inst_15587);

(statearr_15593_15634[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (20))){
var inst_15557 = (state_15591[(7)]);
var inst_15568 = (state_15591[(2)]);
var inst_15569 = cljs.core.next(inst_15557);
var inst_15543 = inst_15569;
var inst_15544 = null;
var inst_15545 = (0);
var inst_15546 = (0);
var state_15591__$1 = (function (){var statearr_15594 = state_15591;
(statearr_15594[(8)] = inst_15545);

(statearr_15594[(9)] = inst_15568);

(statearr_15594[(10)] = inst_15546);

(statearr_15594[(11)] = inst_15543);

(statearr_15594[(12)] = inst_15544);

return statearr_15594;
})();
var statearr_15595_15635 = state_15591__$1;
(statearr_15595_15635[(2)] = null);

(statearr_15595_15635[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (1))){
var state_15591__$1 = state_15591;
var statearr_15596_15636 = state_15591__$1;
(statearr_15596_15636[(2)] = null);

(statearr_15596_15636[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (4))){
var inst_15532 = (state_15591[(13)]);
var inst_15532__$1 = (state_15591[(2)]);
var inst_15533 = (inst_15532__$1 == null);
var state_15591__$1 = (function (){var statearr_15597 = state_15591;
(statearr_15597[(13)] = inst_15532__$1);

return statearr_15597;
})();
if(cljs.core.truth_(inst_15533)){
var statearr_15598_15637 = state_15591__$1;
(statearr_15598_15637[(1)] = (5));

} else {
var statearr_15599_15638 = state_15591__$1;
(statearr_15599_15638[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (15))){
var state_15591__$1 = state_15591;
var statearr_15603_15639 = state_15591__$1;
(statearr_15603_15639[(2)] = null);

(statearr_15603_15639[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (21))){
var state_15591__$1 = state_15591;
var statearr_15604_15640 = state_15591__$1;
(statearr_15604_15640[(2)] = null);

(statearr_15604_15640[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (13))){
var inst_15545 = (state_15591[(8)]);
var inst_15546 = (state_15591[(10)]);
var inst_15543 = (state_15591[(11)]);
var inst_15544 = (state_15591[(12)]);
var inst_15553 = (state_15591[(2)]);
var inst_15554 = (inst_15546 + (1));
var tmp15600 = inst_15545;
var tmp15601 = inst_15543;
var tmp15602 = inst_15544;
var inst_15543__$1 = tmp15601;
var inst_15544__$1 = tmp15602;
var inst_15545__$1 = tmp15600;
var inst_15546__$1 = inst_15554;
var state_15591__$1 = (function (){var statearr_15605 = state_15591;
(statearr_15605[(8)] = inst_15545__$1);

(statearr_15605[(10)] = inst_15546__$1);

(statearr_15605[(11)] = inst_15543__$1);

(statearr_15605[(14)] = inst_15553);

(statearr_15605[(12)] = inst_15544__$1);

return statearr_15605;
})();
var statearr_15606_15641 = state_15591__$1;
(statearr_15606_15641[(2)] = null);

(statearr_15606_15641[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (22))){
var state_15591__$1 = state_15591;
var statearr_15607_15642 = state_15591__$1;
(statearr_15607_15642[(2)] = null);

(statearr_15607_15642[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (6))){
var inst_15532 = (state_15591[(13)]);
var inst_15541 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15532) : f.call(null,inst_15532));
var inst_15542 = cljs.core.seq(inst_15541);
var inst_15543 = inst_15542;
var inst_15544 = null;
var inst_15545 = (0);
var inst_15546 = (0);
var state_15591__$1 = (function (){var statearr_15608 = state_15591;
(statearr_15608[(8)] = inst_15545);

(statearr_15608[(10)] = inst_15546);

(statearr_15608[(11)] = inst_15543);

(statearr_15608[(12)] = inst_15544);

return statearr_15608;
})();
var statearr_15609_15643 = state_15591__$1;
(statearr_15609_15643[(2)] = null);

(statearr_15609_15643[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (17))){
var inst_15557 = (state_15591[(7)]);
var inst_15561 = cljs.core.chunk_first(inst_15557);
var inst_15562 = cljs.core.chunk_rest(inst_15557);
var inst_15563 = cljs.core.count(inst_15561);
var inst_15543 = inst_15562;
var inst_15544 = inst_15561;
var inst_15545 = inst_15563;
var inst_15546 = (0);
var state_15591__$1 = (function (){var statearr_15610 = state_15591;
(statearr_15610[(8)] = inst_15545);

(statearr_15610[(10)] = inst_15546);

(statearr_15610[(11)] = inst_15543);

(statearr_15610[(12)] = inst_15544);

return statearr_15610;
})();
var statearr_15611_15644 = state_15591__$1;
(statearr_15611_15644[(2)] = null);

(statearr_15611_15644[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (3))){
var inst_15589 = (state_15591[(2)]);
var state_15591__$1 = state_15591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15591__$1,inst_15589);
} else {
if((state_val_15592 === (12))){
var inst_15577 = (state_15591[(2)]);
var state_15591__$1 = state_15591;
var statearr_15612_15645 = state_15591__$1;
(statearr_15612_15645[(2)] = inst_15577);

(statearr_15612_15645[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (2))){
var state_15591__$1 = state_15591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15591__$1,(4),in$);
} else {
if((state_val_15592 === (23))){
var inst_15585 = (state_15591[(2)]);
var state_15591__$1 = state_15591;
var statearr_15613_15646 = state_15591__$1;
(statearr_15613_15646[(2)] = inst_15585);

(statearr_15613_15646[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (19))){
var inst_15572 = (state_15591[(2)]);
var state_15591__$1 = state_15591;
var statearr_15614_15647 = state_15591__$1;
(statearr_15614_15647[(2)] = inst_15572);

(statearr_15614_15647[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (11))){
var inst_15543 = (state_15591[(11)]);
var inst_15557 = (state_15591[(7)]);
var inst_15557__$1 = cljs.core.seq(inst_15543);
var state_15591__$1 = (function (){var statearr_15615 = state_15591;
(statearr_15615[(7)] = inst_15557__$1);

return statearr_15615;
})();
if(inst_15557__$1){
var statearr_15616_15648 = state_15591__$1;
(statearr_15616_15648[(1)] = (14));

} else {
var statearr_15617_15649 = state_15591__$1;
(statearr_15617_15649[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (9))){
var inst_15579 = (state_15591[(2)]);
var inst_15580 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15591__$1 = (function (){var statearr_15618 = state_15591;
(statearr_15618[(15)] = inst_15579);

return statearr_15618;
})();
if(cljs.core.truth_(inst_15580)){
var statearr_15619_15650 = state_15591__$1;
(statearr_15619_15650[(1)] = (21));

} else {
var statearr_15620_15651 = state_15591__$1;
(statearr_15620_15651[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (5))){
var inst_15535 = cljs.core.async.close_BANG_(out);
var state_15591__$1 = state_15591;
var statearr_15621_15652 = state_15591__$1;
(statearr_15621_15652[(2)] = inst_15535);

(statearr_15621_15652[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (14))){
var inst_15557 = (state_15591[(7)]);
var inst_15559 = cljs.core.chunked_seq_QMARK_(inst_15557);
var state_15591__$1 = state_15591;
if(inst_15559){
var statearr_15622_15653 = state_15591__$1;
(statearr_15622_15653[(1)] = (17));

} else {
var statearr_15623_15654 = state_15591__$1;
(statearr_15623_15654[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (16))){
var inst_15575 = (state_15591[(2)]);
var state_15591__$1 = state_15591;
var statearr_15624_15655 = state_15591__$1;
(statearr_15624_15655[(2)] = inst_15575);

(statearr_15624_15655[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15592 === (10))){
var inst_15546 = (state_15591[(10)]);
var inst_15544 = (state_15591[(12)]);
var inst_15551 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15544,inst_15546);
var state_15591__$1 = state_15591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15591__$1,(13),out,inst_15551);
} else {
if((state_val_15592 === (18))){
var inst_15557 = (state_15591[(7)]);
var inst_15566 = cljs.core.first(inst_15557);
var state_15591__$1 = state_15591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15591__$1,(20),out,inst_15566);
} else {
if((state_val_15592 === (8))){
var inst_15545 = (state_15591[(8)]);
var inst_15546 = (state_15591[(10)]);
var inst_15548 = (inst_15546 < inst_15545);
var inst_15549 = inst_15548;
var state_15591__$1 = state_15591;
if(cljs.core.truth_(inst_15549)){
var statearr_15625_15656 = state_15591__$1;
(statearr_15625_15656[(1)] = (10));

} else {
var statearr_15626_15657 = state_15591__$1;
(statearr_15626_15657[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
});})(c__13129__auto__))
;
return ((function (switch__13015__auto__,c__13129__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13016__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13016__auto____0 = (function (){
var statearr_15630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15630[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13016__auto__);

(statearr_15630[(1)] = (1));

return statearr_15630;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13016__auto____1 = (function (state_15591){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_15591);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e15631){if((e15631 instanceof Object)){
var ex__13019__auto__ = e15631;
var statearr_15632_15658 = state_15591;
(statearr_15632_15658[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15591);

return cljs.core.cst$kw$recur;
} else {
throw e15631;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__15659 = state_15591;
state_15591 = G__15659;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13016__auto__ = function(state_15591){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13016__auto____1.call(this,state_15591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13016__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13016__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto__))
})();
var state__13131__auto__ = (function (){var statearr_15633 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_15633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto__);

return statearr_15633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto__))
);

return c__13129__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15660 = [];
var len__5726__auto___15663 = arguments.length;
var i__5727__auto___15664 = (0);
while(true){
if((i__5727__auto___15664 < len__5726__auto___15663)){
args15660.push((arguments[i__5727__auto___15664]));

var G__15665 = (i__5727__auto___15664 + (1));
i__5727__auto___15664 = G__15665;
continue;
} else {
}
break;
}

var G__15662 = args15660.length;
switch (G__15662) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15660.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args15667 = [];
var len__5726__auto___15670 = arguments.length;
var i__5727__auto___15671 = (0);
while(true){
if((i__5727__auto___15671 < len__5726__auto___15670)){
args15667.push((arguments[i__5727__auto___15671]));

var G__15672 = (i__5727__auto___15671 + (1));
i__5727__auto___15671 = G__15672;
continue;
} else {
}
break;
}

var G__15669 = args15667.length;
switch (G__15669) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15667.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args15674 = [];
var len__5726__auto___15725 = arguments.length;
var i__5727__auto___15726 = (0);
while(true){
if((i__5727__auto___15726 < len__5726__auto___15725)){
args15674.push((arguments[i__5727__auto___15726]));

var G__15727 = (i__5727__auto___15726 + (1));
i__5727__auto___15726 = G__15727;
continue;
} else {
}
break;
}

var G__15676 = args15674.length;
switch (G__15676) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15674.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13129__auto___15729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___15729,out){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___15729,out){
return (function (state_15700){
var state_val_15701 = (state_15700[(1)]);
if((state_val_15701 === (7))){
var inst_15695 = (state_15700[(2)]);
var state_15700__$1 = state_15700;
var statearr_15702_15730 = state_15700__$1;
(statearr_15702_15730[(2)] = inst_15695);

(statearr_15702_15730[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15701 === (1))){
var inst_15677 = null;
var state_15700__$1 = (function (){var statearr_15703 = state_15700;
(statearr_15703[(7)] = inst_15677);

return statearr_15703;
})();
var statearr_15704_15731 = state_15700__$1;
(statearr_15704_15731[(2)] = null);

(statearr_15704_15731[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15701 === (4))){
var inst_15680 = (state_15700[(8)]);
var inst_15680__$1 = (state_15700[(2)]);
var inst_15681 = (inst_15680__$1 == null);
var inst_15682 = cljs.core.not(inst_15681);
var state_15700__$1 = (function (){var statearr_15705 = state_15700;
(statearr_15705[(8)] = inst_15680__$1);

return statearr_15705;
})();
if(inst_15682){
var statearr_15706_15732 = state_15700__$1;
(statearr_15706_15732[(1)] = (5));

} else {
var statearr_15707_15733 = state_15700__$1;
(statearr_15707_15733[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15701 === (6))){
var state_15700__$1 = state_15700;
var statearr_15708_15734 = state_15700__$1;
(statearr_15708_15734[(2)] = null);

(statearr_15708_15734[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15701 === (3))){
var inst_15697 = (state_15700[(2)]);
var inst_15698 = cljs.core.async.close_BANG_(out);
var state_15700__$1 = (function (){var statearr_15709 = state_15700;
(statearr_15709[(9)] = inst_15697);

return statearr_15709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15700__$1,inst_15698);
} else {
if((state_val_15701 === (2))){
var state_15700__$1 = state_15700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15700__$1,(4),ch);
} else {
if((state_val_15701 === (11))){
var inst_15680 = (state_15700[(8)]);
var inst_15689 = (state_15700[(2)]);
var inst_15677 = inst_15680;
var state_15700__$1 = (function (){var statearr_15710 = state_15700;
(statearr_15710[(7)] = inst_15677);

(statearr_15710[(10)] = inst_15689);

return statearr_15710;
})();
var statearr_15711_15735 = state_15700__$1;
(statearr_15711_15735[(2)] = null);

(statearr_15711_15735[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15701 === (9))){
var inst_15680 = (state_15700[(8)]);
var state_15700__$1 = state_15700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15700__$1,(11),out,inst_15680);
} else {
if((state_val_15701 === (5))){
var inst_15680 = (state_15700[(8)]);
var inst_15677 = (state_15700[(7)]);
var inst_15684 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15680,inst_15677);
var state_15700__$1 = state_15700;
if(inst_15684){
var statearr_15713_15736 = state_15700__$1;
(statearr_15713_15736[(1)] = (8));

} else {
var statearr_15714_15737 = state_15700__$1;
(statearr_15714_15737[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15701 === (10))){
var inst_15692 = (state_15700[(2)]);
var state_15700__$1 = state_15700;
var statearr_15715_15738 = state_15700__$1;
(statearr_15715_15738[(2)] = inst_15692);

(statearr_15715_15738[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15701 === (8))){
var inst_15677 = (state_15700[(7)]);
var tmp15712 = inst_15677;
var inst_15677__$1 = tmp15712;
var state_15700__$1 = (function (){var statearr_15716 = state_15700;
(statearr_15716[(7)] = inst_15677__$1);

return statearr_15716;
})();
var statearr_15717_15739 = state_15700__$1;
(statearr_15717_15739[(2)] = null);

(statearr_15717_15739[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
});})(c__13129__auto___15729,out))
;
return ((function (switch__13015__auto__,c__13129__auto___15729,out){
return (function() {
var cljs$core$async$state_machine__13016__auto__ = null;
var cljs$core$async$state_machine__13016__auto____0 = (function (){
var statearr_15721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15721[(0)] = cljs$core$async$state_machine__13016__auto__);

(statearr_15721[(1)] = (1));

return statearr_15721;
});
var cljs$core$async$state_machine__13016__auto____1 = (function (state_15700){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_15700);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e15722){if((e15722 instanceof Object)){
var ex__13019__auto__ = e15722;
var statearr_15723_15740 = state_15700;
(statearr_15723_15740[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15700);

return cljs.core.cst$kw$recur;
} else {
throw e15722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__15741 = state_15700;
state_15700 = G__15741;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$state_machine__13016__auto__ = function(state_15700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13016__auto____1.call(this,state_15700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13016__auto____0;
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13016__auto____1;
return cljs$core$async$state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___15729,out))
})();
var state__13131__auto__ = (function (){var statearr_15724 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_15724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___15729);

return statearr_15724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___15729,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15742 = [];
var len__5726__auto___15812 = arguments.length;
var i__5727__auto___15813 = (0);
while(true){
if((i__5727__auto___15813 < len__5726__auto___15812)){
args15742.push((arguments[i__5727__auto___15813]));

var G__15814 = (i__5727__auto___15813 + (1));
i__5727__auto___15813 = G__15814;
continue;
} else {
}
break;
}

var G__15744 = args15742.length;
switch (G__15744) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15742.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13129__auto___15816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___15816,out){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___15816,out){
return (function (state_15782){
var state_val_15783 = (state_15782[(1)]);
if((state_val_15783 === (7))){
var inst_15778 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
var statearr_15784_15817 = state_15782__$1;
(statearr_15784_15817[(2)] = inst_15778);

(statearr_15784_15817[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15783 === (1))){
var inst_15745 = (new Array(n));
var inst_15746 = inst_15745;
var inst_15747 = (0);
var state_15782__$1 = (function (){var statearr_15785 = state_15782;
(statearr_15785[(7)] = inst_15747);

(statearr_15785[(8)] = inst_15746);

return statearr_15785;
})();
var statearr_15786_15818 = state_15782__$1;
(statearr_15786_15818[(2)] = null);

(statearr_15786_15818[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15783 === (4))){
var inst_15750 = (state_15782[(9)]);
var inst_15750__$1 = (state_15782[(2)]);
var inst_15751 = (inst_15750__$1 == null);
var inst_15752 = cljs.core.not(inst_15751);
var state_15782__$1 = (function (){var statearr_15787 = state_15782;
(statearr_15787[(9)] = inst_15750__$1);

return statearr_15787;
})();
if(inst_15752){
var statearr_15788_15819 = state_15782__$1;
(statearr_15788_15819[(1)] = (5));

} else {
var statearr_15789_15820 = state_15782__$1;
(statearr_15789_15820[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15783 === (15))){
var inst_15772 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
var statearr_15790_15821 = state_15782__$1;
(statearr_15790_15821[(2)] = inst_15772);

(statearr_15790_15821[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15783 === (13))){
var state_15782__$1 = state_15782;
var statearr_15791_15822 = state_15782__$1;
(statearr_15791_15822[(2)] = null);

(statearr_15791_15822[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15783 === (6))){
var inst_15747 = (state_15782[(7)]);
var inst_15768 = (inst_15747 > (0));
var state_15782__$1 = state_15782;
if(cljs.core.truth_(inst_15768)){
var statearr_15792_15823 = state_15782__$1;
(statearr_15792_15823[(1)] = (12));

} else {
var statearr_15793_15824 = state_15782__$1;
(statearr_15793_15824[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15783 === (3))){
var inst_15780 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15782__$1,inst_15780);
} else {
if((state_val_15783 === (12))){
var inst_15746 = (state_15782[(8)]);
var inst_15770 = cljs.core.vec(inst_15746);
var state_15782__$1 = state_15782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15782__$1,(15),out,inst_15770);
} else {
if((state_val_15783 === (2))){
var state_15782__$1 = state_15782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15782__$1,(4),ch);
} else {
if((state_val_15783 === (11))){
var inst_15762 = (state_15782[(2)]);
var inst_15763 = (new Array(n));
var inst_15746 = inst_15763;
var inst_15747 = (0);
var state_15782__$1 = (function (){var statearr_15794 = state_15782;
(statearr_15794[(7)] = inst_15747);

(statearr_15794[(10)] = inst_15762);

(statearr_15794[(8)] = inst_15746);

return statearr_15794;
})();
var statearr_15795_15825 = state_15782__$1;
(statearr_15795_15825[(2)] = null);

(statearr_15795_15825[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15783 === (9))){
var inst_15746 = (state_15782[(8)]);
var inst_15760 = cljs.core.vec(inst_15746);
var state_15782__$1 = state_15782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15782__$1,(11),out,inst_15760);
} else {
if((state_val_15783 === (5))){
var inst_15750 = (state_15782[(9)]);
var inst_15747 = (state_15782[(7)]);
var inst_15746 = (state_15782[(8)]);
var inst_15755 = (state_15782[(11)]);
var inst_15754 = (inst_15746[inst_15747] = inst_15750);
var inst_15755__$1 = (inst_15747 + (1));
var inst_15756 = (inst_15755__$1 < n);
var state_15782__$1 = (function (){var statearr_15796 = state_15782;
(statearr_15796[(12)] = inst_15754);

(statearr_15796[(11)] = inst_15755__$1);

return statearr_15796;
})();
if(cljs.core.truth_(inst_15756)){
var statearr_15797_15826 = state_15782__$1;
(statearr_15797_15826[(1)] = (8));

} else {
var statearr_15798_15827 = state_15782__$1;
(statearr_15798_15827[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15783 === (14))){
var inst_15775 = (state_15782[(2)]);
var inst_15776 = cljs.core.async.close_BANG_(out);
var state_15782__$1 = (function (){var statearr_15800 = state_15782;
(statearr_15800[(13)] = inst_15775);

return statearr_15800;
})();
var statearr_15801_15828 = state_15782__$1;
(statearr_15801_15828[(2)] = inst_15776);

(statearr_15801_15828[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15783 === (10))){
var inst_15766 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
var statearr_15802_15829 = state_15782__$1;
(statearr_15802_15829[(2)] = inst_15766);

(statearr_15802_15829[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15783 === (8))){
var inst_15746 = (state_15782[(8)]);
var inst_15755 = (state_15782[(11)]);
var tmp15799 = inst_15746;
var inst_15746__$1 = tmp15799;
var inst_15747 = inst_15755;
var state_15782__$1 = (function (){var statearr_15803 = state_15782;
(statearr_15803[(7)] = inst_15747);

(statearr_15803[(8)] = inst_15746__$1);

return statearr_15803;
})();
var statearr_15804_15830 = state_15782__$1;
(statearr_15804_15830[(2)] = null);

(statearr_15804_15830[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
});})(c__13129__auto___15816,out))
;
return ((function (switch__13015__auto__,c__13129__auto___15816,out){
return (function() {
var cljs$core$async$state_machine__13016__auto__ = null;
var cljs$core$async$state_machine__13016__auto____0 = (function (){
var statearr_15808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15808[(0)] = cljs$core$async$state_machine__13016__auto__);

(statearr_15808[(1)] = (1));

return statearr_15808;
});
var cljs$core$async$state_machine__13016__auto____1 = (function (state_15782){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_15782);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e15809){if((e15809 instanceof Object)){
var ex__13019__auto__ = e15809;
var statearr_15810_15831 = state_15782;
(statearr_15810_15831[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15782);

return cljs.core.cst$kw$recur;
} else {
throw e15809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__15832 = state_15782;
state_15782 = G__15832;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$state_machine__13016__auto__ = function(state_15782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13016__auto____1.call(this,state_15782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13016__auto____0;
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13016__auto____1;
return cljs$core$async$state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___15816,out))
})();
var state__13131__auto__ = (function (){var statearr_15811 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_15811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___15816);

return statearr_15811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___15816,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15833 = [];
var len__5726__auto___15907 = arguments.length;
var i__5727__auto___15908 = (0);
while(true){
if((i__5727__auto___15908 < len__5726__auto___15907)){
args15833.push((arguments[i__5727__auto___15908]));

var G__15909 = (i__5727__auto___15908 + (1));
i__5727__auto___15908 = G__15909;
continue;
} else {
}
break;
}

var G__15835 = args15833.length;
switch (G__15835) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15833.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13129__auto___15911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto___15911,out){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto___15911,out){
return (function (state_15877){
var state_val_15878 = (state_15877[(1)]);
if((state_val_15878 === (7))){
var inst_15873 = (state_15877[(2)]);
var state_15877__$1 = state_15877;
var statearr_15879_15912 = state_15877__$1;
(statearr_15879_15912[(2)] = inst_15873);

(statearr_15879_15912[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15878 === (1))){
var inst_15836 = [];
var inst_15837 = inst_15836;
var inst_15838 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_15877__$1 = (function (){var statearr_15880 = state_15877;
(statearr_15880[(7)] = inst_15837);

(statearr_15880[(8)] = inst_15838);

return statearr_15880;
})();
var statearr_15881_15913 = state_15877__$1;
(statearr_15881_15913[(2)] = null);

(statearr_15881_15913[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15878 === (4))){
var inst_15841 = (state_15877[(9)]);
var inst_15841__$1 = (state_15877[(2)]);
var inst_15842 = (inst_15841__$1 == null);
var inst_15843 = cljs.core.not(inst_15842);
var state_15877__$1 = (function (){var statearr_15882 = state_15877;
(statearr_15882[(9)] = inst_15841__$1);

return statearr_15882;
})();
if(inst_15843){
var statearr_15883_15914 = state_15877__$1;
(statearr_15883_15914[(1)] = (5));

} else {
var statearr_15884_15915 = state_15877__$1;
(statearr_15884_15915[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15878 === (15))){
var inst_15867 = (state_15877[(2)]);
var state_15877__$1 = state_15877;
var statearr_15885_15916 = state_15877__$1;
(statearr_15885_15916[(2)] = inst_15867);

(statearr_15885_15916[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15878 === (13))){
var state_15877__$1 = state_15877;
var statearr_15886_15917 = state_15877__$1;
(statearr_15886_15917[(2)] = null);

(statearr_15886_15917[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15878 === (6))){
var inst_15837 = (state_15877[(7)]);
var inst_15862 = inst_15837.length;
var inst_15863 = (inst_15862 > (0));
var state_15877__$1 = state_15877;
if(cljs.core.truth_(inst_15863)){
var statearr_15887_15918 = state_15877__$1;
(statearr_15887_15918[(1)] = (12));

} else {
var statearr_15888_15919 = state_15877__$1;
(statearr_15888_15919[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15878 === (3))){
var inst_15875 = (state_15877[(2)]);
var state_15877__$1 = state_15877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15877__$1,inst_15875);
} else {
if((state_val_15878 === (12))){
var inst_15837 = (state_15877[(7)]);
var inst_15865 = cljs.core.vec(inst_15837);
var state_15877__$1 = state_15877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15877__$1,(15),out,inst_15865);
} else {
if((state_val_15878 === (2))){
var state_15877__$1 = state_15877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15877__$1,(4),ch);
} else {
if((state_val_15878 === (11))){
var inst_15841 = (state_15877[(9)]);
var inst_15845 = (state_15877[(10)]);
var inst_15855 = (state_15877[(2)]);
var inst_15856 = [];
var inst_15857 = inst_15856.push(inst_15841);
var inst_15837 = inst_15856;
var inst_15838 = inst_15845;
var state_15877__$1 = (function (){var statearr_15889 = state_15877;
(statearr_15889[(7)] = inst_15837);

(statearr_15889[(8)] = inst_15838);

(statearr_15889[(11)] = inst_15855);

(statearr_15889[(12)] = inst_15857);

return statearr_15889;
})();
var statearr_15890_15920 = state_15877__$1;
(statearr_15890_15920[(2)] = null);

(statearr_15890_15920[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15878 === (9))){
var inst_15837 = (state_15877[(7)]);
var inst_15853 = cljs.core.vec(inst_15837);
var state_15877__$1 = state_15877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15877__$1,(11),out,inst_15853);
} else {
if((state_val_15878 === (5))){
var inst_15838 = (state_15877[(8)]);
var inst_15841 = (state_15877[(9)]);
var inst_15845 = (state_15877[(10)]);
var inst_15845__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15841) : f.call(null,inst_15841));
var inst_15846 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15845__$1,inst_15838);
var inst_15847 = cljs.core.keyword_identical_QMARK_(inst_15838,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_15848 = (inst_15846) || (inst_15847);
var state_15877__$1 = (function (){var statearr_15891 = state_15877;
(statearr_15891[(10)] = inst_15845__$1);

return statearr_15891;
})();
if(cljs.core.truth_(inst_15848)){
var statearr_15892_15921 = state_15877__$1;
(statearr_15892_15921[(1)] = (8));

} else {
var statearr_15893_15922 = state_15877__$1;
(statearr_15893_15922[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15878 === (14))){
var inst_15870 = (state_15877[(2)]);
var inst_15871 = cljs.core.async.close_BANG_(out);
var state_15877__$1 = (function (){var statearr_15895 = state_15877;
(statearr_15895[(13)] = inst_15870);

return statearr_15895;
})();
var statearr_15896_15923 = state_15877__$1;
(statearr_15896_15923[(2)] = inst_15871);

(statearr_15896_15923[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15878 === (10))){
var inst_15860 = (state_15877[(2)]);
var state_15877__$1 = state_15877;
var statearr_15897_15924 = state_15877__$1;
(statearr_15897_15924[(2)] = inst_15860);

(statearr_15897_15924[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15878 === (8))){
var inst_15837 = (state_15877[(7)]);
var inst_15841 = (state_15877[(9)]);
var inst_15845 = (state_15877[(10)]);
var inst_15850 = inst_15837.push(inst_15841);
var tmp15894 = inst_15837;
var inst_15837__$1 = tmp15894;
var inst_15838 = inst_15845;
var state_15877__$1 = (function (){var statearr_15898 = state_15877;
(statearr_15898[(7)] = inst_15837__$1);

(statearr_15898[(8)] = inst_15838);

(statearr_15898[(14)] = inst_15850);

return statearr_15898;
})();
var statearr_15899_15925 = state_15877__$1;
(statearr_15899_15925[(2)] = null);

(statearr_15899_15925[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
});})(c__13129__auto___15911,out))
;
return ((function (switch__13015__auto__,c__13129__auto___15911,out){
return (function() {
var cljs$core$async$state_machine__13016__auto__ = null;
var cljs$core$async$state_machine__13016__auto____0 = (function (){
var statearr_15903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15903[(0)] = cljs$core$async$state_machine__13016__auto__);

(statearr_15903[(1)] = (1));

return statearr_15903;
});
var cljs$core$async$state_machine__13016__auto____1 = (function (state_15877){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_15877);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e15904){if((e15904 instanceof Object)){
var ex__13019__auto__ = e15904;
var statearr_15905_15926 = state_15877;
(statearr_15905_15926[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15877);

return cljs.core.cst$kw$recur;
} else {
throw e15904;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__15927 = state_15877;
state_15877 = G__15927;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
cljs$core$async$state_machine__13016__auto__ = function(state_15877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13016__auto____1.call(this,state_15877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13016__auto____0;
cljs$core$async$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13016__auto____1;
return cljs$core$async$state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto___15911,out))
})();
var state__13131__auto__ = (function (){var statearr_15906 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_15906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto___15911);

return statearr_15906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto___15911,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
