// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.crypt.base64');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$http,(80),cljs.core.cst$kw$https,(443),cljs.core.cst$kw$mysql,(3306),cljs.core.cst$kw$postgresql,(5432),cljs.core.cst$kw$rabbitmq,(5672)], null);
no.en.core.url_regex = /([^:]+):\/\/(([^:]+):([^@]+)@)?(([^:\/]+)(:([0-9]+))?((\/[^?]*)(\?([^#]*))?)?)(\#(.*))?/;
/**
 * Split the string `s` by the regex `pattern`.
 */
no.en.core.split_by_regex = (function no$en$core$split_by_regex(s,pattern){
if(cljs.core.sequential_QMARK_(s)){
return s;
} else {
if(!(clojure.string.blank_QMARK_(s))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,pattern);
} else {
return null;
}
}
});
/**
 * Split the string `s` by comma.
 */
no.en.core.split_by_comma = (function no$en$core$split_by_comma(s){
return no.en.core.split_by_regex(s,/\s*,\s*/);
});
/**
 * Returns `bytes` as an UTF-8 encoded string.
 */
no.en.core.utf8_string = (function no$en$core$utf8_string(bytes){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("utf8-string not implemented yet",bytes);
});
/**
 * Returns `s` as a Base64 encoded string.
 */
no.en.core.base64_encode = (function no$en$core$base64_encode(bytes){
if(cljs.core.truth_(bytes)){
return goog.crypt.base64.encodeString(bytes,false);
} else {
return null;
}
});
/**
 * Returns `s` as a Base64 decoded string.
 */
no.en.core.base64_decode = (function no$en$core$base64_decode(s){
if(cljs.core.truth_(s)){
return goog.crypt.base64.decodeString(s,false);
} else {
return null;
}
});
/**
 * Removes all map entries where the value of the entry is empty.
 */
no.en.core.compact_map = (function no$en$core$compact_map(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
if(((v == null)) || (((cljs.core.map_QMARK_(v)) || (cljs.core.sequential_QMARK_(v))) && (cljs.core.empty_QMARK_(v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys(m));
});
/**
 * Returns `s` as an URL encoded string.
 */
no.en.core.url_encode = (function no$en$core$url_encode(var_args){
var args__5733__auto__ = [];
var len__5726__auto___20193 = arguments.length;
var i__5727__auto___20194 = (0);
while(true){
if((i__5727__auto___20194 < len__5726__auto___20193)){
args__5733__auto__.push((arguments[i__5727__auto___20194]));

var G__20195 = (i__5727__auto___20194 + (1));
i__5727__auto___20194 = G__20195;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__20190){
var vec__20191 = p__20190;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20191,(0),null);
if(cljs.core.truth_(s)){
return clojure.string.replace((function (){var G__20192 = [cljs.core.str(s)].join('');
return encodeURIComponent(G__20192);
})(),"*","%2A");
} else {
return null;
}
});

no.en.core.url_encode.cljs$lang$maxFixedArity = (1);

no.en.core.url_encode.cljs$lang$applyTo = (function (seq20188){
var G__20189 = cljs.core.first(seq20188);
var seq20188__$1 = cljs.core.next(seq20188);
return no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic(G__20189,seq20188__$1);
});
/**
 * Returns `s` as an URL decoded string.
 */
no.en.core.url_decode = (function no$en$core$url_decode(var_args){
var args__5733__auto__ = [];
var len__5726__auto___20200 = arguments.length;
var i__5727__auto___20201 = (0);
while(true){
if((i__5727__auto___20201 < len__5726__auto___20200)){
args__5733__auto__.push((arguments[i__5727__auto___20201]));

var G__20202 = (i__5727__auto___20201 + (1));
i__5727__auto___20201 = G__20202;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__20198){
var vec__20199 = p__20198;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20199,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

no.en.core.url_decode.cljs$lang$maxFixedArity = (1);

no.en.core.url_decode.cljs$lang$applyTo = (function (seq20196){
var G__20197 = cljs.core.first(seq20196);
var seq20196__$1 = cljs.core.next(seq20196);
return no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__20197,seq20196__$1);
});
no.en.core.pow = (function no$en$core$pow(n,x){
return Math.pow(n,x);
});
no.en.core.byte_scale = cljs.core.PersistentHashMap.fromArrays(["T","K","G","M","Y","Z","E","B","P"],[no.en.core.pow((1024),(4)),no.en.core.pow((1024),(1)),no.en.core.pow((1024),(3)),no.en.core.pow((1024),(2)),no.en.core.pow((1024),(8)),no.en.core.pow((1024),(7)),no.en.core.pow((1024),(6)),no.en.core.pow((1024),(0)),no.en.core.pow((1024),(5))]);
no.en.core.apply_unit = (function no$en$core$apply_unit(number,unit){
if(typeof unit === 'string'){
var G__20205 = clojure.string.upper_case(unit);
switch (G__20205) {
default:
var G__20206 = unit;
switch (G__20206) {
case "M":
return (number * (1000000));

break;
case "B":
return (number * (1000000000));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(unit)].join('')));

}

}
} else {
return number;
}
});
no.en.core.parse_number = (function no$en$core$parse_number(s,parse_fn){
var temp__4423__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*/,[cljs.core.str(s)].join(''));
if(cljs.core.truth_(temp__4423__auto__)){
var matches = temp__4423__auto__;
var number = (function (){var G__20210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1));
return (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(G__20210) : parse_fn.call(null,G__20210));
})();
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));
if(cljs.core.not(isNaN(number))){
return no.en.core.apply_unit(number,unit);
} else {
return null;
}
} else {
return null;
}
});
no.en.core.parse_bytes = (function no$en$core$parse_bytes(s){
var temp__4423__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*/,[cljs.core.str(s)].join(''));
if(cljs.core.truth_(temp__4423__auto__)){
var matches = temp__4423__auto__;
var number = cljs.reader.read_string(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));
return cljs.core.long$((cljs.core.long$(cljs.reader.read_string([cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)))].join(''))) * cljs.core.get.cljs$core$IFn$_invoke$arity$3(no.en.core.byte_scale,clojure.string.upper_case((function (){var or__4668__auto__ = unit;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})()),(1))));
} else {
return null;
}
});
/**
 * Parse `s` as a integer number.
 */
