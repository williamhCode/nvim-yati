foo({
    sd,
    sdf
  },
  4
);

foo(2, {
    sd,
    sdf,
    MARKER
  },
  4
);

foo( 2,
  {
    sd,
    sdf
  });

foo(2, {
  sd,
  sdf
});

foo(2, {
  sd,
  sdf
}, 'abc');

foo(2,
  {
    sd,
    sdf
  },
  'abc');

foo(2,
  4);

var x = [
  3,
  4
];

const y = [
  1
];

const j = [{
  a: 1
}];

let h = {
  a: [ 1,
    MARKER
    2 ],
  b: { j: [
      { l: 1 }]
  },
  c:
  { j: [
      MARKER
      { l: 1 }]
  },
};

const a =
  {
    b: 1
  };


if (true)
  foo();
else
  bar();

if (true) {
  foo();
  bar();
} else if (
  false
) {
  (1 + 2)
  MARKER
} else {
  MARKER
  foo();
}

while (a === 1
  || b === 1)
  inLoop();

while (condition)
  inLoop();
after();

while (mycondition) {
  MARKER
  sdfsdfg();
}

while (mycondition) {
  sdfsdfg();
  if (test) {
    more()
  }}

while (mycondition)
  if (test) {
    more()
}

switch (e) {
  case 5:
    something();
    more();
  case 6:
    somethingElse();
  case 7:
  default:
    done();
}

req
  .field
  MARKER
  .shouldBeOne()

b =
  3
    + 5
    + 7
    + 8
      * 8
      * 9
      / 17
      * 8
      / 20
    - 34
    + 3 *
      9
    - 8;

ifthis
  && thendo()
  MARKER
  || otherwise
    && dothis

const jsx = (
  <div
    title='start'
    ff={
      ((
        fd
      ) => {
        fd
        MARKER
      })()
    }
    MARKER
  >
    <div>
      MARKER
      sdf
    </div>
  </div>
);

const a = (
  <img
    src='/img.jpg'
    />
);

const b = (
  <img
    src='/img.jpg' />
);

function func(
  fdsf
) {
  const f = () => {
    MARKER
    fs
  }
}

function foo() {
  return (function(
    a,
    b
  ) {
    MARKER
    ff
  })(
    c
    MARKER
  )(
    d
    MARKER
  );
}

class MyClass extends OtherComponent {

  state = {
    test: 1
  }

  constructor() {
    test();
  }
  MARKER

  otherfunction = (a, b = {
    default: false
  }) => {
    more();
  }
}

foo(myWrapper(mysecondWrapper({
  a: 1
})));

const af1 = (c) => {
  const a = () => {
    MARKER
    sdf
  }
}
const af2 = (c
  b,
  d
) => ({
  f: () => {
    MARKER
    sdf
  }
})

const af3 = (c) =>
  ((d) =>
    123
  )(
    e,
    b
  )
