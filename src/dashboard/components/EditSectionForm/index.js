import React, { Component } from 'react';
import { Form, Select, Icon, Input, Button, Row, Col, Cascader, InputNumber } from 'antd';
import styles from './styles.scss';
import { connect } from 'dva';
import { message, Modal } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class editSectionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    const { dispatch } = this.props;
    const values = this.props.form.getFieldsValue();
    let { section, index } = this.props;
    section.value = Object.assign([], section.value);
    section.value[index || 0] = values;
    console.info('section__', section, values);
    dispatch({
      type: 'sections/patch',
      payload: { section },
    }).then(() => {
      // this.props.history.push(`/dashboard/`);
      message.success('保存成功', 2);
    });
  }
  addListItem = (field) => {
    const { form } = this.props;
    let counts = form.getFieldValue(`list-item-${field}`) || [0];
    counts = counts.concat(counts.length);
    console.info(`addListItem__list-item-${field}`, counts);
    form.setFieldsValue({
      [`list-item-${field}`]: counts
    });
  }
  removeListField = (field, k) => {
    const { form } = this.props;
    const keys = form.getFieldValue(`list-item-${field}`);
    console.info(`removeListField___list-item-${field}`);
    console.info('removeListField_', field, 'k', k, 'keys', keys);
    if (keys.length === 1) {
      return;
    }

    form.setFieldsValue({
      [`list-item-${field}`]: keys.filter((key, idx) => idx !== k)
    });
  }
  showModal = (e) => {
    this.setState({
      visible: true
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false
    });
  }
  removeItem = (e) => {
    const { section, dispatch, index } = this.props;
    dispatch({
      type: 'sections/removeItem',
      payload: { index, id: section._id },
    }).then(() => {
      message.success('删除成功');
      this.props.history.push(`/dashboard/`);
    });
  }

  render() {
    const _this = this;
    const { section, index } = this.props;
    if (!section) {
      return '';
    }
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const removeBtn = (
      <Button className={styles.submit} type="danger" onClick={this.showModal}>删除</Button>
    );
    const removeModal = (
      <Modal
        title="删除确认"
        cancelText="取消"
        okText="确定"
        okType="danger"
        visible={this.state.visible}
        onOk={this.removeItem}
        onCancel={this.handleCancel}
      >
        <p>确定删除本项吗？</p>
      </Modal>
    );
    const { isList, value } = section;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const submitLayout = {
      wrapperCol: { span: 14, offset: 6 },
    };
    const fields = section && section.fields;
    let item;
    if (index >= 0 && section && section.value) {
      item = section.value[index];
    }

    const fieldItems = fields && fields.map((field, index) => {
      // if (!field.caption) {
      //   return;
      // }
      let tag;
      switch (field.type) {
        case 'String':
          tag = getFieldDecorator(`${field.name}`, {
            rules: [{ required: true, message: `请输入${field.caption}` }],
            initialValue: item && item[field.name] || ''
          })(<Input name={field.name} placeholder={field.placeholder} />);
          break;
        case 'List':
          const fieldsList = field.list || [];
          const _getListEl = (item, idx) => {
            return fieldsList && fieldsList.map((list, key) => {
              if (!list.caption) {
                return;
              }
              return (
                <FormItem
                  {...formItemLayout}
                  label={list.caption}
                  hasFeedback
                  key={key}
                >
                  {getFieldDecorator(`${field.name}-${list.name}-${idx}`, {
                    rules: [{ required: true, message: `请输入${list.caption}` }],
                    initialValue: item && item[list.name] || ''
                  })(<Input placeholder={list.placeholder || ''} />)}
                </FormItem>
              );
            })
          }
          getFieldDecorator(`list-item-${field.name}`, { initialValue: item && item[field.name] || [0] });
          const listItems = getFieldValue(`list-item-${field.name}`);
          console.info('getFieldDecorator_listItems', listItems, field.name);
          const listEls = listItems && listItems.map((item, idx) => {
            const listEl = _getListEl(item, idx);
            return (
              <div className={styles.card}>
                {listEl}
                {listItems.length > 1 ? (
                  <Icon
                    className={`${styles['dynamic-delete-button']} ${styles.remove}`}
                    type="close"
                    disabled={listItems.length === 1}
                    onClick={() => this.removeListField(field.name, idx)}
                  />
                ) : null}
              </div>
            );
          });
          tag = (
            <div className={styles.card}>
              {listEls}
              <Button type="dashed" onClick={() => { _this.addListItem(field.name) }} style={{ width: '60%' }}>
                <Icon type="plus" /> 添加{field.caption}
              </Button>
            </div>
          );
          break;
        case 'Object':
        case 'Paragraph':
          tag = getFieldDecorator(`${field.name}`, {
            rules: [{ message: `请输入${field.caption}` }],
            initialValue: item && item[field.name] || ''
          })(<TextArea autosize name={field.name} />);
      }
      return (
        <FormItem
          {...formItemLayout}
          label={field.caption}
          key={index}
        >
          {tag}
        </FormItem>
      );
    });
    let order_el = '';
    if (isList && value.length > 1) {
      const option_el = value.map((doc, idx) => {
        return <Option value={idx + 1} key={idx}>{idx + 1}</Option>
      });
      order_el = isList ?
        <FormItem
          {...formItemLayout}
          label="排位"
        >
          {getFieldDecorator(`order`, { initialValue: +index + 1 })(
            <Select>
              {option_el}
            </Select>
          )}
        </FormItem>
        : '';
    }


    return (
      <Form onSubmit={this.handleSubmit} >
        {order_el}
        {fieldItems}
        <FormItem {...submitLayout}>
          <Button className={styles.submit} type="primary" htmlType="submit">保存</Button>
        </FormItem >
        <FormItem {...submitLayout}>
          {removeBtn}
          {removeModal}
        </FormItem >
      </Form >
    );
  }
}

function mapStateToProps(state) {
  const { list, total, page } = state.sections;
  return {
    loading: state.loading.models.sections,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(editSectionForm);