no.en.core.parse_integer = (function no$en$core$parse_integer(s){
return no.en.core.parse_number(s,(function (p1__20211_SHARP_){
return parseInt(p1__20211_SHARP_);
}));
});
/**
 * Parse `s` as a long number.
 */
no.en.core.parse_long = (function no$en$core$parse_long(s){
return no.en.core.parse_number(s,(function (p1__20212_SHARP_){
return parseInt(p1__20212_SHARP_);
}));
});
/**
 * Parse `s` as a double number.
 */
no.en.core.parse_double = (function no$en$core$parse_double(s){
return no.en.core.parse_number(s,(function (p1__20213_SHARP_){
return parseFloat(p1__20213_SHARP_);
}));
});
/**
 * Parse `s` as a float number.
 */
no.en.core.parse_float = (function no$en$core$parse_float(s){
return no.en.core.parse_number(s,(function (p1__20214_SHARP_){
return parseFloat(p1__20214_SHARP_);
}));
});
/**
 * Format the map `m` into a query parameter string.
 */
no.en.core.format_query_params = (function no$en$core$format_query_params(m){
var params = clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20217_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__20217_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20216_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode(cljs.core.name(cljs.core.first(p1__20216_SHARP_))),no.en.core.url_encode(cljs.core.second(p1__20216_SHARP_))],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20215_SHARP_){
return clojure.string.blank_QMARK_([cljs.core.str(cljs.core.second(p1__20215_SHARP_))].join(''));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.seq(m))))));
if(!(clojure.string.blank_QMARK_(params))){
return params;
} else {
return null;
}
});
/**
 * Format the Ring map as an url.
 */
