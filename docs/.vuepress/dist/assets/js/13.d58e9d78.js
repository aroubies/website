(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{273:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"bodydecoder-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bodydecoder-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" BodyDecoder.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp-curl/blob/master/src/oatpp-curl/io/BodyDecoder.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp-curl/issues/new?title=API%20question&body=In%20file:%20oatpp-curl/io/BodyDecoder.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Custom BodyDecoder for "),a("router-link",{attrs:{to:"/api/latest/oatpp-curl/RequestExecutor/#requestexecutor"}},[t._v("oatpp::curl::RequestExecutor")]),t._v(". Extends "),a("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/incoming/BodyDecoder/#bodydecoder"}},[t._v("oatpp::web::protocol::http::incoming::BodyDecoder")]),t._v(".")],1),t._v(" "),t._m(2),t._m(3),t._v(" "),a("table",[t._m(4),t._v(" "),a("tbody",[a("tr",[t._m(5),t._v(" "),t._m(6),t._v(" "),a("td",[t._v("Typedef for headers map. Headers map key is case-insensitive. For more info see "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/LazyStringMap/#lazystringmap"}},[t._v("oatpp::data::share::LazyStringMap")]),t._v(".")],1)])])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("Typedef for headers map. Headers map key is case-insensitive. For more info see "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/LazyStringMap/#lazystringmap"}},[t._v("oatpp::data::share::LazyStringMap")]),t._v(".")],1),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("Just transfer everything we have in bodyStream to toStream as-is Curl already did all decoding. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" headers - Headers map. "),a("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" bodyStream - pointer to "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream"}},[t._v("oatpp::data::stream::InputStream")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" writeCallback - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#writecallback"}},[t._v("oatpp::data::stream::WriteCallback")]),t._v(". ")],1)])]),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("Just transfer everything we have in bodyStream to toStream as-is Curl already did all decoding. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" headers - Headers map. "),a("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" bodyStream - "),a("code",[t._v("std::shared_ptr")]),t._v(" to "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream"}},[t._v("oatpp::data::stream::InputStream")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" writeCallback - "),a("code",[t._v("std::shared_ptr")]),t._v(" to "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#asyncwritecallback"}},[t._v("oatpp::data::stream::AsyncWriteCallback")]),t._v(". ")],1),a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinestarter"}},[t._v("oatpp::async::CoroutineStarter")]),t._v(". ")],1)])]),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp-curl")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp-curl/io/BodyDecoder.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"bodydecoder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bodydecoder","aria-hidden":"true"}},[this._v("#")]),this._v(" BodyDecoder")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" curl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" io "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BodyDecoder")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("incoming"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("BodyDecoder "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"typedefs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typedefs","aria-hidden":"true"}},[this._v("#")]),this._v(" Typedefs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Type")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Summary")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("oatpp::data::share::LazyStringMap<oatpp::data::share::StringKeyLabelCI_FAST>")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("a",{attrs:{href:"#bodydecoder-headers"}},[this._v("Headers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#bodydecoder-decode"}},[t._v("decode")])]),t._v(" "),a("td",[t._v("Just transfer everything we have in bodyStream to toStream as-is")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::async::CoroutineStarter")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#bodydecoder-decodeasync"}},[t._v("decodeAsync")])]),t._v(" "),a("td",[t._v("Just transfer everything we have in bodyStream to toStream as-is")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bodydecoder-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bodydecoder-headers","aria-hidden":"true"}},[this._v("#")]),this._v(" BodyDecoder::Headers")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("LazyStringMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabelCI_FAST"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Headers\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bodydecoder-decode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bodydecoder-decode","aria-hidden":"true"}},[this._v("#")]),this._v(" BodyDecoder::decode")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("InputStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" bodyStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("WriteCallback"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" writeCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bodydecoder-decodeasync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bodydecoder-decodeasync","aria-hidden":"true"}},[this._v("#")]),this._v(" BodyDecoder::decodeAsync")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CoroutineStarter "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                                   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("InputStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" bodyStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                                   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("AsyncWriteCallback"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" writeCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" override\n")])])])}],!1,null,null,null);e.default=s.exports}}]);