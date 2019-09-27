define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const main = Object.create(dart.library);
  const $onClick = dartx.onClick;
  const $text = dartx.text;
  const $children = dartx.children;
  const $add = dartx.add;
  const $clear = dartx.clear;
  let EventTovoid = () => (EventTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(main.addToDoItem, EventTovoid());
    },
    get C1() {
      return C1 = dart.fn(main.del, EventTovoid());
    }
  });
  let C0;
  let C1;
  main.main = function main$() {
    main.toDoList = html.InputElement._check(html.querySelector("#to-do-list"));
    main.toDoOutput = html.UListElement._check(html.querySelector("#to-do-output"));
    main.btn = html.ButtonElement._check(html.querySelector("#newButton"));
    main.btn[$onClick].listen(C0 || CT.C0);
    main.btn1 = html.ButtonElement._check(html.querySelector("#deleteList"));
    main.btn1[$onClick].listen(C1 || CT.C1);
  };
  main.addToDoItem = function addToDoItem(e) {
    let newToDoData = html.LIElement.new();
    newToDoData[$text] = main.toDoList.value;
    main.toDoList.value = "";
    main.toDoOutput[$children][$add](newToDoData);
  };
  main.del = function del(e) {
    main.toDoOutput[$children][$clear]();
  };
  dart.defineLazy(main, {
    /*main.toDoList*/get toDoList() {
      return null;
    },
    set toDoList(_) {},
    /*main.toDoOutput*/get toDoOutput() {
      return null;
    },
    set toDoOutput(_) {},
    /*main.btn*/get btn() {
      return null;
    },
    set btn(_) {},
    /*main.btn1*/get btn1() {
      return null;
    },
    set btn1(_) {}
  });
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;oBAQE,yBAAW,mBAAc;sBACzB,yBAAa,mBAAc;eAC3B,0BAAM,mBAAc;IACpB,AAAI,AAAQ;gBAEZ,0BAAO,mBAAc;IACrB,AAAK,AAAQ;EACf;0CAEuB;AACjB,sBAAc;IAClB,AAAY,WAAD,UAAQ,AAAS;IAE5B,AAAS,sBAAQ;IACjB,AAAW,AAAS,iCAAI,WAAW;EACrC;0BAEe;IACb,AAAW,AAAS;EACtB;;MAzBa,aAAQ;;;;MACR,eAAU;;;;MACT,QAAG;;;;MACH,SAAI","file":"main.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
