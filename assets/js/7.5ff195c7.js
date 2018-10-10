(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{180:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"container-list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#container-list","aria-hidden":"true"}},[t._v("#")]),t._v(" container/list")]),t._v(" "),n("p",[t._v("list定义了一个双向链表。")]),t._v(" "),n("h2",{attrs:{id:"element"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#element","aria-hidden":"true"}},[t._v("#")]),t._v(" Element")]),t._v(" "),n("p",[t._v("list的元素定义如下：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Element "),n("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// Next and previous pointers in the doubly-linked list of elements.")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// The front of the list has prev = nil, and the back has next = nil.")]),t._v("\n    next"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prev "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("Element\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// The list to which this element belongs.")]),t._v("\n    list "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("List\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// The contents of this list element.")]),t._v("\n    Value "),n("span",{attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Element定义了"),n("code",[t._v("Next()")]),t._v("和"),n("code",[t._v("Prev()")]),t._v("方法，定义如下：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// Next returns the next list element or nil.")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("Element"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("Element "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" p "),n("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" p "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("root "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Prev returns the previous list element or nil.")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("Element"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Prev")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("Element "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" p "),n("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prev"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" p "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("root "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("总的来说，这两个方法的执行逻辑是：")]),t._v(" "),n("ul",[n("li",[t._v("如果该元素在某一个链表上，且其前一个（后一个）元素不是链表的根元素，则返回其前一个（后一个）元素")]),t._v(" "),n("li",[t._v("其它情况下，即如果该元素不属于任何链表，或者其前一个（后一个）元素为链表的根元素，则返回"),n("code",[t._v("nil")]),t._v("（即：链表的根元素只起到一个占位作用，而并不会存储数据值）")])]),t._v(" "),n("h2",{attrs:{id:"list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#list","aria-hidden":"true"}},[t._v("#")]),t._v(" List")]),t._v(" "),n("p",[t._v("通过"),n("code",[t._v("New()")]),t._v("方法可以创建一个新的链表：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// List represents a doubly linked list.")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// The zero value for List is an empty list ready to use.")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" List "),n("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    root Element "),n("span",{attrs:{class:"token comment"}},[t._v("// sentinel list element, only &root, root.prev, and root.next are used")]),t._v("\n    "),n("span",{attrs:{class:"token builtin"}},[t._v("len")]),t._v("  "),n("span",{attrs:{class:"token builtin"}},[t._v("int")]),t._v("     "),n("span",{attrs:{class:"token comment"}},[t._v("// current list length excluding (this) sentinel element")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Init initializes or clears list l.")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("List"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Init")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("List "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("root\n    l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prev "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("root\n    l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token builtin"}},[t._v("len")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// New returns an initialized list.")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("New")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("List "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("new")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Init")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("可以看到，"),n("code",[t._v("New()")]),t._v("实际上调用了"),n("code",[t._v("Init()")]),t._v("方法，主要作用就是初始化一个链表的根元素。")]),t._v(" "),n("p",[t._v("事实上，List是一个首尾相连的环状结构，只不过由于根元素只是起到了占位作用，对外是不可见的，因此对于用户操作来说，看到的是一个链状结构。")]),t._v(" "),n("p",[t._v("其相关操作以及源码都比较简单，不做赘述。下面是一个例子：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"container/list"')]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("main")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    l "),n("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" list"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("New")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("PushBack")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"a"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("printList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// a")]),t._v("\n\n    l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("PushBack")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"b"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("printList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// a b")]),t._v("\n\n    l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("PushFront")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"c"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("printList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// c a b")]),t._v("\n\n    fmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Front")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// c")]),t._v("\n    fmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Back")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("// b")]),t._v("\n    fmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Len")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),n("span",{attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n\n    l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("MoveToBack")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Front")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("printList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// a b c")]),t._v("\n\n    l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("MoveToFront")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Back")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("printList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// c a b")]),t._v("\n\n    l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Remove")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Back")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("printList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// c a")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("printList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("list"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("List"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" e "),n("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" l"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Front")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" e "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("nil")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" e "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('" "')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    fmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="list.md";s.default=o.exports}}]);