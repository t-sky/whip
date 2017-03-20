// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('bidi.bidi');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('schema.core');
goog.require('goog.Uri');
bidi.bidi.url_encode = (function bidi$bidi$url_encode(string){
var G__22847 = string;
var G__22847__$1 = (((G__22847 == null))?null:[cljs.core.str(G__22847)].join(''));
var G__22847__$2 = (((G__22847__$1 == null))?null:encodeURIComponent(G__22847__$1));
var G__22847__$3 = (((G__22847__$2 == null))?null:G__22847__$2.replace("+","%20"));
return G__22847__$3;
});
bidi.bidi.url_decode = (function bidi$bidi$url_decode(string){
var G__22849 = string;
var G__22849__$1 = (((G__22849 == null))?null:[cljs.core.str(G__22849)].join(''));
var G__22849__$2 = (((G__22849__$1 == null))?null:decodeURIComponent(G__22849__$1));
return G__22849__$2;
});
/**
 * Function for creating a UUID of the appropriate type for the platform.
 * Note that this function should _only_ be used in route patterns as, at least
 * in the case of ClojureScript, it does not validate that the input string is
 * actually a valid UUID (this is handled by the route matching logic).
 */
bidi.bidi.uuid = (function bidi$bidi$uuid(s){
return (new cljs.core.UUID(s));
});

/**
 * @interface
 */
bidi.bidi.ParameterEncoding = function(){};

bidi.bidi.encode_parameter = (function bidi$bidi$encode_parameter(_){
if((!((_ == null))) && (!((_.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 == null)))){
return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1(_);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (bidi.bidi.encode_parameter[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto__.call(null,_));
} else {
var m__5324__auto____$1 = (bidi.bidi.encode_parameter["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ParameterEncoding.encode-parameter",_);
}
}
}
});

(bidi.bidi.ParameterEncoding["string"] = true);

(bidi.bidi.encode_parameter["string"] = (function (s){
return s;
}));

(bidi.bidi.ParameterEncoding["number"] = true);

(bidi.bidi.encode_parameter["number"] = (function (s){
return s;
}));

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$ = true;

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (s){
var s__$1 = this;
return [cljs.core.str(s__$1)].join('');
});

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$ = true;

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (k){
var k__$1 = this;
return bidi.bidi.url_encode([cljs.core.str(cljs.core.namespace(k__$1)),cljs.core.str((cljs.core.truth_(cljs.core.namespace(k__$1))?"/":null)),cljs.core.str(cljs.core.name(k__$1))].join(''));
});

/**
 * @interface
 */
bidi.bidi.PatternSegment = function(){};

bidi.bidi.segment_regex_group = (function bidi$bidi$segment_regex_group(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$segment_regex_group$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1(_);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (bidi.bidi.segment_regex_group[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto__.call(null,_));
} else {
var m__5324__auto____$1 = (bidi.bidi.segment_regex_group["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.segment-regex-group",_);
}
}
}
});

bidi.bidi.param_key = (function bidi$bidi$param_key(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$param_key$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$param_key$arity$1(_);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (bidi.bidi.param_key[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto__.call(null,_));
} else {
var m__5324__auto____$1 = (bidi.bidi.param_key["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.param-key",_);
}
}
}
});

bidi.bidi.transform_param = (function bidi$bidi$transform_param(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$transform_param$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$transform_param$arity$1(_);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (bidi.bidi.transform_param[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto__.call(null,_));
} else {
var m__5324__auto____$1 = (bidi.bidi.transform_param["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.transform-param",_);
}
}
}
});

bidi.bidi.unmatch_segment = (function bidi$bidi$unmatch_segment(_,params){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$unmatch_segment$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2(_,params);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (bidi.bidi.unmatch_segment[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(_,params) : m__5324__auto__.call(null,_,params));
} else {
var m__5324__auto____$1 = (bidi.bidi.unmatch_segment["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(_,params) : m__5324__auto____$1.call(null,_,params));
} else {
throw cljs.core.missing_protocol("PatternSegment.unmatch-segment",_);
}
}
}
});

bidi.bidi.matches_QMARK_ = (function bidi$bidi$matches_QMARK_(_,s){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2(_,s);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (bidi.bidi.matches_QMARK_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5324__auto__.call(null,_,s));
} else {
var m__5324__auto____$1 = (bidi.bidi.matches_QMARK_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(_,s) : m__5324__auto____$1.call(null,_,s));
} else {
throw cljs.core.missing_protocol("PatternSegment.matches?",_);
}
}
}
});

(bidi.bidi.PatternSegment["string"] = true);

(bidi.bidi.segment_regex_group["string"] = (function (this$){
return this$;
}));

(bidi.bidi.param_key["string"] = (function (_){
return null;
}));

(bidi.bidi.transform_param["string"] = (function (_){
return cljs.core.identity;
}));

(bidi.bidi.unmatch_segment["string"] = (function (this$,_){
return this$;
}));

RegExp.prototype.bidi$bidi$PatternSegment$ = true;

RegExp.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1["source"]);
});

RegExp.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (_){
var ___$1 = this;
return null;
});

