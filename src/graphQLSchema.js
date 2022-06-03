import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	attendanceQueries,
	attendanceTypeDef,
	attendanceMutations
} from './aaw/attendance/typeDefs';

import {
	classQueries,
	classTypeDef,
	classMutations
} from './aaw/classes/typeDefs';

import {
	studentQueries,
	studentTypeDef,
	studentMutations
} from './aaw/students/typeDefs';

import {
	noteQueries,
	noteTypeDef,
	noteMutations
} from './aaw/notes/typeDefs';




import attendanceResolvers from './aaw/attendance/resolvers';
import classResolvers from './aaw/classes/resolvers';
import studentResolvers from './aaw/students/resolvers';
import noteResolvers from './aaw/notes/resolvers';
import dateresolver from './aaw/scalar/dateResolver';
//import productResolvers from './aaw/products/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		attendanceTypeDef,
		classTypeDef,
		studentTypeDef,
		noteTypeDef
	],
	[
		attendanceQueries,
		classQueries,
		studentQueries,
		noteQueries
	],
	[
		attendanceMutations,
		classMutations,
		studentMutations,
		noteMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		dateresolver,
		attendanceResolvers,
		classResolvers,
		studentResolvers,
		noteResolvers
	)
});
