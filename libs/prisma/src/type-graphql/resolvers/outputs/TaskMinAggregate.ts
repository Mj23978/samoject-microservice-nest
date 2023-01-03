import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TaskMinAggregate", {
  isAbstract: true
})
export class TaskMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projectId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  creatorId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  details!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chatId!: string | null;
}