RegExp.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

RegExp.prototype.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.re_matches(this$__$1,[cljs.core.str(s)].join(''));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$ = true;

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.segment_regex_group(cljs.core.first(this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
var k = cljs.core.second(this$__$1);
if((k instanceof cljs.core.Keyword)){
return k;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("If a PatternSegment is represented by a vector, the second\n                               element must be the keyword associated with the pattern: "),cljs.core.str(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.transform_param(cljs.core.first(this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var k = cljs.core.second(this$__$1);
if(!((k instanceof cljs.core.Keyword))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("If a PatternSegment is represented by a vector, the second element\n                               must be the key associated with the pattern: "),cljs.core.str(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
if(cljs.core.truth_(temp__4423__auto__)){
var v = temp__4423__auto__;
if(cljs.core.truth_(bidi.bidi.matches_QMARK_(cljs.core.first(this$__$1),v))){
return bidi.bidi.encode_parameter(v);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Parameter value of "),cljs.core.str(v),cljs.core.str(" (key "),cljs.core.str(k),cljs.core.str(") "),cljs.core.str("is not compatible with the route pattern "),cljs.core.str(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No parameter found in params for key "),cljs.core.str(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$ = true;

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (_){
var ___$1 = this;
return "[A-Za-z0-9\\-\\_\\.]+";
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var temp__4423__auto__ = (this$__$1.cljs$core$IFn$_invoke$arity$1 ? this$__$1.cljs$core$IFn$_invoke$arity$1(params) : this$__$1.call(null,params));
if(cljs.core.truth_(temp__4423__auto__)){
var v = temp__4423__auto__;
return bidi.bidi.encode_parameter(v);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot form URI without a value given for "),cljs.core.str(this$__$1),cljs.core.str(" parameter")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

(bidi.bidi.PatternSegment["function"] = true);

(bidi.bidi.segment_regex_group["function"] = (function (this$){
var pred__22853 = cljs.core._EQ_;
var expr__22854 = this$;
if(cljs.core.truth_((pred__22853.cljs$core$IFn$_invoke$arity$2 ? pred__22853.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__22854) : pred__22853.call(null,cljs.core.keyword,expr__22854)))){
return "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?";
} else {
if(cljs.core.truth_((pred__22853.cljs$core$IFn$_invoke$arity$2 ? pred__22853.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__22854) : pred__22853.call(null,cljs.core.long$,expr__22854)))){
return "-?\\d{1,19}";
} else {
if(cljs.core.truth_((pred__22853.cljs$core$IFn$_invoke$arity$2 ? pred__22853.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__22854) : pred__22853.call(null,bidi.bidi.uuid,expr__22854)))){
return "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}";
} else {
if(cljs.core.truth_((pred__22853.cljs$core$IFn$_invoke$arity$2 ? pred__22853.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$otherwise,expr__22854) : pred__22853.call(null,cljs.core.cst$kw$otherwise,expr__22854)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Unidentified function qualifier to pattern segment: "),cljs.core.str(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22854)].join('')));
}
}
}
}
}));

(bidi.bidi.transform_param["function"] = (function (this$){
var pred__22856 = cljs.core._EQ_;
var expr__22857 = this$;
if(cljs.core.truth_((pred__22856.cljs$core$IFn$_invoke$arity$2 ? pred__22856.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__22857) : pred__22856.call(null,cljs.core.keyword,expr__22857)))){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,bidi.bidi.url_decode);
} else {
if(cljs.core.truth_((pred__22856.cljs$core$IFn$_invoke$arity$2 ? pred__22856.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__22857) : pred__22856.call(null,cljs.core.long$,expr__22857)))){
return ((function (pred__22856,expr__22857){
return (function (p1__22851_SHARP_){
return Number(p1__22851_SHARP_);
});
;})(pred__22856,expr__22857))
} else {
if(cljs.core.truth_((pred__22856.cljs$core$IFn$_invoke$arity$2 ? pred__22856.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__22857) : pred__22856.call(null,bidi.bidi.uuid,expr__22857)))){
return bidi.bidi.uuid;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Unrecognized function "),cljs.core.str(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}));

(bidi.bidi.matches_QMARK_["function"] = (function (this$,s){
var pred__22859 = cljs.core._EQ_;
var expr__22860 = this$;
if(cljs.core.truth_((pred__22859.cljs$core$IFn$_invoke$arity$2 ? pred__22859.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__22860) : pred__22859.call(null,cljs.core.keyword,expr__22860)))){
return (s instanceof cljs.core.Keyword);
} else {
if(cljs.core.truth_((pred__22859.cljs$core$IFn$_invoke$arity$2 ? pred__22859.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__22860) : pred__22859.call(null,cljs.core.long$,expr__22860)))){
return cljs.core.not(isNaN(s));
} else {
if(cljs.core.truth_((pred__22859.cljs$core$IFn$_invoke$arity$2 ? pred__22859.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__22860) : pred__22859.call(null,bidi.bidi.uuid,expr__22860)))){
return (s instanceof cljs.core.UUID);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22860)].join('')));
}
}
}
}));

/**
 * @interface
 */
bidi.bidi.Pattern = function(){};

bidi.bidi.match_pattern = (function bidi$bidi$match_pattern(_,path){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$match_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$match_pattern$arity$2(_,path);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (bidi.bidi.match_pattern[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(_,path) : m__5324__auto__.call(null,_,path));
} else {
var m__5324__auto____$1 = (bidi.bidi.match_pattern["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(_,path) : m__5324__auto____$1.call(null,_,path));
} else {
throw cljs.core.missing_protocol("Pattern.match-pattern",_);
}
}
}
});

bidi.bidi.unmatch_pattern = (function bidi$bidi$unmatch_pattern(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$unmatch_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$unmatch_pattern$arity$2(_,m);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (bidi.bidi.unmatch_pattern[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__5324__auto__.call(null,_,m));
} else {
var m__5324__auto____$1 = (bidi.bidi.unmatch_pattern["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(_,m) : m__5324__auto____$1.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Pattern.unmatch-pattern",_);
}
}
}
});


/**
 * @interface
 */
bidi.bidi.Matched = function(){};

bidi.bidi.resolve_handler = (function bidi$bidi$resolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$resolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$resolve_handler$arity$2(_,m);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (bidi.bidi.resolve_handler[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__5324__auto__.call(null,_,m));
} else {
var m__5324__auto____$1 = (bidi.bidi.resolve_handler["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(_,m) : m__5324__auto____$1.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Matched.resolve-handler",_);
}
}
}
});

bidi.bidi.unresolve_handler = (function bidi$bidi$unresolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$unresolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$unresolve_handler$arity$2(_,m);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (bidi.bidi.unresolve_handler[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__5324__auto__.call(null,_,m));
} else {
var m__5324__auto____$1 = (bidi.bidi.unresolve_handler["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(_,m) : m__5324__auto____$1.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Matched.unresolve-handler",_);
}
}
}
});