no.en.core.format_url = (function no$en$core$format_url(m){
if(!(cljs.core.empty_QMARK_(m))){
var query_params = cljs.core.cst$kw$query_DASH_params.cljs$core$IFn$_invoke$arity$1(m);
return [cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$scheme.cljs$core$IFn$_invoke$arity$1(m))?[cljs.core.str(cljs.core.name(cljs.core.cst$kw$scheme.cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str("://")].join(''):null)),cljs.core.str((function (){var map__20221 = m;
var map__20221__$1 = ((((!((map__20221 == null)))?((((map__20221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20221):map__20221);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20221__$1,cljs.core.cst$kw$user);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20221__$1,cljs.core.cst$kw$password);
if(cljs.core.truth_(user)){
return [cljs.core.str((cljs.core.truth_(user)?user:null)),cljs.core.str((cljs.core.truth_(password)?[cljs.core.str(":"),cljs.core.str(password)].join(''):null)),cljs.core.str("@")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.cst$kw$server_DASH_name.cljs$core$IFn$_invoke$arity$1(m)),cljs.core.str((function (){var temp__4423__auto__ = cljs.core.cst$kw$server_DASH_port.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var port = temp__4423__auto__;
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,(function (){var G__20223 = cljs.core.cst$kw$scheme.cljs$core$IFn$_invoke$arity$1(m);
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__20223) : no.en.core.port_number.call(null,G__20223));
})()))){
return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else {
return null;
}
} else {
return null;
}
})()),cljs.core.str(((((cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(m) == null)) && (!(cljs.core.empty_QMARK_(query_params))))?"/":cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str(((!(cljs.core.empty_QMARK_(query_params)))?[cljs.core.str("?"),cljs.core.str(no.en.core.format_query_params(query_params))].join(''):null)),cljs.core.str(((!(clojure.string.blank_QMARK_(cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(m))))?[cljs.core.str("#"),cljs.core.str(cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(m))].join(''):null))].join('');
} else {
return null;
}
});
/**
 * Parse `s` as a percentage.
 */
no.en.core.parse_percent = (function no$en$core$parse_percent(s){
return no.en.core.parse_double(clojure.string.replace(s,"%",""));
});
/**
 * Quote the special characters in `s` that are used in regular expressions.
 */
no.en.core.pattern_quote = (function no$en$core$pattern_quote(s){
return clojure.string.replace(cljs.core.name(s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1");
});
/**
 * Returns the first string that separates the components in `s`.
 */
no.en.core.separator = (function no$en$core$separator(s){
var temp__4423__auto__ = cljs.core.re_matches(/([a-z0-9_-]+)([^a-z0-9_-]+).*/i,s);
if(cljs.core.truth_(temp__4423__auto__)){
var matches = temp__4423__auto__;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(2));
} else {
return null;
}
});
/**
 * Parse the query parameter string `s` and return a map.
 */
no.en.core.parse_query_params = (function no$en$core$parse_query_params(s){
if(cljs.core.truth_(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__20226_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(cljs.core.first(p1__20226_SHARP_))),no.en.core.url_decode(cljs.core.second(p1__20226_SHARP_))],null));
}),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20225_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(p1__20225_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20224_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__20224_SHARP_,/=/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(s)].join(''),/&/)))], 0)));
} else {
return null;
}
});
/**
 * Parse the url `s` and return a Ring compatible map.
 */
no.en.core.parse_url = (function no$en$core$parse_url(s){
var temp__4423__auto__ = cljs.core.re_matches(no.en.core.url_regex,[cljs.core.str(s)].join(''));
if(cljs.core.truth_(temp__4423__auto__)){
var matches = temp__4423__auto__;
var scheme = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));
return no.en.core.compact_map(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$password,cljs.core.cst$kw$fragment,cljs.core.cst$kw$server_DASH_port,cljs.core.cst$kw$query_DASH_params,cljs.core.cst$kw$uri,cljs.core.cst$kw$server_DASH_name,cljs.core.cst$kw$query_DASH_string,cljs.core.cst$kw$user,cljs.core.cst$kw$scheme],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(14)),(function (){var or__4668__auto__ = no.en.core.parse_integer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(8)));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(scheme) : no.en.core.port_number.call(null,scheme));
}
})(),no.en.core.parse_query_params(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3)),scheme]));
} else {
return null;
}
});
/**
 * Executes thunk. If an exception is thrown, will retry. At most n retries
 *   are done. If still some exception is thrown it is bubbled upwards in
 *   the call chain.
 */
no.en.core.with_retries_STAR_ = (function no$en$core$with_retries_STAR_(n,thunk){
var n__$1 = n;
while(true){
var temp__4423__auto__ = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null))], null);
}catch (e20228){if((e20228 instanceof Error)){
var e = e20228;
if((n__$1 === (0))){
throw e;
} else {
return null;
}
} else {
throw e20228;

}
}})();
if(cljs.core.truth_(temp__4423__auto__)){
var result = temp__4423__auto__;
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1((0)) : result.call(null,(0)));
} else {
var G__20229 = (n__$1 - (1));
n__$1 = G__20229;
continue;
}
break;
}
});
/**
 * Executes body. If an exception is thrown, will retry. At most n retries
 *   are done. If still some exception is thrown it is bubbled upwards in
 *   the call chain.
 */
no.en.core.with_retries = (function no$en$core$with_retries(var_args){
var args__5733__auto__ = [];
var len__5726__auto___20234 = arguments.length;
var i__5727__auto___20235 = (0);
while(true){
if((i__5727__auto___20235 < len__5726__auto___20234)){
args__5733__auto__.push((arguments[i__5727__auto___20235]));

var G__20236 = (i__5727__auto___20235 + (1));
i__5727__auto___20235 = G__20236;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$no$en$core_SLASH_with_DASH_retries_STAR_),cljs.core._conj(cljs.core.List.EMPTY,n),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([body], 0)))))], 0))));
});

