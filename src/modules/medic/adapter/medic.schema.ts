import Joi from "joi";

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
      cmp: Joi.string().pattern(new RegExp("[0-9]{4,8}")).required(),
      email: Joi.string().email(),
      dni: Joi.string().pattern(new RegExp("[0-9]{8,8}")).required(),
    }),
  },
  UPDATE: {
    params: paramId,
    body: Joi.object({
      name: Joi.string(),
      surname: Joi.string(),
      lastname: Joi.string(),
      cmp: Joi.string().pattern(new RegExp("[0-9]{4,8}")),
      email: Joi.string().email(),
      dni: Joi.string().pattern(new RegExp("[0-9]{8,8}")),
    }),
  },
  REMOVE: {
    params: paramId,
  },
};