bidi.bidi.just_path = (function bidi$bidi$just_path(path){
return (new goog.Uri(path)).getPath();
});
/**
 * A pair contains a pattern to match (either fully or partially) and an
 *   expression yielding a handler. The second parameter is a map
 *   containing state, including the remaining path.
 */
bidi.bidi.match_pair = (function bidi$bidi$match_pair(p__22862,orig_env){
var vec__22864 = p__22862;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22864,(0),null);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22864,(1),null);
var env = cljs.core.update.cljs$core$IFn$_invoke$arity$3(orig_env,cljs.core.cst$kw$remainder,bidi.bidi.just_path);
var temp__4425__auto__ = bidi.bidi.match_pattern(pattern,env);
if(cljs.core.truth_(temp__4425__auto__)){
var match_result = temp__4425__auto__;
return bidi.bidi.resolve_handler(matched,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([env,match_result], 0)));
} else {
return null;
}
});
/**
 * Match the beginning of the :remainder value in m. If matched, update
 *   the :remainder value in m with the path that remains after matching.
 */
bidi.bidi.match_beginning = (function bidi$bidi$match_beginning(regex_pattern,env){
var temp__4425__auto__ = cljs.core.last(cljs.core.re_matches(cljs.core.re_pattern([cljs.core.str(regex_pattern),cljs.core.str("(.*)")].join('')),cljs.core.cst$kw$remainder.cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_(temp__4425__auto__)){
var path = temp__4425__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$remainder,path);
} else {
return null;
}
});
bidi.bidi.succeed = (function bidi$bidi$succeed(handler,m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$remainder.cljs$core$IFn$_invoke$arity$1(m),"")){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$remainder),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,handler], null)], 0));
} else {
return null;
}
});
(bidi.bidi.Pattern["string"] = true);

(bidi.bidi.match_pattern["string"] = (function (this$,env){
return bidi.bidi.match_beginning([cljs.core.str("("),cljs.core.str(bidi.bidi.segment_regex_group(this$)),cljs.core.str(")")].join(''),env);
}));

(bidi.bidi.unmatch_pattern["string"] = (function (this$,_){
return this$;
}));

RegExp.prototype.bidi$bidi$Pattern$ = true;

RegExp.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
return bidi.bidi.match_beginning([cljs.core.str("("),cljs.core.str(bidi.bidi.segment_regex_group(this$__$1)),cljs.core.str(")")].join(''),env);
});

RegExp.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
var p = this$__$1.pattern();
return bidi.bidi.unmatch_pattern(clojure.string.replace(p,/\\\\/,""),m);
});

(bidi.bidi.Pattern["boolean"] = true);

(bidi.bidi.match_pattern["boolean"] = (function (this$,env){
if(cljs.core.truth_(this$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$remainder,"");
} else {
return null;
}
}));

