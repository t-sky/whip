// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.markdown');
goog.require('cljs.core');
goog.require('clojure.string');
devcards.util.markdown.leading_space_count = (function devcards$util$markdown$leading_space_count(s){
var temp__4425__auto__ = cljs.core.second(cljs.core.re_matches(/^([\s]*).*/,s));
if(cljs.core.truth_(temp__4425__auto__)){
var ws = temp__4425__auto__;
return ws.length;
} else {
return null;
}
});
var conv_class_17762 = Showdown.converter;
var converter_17763 = (new conv_class_17762());
/**
 * render markdown
 */
devcards.util.markdown.markdown_to_html = ((function (conv_class_17762,converter_17763){
return (function devcards$util$markdown$markdown_to_html(markdown_txt){
return converter_17763.makeHtml(markdown_txt);
});})(conv_class_17762,converter_17763))
;
devcards.util.markdown.matches_delim_QMARK_ = (function devcards$util$markdown$matches_delim_QMARK_(line){
return cljs.core.re_matches(/^[\s]*```(\w*).*/,line);
});
if(typeof devcards.util.markdown.block_parser !== 'undefined'){
} else {
devcards.util.markdown.block_parser = (function (){var method_table__5581__auto__ = (function (){var G__17764 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17764) : cljs.core.atom.call(null,G__17764));
})();
var prefer_table__5582__auto__ = (function (){var G__17765 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17765) : cljs.core.atom.call(null,G__17765));
})();
var method_cache__5583__auto__ = (function (){var G__17766 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17766) : cljs.core.atom.call(null,G__17766));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__17767 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17767) : cljs.core.atom.call(null,G__17767));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.util.markdown","block-parser"),((function (method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__){
return (function (p__17768,line){
var map__17769 = p__17768;
var map__17769__$1 = ((((!((map__17769 == null)))?((((map__17769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17769):map__17769);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17769__$1,cljs.core.cst$kw$stage);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.util.markdown.matches_delim_QMARK_(line))?cljs.core.cst$kw$delim:cljs.core.cst$kw$line),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(stage)], null);
});})(method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__))
,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$markdown], null),(function (p__17771,line){
var map__17772 = p__17771;
var map__17772__$1 = ((((!((map__17772 == null)))?((((map__17772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17772):map__17772);
var st = map__17772__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17772__$1,cljs.core.cst$kw$stage);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stage,cljs.core.cst$kw$content], null),cljs.core.conj,clojure.string.trim(line));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$code_DASH_block], null),(function (p__17774,line){
var map__17775 = p__17774;
var map__17775__$1 = ((((!((map__17775 == null)))?((((map__17775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17775):map__17775);
var st = map__17775__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17775__$1,cljs.core.cst$kw$stage);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stage,cljs.core.cst$kw$content], null),cljs.core.conj,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,cljs.core.cst$kw$leading_DASH_spaces.cljs$core$IFn$_invoke$arity$1(stage)));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delim,cljs.core.cst$kw$markdown], null),(function (p__17777,line){
var map__17778 = p__17777;
var map__17778__$1 = ((((!((map__17778 == null)))?((((map__17778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17778):map__17778);
var st = map__17778__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17778__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17778__$1,cljs.core.cst$kw$accum);
var lang = cljs.core.second(devcards.util.markdown.matches_delim_QMARK_(line));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,cljs.core.cst$kw$accum,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$code_DASH_block,cljs.core.cst$kw$lang,((clojure.string.blank_QMARK_(lang))?null:lang),cljs.core.cst$kw$leading_DASH_spaces,devcards.util.markdown.leading_space_count(line),cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delim,cljs.core.cst$kw$code_DASH_block], null),(function (p__17780,line){
var map__17781 = p__17780;
var map__17781__$1 = ((((!((map__17781 == null)))?((((map__17781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17781):map__17781);
var st = map__17781__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17781__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17781__$1,cljs.core.cst$kw$accum);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,cljs.core.cst$kw$accum,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$markdown,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.parse_out_blocks_STAR_ = (function devcards$util$markdown$parse_out_blocks_STAR_(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(devcards.util.markdown.block_parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$markdown,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$accum,cljs.core.PersistentVector.EMPTY], null),clojure.string.split.cljs$core$IFn$_invoke$arity$2(m,"\n"));
});
devcards.util.markdown.parse_out_blocks = (function devcards$util$markdown$parse_out_blocks(m){
var map__17789 = devcards.util.markdown.parse_out_blocks_STAR_(m);
var map__17789__$1 = ((((!((map__17789 == null)))?((((map__17789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17789):map__17789);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17789__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17789__$1,cljs.core.cst$kw$accum);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__17789,map__17789__$1,stage,accum){
return (function (x){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$content], null),((function (map__17789,map__17789__$1,stage,accum){
return (function (p1__17783_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",p1__17783_SHARP_);
});})(map__17789,map__17789__$1,stage,accum))
);
});})(map__17789,map__17789__$1,stage,accum))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__17789,map__17789__$1,stage,accum){
return (function (p__17791){
var map__17792 = p__17791;
var map__17792__$1 = ((((!((map__17792 == null)))?((((map__17792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17792):map__17792);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17792__$1,cljs.core.cst$kw$content);
return cljs.core.not_empty(content);
});})(map__17789,map__17789__$1,stage,accum))
,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)));
});