no.en.core.with_retries.cljs$lang$maxFixedArity = (3);

no.en.core.with_retries.cljs$lang$applyTo = (function (seq20230){
var G__20231 = cljs.core.first(seq20230);
var seq20230__$1 = cljs.core.next(seq20230);
var G__20232 = cljs.core.first(seq20230__$1);
var seq20230__$2 = cljs.core.next(seq20230__$1);
var G__20233 = cljs.core.first(seq20230__$2);
var seq20230__$3 = cljs.core.next(seq20230__$2);
return no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic(G__20231,G__20232,G__20233,seq20230__$3);
});

no.en.core.with_retries.cljs$lang$macro = true;
no.en.core.editable_QMARK_ = (function no$en$core$editable_QMARK_(coll){
if(!((coll == null))){
if((false) || (coll.cljs$core$IEditableCollection$)){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
}
});
no.en.core.reduce_map = (function no$en$core$reduce_map(f,coll){
if(cljs.core.truth_(no.en.core.editable_QMARK_(coll))){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_BANG_) : f.call(null,cljs.core.assoc_BANG_)),cljs.core.transient$(cljs.core.empty(coll)),coll));
} else {
return cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc) : f.call(null,cljs.core.assoc)),cljs.core.empty(coll),coll);
}
});
/**
 * Maps a function over the keys of an associative collection.
 */
no.en.core.map_keys = (function no$en$core$map_keys(f,coll){
return no.en.core.reduce_map((function (xf){
return (function (m,k,v){
var G__20242 = m;
var G__20243 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
var G__20244 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__20242,G__20243,G__20244) : xf.call(null,G__20242,G__20243,G__20244));
});
}),coll);
});
/**
 * Maps a function over the values of an associative collection.
 */
no.en.core.map_vals = (function no$en$core$map_vals(f,coll){
return no.en.core.reduce_map((function (xf){
return (function (m,k,v){
var G__20248 = m;
var G__20249 = k;
var G__20250 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__20248,G__20249,G__20250) : xf.call(null,G__20248,G__20249,G__20250));
});
}),coll);
});
/**
 * Like merge, but merges maps recursively.
 */
no.en.core.deep_merge = (function no$en$core$deep_merge(var_args){
var args__5733__auto__ = [];
var len__5726__auto___20252 = arguments.length;
var i__5727__auto___20253 = (0);
while(true){
if((i__5727__auto___20253 < len__5726__auto___20252)){
args__5733__auto__.push((arguments[i__5727__auto___20253]));

var G__20254 = (i__5727__auto___20253 + (1));
i__5727__auto___20253 = G__20254;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,no.en.core.deep_merge,maps);
} else {
return cljs.core.last(maps);
}
});

no.en.core.deep_merge.cljs$lang$maxFixedArity = (0);

no.en.core.deep_merge.cljs$lang$applyTo = (function (seq20251){
return no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20251));
});
/**
 * Like merge-with, but merges maps recursively, applying the given fn
 *   only when there's a non-map at a particular level.
 */
no.en.core.deep_merge_with = (function no$en$core$deep_merge_with(var_args){
var args__5733__auto__ = [];
var len__5726__auto___20257 = arguments.length;
var i__5727__auto___20258 = (0);
while(true){
if((i__5727__auto___20258 < len__5726__auto___20257)){
args__5733__auto__.push((arguments[i__5727__auto___20258]));

var G__20259 = (i__5727__auto___20258 + (1));
i__5727__auto___20258 = G__20259;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() { 
var no$en$core$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,no$en$core$m,maps__$1);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,maps__$1);
}
};
var no$en$core$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__20260__i = 0, G__20260__a = new Array(arguments.length -  0);
while (G__20260__i < G__20260__a.length) {G__20260__a[G__20260__i] = arguments[G__20260__i + 0]; ++G__20260__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__20260__a,0);
} 
return no$en$core$m__delegate.call(this,maps__$1);};
no$en$core$m.cljs$lang$maxFixedArity = 0;
no$en$core$m.cljs$lang$applyTo = (function (arglist__20261){
var maps__$1 = cljs.core.seq(arglist__20261);
return no$en$core$m__delegate(maps__$1);
});
no$en$core$m.cljs$core$IFn$_invoke$arity$variadic = no$en$core$m__delegate;
return no$en$core$m;
})()
,maps);
});

no.en.core.deep_merge_with.cljs$lang$maxFixedArity = (1);

no.en.core.deep_merge_with.cljs$lang$applyTo = (function (seq20255){
var G__20256 = cljs.core.first(seq20255);
var seq20255__$1 = cljs.core.next(seq20255);
return no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__20256,seq20255__$1);
});