(bidi.bidi.unmatch_pattern["boolean"] = (function (this$,_){
if(cljs.core.truth_(this$)){
return "";
} else {
return null;
}
}));

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$ = true;

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
var temp__4425__auto__ = (function (){var _PERCENT_ = this$__$1;
var _PERCENT___$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.segment_regex_group,_PERCENT_);
var _PERCENT___$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_PERCENT_,_PERCENT___$1,this$__$1){
return (function (x){
return [cljs.core.str("("),cljs.core.str(x),cljs.core.str(")")].join('');
});})(_PERCENT_,_PERCENT___$1,this$__$1))
,_PERCENT___$1);
var _PERCENT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,_PERCENT___$2);
var _PERCENT___$4 = [cljs.core.str(_PERCENT___$3),cljs.core.str("(.*)")].join('');
var _PERCENT___$5 = cljs.core.re_pattern(_PERCENT___$4);
var _PERCENT___$6 = cljs.core.re_matches(_PERCENT___$5,cljs.core.cst$kw$remainder.cljs$core$IFn$_invoke$arity$1(env));
var _PERCENT___$7 = cljs.core.next(_PERCENT___$6);
return _PERCENT___$7;
})();
if(temp__4425__auto__){
var groups = temp__4425__auto__;
var params = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.param_key,this$__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.transform_param,this$__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.butlast(groups))))));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remainder], null),cljs.core.last(groups)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_params], null),cljs.core.merge,params);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__22865_SHARP_){
return bidi.bidi.unmatch_segment(p1__22865_SHARP_,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(m));
});})(this$__$1))
,this$__$1));
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$ = true;

cljs.core.Keyword.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(env))){
return env;
} else {
return null;
}
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$ = true;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_(((function (this$__$1){
return (function (p__22866){
var vec__22867 = p__22866;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867,(1),null);
if((cljs.core.fn_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
var G__22868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__22868) : v.call(null,G__22868));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k));

}
});})(this$__$1))
,cljs.core.seq(this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$ = true;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_(((function (this$__$1){
return (function (p__22869){
var vec__22870 = p__22869;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22870,(1),null);
if((cljs.core.fn_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
var G__22871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__22871) : v.call(null,G__22871));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k));

}
});})(this$__$1))
,cljs.core.seq(this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});
bidi.bidi.unmatch_pair = (function bidi$bidi$unmatch_pair(v,m){
var temp__4425__auto__ = bidi.bidi.unresolve_handler(cljs.core.second(v),m);
if(cljs.core.truth_(temp__4425__auto__)){
var r = temp__4425__auto__;
return [cljs.core.str(bidi.bidi.unmatch_pattern(cljs.core.first(v),m)),cljs.core.str(r)].join('');
} else {
return null;
}
});
(bidi.bidi.Matched["null"] = true);

(bidi.bidi.resolve_handler["null"] = (function (this$,m){
return null;
}));

