(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{jctj:function(e,n){function a(e){return e?"string"==typeof e?e:e.source:null}function s(e){return t("(?=",e,")")}function t(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return n.map(function(e){return a(e)}).join("")}function i(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return"("+n.map(function(e){return a(e)}).join("|")+")"}e.exports=function(e){var n=t(/[A-Z_]/,t("(",/[A-Z0-9_.-]*:/,")?"),/[A-Z0-9_.-]*/),a={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},c=e.inherit(r,{begin:/\(/,end:/\)/}),l=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),g=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),o={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[a]},{begin:/'/,end:/'/,contains:[a]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,g,l,c,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,c,g,l]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},a,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[o],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[o],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t(/</,s(t(n,i(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:o}]},{className:"tag",begin:t(/<\//,s(t(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0}]}]}}}}]);