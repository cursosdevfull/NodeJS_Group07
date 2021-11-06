import Joi from 'joi';

export const UserSchema: Joi.ObjectSchema = Joi.object({
  id: Joi.number().integer(),
});