(bidi.bidi.unresolve_handler["null"] = (function (this$,m){
return null;
}));

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$ = true;

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__22872_SHARP_){
return bidi.bidi.match_pair(p1__22872_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__22873_SHARP_){
return bidi.bidi.unmatch_pair(p1__22873_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$ = true;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__22876_SHARP_){
return bidi.bidi.match_pair(p1__22876_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__22877_SHARP_){
return bidi.bidi.unmatch_pair(p1__22877_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$ = true;

cljs.core.List.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__22874_SHARP_){
return bidi.bidi.match_pair(p1__22874_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__22875_SHARP_){
return bidi.bidi.unmatch_pair(p1__22875_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

(bidi.bidi.Matched["string"] = true);

(bidi.bidi.unresolve_handler["string"] = (function (_,___$1){
return null;
}));

cljs.core.Symbol.prototype.bidi$bidi$Matched$ = true;

cljs.core.Symbol.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
});

cljs.core.Symbol.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});

(bidi.bidi.Matched["function"] = true);

(bidi.bidi.resolve_handler["function"] = (function (this$,m){
return bidi.bidi.succeed(this$,m);
}));

(bidi.bidi.unresolve_handler["function"] = (function (this$,m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
}));

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$ = true;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__22878_SHARP_){
return bidi.bidi.match_pair(p1__22878_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__22879_SHARP_){
return bidi.bidi.unmatch_pair(p1__22879_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$ = true;

cljs.core.LazySeq.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__22880_SHARP_){
return bidi.bidi.match_pair(p1__22880_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__22881_SHARP_){
return bidi.bidi.unmatch_pair(p1__22881_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$ = true;

cljs.core.Keyword.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});
bidi.bidi.match_route_STAR_ = (function bidi$bidi$match_route_STAR_(route,path,options){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bidi.bidi.match_pair(route,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$remainder,path,cljs.core.array_seq([cljs.core.cst$kw$route,route], 0))),cljs.core.cst$kw$route);
});
/**
 * Given a route definition data structure and a path, return the
 *   handler, if any, that matches the path.
 */
bidi.bidi.match_route = (function bidi$bidi$match_route(var_args){
var args__5733__auto__ = [];
var len__5726__auto___22888 = arguments.length;
var i__5727__auto___22889 = (0);
while(true){
if((i__5727__auto___22889 < len__5726__auto___22888)){
args__5733__auto__.push((arguments[i__5727__auto___22889]));

var G__22890 = (i__5727__auto___22889 + (1));
i__5727__auto___22889 = G__22890;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic = (function (route,path,p__22885){
var map__22886 = p__22885;
var map__22886__$1 = ((((!((map__22886 == null)))?((((map__22886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22886):map__22886);
var options = map__22886__$1;
return bidi.bidi.match_route_STAR_(route,path,options);
});

bidi.bidi.match_route.cljs$lang$maxFixedArity = (2);

bidi.bidi.match_route.cljs$lang$applyTo = (function (seq22882){
var G__22883 = cljs.core.first(seq22882);
var seq22882__$1 = cljs.core.next(seq22882);
var G__22884 = cljs.core.first(seq22882__$1);
var seq22882__$2 = cljs.core.next(seq22882__$1);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic(G__22883,G__22884,seq22882__$2);
});
/**
 * Given a route definition data structure, a handler and an option map, return a
 *   path that would route to the handler. The map must contain the values to any
 *   parameters required to create the path, and extra values are silently ignored.
 */
bidi.bidi.path_for = (function bidi$bidi$path_for(var_args){
var args__5733__auto__ = [];
var len__5726__auto___22897 = arguments.length;
var i__5727__auto___22898 = (0);
while(true){
if((i__5727__auto___22898 < len__5726__auto___22897)){
args__5733__auto__.push((arguments[i__5727__auto___22898]));

var G__22899 = (i__5727__auto___22898 + (1));
i__5727__auto___22898 = G__22899;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,handler,p__22894){
var map__22895 = p__22894;
var map__22895__$1 = ((((!((map__22895 == null)))?((((map__22895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22895):map__22895);
var params = map__22895__$1;
if((handler == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot form URI from a nil handler",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return bidi.bidi.unmatch_pair(route,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$params,params], null));
});

bidi.bidi.path_for.cljs$lang$maxFixedArity = (2);

bidi.bidi.path_for.cljs$lang$applyTo = (function (seq22891){
var G__22892 = cljs.core.first(seq22891);
var seq22891__$1 = cljs.core.next(seq22891);
var G__22893 = cljs.core.first(seq22891__$1);
var seq22891__$2 = cljs.core.next(seq22891__$1);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic(G__22892,G__22893,seq22891__$2);
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
bidi.bidi.Route = (function (handler,path,__meta,__extmap,__hash){
this.handler = handler;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k22901,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__22903 = (((k22901 instanceof cljs.core.Keyword))?k22901.fqn:null);
switch (G__22903) {
case "handler":
return self__.handler;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22901,else__5285__auto__);

}
});

bidi.bidi.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#bidi.bidi.Route{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IIterable$ = true;

bidi.bidi.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22900){
var self__ = this;
var G__22900__$1 = this;
return (new cljs.core.RecordIter((0),G__22900__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handler,cljs.core.cst$kw$path], null),cljs.core._iterator(self__.__extmap)));
});

bidi.bidi.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
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

bidi.bidi.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
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

bidi.bidi.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$handler,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

bidi.bidi.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__22900){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__22904 = cljs.core.keyword_identical_QMARK_;
var expr__22905 = k__5290__auto__;
if(cljs.core.truth_((pred__22904.cljs$core$IFn$_invoke$arity$2 ? pred__22904.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$handler,expr__22905) : pred__22904.call(null,cljs.core.cst$kw$handler,expr__22905)))){
return (new bidi.bidi.Route(G__22900,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22904.cljs$core$IFn$_invoke$arity$2 ? pred__22904.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path,expr__22905) : pred__22904.call(null,cljs.core.cst$kw$path,expr__22905)))){
return (new bidi.bidi.Route(self__.handler,G__22900,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__22900),null));
}
}
});

bidi.bidi.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__22900){
var self__ = this;
var this__5281__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,G__22900,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

bidi.bidi.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$handler,cljs.core.cst$sym$path], null);
});

bidi.bidi.Route.cljs$lang$type = true;

bidi.bidi.Route.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/Route");
});

bidi.bidi.Route.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"bidi.bidi/Route");
});

bidi.bidi.__GT_Route = (function bidi$bidi$__GT_Route(handler,path){
return (new bidi.bidi.Route(handler,path,null,null,null));
});

bidi.bidi.map__GT_Route = (function bidi$bidi$map__GT_Route(G__22902){
return (new bidi.bidi.Route(cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__22902),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__22902),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22902,cljs.core.cst$kw$handler,cljs.core.array_seq([cljs.core.cst$kw$path], 0)),null));
});


/**
 * @interface
 */
bidi.bidi.RouteSeq = function(){};

/**
 * Return a sequence of leaves
 */
