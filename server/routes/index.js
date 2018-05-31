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
  fields.length > 0 && fields.map((i) => {
    const field = {
      caption: section[`caption-${i}`],
      name: section[`name-${i}`],
      type: section[`type-${i}`],
      placeholder: section[`placeholder-${i}`]
    };
    if (section[`type-${i}`] === 'List') {
      const fieldList = section[`field-${i}-list`];
      field.list = [];
      fieldList.map((idx) => {
        field.list.push({
          name: section[`name-${i}-${idx}`],
          caption: section[`caption-${i}-${idx}`],
          placeholder: section[`placeholder-${i}-${idx}`],
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
    sectionClone.value = sectionClone.value.map(item => {
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
  }
  console.info('sectionClone__', sectionClone);
  return Section.findOneAndUpdate({ name: section.name }, { $set: sectionClone }).then(section => {
    console.info('sectionClone__||', section);
    return ctx.body = {};
  });
});
router.delete('/api/section', (ctx, next) => {
  const section = ctx.request.body;
  return Section.remove({ _id: section.id }).then(() => {
    return ctx.body = {};
  })
  console.info('delete__', section);
});
router.get('/dashboard/*', (ctx, next) => {
  return ctx.render('dashboard');
});
router.get('*', function (ctx, next) {
  return ctx.render('index', { title: '清泉工作室' });
});

module.exports = router;
