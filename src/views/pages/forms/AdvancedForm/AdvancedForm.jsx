import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './AdvancedForm.styles';

class AdvancedForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('AdvancedForm will mount');
  }

  componentDidMount = () => {
    console.log('AdvancedForm mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('AdvancedForm will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('AdvancedForm will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('AdvancedForm did update');
  }

  componentWillUnmount = () => {
    console.log('AdvancedForm will unmount');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Advanced Form Elements
      <small>Preview</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li><a href="#">Forms</a></li>
            <li className="active">Advanced Elements</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          {/* SELECT2 EXAMPLE */}
          <div className="box box-default">
            <div className="box-header with-border">
              <h3 className="box-title">Select2</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" /></button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-remove" /></button>
              </div>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Minimal</label>
                    <select className="form-control select2" style={{ width: '100%' }}>
                      <option selected="selected">Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>
                  {/* /.form-group */}
                  <div className="form-group">
                    <label>Disabled</label>
                    <select className="form-control select2" disabled="disabled" style={{ width: '100%' }}>
                      <option selected="selected">Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>
                  {/* /.form-group */}
                </div>
                {/* /.col */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Multiple</label>
                    <select className="form-control select2" multiple="multiple" data-placeholder="Select a State" style={{ width: '100%' }}>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>
                  {/* /.form-group */}
                  <div className="form-group">
                    <label>Disabled Result</label>
                    <select className="form-control select2" style={{ width: '100%' }}>
                      <option selected="selected">Alabama</option>
                      <option>Alaska</option>
                      <option disabled="disabled">California (disabled)</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>
                  {/* /.form-group */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.box-body */}
            <div className="box-footer">
              Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
              the plugin.
      </div>
          </div>
          {/* /.box */}
          <div className="row">
            <div className="col-md-6">
              <div className="box box-danger">
                <div className="box-header">
                  <h3 className="box-title">Input masks</h3>
                </div>
                <div className="box-body">
                  {/* Date dd/mm/yyyy */}
                  <div className="form-group">
                    <label>Date masks:</label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-calendar" />
                      </div>
                      <input type="text" className="form-control" data-inputmask="'alias': 'dd/mm/yyyy'" data-mask />
                    </div>
                    {/* /.input group */}
                  </div>
                  {/* /.form group */}
                  {/* Date mm/dd/yyyy */}
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-calendar" />
                      </div>
                      <input type="text" className="form-control" data-inputmask="'alias': 'mm/dd/yyyy'" data-mask />
                    </div>
                    {/* /.input group */}
                  </div>
                  {/* /.form group */}
                  {/* phone mask */}
                  <div className="form-group">
                    <label>US phone mask:</label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-phone" />
                      </div>
                      <input type="text" className="form-control" data-inputmask="&quot;mask&quot;: &quot;(999) 999-9999&quot;" data-mask />
                    </div>
                    {/* /.input group */}
                  </div>
                  {/* /.form group */}
                  {/* phone mask */}
                  <div className="form-group">
                    <label>Intl US phone mask:</label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-phone" />
                      </div>
                      <input type="text" className="form-control" data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']" data-mask />
                    </div>
                    {/* /.input group */}
                  </div>
                  {/* /.form group */}
                  {/* IP mask */}
                  <div className="form-group">
                    <label>IP mask:</label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-laptop" />
                      </div>
                      <input type="text" className="form-control" data-inputmask="'alias': 'ip'" data-mask />
                    </div>
                    {/* /.input group */}
                  </div>
                  {/* /.form group */}
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
              <div className="box box-info">
                <div className="box-header">
                  <h3 className="box-title">Color &amp; Time Picker</h3>
                </div>
                <div className="box-body">
                  {/* Color Picker */}
                  <div className="form-group">
                    <label>Color picker:</label>
                    <input type="text" className="form-control my-colorpicker1" />
                  </div>
                  {/* /.form group */}
                  {/* Color Picker */}
                  <div className="form-group">
                    <label>Color picker with addon:</label>
                    <div className="input-group my-colorpicker2">
                      <input type="text" className="form-control" />
                      <div className="input-group-addon">
                        <i />
                      </div>
                    </div>
                    {/* /.input group */}
                  </div>
                  {/* /.form group */}
                  {/* time Picker */}
                  <div className="bootstrap-timepicker">
                    <div className="form-group">
                      <label>Time picker:</label>
                      <div className="input-group">
                        <input type="text" className="form-control timepicker" />
                        <div className="input-group-addon">
                          <i className="fa fa-clock-o" />
                        </div>
                      </div>
                      {/* /.input group */}
                    </div>
                    {/* /.form group */}
                  </div>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col (left) */}
            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header">
                  <h3 className="box-title">Date picker</h3>
                </div>
                <div className="box-body">
                  {/* Date */}
                  <div className="form-group">
                    <label>Date:</label>
                    <div className="input-group date">
                      <div className="input-group-addon">
                        <i className="fa fa-calendar" />
                      </div>
                      <input type="text" className="form-control pull-right" id="datepicker" />
                    </div>
                    {/* /.input group */}
                  </div>
                  {/* /.form group */}
                  {/* Date range */}
                  <div className="form-group">
                    <label>Date range:</label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-calendar" />
                      </div>
                      <input type="text" className="form-control pull-right" id="reservation" />
                    </div>
                    {/* /.input group */}
                  </div>
                  {/* /.form group */}
                  {/* Date and time range */}
                  <div className="form-group">
                    <label>Date and time range:</label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-clock-o" />
                      </div>
                      <input type="text" className="form-control pull-right" id="reservationtime" />
                    </div>
                    {/* /.input group */}
                  </div>
                  {/* /.form group */}
                  {/* Date and time range */}
                  <div className="form-group">
                    <label>Date range button:</label>
                    <div className="input-group">
                      <button type="button" className="btn btn-default pull-right" id="daterange-btn">
                        <span>
                          <i className="fa fa-calendar" /> Date range picker
                  </span>
                        <i className="fa fa-caret-down" />
                      </button>
                    </div>
                  </div>
                  {/* /.form group */}
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
              {/* iCheck */}
              <div className="box box-success">
                <div className="box-header">
                  <h3 className="box-title">iCheck - Checkbox &amp; Radio Inputs</h3>
                </div>
                <div className="box-body">
                  {/* Minimal style */}
                  {/* checkbox */}
                  <div className="form-group">
                    <label>
                      <input type="checkbox" className="minimal" defaultChecked />
                    </label>
                    <label>
                      <input type="checkbox" className="minimal" />
                    </label>
                    <label>
                      <input type="checkbox" className="minimal" disabled />
                      Minimal skin checkbox
              </label>
                  </div>
                  {/* radio */}
                  <div className="form-group">
                    <label>
                      <input type="radio" name="r1" className="minimal" defaultChecked />
                    </label>
                    <label>
                      <input type="radio" name="r1" className="minimal" />
                    </label>
                    <label>
                      <input type="radio" name="r1" className="minimal" disabled />
                      Minimal skin radio
              </label>
                  </div>
                  {/* Minimal red style */}
                  {/* checkbox */}
                  <div className="form-group">
                    <label>
                      <input type="checkbox" className="minimal-red" defaultChecked />
                    </label>
                    <label>
                      <input type="checkbox" className="minimal-red" />
                    </label>
                    <label>
                      <input type="checkbox" className="minimal-red" disabled />
                      Minimal red skin checkbox
              </label>
                  </div>
                  {/* radio */}
                  <div className="form-group">
                    <label>
                      <input type="radio" name="r2" className="minimal-red" defaultChecked />
                    </label>
                    <label>
                      <input type="radio" name="r2" className="minimal-red" />
                    </label>
                    <label>
                      <input type="radio" name="r2" className="minimal-red" disabled />
                      Minimal red skin radio
              </label>
                  </div>
                  {/* Minimal red style */}
                  {/* checkbox */}
                  <div className="form-group">
                    <label>
                      <input type="checkbox" className="flat-red" defaultChecked />
                    </label>
                    <label>
                      <input type="checkbox" className="flat-red" />
                    </label>
                    <label>
                      <input type="checkbox" className="flat-red" disabled />
                      Flat green skin checkbox
              </label>
                  </div>
                  {/* radio */}
                  <div className="form-group">
                    <label>
                      <input type="radio" name="r3" className="flat-red" defaultChecked />
                    </label>
                    <label>
                      <input type="radio" name="r3" className="flat-red" />
                    </label>
                    <label>
                      <input type="radio" name="r3" className="flat-red" disabled />
                      Flat green skin radio
              </label>
                  </div>
                </div>
                {/* /.box-body */}
                <div className="box-footer">
                  Many more skins available. <a href="http://fronteed.com/iCheck/">Documentation</a>
                </div>
              </div>
              {/* /.box */}
            </div>
            {/* /.col (right) */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
      </div>

    );
  }
}

AdvancedForm.propTypes = {
  // bla: PropTypes.string,
};

AdvancedForm.defaultProps = {
  // bla: 'test',
};

export default AdvancedForm;
