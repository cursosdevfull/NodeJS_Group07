import Joi from 'joi';

/* export const UserSchema: Joi.ObjectSchema = Joi.object({
  id: Joi.number().integer(),
});
 */

export const UserSchema = {
  POST: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    photo: Joi.string().required(),
    roles: Joi.array().required(),
  }),
};