bidi.bidi.gather = (function bidi$bidi$gather(_,context){
if((!((_ == null))) && (!((_.bidi$bidi$RouteSeq$gather$arity$2 == null)))){
return _.bidi$bidi$RouteSeq$gather$arity$2(_,context);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (bidi.bidi.gather[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(_,context) : m__5324__auto__.call(null,_,context));
} else {
var m__5324__auto____$1 = (bidi.bidi.gather["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(_,context) : m__5324__auto____$1.call(null,_,context));
} else {
throw cljs.core.missing_protocol("RouteSeq.gather",_);
}
}
}
});

bidi.bidi.route_seq = (function bidi$bidi$route_seq(var_args){
var args22908 = [];
var len__5726__auto___22913 = arguments.length;
var i__5727__auto___22914 = (0);
while(true){
if((i__5727__auto___22914 < len__5726__auto___22913)){
args22908.push((arguments[i__5727__auto___22914]));

var G__22915 = (i__5727__auto___22914 + (1));
i__5727__auto___22914 = G__22915;
continue;
} else {
}
break;
}

var G__22910 = args22908.length;
switch (G__22910) {
case 2:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22908.length)].join('')));

}
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2 = (function (p__22911,ctx){
var vec__22912 = p__22911;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22912,(0),null);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22912,(1),null);
return bidi.bidi.gather(matched,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),pattern));
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1 = (function (route){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
});

bidi.bidi.route_seq.cljs$lang$maxFixedArity = 2;
cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$ = true;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__22917_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__22917_SHARP_,context);
});})(this$__$1))
,cljs.core.array_seq([this$__$1], 0));
});

cljs.core.List.prototype.bidi$bidi$RouteSeq$ = true;

cljs.core.List.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__22918_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__22918_SHARP_,context);
});})(this$__$1))
,cljs.core.array_seq([this$__$1], 0));
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$ = true;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__22919_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__22919_SHARP_,context);
});})(this$__$1))
,cljs.core.array_seq([this$__$1], 0));
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$ = true;

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__22920_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__22920_SHARP_,context);
});})(this$__$1))
,cljs.core.array_seq([this$__$1], 0));
});

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$ = true;

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__22921_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__22921_SHARP_,context);
});})(this$__$1))
,cljs.core.array_seq([this$__$1], 0));
});

(bidi.bidi.RouteSeq["_"] = true);

(bidi.bidi.gather["_"] = (function (this$,context){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$handler,this$))], null);
}));

/**
 * @interface
 */
bidi.bidi.RouteProvider = function(){};

/**
 * Provide a bidi route structure. Returns a vector pair,
 *   the first element is the pattern, the second element is the matched
 *   route or routes.
 */
bidi.bidi.routes = (function bidi$bidi$routes(_){
if((!((_ == null))) && (!((_.bidi$bidi$RouteProvider$routes$arity$1 == null)))){
return _.bidi$bidi$RouteProvider$routes$arity$1(_);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (bidi.bidi.routes[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto__.call(null,_));
} else {
var m__5324__auto____$1 = (bidi.bidi.routes["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("RouteProvider.routes",_);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {bidi.bidi.Pattern}
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
bidi.bidi.Alternates = (function (alts,__meta,__extmap,__hash){
this.alts = alts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k22924,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__22926 = (((k22924 instanceof cljs.core.Keyword))?k22924.fqn:null);
switch (G__22926) {
case "alts":
return self__.alts;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22924,else__5285__auto__);

}
});

bidi.bidi.Alternates.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#bidi.bidi.Alternates{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$alts,self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IIterable$ = true;

bidi.bidi.Alternates.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22923){
var self__ = this;
var G__22923__$1 = this;
return (new cljs.core.RecordIter((0),G__22923__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$alts], null),cljs.core._iterator(self__.__extmap)));
});

bidi.bidi.Alternates.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Alternates.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
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

bidi.bidi.Alternates.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
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

bidi.bidi.Alternates.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alts,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__22923){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__22927 = cljs.core.keyword_identical_QMARK_;
var expr__22928 = k__5290__auto__;
if(cljs.core.truth_((pred__22927.cljs$core$IFn$_invoke$arity$2 ? pred__22927.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alts,expr__22928) : pred__22927.call(null,cljs.core.cst$kw$alts,expr__22928)))){
return (new bidi.bidi.Alternates(G__22923,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__22923),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$alts,self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__22923){
var self__ = this;
var this__5281__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,G__22923,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$ = true;

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__22922_SHARP_){
return bidi.bidi.match_pattern(p1__22922_SHARP_,m);
});})(this$__$1))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,self__.alts));
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(self__.alts),m);
});

bidi.bidi.Alternates.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$alts], null);
});

bidi.bidi.Alternates.cljs$lang$type = true;

bidi.bidi.Alternates.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/Alternates");
});

bidi.bidi.Alternates.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"bidi.bidi/Alternates");
});

bidi.bidi.__GT_Alternates = (function bidi$bidi$__GT_Alternates(alts){
return (new bidi.bidi.Alternates(alts,null,null,null));
});

bidi.bidi.map__GT_Alternates = (function bidi$bidi$map__GT_Alternates(G__22925){
return (new bidi.bidi.Alternates(cljs.core.cst$kw$alts.cljs$core$IFn$_invoke$arity$1(G__22925),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22925,cljs.core.cst$kw$alts),null));
});

