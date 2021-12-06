import Joi from 'joi';

const paramId = Joi.object({
  id: Joi.number().required(),
});

export const schemas = {
  LIST_ONE: {
    params: paramId,
  },
  LIST_BY_PAGE: {
    params: Joi.object({
      page: Joi.number().min(0).required(),
    }),
  },
  INSERT: {
    body: Joi.object({
      name: Joi.string().required(),
      surname: Joi.string().required(),
      lastname: Joi.string().required(),
    }),
  },
  UPDATE: {
    params: paramId,
    body: Joi.object({
      name: Joi.string(),
      surname: Joi.string(),
      lastname: Joi.string(),
    }),
  },
  REMOVE: {
    params: paramId,
  },
};
