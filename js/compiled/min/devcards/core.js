// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__4668__auto__ = (function (){var and__4656__auto__ = typeof Symbol !== 'undefined';
if(and__4656__auto__){
var and__4656__auto____$1 = cljs.core.fn_QMARK_(Symbol);
if(and__4656__auto____$1){
var and__4656__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__4656__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__4656__auto____$2;
}
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__17796_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__17796_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(){
devcards.system.start_ui(devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_();
});
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__4656__auto__ = cljs.core.map_QMARK_(c);
if(and__4656__auto__){
var map__17803 = c;
var map__17803__$1 = ((((!((map__17803 == null)))?((((map__17803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17803):map__17803);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17803__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17803__$1,cljs.core.cst$kw$func);
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return and__4656__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$card_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}


return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_card,c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str(cljs.core.hash(raw_html_str))].join(''),cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,raw_html_str], null)], null)));
});
devcards.core.get_props;

devcards.core.ref__GT_node;
devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4425__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_hljs();
if(cljs.core.truth_(temp__4425__auto____$1)){
var hljs = temp__4425__auto____$1;
var temp__4425__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4425__auto____$2)){
var highlight_block = temp__4425__auto____$2;
return (highlight_block.cljs$core$IFn$_invoke$arity$1 ? highlight_block.cljs$core$IFn$_invoke$arity$1(node) : highlight_block.call(null,node));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__16876__auto___17815 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__17805 = "pre";
var G__17806 = {"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":"")};
var G__17807 = (function (){var G__17808 = "code";
var G__17809 = {"className": (function (){var or__4668__auto__ = (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$lang) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$lang));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})(), "ref": "code-ref"};
var G__17810 = sablono.interpreter.interpret((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$code) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$code)));
return React.createElement(G__17808,G__17809,G__17810);
})();
return React.createElement(G__17805,G__17806,G__17807);
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__16876__auto___17815);
}

var seq__17811_17816 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__17812_17817 = null;
var count__17813_17818 = (0);
var i__17814_17819 = (0);
while(true){
if((i__17814_17819 < count__17813_17818)){
var property__16877__auto___17820 = chunk__17812_17817.cljs$core$IIndexed$_nth$arity$2(null,i__17814_17819);
if(cljs.core.truth_((base__16876__auto___17815[property__16877__auto___17820]))){
(devcards.core.CodeHighlight.prototype[property__16877__auto___17820] = (base__16876__auto___17815[property__16877__auto___17820]));
} else {
}

var G__17821 = seq__17811_17816;
var G__17822 = chunk__17812_17817;
var G__17823 = count__17813_17818;
var G__17824 = (i__17814_17819 + (1));
seq__17811_17816 = G__17821;
chunk__17812_17817 = G__17822;
count__17813_17818 = G__17823;
i__17814_17819 = G__17824;
continue;
} else {
var temp__4425__auto___17825 = cljs.core.seq(seq__17811_17816);
if(temp__4425__auto___17825){
var seq__17811_17826__$1 = temp__4425__auto___17825;
if(cljs.core.chunked_seq_QMARK_(seq__17811_17826__$1)){
var c__5471__auto___17827 = cljs.core.chunk_first(seq__17811_17826__$1);
var G__17828 = cljs.core.chunk_rest(seq__17811_17826__$1);
var G__17829 = c__5471__auto___17827;
var G__17830 = cljs.core.count(c__5471__auto___17827);
var G__17831 = (0);
seq__17811_17816 = G__17828;
chunk__17812_17817 = G__17829;
count__17813_17818 = G__17830;
i__17814_17819 = G__17831;
continue;
} else {
var property__16877__auto___17832 = cljs.core.first(seq__17811_17826__$1);
if(cljs.core.truth_((base__16876__auto___17815[property__16877__auto___17832]))){
(devcards.core.CodeHighlight.prototype[property__16877__auto___17832] = (base__16876__auto___17815[property__16877__auto___17832]));
} else {
}

var G__17833 = cljs.core.next(seq__17811_17826__$1);
var G__17834 = null;
var G__17835 = (0);
var G__17836 = (0);
seq__17811_17816 = G__17833;
chunk__17812_17817 = G__17834;
count__17813_17818 = G__17835;
i__17814_17819 = G__17836;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__17839 = devcards.core.CodeHighlight;
var G__17840 = {"code": code_str, "lang": lang};
return React.createElement(G__17839,G__17840);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__5581__auto__ = (function (){var G__17841 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17841) : cljs.core.atom.call(null,G__17841));
})();
var prefer_table__5582__auto__ = (function (){var G__17842 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17842) : cljs.core.atom.call(null,G__17842));
})();
var method_cache__5583__auto__ = (function (){var G__17843 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17843) : cljs.core.atom.call(null,G__17843));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__17844 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17844) : cljs.core.atom.call(null,G__17844));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__17845){
var map__17846 = p__17845;
var map__17846__$1 = ((((!((map__17846 == null)))?((((map__17846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17846):map__17846);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17846__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__17848){
var map__17849 = p__17848;
var map__17849__$1 = ((((!((map__17849 == null)))?((((map__17849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17849):map__17849);
var block = map__17849__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17849__$1,cljs.core.cst$kw$content);
var G__17851 = devcards.core.CodeHighlight;
var G__17852 = {"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)};
return React.createElement(G__17851,G__17852);
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17858 = arguments.length;
var i__5727__auto___17859 = (0);
while(true){
if((i__5727__auto___17859 < len__5726__auto___17858)){
args__5733__auto__.push((arguments[i__5727__auto___17859]));

var G__17860 = (i__5727__auto___17859 + (1));
i__5727__auto___17859 = G__17860;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code(x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.array_seq([strs__$1], 0));
var attrs17854 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.markdown_block__GT_react,blocks);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17854))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-markdown","com-rigsomelight-devcards-typog"], null)], null),attrs17854], 0))):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17854))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17854)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown. \n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__17855 = "div";
var G__17856 = {"style": {"color": "#a94442"}};
var G__17857 = sablono.interpreter.interpret(message);
return React.createElement(G__17855,G__17856,G__17857);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq17853){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17853));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__17867 = "div";
var G__17868 = {"className": (function (){var G__17870 = devcards.system.devcards_rendered_card_class;
var G__17870__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__17870),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__17870);
var G__17870__$2 = (cljs.core.truth_(cljs.core.not_empty(classname))?[cljs.core.str(G__17870__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__17870__$1);
return G__17870__$2;
})()};
var G__17869 = sablono.interpreter.interpret(children);
return React.createElement(G__17867,G__17868,G__17869);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args17871 = [];
var len__5726__auto___17891 = arguments.length;
var i__5727__auto___17892 = (0);
while(true){
if((i__5727__auto___17892 < len__5726__auto___17891)){
args17871.push((arguments[i__5727__auto___17892]));

var G__17893 = (i__5727__auto___17892 + (1));
i__5727__auto___17892 = G__17893;
continue;
} else {
}
break;
}

var G__17873 = args17871.length;
switch (G__17873) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17871.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__17874 = card;
var map__17874__$1 = ((((!((map__17874 == null)))?((((map__17874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17874):map__17874);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17874__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17874__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__17876 = "div";
var G__17877 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')};
var G__17878 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__17876,G__17877,G__17878);
} else {
var G__17880 = "div";
var G__17881 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"};
var G__17882 = (function (){var attrs17879 = (cljs.core.truth_(path)?(function (){var G__17884 = "a";
var G__17885 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__17884,G__17880,G__17881,map__17874,map__17874__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__17884,G__17880,G__17881,map__17874,map__17874__$1,path,options))
)};
var G__17886 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__17887 = " ";
return React.createElement(G__17884,G__17885,G__17886,G__17887);
})():(function (){var attrs17888 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs17888))?sablono.interpreter.attributes(attrs17888):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17888))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17888)], null))));
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17879))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-typog"], null)], null),attrs17879], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17879))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17879)], null))));
})();
var G__17883 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__17880,G__17881,G__17882,G__17883);
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (devcards.core._devcard_options[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5324__auto__.call(null,this$,devcard_opts));
} else {
var m__5324__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5324__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (devcards.core._devcard[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5324__auto__.call(null,this$,devcard_opts));
} else {
var m__5324__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5324__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
}
}
}
});

