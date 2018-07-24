const onlyFloat = {
  install(Vue, options = null) {
    const directiveName = typeof options === 'object' && 'name' in options ?
      options.name : 'float';

    Vue.directive('float', {
      inserted(el) {
        el.onkeypress = (event) => {
          const approvalKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
          if (!approvalKeys.includes(event.key)) {
            event.preventDefault();
          }
        };
      }
    });
  },
};

const onlyInt = {
  install(Vue, options = null) {
    const directiveName = typeof options === 'object' && 'name' in options ?
      options.name : 'int';

    Vue.directive('int', {
      inserted(el) {
        el.onkeypress = (event) => {
          const approvalKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
          if (!approvalKeys.includes(event.key)) {
            event.preventDefault();
          }
        };
      }
    });
  },
};

export { onlyFloat };

export default onlyInt;
