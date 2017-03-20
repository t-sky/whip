// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('whip.view.story');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('whip.model');
whip.view.story.line = (function whip$view$story$line(p__19959,k,v,statuses,projects){
var map__19993 = p__19959;
var map__19993__$1 = ((((!((map__19993 == null)))?((((map__19993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19993):map__19993);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19993__$1,cljs.core.cst$kw$project_DASH_id);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19993__$1,cljs.core.cst$kw$status);
var G__19995 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__19995) {
case "title":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"title",cljs.core.cst$kw$default_DASH_value,v,cljs.core.cst$kw$required,"required",cljs.core.cst$kw$rows,(1),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"auto",cljs.core.cst$kw$font_DASH_size,"1.5em"], null)], null)], null);

break;
case "status":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default_DASH_value,v], null)], null),(function (){var iter__5440__auto__ = ((function (G__19995,map__19993,map__19993__$1,project_id,status){
return (function whip$view$story$line_$_iter__19996(s__19997){
return (new cljs.core.LazySeq(null,((function (G__19995,map__19993,map__19993__$1,project_id,status){
return (function (){
var s__19997__$1 = s__19997;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19997__$1);
if(temp__4425__auto__){
var s__19997__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19997__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__19997__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__19999 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__19998 = (0);
while(true){
if((i__19998 < size__5439__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__19998);
cljs.core.chunk_append(b__19999,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,s], null));

var G__20027 = (i__19998 + (1));
i__19998 = G__20027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19999),whip$view$story$line_$_iter__19996(cljs.core.chunk_rest(s__19997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19999),null);
}
} else {
var s = cljs.core.first(s__19997__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,s], null),whip$view$story$line_$_iter__19996(cljs.core.rest(s__19997__$2)));
}
} else {
return null;
}
break;
}
});})(G__19995,map__19993,map__19993__$1,project_id,status))
,null,null));
});})(G__19995,map__19993,map__19993__$1,project_id,status))
;
return iter__5440__auto__(statuses);
})());

break;
case "project-id":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default_DASH_value,v], null)], null),(function (){var iter__5440__auto__ = ((function (G__19995,map__19993,map__19993__$1,project_id,status){
return (function whip$view$story$line_$_iter__20002(s__20003){
return (new cljs.core.LazySeq(null,((function (G__19995,map__19993,map__19993__$1,project_id,status){
return (function (){
var s__20003__$1 = s__20003;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20003__$1);
if(temp__4425__auto__){
var s__20003__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20003__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__20003__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__20005 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__20004 = (0);
while(true){
if((i__20004 < size__5439__auto__)){
var vec__20014 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__20004);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20014,(0),null);
var map__20015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20014,(1),null);
var map__20015__$1 = ((((!((map__20015 == null)))?((((map__20015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20015):map__20015);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20015__$1,cljs.core.cst$kw$title);
cljs.core.chunk_append(b__20005,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,k__$1], null),title], null));

var G__20028 = (i__20004 + (1));
i__20004 = G__20028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20005),whip$view$story$line_$_iter__20002(cljs.core.chunk_rest(s__20003__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20005),null);
}
} else {
var vec__20017 = cljs.core.first(s__20003__$2);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20017,(0),null);
var map__20018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20017,(1),null);
var map__20018__$1 = ((((!((map__20018 == null)))?((((map__20018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20018):map__20018);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20018__$1,cljs.core.cst$kw$title);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,k__$1], null),title], null),whip$view$story$line_$_iter__20002(cljs.core.rest(s__20003__$2)));
}
} else {
return null;
}
break;
}
});})(G__19995,map__19993,map__19993__$1,project_id,status))
,null,null));
});})(G__19995,map__19993,map__19993__$1,project_id,status))
;
return iter__5440__auto__(projects);
})());

break;
case "members":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null),(function (){var iter__5440__auto__ = ((function (G__19995,map__19993,map__19993__$1,project_id,status){
return (function whip$view$story$line_$_iter__20020(s__20021){
return (new cljs.core.LazySeq(null,((function (G__19995,map__19993,map__19993__$1,project_id,status){
return (function (){
var s__20021__$1 = s__20021;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20021__$1);
if(temp__4425__auto__){
var s__20021__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20021__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__20021__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__20023 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__20022 = (0);
while(true){
if((i__20022 < size__5439__auto__)){
var member = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__20022);
cljs.core.chunk_append(b__20023,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag,member], null));

var G__20029 = (i__20022 + (1));
i__20022 = G__20029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20023),whip$view$story$line_$_iter__20020(cljs.core.chunk_rest(s__20021__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20023),null);
}
} else {
var member = cljs.core.first(s__20021__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag,member], null),whip$view$story$line_$_iter__20020(cljs.core.rest(s__20021__$2)));
}
} else {
return null;
}
break;
}
});})(G__19995,map__19993,map__19993__$1,project_id,status))
,null,null));
});})(G__19995,map__19993,map__19993__$1,project_id,status))
;
return iter__5440__auto__(v);
})());

break;
case "order":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$name,cljs.core.name(k),cljs.core.cst$kw$min,(1),cljs.core.cst$kw$default_DASH_value,v], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,cljs.core.name(k),cljs.core.cst$kw$default_DASH_value,[cljs.core.str(v)].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null)], null);

}
});
whip.view.story.story_details = (function whip$view$story$story_details(app_state,p__20030){
var map__20043 = p__20030;
var map__20043__$1 = ((((!((map__20043 == null)))?((((map__20043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20043):map__20043);
var story_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20043__$1,cljs.core.cst$kw$story_DASH_id);
var story = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stories,story_id], null));
var statuses = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$projects,cljs.core.cst$kw$project_DASH_id.cljs$core$IFn$_invoke$arity$1(story),cljs.core.cst$kw$statuses], null));
var projects = cljs.core.cst$kw$projects.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (story,statuses,projects,map__20043,map__20043__$1,story_id){
return (function whip$view$story$story_details_$_story_submit(e){
return e.preventDefault();
});})(story,statuses,projects,map__20043,map__20043__$1,story_id))
], null)], null),(function (){var iter__5440__auto__ = ((function (story,statuses,projects,map__20043,map__20043__$1,story_id){
return (function whip$view$story$story_details_$_iter__20045(s__20046){
return (new cljs.core.LazySeq(null,((function (story,statuses,projects,map__20043,map__20043__$1,story_id){
return (function (){
var s__20046__$1 = s__20046;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20046__$1);
if(temp__4425__auto__){
var s__20046__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20046__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__20046__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__20048 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__20047 = (0);
while(true){
if((i__20047 < size__5439__auto__)){
var vec__20053 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__20047);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20053,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20053,(1),null);
cljs.core.chunk_append(b__20048,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,clojure.string.capitalize(cljs.core.name(k))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.story.line,story,k,v,statuses,projects], null)], null));

var G__20055 = (i__20047 + (1));
i__20047 = G__20055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20048),whip$view$story$story_details_$_iter__20045(cljs.core.chunk_rest(s__20046__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20048),null);
}
} else {
var vec__20054 = cljs.core.first(s__20046__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20054,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20054,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,clojure.string.capitalize(cljs.core.name(k))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.story.line,story,k,v,statuses,projects], null)], null),whip$view$story$story_details_$_iter__20045(cljs.core.rest(s__20046__$2)));
}
} else {
return null;
}
break;
}
});})(story,statuses,projects,map__20043,map__20043__$1,story_id))
,null,null));
});})(story,statuses,projects,map__20043,map__20043__$1,story_id))
;
return iter__5440__auto__(story);
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"submit"], null)], null));
});