bidi.bidi.alts = (function bidi$bidi$alts(var_args){
var args__5733__auto__ = [];
var len__5726__auto___22932 = arguments.length;
var i__5727__auto___22933 = (0);
while(true){
if((i__5727__auto___22933 < len__5726__auto___22932)){
args__5733__auto__.push((arguments[i__5727__auto___22933]));

var G__22934 = (i__5727__auto___22933 + (1));
i__5727__auto___22933 = G__22934;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic = (function (alts){
return bidi.bidi.__GT_Alternates(alts);
});

bidi.bidi.alts.cljs$lang$maxFixedArity = (0);

bidi.bidi.alts.cljs$lang$applyTo = (function (seq22931){
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22931));
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
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.TaggedMatch = (function (matched,tag,__meta,__extmap,__hash){
this.matched = matched;
this.tag = tag;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k22936,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__22938 = (((k22936 instanceof cljs.core.Keyword))?k22936.fqn:null);
switch (G__22938) {
case "matched":
return self__.matched;

break;
case "tag":
return self__.tag;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22936,else__5285__auto__);

}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#bidi.bidi.TaggedMatch{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$matched,self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tag,self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$ = true;

bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22935){
var self__ = this;
var G__22935__$1 = this;
return (new cljs.core.RecordIter((0),G__22935__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$matched,cljs.core.cst$kw$tag], null),cljs.core._iterator(self__.__extmap)));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$ = true;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler(self__.matched,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$tag,self__.tag));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if((cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.tag,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
} else {
return bidi.bidi.unresolve_handler(self__.matched,m);
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
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

bidi.bidi.TaggedMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
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

bidi.bidi.TaggedMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$matched,null,cljs.core.cst$kw$tag,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__22935){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__22939 = cljs.core.keyword_identical_QMARK_;
var expr__22940 = k__5290__auto__;
if(cljs.core.truth_((pred__22939.cljs$core$IFn$_invoke$arity$2 ? pred__22939.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$matched,expr__22940) : pred__22939.call(null,cljs.core.cst$kw$matched,expr__22940)))){
return (new bidi.bidi.TaggedMatch(G__22935,self__.tag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22939.cljs$core$IFn$_invoke$arity$2 ? pred__22939.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag,expr__22940) : pred__22939.call(null,cljs.core.cst$kw$tag,expr__22940)))){
return (new bidi.bidi.TaggedMatch(self__.matched,G__22935,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__22935),null));
}
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$matched,self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tag,self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__22935){
var self__ = this;
var this__5281__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,G__22935,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

bidi.bidi.TaggedMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$matched,cljs.core.cst$sym$tag], null);
});

bidi.bidi.TaggedMatch.cljs$lang$type = true;

bidi.bidi.TaggedMatch.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/TaggedMatch");
});

bidi.bidi.TaggedMatch.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"bidi.bidi/TaggedMatch");
});

bidi.bidi.__GT_TaggedMatch = (function bidi$bidi$__GT_TaggedMatch(matched,tag){
return (new bidi.bidi.TaggedMatch(matched,tag,null,null,null));
});

bidi.bidi.map__GT_TaggedMatch = (function bidi$bidi$map__GT_TaggedMatch(G__22937){
return (new bidi.bidi.TaggedMatch(cljs.core.cst$kw$matched.cljs$core$IFn$_invoke$arity$1(G__22937),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(G__22937),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22937,cljs.core.cst$kw$matched,cljs.core.array_seq([cljs.core.cst$kw$tag], 0)),null));
});

bidi.bidi.tag = (function bidi$bidi$tag(matched,tag__$1){
return bidi.bidi.__GT_TaggedMatch(matched,tag__$1);
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
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.IdentifiableHandler = (function (id,handler,__meta,__extmap,__hash){
this.id = id;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k22944,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__22946 = (((k22944 instanceof cljs.core.Keyword))?k22944.fqn:null);
switch (G__22946) {
case "id":
return self__.id;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22944,else__5285__auto__);

}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#bidi.bidi.IdentifiableHandler{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id,self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IIterable$ = true;

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22943){
var self__ = this;
var G__22943__$1 = this;
return (new cljs.core.RecordIter((0),G__22943__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$handler], null),cljs.core._iterator(self__.__extmap)));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$ = true;

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler(self__.handler,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$id,self__.id));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.id)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.id,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return bidi.bidi.unresolve_handler(self__.handler,m);
}
} else {
return null;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
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

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
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

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,null,cljs.core.cst$kw$handler,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__22943){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__22947 = cljs.core.keyword_identical_QMARK_;
var expr__22948 = k__5290__auto__;
if(cljs.core.truth_((pred__22947.cljs$core$IFn$_invoke$arity$2 ? pred__22947.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,expr__22948) : pred__22947.call(null,cljs.core.cst$kw$id,expr__22948)))){
return (new bidi.bidi.IdentifiableHandler(G__22943,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22947.cljs$core$IFn$_invoke$arity$2 ? pred__22947.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$handler,expr__22948) : pred__22947.call(null,cljs.core.cst$kw$handler,expr__22948)))){
return (new bidi.bidi.IdentifiableHandler(self__.id,G__22943,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__22943),null));
}
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id,self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__22943){
var self__ = this;
var this__5281__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,G__22943,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

bidi.bidi.IdentifiableHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$id,cljs.core.cst$sym$handler], null);
});

