//@flow
import C from 'UI/Node/Component';
import D from 'UI/Node/DOM';
import _ from 'mori/mori';

const component = C.Component({ 
  render: ({ model }) => {
    const props = {
      props: { className: 'container' }
    };

    return D.div(props, [
      D.h1('hello world!')
    ]);
  }
});

export { component };
