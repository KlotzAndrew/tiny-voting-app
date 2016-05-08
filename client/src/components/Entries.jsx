import PureRenderMixin from 'react-addons-pure-render-mixin';
import React from 'react';

export default React.createClass({
  mixins: [PureRenderMixin],
  mapEntries: function () {
    const entries = this.props.entries || [];
    const results = [];

    entries.map(function (e, i) {
      results.push(
        <div>
          {i + 1}) {e}
        </div>);
    });

    return results;
  },
  render: function () {
    return (
      <div>
        {this.mapEntries()}
      </div>
    );
  },
});