bidi.bidi.IdentifiableHandler.cljs$lang$type = true;

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/IdentifiableHandler");
});

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"bidi.bidi/IdentifiableHandler");
});

bidi.bidi.__GT_IdentifiableHandler = (function bidi$bidi$__GT_IdentifiableHandler(id,handler){
return (new bidi.bidi.IdentifiableHandler(id,handler,null,null,null));
});

bidi.bidi.map__GT_IdentifiableHandler = (function bidi$bidi$map__GT_IdentifiableHandler(G__22945){
return (new bidi.bidi.IdentifiableHandler(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__22945),cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__22945),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22945,cljs.core.cst$kw$id,cljs.core.array_seq([cljs.core.cst$kw$handler], 0)),null));
});

bidi.bidi.handler = (function bidi$bidi$handler(var_args){
var args22951 = [];
var len__5726__auto___22954 = arguments.length;
var i__5727__auto___22955 = (0);
while(true){
if((i__5727__auto___22955 < len__5726__auto___22954)){
args22951.push((arguments[i__5727__auto___22955]));

var G__22956 = (i__5727__auto___22955 + (1));
i__5727__auto___22955 = G__22956;
continue;
} else {
}
break;
}

var G__22953 = args22951.length;
switch (G__22953) {
case 2:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22951.length)].join('')));

}
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2 = (function (k,handler){
return bidi.bidi.__GT_IdentifiableHandler(k,handler);
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return bidi.bidi.__GT_IdentifiableHandler(null,handler);
});

bidi.bidi.handler.cljs$lang$maxFixedArity = 2;

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
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.RoutesContext = (function (routes,context,__meta,__extmap,__hash){
this.routes = routes;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k22959,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__22961 = (((k22959 instanceof cljs.core.Keyword))?k22959.fqn:null);
switch (G__22961) {
case "routes":
return self__.routes;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22959,else__5285__auto__);

}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$ = true;

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (_,context__$1){
var self__ = this;
var ___$1 = this;
return bidi.bidi.gather(self__.routes,context__$1);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#bidi.bidi.RoutesContext{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes,self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$context,self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IIterable$ = true;

bidi.bidi.RoutesContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22958){
var self__ = this;
var G__22958__$1 = this;
return (new cljs.core.RecordIter((0),G__22958__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$routes,cljs.core.cst$kw$context], null),cljs.core._iterator(self__.__extmap)));
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$ = true;

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var temp__4425__auto__ = bidi.bidi.resolve_handler(self__.routes,m);
if(cljs.core.truth_(temp__4425__auto__)){
var m__$1 = temp__4425__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.context,m__$1], 0));
} else {
return null;
}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return bidi.bidi.unresolve_handler(self__.routes,m);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
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

bidi.bidi.RoutesContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
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

bidi.bidi.RoutesContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$routes,null,cljs.core.cst$kw$context,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__22958){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__22962 = cljs.core.keyword_identical_QMARK_;
var expr__22963 = k__5290__auto__;
if(cljs.core.truth_((pred__22962.cljs$core$IFn$_invoke$arity$2 ? pred__22962.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$routes,expr__22963) : pred__22962.call(null,cljs.core.cst$kw$routes,expr__22963)))){
return (new bidi.bidi.RoutesContext(G__22958,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22962.cljs$core$IFn$_invoke$arity$2 ? pred__22962.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context,expr__22963) : pred__22962.call(null,cljs.core.cst$kw$context,expr__22963)))){
return (new bidi.bidi.RoutesContext(self__.routes,G__22958,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__22958),null));
}
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes,self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$context,self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__22958){
var self__ = this;
var this__5281__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,G__22958,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

bidi.bidi.RoutesContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$routes,cljs.core.cst$sym$context], null);
});

bidi.bidi.RoutesContext.cljs$lang$type = true;

bidi.bidi.RoutesContext.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/RoutesContext");
});

bidi.bidi.RoutesContext.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"bidi.bidi/RoutesContext");
});

bidi.bidi.__GT_RoutesContext = (function bidi$bidi$__GT_RoutesContext(routes,context){
return (new bidi.bidi.RoutesContext(routes,context,null,null,null));
});

bidi.bidi.map__GT_RoutesContext = (function bidi$bidi$map__GT_RoutesContext(G__22960){
return (new bidi.bidi.RoutesContext(cljs.core.cst$kw$routes.cljs$core$IFn$_invoke$arity$1(G__22960),cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(G__22960),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22960,cljs.core.cst$kw$routes,cljs.core.array_seq([cljs.core.cst$kw$context], 0)),null));
});

/**
 * Wrap a Matched such that a successful match will merge the given
 *   context with the match-context. The merge is such that where there
 *   is a conflict, the inner sub-tree overrides the outer container.
 */
bidi.bidi.routes_context = (function bidi$bidi$routes_context(routes,context){
return bidi.bidi.__GT_RoutesContext(routes,context);
});
bidi.bidi.compile_route = (function bidi$bidi$compile_route(route){
return route;
});