devcards.core.hist_recorder_STAR_;
devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4425__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4425__auto__)){
var comp = temp__4425__auto__;
return React.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name(k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name(k)]);
} else {
return null;
}
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__4668__auto__ = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
return data;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.atom.call(null,data));
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
return devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
}):(function (this$){
return devcards.core.wrangle_inital_data(this$);
}));
devcards.core.atom_like_QMARK_;
var base__16876__auto___17905 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_base_DASH_)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(cljs.core.cst$kw$static_DASH_state.cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_((devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1(initial_data) : devcards.core.atom_like_QMARK_.call(null,initial_data)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(initial_data) : cljs.core.deref.call(null,initial_data)):initial_data);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),data)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom,data) : cljs.core.reset_BANG_.call(null,atom,data));
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
return this$.setState((function (){var or__4668__auto__ = (function (){var and__4656__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(and__4656__auto__)){
return this$.state;
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data(this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_((function (){var and__4656__auto__ = data_atom;
if(cljs.core.truth_(and__4656__auto__)){
return id;
} else {
return and__4656__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(temp__4425__auto__)){
var data_atom = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_(temp__4425__auto____$1)){
var id = temp__4425__auto____$1;
return cljs.core.add_watch(data_atom,id,((function (id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.forceUpdate();
});})(id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = (devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.get_data_atom.call(null,this$));
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_(m)){
return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(data_atom,this$) : m.call(null,data_atom,this$));
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(main_obj_SINGLEQUOTE_) : devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_)))))?devcards.core.code_highlight(devcards.util.utils.pprint_code(main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
var main = main_obj;
var hist_ctl = (cljs.core.truth_(cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(options))?(devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1(data_atom) : devcards.core.hist_recorder_STAR_.call(null,data_atom)):null);
var document = (function (){var temp__4425__auto__ = cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4425__auto__)){
var docu = temp__4425__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs17897 = devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17897))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs17897], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17897))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17897)], null))));
})():null);
var card__$1 = (((typeof main_obj === 'string') || ((main_obj == null)))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,edn),hist_ctl),main),document));
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__17898 = "div";
var G__17899 = {"className": "com-rigsomelight-devcards-frameless"};
var G__17900 = sablono.interpreter.interpret(children);
return React.createElement(G__17898,G__17899,G__17900);
}
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__16876__auto___17905);
}

var seq__17901_17906 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__17902_17907 = null;
var count__17903_17908 = (0);
var i__17904_17909 = (0);
while(true){
if((i__17904_17909 < count__17903_17908)){
var property__16877__auto___17910 = chunk__17902_17907.cljs$core$IIndexed$_nth$arity$2(null,i__17904_17909);
if(cljs.core.truth_((base__16876__auto___17905[property__16877__auto___17910]))){
(devcards.core.DevcardBase.prototype[property__16877__auto___17910] = (base__16876__auto___17905[property__16877__auto___17910]));
} else {
}

var G__17911 = seq__17901_17906;
var G__17912 = chunk__17902_17907;
var G__17913 = count__17903_17908;
var G__17914 = (i__17904_17909 + (1));
seq__17901_17906 = G__17911;
chunk__17902_17907 = G__17912;
count__17903_17908 = G__17913;
i__17904_17909 = G__17914;
continue;
} else {
var temp__4425__auto___17915 = cljs.core.seq(seq__17901_17906);
if(temp__4425__auto___17915){
var seq__17901_17916__$1 = temp__4425__auto___17915;
if(cljs.core.chunked_seq_QMARK_(seq__17901_17916__$1)){
var c__5471__auto___17917 = cljs.core.chunk_first(seq__17901_17916__$1);
var G__17918 = cljs.core.chunk_rest(seq__17901_17916__$1);
var G__17919 = c__5471__auto___17917;
var G__17920 = cljs.core.count(c__5471__auto___17917);
var G__17921 = (0);
seq__17901_17906 = G__17918;
chunk__17902_17907 = G__17919;
count__17903_17908 = G__17920;
i__17904_17909 = G__17921;
continue;
} else {
var property__16877__auto___17922 = cljs.core.first(seq__17901_17916__$1);
if(cljs.core.truth_((base__16876__auto___17905[property__16877__auto___17922]))){
(devcards.core.DevcardBase.prototype[property__16877__auto___17922] = (base__16876__auto___17905[property__16877__auto___17922]));
} else {
}

var G__17923 = cljs.core.next(seq__17901_17916__$1);
var G__17924 = null;
var G__17925 = (0);
var G__17926 = (0);
seq__17901_17906 = G__17923;
chunk__17902_17907 = G__17924;
count__17903_17908 = G__17925;
i__17904_17909 = G__17926;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__4425__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(temp__4425__auto__)){
var node_fn = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4425__auto____$1)){
var node = temp__4425__auto____$1;
var G__17927 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__17928 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__17927,G__17928) : node_fn.call(null,G__17927,G__17928));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__16876__auto___17935 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_dom_DASH_component_DASH_))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,cljs.core.cst$kw$node_fn),(prevP["node_fn"]));
} else {
return and__4656__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return React.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var G__17929 = {"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)};
var G__17930 = "Card has not mounted DOM node.";
return React.DOM.div(G__17929,G__17930);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__16876__auto___17935);
}

