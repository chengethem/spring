const Router = require('koa-router');
const router = Router();
const Section = require('../data/section');

router.get('/api/sections', (ctx, next) => {
  return Section.find().then(docs => {
    return ctx.body = docs;
  });
});
router.post('/api/sections', (ctx, next) => {
  console.info('post/api/section__', ctx.request.body);
  const { section } = ctx.request.body;
  const { caption, name, isList, fields } = section;
  const new_section = Object.assign({}, { caption, name, isList, fields: [] });
  fields.length > 0 && fields.map((i, index) => {
    const field = {
      caption: section[`caption-${index}`],
      name: section[`name-${index}`],
      type: section[`type-${index}`],
      placeholder: section[`placeholder-${index}`]
    };
    if (section[`type-${index}`] === 'List') {
      const fieldList = section[`field-${index}-list`];
      field.list = [];
      fieldList.map((idx) => {
        field.list.push({
          name: section[`name-${index}-${idx}`],
          caption: section[`caption-${index}-${idx}`],
          placeholder: section[`placeholder-${index}-${idx}`],
        });
      });
    }
    new_section.fields.push(field);
  });

  return Section.create(new_section).then(section => {
    ctx.body = { message: 'ok' };
  });
});
router.patch('/api/section', (ctx, next) => {
  const { section } = ctx.request.body;
  let sectionClone = Object.assign({}, section);
  console.info('section__', section);
  let value = sectionClone.value;
  let change_order;
  let change_index;
  if (section.eidtField) {
    delete sectionClone.eidtField;
    let fields = section.fields;
    sectionClone.fields = fields.length > 0 && fields.map((key, i) => {
      const field = {
        caption: section[`caption-${i}`],
        name: section[`name-${i}`],
        type: section[`type-${i}`],
        placeholder: section[`placeholder-${i}`]
      };
      console.info('field__', field);
      if (section[`type-${i}`] === 'List') {
        const fieldList = section[`field-${i}-list`];
        field.list = [];
        fieldList && fieldList.map((item, idx) => {
          if (!section[`name-${i}-${idx}`]) {
            return;
          }
          field.list.push({
            name: section[`name-${i}-${idx}`],
            caption: section[`caption-${i}-${idx}`],
            placeholder: section[`placeholder-${i}-${idx}`],
          });
        });
      }
      return field;
    });
  }
  if (sectionClone.value) {
    sectionClone.value = sectionClone.value.map((item, item_index) => {
      if (item.order) {
        change_order = +item.order - 1;
        change_index = item_index;
        delete item.order;
      }
      sectionClone.fields.map(field => {
        let list;
        if (field.type === 'List') {
          list = item[`list-item-${field.name}`];
          delete item[`list-item-${field.name}`];
          item[field.name] = typeof item[field.name] === 'object' ? item[field.name] : [];
          list && list.map((listItem, idx) => {
            const fieldItems = field.list;
            const doc = {};
            fieldItems && fieldItems.map((fieldItem) => {
              doc[fieldItem.name] = item[`${field.name}-${fieldItem.name}-${idx}`];
              delete item[`${field.name}-${fieldItem.name}-${idx}`];
            });
            item[field.name].push(doc);
          });
        }
      });
      console.info('sectionClone', item);
      return item;
    });

    //更换顺序
    if (change_order >= 0 && change_order != change_index) {
      let temp = sectionClone.value[change_index];
      sectionClone.value.splice(change_index, 1);
      sectionClone.value.splice(change_order, 0, temp);
      // sectionClone.value[change_order] = sectionClone.value[change_index];
      // sectionClone.value[change_index] = temp;
    }
  }
  // console.info('sectionClone__', sectionClone);
  return Section.findOneAndUpdate({ name: section.name }, { $set: sectionClone }).then(section => {
    // console.info('sectionClone__||', section);
    return ctx.body = {};
  });
});

//删除模块
router.delete('/api/section', (ctx, next) => {
  const section = ctx.request.body;
  return Section.remove({ _id: section.id }).then(() => {
    return ctx.body = {};
  })
  console.info('delete__', section);
});

//删除项目
router.delete('/api/section_value', (ctx, next) => {
  const section = ctx.request.body;
  const { index, id } = section;
  console.info('delete_value', section, typeof section.index);
  return Section.findOne({ _id: id }).then(doc => {
    doc.value.splice(+index, 1);
    return Section.findOneAndUpdate({ _id: id }, { $set: doc }).then(section => {
      return ctx.body = {};
    });
  });
  // return Section.remove({ _id: section.id }).then(() => {
  //   return ctx.body = {};
  // })
  // console.info('delete__', section);
});
router.get('/dashboard/*', (ctx, next) => {
  return ctx.render('dashboard');
});
router.get('/browser', (ctx, next) => {
  // console.log(ctx.request.headers['user-agent']);
  return ctx.body = ctx.request.headers['user-agent'];
});
router.get('/m/*', function (ctx, next) {
  return ctx.render('mindex', { title: '清泉工作室' });
});
router.get('*', function (ctx, next) {
  const ua = ctx.request.headers['user-agent'];
  if (ua.indexOf('iPhone') != -1 || ua.indexOf('Android') != -1) {
    return ctx.render('mindex', { title: '清泉工作室' });
  }
  return ctx.render('index', { title: '清泉工作室' });
});

module.exports = router;
