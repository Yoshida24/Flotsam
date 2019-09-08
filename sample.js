(function(){
  // let mapper = {flag_name, flag_id, act_id, act_param_key, act_param_regex};

  let dmlBuilder = {
    build: function() {
      let flagName = $('.flag_name').val();
      let flagId = $('.flag_id').val();
      let actId = $('.act_id').val();
      let actName = $('.act_name').val();
      let actParamKey = $('.act_param_key').val();
      let actParamRegex = $('.act_param_regex').val();

      let dml = `{
        \t"name": "${actName}",
        \t\t"selector": [
        \t\t\t{
        \t\t\t\t"name": "activities.custom.${actId}",
        \t\t\t\t"params": {
        \t\t\t\t"${actParamKey}": {
        \t\t\t\t\t"regex": "${actParamRegex}"
        \t\t\t\t}
        \t\t\t}
        \t\t}
        \t],
        \t"condition": [],
        \t"action": {
        \t\t"counters.custom.${actId}.total =": "{{params.${actId}}}"
        \t}
        }`;

      return dml;
    }
  };

  let dispatcher = {
    dispatch: function() {
      $(document).on('change input', function() {
        //$('textarea').val(that.dmlBuilder.build());
      };
    }
  };

  $('textarea').val('place holder');
  dispatcher.dispatch();
})();
