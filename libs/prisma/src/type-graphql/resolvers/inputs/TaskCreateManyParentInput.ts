import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TaskCreateManyParentInput", {
  isAbstract: true
})
export class TaskCreateManyParentInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projectId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  creatorId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  details!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chatId?: string | undefined;
}