var seq__17931_17936 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__17932_17937 = null;
var count__17933_17938 = (0);
var i__17934_17939 = (0);
while(true){
if((i__17934_17939 < count__17933_17938)){
var property__16877__auto___17940 = chunk__17932_17937.cljs$core$IIndexed$_nth$arity$2(null,i__17934_17939);
if(cljs.core.truth_((base__16876__auto___17935[property__16877__auto___17940]))){
(devcards.core.DomComponent.prototype[property__16877__auto___17940] = (base__16876__auto___17935[property__16877__auto___17940]));
} else {
}

var G__17941 = seq__17931_17936;
var G__17942 = chunk__17932_17937;
var G__17943 = count__17933_17938;
var G__17944 = (i__17934_17939 + (1));
seq__17931_17936 = G__17941;
chunk__17932_17937 = G__17942;
count__17933_17938 = G__17943;
i__17934_17939 = G__17944;
continue;
} else {
var temp__4425__auto___17945 = cljs.core.seq(seq__17931_17936);
if(temp__4425__auto___17945){
var seq__17931_17946__$1 = temp__4425__auto___17945;
if(cljs.core.chunked_seq_QMARK_(seq__17931_17946__$1)){
var c__5471__auto___17947 = cljs.core.chunk_first(seq__17931_17946__$1);
var G__17948 = cljs.core.chunk_rest(seq__17931_17946__$1);
var G__17949 = c__5471__auto___17947;
var G__17950 = cljs.core.count(c__5471__auto___17947);
var G__17951 = (0);
seq__17931_17936 = G__17948;
chunk__17932_17937 = G__17949;
count__17933_17938 = G__17950;
i__17934_17939 = G__17951;
continue;
} else {
var property__16877__auto___17952 = cljs.core.first(seq__17931_17946__$1);
if(cljs.core.truth_((base__16876__auto___17935[property__16877__auto___17952]))){
(devcards.core.DomComponent.prototype[property__16877__auto___17952] = (base__16876__auto___17935[property__16877__auto___17952]));
} else {
}

var G__17953 = cljs.core.next(seq__17931_17946__$1);
var G__17954 = null;
var G__17955 = (0);
var G__17956 = (0);
seq__17931_17936 = G__17953;
chunk__17932_17937 = G__17954;
count__17933_17938 = G__17955;
i__17934_17939 = G__17956;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__4668__auto__ = x === true;
if(or__4668__auto__){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = x === false;
if(or__4668__auto____$1){
return or__4668__auto____$1;
} else {
var or__4668__auto____$2 = (x == null);
if(or__4668__auto____$2){
return or__4668__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be boolean or nil",cljs.core.cst$kw$value,x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__4668__auto__ = typeof x === 'string';
if(or__4668__auto__){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = (x == null);
if(or__4668__auto____$1){
return or__4668__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be string or nil",cljs.core.cst$kw$value,x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__4668__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$propagated_DASH_errors], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (propagated_errors){
return (function (p1__17957_SHARP_){
return !(p1__17957_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__17966 = opts;
var map__17966__$1 = ((((!((map__17966 == null)))?((((map__17966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17966):map__17966);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17966__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17966__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17966__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17966__$1,cljs.core.cst$kw$options);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4668__auto__ = cljs.core.map_QMARK_(options);
if(or__4668__auto__){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = (options == null);
if(or__4668__auto____$1){
return or__4668__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil",cljs.core.cst$kw$value,options], null);
}
}
})(),devcards.core.stringer_QMARK_(cljs.core.cst$kw$name,opts),devcards.core.stringer_QMARK_(cljs.core.cst$kw$documentation,opts),(function (){var or__4668__auto__ = (initial_data == null);
if(or__4668__auto__){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__4668__auto____$1){
return or__4668__auto____$1;
} else {
var or__4668__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__4668__auto____$2){
return or__4668__auto____$2;
} else {
var or__4668__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__4668__auto____$3){
return or__4668__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$initial_DASH_data,cljs.core.cst$kw$message,"should be an Atom or a Map or nil.",cljs.core.cst$kw$value,initial_data], null);
}
}
}
}
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__17966,map__17966__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__17958_SHARP_){
return devcards.core.booler_QMARK_(p1__17958_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__17966,map__17966__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__17990 = "div";
var G__17991 = {"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}};
var G__17992 = sablono.interpreter.interpret((function (){var G__17995 = "code";
var G__17996 = {"style": {"flex": "1 100px", "marginRight": "10px"}};
var G__17997 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__17995,G__17996,G__17997);
})());
var G__17993 = (function (){var G__17998 = "span";
var G__17999 = {"style": {"flex": "3 100px", "marginRight": "10px"}};
var G__18000 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__17998,G__17999,G__18000);
})();
var G__17994 = (function (){var G__18001 = "span";
var G__18002 = {"style": {"flex": "1 100px"}};
var G__18003 = " Received: ";
var G__18004 = (function (){var attrs17989 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs17989))?sablono.interpreter.attributes(attrs17989):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17989))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17989)], null))));
})();
return React.createElement(G__18001,G__18002,G__18003,G__18004);
})();
return React.createElement(G__17990,G__17991,G__17992,G__17993,G__17994);
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_(m)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagated_DASH_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil.",cljs.core.cst$kw$value,m], null)], null)], null);
} else {
return m;
}
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__18018 = "div";
var G__18019 = {"className": "com-rigsomelight-devcards-card-base-no-pad"};
var G__18020 = (function (){var attrs18017 = [cljs.core.str((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18017))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs18017], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18017))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18017)], null))));
})();
var G__18021 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__18024 = "div";
var G__18025 = null;
var G__18026 = (function (){var attrs18022 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18022))?sablono.interpreter.attributes(attrs18022):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18022))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18022)], null))));
})();
var G__18027 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs18028 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18028))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs18028], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18028))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18028)], null))));
})():null));
return React.createElement(G__18024,G__18025,G__18026,G__18027);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__18018,G__18019,G__18020,G__18021);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__18029_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__18029_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__18032 = devcards.core.DevcardBase;
var G__18033 = {"card": devcards.core.add_environment_defaults(card_options)};
return React.createElement(G__18032,G__18033);
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
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k18035,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__18037 = (((k18035 instanceof cljs.core.Keyword))?k18035.fqn:null);
switch (G__18037) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18035,else__5285__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18034){
var self__ = this;
var G__18034__$1 = this;
return (new cljs.core.RecordIter((0),G__18034__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
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

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
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

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__18034){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__18038 = cljs.core.keyword_identical_QMARK_;
var expr__18039 = k__5290__auto__;
if(cljs.core.truth_((pred__18038.cljs$core$IFn$_invoke$arity$2 ? pred__18038.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__18039) : pred__18038.call(null,cljs.core.cst$kw$obj,expr__18039)))){
return (new devcards.core.IdentiyOptions(G__18034,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__18034),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__18034){
var self__ = this;
var this__5281__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__18034,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__18036){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__18036),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18036,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__18042){
var map__18045 = p__18042;
var map__18045__$1 = ((((!((map__18045 == null)))?((((map__18045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18045):map__18045);
var devcard_opts = map__18045__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18045__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__18045,map__18045__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__18045,map__18045__$1,devcard_opts,options))
,cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_data,main_obj,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$history,true], null),devcards.core.assert_options_map(options)], 0))], 0));
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
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k18048,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__18050 = (((k18048 instanceof cljs.core.Keyword))?k18048.fqn:null);
switch (G__18050) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18048,else__5285__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18047){
var self__ = this;
var G__18047__$1 = this;
return (new cljs.core.RecordIter((0),G__18047__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__18047){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__18051 = cljs.core.keyword_identical_QMARK_;
var expr__18052 = k__5290__auto__;
if(cljs.core.truth_((pred__18051.cljs$core$IFn$_invoke$arity$2 ? pred__18051.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__18052) : pred__18051.call(null,cljs.core.cst$kw$obj,expr__18052)))){
return (new devcards.core.AtomLikeOptions(G__18047,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__18047),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__18047){
var self__ = this;
var this__5281__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__18047,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__18049){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__18049),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18049,cljs.core.cst$kw$obj),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,cljs.core.cst$kw$main_DASH_obj,devcards.util.edn_renderer.html_edn(((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(main_obj) : cljs.core.deref.call(null,main_obj)):main_obj)));
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
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k18058,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__18060 = (((k18058 instanceof cljs.core.Keyword))?k18058.fqn:null);
switch (G__18060) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18058,else__5285__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18057){
var self__ = this;
var G__18057__$1 = this;
return (new cljs.core.RecordIter((0),G__18057__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__18057){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__18061 = cljs.core.keyword_identical_QMARK_;
var expr__18062 = k__5290__auto__;
if(cljs.core.truth_((pred__18061.cljs$core$IFn$_invoke$arity$2 ? pred__18061.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__18062) : pred__18061.call(null,cljs.core.cst$kw$obj,expr__18062)))){
return (new devcards.core.EdnLikeOptions(G__18057,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__18057),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__18057){
var self__ = this;
var this__5281__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__18057,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__18059){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__18059),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18059,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__4656__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x));
if(and__4656__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
} else {
return and__4656__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_(main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_(main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$path,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__18076 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__18076 == null))){
if((false) || (G__18076.devcards$core$IDevcard$)){
return true;
} else {
if((!G__18076.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__18076);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__18076);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__18079 = devcards.core.DomComponent;
var G__18080 = {"node_fn": node_fn, "data_atom": data_atom};
return React.createElement(G__18079,G__18080);
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main_DASH_obj], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__18084 = (function (){var G__18085 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18085) : cljs.core.deref.call(null,G__18085));
})();
var map__18084__$1 = ((((!((map__18084 == null)))?((((map__18084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18084):map__18084);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18084__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18084__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__18088 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18088) : cljs.core.deref.call(null,G__18088));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__18090 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18090) : cljs.core.deref.call(null,G__18090));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__18095 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__18095__$1 = ((((!((map__18095 == null)))?((((map__18095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18095):map__18095);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18095__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18095__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__18097_18099 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__18098_18100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18097_18099,G__18098_18100) : cljs.core.reset_BANG_.call(null,G__18097_18099,G__18098_18100));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__18105 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__18105__$1 = ((((!((map__18105 == null)))?((((map__18105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18105):map__18105);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18105__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18105__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__18107_18109 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__18108_18110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18107_18109,G__18108_18110) : cljs.core.reset_BANG_.call(null,G__18107_18109,G__18108_18110));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__18115 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__18115__$1 = ((((!((map__18115 == null)))?((((map__18115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18115):map__18115);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18115__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__18117_18119 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__18118_18120 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18117_18119,G__18118_18120) : cljs.core.reset_BANG_.call(null,G__18117_18119,G__18118_18120));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__18175 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__18176 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18176) : cljs.core.atom.call(null,G__18176));
})()};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__18177 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18177) : cljs.core.deref.call(null,G__18177));
})()));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
if(cljs.core.truth_((function (){var and__4656__auto__ = data_atom;
if(cljs.core.truth_(and__4656__auto__)){
return id;
} else {
return and__4656__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_(this$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__18178){
var map__18179 = p__18178;
var map__18179__$1 = ((((!((map__18179 == null)))?((((map__18179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18179):map__18179);
var ha = map__18179__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18179__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18179__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18179__$1,cljs.core.cst$kw$ignore_DASH_click);
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ha,cljs.core.cst$kw$ignore_DASH_click,false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ha,cljs.core.cst$kw$history,(function (){var abridged_hist = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(pointer,history);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(abridged_hist))){
return cljs.core.cons(n,abridged_hist);
} else {
return abridged_hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$pointer,(0)], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$history,(function (){var hist = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(hist))){
return cljs.core.cons(n,hist);
} else {
return hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,false], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__4668__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())){
var G__18181 = "div";
var G__18182 = {"style": {"display": (cljs.core.truth_((function (){var or__4668__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"};
var G__18183 = sablono.interpreter.interpret((function (){var action = ((function (G__18181,G__18182,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__18181,G__18182,this$))
;
var G__18189 = "button";
var G__18190 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action};
var G__18191 = (function (){var G__18192 = "span";
var G__18193 = {"className": "com-rigsomelight-devcards-history-control-left"};
var G__18194 = "";
return React.createElement(G__18192,G__18193,G__18194);
})();
return React.createElement(G__18189,G__18190,G__18191);
})());
var G__18184 = sablono.interpreter.interpret((function (){var action = ((function (G__18181,G__18182,G__18183,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__18195 = data_atom;
var G__18196 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18195,G__18196) : cljs.core.reset_BANG_.call(null,G__18195,G__18196));
});})(G__18181,G__18182,G__18183,this$))
;
var G__18199 = "button";
var G__18200 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__18201 = (function (){var G__18202 = "span";
var G__18203 = {"className": "com-rigsomelight-devcards-history-stop"};
var G__18204 = "";
return React.createElement(G__18202,G__18203,G__18204);
})();
return React.createElement(G__18199,G__18200,G__18201);
})());
var G__18185 = sablono.interpreter.interpret((function (){var action = ((function (G__18181,G__18182,G__18183,G__18184,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__18181,G__18182,G__18183,G__18184,this$))
;
var G__18207 = "button";
var G__18208 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__18209 = (function (){var G__18210 = "span";
var G__18211 = {"className": "com-rigsomelight-devcards-history-control-right"};
var G__18212 = "";
return React.createElement(G__18210,G__18211,G__18212);
})();
return React.createElement(G__18207,G__18208,G__18209);
})());
var G__18186 = sablono.interpreter.interpret((function (){var listener = ((function (G__18181,G__18182,G__18183,G__18184,G__18185,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__18181,G__18182,G__18183,G__18184,G__18185,this$))
;
var G__18219 = "button";
var G__18220 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener};
var G__18221 = (function (){var G__18224 = "span";
var G__18225 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__18224,G__18225);
})();
var G__18222 = (function (){var G__18226 = "span";
var G__18227 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__18226,G__18227);
})();
var G__18223 = (function (){var G__18228 = "span";
var G__18229 = {"className": "com-rigsomelight-devcards-history-control-block"};
return React.createElement(G__18228,G__18229);
})();
return React.createElement(G__18219,G__18220,G__18221,G__18222,G__18223);
})());
return React.createElement(G__18181,G__18182,G__18183,G__18184,G__18185,G__18186);
} else {
return null;
}
})};
return React.createClass(G__18175);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__18232 = devcards.core.HistoryComponent;
var G__18233 = {"data_atom": data_atom};
return React.createElement(G__18232,G__18233);
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_collect_tests], null),cljs.core.conj,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(cljs.test.get_current_env(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null)),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$pass], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$pass);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$fail], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$fail);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$error], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$error);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$test_DASH_doc], null),(function (m){
devcards.core.collect_test(m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_18235 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_18235;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__5581__auto__ = (function (){var G__18236 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18236) : cljs.core.atom.call(null,G__18236));
})();
var prefer_table__5582__auto__ = (function (){var G__18237 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18237) : cljs.core.atom.call(null,G__18237));
})();
var method_cache__5583__auto__ = (function (){var G__18238 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18238) : cljs.core.atom.call(null,G__18238));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__18239 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18239) : cljs.core.atom.call(null,G__18239));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs18240 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18240))?sablono.interpreter.attributes(attrs18240):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18240))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18240)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__18241,body){
var map__18249 = p__18241;
var map__18249__$1 = ((((!((map__18249 == null)))?((((map__18249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18249):map__18249);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18249__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__18252 = "div";
var G__18253 = null;
var G__18254 = (function (){var attrs18251 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs18251))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs18251], 0))):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18251))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18251)], null))));
})();
var G__18255 = sablono.interpreter.interpret(body);
return React.createElement(G__18252,G__18253,G__18254,G__18255);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__18256){
var map__18261 = p__18256;
var map__18261__$1 = ((((!((map__18261 == null)))?((((map__18261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18261):map__18261);
var m = map__18261__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.cst$kw$expected);
return devcards.core.display_message(m,(function (){var G__18263 = devcards.core.CodeHighlight;
var G__18264 = {"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"};
return React.createElement(G__18263,G__18264);
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (m){
return devcards.core.display_message(m,(function (){var G__18268 = "div";
var G__18269 = null;
var G__18270 = React.createElement("strong",null,"Error: ");
var G__18271 = (function (){var attrs18267 = [cljs.core.str(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs18267))?sablono.interpreter.attributes(attrs18267):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18267))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18267)], null))));
})();
return React.createElement(G__18268,G__18269,G__18270,G__18271);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs18272 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18272))?sablono.interpreter.attributes(attrs18272):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18272))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18272)], null))));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__18273){
var map__18274 = p__18273;
var map__18274__$1 = ((((!((map__18274 == null)))?((((map__18274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18274):map__18274);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18274__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs18276 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__18274,map__18274__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__18274,map__18274__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.first(testing_contexts)], null))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18276))?sablono.interpreter.attributes(attrs18276):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18276))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18276)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__18278 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__18278) : cljs.test.report.call(null,G__18278));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs18283 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__18284,t){
var map__18285 = p__18284;
var map__18285__$1 = ((((!((map__18285 == null)))?((((map__18285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18285):map__18285);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18285__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18285__$1,cljs.core.cst$kw$html_DASH_list);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = cljs.core._conj(cljs.core.List.EMPTY,devcards.core.test_renderer(t));
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0))),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(tests)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18283))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs18283], 0))):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18283))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18283)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__18330){
var map__18331 = p__18330;
var map__18331__$1 = ((((!((map__18331 == null)))?((((map__18331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18331):map__18331);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18331__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__18329 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__18329__$1 = ((((!((map__18329 == null)))?((((map__18329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18329):map__18329);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18329__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18329__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18329__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__18334 = "div";
var G__18335 = {"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"};
var G__18336 = (function (){var G__18338 = "div";
var G__18339 = {"className": "com-rigsomelight-devcards-panel-heading"};
var G__18340 = (function (){var G__18344 = "a";
var G__18345 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__18344,G__18338,G__18339,G__18334,G__18335,error_QMARK_,tests,some_tests,total_tests,map__18329,map__18329__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__18344,G__18338,G__18339,G__18334,G__18335,error_QMARK_,tests,some_tests,total_tests,map__18329,map__18329__$1,fail,pass,error,error__$1))
)};
var G__18346 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__18344,G__18345,G__18346);
})();
var G__18341 = (function (){var G__18347 = "button";
var G__18348 = {"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__18347,G__18338,G__18339,G__18340,G__18334,G__18335,error_QMARK_,tests,some_tests,total_tests,map__18329,map__18329__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(G__18347,G__18338,G__18339,G__18340,G__18334,G__18335,error_QMARK_,tests,some_tests,total_tests,map__18329,map__18329__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__18349 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__18347,G__18348,G__18349);
})();
var G__18342 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__18353 = "button";
var G__18354 = {"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__18353,G__18338,G__18339,G__18340,G__18341,G__18334,G__18335,error_QMARK_,tests,some_tests,total_tests,map__18329,map__18329__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__18353,G__18338,G__18339,G__18340,G__18341,G__18334,G__18335,error_QMARK_,tests,some_tests,total_tests,map__18329,map__18329__$1,fail,pass,error,error__$1){
return (function (p__18356){
var map__18357 = p__18356;
var map__18357__$1 = ((((!((map__18357 == null)))?((((map__18357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18357):map__18357);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18357__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__18353,G__18338,G__18339,G__18340,G__18341,G__18334,G__18335,error_QMARK_,tests,some_tests,total_tests,map__18329,map__18329__$1,fail,pass,error,error__$1))
});
});})(G__18353,G__18338,G__18339,G__18340,G__18341,G__18334,G__18335,error_QMARK_,tests,some_tests,total_tests,map__18329,map__18329__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__18355 = sablono.interpreter.interpret([cljs.core.str((fail + error__$1))].join(''));
return React.createElement(G__18353,G__18354,G__18355);
})()));
var G__18343 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__18362 = "button";
var G__18363 = {"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__18362,G__18338,G__18339,G__18340,G__18341,G__18342,G__18334,G__18335,error_QMARK_,tests,some_tests,total_tests,map__18329,map__18329__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__18362,G__18338,G__18339,G__18340,G__18341,G__18342,G__18334,G__18335,error_QMARK_,tests,some_tests,total_tests,map__18329,map__18329__$1,fail,pass,error,error__$1){
return (function (p__18365){
var map__18366 = p__18365;
var map__18366__$1 = ((((!((map__18366 == null)))?((((map__18366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18366):map__18366);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18366__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__18362,G__18338,G__18339,G__18340,G__18341,G__18342,G__18334,G__18335,error_QMARK_,tests,some_tests,total_tests,map__18329,map__18329__$1,fail,pass,error,error__$1))
});
});})(G__18362,G__18338,G__18339,G__18340,G__18341,G__18342,G__18334,G__18335,error_QMARK_,tests,some_tests,total_tests,map__18329,map__18329__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__18364 = sablono.interpreter.interpret(pass);
return React.createElement(G__18362,G__18363,G__18364);
})()));
return React.createElement(G__18338,G__18339,G__18340,G__18341,G__18342,G__18343);
})();
var G__18337 = (function (){var G__18368 = "div";
var G__18369 = {"className": devcards.system.devcards_rendered_card_class};
var G__18370 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__4668__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__18368,G__18369,G__18370);
})();
return React.createElement(G__18334,G__18335,G__18336,G__18337);
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var test_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);
cljs.test.set_env_BANG_(test_env);

