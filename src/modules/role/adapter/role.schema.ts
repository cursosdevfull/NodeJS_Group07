import Joi from 'joi';

const paramId = Joi.object({
  id: Joi.number().required(),
});
const schemas = {
  LIST_ONE: { params: paramId },
  LIST_BY_PAGE: {
    params: Joi.object({
      page: Joi.number().min(0).required(),
    }),
  },
  INSERT: {
    body: Joi.object({
      name: Joi.string().required(),
    }),
  },
  UPDATE: {
    body: Joi.object({
      name: Joi.string(),
    }),
  },
  REMOVE: { params: paramId },
};

export default schemas;
