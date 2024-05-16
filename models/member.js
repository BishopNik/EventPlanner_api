/** @format */

import { Schema, model } from 'mongoose';
import Joi from 'joi';
import { handleMongooseError, addUpdateSettings } from '../utils/index.js';

const memberSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Set name for member'],
		},
		email: {
			type: String,
			required: [true, 'Set email for member'],
		},
		dateBth: {
			type: String,
			required: [true, 'Set date of birth for member'],
		},
		hear: {
			type: String,
			required: [true, 'Where did you hear about this event?'],
		},
		event: {
			type: String,
			required: [true, 'Set event for member'],
		},
	},
	{ versionKey: false, timestamps: true }
);

memberSchema.post('save', handleMongooseError);
memberSchema.pre('findOneAndUpdate', addUpdateSettings);
memberSchema.post('findOneAndUpdate', handleMongooseError);

export const memberAddSchema = Joi.object({
	name: Joi.string().required().messages({
		message: 'Missing required name field',
	}),
	email: Joi.string().required().messages({
		message: 'Missing required email field',
	}),
	dateBth: Joi.string().required().messages({
		message: 'Missing required date of birth field',
	}),
	hear: Joi.string().required().messages({
		message: 'Missing required hear field',
	}),
	event: Joi.string().required().messages({
		message: 'Missing required event field',
	}),
});

export const Members = model('member', memberSchema);