var tests = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());

return cljs.core.async.close_BANG_(out);
});})(out,test_env))
], null));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Running tests!!"], 0));

cljs.test.run_block(tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__13129__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto__){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto__){
return (function (state_18457){
var state_val_18458 = (state_18457[(1)]);
if((state_val_18458 === (7))){
var state_18457__$1 = state_18457;
var statearr_18459_18508 = state_18457__$1;
(statearr_18459_18508[(2)] = false);

(statearr_18459_18508[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (20))){
var inst_18398 = (state_18457[(7)]);
var inst_18417 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18398);
var state_18457__$1 = state_18457;
var statearr_18460_18509 = state_18457__$1;
(statearr_18460_18509[(2)] = inst_18417);

(statearr_18460_18509[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (27))){
var inst_18432 = (state_18457[(8)]);
var inst_18422 = (state_18457[(9)]);
var inst_18436 = (inst_18422.cljs$core$IFn$_invoke$arity$1 ? inst_18422.cljs$core$IFn$_invoke$arity$1(inst_18432) : inst_18422.call(null,inst_18432));
var state_18457__$1 = state_18457;
var statearr_18461_18510 = state_18457__$1;
(statearr_18461_18510[(2)] = inst_18436);

(statearr_18461_18510[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (1))){
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18457__$1,(2),devcards.core.test_channel);
} else {
if((state_val_18458 === (24))){
var state_18457__$1 = state_18457;
var statearr_18462_18511 = state_18457__$1;
(statearr_18462_18511[(2)] = null);

(statearr_18462_18511[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (4))){
var state_18457__$1 = state_18457;
var statearr_18463_18512 = state_18457__$1;
(statearr_18463_18512[(2)] = false);

(statearr_18463_18512[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (15))){
var state_18457__$1 = state_18457;
var statearr_18464_18513 = state_18457__$1;
(statearr_18464_18513[(2)] = false);

(statearr_18464_18513[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (21))){
var inst_18398 = (state_18457[(7)]);
var state_18457__$1 = state_18457;
var statearr_18465_18514 = state_18457__$1;
(statearr_18465_18514[(2)] = inst_18398);

(statearr_18465_18514[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (13))){
var inst_18455 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18457__$1,inst_18455);
} else {
if((state_val_18458 === (22))){
var inst_18421 = (state_18457[(10)]);
var inst_18420 = (state_18457[(2)]);
var inst_18421__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18420,cljs.core.cst$kw$tests);
var inst_18422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18420,cljs.core.cst$kw$callback);
var state_18457__$1 = (function (){var statearr_18466 = state_18457;
(statearr_18466[(10)] = inst_18421__$1);

(statearr_18466[(9)] = inst_18422);

return statearr_18466;
})();
if(cljs.core.truth_(inst_18421__$1)){
var statearr_18467_18515 = state_18457__$1;
(statearr_18467_18515[(1)] = (23));

} else {
var statearr_18468_18516 = state_18457__$1;
(statearr_18468_18516[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (29))){
var inst_18446 = (state_18457[(2)]);
var inst_18447 = cljs.test.clear_env_BANG_();
var state_18457__$1 = (function (){var statearr_18469 = state_18457;
(statearr_18469[(11)] = inst_18446);

(statearr_18469[(12)] = inst_18447);

return statearr_18469;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18457__$1,(30),devcards.core.test_channel);
} else {
if((state_val_18458 === (6))){
var state_18457__$1 = state_18457;
var statearr_18470_18517 = state_18457__$1;
(statearr_18470_18517[(2)] = true);

(statearr_18470_18517[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (28))){
var inst_18422 = (state_18457[(9)]);
var inst_18438 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_18439 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_18440 = cljs.core.PersistentHashMap.fromArrays(inst_18438,inst_18439);
var inst_18441 = devcards.core.collect_test(inst_18440);
var inst_18442 = cljs.test.get_current_env();
var inst_18443 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_18442,cljs.core.cst$kw$error,"Execution timed out!");
var inst_18444 = (inst_18422.cljs$core$IFn$_invoke$arity$1 ? inst_18422.cljs$core$IFn$_invoke$arity$1(inst_18443) : inst_18422.call(null,inst_18443));
var state_18457__$1 = (function (){var statearr_18471 = state_18457;
(statearr_18471[(13)] = inst_18441);

return statearr_18471;
})();
var statearr_18472_18518 = state_18457__$1;
(statearr_18472_18518[(2)] = inst_18444);

(statearr_18472_18518[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (25))){
var inst_18453 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
var statearr_18473_18519 = state_18457__$1;
(statearr_18473_18519[(2)] = inst_18453);

(statearr_18473_18519[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (17))){
var state_18457__$1 = state_18457;
var statearr_18474_18520 = state_18457__$1;
(statearr_18474_18520[(2)] = true);

(statearr_18474_18520[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (3))){
var inst_18375 = (state_18457[(14)]);
var inst_18380 = inst_18375.cljs$lang$protocol_mask$partition0$;
var inst_18381 = (inst_18380 & (64));
var inst_18382 = inst_18375.cljs$core$ISeq$;
var inst_18383 = (inst_18381) || (inst_18382);
var state_18457__$1 = state_18457;
if(cljs.core.truth_(inst_18383)){
var statearr_18475_18521 = state_18457__$1;
(statearr_18475_18521[(1)] = (6));

} else {
var statearr_18476_18522 = state_18457__$1;
(statearr_18476_18522[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (12))){
var inst_18398 = (state_18457[(7)]);
var inst_18402 = (inst_18398 == null);
var inst_18403 = cljs.core.not(inst_18402);
var state_18457__$1 = state_18457;
if(inst_18403){
var statearr_18477_18523 = state_18457__$1;
(statearr_18477_18523[(1)] = (14));

} else {
var statearr_18478_18524 = state_18457__$1;
(statearr_18478_18524[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (2))){
var inst_18375 = (state_18457[(14)]);
var inst_18375__$1 = (state_18457[(2)]);
var inst_18377 = (inst_18375__$1 == null);
var inst_18378 = cljs.core.not(inst_18377);
var state_18457__$1 = (function (){var statearr_18479 = state_18457;
(statearr_18479[(14)] = inst_18375__$1);

return statearr_18479;
})();
if(inst_18378){
var statearr_18480_18525 = state_18457__$1;
(statearr_18480_18525[(1)] = (3));

} else {
var statearr_18481_18526 = state_18457__$1;
(statearr_18481_18526[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (23))){
var inst_18425 = (state_18457[(15)]);
var inst_18421 = (state_18457[(10)]);
var inst_18425__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_18426 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18427 = devcards.core.run_card_tests(inst_18421);
var inst_18428 = [inst_18427,inst_18425__$1];
var inst_18429 = (new cljs.core.PersistentVector(null,2,(5),inst_18426,inst_18428,null));
var state_18457__$1 = (function (){var statearr_18482 = state_18457;
(statearr_18482[(15)] = inst_18425__$1);

return statearr_18482;
})();
return cljs.core.async.ioc_alts_BANG_(state_18457__$1,(26),inst_18429);
} else {
if((state_val_18458 === (19))){
var inst_18412 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
var statearr_18483_18527 = state_18457__$1;
(statearr_18483_18527[(2)] = inst_18412);

(statearr_18483_18527[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (11))){
var inst_18375 = (state_18457[(14)]);
var inst_18395 = (state_18457[(2)]);
var inst_18396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18395,cljs.core.cst$kw$tests);
var inst_18397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18395,cljs.core.cst$kw$callback);
var inst_18398 = inst_18375;
var state_18457__$1 = (function (){var statearr_18484 = state_18457;
(statearr_18484[(16)] = inst_18396);

(statearr_18484[(7)] = inst_18398);

(statearr_18484[(17)] = inst_18397);

return statearr_18484;
})();
var statearr_18485_18528 = state_18457__$1;
(statearr_18485_18528[(2)] = null);

(statearr_18485_18528[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (9))){
var inst_18375 = (state_18457[(14)]);
var inst_18392 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18375);
var state_18457__$1 = state_18457;
var statearr_18486_18529 = state_18457__$1;
(statearr_18486_18529[(2)] = inst_18392);

(statearr_18486_18529[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (5))){
var inst_18390 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
if(cljs.core.truth_(inst_18390)){
var statearr_18487_18530 = state_18457__$1;
(statearr_18487_18530[(1)] = (9));

} else {
var statearr_18488_18531 = state_18457__$1;
(statearr_18488_18531[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (14))){
var inst_18398 = (state_18457[(7)]);
var inst_18405 = inst_18398.cljs$lang$protocol_mask$partition0$;
var inst_18406 = (inst_18405 & (64));
var inst_18407 = inst_18398.cljs$core$ISeq$;
var inst_18408 = (inst_18406) || (inst_18407);
var state_18457__$1 = state_18457;
if(cljs.core.truth_(inst_18408)){
var statearr_18489_18532 = state_18457__$1;
(statearr_18489_18532[(1)] = (17));

} else {
var statearr_18490_18533 = state_18457__$1;
(statearr_18490_18533[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (26))){
var inst_18425 = (state_18457[(15)]);
var inst_18431 = (state_18457[(2)]);
var inst_18432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18431,(0),null);
var inst_18433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18431,(1),null);
var inst_18434 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_18433,inst_18425);
var state_18457__$1 = (function (){var statearr_18491 = state_18457;
(statearr_18491[(8)] = inst_18432);

return statearr_18491;
})();
if(inst_18434){
var statearr_18492_18534 = state_18457__$1;
(statearr_18492_18534[(1)] = (27));

} else {
var statearr_18493_18535 = state_18457__$1;
(statearr_18493_18535[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (16))){
var inst_18415 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
if(cljs.core.truth_(inst_18415)){
var statearr_18494_18536 = state_18457__$1;
(statearr_18494_18536[(1)] = (20));

} else {
var statearr_18495_18537 = state_18457__$1;
(statearr_18495_18537[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (30))){
var inst_18449 = (state_18457[(2)]);
var inst_18398 = inst_18449;
var state_18457__$1 = (function (){var statearr_18496 = state_18457;
(statearr_18496[(7)] = inst_18398);

return statearr_18496;
})();
var statearr_18497_18538 = state_18457__$1;
(statearr_18497_18538[(2)] = null);

(statearr_18497_18538[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (10))){
var inst_18375 = (state_18457[(14)]);
var state_18457__$1 = state_18457;
var statearr_18498_18539 = state_18457__$1;
(statearr_18498_18539[(2)] = inst_18375);

(statearr_18498_18539[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (18))){
var state_18457__$1 = state_18457;
var statearr_18499_18540 = state_18457__$1;
(statearr_18499_18540[(2)] = false);

(statearr_18499_18540[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (8))){
var inst_18387 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
var statearr_18500_18541 = state_18457__$1;
(statearr_18500_18541[(2)] = inst_18387);

(statearr_18500_18541[(1)] = (5));


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
});})(c__13129__auto__))
;
return ((function (switch__13015__auto__,c__13129__auto__){
return (function() {
var devcards$core$state_machine__13016__auto__ = null;
var devcards$core$state_machine__13016__auto____0 = (function (){
var statearr_18504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18504[(0)] = devcards$core$state_machine__13016__auto__);

(statearr_18504[(1)] = (1));

return statearr_18504;
});
var devcards$core$state_machine__13016__auto____1 = (function (state_18457){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_18457);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e18505){if((e18505 instanceof Object)){
var ex__13019__auto__ = e18505;
var statearr_18506_18542 = state_18457;
(statearr_18506_18542[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18457);

return cljs.core.cst$kw$recur;
} else {
throw e18505;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__18543 = state_18457;
state_18457 = G__18543;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
devcards$core$state_machine__13016__auto__ = function(state_18457){
switch(arguments.length){
case 0:
return devcards$core$state_machine__13016__auto____0.call(this);
case 1:
return devcards$core$state_machine__13016__auto____1.call(this,state_18457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__13016__auto____0;
devcards$core$state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__13016__auto____1;
return devcards$core$state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto__))
})();
var state__13131__auto__ = (function (){var statearr_18507 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_18507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto__);

return statearr_18507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto__))
);

return c__13129__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__16876__auto___18548 = {"componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$test_thunks);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4425__auto__ = (next_props[cljs.core.name(cljs.core.cst$kw$test_thunks)]);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state(this$,cljs.core.cst$kw$test_results);
var path = devcards.core.get_props(this$,cljs.core.cst$kw$path);
return devcards.core.render_tests(this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__16876__auto___18548);
}

var seq__18544_18549 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__18545_18550 = null;
var count__18546_18551 = (0);
var i__18547_18552 = (0);
while(true){
if((i__18547_18552 < count__18546_18551)){
var property__16877__auto___18553 = chunk__18545_18550.cljs$core$IIndexed$_nth$arity$2(null,i__18547_18552);
if(cljs.core.truth_((base__16876__auto___18548[property__16877__auto___18553]))){
(devcards.core.TestDevcard.prototype[property__16877__auto___18553] = (base__16876__auto___18548[property__16877__auto___18553]));
} else {
}

var G__18554 = seq__18544_18549;
var G__18555 = chunk__18545_18550;
var G__18556 = count__18546_18551;
var G__18557 = (i__18547_18552 + (1));
seq__18544_18549 = G__18554;
chunk__18545_18550 = G__18555;
count__18546_18551 = G__18556;
i__18547_18552 = G__18557;
continue;
} else {
var temp__4425__auto___18558 = cljs.core.seq(seq__18544_18549);
if(temp__4425__auto___18558){
var seq__18544_18559__$1 = temp__4425__auto___18558;
if(cljs.core.chunked_seq_QMARK_(seq__18544_18559__$1)){
var c__5471__auto___18560 = cljs.core.chunk_first(seq__18544_18559__$1);
var G__18561 = cljs.core.chunk_rest(seq__18544_18559__$1);
var G__18562 = c__5471__auto___18560;
var G__18563 = cljs.core.count(c__5471__auto___18560);
var G__18564 = (0);
seq__18544_18549 = G__18561;
chunk__18545_18550 = G__18562;
count__18546_18551 = G__18563;
i__18547_18552 = G__18564;
continue;
} else {
var property__16877__auto___18565 = cljs.core.first(seq__18544_18559__$1);
if(cljs.core.truth_((base__16876__auto___18548[property__16877__auto___18565]))){
(devcards.core.TestDevcard.prototype[property__16877__auto___18565] = (base__16876__auto___18548[property__16877__auto___18565]));
} else {
}

var G__18566 = cljs.core.next(seq__18544_18559__$1);
var G__18567 = null;
var G__18568 = (0);
var G__18569 = (0);
seq__18544_18549 = G__18566;
chunk__18545_18550 = G__18567;
count__18546_18551 = G__18568;
i__18547_18552 = G__18569;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__5733__auto__ = [];
var len__5726__auto___18576 = arguments.length;
var i__5727__auto___18577 = (0);
while(true){
if((i__5727__auto___18577 < len__5726__auto___18576)){
args__5733__auto__.push((arguments[i__5727__auto___18577]));

var G__18578 = (i__5727__auto___18577 + (1));
i__5727__auto___18577 = G__18578;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core18571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core18571 = (function (test_thunks,meta18572){
this.test_thunks = test_thunks;
this.meta18572 = meta18572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core18571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18573,meta18572__$1){
var self__ = this;
var _18573__$1 = this;
return (new devcards.core.t_devcards$core18571(self__.test_thunks,meta18572__$1));
});

devcards.core.t_devcards$core18571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18573){
var self__ = this;
var _18573__$1 = this;
return self__.meta18572;
});

devcards.core.t_devcards$core18571.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core18571.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__18574 = devcards.core.TestDevcard;
var G__18575 = {"test_thunks": self__.test_thunks, "path": path};
return React.createElement(G__18574,G__18575);
});

devcards.core.t_devcards$core18571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta18572], null);
});

devcards.core.t_devcards$core18571.cljs$lang$type = true;

devcards.core.t_devcards$core18571.cljs$lang$ctorStr = "devcards.core/t_devcards$core18571";

devcards.core.t_devcards$core18571.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"devcards.core/t_devcards$core18571");
});

devcards.core.__GT_t_devcards$core18571 = (function devcards$core$__GT_t_devcards$core18571(test_thunks__$1,meta18572){
return (new devcards.core.t_devcards$core18571(test_thunks__$1,meta18572));
});

}

return (new devcards.core.t_devcards$core18571(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq18570){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18570));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.aget,goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4425__auto__ = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state)));
if(cljs.core.truth_(temp__4425__auto__)){
var cards = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ns_symbol)], null));
if(cljs.core.truth_(temp__4425__auto____$1)){
var card = temp__4425__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_(devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4425__auto__ = cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(ns_symbol)));
if(cljs.core.truth_(temp__4425__auto__)){
var base_card_options = temp__4425__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),((function (base_card_options,temp__4425__auto__){
return (function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,base_card_options], 0));
});})(base_card_options,temp__4425__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4425__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str((function (){var G__18583 = (function (){var attrs18584 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18584))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs18584], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18584))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18584)], null))));
})();
return React.renderToString(G__18583);
})()),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4425__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
var G__18590 = (function (){var attrs18592 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18592))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs18592], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18592))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18592)], null))));
})();
var G__18591 = devcards.system.devcards_app_node();
return React.render(G__18590,G__18591);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__13129__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13129__auto__){
return (function (){
var f__13130__auto__ = (function (){var switch__13015__auto__ = ((function (c__13129__auto__){
return (function (state_18622){
var state_val_18623 = (state_18622[(1)]);
if((state_val_18623 === (1))){
var inst_18613 = devcards.core.load_data_from_channel_BANG_();
var state_18622__$1 = state_18622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18622__$1,(2),inst_18613);
} else {
if((state_val_18623 === (2))){
var inst_18615 = (state_18622[(2)]);
var inst_18616 = cljs.core.async.timeout((100));
var state_18622__$1 = (function (){var statearr_18624 = state_18622;
(statearr_18624[(7)] = inst_18615);

return statearr_18624;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18622__$1,(3),inst_18616);
} else {
if((state_val_18623 === (3))){
var inst_18618 = (state_18622[(2)]);
var inst_18619 = (function (){return ((function (inst_18618,state_val_18623,c__13129__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_18618,state_val_18623,c__13129__auto__))
})();
var inst_18620 = setTimeout(inst_18619,(0));
var state_18622__$1 = (function (){var statearr_18625 = state_18622;
(statearr_18625[(8)] = inst_18618);

return statearr_18625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18622__$1,inst_18620);
} else {
return null;
}
}
}
});})(c__13129__auto__))
;
return ((function (switch__13015__auto__,c__13129__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__13016__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__13016__auto____0 = (function (){
var statearr_18629 = [null,null,null,null,null,null,null,null,null];
(statearr_18629[(0)] = devcards$core$mount_namespace_$_state_machine__13016__auto__);

(statearr_18629[(1)] = (1));

return statearr_18629;
});
var devcards$core$mount_namespace_$_state_machine__13016__auto____1 = (function (state_18622){
while(true){
var ret_value__13017__auto__ = (function (){try{while(true){
var result__13018__auto__ = switch__13015__auto__(state_18622);
if(cljs.core.keyword_identical_QMARK_(result__13018__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13018__auto__;
}
break;
}
}catch (e18630){if((e18630 instanceof Object)){
var ex__13019__auto__ = e18630;
var statearr_18631_18633 = state_18622;
(statearr_18631_18633[(5)] = ex__13019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18622);

return cljs.core.cst$kw$recur;
} else {
throw e18630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13017__auto__,cljs.core.cst$kw$recur)){
var G__18634 = state_18622;
state_18622 = G__18634;
continue;
} else {
return ret_value__13017__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__13016__auto__ = function(state_18622){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__13016__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__13016__auto____1.call(this,state_18622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__13016__auto____0;
devcards$core$mount_namespace_$_state_machine__13016__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__13016__auto____1;
return devcards$core$mount_namespace_$_state_machine__13016__auto__;
})()
;})(switch__13015__auto__,c__13129__auto__))
})();
var state__13131__auto__ = (function (){var statearr_18632 = (f__13130__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13130__auto__.cljs$core$IFn$_invoke$arity$0() : f__13130__auto__.call(null));
(statearr_18632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13129__auto__);

return statearr_18632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13131__auto__);
});})(c__13129__auto__))
);

return c__13129__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
