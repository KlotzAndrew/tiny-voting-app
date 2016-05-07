import PureRenderMixin from 'react-addons-pure-render-mixin';
import React from 'react';

export default React.createClass({
  mixins: [PureRenderMixin],
  _mapEntries: function() {
    let entries = this.props.entries || [];
    let results = [];

    entries.map(function(e, i) {
      results.push(
        <div>
          {i+1}) {e}
        </div>)
    });

    return results
  },
  render: function() {
    return(
      <div>
        {this._mapEntries()}
      </div>
    )
  }
})


